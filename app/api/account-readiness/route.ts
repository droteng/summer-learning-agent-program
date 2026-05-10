import { NextResponse } from "next/server";
import { createProductionAccountFoundation } from "../../../src/agents/accountAgent.js";
import { loadFamilyAccount } from "../../../src/data/localDb.js";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const payload = await request.json();
  const account = await loadFamilyAccount();

  return NextResponse.json(
    createProductionAccountFoundation({
      account,
      studentProfile: payload.studentProfile,
      parentPolicy: payload.parentPolicy
    })
  );
}
