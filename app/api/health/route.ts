import { NextResponse } from "next/server";
import { httpStatusForHealth, runHealthChecks } from "../../../lib/health.js";
import { pingDb, getDb } from "../../../src/data/db.js";

export const dynamic = "force-dynamic";

export async function GET() {
  const db = {
    async ping() {
      return pingDb();
    }
  };
  const report = await runHealthChecks({ db });
  const backend = await getDb();
  return NextResponse.json(
    { ...report, dbBackend: backend.name },
    { status: httpStatusForHealth(report) }
  );
}
