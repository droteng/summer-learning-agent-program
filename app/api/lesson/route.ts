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
  const llm = getLlm();

  if (payload?.useLlm === false) {
    const guide = createTeacherLessonGuide({
      mission: payload.mission,
      studentProfile: payload.studentProfile
    });
    return NextResponse.json(guide);
  }

  const guide = await createTeacherLessonGuideWithLlm({
    mission: payload.mission,
    studentProfile: payload.studentProfile,
    weekNumber: payload.weekNumber,
    llm
  });
  return NextResponse.json(guide);
}
