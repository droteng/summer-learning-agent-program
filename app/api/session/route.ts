import { NextResponse } from "next/server";
import { publicSessionView } from "../../../src/agents/accountAgent.js";
import { deleteAuthSession, loadAuthSession } from "../../../src/data/localDb.js";

export const runtime = "nodejs";
const sessionCookieName = "learning_squad_session";

export async function GET(request: Request) {
  const sessionId = request.headers
    .get("cookie")
    ?.split(";")
    .map((item) => item.trim())
    .find((item) => item.startsWith(`${sessionCookieName}=`))
    ?.split("=")[1];
  const session = sessionId ? publicSessionView(loadAuthSession(sessionId)) : null;

  return NextResponse.json({
    status: session ? "signed_in" : "signed_out",
    session
  });
}

export async function DELETE(request: Request) {
  const sessionId = request.headers
    .get("cookie")
    ?.split(";")
    .map((item) => item.trim())
    .find((item) => item.startsWith(`${sessionCookieName}=`))
    ?.split("=")[1];

  if (sessionId) {
    deleteAuthSession(sessionId);
  }

  const response = NextResponse.json({
    status: "signed_out"
  });
  response.cookies.set(sessionCookieName, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    expires: new Date(0)
  });

  return response;
}
