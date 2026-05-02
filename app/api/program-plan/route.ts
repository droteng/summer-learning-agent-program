import { NextResponse } from "next/server";
import { createProgramPlan } from "../../../src/agents/principalAgent.js";

export async function POST(request: Request) {
  const payload = await request.json();
  const plan = createProgramPlan(payload.studentProfile, payload.parentPolicy);

  return NextResponse.json({
    parentSummary: plan.parentSummary,
    rewardPlan: plan.rewardPlan,
    firstWeekSummary: plan.weeklyMissionPlans[0].weeklyProgressSummary,
    firstDailyMission: plan.dailyMissionPreview,
    weeklyThemes: plan.curriculum.weeks.map((week: any) => ({
      weekNumber: week.weekNumber,
      theme: week.theme,
      project: week.project
    })),
    weeklyMissionPlans: plan.weeklyMissionPlans.map((weeklyPlan: any) => ({
      weekNumber: weeklyPlan.week.weekNumber,
      theme: weeklyPlan.week.theme,
      project: weeklyPlan.week.project,
      weeklyProgressSummary: weeklyPlan.weeklyProgressSummary,
      missions: weeklyPlan.missions
    }))
  });
}

