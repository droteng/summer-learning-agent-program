import { NextResponse } from "next/server";
import {
  ConsentError,
  consentStatusForParent,
  createConsentRecord,
  revokeConsentRecord
} from "../../../src/agents/consentAgent.js";
import {
  appendConsentRecord,
  loadConsentRecords,
  replaceConsentRecords
} from "../../../src/data/db.js";
import { authorizeStudentAccess } from "../../lib/auth-server";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const studentId = url.searchParams.get("studentId");
  if (!studentId) {
    return NextResponse.json({ error: "missing_student_id" }, { status: 400 });
  }
  // Consent records carry the parent's name, email, and IP — parent-only.
  const access = await authorizeStudentAccess(studentId, { parentOnly: true });
  if (!access.ok) {
    return NextResponse.json({ error: access.error }, { status: access.status });
  }
  const records = await loadConsentRecords(studentId);
  const status = consentStatusForParent({ records, studentId });
  return NextResponse.json({ status, records });
}

export async function POST(request: Request) {
  let payload: any;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const studentId = payload?.studentId;
  if (typeof studentId !== "string") {
    return NextResponse.json({ error: "missing_student_id" }, { status: 400 });
  }

  // Only the signed-in parent of this student may grant consent.
  const access = await authorizeStudentAccess(studentId, { parentOnly: true });
  if (!access.ok) {
    return NextResponse.json({ error: access.error }, { status: access.status });
  }

  const forwardedFor =
    request.headers.get("x-forwarded-for") ?? request.headers.get("x-real-ip") ?? null;
  const userAgent = request.headers.get("user-agent") ?? null;

  let record;
  try {
    record = createConsentRecord({
      parentName: payload?.parentName,
      parentEmail: payload?.parentEmail,
      studentId,
      childFirstName: payload?.childFirstName,
      method: payload?.method,
      scopes: payload?.scopes,
      evidence: payload?.evidence,
      ipAddress: forwardedFor ? forwardedFor.split(",")[0].trim() : null,
      userAgent
    });
  } catch (err) {
    if (err instanceof ConsentError) {
      return NextResponse.json({ error: err.code, details: err.details }, { status: 400 });
    }
    return NextResponse.json({ error: "unknown_error" }, { status: 500 });
  }

  const saved = await appendConsentRecord({ studentId, record });
  return NextResponse.json({ ok: true, record, updatedAt: saved.updatedAt });
}

export async function DELETE(request: Request) {
  let payload: any;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const studentId = payload?.studentId;
  const consentId = payload?.consentId;
  if (typeof studentId !== "string" || typeof consentId !== "string") {
    return NextResponse.json({ error: "missing_ids" }, { status: 400 });
  }

  // Only the signed-in parent of this student may revoke consent.
  const access = await authorizeStudentAccess(studentId, { parentOnly: true });
  if (!access.ok) {
    return NextResponse.json({ error: access.error }, { status: access.status });
  }

  const records = await loadConsentRecords(studentId);
  const idx = records.findIndex((r: any) => r.id === consentId);
  if (idx === -1) {
    return NextResponse.json({ error: "consent_not_found" }, { status: 404 });
  }
  const next = records.slice();
  next[idx] = revokeConsentRecord(records[idx], { reason: payload?.reason ?? "parent_revoked" });
  await replaceConsentRecords({ studentId, records: next });
  return NextResponse.json({ ok: true, record: next[idx] });
}
