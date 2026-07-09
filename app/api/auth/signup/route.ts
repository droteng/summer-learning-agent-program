import { NextResponse } from "next/server";
import {
  signupParent,
  mintEmailToken,
  COOKIE_NAME,
  TOKEN_KINDS
} from "../../../../src/agents/authAgent.js";
import { createEmailSender } from "../../../../src/integrations/email.js";
import { clientIpFrom, rateLimit, tooManyRequests } from "../../../lib/rate-limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const limited = rateLimit({
    key: `signup:${clientIpFrom(request)}`,
    limit: 5,
    windowMs: 60 * 60 * 1000
  });
  if (!limited.ok) {
    const { body: errBody, init } = tooManyRequests(limited.retryAfterSeconds);
    return NextResponse.json(errBody, init);
  }

  let body: any;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const result = await signupParent({
    email: body?.email,
    password: body?.password,
    parentName: body?.parentName,
    childName: body?.childName,
    childPin: body?.childPin
  });

  if (result.status === "error") {
    return NextResponse.json(
      { error: result.code, message: result.message },
      { status: result.code === "email_taken" ? 409 : 400 }
    );
  }

  // Fire-and-forget verification email. Don't block signup on email
  // delivery — the parent can resend later from the dashboard banner.
  (async () => {
    try {
      const token = await mintEmailToken({
        accountId: result.account.id,
        email: result.account.parent.email,
        kind: TOKEN_KINDS.VERIFY_EMAIL
      });
      const appUrl = process.env.APP_URL ?? new URL(request.url).origin;
      const link = `${appUrl}/api/auth/verify-email?token=${encodeURIComponent(token)}`;
      await createEmailSender().send({
        to: result.account.parent.email,
        subject: "Welcome — verify your Dr. Spark Academy email",
        html: `<p>Welcome to Dr. Spark Academy!</p>
<p>Verify your email to receive weekly reports and password-reset links:</p>
<p><a href="${link}" style="display:inline-block;padding:10px 20px;background:#f97316;color:white;border-radius:999px;text-decoration:none;font-weight:700">Verify email</a></p>
<p>Link expires in 24 hours.</p>`,
        text: `Verify your Dr. Spark Academy email: ${link}`
      });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("[signup_verify_email] send failed", err);
    }
  })();

  const res = NextResponse.json({
    ok: true,
    parentName: result.account.parent.name,
    childName: result.account.children[0]?.firstName
  });
  res.cookies.set(COOKIE_NAME, result.sessionId, {
    httpOnly: true,
    // Secure everywhere except explicit local dev — an unset NODE_ENV on a
    // staging host must not downgrade the session cookie to plain HTTP.
    secure: process.env.NODE_ENV !== "development",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 14
  });
  return res;
}
