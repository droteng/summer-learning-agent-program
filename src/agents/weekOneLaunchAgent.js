const weekOneDetails = [
  {
    launchBrief: "Set a confident baseline: try the diagnostic, notice strengths, and pick one summer goal.",
    parentReview: "Look for effort, calm problem-solving, and willingness to explain thinking.",
    projectMilestone: "Start the personal learning map with three strengths and two goals.",
    celebrationPrompt: "Name one thing that already feels possible this summer."
  },
  {
    launchBrief: "Practice explaining answers clearly across math, writing, and coding logic.",
    parentReview: "Ask the child to show one answer with words, numbers, or steps.",
    projectMilestone: "Add a favorite subject path to the learning map.",
    celebrationPrompt: "Celebrate one clear explanation, even if the answer needed revision."
  },
  {
    launchBrief: "Connect learning to energy, movement, curiosity, and daily habits.",
    parentReview: "Notice whether the child can connect wellness habits to focus without shame or pressure.",
    projectMilestone: "Add a healthy focus habit to the learning map.",
    celebrationPrompt: "Choose one healthy habit to repeat tomorrow."
  },
  {
    launchBrief: "Use evidence: facts, observations, examples, and source checks.",
    parentReview: "Ask what evidence helped and what still needs checking.",
    projectMilestone: "Add an evidence checklist to the learning map.",
    celebrationPrompt: "Praise one moment where the child checked instead of guessed."
  },
  {
    launchBrief: "Wrap the launch week by choosing a Week 2 strategy and sharing the learning map.",
    parentReview: "Review the map together and choose one support area plus one stretch area.",
    projectMilestone: "Complete the personal learning map showcase.",
    celebrationPrompt: "Pick a family-approved celebration for completing launch week."
  }
];

export function enrichWeekOneMission({ mission, dayNumber }) {
  const detail = weekOneDetails[dayNumber - 1] ?? weekOneDetails[0];

  return {
    ...mission,
    launchBrief: detail.launchBrief,
    parentReview: detail.parentReview,
    projectMilestone: detail.projectMilestone,
    celebrationPrompt: detail.celebrationPrompt,
    warmup: `${detail.launchBrief} ${mission.warmup}`,
    creativeChallenge: `${mission.creativeChallenge} ${detail.projectMilestone}`
  };
}
