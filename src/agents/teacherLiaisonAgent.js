export function createTeacherSharePackage({ student, programPlan, parentApproved, progress }) {
  if (!parentApproved) {
    return {
      status: "blocked",
      reason: "Teacher sharing requires parent approval."
    };
  }

  const progressSummary = progress ? createShareProgressSummary({ programPlan, progress }) : null;

  return {
    status: "ready_to_share",
    student: {
      firstName: student.firstName,
      gradeLevel: student.gradeLevel
    },
    summary: `${student.firstName} is enrolled in a Grade ${student.gradeLevel} summer learning program with core academic work, projects, and parent-supervised enrichment.`,
    includedSections: [
      "Core subject participation",
      "Weekly theme completion",
      "Selected project samples",
      "Certificates and badges",
      "Parent-approved transcript summary"
    ],
    excludedByDefault: [
      "Private health check answers",
      "Faith reflections",
      "Exact scores unless parent opts in",
      "Friend messages",
      "Parent reward settings"
    ],
    weeklyThemes: programPlan.curriculum.weeks.map((week) => ({
      weekNumber: week.weekNumber,
      theme: week.theme,
      project: week.project
    })),
    progressSummary
  };
}

function createShareProgressSummary({ programPlan, progress }) {
  const completedMissionIds = new Set(progress.completedMissionIds ?? []);
  const completedMissions = programPlan.weeklyMissionPlans.flatMap((weeklyPlan) =>
    weeklyPlan.missions
      .filter((mission) => completedMissionIds.has(`week-${weeklyPlan.week.weekNumber}-day-${mission.dayNumber}`))
      .map((mission) => ({
        weekNumber: weeklyPlan.week.weekNumber,
        dayLabel: mission.dayLabel,
        theme: mission.theme,
        subjects: mission.lessons.map((lesson) => lesson.subject),
        reflection: progress.reflections?.[`week-${weeklyPlan.week.weekNumber}-day-${mission.dayNumber}`] ?? ""
      }))
  );

  return {
    completedMissionCount: completedMissions.length,
    totalMissionCount: programPlan.parentSummary.totalPlannedMissions,
    xp: progress.xp ?? 0,
    masteryStars: progress.masteryStars ?? 0,
    campCoins: progress.campCoins ?? 0,
    completedMissions
  };
}
