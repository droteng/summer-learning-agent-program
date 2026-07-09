import { NextResponse } from "next/server";
import { signinParent, COOKIE_NAME } from "../../../../src/agents/authAgent.js";
import { clientIpFrom, rateLimit, tooManyRequests } from "../../../lib/rate-limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const limited = rateLimit({
    key: `signin:${clientIpFrom(request)}`,
    limit: 10,
    windowMs: 15 * 60 * 1000
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

  const result = await signinParent({
    email: body?.email,
    password: body?.password
  });

  if (result.status === "error") {
    return NextResponse.json(
      { error: result.code, message: result.message },
      { status: 401 }
    );
  }

  const res = NextResponse.json({
    ok: true,
    parentName: result.account.parent.name
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
