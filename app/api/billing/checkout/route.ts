import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  CADENCES,
  priceIdForTier,
  stripeCheckoutModeForCadence
} from "../../../../src/agents/billingAgent.js";
import { createStripeClient, StripeError } from "../../../../src/integrations/stripe.js";
import { COOKIE_NAME, currentUser } from "../../../../src/agents/authAgent.js";

export const runtime = "nodejs";

const ALLOWED_TIERS = new Set(["family", "family_plus"]);
const ALLOWED_CADENCES = new Set([CADENCES.SUMMER_PASS, CADENCES.MONTHLY, CADENCES.YEARLY]);

export async function POST(request: Request) {
  let payload: any;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const tier = payload?.tier;
  const cadence = payload?.cadence ?? CADENCES.SUMMER_PASS;
  if (!tier || !ALLOWED_TIERS.has(tier)) {
    return NextResponse.json({ error: "invalid_tier" }, { status: 400 });
  }
  if (!ALLOWED_CADENCES.has(cadence)) {
    return NextResponse.json({ error: "invalid_cadence" }, { status: 400 });
  }

  // Identity comes from the session, not the body — prevents charging
  // a Stripe customer under someone else's email.
  const store = await cookies();
  const sessionId = store.get(COOKIE_NAME)?.value;
  const user = await currentUser(sessionId);
  if (!user || user.role !== "parent" || !user.parentEmail) {
    return NextResponse.json(
      { error: "not_signed_in", message: "Sign in to your parent account before subscribing." },
      { status: 401 }
    );
  }
  const parentEmail = user.parentEmail;
  const accountId = user.accountId;
  const studentId = user.childId ?? null;

  const apiKey = process.env.STRIPE_SECRET_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "stripe_not_configured", message: "Set STRIPE_SECRET_KEY to enable checkout." },
      { status: 503 }
    );
  }

  const priceId = priceIdForTier({ tier, cadence });
  if (!priceId) {
    return NextResponse.json(
      {
        error: "missing_price_id",
        message: `Set STRIPE_PRICE_${tier.toUpperCase()}_${cadence === CADENCES.SUMMER_PASS ? "SUMMER" : cadence.toUpperCase()} in env.`
      },
      { status: 503 }
    );
  }

  const mode = stripeCheckoutModeForCadence(cadence);
  const baseUrl = process.env.APP_URL ?? new URL(request.url).origin;
  const successUrl = `${baseUrl}/parent/billing?status=success&session={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${baseUrl}/parent/billing?status=cancelled`;

  try {
    const stripe = createStripeClient({ apiKey });
    const session = await stripe.createCheckoutSession({
      mode,
      priceId,
      customerEmail: parentEmail,
      successUrl,
      cancelUrl,
      clientReferenceId: accountId,
      metadata: {
        account_id: accountId,
        parent_email: parentEmail,
        cadence,
        price_id: priceId,
        ...(studentId ? { student_id: studentId } : {})
      }
    });
    return NextResponse.json({ ok: true, url: session.url, sessionId: session.id });
  } catch (err) {
    if (err instanceof StripeError) {
      return NextResponse.json({ error: err.code, message: err.message }, { status: err.status ?? 502 });
    }
    return NextResponse.json({ error: "checkout_failed" }, { status: 502 });
  }
}
