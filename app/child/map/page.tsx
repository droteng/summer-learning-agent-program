import Link from "next/link";
import "./quest-map.css";
import { createProgramPlan } from "../../../src/agents/principalAgent.js";
import { tuneProgramPlan } from "../../../src/agents/adaptiveTuningAgent.js";
import {
  masteryToDiagnosticSummary,
  summarizeMasteryBySubject
} from "../../../src/agents/masteryAgent.js";
import { loadProgressSnapshot } from "../../../src/data/localDb.js";
import { SUBJECT_ORDER, SUBJECT_THEMES, themeForSubject } from "../../../src/data/subjectTheme.js";

export const dynamic = "force-dynamic";

const DEMO_PROFILE = Object.freeze({
  id: "demo-student",
  firstName: "Avery",
  gradeLevel: 6,
  interests: ["coding", "soccer"],
  selectedEnrichmentTracks: ["healthWellness", "financialLiteracy"],
  activityPreferences: { outdoorAllowed: true }
});

const DEMO_PARENT_POLICY = Object.freeze({
  allowedRewards: ["device", "park"],
  friendInvitesEnabled: false,
  teacherSharingEnabled: true
});

type SearchParams = Promise<{ student?: string }>;

export default async function QuestMapPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const studentId = typeof params?.student === "string" && params.student.length > 0 ? params.student : "demo-student";

  const profile = { ...DEMO_PROFILE, id: studentId };
  const progress = loadProgressSafely(studentId);
  const programPlan = createProgramPlan(profile, DEMO_PARENT_POLICY);

  const skillMastery = progress?.skillMastery ?? {};
  const tuned = tuneProgramPlan({
    programPlan,
    diagnosticSummary: masteryToDiagnosticSummary(skillMastery)
  });

  const completedMissionIds: string[] = progress?.completedMissionIds ?? [];
  const islands = buildIslandStates(tuned.weeklyMissionPlans, completedMissionIds);
  const currentIslandIndex = islands.findIndex((island) => island.state !== "complete");
  const currentIsland = islands[currentIslandIndex === -1 ? islands.length - 1 : currentIslandIndex];
  const masteryView = buildMasteryView(skillMastery);

  const xp = progress?.xp ?? 0;
  const stars = progress?.masteryStars ?? 0;
  const coins = progress?.campCoins ?? 0;

  return (
    <main className="qm-page">
      <div className="qm-shell">
        <header className="qm-topbar">
          <Link className="qm-back" href="/">← Back to dashboard</Link>
          <h1 className="qm-title">{profile.firstName}'s Summer Voyage</h1>
        </header>

        <section className="qm-hero" aria-label="Camp progress">
          <div>
            <h2>{currentIsland ? `Week ${currentIsland.weekNumber} — ${currentIsland.theme}` : "All weeks complete"}</h2>
            <p className="qm-hero-sub">
              {currentIsland
                ? `Today's voyage: ${currentIsland.project} ${currentIsland.state === "locked" ? "(unlocks after the previous week)" : ""}`
                : "You finished the eight-week summer voyage. Time for a showcase!"}
            </p>
          </div>
          <div className="qm-stats" role="group" aria-label="Earnings">
            <div className="qm-stat">
              <span className="qm-stat-value">{xp}</span>
              <span className="qm-stat-label">XP</span>
            </div>
            <div className="qm-stat">
              <span className="qm-stat-value">{stars}</span>
              <span className="qm-stat-label">Mastery Stars</span>
            </div>
            <div className="qm-stat">
              <span className="qm-stat-value">{coins}</span>
              <span className="qm-stat-label">Camp Coins</span>
            </div>
          </div>
        </section>

        <section className="qm-mastery" aria-label="Subject mastery">
          <h3>Subject mastery</h3>
          <div className="qm-mastery-grid">
            {masteryView.map((row) => (
              <div key={row.subject} className="qm-mastery-row" data-subject={row.token}>
                <div className="qm-monogram" aria-hidden="true">{row.monogram}</div>
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
                      : `${row.attempts} ${row.attempts === 1 ? "answer" : "answers"} • ${row.readiness}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="qm-map" aria-label="Weekly islands">
          {islands.map((island) => (
            <details
              key={island.weekNumber}
              className="qm-island"
              data-state={island.state}
              open={island.weekNumber === (currentIsland?.weekNumber ?? 1)}
            >
              <summary className="qm-island-summary">
                <div className="qm-week-badge" aria-hidden="true">
                  <span className="qm-week-label">Week</span>
                  <span className="qm-week-num">{island.weekNumber}</span>
                </div>
                <div>
                  <h2 className="qm-island-title">{island.theme}</h2>
                  <p className="qm-island-project">Project: {island.project}</p>
                </div>
                <div className="qm-progress-ring">
                  <ProgressRing percent={island.completionPercent} />
                  <span className="qm-state-pill">{stateLabel(island.state)}</span>
                </div>
              </summary>
              <div className="qm-island-body">
                <div className="qm-quests">
                  {island.quests.map((quest) => (
                    <div
                      key={quest.dayNumber}
                      className="qm-quest"
                      data-subject={quest.primaryToken}
                      data-done={quest.completed ? "true" : "false"}
                    >
                      <div className="qm-quest-head">
                        <span className="qm-quest-day">{quest.dayLabel}</span>
                        <span className="qm-quest-status" aria-hidden="true">{quest.completed ? "✓" : ""}</span>
                      </div>
                      <p className="qm-quest-title">{quest.headline}</p>
                      <div className="qm-quest-subjects" aria-label={`Subjects: ${quest.subjects.join(", ")}`}>
                        {quest.subjects.map((subject) => {
                          const theme = themeForSubject(subject);
                          if (!theme) return null;
                          return (
                            <span
                              key={subject}
                              className="qm-chip"
                              title={theme.label}
                              data-subject={theme.token}
                            >
                              {theme.monogram}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="qm-project">
                  <span className="qm-project-label">Capstone for the week</span>
                  {island.project}
                </div>
              </div>
            </details>
          ))}
        </section>

        <footer className="qm-footer">
          Parent-supervised. Friend invites and external sharing always require parent approval.
        </footer>
      </div>
    </main>
  );
}

function loadProgressSafely(studentId: string) {
  try {
    return loadProgressSnapshot(studentId);
  } catch {
    return null;
  }
}

type IslandState = "locked" | "active" | "complete";

interface QuestRow {
  dayNumber: number;
  dayLabel: string;
  headline: string;
  subjects: string[];
  primaryToken: string;
  completed: boolean;
}

interface IslandRow {
  weekNumber: number;
  theme: string;
  project: string;
  state: IslandState;
  completionPercent: number;
  quests: QuestRow[];
}

function buildIslandStates(weeklyMissionPlans: any[], completedMissionIds: string[]): IslandRow[] {
  const completedSet = new Set(completedMissionIds);
  let unlocked = true;
  return weeklyMissionPlans.map((weekly) => {
    const week = weekly.week;
    const quests: QuestRow[] = weekly.missions.map((mission: any) => {
      const id = `week-${week.weekNumber}-day-${mission.dayNumber}`;
      const subjects = mission.lessons.map((l: any) => l.subject);
      const primary = themeForSubject(subjects[0]);
      return {
        dayNumber: mission.dayNumber,
        dayLabel: mission.dayLabel,
        headline: mission.warmup,
        subjects,
        primaryToken: primary?.token ?? "default",
        completed: completedSet.has(id)
      };
    });
    const completedCount = quests.filter((q) => q.completed).length;
    const completionPercent = quests.length === 0 ? 0 : Math.round((completedCount / quests.length) * 100);

    let state: IslandState;
    if (!unlocked) {
      state = "locked";
    } else if (completedCount === quests.length) {
      state = "complete";
    } else {
      state = "active";
    }
    if (state !== "complete") {
      unlocked = false;
    }

    return {
      weekNumber: week.weekNumber,
      theme: week.theme,
      project: week.project,
      state,
      completionPercent,
      quests
    };
  });
}

interface MasteryRow {
  subject: string;
  label: string;
  monogram: string;
  token: string;
  level: number;
  attempts: number;
  readiness: string;
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
      readiness: data?.readiness ?? "no data yet"
    };
  });
}

function stateLabel(state: IslandState) {
  if (state === "active") return "In progress";
  if (state === "complete") return "Complete";
  return "Locked";
}

function ProgressRing({ percent }: { percent: number }) {
  const safe = Math.max(0, Math.min(100, percent));
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (safe / 100) * circumference;
  return (
    <div className="qm-ring" aria-hidden="true">
      <svg width="48" height="48" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r={radius} fill="none" stroke="#eef0f7" strokeWidth="6" />
        <circle
          cx="24"
          cy="24"
          r={radius}
          fill="none"
          stroke="url(#qm-ring-grad)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
        <defs>
          <linearGradient id="qm-ring-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
        </defs>
        <text x="24" y="24" textAnchor="middle" dominantBaseline="central" transform="rotate(90 24 24)">
          {safe}%
        </text>
      </svg>
    </div>
  );
}
