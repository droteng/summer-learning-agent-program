import { NextResponse } from "next/server";
import { signinChild, COOKIE_NAME } from "../../../../src/agents/authAgent.js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  let body: any;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const result = await signinChild({
    email: body?.email,
    pin: body?.pin
  });

  if (result.status === "error") {
    return NextResponse.json(
      { error: result.code, message: result.message },
      { status: 401 }
    );
  }

  const res = NextResponse.json({
    ok: true,
    childId: result.childId,
    childName: result.account.children[0]?.firstName
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
