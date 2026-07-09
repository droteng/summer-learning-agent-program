import Link from "next/link";
import "../quest-map.css";
import { requireStudent } from "../../../lib/auth-server";
import { createProgramPlan } from "../../../../src/agents/principalAgent.js";
import { tuneProgramPlan } from "../../../../src/agents/adaptiveTuningAgent.js";
import {
  masteryToDiagnosticSummary,
  summarizeMasteryBySubject
} from "../../../../src/agents/masteryAgent.js";
import { loadProgressSnapshot } from "../../../../src/data/localDb.js";
import { resolveEntitlement, isWeekUnlocked } from "../../../../src/agents/entitlementAgent.js";
import { computeStreak, streakMessage } from "../../../../src/agents/streakAgent.js";
import { SUBJECT_ORDER, SUBJECT_THEMES, themeForSubject } from "../../../../src/data/subjectTheme.js";
import {
  authoredMissions,
  findAuthoredMissionsForDay,
  findEnrichmentMissions,
  getAuthoredMissionById
} from "../../../../src/content/index.js";
import { PageDecorations, ProgressRing, SubjectIcon } from "../decorations";
import { QuestRunner } from "../QuestRunner";
import { createImageAgent, INTENTS } from "../../../../src/agents/imageAgent.js";
import {
  STATIC_IMAGE_FALLBACKS,
  staticMissionHeroForId
} from "../../../../src/data/staticImageCatalog.js";

let cachedImageAgent: ReturnType<typeof createImageAgent> | null = null;
function imageAgent() {
  if (!cachedImageAgent) cachedImageAgent = createImageAgent();
  return cachedImageAgent;
}

async function getMissionIllustration(mission: any): Promise<string | null> {
  if (!mission) return null;
  const staticHero = staticMissionHeroForId(mission.id);
  if (staticHero) return staticHero.url;
  try {
    const result = await imageAgent().generate({
      intent: INTENTS.MISSION_HERO,
      subject: mission.subject,
      topic: mission.topic,
      scene: mission.hook,
      aspectRatio: "16:9"
    });
    return result.url;
  } catch {
    return STATIC_IMAGE_FALLBACKS.mission_hero.url;
  }
}

async function getConceptDiagram(mission: any): Promise<string | null> {
  if (!mission) return null;
  try {
    const recap = Array.isArray(mission.miniLesson) ? mission.miniLesson.slice(0, 2).join(" ") : "";
    const result = await imageAgent().generate({
      intent: INTENTS.CONCEPT_DIAGRAM,
      subject: mission.subject,
      topic: mission.topic,
      scene: `Labeled educational diagram explaining: ${mission.topic}. Key idea: ${recap}. Clear labels, arrows, friendly cartoon style, no human faces.`,
      aspectRatio: "4:3"
    });
    return result.url;
  } catch {
    return STATIC_IMAGE_FALLBACKS.concept_diagram.url;
  }
}

async function getVocabCardUrl(mission: any, term: { term: string; definition: string }): Promise<string | null> {
  if (!term?.term) return null;
  try {
    const result = await imageAgent().generate({
      intent: INTENTS.VOCAB_CARD,
      subject: mission?.subject,
      topic: term.term,
      scene: `Vocabulary card for the term "${term.term}" — a small friendly cartoon illustration that visualizes: ${term.definition}. Big readable term label. No human faces.`,
      aspectRatio: "1:1"
    });
    return result.url;
  } catch {
    return STATIC_IMAGE_FALLBACKS.vocab_card.url;
  }
}

async function buildVocabCardMap(mission: any): Promise<Record<string, string | null>> {
  const terms: { term: string; definition: string }[] = Array.isArray(mission?.keyTerms) ? mission.keyTerms : [];
  if (terms.length === 0) return {};
  const entries = await Promise.all(terms.map(async (t) => [t.term, await getVocabCardUrl(mission, t)] as const));
  return Object.fromEntries(entries);
}

