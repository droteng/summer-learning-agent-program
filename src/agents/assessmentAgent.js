export function createMasteryCheck({ subject, dayNumber }) {
  return {
    subject,
    type: dayNumber % 5 === 0 ? "weekly_reflection" : "quick_check",
    prompt:
      dayNumber % 5 === 0
        ? "What did you learn this week, and what do you still want help with?"
        : "Explain your answer in one or two sentences so your teacher agent can check your thinking.",
    signals: ["effort", "accuracy", "explanation", "confidence"]
  };
}

export function summarizeWeeklyProgress({ week, missions }) {
  const subjects = [...new Set(missions.flatMap((mission) => mission.lessons.map((lesson) => lesson.subject)))];

  return {
    weekNumber: week.weekNumber,
    theme: week.theme,
    missionCount: missions.length,
    subjects,
    parentSummary: `This week focuses on ${week.theme}. The student completes ${missions.length} missions and builds toward: ${week.project}`,
    reviewQuestions: [
      "Which mission showed the strongest effort?",
      "Which subject needs a reteach or easier example?",
      "Is the reward plan motivating without becoming distracting?"
    ]
  };
}

