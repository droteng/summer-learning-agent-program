import { NextResponse } from "next/server";
import {
  createErasureRequest,
  ErasureError,
  finalizeErasureAudit
} from "../../../src/agents/dataErasureAgent.js";
import {
  loadErasureAudits,
  purgeStudentData,
  saveErasureAudit
} from "../../../src/data/db.js";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const studentId = url.searchParams.get("studentId");
  if (!studentId) {
    return NextResponse.json({ error: "missing_student_id" }, { status: 400 });
  }
  const audits = await loadErasureAudits(studentId);
  return NextResponse.json({ audits });
}

export async function POST(request: Request) {
  let payload: any;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const forwardedFor =
    request.headers.get("x-forwarded-for") ?? request.headers.get("x-real-ip") ?? null;
  const userAgent = request.headers.get("user-agent") ?? null;

  let request_;
  try {
    request_ = createErasureRequest({
      studentId: payload?.studentId,
      parentName: payload?.parentName,
      parentEmail: payload?.parentEmail,
      confirmationText: payload?.confirmationText,
      expectedChildFirstName: payload?.expectedChildFirstName,
      reason: payload?.reason,
      ipAddress: forwardedFor ? forwardedFor.split(",")[0].trim() : null,
      userAgent
    });
  } catch (err) {
    if (err instanceof ErasureError) {
      return NextResponse.json({ error: err.code, details: err.details }, { status: 400 });
    }
    return NextResponse.json({ error: "unknown_error" }, { status: 500 });
  }

  const recordCounts = await purgeStudentData(request_.studentId);
  const audit = finalizeErasureAudit({ request: request_, recordCounts });
  await saveErasureAudit(audit);

  return NextResponse.json({ ok: true, audit });
}
