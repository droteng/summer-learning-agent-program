export function createTeacherSharePackage({ student, programPlan, parentApproved }) {
  if (!parentApproved) {
    return {
      status: "blocked",
      reason: "Teacher sharing requires parent approval."
    };
  }

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
    }))
  };
}

