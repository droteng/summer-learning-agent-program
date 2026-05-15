// Founder's Book download endpoint.
//
// Streams (via redirect) the Vercel Blob URL pointed to by BOOK_PDF_BLOB_URL
// to any student whose entitlement has the FOUNDER_BOOK feature unlocked
// (any paid tier). Free tier and unknown students see a 402 with a CTA
// to the billing page.
//
// The actual file lives on Vercel Blob — it never goes through this
// serverless function's bandwidth budget. The function just authorizes.

import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { resolveEntitlement } from "../../../src/agents/entitlementAgent.js";
import { COOKIE_NAME, currentUser } from "../../../src/agents/authAgent.js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const studentId = url.searchParams.get("student");

  if (!studentId) {
    return NextResponse.json({ error: "missing_student" }, { status: 400 });
  }

  const blobUrl = process.env.BOOK_PDF_BLOB_URL;
  if (!blobUrl) {
    return NextResponse.json(
      { error: "book_not_configured", message: "The book file hasn't been uploaded yet." },
      { status: 503 }
    );
  }

  // Read the session to pass accountId — robust to email-mismatch
  // between consent records and Stripe customer email.
  const store = await cookies();
  const sessionId = store.get(COOKIE_NAME)?.value;
  const user = await currentUser(sessionId);
  const entitlement = await resolveEntitlement({
    studentId,
    accountId: user?.accountId
  });

  if (!entitlement.founderBook) {
    return NextResponse.json(
      {
        error: "subscription_required",
        message:
          "The Founder's Book is included with every paid plan. Upgrade your subscription to download.",
        billingUrl: `/parent/billing?student=${encodeURIComponent(studentId)}`
      },
      { status: 402 }
    );
  }

  return NextResponse.redirect(blobUrl, { status: 302 });
}
