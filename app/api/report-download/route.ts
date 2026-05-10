import { NextResponse } from "next/server";
import {
  createPrintableReportPackage,
  createReportDownload
} from "../../../src/agents/printableReportAgent.js";
import { createProgramPlan } from "../../../src/agents/principalAgent.js";

export async function POST(request: Request) {
  const payload = await request.json();
  const programPlan = createProgramPlan(payload.studentProfile, payload.parentPolicy);
  const reportPackage = createPrintableReportPackage({
    student: payload.studentProfile,
    programPlan,
    progress: payload.progress,
    parentPolicy: payload.parentPolicy,
    weekNumber: payload.weekNumber,
    parentApproved: Boolean(payload.parentApproved)
  });
  const download = createReportDownload({
    reportPackage,
    format: payload.format
  });

  return NextResponse.json(download, {
    status: download.status === "ready_to_download" ? 200 : 400
  });
}
