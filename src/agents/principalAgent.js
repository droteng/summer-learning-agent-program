import { createBodyCheck } from "./activityCoachAgent.js";
import { buildGrade6Program } from "./curriculumArchitectAgent.js";
import { createParentSummary } from "./parentLiaisonAgent.js";
import { createRewardPlan, suggestDailyRewardOpportunity } from "./rewardsAgent.js";

export function createProgramPlan(studentProfile, parentPolicy) {
  const curriculum = buildGrade6Program(studentProfile);
  const rewardPlan = createRewardPlan(parentPolicy.allowedRewards);

  const dailyMissionPreview = createDailyMissionPreview({
    week: curriculum.weeks[0],
    studentProfile,
    dayNumber: 1
  });

  const programPlan = {
    student: studentProfile,
    parentPolicy,
    curriculum,
    rewardPlan,
    dailyMissionPreview
  };

  return {
    ...programPlan,
    parentSummary: createParentSummary(programPlan)
  };
}

export function createDailyMissionPreview({ week, studentProfile, dayNumber }) {
  return {
    dayNumber,
    theme: week.theme,
    warmup: "Solve a 5-minute puzzle connected to today's mission.",
    lessons: [
      {
        subject: "Math",
        task: "Review one skill through a real-world example."
      },
      {
        subject: "ELA/Writing",
        task: "Read a short passage and write a clear response."
      },
      {
        subject: "Coding/Computer Science/AI",
        task: "Complete a tiny logic or debugging challenge."
      }
    ],
    creativeChallenge: week.project,
    reflectionPrompt: "What felt easier today than it did before?",
    bodyCheck: createBodyCheck(studentProfile.activityPreferences),
    rewardOpportunity: suggestDailyRewardOpportunity(dayNumber)
  };
}

