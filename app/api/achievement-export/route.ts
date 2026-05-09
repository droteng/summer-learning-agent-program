import { NextResponse } from "next/server";
import { createAchievementExport } from "../../../src/agents/achievementAgent.js";
import { createProgramPlan } from "../../../src/agents/principalAgent.js";

export async function POST(request: Request) {
  const payload = await request.json();
  const programPlan = createProgramPlan(payload.studentProfile, payload.parentPolicy);

  return NextResponse.json(
    createAchievementExport({
      student: payload.studentProfile,
      programPlan,
      progress: payload.progress,
      parentApproved: Boolean(payload.parentApproved)
    })
  );
}
