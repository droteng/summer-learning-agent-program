import { NextResponse } from "next/server";
import { httpStatusForHealth, runHealthChecks } from "../../../lib/health.js";
import { getLocalDb } from "../../../src/data/localDb.js";

export const dynamic = "force-dynamic";

export async function GET() {
  const db = {
    async ping() {
      const row = getLocalDb().prepare("SELECT 1 AS ok").get() as { ok?: number } | undefined;
      return row?.ok === 1;
    }
  };
  const report = await runHealthChecks({ db });
  return NextResponse.json(report, { status: httpStatusForHealth(report) });
}
