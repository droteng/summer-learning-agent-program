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

  const report = payload?.useLlm === false
    ? createWeeklyParentReport(args)
    : await createWeeklyParentReportWithLlm({ ...args, llm: getLlm() });

  const status = report.status === "not_found" ? 404 : 200;

  return NextResponse.json(report, { status });
}
