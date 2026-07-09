// Starts a Stripe Setup-mode Checkout. The FTC's "monetary-transaction"
// method for verifiable parental consent under COPPA allows an adult-only
// payment-system charge (or, with documentation, a $0 authorization). Stripe
// Checkout in "setup" mode verifies the card is real without taking any
// payment, and gives us a stable customer + payment_method id pair that we
// can persist as consent evidence.

import { NextResponse } from "next/server";
import { createStripeClient, StripeError } from "../../../../../src/integrations/stripe.js";
import { authorizeStudentAccess } from "../../../../lib/auth-server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let payload: any;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const studentId = typeof payload?.studentId === "string" ? payload.studentId.trim() : null;
  const parentName = typeof payload?.parentName === "string" ? payload.parentName.trim() : null;
  const parentEmail = typeof payload?.parentEmail === "string" ? payload.parentEmail.trim() : null;
  const childFirstName = typeof payload?.childFirstName === "string" ? payload.childFirstName.trim() : null;
  if (!studentId || !parentName || !parentEmail || !childFirstName) {
    return NextResponse.json({ error: "missing_fields" }, { status: 400 });
  }

  // Only the signed-in parent of this student may start card-auth consent.
  const access = await authorizeStudentAccess(studentId, { parentOnly: true });
  if (!access.ok) {
    return NextResponse.json({ error: access.error }, { status: access.status });
  }

  const apiKey = process.env.STRIPE_SECRET_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "stripe_not_configured", message: "Set STRIPE_SECRET_KEY to enable card-auth consent." },
      { status: 503 }
    );
  }

  const baseUrl = process.env.APP_URL ?? new URL(request.url).origin;
  const successUrl = `${baseUrl}/api/consent/card-auth/complete?session={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${baseUrl}/parent/consent?student=${encodeURIComponent(studentId)}&card_auth=cancelled`;

  try {
    const stripe = createStripeClient({ apiKey });
    const session = await stripe.createCheckoutSession({
      mode: "setup",
      customerEmail: parentEmail,
      successUrl,
      cancelUrl,
      metadata: {
        student_id: studentId,
        parent_name: parentName,
        parent_email: parentEmail.toLowerCase(),
        child_first_name: childFirstName,
        intent: "coppa_card_auth"
      }
    });
    return NextResponse.json({ ok: true, url: session.url });
  } catch (err) {
    if (err instanceof StripeError) {
      return NextResponse.json({ error: err.code, message: err.message }, { status: err.status ?? 502 });
    }
    return NextResponse.json({ error: "checkout_failed" }, { status: 502 });
  }
}
