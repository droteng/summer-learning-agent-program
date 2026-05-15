import Link from "next/link";
import { requireStudent } from "../../../lib/auth-server";
import "../../../landing.css";
import "../quest-map.css";
import "../child-hub.css";
import { loadProgressSnapshot } from "../../../../src/data/db.js";
import { summarizeMasteryBySubject } from "../../../../src/agents/masteryAgent.js";
import { SUBJECT_THEMES } from "../../../../src/data/subjectTheme.js";
import { SubjectIcon } from "../decorations";

export const dynamic = "force-dynamic";

type SearchParams = Promise<{ student?: string }>;

export default async function StarsScreen({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const { studentId } = await requireStudent("/child/signin");

  let progress: any = null;
  try {
    progress = await loadProgressSnapshot(studentId);
  } catch {
    /* keep null */
  }
  const skillMastery = progress?.skillMastery ?? {};
  const summary = summarizeMasteryBySubject(skillMastery);
  const subjects = Object.keys(SUBJECT_THEMES) as Array<keyof typeof SUBJECT_THEMES>;
  const masteryView = subjects.map((subject) => {
    const theme = SUBJECT_THEMES[subject];
    const row = summary[subject] ?? { level: 0, attempts: 0, readiness: "not_started" };
    return {
      subject,
      label: theme.label,
      token: theme.token,
      level: row.level ?? 0,
      attempts: row.attempts ?? 0,
      readiness: row.readiness ?? "not_started",
      iconSvg: theme.iconSvg
    };
  });

  const stars = progress?.masteryStars ?? 0;
  const q = `?student=${encodeURIComponent(studentId)}`;

  return (
    <main className="ls-landing child-hub">
      <header className="ls-nav">
        <Link href="/" className="ls-brand">
          <span className="ls-brand-mark">DSA</span>
          <span className="ls-brand-name">Dr. Spark Academy</span>
        </Link>
        <nav className="ls-nav-links" aria-label="Primary">
          <Link href={`/child/map${q}`}>← Hub</Link>
          <Link href={`/child/map/voyage${q}`}>My Map</Link>
        </nav>
      </header>

      <div className="pd-screen-head" style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 18px" }}>
        <Link href={`/child/map${q}`} className="pd-screen-back">← Hub</Link>
        <h1 className="pd-screen-title">⭐ My Stars · {stars}</h1>
      </div>

      <div className="pd-screen-body">
        <p style={{ color: "var(--ls-muted)", margin: "0 0 22px", maxWidth: 600 }}>
          Every bar grows when you answer questions in that subject. No bar is "bad" — it just means there's a quest waiting.
        </p>
        <div className="qm-mastery-grid">
          {masteryView.map((row) => (
            <div key={row.subject} className="qm-mastery-row" data-subject={row.token}>
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
                    ? "No questions answered yet — go try one!"
                    : `${row.attempts} ${row.attempts === 1 ? "answer" : "answers"} · ${row.readiness}`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
