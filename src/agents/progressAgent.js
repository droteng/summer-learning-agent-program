import { applyGradeResultToMastery } from "./masteryAgent.js";
import { buildCompletionEntry } from "./streakAgent.js";

export function createEmptyProgress() {
  return {
    completedMissionIds: [],
    xp: 0,
    masteryStars: 0,
    campCoins: 0,
    reflections: {},
    skillMastery: {},
    itemGrades: {},
    completionLog: [],
    streakFreezesAvailable: 0
  };
}

export function createMissionId({ weekNumber, dayNumber }) {
  return `week-${weekNumber}-day-${dayNumber}`;
}

export function completeMission({ progress, weekNumber, mission, now }) {
  const missionId = createMissionId({ weekNumber, dayNumber: mission.dayNumber });

  if (progress.completedMissionIds.includes(missionId)) {
    return progress;
  }

  const baseLog = Array.isArray(progress.completionLog) ? progress.completionLog : [];
  const entry = buildCompletionEntry({ missionId }, { now });

  return {
    completedMissionIds: [...progress.completedMissionIds, missionId],
    xp: progress.xp + mission.rewardOpportunity.xp,
    masteryStars: progress.masteryStars + mission.rewardOpportunity.masteryStars,
    campCoins: progress.campCoins + mission.rewardOpportunity.campCoins,
    reflections: progress.reflections ?? {},
    skillMastery: progress.skillMastery ?? {},
    itemGrades: progress.itemGrades ?? {},
    completionLog: [...baseLog, entry],
    streakFreezesAvailable: progress.streakFreezesAvailable ?? 0
  };
}

/**
 * @param {{
 *   progress?: any,
 *   item: { id: string, subject?: string, topicTag?: string },
 *   gradeResult: { score: number, correct?: boolean|null, attempts?: number, rubricLevel?: number|null, feedback?: string },
 *   now?: () => string
 * }} args
 */
export function recordGradedItem(args) {
  const { progress, item, gradeResult, now = () => new Date().toISOString() } = args;
  const baseProgress = progress ?? createEmptyProgress();
  const skillMastery = applyGradeResultToMastery({
    mastery: baseProgress.skillMastery ?? {},
    item,
    gradeResult,
    now
  });
  const itemGrades = {
    ...(baseProgress.itemGrades ?? {}),
    [item.id]: {
      score: gradeResult.score,
      correct: gradeResult.correct,
      attempts: gradeResult.attempts,
      rubricLevel: gradeResult.rubricLevel,
      lastFeedback: gradeResult.feedback,
      lastGradedAt: now()
    }
  };
  return {
    ...baseProgress,
    skillMastery,
    itemGrades
  };
}

export function saveReflection({ progress, weekNumber, dayNumber, reflection }) {
  const missionId = createMissionId({ weekNumber, dayNumber });

  return {
    ...progress,
    reflections: {
      ...(progress.reflections ?? {}),
      [missionId]: reflection.trim()
    }
  };
}

export function summarizeProgress({ progress, totalMissions }) {
  const completedCount = progress.completedMissionIds.length;
  const completionPercent = totalMissions === 0 ? 0 : Math.round((completedCount / totalMissions) * 100);

  return {
    completedCount,
    totalMissions,
    completionPercent,
    xp: progress.xp,
    masteryStars: progress.masteryStars,
    campCoins: progress.campCoins,
    parentNextSteps: createParentNextSteps({ completedCount, totalMissions, progress })
  };
}

function createParentNextSteps({ completedCount, totalMissions, progress }) {
  if (completedCount === 0) {
    return ["Help the child complete the first mission and body check."];
  }

  if (completedCount >= totalMissions) {
    return ["Prepare the final showcase and export a teacher share package."];
  }

  const nextSteps = ["Review today's reflection and approve a fitting reward if earned."];

  if (progress.campCoins >= 25) {
    nextSteps.push("Consider letting the child spend camp coins on a parent-approved reward.");
  }

  if (completedCount % 5 === 0) {
    nextSteps.push("Review the weekly summary and decide whether any subject needs reteaching.");
  }

  return nextSteps;
}
