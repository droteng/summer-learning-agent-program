import { NextResponse } from "next/server";
import { createPrintableReportPackage } from "../../../src/agents/printableReportAgent.js";
import { createProgramPlan } from "../../../src/agents/principalAgent.js";

export async function POST(request: Request) {
  const payload = await request.json();
  const programPlan = createProgramPlan(payload.studentProfile, payload.parentPolicy);

  return NextResponse.json(
    createPrintableReportPackage({
      student: payload.studentProfile,
      programPlan,
      progress: payload.progress,
      parentPolicy: payload.parentPolicy,
      weekNumber: payload.weekNumber,
      parentApproved: Boolean(payload.parentApproved)
    })
  );
}