async function getSubjectHero(subject: string, label: string): Promise<string | null> {
  if (!subject) return null;
  try {
    const result = await imageAgent().generate({
      intent: INTENTS.SUBJECT_HERO,
      subject,
      topic: label,
      scene: `Decorative banner illustrating the school subject "${label}". Iconic objects and symbols for the subject arranged in a friendly cartoon collage. Bright vibrant colors, no human faces, no text.`,
      aspectRatio: "3:1"
    });
    return result.url;
  } catch {
    return STATIC_IMAGE_FALLBACKS.subject_hero.url;
  }
}

async function buildSubjectHeroMap(subjects: { subject: string; label: string }[]): Promise<Record<string, string | null>> {
  const unique = Array.from(new Map(subjects.map((s) => [s.subject, s])).values());
  const entries = await Promise.all(unique.map(async (s) => [s.subject, await getSubjectHero(s.subject, s.label)] as const));
  return Object.fromEntries(entries);
}

async function getIslandIllustration(island: { theme: string; project: string } | undefined | null): Promise<string | null> {
  if (!island) return STATIC_IMAGE_FALLBACKS.decoration.url;
  try {
    const result = await imageAgent().generate({
      intent: INTENTS.DECORATION,
      topic: island.theme,
      scene: `Summer camp week themed "${island.theme}". Capstone project: ${island.project}. Bright outdoor adventure scene with kid-friendly tools and gear, no faces, no text.`,
      aspectRatio: "16:9"
    });
    return result.url;
  } catch {
    return STATIC_IMAGE_FALLBACKS.decoration.url;
  }
}

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
  const { studentId, studentName, studentGrade } = await requireStudent("/child/signin");
  const requestedQuestId = typeof params?.quest === "string" ? params.quest : null;

  const profile = { ...DEMO_PROFILE, id: studentId, firstName: studentName, gradeLevel: studentGrade };
  const progress = await loadProgressSafely(studentId);
  const programPlan = createProgramPlan(profile, DEMO_PARENT_POLICY);

  const skillMastery = progress?.skillMastery ?? {};
  const tuned = tuneProgramPlan({
    programPlan,
    diagnosticSummary: masteryToDiagnosticSummary(skillMastery)
  });

  const entitlement = await resolveEntitlement({ studentId });
  const completedMissionIds: string[] = progress?.completedMissionIds ?? [];
  const islands = buildIslandStates(
    tuned.weeklyMissionPlans,
    completedMissionIds,
    entitlement.weeksUnlocked,
    studentGrade
  );
  const currentIslandIndex = islands.findIndex((island) => island.state !== "complete");
  const currentIsland = islands[currentIslandIndex === -1 ? islands.length - 1 : currentIslandIndex];
  const masteryView = buildMasteryView(skillMastery);

  const xp = progress?.xp ?? 0;
  const stars = progress?.masteryStars ?? 0;
  const coins = progress?.campCoins ?? 0;

  const streak = computeStreak({
    completionLog: progress?.completionLog ?? [],
    streakFreezesAvailable: progress?.streakFreezesAvailable ?? 0
  });
  const freshlyCompletedIsland = islands.find(
    (island) => island.state === "complete" && island.weekNumber === (currentIsland?.weekNumber ?? 1) - 1
  );

  const enrichmentMissions = findEnrichmentMissions({ gradeLevel: studentGrade }).map((mission: any) => {
    const theme = themeForSubject(mission.subject);
    return {
      id: mission.id,
      topic: mission.topic,
      dayNumber: mission.dayNumber,
      subject: mission.subject,
      track: mission.track,
      monogram: theme?.monogram ?? "?",
      token: theme?.token ?? "default",
      label: theme?.label ?? mission.subject
    };
  });
  const enrichmentTracks = Array.from(
    new Map(enrichmentMissions.map((m) => [m.track, { track: m.track, label: m.label, token: m.token }])).values()
  );

  const activeQuest = requestedQuestId ? getAuthoredMissionById(requestedQuestId) : null;
  const activeQuestTheme = activeQuest ? themeForSubject(activeQuest.subject) : null;
  const enrichmentTrackSubjects = enrichmentTracks
    .map((t) => {
      const firstMission = enrichmentMissions.find((m) => m.track === t.track);
      return firstMission ? { subject: firstMission.subject, label: firstMission.label } : null;
    })
    .filter((x): x is { subject: string; label: string } => Boolean(x));
  const masterySubjects = masteryView.map((row) => ({ subject: row.subject, label: row.label }));
  const [
    activeQuestIllustration,
    activeQuestConceptDiagram,
    activeQuestVocabMap,
    islandIllustration,
    subjectHeroMap
  ] = await Promise.all([
    getMissionIllustration(activeQuest),
    getConceptDiagram(activeQuest),
    buildVocabCardMap(activeQuest),
    getIslandIllustration(currentIsland),
    buildSubjectHeroMap([...masterySubjects, ...enrichmentTrackSubjects])
  ]);
  const backHref = `/child/map`;

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
            illustrationUrl={activeQuestIllustration ?? undefined}
            conceptDiagramUrl={activeQuestConceptDiagram ?? undefined}
            vocabCardUrls={activeQuestVocabMap}
            studentId={studentId}
            studentName={profile.firstName}
            subjectToken={activeQuestTheme.token}
            subjectLabel={activeQuestTheme.label}
            iconSvg={activeQuestTheme.iconSvg}
            backHref={backHref}
          />
        )}

        <section className="qm-hero" aria-label="Camp progress">
          {islandIllustration && (
            <img
              className="qm-hero-illustration"
              src={islandIllustration}
              alt={currentIsland ? `Week ${currentIsland.weekNumber} ${currentIsland.theme} illustration` : "Summer voyage illustration"}
            />
          )}
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
            <div className="qm-stat" data-kind="streak" data-active={streak.currentDays > 0 ? "true" : "false"}>
              <span className="qm-stat-value">
                <svg className="qm-streak-flame" aria-hidden="true" viewBox="0 0 24 24" width="20" height="20">
                  <path
                    d="M12 2 C 10 6, 7 8, 7 12 C 7 16, 9 19, 12 22 C 15 19, 17 16, 17 12 C 17 9, 15 7, 13 5 C 13 7, 12 8, 11 9 C 11 6, 12 4, 12 2 Z"
                    fill="currentColor"
                  />
                </svg>
                <span>{streak.currentDays}</span>
              </span>
              <span className="qm-stat-label">Day streak</span>
            </div>
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

        <section className="qm-streak-strip" aria-label="Streak status" data-active={streak.currentDays > 0 ? "true" : "false"}>
          <span className="qm-streak-strip-label">{streakMessage(streak)}</span>
          {streak.currentDays > 0 && (
            <div className="qm-streak-ladder" aria-hidden="true">
              {[3, 5, 7, 10, 14].map((m) => (
                <span
                  key={m}
                  className="qm-streak-ladder-step"
                  data-reached={streak.currentDays >= m ? "true" : "false"}
                >
                  {m}
                </span>
              ))}
            </div>
          )}
        </section>

        {freshlyCompletedIsland && (
          <section className="qm-capstone-cheer" aria-live="polite">
            <div className="qm-capstone-confetti" aria-hidden="true">
              {Array.from({ length: 12 }).map((_, i) => (
                <span key={i} className="qm-confetti-bit" style={{ "--i": i } as React.CSSProperties} />
              ))}
            </div>
            <div className="qm-capstone-body">
              <span className="qm-capstone-eyebrow">Week {freshlyCompletedIsland.weekNumber} complete</span>
              <span className="qm-capstone-title">{freshlyCompletedIsland.theme} — done!</span>
              <span className="qm-capstone-sub">
                Capstone earned: {freshlyCompletedIsland.project}. The next island is open.
              </span>
            </div>
          </section>
        )}

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
                  {subjectHeroMap[row.subject] ? (
                    <img className="qm-icon-hero" src={subjectHeroMap[row.subject]!} alt="" />
                  ) : (
                    <SubjectIcon svg={row.iconSvg} />
                  )}
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

        {entitlement.tier === "free" && entitlement.weeksUnlocked === 1 && (
          <aside className="qm-upgrade-banner" aria-label="Upgrade to unlock more weeks">
            <div className="qm-upgrade-body">
              <span className="qm-upgrade-eyebrow">Free Week 1 — unlock Weeks 2-8</span>
              <span className="qm-upgrade-title">
                Family plan: full 8-week voyage, real LLM tutor, weekly parent narratives.
              </span>
            </div>
            <Link
              className="qm-upgrade-cta"
              href={`/parent/billing?student=${encodeURIComponent(studentId)}`}
            >
              See plans →
            </Link>
          </aside>
        )}

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
                      {island.state === "paywall" ? (
                        <Link
                          className="qm-quest-upgrade"
                          href={`/parent/billing?student=${encodeURIComponent(studentId)}`}
                        >
                          <span aria-hidden="true">🔒</span>
                          <span>Family plan unlocks this week</span>
                        </Link>
                      ) : quest.authored.length > 0 && island.state !== "locked" ? (
                        <div className="qm-quest-ctas">
                          {quest.authored.map((mission) => (
                            <Link
                              key={mission.id}
                              className="qm-quest-cta"
                              data-subject={mission.token}
                              href={`/child/map?student=${encodeURIComponent(studentId)}&quest=${encodeURIComponent(mission.id)}#quest`}
                              title={mission.topic}
                            >
                              <span className="qm-quest-cta-mono" aria-hidden="true">{mission.monogram}</span>
                              <span className="qm-quest-cta-label">Start {themeForSubject(mission.subject)?.label}</span>
                              <span className="qm-quest-cta-arrow" aria-hidden="true">→</span>
                            </Link>
                          ))}
                        </div>
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

        {enrichmentMissions.length > 0 && (
          <section className="qm-enrichment" aria-label="Optional enrichment tracks">
            <div className="qm-section-head">
              <h3>Optional enrichment</h3>
              <p>Parent-selected mini-tracks that run alongside the 8-week core. Pick one and try a day.</p>
            </div>
            {enrichmentTracks.map((track) => {
              const trackSubject = enrichmentMissions.find((m) => m.track === track.track)?.subject;
              const trackHeroUrl = trackSubject ? subjectHeroMap[trackSubject] : null;
              return (
              <div key={track.track} className="qm-enrichment-track" data-subject={track.token}>
                {trackHeroUrl && (
                  <img className="qm-enrichment-track-hero" src={trackHeroUrl} alt="" />
                )}
                <div className="qm-enrichment-track-head">
                  <span className="qm-enrichment-monogram" aria-hidden="true">
                    {enrichmentMissions.find((m) => m.track === track.track)?.monogram ?? "?"}
                  </span>
                  <h4>{track.label}</h4>
                </div>
                <div className="qm-enrichment-grid">
                  {enrichmentMissions
                    .filter((m) => m.track === track.track)
                    .map((m) => (
                      <Link
                        key={m.id}
                        className="qm-enrichment-card"
                        data-subject={m.token}
                        href={`/child/map?student=${encodeURIComponent(studentId)}&quest=${encodeURIComponent(m.id)}#quest`}
                      >
                        <span className="qm-enrichment-day">Day {m.dayNumber}</span>
                        <span className="qm-enrichment-topic">{m.topic}</span>
                        <span className="qm-enrichment-cta">Start →</span>
                      </Link>
                    ))}
                </div>
              </div>
              );
            })}
          </section>
        )}

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

async function loadProgressSafely(studentId: string) {
  try {
    return await loadProgressSnapshot(studentId);
  } catch {
    return null;
  }
}

// Item shape sent to the client. Answer fields (answerIndex, answer,
// explanation, exemplar, rubric) stay on the server — /api/grade-item
// resolves the canonical item by id, so a kid reading the page source or
// network tab can't find the answer key.
function clientItem(item: any) {
  return {
    id: item.id,
    type: item.type,
    stem: item.stem,
    choices: item.choices,
    unit: item.unit,
    hintLadder: item.hintLadder
  };
}

function stripServerOnlyFields(mission: any) {
  const dh = mission.dailyHour
    ? {
        warmUp: mission.dailyHour.warmUp,
        creativeLab: mission.dailyHour.creativeLab,
        moveAndReset: mission.dailyHour.moveAndReset,
        reflectAndReward: mission.dailyHour.reflectAndReward,
        challengeArena: {
          title: mission.dailyHour.challengeArena.title,
          bonusXp: mission.dailyHour.challengeArena.bonusXp,
          estimatedMinutes: mission.dailyHour.challengeArena.estimatedMinutes,
          // arena items grade through the same path, so keep their answers.
          items: (mission.dailyHour.challengeArena.items ?? []).map(clientItem)
        }
      }
    : null;
  return {
    id: mission.id,
    topic: mission.topic,
    hook: mission.hook,
    miniLesson: mission.miniLesson,
    keyTerms: mission.keyTerms ?? null,
    workedExample: mission.workedExample,
    estimatedMinutes: mission.estimatedMinutes,
    reflectionPrompt: mission.reflectionPrompt,
    items: mission.items.map(clientItem),
    dailyHour: dh
  };
}

type IslandState = "locked" | "active" | "complete" | "paywall";

interface AuthoredQuestEntry {
  id: string;
  subject: string;
  topic: string;
  token: string;
  monogram: string;
}

interface QuestRow {
  dayNumber: number;
  dayLabel: string;
  headline: string;
  subjects: string[];
  primaryToken: string;
  completed: boolean;
  authored: AuthoredQuestEntry[];
}

interface IslandRow {
  weekNumber: number;
  theme: string;
  project: string;
  state: IslandState;
  completionPercent: number;
  quests: QuestRow[];
}

function buildIslandStates(
  weeklyMissionPlans: any[],
  completedMissionIds: string[],
  weeksUnlocked: number = 1,
  gradeLevel: number = 6
): IslandRow[] {
  const completedSet = new Set(completedMissionIds);
  let unlocked = true;
  return weeklyMissionPlans.map((weekly) => {
    const week = weekly.week;
    const paywalled = !isWeekUnlocked({ weekNumber: week.weekNumber, weeksUnlocked });
    const quests: QuestRow[] = weekly.missions.map((mission: any) => {
      const id = `week-${week.weekNumber}-day-${mission.dayNumber}`;
      const subjects = mission.lessons.map((l: any) => l.subject);
      const primary = themeForSubject(subjects[0]);
      const authoredForDay = findAuthoredMissionsForDay({
        gradeLevel,
        weekNumber: week.weekNumber,
        dayNumber: mission.dayNumber
      });
      const authored: AuthoredQuestEntry[] = authoredForDay.map((m: any) => {
        const theme = themeForSubject(m.subject);
        return {
          id: m.id,
          subject: m.subject,
          topic: m.topic,
          token: theme?.token ?? "default",
          monogram: theme?.monogram ?? "?"
        };
      });
      return {
        dayNumber: mission.dayNumber,
        dayLabel: mission.dayLabel,
        headline: mission.warmup,
        subjects,
        primaryToken: primary?.token ?? "default",
        completed: completedSet.has(id),
        authored
      };
    });
    const completedCount = quests.filter((q) => q.completed).length;
    const completionPercent = quests.length === 0 ? 0 : Math.round((completedCount / quests.length) * 100);

    let state: IslandState;
    if (paywalled) {
      state = "paywall";
    } else if (!unlocked) {
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
  if (state === "paywall") return "Family plan";
  return "Locked";
}
