const defaultMode = "standard";

export function tuneProgramPlan({ programPlan, diagnosticSummary, difficultyOverride = "auto" }) {
  const subjectModes = createSubjectModes({ diagnosticSummary, difficultyOverride });

  return {
    ...programPlan,
    adaptiveTuning: {
      difficultyOverride,
      subjectModes,
      summary: createTuningSummary(subjectModes)
    },
    weeklyMissionPlans: programPlan.weeklyMissionPlans.map((weeklyPlan) => ({
      ...weeklyPlan,
      missions: weeklyPlan.missions.map((mission) => tuneMission({ mission, subjectModes }))
    })),
    dailyMissionPreview: tuneMission({
      mission: programPlan.dailyMissionPreview,
      subjectModes
    })
  };
}

export function createSubjectModes({ diagnosticSummary, difficultyOverride = "auto" }) {
  const override = difficultyOverride === "auto" ? null : difficultyOverride;
  const modes = {};

  for (const item of diagnosticSummary?.subjectSummaries ?? []) {
    modes[item.subject] = override ?? item.readiness ?? defaultMode;
  }

  return modes;
}

function tuneMission({ mission, subjectModes }) {
  return {
    ...mission,
    adaptiveMode: summarizeMissionMode({ lessons: mission.lessons, subjectModes }),
    lessons: mission.lessons.map((lesson) => {
      const mode = subjectModes[lesson.subject] ?? defaultMode;

      return {
        ...lesson,
        adaptive: {
          mode,
          adjustedTask: createAdjustedTask({ mode, task: lesson.task }),
          coachCue: createCoachCue(mode)
        }
      };
    })
  };
}

function summarizeMissionMode({ lessons, subjectModes }) {
  const modes = lessons.map((lesson) => subjectModes[lesson.subject] ?? defaultMode);

  if (modes.includes("support")) {
    return "support";
  }

  if (modes.every((mode) => mode === "stretch")) {
    return "stretch";
  }

  return defaultMode;
}

function createAdjustedTask({ mode, task }) {
  if (mode === "support") {
    return `${task} Start with one worked example, then try a shorter version.`;
  }

  if (mode === "stretch") {
    return `${task} Add one explanation, second strategy, or real-world connection.`;
  }

  return `${task} Complete the on-grade version and explain your thinking.`;
}

function createCoachCue(mode) {
  if (mode === "support") {
    return "Use hints, sentence starters, and smaller steps.";
  }

  if (mode === "stretch") {
    return "Ask for proof, comparison, or a teach-back explanation.";
  }

  return "Keep the lesson on grade level and ask one follow-up question.";
}

function createTuningSummary(subjectModes) {
  const entries = Object.entries(subjectModes);
  const supportCount = entries.filter(([, mode]) => mode === "support").length;
  const stretchCount = entries.filter(([, mode]) => mode === "stretch").length;

  return `${supportCount} support subject(s), ${stretchCount} stretch subject(s), ${entries.length} tuned subject(s).`;
}
