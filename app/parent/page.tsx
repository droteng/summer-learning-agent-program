import Link from "next/link";
import "./parent.css";
import { createProgramPlan } from "../../src/agents/principalAgent.js";
import { tuneProgramPlan } from "../../src/agents/adaptiveTuningAgent.js";
import {
  masteryToDiagnosticSummary,
  summarizeMasteryBySubject
} from "../../src/agents/masteryAgent.js";
import { createWeeklyParentReportWithLlm } from "../../src/agents/parentLiaisonAgent.js";
import { createLlm } from "../../src/agents/llm/index.js";
import { loadConsentRecords, loadProgressSnapshot } from "../../src/data/db.js";
import { consentStatusForParent } from "../../src/agents/consentAgent.js";
import { SUBJECT_ORDER, SUBJECT_THEMES, themeForSubject } from "../../src/data/subjectTheme.js";
import { PageDecorations, SubjectIcon } from "../child/map/decorations";
import { ApprovalControls } from "./ApprovalControls";

export const dynamic = "force-dynamic";

const DEMO_PROFILE = Object.freeze({
  id: "demo-student",
  firstName: "Avery",
  gradeLevel: 6,
  interests: ["coding", "soccer"],
  selectedEnrichmentTracks: ["healthWellness", "financialLiteracy"],
  activityPreferences: { outdoorAllowed: true }
});

const DEMO_POLICY = Object.freeze({
  allowedRewards: ["device", "park"],
  friendInvitesEnabled: false,
  teacherSharingEnabled: true
});

let cachedLlm: ReturnType<typeof createLlm> | null = null;
function getLlm() {
  if (!cachedLlm) cachedLlm = createLlm();
  return cachedLlm;
}

type SearchParams = Promise<{ student?: string; week?: string }>;

