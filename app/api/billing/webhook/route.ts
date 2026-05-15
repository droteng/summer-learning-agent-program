import { NextResponse } from "next/server";
import {
  StripeError,
  verifyWebhookSignature
} from "../../../../src/integrations/stripe.js";
import {
  subscriptionFromCheckoutSession,
  subscriptionFromStripeEvent
} from "../../../../src/agents/billingAgent.js";
import {
  loadSubscriptionByCustomerId,
  saveSubscription
} from "../../../../src/data/db.js";

export const runtime = "nodejs";

// Stripe needs the raw body to verify the signature; do NOT parse with json().
export async function POST(request: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) {
    return NextResponse.json({ error: "webhook_not_configured" }, { status: 503 });
  }
  const signatureHeader = request.headers.get("stripe-signature");
  const rawBody = await request.text();

  let event;
  try {
    event = verifyWebhookSignature({ rawBody, signatureHeader, secret });
  } catch (err) {
    if (err instanceof StripeError) {
      return NextResponse.json({ error: err.code }, { status: 400 });
    }
    return NextResponse.json({ error: "verification_failed" }, { status: 400 });
  }

  try {
    await dispatch(event);
  } catch (err) {
    // Stripe retries on non-2xx, so we 200 here but log loudly. Failed
    // updates surface in observability rather than as customer-facing errors.
    // eslint-disable-next-line no-console
    console.error("[stripe_webhook] dispatch_failed", err);
  }

  return NextResponse.json({ received: true });
}

async function dispatch(event: any) {
  const type = event?.type;
  if (
    type === "customer.subscription.created" ||
    type === "customer.subscription.updated" ||
    type === "customer.subscription.deleted"
  ) {
    const sub = subscriptionFromStripeEvent(event);
    if (!sub) return;
    let parentEmail = sub.parentEmail;
    let existing = null;
    if (sub.stripeCustomerId) {
      existing = await loadSubscriptionByCustomerId(sub.stripeCustomerId);
      if (!parentEmail) parentEmail = existing?.parentEmail ?? null;
    }
    if (!parentEmail) return;
    // Preserve the accountId set at checkout — Stripe sub-events don't
    // carry our client_reference_id, so we read it back from whatever
    // was stored for this customer.
    const subWithAccount = { ...sub, accountId: sub.accountId ?? existing?.accountId ?? null };
    await saveSubscription({ parentEmail, subscription: subWithAccount });
    return;
  }

  if (type === "checkout.session.completed") {
    const session = event?.data?.object;
    const customerEmail =
      session?.customer_details?.email ??
      session?.customer_email ??
      session?.metadata?.parent_email ??
      null;
    if (!customerEmail) return;

    // account_id comes from client_reference_id (preferred) or metadata.
    const accountId =
      session?.client_reference_id ?? session?.metadata?.account_id ?? null;

    // mode=payment → one-time summer pass. Build a synthetic 90-day record.
    if (session?.mode === "payment") {
      const summer = subscriptionFromCheckoutSession({ session });
      if (!summer) return;
      await saveSubscription({
        parentEmail: customerEmail,
        subscription: { ...summer, accountId }
      });
      return;
    }

    // mode=subscription → tier/dates will arrive in the customer.subscription.*
    // event right after this one. Pre-create a record so the parent isn't
    // briefly free between checkout and the subscription event.
    if (session?.subscription && session?.customer) {
      await saveSubscription({
        parentEmail: customerEmail,
        subscription: {
          stripeSubscriptionId: session.subscription,
          stripeCustomerId: session.customer,
          parentEmail: customerEmail.toLowerCase(),
          accountId,
          studentId: session?.metadata?.student_id ?? null,
          tier: null,
          status: "active",
          priceId: null,
          cadence: session?.metadata?.cadence ?? null,
          currentPeriodEnd: null,
          cancelAtPeriodEnd: false,
          updatedAt: new Date().toISOString()
        }
      });
    }
  }
}
