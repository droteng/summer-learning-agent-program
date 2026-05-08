export function createParentSummary(programPlan) {
  return {
    headline: `${programPlan.student.firstName}'s Grade ${programPlan.student.gradeLevel} summer plan is ready.`,
    coreSubjects: programPlan.curriculum.coreSubjects,
    enrichmentTracks: programPlan.curriculum.selectedEnrichmentTracks.map((track) => track.label),
    weeklyThemes: programPlan.curriculum.weeks.map((week) => `${week.weekNumber}. ${week.theme}`),
    totalPlannedMissions: programPlan.weeklyMissionPlans.reduce(
      (total, weeklyPlan) => total + weeklyPlan.missions.length,
      0
    ),
    parentApprovalsNeeded: [
      "Reward menu",
      "Friend invitations",
      "Learning Squad visibility",
      "Teacher/school sharing",
      "External live sessions or messaging integrations"
    ]
  };
}

export function createWeeklyParentReport({ student, programPlan, progress, weekNumber }) {
  const selectedWeekNumber = Number(weekNumber ?? 1);
  const weeklyPlan = programPlan.weeklyMissionPlans.find(
    (plan) => plan.week.weekNumber === selectedWeekNumber
  );

  if (!weeklyPlan) {
    return {
      status: "not_found",
      reason: `Week ${selectedWeekNumber} was not found.`
    };
  }

  const completedMissionIds = new Set(progress?.completedMissionIds ?? []);
  const completedMissions = weeklyPlan.missions
    .filter((mission) => completedMissionIds.has(createMissionId(selectedWeekNumber, mission.dayNumber)))
    .map((mission) => createMissionEvidence({ weekNumber: selectedWeekNumber, mission, progress }));
  const totalMissions = weeklyPlan.missions.length;
  const completedCount = completedMissions.length;
  const completionPercent = totalMissions === 0 ? 0 : Math.round((completedCount / totalMissions) * 100);
  const weeklyRewards = summarizeWeeklyRewards({ week: weeklyPlan.week, progress });
  const subjectCoverage = summarizeSubjectCoverage(completedMissions);
  const invitationSummary = summarizeInvitations(progress?.friendInvites ?? []);

  return {
    status: "ready",
    headline: `${student.firstName}'s Week ${selectedWeekNumber} parent report`,
    student: {
      firstName: student.firstName,
      gradeLevel: student.gradeLevel
    },
    week: {
      weekNumber: weeklyPlan.week.weekNumber,
      theme: weeklyPlan.week.theme,
      project: weeklyPlan.week.project
    },
    completion: {
      completedCount,
      totalMissions,
      completionPercent
    },
    weeklyEarnings: completedMissions.reduce(
      (totals, mission) => ({
        xp: totals.xp + mission.rewardOpportunity.xp,
        masteryStars: totals.masteryStars + mission.rewardOpportunity.masteryStars,
        campCoins: totals.campCoins + mission.rewardOpportunity.campCoins
      }),
      { xp: 0, masteryStars: 0, campCoins: 0 }
    ),
    subjectCoverage,
    completedMissions,
    rewards: weeklyRewards,
    invitations: invitationSummary,
    parentNextSteps: createWeeklyParentNextSteps({
      student,
      completedCount,
      totalMissions,
      weeklyRewards,
      completedMissions
    }),
    teacherSummary: createTeacherFriendlySummary({
      student,
      week: weeklyPlan.week,
      completedCount,
      totalMissions,
      subjectCoverage
    }),
    excludedPrivateData: [
      "Private health check answers",
      "Faith reflections unless parent explicitly shares them",
      "Friend messages or invite details",
      "Parent passcodes and reward settings",
      "Exact diagnostic answers"
    ]
  };
}

function createMissionId(weekNumber, dayNumber) {
  return `week-${weekNumber}-day-${dayNumber}`;
}

function createMissionEvidence({ weekNumber, mission, progress }) {
  const missionId = createMissionId(weekNumber, mission.dayNumber);

  return {
    missionId,
    dayLabel: mission.dayLabel,
    theme: mission.theme,
    subjects: mission.lessons.map((lesson) => lesson.subject),
    projectMilestone: mission.projectMilestone ?? mission.creativeChallenge,
    reflection: progress?.reflections?.[missionId] ?? "",
    rewardOpportunity: mission.rewardOpportunity
  };
}

function summarizeSubjectCoverage(completedMissions) {
  const subjectCounts = new Map();

  completedMissions.forEach((mission) => {
    mission.subjects.forEach((subject) => {
      subjectCounts.set(subject, (subjectCounts.get(subject) ?? 0) + 1);
    });
  });

  return [...subjectCounts.entries()].map(([subject, completedLessons]) => ({
    subject,
    completedLessons
  }));
}

function summarizeWeeklyRewards({ week, progress }) {
  const rewardRequests = progress?.rewardRequests ?? [];
  const weeklyRequests = rewardRequests.filter((request) => request.earnedBy?.theme === week.theme);

  return {
    pendingCount: weeklyRequests.filter((request) => request.status === "pending_parent").length,
    approvedCount: weeklyRequests.filter((request) => request.status === "approved").length,
    requests: weeklyRequests.map((request) => ({
      requestedReward: request.requestedReward,
      status: request.status,
      dayLabel: request.earnedBy?.dayLabel ?? "Weekly work"
    }))
  };
}

function summarizeInvitations(friendInvites) {
  return {
    pendingCount: friendInvites.filter((invite) => invite.status === "needs_parent_approval").length,
    approvedCount: friendInvites.filter((invite) => invite.status === "approved").length
  };
}

function createWeeklyParentNextSteps({ student, completedCount, totalMissions, weeklyRewards, completedMissions }) {
  const steps = [];

  if (completedCount === 0) {
    steps.push(`Help ${student.firstName} finish one mission this week, then celebrate the first win.`);
  } else if (completedCount < totalMissions) {
    steps.push(`Pick one catch-up mission with ${student.firstName} before starting the next week.`);
  } else {
    steps.push("Celebrate a complete week and choose one parent-approved reward.");
  }

  if (weeklyRewards.pendingCount > 0) {
    steps.push("Review pending reward requests and approve only what still fits the family plan.");
  }

  if (completedMissions.some((mission) => mission.reflection)) {
    steps.push("Read one reflection together and ask what strategy helped most.");
  } else {
    steps.push("Ask for a short reflection before sharing progress with school.");
  }

  steps.push("Plan at least one parent-supervised physical activity before the next learning day.");

  return steps;
}

function createTeacherFriendlySummary({ student, week, completedCount, totalMissions, subjectCoverage }) {
  const subjects = subjectCoverage.map((item) => item.subject).join(", ") || "no completed subject lessons yet";

  return `${student.firstName} completed ${completedCount}/${totalMissions} Week ${week.weekNumber} missions on ${week.theme}. Covered subjects: ${subjects}. Parent approval is required before sharing reflections or private enrichment details.`;
}
