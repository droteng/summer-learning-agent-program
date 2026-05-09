import { NextResponse } from "next/server";
import { createProgramPlan } from "../../../src/agents/principalAgent.js";
import { createLearningSquadRoom } from "../../../src/agents/socialCoordinatorAgent.js";

export async function POST(request: Request) {
  const payload = await request.json();
  const programPlan = createProgramPlan(payload.studentProfile, payload.parentPolicy);

  return NextResponse.json(
    createLearningSquadRoom({
      student: payload.studentProfile,
      programPlan,
      progress: payload.progress,
      weekNumber: payload.weekNumber,
      parentPolicy: payload.parentPolicy
    })
  );
}
