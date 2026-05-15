import Link from "next/link";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import "../../landing.css";
import "./quest-map.css";
import "./child-hub.css";
import { loadProgressSnapshot } from "../../../src/data/db.js";
import { resolveEntitlement } from "../../../src/agents/entitlementAgent.js";
import { computeStreak } from "../../../src/agents/streakAgent.js";
import { createProgramPlan } from "../../../src/agents/principalAgent.js";
import { tuneProgramPlan } from "../../../src/agents/adaptiveTuningAgent.js";
import { masteryToDiagnosticSummary } from "../../../src/agents/masteryAgent.js";
import { findAuthoredMissionsForDay, findEnrichmentMissions } from "../../../src/content/index.js";
import { getCurrentUser } from "../../lib/auth-server";
import { COOKIE_NAME, signout } from "../../../src/agents/authAgent.js";

async function childSignoutAction() {
  "use server";
  const store = await cookies();
  const sessionId = store.get(COOKIE_NAME)?.value;
  await signout(sessionId);
  store.delete(COOKIE_NAME);
  redirect("/");
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

const DEMO_POLICY = Object.freeze({
  allowedRewards: ["device", "park"],
  friendInvitesEnabled: false,
  teacherSharingEnabled: true
});

type SearchParams = Promise<{ student?: string; quest?: string }>;

async function loadProgressSafely(studentId: string) {
  try {
    return await loadProgressSnapshot(studentId);
  } catch {
    return null;
  }
}

export default async function ChildHubPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const requestedStudent =
    typeof params?.student === "string" && params.student.length > 0 ? params.student : null;
  const requestedQuestId = typeof params?.quest === "string" ? params.quest : null;

  const user = await getCurrentUser();
  // Auth gate: require a session OR a ?student= demo param. Otherwise sign in.
  if (!user && !requestedStudent) {
    redirect("/child/signin");
  }

  const studentId = user?.childId ?? requestedStudent ?? "demo-student";

  // Deep-link compatibility: ?quest=X URLs route to the voyage view.
  if (requestedQuestId) {
    const target = `/child/map/voyage?student=${encodeURIComponent(studentId)}&quest=${encodeURIComponent(requestedQuestId)}#quest`;
    redirect(target);
  }

  const profile = { ...DEMO_PROFILE, id: studentId, firstName: user?.childName ?? DEMO_PROFILE.firstName };
  const progress = await loadProgressSafely(studentId);
  const entitlement = await resolveEntitlement({ studentId });

  // Figure out "today's quest" — the first uncompleted authored mission
  // in the currently active week. If we can't determine, point at the
  // voyage view so the child can pick.
  const programPlan = createProgramPlan(profile, DEMO_POLICY);
  const tuned = tuneProgramPlan({
    programPlan,
    diagnosticSummary: masteryToDiagnosticSummary(progress?.skillMastery ?? {})
  });
  const completedMissionIds: string[] = progress?.completedMissionIds ?? [];
  const todayQuestId = pickTodayQuest(tuned.weeklyMissionPlans, completedMissionIds);

  const streak = computeStreak({
    completionLog: progress?.completionLog ?? [],
    streakFreezesAvailable: progress?.streakFreezesAvailable ?? 0
  });
  const xp = progress?.xp ?? 0;
  const stars = progress?.masteryStars ?? 0;
  const coins = progress?.campCoins ?? 0;
  const enrichmentCount = findEnrichmentMissions().length;

  const q = `?student=${encodeURIComponent(studentId)}`;

  const todayHref = todayQuestId
    ? `/child/map/voyage${q}&quest=${encodeURIComponent(todayQuestId)}#quest`
    : `/child/map/voyage${q}`;

  return (
    <main className="ls-landing child-hub">
      <header className="ls-nav">
        <Link href="/" className="ls-brand">
          <span className="ls-brand-mark">DSA</span>
          <span className="ls-brand-name">Dr. Spark Academy</span>
        </Link>
        <nav className="ls-nav-links" aria-label="Primary">
          <Link href={`/parent${q}`}>Parent view</Link>
          {user ? (
            <form action={childSignoutAction}>
              <button type="submit" className="ls-nav-cta" style={{ border: "none", cursor: "pointer", font: "inherit" }}>
                Sign out
              </button>
            </form>
          ) : (
            <Link href="/">Home</Link>
          )}
        </nav>
      </header>

      <section className="child-hub-hero" aria-label="Welcome">
        <div className="child-hub-hero-copy">
          <span className="ls-eyebrow">Summer voyage</span>
          <h1>Hi {profile.firstName}! 👋</h1>
          <p>Ready for today's adventure? Pick what you want to do.</p>
        </div>
        <div className="child-hub-stats" role="group" aria-label="Your stats">
          <div className="child-hub-stat" data-kind="streak" data-active={streak.currentDays > 0 ? "true" : "false"}>
            <span className="child-hub-stat-icon" aria-hidden="true">🔥</span>
            <span className="child-hub-stat-value">{streak.currentDays}</span>
            <span className="child-hub-stat-label">Day streak</span>
          </div>
          <div className="child-hub-stat" data-kind="xp">
            <span className="child-hub-stat-icon" aria-hidden="true">⚡</span>
            <span className="child-hub-stat-value">{xp}</span>
            <span className="child-hub-stat-label">XP</span>
          </div>
          <div className="child-hub-stat" data-kind="stars">
            <span className="child-hub-stat-icon" aria-hidden="true">⭐</span>
            <span className="child-hub-stat-value">{stars}</span>
            <span className="child-hub-stat-label">Stars</span>
          </div>
          <div className="child-hub-stat" data-kind="coins">
            <span className="child-hub-stat-icon" aria-hidden="true">🪙</span>
            <span className="child-hub-stat-value">{coins}</span>
            <span className="child-hub-stat-label">Coins</span>
          </div>
        </div>
      </section>

      <section className="child-hub-grid" aria-label="Sections">
        <Link href={todayHref} className="child-hub-card child-hub-card-primary">
          <span className="child-hub-card-icon" aria-hidden="true">🎯</span>
          <div>
            <h3>Today's Quest</h3>
            <p>{todayQuestId ? "Jump straight into the next mission." : "All caught up! Open the map to pick a quest."}</p>
          </div>
          <span className="child-hub-card-arrow" aria-hidden="true">→</span>
        </Link>

        <Link href={`/child/map/voyage${q}`} className="child-hub-card">
          <span className="child-hub-card-icon" aria-hidden="true">🗺️</span>
          <div>
            <h3>My Map</h3>
            <p>See all 8 weeks of your summer voyage.</p>
          </div>
          <span className="child-hub-card-arrow" aria-hidden="true">→</span>
        </Link>

        <Link href={`/child/map/stars${q}`} className="child-hub-card">
          <span className="child-hub-card-icon" aria-hidden="true">📊</span>
          <div>
            <h3>My Stars</h3>
            <p>Where you're getting stronger.</p>
          </div>
          <span className="child-hub-card-arrow" aria-hidden="true">→</span>
        </Link>

        <Link href={`/child/map/book${q}`} className="child-hub-card">
          <span className="child-hub-card-icon" aria-hidden="true">📚</span>
          <div>
            <h3>Book Club</h3>
            <p>{enrichmentCount > 0 ? `${enrichmentCount} bonus missions — read with Leo and the squad.` : "Read with Dr. Spark."}</p>
          </div>
          <span className="child-hub-card-arrow" aria-hidden="true">→</span>
        </Link>
      </section>

      {entitlement.tier === "free" && (
        <aside className="child-hub-upgrade">
          <span>Free Week 1 unlocked. Family plan opens Weeks 2–8 + the Book.</span>
          <Link href={`/parent/billing${q}`}>See plans →</Link>
        </aside>
      )}
    </main>
  );
}

function pickTodayQuest(weeklyMissionPlans: any[], completedMissionIds: string[]): string | null {
  const completed = new Set(completedMissionIds);
  for (const weekly of weeklyMissionPlans) {
    for (const mission of weekly.missions) {
      const authored = findAuthoredMissionsForDay({
        gradeLevel: 6,
        weekNumber: weekly.week.weekNumber,
        dayNumber: mission.dayNumber
      });
      for (const m of authored) {
        if (!completed.has(m.id)) return m.id;
      }
    }
  }
  return null;
}
