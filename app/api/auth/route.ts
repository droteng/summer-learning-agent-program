import { NextResponse } from "next/server";
import { verifyRoleSignIn } from "../../../src/agents/authAgent.js";
import { verifyAccountSignIn } from "../../../src/agents/accountAgent.js";
import { loadFamilyAccount } from "../../../src/data/localDb.js";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const payload = await request.json();
  const account = loadFamilyAccount();
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

  return NextResponse.json(result, {
    status: result.status === "signed_in" ? 200 : 401
  });
}
