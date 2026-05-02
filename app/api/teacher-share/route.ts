import { NextResponse } from "next/server";
import { createProgramPlan } from "../../../src/agents/principalAgent.js";
import { createTeacherSharePackage } from "../../../src/agents/teacherLiaisonAgent.js";

export async function POST(request: Request) {
  const payload = await request.json();
  const programPlan = createProgramPlan(payload.studentProfile, payload.parentPolicy);

  return NextResponse.json(
    createTeacherSharePackage({
      student: payload.studentProfile,
      programPlan,
      parentApproved: Boolean(payload.parentApproved),
      progress: payload.progress
    })
  );
}

