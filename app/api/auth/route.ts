import { NextResponse } from "next/server";
import { verifyRoleSignIn } from "../../../src/agents/authAgent.js";

export async function POST(request: Request) {
  const payload = await request.json();
  const result = verifyRoleSignIn({
    role: payload.role,
    passcode: payload.passcode
  });

  return NextResponse.json(result, {
    status: result.status === "signed_in" ? 200 : 401
  });
}
