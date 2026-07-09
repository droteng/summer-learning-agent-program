import { NextResponse } from "next/server";
import {
  consumeEmailToken,
  setNewPassword,
  createAccountSession,
  TOKEN_KINDS,
  COOKIE_NAME
} from "../../../../src/agents/authAgent.js";
import { clientIpFrom, rateLimit, tooManyRequests } from "../../../lib/rate-limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const limited = rateLimit({
    key: `pw-reset:${clientIpFrom(request)}`,
    limit: 10,
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

  const token = typeof body?.token === "string" ? body.token : null;
  const newPassword = typeof body?.password === "string" ? body.password : null;

  if (!token) {
    return NextResponse.json({ error: "missing_token" }, { status: 400 });
  }
  if (!newPassword || newPassword.length < 8) {
    return NextResponse.json(
      { error: "weak_password", message: "Password must be at least 8 characters." },
      { status: 400 }
    );
  }

  const consumed = await consumeEmailToken({ token, kind: TOKEN_KINDS.RESET_PASSWORD });
  if (!consumed) {
    return NextResponse.json(
      { error: "invalid_token", message: "This reset link is invalid or expired. Request a new one." },
      { status: 400 }
    );
  }

  const result = await setNewPassword({
    accountId: consumed.account.id,
    newPassword
  });
  if (result.status !== "ok") {
    return NextResponse.json({ error: result.code, message: result.message }, { status: 400 });
  }

  // Reset = implicit sign-in. Mint a fresh session.
  const session = await createAccountSession({
    accountId: consumed.account.id,
    role: "parent",
    childId: null
  });

  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE_NAME, session.id, {
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