export default async function ParentDashboardPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const studentId =
    typeof params?.student === "string" && params.student.length > 0 ? params.student : "demo-student";
  const weekNumber = Number(params?.week ?? 1) || 1;

  const profile = { ...DEMO_PROFILE, id: studentId };
  const progress = await loadProgressSafely(studentId);
  const consentRecords = await loadConsentSafely(studentId);
  const consent = consentStatusForParent({ records: consentRecords, studentId });
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
  const pendingApprovals =
    (progress?.rewardRequests ?? []).filter((r: any) => r.status === "pending_parent").length +
    (progress?.friendInvites ?? []).filter((i: any) => i.status === "needs_parent_approval").length;

  return (
    <main className="pd-page">
      <PageDecorations />
      <div className="pd-shell">
        <header className="pd-topbar">
          <Link className="pd-back" href="/">
            <span aria-hidden="true">←</span> Dashboard
          </Link>
          <div className="pd-title-block">
            <span className="pd-title-eyebrow">Parent View</span>
            <h1 className="pd-title">{profile.firstName}'s Summer</h1>
          </div>
        </header>

        {consent.status !== "active" && (
          <section className="pd-banner" aria-label="Consent required">
            <div className="pd-banner-body">
              <span className="pd-banner-eyebrow">COPPA · Consent required</span>
              <span className="pd-banner-title">
                {consent.status === "missing"
                  ? "Record parental consent before we save more of your child's data."
                  : "Your current consent is missing some scopes. Update it to keep using full features."}
              </span>
            </div>
            <Link
              className="pd-banner-cta"
              href={`/parent/consent?student=${encodeURIComponent(studentId)}&child=${encodeURIComponent(profile.firstName)}`}
            >
              Record consent →
            </Link>
          </section>
        )}

        <section className="pd-hero" aria-label="At a glance">
          <div>
            <h2>Week {weekNumber} — {report.status === "ready" ? report.week.theme : "Not started"}</h2>
            <p className="pd-hero-sub">
              {report.status === "ready"
                ? `${profile.firstName} is working on Project: ${report.week.project}.`
                : "Pick a week from the URL (?week=1) once your child has started missions."}
            </p>
          </div>
          <div className="pd-hero-stats" role="group" aria-label="Headline metrics">
            <div className="pd-hero-stat" data-kind="completion">
              <span className="pd-hero-stat-value">{completionPct}%</span>
              <span className="pd-hero-stat-label">Week complete</span>
            </div>
            <div className="pd-hero-stat" data-kind="streak">
              <span className="pd-hero-stat-value">{progress?.masteryStars ?? 0}</span>
              <span className="pd-hero-stat-label">Stars</span>
            </div>
            <div className="pd-hero-stat" data-kind="approvals">
              <span className="pd-hero-stat-value">{pendingApprovals}</span>
              <span className="pd-hero-stat-label">Pending</span>
            </div>
          </div>
        </section>

        {report.status === "ready" && (
          <section className="pd-narrative" aria-label="Weekly summary">
            <span className="pd-narrative-meta">Weekly summary</span>
            <p className="pd-narrative-text">{report.narrative}</p>
            {report.narrativeMeta?.fallback && (
              <p className="pd-narrative-meta-fallback">
                Generated in classic mode (no LLM call this turn). Configure ANTHROPIC_API_KEY for richer narratives.
              </p>
            )}
            {report.coachingTips && report.coachingTips.length > 0 && (
              <div className="pd-tips">
                {report.coachingTips.map((tip: string, i: number) => (
                  <div key={i} className="pd-tip">
                    <span className="pd-tip-num" aria-hidden="true">{i + 1}</span>
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            )}
            {report.nextWeekPriorities && report.nextWeekPriorities.length > 0 && (
              <>
                <p className="pd-narrative-meta" style={{ marginTop: "20px", display: "block" }}>
                  Next week priorities
                </p>
                <div className="pd-priorities">
                  {report.nextWeekPriorities.map((p: any, i: number) => {
                    const theme = themeForSubject(p.subject);
                    return (
                      <div key={i} className="pd-priority" data-subject={theme?.token ?? "default"}>
                        <div className="pd-priority-subject">
                          <span className="pd-priority-subject-mono">{theme?.monogram ?? "?"}</span>
                          {theme?.label ?? p.subject}
                        </div>
                        <p className="pd-priority-reason">{p.reason}</p>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </section>
        )}

        <section className="pd-card" aria-label="Subject mastery">
          <div className="pd-section-head">
            <h3>Subject mastery</h3>
            <p>Each bar reflects per-skill mastery from {profile.firstName}'s graded answers.</p>
          </div>
          <div className="pd-mastery-grid">
            {masteryView.map((row) => (
              <div
                key={row.subject}
                className="pd-mastery-row"
                data-subject={row.token}
              >
                <div className="qm-icon" aria-hidden="true">
                  <SubjectIcon svg={row.iconSvg} />
                </div>
                <div className="qm-mastery-body">
                  <div className="qm-mastery-label">
                    <span>{row.label}</span>
                    <span className="qm-mastery-pct">{Math.round(row.level * 100)}%</span>
                  </div>
                  <div
                    className="qm-bar"
                    role="progressbar"
                    aria-label={`${row.label} mastery`}
                    aria-valuenow={Math.round(row.level * 100)}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div className="qm-bar-fill" style={{ width: `${Math.round(row.level * 100)}%` }} />
                  </div>
                  <p className="qm-mastery-meta">
                    {row.attempts === 0
                      ? "No questions answered yet"
                      : `${row.attempts} ${row.attempts === 1 ? "answer" : "answers"} · ${row.readiness}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="pd-card" aria-label="Pending approvals">
          <div className="pd-section-head">
            <h3>Pending approvals</h3>
            <p>Reward requests and friend invitations waiting on you.</p>
          </div>
          <div className="pd-approvals-grid">
            <div className="pd-approvals-bucket" data-kind="rewards">
              <span className="pd-approvals-eyebrow">Reward requests</span>
              <ApprovalControls
                studentId={studentId}
                bucket="rewards"
                items={(progress?.rewardRequests ?? []).map((r: any) => ({
                  id: r.id,
                  label: r.requestedReward,
                  status:
                    r.status === "approved"
                      ? "approved"
                      : r.status === "declined"
                        ? "declined"
                        : "pending"
                }))}
                emptyText={`No reward requests yet. ${profile.firstName} can request one after a mission.`}
              />
            </div>
            <div className="pd-approvals-bucket" data-kind="invites">
              <span className="pd-approvals-eyebrow">Friend invites</span>
              <ApprovalControls
                studentId={studentId}
                bucket="invites"
                items={(progress?.friendInvites ?? []).map((i: any) => ({
                  id: i.id,
                  label: i.friendName ?? "Unnamed friend",
                  status:
                    i.status === "approved"
                      ? "approved"
                      : i.status === "declined"
                        ? "declined"
                        : "pending"
                }))}
                emptyText="No invitations yet. Children must request these and only with parent approval."
              />
            </div>
          </div>
        </section>

        {progress?.reflections && Object.keys(progress.reflections).length > 0 && (
          <section className="pd-card" aria-label="Recent reflections">
            <div className="pd-section-head">
              <h3>Recent reflections</h3>
              <p>Read with {profile.firstName} and ask which strategy helped most.</p>
            </div>
            <div className="pd-reflections">
              {Object.entries(progress.reflections)
                .slice(-5)
                .reverse()
                .map(([key, text]) => (
                  <div key={key} className="pd-reflection">
                    <span className="pd-reflection-day">{key}</span>
                    <p className="pd-reflection-text">"{text as string}"</p>
                  </div>
                ))}
            </div>
          </section>
        )}

        <section className="pd-card" aria-label="Sharing">
          <div className="pd-section-head">
            <h3>Sharing</h3>
            <p>Send transcripts, certificates, and weekly reports — only with your approval.</p>
          </div>
          <div className="pd-share-grid">
            <Link href="/printable-package" className="pd-share-link" data-kind="report">
              <span className="pd-share-icon" aria-hidden="true">PDF</span>
              <div className="pd-share-body">
                <span className="pd-share-title">Printable report package</span>
                <span className="pd-share-sub">Save as PDF or print for school</span>
              </div>
            </Link>
            <Link
              href={`/child/map?student=${encodeURIComponent(studentId)}`}
              className="pd-share-link"
              data-kind="map"
            >
              <span className="pd-share-icon" aria-hidden="true">→</span>
              <div className="pd-share-body">
                <span className="pd-share-title">Open child map</span>
                <span className="pd-share-sub">See what {profile.firstName} sees</span>
              </div>
            </Link>
            <Link href="/" className="pd-share-link" data-kind="teacher">
              <span className="pd-share-icon" aria-hidden="true">↗</span>
              <div className="pd-share-body">
                <span className="pd-share-title">Teacher share & rewards</span>
                <span className="pd-share-sub">Approve invites and rewards on the dashboard</span>
              </div>
            </Link>
            <Link
              href={`/parent/billing?student=${encodeURIComponent(studentId)}`}
              className="pd-share-link"
              data-kind="billing"
            >
              <span className="pd-share-icon" aria-hidden="true">$</span>
              <div className="pd-share-body">
                <span className="pd-share-title">Billing & plan</span>
                <span className="pd-share-sub">Free Week 1; upgrade to unlock Weeks 2-8</span>
              </div>
            </Link>
          </div>
        </section>

        <footer className="pd-footer">
          Parent-supervised. All sharing requires approval. No private child-to-child messaging in MVP.
        </footer>
      </div>
    </main>
  );
}

async function loadProgressSafely(studentId: string) {
  try {
    return await loadProgressSnapshot(studentId);
  } catch {
    return null;
  }
}

async function loadConsentSafely(studentId: string) {
  try {
    return await loadConsentRecords(studentId);
  } catch {
    return [];
  }
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
}

function buildMasteryView(skillMastery: Record<string, any>): MasteryRow[] {
  const summary = summarizeMasteryBySubject(skillMastery);
  const bySubject = new Map(summary.map((row: any) => [row.subject, row]));

  return SUBJECT_ORDER.map((subject) => {
    const theme = SUBJECT_THEMES[subject as keyof typeof SUBJECT_THEMES];
    const data = bySubject.get(subject);
    return {
      subject,
      label: theme.label,
      monogram: theme.monogram,
      token: theme.token,
      level: data?.meanLevel ?? 0,
      attempts: data?.attempts ?? 0,
      readiness: data?.readiness ?? "no data yet",
      iconSvg: theme.iconSvg
    };
  });
}
