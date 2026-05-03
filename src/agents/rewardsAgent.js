const defaultRewardMenu = [
  "30 minutes of extra parent-approved device time",
  "Choose a family dinner",
  "Ice cream or smoothie trip",
  "Park, sports, bike, or swimming outing",
  "Movie night",
  "Invite a friend for a parent-approved activity",
  "Small allowance bonus",
  "Project showcase celebration"
];

export function createRewardPlan(rewardPreferences = []) {
  const preferred = defaultRewardMenu.filter((reward) =>
    rewardPreferences.some((preference) => reward.toLowerCase().includes(preference.toLowerCase()))
  );

  return {
    currencies: ["XP", "Mastery Stars", "Camp Coins"],
    weeklyRewardMenu: preferred.length > 0 ? preferred : defaultRewardMenu,
    rule: "Rewards require parent approval and should recognize effort, consistency, mastery, creativity, and healthy activity."
  };
}

export function suggestDailyRewardOpportunity(dayNumber) {
  return {
    xp: 20,
    masteryStars: dayNumber % 2 === 0 ? 1 : 0,
    campCoins: 5,
    message: "Complete today's missions and body check to unlock a parent-approved reward request."
  };
}

export function createRewardApprovalRequest({ student, mission, requestedReward }) {
  return {
    status: "needs_parent_approval",
    student: {
      firstName: student.firstName,
      gradeLevel: student.gradeLevel
    },
    requestedReward,
    earnedBy: {
      theme: mission.theme,
      dayLabel: mission.dayLabel,
      xp: mission.rewardOpportunity.xp,
      masteryStars: mission.rewardOpportunity.masteryStars,
      campCoins: mission.rewardOpportunity.campCoins
    },
    parentPrompt: `Approve ${requestedReward} for ${student.firstName} after completing the ${mission.theme} ${mission.dayLabel} mission?`,
    approvalOptions: ["approve", "choose different reward", "save for later"]
  };
}

export function createPendingRewardRequest({ approvalRequest, requestedBy = "child", id }) {
  return {
    id: id ?? `reward-${Date.now()}`,
    status: "pending_parent",
    requestedBy,
    requestedReward: approvalRequest.requestedReward,
    earnedBy: approvalRequest.earnedBy,
    parentPrompt: approvalRequest.parentPrompt,
    createdAt: new Date().toISOString()
  };
}

export function approveRewardRequest({ rewardRequest, approvedBy = "parent" }) {
  return {
    ...rewardRequest,
    status: "approved",
    approvedBy,
    approvedAt: new Date().toISOString()
  };
}

export function summarizeRewardCenter(rewardRequests = []) {
  return {
    pendingCount: rewardRequests.filter((request) => request.status === "pending_parent").length,
    approvedCount: rewardRequests.filter((request) => request.status === "approved").length,
    suggestedNonScreenRewards: [
      "Family walk, park, sports, bike, or swimming time",
      "Cook a favorite healthy snack together",
      "Board game or movie night",
      "Project showcase call with a relative",
      "Small allowance, savings, or giving jar bonus"
    ]
  };
}
