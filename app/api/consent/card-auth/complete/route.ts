// Stripe redirects here with ?session=<id> after the parent completes the
// Setup-mode Checkout. We retrieve the session, confirm it was for our
// COPPA flow, build the consent record (method=card_auth, evidence linking
// to the Stripe customer + setup_intent), persist it, and bounce the parent
// back to /parent/consent so they see the green "Consent recorded" banner.
//
// This endpoint is GET because Stripe issues a 303 redirect to it; the
// browser navigation is the trigger.

import { NextResponse } from "next/server";
import { ConsentError, createConsentRecord } from "../../../../../src/agents/consentAgent.js";
import { createStripeClient } from "../../../../../src/integrations/stripe.js";
import { appendConsentRecord } from "../../../../../src/data/db.js";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const sessionId = url.searchParams.get("session");
  if (!sessionId) {
    return NextResponse.json({ error: "missing_session" }, { status: 400 });
  }

  const apiKey = process.env.STRIPE_SECRET_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "stripe_not_configured" }, { status: 503 });
  }

  const stripe = createStripeClient({ apiKey });

  let session: any;
  try {
    session = await stripeGet(stripe, `/checkout/sessions/${encodeURIComponent(sessionId)}`);
  } catch (err: any) {
    return NextResponse.json({ error: "session_retrieve_failed", message: err?.message }, { status: 502 });
  }

  if (session?.metadata?.intent !== "coppa_card_auth") {
    return NextResponse.json({ error: "wrong_session_intent" }, { status: 400 });
  }
  if (session?.status !== "complete") {
    const studentId = session?.metadata?.student_id ?? "";
    return NextResponse.redirect(
      new URL(
        `/parent/consent?student=${encodeURIComponent(studentId)}&card_auth=incomplete`,
        request.url
      )
    );
  }

  const baseUrl = process.env.APP_URL ?? new URL(request.url).origin;
  const studentId = session.metadata.student_id;

  try {
    const record = createConsentRecord({
      parentName: session.metadata.parent_name,
      parentEmail: session.metadata.parent_email,
      studentId,
      childFirstName: session.metadata.child_first_name,
      method: "card_auth",
      evidence: {
        stripeCustomerId: session.customer ?? null,
        stripeSetupIntentId: session.setup_intent ?? null,
        stripeSessionId: session.id,
        verifier: "stripe_setup_checkout"
      },
      userAgent: request.headers.get("user-agent")
    });
    await appendConsentRecord({ studentId, record });
  } catch (err) {
    if (err instanceof ConsentError) {
      return NextResponse.json({ error: err.code, details: err.details }, { status: 400 });
    }
    return NextResponse.json({ error: "consent_record_failed" }, { status: 500 });
  }

  return NextResponse.redirect(
    `${baseUrl}/parent/consent?student=${encodeURIComponent(studentId)}&card_auth=success`
  );
}

// Tiny helper since our Stripe client doesn't expose generic GET. We could
// add `retrieveCheckoutSession` to the client, but inlining avoids adding
// public surface for a single call site.
async function stripeGet(stripe: any, path: string) {
  const apiKey = process.env.STRIPE_SECRET_KEY!;
  const res = await fetch(`https://api.stripe.com/v1${path}`, {
    headers: {
      Authorization: `Basic ${Buffer.from(`${apiKey}:`).toString("base64")}`,
      "Stripe-Version": "2024-11-20.acacia"
    }
  });
  if (!res.ok) {
    const detail = await res.json().catch(() => null);
    throw new Error(detail?.error?.message ?? `stripe_${res.status}`);
  }
  return await res.json();
}
