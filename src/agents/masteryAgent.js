// Per-skill mastery model.
//
// Each skill is keyed as `${subject}:${topicTag}` so multiple skills roll up
// into a subject-level mean. We use a simple exponentially-weighted moving
// average instead of full Bayesian Knowledge Tracing — cheap to compute, easy
// to explain to parents, and good enough to drive support/standard/stretch
// routing. Swap in BKT or IRT later without changing the call sites.

const ALPHA = 0.3;
const SUPPORT_THRESHOLD = 0.4;
const STRETCH_THRESHOLD = 0.75;

export function createEmptySkillMastery() {
  return {};
}

export function applyGradeToMastery({ mastery = {}, skillId, score, now = () => new Date().toISOString() }) {
  const safeScore = clamp01(Number(score) || 0);
  const prior = mastery[skillId];
  const level = prior == null ? safeScore : clamp01(prior.level * (1 - ALPHA) + safeScore * ALPHA);
  return {
    ...mastery,
    [skillId]: {
      attempts: (prior?.attempts ?? 0) + 1,
      correct: (prior?.correct ?? 0) + (safeScore >= 0.99 ? 1 : 0),
      level,
      lastSeenAt: now()
    }
  };
}

export function applyGradeResultToMastery({ mastery, item, gradeResult, now }) {
  const skillId = `${item.subject}:${item.topicTag ?? "general"}`;
  return applyGradeToMastery({ mastery, skillId, score: gradeResult.score, now });
}

export function summarizeMasteryBySubject(mastery = {}) {
  const grouped = new Map();
  for (const [skillId, entry] of Object.entries(mastery)) {
    const subject = skillId.split(":")[0];
    if (!grouped.has(subject)) {
      grouped.set(subject, { sumLevel: 0, sumAttempts: 0, count: 0, skills: [] });
    }
    const bucket = grouped.get(subject);
    bucket.sumLevel += entry.level;
    bucket.sumAttempts += entry.attempts;
    bucket.count += 1;
    bucket.skills.push({ skillId, ...entry });
  }
  return [...grouped.entries()].map(([subject, data]) => {
    const meanLevel = data.count === 0 ? 0 : data.sumLevel / data.count;
    return {
      subject,
      meanLevel,
      skillCount: data.count,
      attempts: data.sumAttempts,
      skills: data.skills,
      readiness: meanToReadiness(meanLevel)
    };
  });
}

// Adapt mastery into the shape adaptiveTuningAgent already expects, so the
// existing tuner can drive itself from live grades instead of the diagnostic.
export function masteryToDiagnosticSummary(mastery = {}) {
  return {
    subjectSummaries: summarizeMasteryBySubject(mastery).map((s) => ({
      subject: s.subject,
      readiness: s.readiness
    }))
  };
}

export function isSkillMastered(mastery, skillId, threshold = STRETCH_THRESHOLD) {
  const entry = mastery?.[skillId];
  if (!entry) return false;
  return entry.attempts >= 2 && entry.level >= threshold;
}

function meanToReadiness(meanLevel) {
  if (meanLevel < SUPPORT_THRESHOLD) return "support";
  if (meanLevel > STRETCH_THRESHOLD) return "stretch";
  return "standard";
}

function clamp01(value) {
  return Math.max(0, Math.min(1, value));
}

export const MASTERY_THRESHOLDS = Object.freeze({
  ALPHA,
  SUPPORT: SUPPORT_THRESHOLD,
  STRETCH: STRETCH_THRESHOLD
});
