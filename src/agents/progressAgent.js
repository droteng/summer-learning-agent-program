export function createEmptyProgress() {
  return {
    completedMissionIds: [],
    xp: 0,
    masteryStars: 0,
    campCoins: 0,
    reflections: {}
  };
}

export function createMissionId({ weekNumber, dayNumber }) {
  return `week-${weekNumber}-day-${dayNumber}`;
}

export function completeMission({ progress, weekNumber, mission }) {
  const missionId = createMissionId({ weekNumber, dayNumber: mission.dayNumber });

  if (progress.completedMissionIds.includes(missionId)) {
    return progress;
  }

  return {
    completedMissionIds: [...progress.completedMissionIds, missionId],
    xp: progress.xp + mission.rewardOpportunity.xp,
    masteryStars: progress.masteryStars + mission.rewardOpportunity.masteryStars,
    campCoins: progress.campCoins + mission.rewardOpportunity.campCoins,
    reflections: progress.reflections ?? {}
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
