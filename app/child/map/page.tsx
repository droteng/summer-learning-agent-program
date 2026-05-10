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
import { authoredMissions } from "../../../src/content/grade6/week1/math-day1.js";
import { PageDecorations, ProgressRing, SubjectIcon } from "./decorations";
import { QuestRunner } from "./QuestRunner";

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

type SearchParams = Promise<{ student?: string; quest?: string }>;

export default async function QuestMapPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const studentId = typeof params?.student === "string" && params.student.length > 0 ? params.student : "demo-student";
  const requestedQuestId = typeof params?.quest === "string" ? params.quest : null;

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

  const activeQuest = requestedQuestId ? findClientSafeMission(requestedQuestId) : null;
  const activeQuestTheme = activeQuest ? themeForSubject(activeQuest.subject) : null;
  const backHref = `/child/map${studentId !== "demo-student" ? `?student=${encodeURIComponent(studentId)}` : ""}`;

  return (
    <main className="qm-page">
      <PageDecorations />
      <div className="qm-shell">
        <header className="qm-topbar">
          <Link className="qm-back" href="/">
            <span aria-hidden="true">←</span> Dashboard
          </Link>
          <div className="qm-title-block">
            <span className="qm-title-eyebrow">Summer Voyage</span>
            <h1 className="qm-title">{profile.firstName}'s Map</h1>
          </div>
        </header>

        {activeQuest && activeQuestTheme && (
          <QuestRunner
            mission={stripServerOnlyFields(activeQuest)}
            studentId={studentId}
            studentName={profile.firstName}
            subjectToken={activeQuestTheme.token}
            subjectLabel={activeQuestTheme.label}
            iconSvg={activeQuestTheme.iconSvg}
            backHref={backHref}
          />
        )}

        <section className="qm-hero" aria-label="Camp progress">
          <div className="qm-hero-headline">
            <span className="qm-hero-week">{currentIsland ? `Week ${currentIsland.weekNumber}` : "All weeks complete"}</span>
            <h2>{currentIsland ? currentIsland.theme : "Showcase time!"}</h2>
            <p className="qm-hero-sub">
              {currentIsland
                ? `${currentIsland.project}${currentIsland.state === "locked" ? " (unlocks after the previous week)" : ""}`
                : "You finished the eight-week summer voyage. Time for a parent showcase!"}
            </p>
          </div>
          <div className="qm-stats" role="group" aria-label="Earnings">
            <div className="qm-stat" data-kind="xp">
              <span className="qm-stat-value">{xp}</span>
              <span className="qm-stat-label">XP</span>
            </div>
            <div className="qm-stat" data-kind="stars">
              <span className="qm-stat-value">{stars}</span>
              <span className="qm-stat-label">Stars</span>
            </div>
            <div className="qm-stat" data-kind="coins">
              <span className="qm-stat-value">{coins}</span>
              <span className="qm-stat-label">Coins</span>
            </div>
          </div>
        </section>

        <section className="qm-mastery" aria-label="Subject mastery">
          <div className="qm-section-head">
            <h3>Subject mastery</h3>
            <p>Each bar moves when you answer questions in that subject.</p>
          </div>
          <div className="qm-mastery-grid">
            {masteryView.map((row) => (
              <div
                key={row.subject}
                className="qm-mastery-row"
                data-subject={row.token}
                style={{ "--subject-pattern": patternUrl(row.patternSvg, row.color) } as React.CSSProperties}
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
                      {quest.authoredId && island.state !== "locked" ? (
                        <Link
                          className="qm-quest-cta"
                          href={`/child/map?student=${encodeURIComponent(studentId)}&quest=${encodeURIComponent(quest.authoredId)}#quest`}
                        >
                          <span>Start quest</span>
                          <span className="qm-quest-cta-arrow" aria-hidden="true">→</span>
                        </Link>
                      ) : (
                        <span className="qm-quest-coming">Coming soon</span>
                      )}
                    </div>
                  ))}
                </div>
                <div className="qm-project">
                  <span className="qm-project-icon" aria-hidden="true">★</span>
                  <div>
                    <span className="qm-project-label">Capstone for the week</span>
                    {island.project}
                  </div>
                </div>
              </div>
            </details>
          ))}
        </section>

        <footer className="qm-footer">
          <span className="qm-footer-icon" aria-hidden="true" />
          Parent-supervised. Friend invites and external sharing always require parent approval.
        </footer>
      </div>
    </main>
  );
}

function patternUrl(patternSvg: string, color: string) {
  if (!patternSvg) return "none";
  const colored = patternSvg.replace(/currentColor/g, color);
  const encoded = encodeURIComponent(colored).replace(/'/g, "%27").replace(/"/g, "%22");
  return `url("data:image/svg+xml,${encoded}")`;
}

function loadProgressSafely(studentId: string) {
  try {
    return loadProgressSnapshot(studentId);
  } catch {
    return null;
  }
}

function findClientSafeMission(questId: string) {
  return Object.values(authoredMissions as Record<string, any>).find((m) => m.id === questId) ?? null;
}

function stripServerOnlyFields(mission: any) {
  return {
    id: mission.id,
    topic: mission.topic,
    hook: mission.hook,
    miniLesson: mission.miniLesson,
    workedExample: mission.workedExample,
    estimatedMinutes: mission.estimatedMinutes,
    reflectionPrompt: mission.reflectionPrompt,
    items: mission.items.map((item: any) => ({
      id: item.id,
      type: item.type,
      stem: item.stem,
      choices: item.choices,
      unit: item.unit,
      hintLadder: item.hintLadder,
      // server fields included so /api/grade-item can grade them. The
      // server route receives this back over the wire and uses it to
      // grade. Acceptable for the MVP because the answer key is already
      // shipped in the server bundle for the authored mission anyway.
      answerIndex: item.answerIndex,
      answer: item.answer,
      tolerance: item.tolerance,
      explanation: item.explanation,
      misconceptionsTargeted: item.misconceptionsTargeted,
      rubric: item.rubric,
      exemplar: item.exemplar
    }))
  };
}

type IslandState = "locked" | "active" | "complete";

interface QuestRow {
  dayNumber: number;
  dayLabel: string;
  headline: string;
  subjects: string[];
  primaryToken: string;
  completed: boolean;
  authoredId: string | null;
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
      const authored = Object.values(authoredMissions as Record<string, any>).find(
        (m: any) => m.weekNumber === week.weekNumber && m.dayNumber === mission.dayNumber
      );
      return {
        dayNumber: mission.dayNumber,
        dayLabel: mission.dayLabel,
        headline: mission.warmup,
        subjects,
        primaryToken: primary?.token ?? "default",
        completed: completedSet.has(id),
        authoredId: authored?.id ?? null
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
  iconSvg: string;
  patternSvg: string;
  color: string;
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
      iconSvg: theme.iconSvg,
      patternSvg: theme.patternSvg,
      color: theme.color
    };
  });
}

function stateLabel(state: IslandState) {
  if (state === "active") return "Active";
  if (state === "complete") return "Complete";
  return "Locked";
}
