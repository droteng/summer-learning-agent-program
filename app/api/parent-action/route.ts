import { NextResponse } from "next/server";
import {
  applyParentAction,
  ParentActionError
} from "../../../src/agents/parentActionAgent.js";
import { loadProgressSnapshot, saveProgressSnapshot } from "../../../src/data/db.js";
import { authorizeStudentAccess } from "../../lib/auth-server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let payload: any;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const studentId = payload?.studentId;
  if (typeof studentId !== "string" || studentId.length === 0) {
    return NextResponse.json({ error: "missing_student_id" }, { status: 400 });
  }

  // Approvals/redemptions are parent decisions — never child or anonymous.
  const access = await authorizeStudentAccess(studentId, { parentOnly: true });
  if (!access.ok) {
    return NextResponse.json({ error: access.error }, { status: access.status });
  }

  const existing = await loadProgressSnapshot(studentId);
  if (!existing) {
    return NextResponse.json({ error: "no_progress_for_student" }, { status: 404 });
  }

  let result;
  try {
    result = applyParentAction({
      progress: existing,
      action: payload?.action,
      id: payload?.id
    });
  } catch (err) {
    if (err instanceof ParentActionError) {
      const status = err.code.endsWith("not_found") ? 404 : 400;
      return NextResponse.json({ error: err.code }, { status });
    }
    return NextResponse.json({ error: "unknown_error" }, { status: 500 });
  }

  if (!result.changed) {
    return NextResponse.json({ ok: true, changed: false, reason: result.reason });
  }

  const saved = await saveProgressSnapshot({ studentId, progress: result.progress });
  return NextResponse.json({
    ok: true,
    changed: true,
    item: result.item,
    updatedAt: saved.updatedAt
  });
}
