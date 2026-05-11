import { NextResponse } from "next/server";
import {
  createTeacherLessonGuide,
  createTeacherLessonGuideWithLlm
} from "../../../src/agents/lessonAgent.js";
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

  if (payload?.useLlm === false) {
    const guide = createTeacherLessonGuide({
      mission: payload.mission,
      studentProfile: payload.studentProfile
    });
    return NextResponse.json(guide);
  }

  let llm: ReturnType<typeof createLlm> | null = getLlm();
  const studentId = payload?.studentProfile?.id;
  if (typeof studentId === "string" && studentId.length > 0) {
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
