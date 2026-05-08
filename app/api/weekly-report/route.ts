import { NextResponse } from "next/server";
import { createProgramPlan } from "../../../src/agents/principalAgent.js";
import { createWeeklyParentReport } from "../../../src/agents/parentLiaisonAgent.js";

export async function POST(request: Request) {
  const payload = await request.json();
  const programPlan = createProgramPlan(payload.studentProfile, payload.parentPolicy);
  const report = createWeeklyParentReport({
    student: payload.studentProfile,
    programPlan,
    progress: payload.progress,
    weekNumber: payload.weekNumber
  });

  const status = report.status === "not_found" ? 404 : 200;

  return NextResponse.json(report, { status });
}
