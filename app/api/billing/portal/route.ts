import { NextResponse } from "next/server";
import { createStripeClient, StripeError } from "../../../../src/integrations/stripe.js";
import { loadSubscription } from "../../../../src/data/db.js";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let payload: any;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const parentEmail = typeof payload?.parentEmail === "string" ? payload.parentEmail.trim() : null;
  if (!parentEmail) {
    return NextResponse.json({ error: "parent_email_required" }, { status: 400 });
  }

  const apiKey = process.env.STRIPE_SECRET_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "stripe_not_configured" }, { status: 503 });
  }

  const subscription = await loadSubscription(parentEmail);
  if (!subscription?.stripeCustomerId) {
    return NextResponse.json({ error: "no_subscription_for_email" }, { status: 404 });
  }

  const baseUrl = process.env.APP_URL ?? new URL(request.url).origin;
  const returnUrl = `${baseUrl}/parent/billing`;

  try {
    const stripe = createStripeClient({ apiKey });
    const session = await stripe.createBillingPortalSession({
      customerId: subscription.stripeCustomerId,
      returnUrl
    });
    return NextResponse.json({ ok: true, url: session.url });
  } catch (err) {
    if (err instanceof StripeError) {
      return NextResponse.json({ error: err.code, message: err.message }, { status: err.status ?? 502 });
    }
    return NextResponse.json({ error: "portal_failed" }, { status: 502 });
  }
}
