import { NextResponse } from "next/server";
import { createTeacherLessonGuide } from "../../../src/agents/lessonAgent.js";

export async function POST(request: Request) {
  const payload = await request.json();
  const guide = createTeacherLessonGuide({
    mission: payload.mission,
    studentProfile: payload.studentProfile
  });

  return NextResponse.json(guide);
}
