// Per-student entitlement resolver. The map, lesson, grading, and weekly-
// report routes all need the same answer to: "should this child get the
// paid features right now?" Resolving it in one place keeps the gate logic
// honest and easy to audit.
//
// Sources of truth:
//   - parentEmail comes from the most recent active consent record (falls
//     back to newest if none active).
//   - subscription comes from the subscriptions table keyed by parent email.
//   - billingAgent.getActivePlan handles the state machine (trialing,
//     past-due grace, canceled).

import {
  FEATURES,
  getActivePlan,
  isFeatureUnlocked,
  PLAN_TIERS,
  summarizeBilling
} from "./billingAgent.js";
import { loadConsentRecords, loadSubscription } from "../data/db.js";

/**
 * @param {{ studentId: string, now?: () => Date }} args
 */
export async function resolveEntitlement(args) {
  const { studentId, now } = args ?? {};
  if (!studentId) {
    return defaultEntitlement();
  }

  let parentEmail = null;
  let consentRecords = [];
  try {
    consentRecords = await loadConsentRecords(studentId);
  } catch {
    // fall through with no records
  }
  parentEmail = pickParentEmail(consentRecords);

  let subscription = null;
  if (parentEmail) {
    try {
      subscription = await loadSubscription(parentEmail);
    } catch {
      // fall through with no subscription
    }
  }

  const tier = getActivePlan(subscription, { now });
  const summary = summarizeBilling(subscription, { now });
  return Object.freeze({
    studentId,
    parentEmail,
    tier,
    weeksUnlocked: summary.weeksUnlocked,
    maxChildren: summary.maxChildren,
    llmTutoring: isFeatureUnlocked({ subscription, feature: FEATURES.LLM_TUTORING, now }),
    llmReports: isFeatureUnlocked({ subscription, feature: FEATURES.LLM_REPORTS, now }),
    teacherShare: isFeatureUnlocked({ subscription, feature: FEATURES.TEACHER_SHARE, now }),
    achievementExport: isFeatureUnlocked({
      subscription,
      feature: FEATURES.ACHIEVEMENT_EXPORT,
      now
    }),
    cancelAtPeriodEnd: summary.cancelAtPeriodEnd,
    currentPeriodEnd: summary.currentPeriodEnd
  });
}

function defaultEntitlement() {
  return Object.freeze({
    studentId: null,
    parentEmail: null,
    tier: PLAN_TIERS.FREE,
    weeksUnlocked: 1,
    maxChildren: 1,
    llmTutoring: false,
    llmReports: false,
    teacherShare: false,
    achievementExport: false,
    cancelAtPeriodEnd: false,
    currentPeriodEnd: null
  });
}

export function pickParentEmail(records = []) {
  if (!Array.isArray(records) || records.length === 0) return null;
  const active = records.find((r) => r?.status === "active");
  if (active?.parentEmail) return active.parentEmail;
  const newest = [...records].sort(
    (a, b) => new Date(b?.createdAt ?? 0).getTime() - new Date(a?.createdAt ?? 0).getTime()
  )[0];
  return newest?.parentEmail ?? null;
}

// Pure function — used by the page and the upgrade banner copy. Doesn't hit
// the database so it stays cheap inside render loops.
export function isWeekUnlocked({ weekNumber, weeksUnlocked }) {
  return Number(weekNumber) <= Number(weeksUnlocked ?? 1);
}
