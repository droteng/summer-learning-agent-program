export function createAchievementExport({ student, programPlan, progress, parentApproved }) {
  if (!parentApproved) {
    return {
      status: "blocked",
      reason: "Achievement transcripts require parent approval before sharing."
    };
  }

  const completedMissionIds = new Set(progress?.completedMissionIds ?? []);
  const completedMissions = collectCompletedMissions({ programPlan, completedMissionIds, progress });
  const weeklyTranscript = createWeeklyTranscript({ programPlan, completedMissionIds });
  const subjectTotals = createSubjectTotals(completedMissions);
  const badges = createBadges({ completedMissions, weeklyTranscript, progress });
  const totalMissions = programPlan.parentSummary.totalPlannedMissions;
  const completedCount = completedMissions.length;

  return {
    status: "ready_to_share",
    generatedAt: new Date().toISOString(),
    student: {
      firstName: student.firstName,
      gradeLevel: student.gradeLevel
    },
    certificate: {
      title: "Certificate of Summer Learning Progress",
      subtitle: "Awarded to " + student.firstName + " for consistent Grade " + student.gradeLevel + " learning effort",
      signatureLine: "Parent / Learning Coach approval"
    },
    transcript: {
      programName: "Dr. Spark Academy Summer Learning Program",
      gradeLevel: student.gradeLevel,
      completedMissionCount: completedCount,
      totalMissionCount: totalMissions,
      completionPercent: totalMissions === 0 ? 0 : Math.round((completedCount / totalMissions) * 100),
      xp: progress?.xp ?? 0,
      masteryStars: progress?.masteryStars ?? 0,
      campCoins: progress?.campCoins ?? 0,
      weeklyTranscript,
      subjectTotals
    },
    badges,
    portfolioHighlights: createPortfolioHighlights(completedMissions),
    schoolShareSummary: createSchoolShareSummary({ student, completedCount, totalMissions, subjectTotals, badges }),
    parentChecklist: [
      "Review reflections and remove anything private before sending.",
      "Attach only project samples the parent has approved.",
      "Share with a school teacher, tutor, or counselor only through a parent-controlled channel.",
      "Keep health, faith, friend, and exact diagnostic details private unless there is a clear parent reason to include them."
    ],
    excludedByDefault: [
      "Private health check answers",
      "Faith reflections",
      "Friend messages and invite links",
      "Exact diagnostic answers or scores",
      "Parent reward settings and passcodes"
    ]
  };
}

function collectCompletedMissions({ programPlan, completedMissionIds, progress }) {
  return programPlan.weeklyMissionPlans.flatMap((weeklyPlan) =>
    weeklyPlan.missions
      .filter((mission) => completedMissionIds.has(createMissionId(weeklyPlan.week.weekNumber, mission.dayNumber)))
      .map((mission) => ({
        missionId: createMissionId(weeklyPlan.week.weekNumber, mission.dayNumber),
        weekNumber: weeklyPlan.week.weekNumber,
        dayLabel: mission.dayLabel,
        theme: mission.theme,
        project: weeklyPlan.week.project,
        subjects: mission.lessons.map((lesson) => lesson.subject),
        reflection: progress?.reflections?.[createMissionId(weeklyPlan.week.weekNumber, mission.dayNumber)] ?? ""
      }))
  );
}

function createWeeklyTranscript({ programPlan, completedMissionIds }) {
  return programPlan.weeklyMissionPlans.map((weeklyPlan) => {
    const completedMissions = weeklyPlan.missions.filter((mission) =>
      completedMissionIds.has(createMissionId(weeklyPlan.week.weekNumber, mission.dayNumber))
    );
    const totalMissions = weeklyPlan.missions.length;
    const subjects = new Set(completedMissions.flatMap((mission) => mission.lessons.map((lesson) => lesson.subject)));

    return {
      weekNumber: weeklyPlan.week.weekNumber,
      theme: weeklyPlan.week.theme,
      project: weeklyPlan.week.project,
      completedMissionCount: completedMissions.length,
      totalMissionCount: totalMissions,
      completionPercent: totalMissions === 0 ? 0 : Math.round((completedMissions.length / totalMissions) * 100),
      subjects: [...subjects]
    };
  });
}

function createSubjectTotals(completedMissions) {
  const totals = new Map();

  completedMissions.forEach((mission) => {
    mission.subjects.forEach((subject) => {
      totals.set(subject, (totals.get(subject) ?? 0) + 1);
    });
  });

  return [...totals.entries()]
    .map(([subject, completedLessons]) => ({ subject, completedLessons }))
    .sort((first, second) => first.subject.localeCompare(second.subject));
}

function createBadges({ completedMissions, weeklyTranscript, progress }) {
  const badges = [];
  const reflections = completedMissions.filter((mission) => mission.reflection.trim());
  const completedWeeks = weeklyTranscript.filter((week) => week.completedMissionCount === week.totalMissionCount);
  const approvedFriendInvites = (progress?.friendInvites ?? []).filter((invite) => invite.status === "approved");

  if (completedMissions.length >= 1) {
    badges.push(createBadge("First Mission", "Completed the first summer learning mission."));
  }

  if (completedMissions.length >= 5) {
    badges.push(createBadge("Healthy Habits", "Built a full week of learning with daily movement prompts."));
  }

  if (completedWeeks.length > 0) {
    badges.push(createBadge("Week Finisher", "Completed every mission in Week " + completedWeeks[0].weekNumber + "."));
  }

  if ((progress?.masteryStars ?? 0) >= 5) {
    badges.push(createBadge("Mastery Builder", "Earned at least 5 mastery stars."));
  }

  if (reflections.length >= 3) {
    badges.push(createBadge("Reflective Learner", "Wrote thoughtful reflections across multiple missions."));
  }

  if (approvedFriendInvites.length > 0) {
    badges.push(createBadge("Squad Starter", "Joined parent-approved social learning."));
  }

  return badges;
}

function createBadge(name, description) {
  return {
    name,
    description,
    shareable: true
  };
}

function createPortfolioHighlights(completedMissions) {
  return completedMissions.slice(0, 6).map((mission) => ({
    title: "Week " + mission.weekNumber + " - " + mission.dayLabel + ": " + mission.theme,
    subjects: mission.subjects,
    project: mission.project,
    reflection: mission.reflection
  }));
}

function createSchoolShareSummary({ student, completedCount, totalMissions, subjectTotals, badges }) {
  const subjects = subjectTotals.map((item) => item.subject).join(", ") || "no completed subject lessons yet";
  const earnedBadges = badges.map((badge) => badge.name).join(", ") || "no badges earned yet";

  return student.firstName + " completed " + completedCount + "/" + totalMissions + " missions in the Dr. Spark Academy summer program. Subjects represented: " + subjects + ". Shareable badges: " + earnedBadges + ". This summary excludes private health, faith, friend-message, reward, and diagnostic details by default.";
}

function createMissionId(weekNumber, dayNumber) {
  return "week-" + weekNumber + "-day-" + dayNumber;
}
