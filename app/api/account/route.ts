import { NextResponse } from "next/server";
import { createFamilyAccount, publicAccountView } from "../../../src/agents/accountAgent.js";
import { loadFamilyAccount, saveFamilyAccount } from "../../../src/data/localDb.js";

export const runtime = "nodejs";

export async function GET() {
  const account = await loadFamilyAccount();

  return NextResponse.json({
    account: publicAccountView(account)
  });
}

export async function POST(request: Request) {
  const payload = await request.json();
  const account = createFamilyAccount(payload);
  const saved = await saveFamilyAccount({ account });

  return NextResponse.json({
    account: publicAccountView(saved.account),
    updatedAt: saved.updatedAt
  });
}
