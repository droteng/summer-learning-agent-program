import { NextResponse } from "next/server";
import {
  createTeacherLessonGuide,
  createTeacherLessonGuideWithLlm
} from "../../../src/agents/lessonAgent.js";
import { createLlm } from "../../../src/agents/llm/index.js";
import { authorizeStudentAccess, isDemoStudentId, requireApiUser } from "../../lib/auth-server";

let cachedLlm: ReturnType<typeof createLlm> | null = null;

function getLlm() {
  if (!cachedLlm) {
    cachedLlm = createLlm();
  }
  return cachedLlm;
}

export async function POST(request: Request) {
  const payload = await request.json();

  // A real studentId in the payload must belong to the caller's account.
  const studentId = payload?.studentProfile?.id;
  if (typeof studentId === "string" && studentId.length > 0 && !isDemoStudentId(studentId)) {
    const access = await authorizeStudentAccess(studentId);
    if (!access.ok) {
      return NextResponse.json({ error: access.error }, { status: access.status });
    }
  }

  if (payload?.useLlm === false) {
    const guide = createTeacherLessonGuide({
      mission: payload.mission,
      studentProfile: payload.studentProfile
    });
    return NextResponse.json(guide);
  }

  // LLM calls cost money — anonymous callers get the deterministic guide
  // instead of burning budget.
  let llm: ReturnType<typeof createLlm> | null = (await requireApiUser()).ok ? getLlm() : null;
  if (llm && typeof studentId === "string" && studentId.length > 0) {
    const { resolveEntitlement } = await import("../../../src/agents/entitlementAgent.js");
    const entitlement = await resolveEntitlement({ studentId });
    if (!entitlement.llmTutoring) {
      llm = null;
    }
  }

  const guide = await createTeacherLessonGuideWithLlm({
    mission: payload.mission,
    studentProfile: payload.studentProfile,
    weekNumber: payload.weekNumber,
    llm
  });
  return NextResponse.json(guide);
}
