import { NextResponse } from "next/server";
import { signinParent, COOKIE_NAME } from "../../../../src/agents/authAgent.js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
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
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 14
  });
  return res;
}
