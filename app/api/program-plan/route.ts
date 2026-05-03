import { NextResponse } from "next/server";
import { createProgramPlan } from "../../../src/agents/principalAgent.js";
import { tuneProgramPlan } from "../../../src/agents/adaptiveTuningAgent.js";

export async function POST(request: Request) {
  const payload = await request.json();
  const basePlan = createProgramPlan(payload.studentProfile, payload.parentPolicy);
  const plan = payload.diagnosticSummary
    ? tuneProgramPlan({
        programPlan: basePlan,
        diagnosticSummary: payload.diagnosticSummary,
        difficultyOverride: payload.difficultyOverride
      })
    : basePlan;

  return NextResponse.json({
    parentSummary: plan.parentSummary,
    rewardPlan: plan.rewardPlan,
    adaptiveTuning: plan.adaptiveTuning,
    gradeTuning: plan.curriculum.gradeTuning,
    tunedCoreSubjects: plan.curriculum.tunedCoreSubjects,
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
