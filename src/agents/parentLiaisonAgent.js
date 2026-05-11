import { TIERS } from "./llm/index.js";
import { loadWeeklyReportNarrative } from "../data/db.js";

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

// Async LLM-augmented variant. Wraps the deterministic report and adds three
// synthesized fields (narrative, coachingTips, nextWeekPriorities) via the
// async tier — Sonnet 4.6 today, Batch API when that path is wired. Falls back
// to a deterministic synthesizer when no LLM is configured, the JSON is
// malformed, the provider errors, or the budget is exhausted. The base report
// is always present, so the parent never sees a missing-data state.
export async function createWeeklyParentReportWithLlm({
  student,
  programPlan,
  progress,
  weekNumber,
  llm = null,
  parentEmail = null
}) {
  const baseReport = createWeeklyParentReport({ student, programPlan, progress, weekNumber });
  if (baseReport.status !== "ready") return baseReport;

  // Cache check: a prior batch run may have already populated the narrative
  // for this (parent, week) at 50% off. Use it and skip the LLM call.
  if (parentEmail) {
    try {
      const cached = await loadWeeklyReportNarrative({
        parentEmail,
        weekNumber: baseReport.week.weekNumber
      });
      if (cached?.narrative && cached?.coachingTips && cached?.nextWeekPriorities) {
        return {
          ...baseReport,
          narrative: cached.narrative,
          coachingTips: cached.coachingTips,
          nextWeekPriorities: cached.nextWeekPriorities,
          narrativeMeta: {
            provider: "batch_cache",
            model: null,
            fallback: false,
            source: cached.source ?? "batch",
            batchId: cached.batchId ?? null,
            cachedAt: cached.updatedAt ?? null
          }
        };
      }
    } catch {
      // cache miss is non-fatal — fall through to synthesis
    }
  }

  const synthesis = await synthesizeReportNarrative({ baseReport, student, llm });
  return {
    ...baseReport,
    narrative: synthesis.narrative,
    coachingTips: synthesis.coachingTips,
    nextWeekPriorities: synthesis.nextWeekPriorities,
    narrativeMeta: synthesis.meta
  };
}

async function synthesizeReportNarrative({ baseReport, student, llm }) {
  const heuristic = heuristicNarrative({ baseReport, student });

  if (!llm) {
    return { ...heuristic, meta: { provider: null, model: null, fallback: true } };
  }

  let llmRes;
  try {
    llmRes = await llm.complete({
      tier: TIERS.ASYNC,
      studentId: student?.id ?? null,
      temperature: 0.4,
      system: NARRATIVE_SYSTEM_PROMPT,
      messages: [
        { role: "user", content: buildNarrativePrompt({ baseReport, student }) }
      ]
    });
  } catch {
    return { ...heuristic, meta: { provider: null, model: null, fallback: true } };
  }

  const parsed = !llmRes.fallback ? parseNarrativeJson(llmRes.text) : null;
  if (!parsed) {
    return {
      ...heuristic,
      meta: { provider: llmRes.provider, model: llmRes.model, fallback: true }
    };
  }

  return {
    ...parsed,
    meta: { provider: llmRes.provider, model: llmRes.model, fallback: false }
  };
}

