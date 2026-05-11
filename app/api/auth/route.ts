import { NextResponse } from "next/server";
import { verifyRoleSignIn } from "../../../src/agents/authAgent.js";
import { createSession, verifyAccountSignIn } from "../../../src/agents/accountAgent.js";
import { loadFamilyAccount, saveAuthSession } from "../../../src/data/localDb.js";

export const runtime = "nodejs";
const sessionCookieName = "learning_squad_session";

export async function POST(request: Request) {
  const payload = await request.json();
  const account = await loadFamilyAccount();
  const result = account
    ? verifyAccountSignIn({
        account,
        role: payload.role,
        passcode: payload.passcode
      })
    : verifyRoleSignIn({
        role: payload.role,
        passcode: payload.passcode
      });

  const response = NextResponse.json(result, {
    status: result.status === "signed_in" ? 200 : 401
  });

  if (result.status === "signed_in") {
    const session = createSession({
      accountId: account?.id ?? "default-mvp",
      role: result.role
    });
    await saveAuthSession(session);
    response.cookies.set(sessionCookieName, session.id, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      expires: new Date(session.expiresAt)
    });
  }

  return response;
}
