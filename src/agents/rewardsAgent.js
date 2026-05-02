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

