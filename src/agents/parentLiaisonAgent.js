export function createParentSummary(programPlan) {
  return {
    headline: `${programPlan.student.firstName}'s Grade ${programPlan.student.gradeLevel} summer plan is ready.`,
    coreSubjects: programPlan.curriculum.coreSubjects,
    enrichmentTracks: programPlan.curriculum.selectedEnrichmentTracks.map((track) => track.label),
    weeklyThemes: programPlan.curriculum.weeks.map((week) => `${week.weekNumber}. ${week.theme}`),
    parentApprovalsNeeded: [
      "Reward menu",
      "Friend invitations",
      "Learning Squad visibility",
      "Teacher/school sharing",
      "External live sessions or messaging integrations"
    ]
  };
}