function heuristicNarrative({ baseReport, student }) {
  const name = student?.firstName ?? "the student";
  const { completedCount, totalMissions, completionPercent } = baseReport.completion;
  const topSubjects = [...baseReport.subjectCoverage]
    .sort((a, b) => b.completedLessons - a.completedLessons)
    .slice(0, 2);
  const hasReflection = baseReport.completedMissions.some((m) => m.reflection && m.reflection.length > 0);

  let narrative;
  if (completedCount === 0) {
    narrative = `${name} hasn't started Week ${baseReport.week.weekNumber} yet. Pick one short mission together this week to build the first win, and praise effort over speed.`;
  } else if (completedCount < totalMissions) {
    const subjects = topSubjects.map((s) => s.subject).join(" and ");
    narrative = `${name} completed ${completedCount} of ${totalMissions} Week ${baseReport.week.weekNumber} missions, with strong work in ${subjects || "their chosen subjects"}. There's one or two missions left — choose one as a together-time wrap-up before next week.`;
  } else {
    narrative = `${name} finished every Week ${baseReport.week.weekNumber} mission (${completionPercent}%). That's a full week of consistent effort. Celebrate it before starting next week, and ask what strategy worked best.`;
  }

  const coachingTips = [];
  if (completedCount === 0) {
    coachingTips.push(`Sit with ${name} for the first 10 minutes of one mission to lower the activation energy.`);
  } else {
    coachingTips.push(`Praise specific effort, not "you're smart" — for example, point out when ${name} explained their thinking.`);
  }
  if (baseReport.rewards.pendingCount > 0) {
    coachingTips.push("Review pending reward requests and approve only the ones that still fit the family plan.");
  }
  if (!hasReflection) {
    coachingTips.push("Ask for one short reflection before sharing progress with school — it gives the report depth.");
  } else {
    coachingTips.push("Read one reflection together and ask which strategy helped most.");
  }

  const nextWeekPriorities = topSubjects.length > 0
    ? topSubjects.map((s) => ({
        subject: s.subject,
        reason: `Strong start in ${s.subject} — keep momentum with one stretch question next week.`
      }))
    : baseReport.subjectCoverage.slice(0, 2).map((s) => ({
        subject: s.subject,
        reason: `Plan one ${s.subject} mission early in the week to build a streak.`
      }));

  return {
    narrative,
    coachingTips: coachingTips.slice(0, 3),
    nextWeekPriorities: nextWeekPriorities.length > 0
      ? nextWeekPriorities
      : [{ subject: "Math", reason: "Start with one short Math warm-up to set the week's tone." }]
  };
}

export const NARRATIVE_SYSTEM_PROMPT = [
  "You write warm, specific weekly parent reports for a Grade 6 summer learning program.",
  "Output JSON only with this exact shape:",
  '{"narrative": string, "coachingTips": string[], "nextWeekPriorities": [{"subject": string, "reason": string}]}.',
  "narrative: 2–3 sentences. Name one specific strength. Name one specific concern. Keep the tone calm and parent-friendly. Never shame the child.",
  "coachingTips: 2–3 short, concrete actions a parent can take this week. Avoid vague advice.",
  "nextWeekPriorities: 1–3 subjects, each with a one-sentence reason rooted in the data.",
  "Never include private health, faith, or message content. Output JSON only."
].join(" ");

export function buildNarrativePrompt({ baseReport, student }) {
  const reflections = baseReport.completedMissions
    .filter((m) => m.reflection)
    .map((m) => `${m.dayLabel}: "${m.reflection}"`)
    .join("\n");
  return [
    `Student: ${student?.firstName ?? "Student"}, Grade ${student?.gradeLevel ?? 6}.`,
    `Week ${baseReport.week.weekNumber} — ${baseReport.week.theme}. Project: ${baseReport.week.project}.`,
    `Completed ${baseReport.completion.completedCount}/${baseReport.completion.totalMissions} missions (${baseReport.completion.completionPercent}%).`,
    `Earnings: ${baseReport.weeklyEarnings.xp} XP, ${baseReport.weeklyEarnings.masteryStars} mastery stars, ${baseReport.weeklyEarnings.campCoins} camp coins.`,
    `Subject coverage: ${baseReport.subjectCoverage.map((s) => `${s.subject}=${s.completedLessons}`).join(", ") || "none yet"}.`,
    `Pending rewards: ${baseReport.rewards.pendingCount}. Approved: ${baseReport.rewards.approvedCount}.`,
    `Friend invites approved: ${baseReport.invitations.approvedCount}. Pending: ${baseReport.invitations.pendingCount}.`,
    reflections ? `Recent reflections:\n${reflections}` : "No reflections written yet this week.",
    "Return JSON only."
  ].join("\n");
}

export function parseNarrativeJson(text) {
  if (typeof text !== "string") return null;
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) return null;
  let raw;
  try {
    raw = JSON.parse(match[0]);
  } catch {
    return null;
  }
  if (typeof raw.narrative !== "string" || raw.narrative.trim().length === 0) return null;
  if (!Array.isArray(raw.coachingTips) || raw.coachingTips.length === 0) return null;
  if (!Array.isArray(raw.nextWeekPriorities)) return null;
  const tips = raw.coachingTips.filter((t) => typeof t === "string" && t.trim().length > 0).slice(0, 5);
  const priorities = raw.nextWeekPriorities
    .filter((p) => p && typeof p.subject === "string" && typeof p.reason === "string")
    .slice(0, 3);
  if (tips.length === 0 || priorities.length === 0) return null;
  return {
    narrative: raw.narrative.trim(),
    coachingTips: tips,
    nextWeekPriorities: priorities
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
