import { NextResponse } from "next/server";
import {
  consumeEmailToken,
  markEmailVerified,
  TOKEN_KINDS
} from "../../../../src/agents/authAgent.js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// GET so verification works directly from email-client click.
// Redirects on success/failure to the /parent/verify-email page,
// which renders a friendly status.
export async function GET(request: Request) {
  const url = new URL(request.url);
  const token = url.searchParams.get("token");
  const appBase = process.env.APP_URL ?? url.origin;

  if (!token) {
    return NextResponse.redirect(`${appBase}/parent/verify-email?status=missing`);
  }

  const consumed = await consumeEmailToken({ token, kind: TOKEN_KINDS.VERIFY_EMAIL });
  if (!consumed) {
    return NextResponse.redirect(`${appBase}/parent/verify-email?status=invalid`);
  }

  await markEmailVerified(consumed.account.id);
  return NextResponse.redirect(`${appBase}/parent/verify-email?status=ok`);
}
