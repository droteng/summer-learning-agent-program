import { NextResponse } from "next/server";
import { createProgramPlan } from "../../../src/agents/principalAgent.js";
import {
  createWeeklyParentReport,
  createWeeklyParentReportWithLlm
} from "../../../src/agents/parentLiaisonAgent.js";
import { createLlm } from "../../../src/agents/llm/index.js";

let cachedLlm: ReturnType<typeof createLlm> | null = null;

function getLlm() {
  if (!cachedLlm) {
    cachedLlm = createLlm();
  }
  return cachedLlm;
}

export async function POST(request: Request) {
  const payload = await request.json();
  const programPlan = createProgramPlan(payload.studentProfile, payload.parentPolicy);

  const args = {
    student: payload.studentProfile,
    programPlan,
    progress: payload.progress,
    weekNumber: payload.weekNumber
  };

  let llmForReport: ReturnType<typeof createLlm> | null = null;
  if (payload?.useLlm !== false) {
    llmForReport = getLlm();
    const studentId = payload?.studentProfile?.id;
    if (typeof studentId === "string" && studentId.length > 0) {
      const { resolveEntitlement } = await import("../../../src/agents/entitlementAgent.js");
      const entitlement = await resolveEntitlement({ studentId });
      if (!entitlement.llmReports) {
        llmForReport = null;
      }
    }
  }

  const report = llmForReport === null && payload?.useLlm === false
    ? createWeeklyParentReport(args)
    : await createWeeklyParentReportWithLlm({ ...args, llm: llmForReport });

  const status = report.status === "not_found" ? 404 : 200;

  return NextResponse.json(report, { status });
}
