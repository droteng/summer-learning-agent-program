// Shared data loader for /parent and its sub-routes. Each sub-route
// (mastery, approvals, book, reports, sharing) calls loadParentData
// with the student id + week query params and gets the same shape.
//
// This keeps the nav hub thin (just renders cards) and each sub-route
// focused on rendering ONE slice of the data with deeper context.

import { createProgramPlan } from "../../src/agents/principalAgent.js";
import { tuneProgramPlan } from "../../src/agents/adaptiveTuningAgent.js";
import {
  masteryToDiagnosticSummary,
  summarizeMasteryBySubject
} from "../../src/agents/masteryAgent.js";
import { createWeeklyParentReportWithLlm } from "../../src/agents/parentLiaisonAgent.js";
import { createLlm } from "../../src/agents/llm/index.js";
import { loadConsentRecords, loadFamilyAccount, loadProgressSnapshot } from "../../src/data/db.js";
import { consentStatusForParent } from "../../src/agents/consentAgent.js";
import { resolveEntitlement } from "../../src/agents/entitlementAgent.js";
import { SUBJECT_THEMES, themeForSubject } from "../../src/data/subjectTheme.js";

export const DEMO_PROFILE = Object.freeze({
  id: "demo-student",
  firstName: "Avery",
  gradeLevel: 6,
  interests: ["coding", "soccer"],
  selectedEnrichmentTracks: ["healthWellness", "financialLiteracy"],
  activityPreferences: { outdoorAllowed: true }
});

export const DEMO_POLICY = Object.freeze({
  allowedRewards: ["device", "park"],
  friendInvitesEnabled: false,
  teacherSharingEnabled: true
});

let cachedLlm: ReturnType<typeof createLlm> | null = null;
function getLlm() {
  if (!cachedLlm) cachedLlm = createLlm();
  return cachedLlm;
}

export async function loadParentData(args: { studentId?: string; weekNumber?: number; accountId?: string } = {}) {
  const studentId = args.studentId && args.studentId.length > 0 ? args.studentId : "demo-student";
  const weekNumber = args.weekNumber && args.weekNumber > 0 ? args.weekNumber : 1;

  // Resolve the real child (name + grade) from the family account so the
  // dashboard, weekly report, and program plan match THIS child — not the
  // hardcoded "Avery / Grade 6" demo profile.
  let child: any = null;
  if (args.accountId) {
    try {
      const account = await loadFamilyAccount(args.accountId);
      const children = Array.isArray(account?.children) ? account.children : [];
      child = children.find((c: any) => c?.id === studentId) ?? null;
    } catch {
      /* fall back to demo profile */
    }
  }
  const profile = {
    ...DEMO_PROFILE,
    id: studentId,
    firstName: child?.firstName ?? DEMO_PROFILE.firstName,
    gradeLevel: Number.isFinite(Number(child?.gradeLevel)) ? Number(child.gradeLevel) : DEMO_PROFILE.gradeLevel
  };

  let progress: any = null;
  try {
    progress = await loadProgressSnapshot(studentId);
  } catch {
    /* keep null */
  }

  let consentRecords: any[] = [];
  try {
    consentRecords = await loadConsentRecords(studentId);
  } catch {
    /* keep empty */
  }
  const consent = consentStatusForParent({ records: consentRecords, studentId });
  const entitlement = await resolveEntitlement({ studentId, accountId: args.accountId });

  const programPlan = createProgramPlan(profile, DEMO_POLICY);
  const skillMastery = progress?.skillMastery ?? {};
  const tuned = tuneProgramPlan({
    programPlan,
    diagnosticSummary: masteryToDiagnosticSummary(skillMastery)
  });

  const report = await createWeeklyParentReportWithLlm({
    student: profile,
    programPlan: tuned,
    progress: progress ?? undefined,
    weekNumber,
    llm: getLlm()
  });

  const masteryView = buildMasteryView(skillMastery);
  const completionPct = report.status === "ready" ? report.completion.completionPercent : 0;
  const pendingApprovalCount =
    (progress?.rewardRequests ?? []).filter((r: any) => r.status === "pending_parent").length +
    (progress?.friendInvites ?? []).filter((i: any) => i.status === "needs_parent_approval").length;

  return {
    studentId,
    weekNumber,
    profile,
    progress,
    consent,
    entitlement,
    programPlan: tuned,
    report,
    masteryView,
    completionPct,
    pendingApprovalCount
  };
}

interface MasteryRow {
  subject: string;
  label: string;
  monogram: string;
  token: string;
  level: number;
  attempts: number;
  readiness: string;
  iconSvg: string;
  patternSvg: string;
  color: string;
}

function buildMasteryView(skillMastery: Record<string, any>): MasteryRow[] {
  // summarizeMasteryBySubject returns an ARRAY of per-subject rows, so index
  // it by subject via a Map — `summary[subject]` on an array is always
  // undefined, which previously made this whole panel read 0/not_started.
  const summary = summarizeMasteryBySubject(skillMastery);
  const bySubject = new Map(summary.map((row: any) => [row.subject, row]));
  const subjects = Object.keys(SUBJECT_THEMES) as Array<keyof typeof SUBJECT_THEMES>;
  return subjects.map((subject) => {
    const theme = SUBJECT_THEMES[subject];
    const row = bySubject.get(subject);
    return {
      subject,
      label: theme.label,
      monogram: theme.monogram,
      token: theme.token,
      level: row?.meanLevel ?? 0,
      attempts: row?.attempts ?? 0,
      readiness: row?.readiness ?? "not_started",
      iconSvg: theme.iconSvg,
      patternSvg: theme.patternSvg,
      color: theme.color
    };
  });
}

export type ParentData = Awaited<ReturnType<typeof loadParentData>>;
