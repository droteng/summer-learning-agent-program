import { NextResponse } from "next/server";
import { priceIdForTier } from "../../../../src/agents/billingAgent.js";
import { createStripeClient, StripeError } from "../../../../src/integrations/stripe.js";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let payload: any;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const tier = payload?.tier;
  const cadence = payload?.cadence ?? "monthly";
  const parentEmail = typeof payload?.parentEmail === "string" ? payload.parentEmail.trim() : null;
  const studentId = typeof payload?.studentId === "string" ? payload.studentId : null;
  if (!tier || !["family", "family_plus"].includes(tier)) {
    return NextResponse.json({ error: "invalid_tier" }, { status: 400 });
  }
  if (!["monthly", "yearly"].includes(cadence)) {
    return NextResponse.json({ error: "invalid_cadence" }, { status: 400 });
  }
  if (!parentEmail) {
    return NextResponse.json({ error: "parent_email_required" }, { status: 400 });
  }

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
      { error: "missing_price_id", message: `Set STRIPE_PRICE_${tier.toUpperCase()}_${cadence.toUpperCase()} in env.` },
      { status: 503 }
    );
  }

  const baseUrl = process.env.APP_URL ?? new URL(request.url).origin;
  const successUrl = `${baseUrl}/parent/billing?status=success&session={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${baseUrl}/parent/billing?status=cancelled`;

  try {
    const stripe = createStripeClient({ apiKey });
    const session = await stripe.createCheckoutSession({
      mode: "subscription",
      priceId,
      customerEmail: parentEmail,
      successUrl,
      cancelUrl,
      metadata: studentId ? { student_id: studentId, parent_email: parentEmail } : { parent_email: parentEmail }
    });
    return NextResponse.json({ ok: true, url: session.url, sessionId: session.id });
  } catch (err) {
    if (err instanceof StripeError) {
      return NextResponse.json({ error: err.code, message: err.message }, { status: err.status ?? 502 });
    }
    return NextResponse.json({ error: "checkout_failed" }, { status: 502 });
  }
}
