import { createWeeklyMissionPlan } from "./dailyPlannerAgent.js";
import { buildGrade6Program } from "./curriculumArchitectAgent.js";
import { createParentSummary } from "./parentLiaisonAgent.js";
import { createRewardPlan } from "./rewardsAgent.js";

export function createProgramPlan(studentProfile, parentPolicy) {
  const curriculum = buildGrade6Program(studentProfile);
  const rewardPlan = createRewardPlan(parentPolicy.allowedRewards);
  const weeklyMissionPlans = curriculum.weeks.map((week) =>
    createWeeklyMissionPlan({
      week,
      studentProfile
    })
  );

  const programPlan = {
    student: studentProfile,
    parentPolicy,
    curriculum,
    rewardPlan,
    weeklyMissionPlans,
    dailyMissionPreview: weeklyMissionPlans[0].missions[0]
  };

  return {
    ...programPlan,
    parentSummary: createParentSummary(programPlan)
  };
}
