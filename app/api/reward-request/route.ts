import { NextResponse } from "next/server";
import { createProgramPlan } from "../../../src/agents/principalAgent.js";
import { createRewardApprovalRequest } from "../../../src/agents/rewardsAgent.js";

export async function POST(request: Request) {
  const payload = await request.json();
  const programPlan = createProgramPlan(payload.studentProfile, payload.parentPolicy);
  const weeklyPlan = programPlan.weeklyMissionPlans.find(
    (plan: any) => plan.week.weekNumber === Number(payload.weekNumber)
  );
  const mission = weeklyPlan?.missions.find((item: any) => item.dayNumber === Number(payload.dayNumber));

  if (!mission) {
    return NextResponse.json({ error: "Mission not found" }, { status: 404 });
  }

  return NextResponse.json(
    createRewardApprovalRequest({
      student: payload.studentProfile,
      mission,
      requestedReward: payload.requestedReward
    })
  );
}

