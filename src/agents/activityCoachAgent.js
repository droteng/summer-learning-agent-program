export function createBodyCheck(activityPreferences = {}) {
  const outdoorPrompt = activityPreferences.outdoorAllowed
    ? "Did you get safe outdoor time with parent permission or supervision?"
    : "Did you do a safe indoor movement break today?";

  return [
    "Did you move your body today?",
    outdoorPrompt,
    "Did you drink water today?",
    "Name one healthy food you ate today.",
    "What time are you aiming to sleep tonight?"
  ];
}

