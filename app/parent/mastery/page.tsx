import Link from "next/link";
import "../../landing.css";
import "../parent.css";
import { loadParentData } from "../_data";
import { requireParent } from "../../lib/auth-server";
import { SubjectIcon } from "../../child/map/decorations";

export const dynamic = "force-dynamic";

type SearchParams = Promise<{ student?: string; week?: string }>;

export default async function MasteryScreen({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const { studentId, user } = await requireParent();
  const weekNumber = Number(params?.week ?? 1) || 1;
  const { masteryView, profile } = await loadParentData({ studentId, weekNumber, accountId: user.accountId });

  const q = `?student=${encodeURIComponent(studentId)}&week=${weekNumber}`;

  return (
    <main className="ls-landing pd-screen">
      <header className="ls-nav">
        <Link href="/" className="ls-brand">
          <span className="ls-brand-mark">DSA</span>
          <span className="ls-brand-name">Dr. Spark Academy</span>
        </Link>
        <nav className="ls-nav-links" aria-label="Primary">
          <Link href={`/parent${q}`}>Dashboard</Link>
          <Link href={`/child/map${q}`}>Open child view</Link>
        </nav>
      </header>

      <div className="pd-screen-head">
        <Link href={`/parent${q}`} className="pd-screen-back">← Dashboard</Link>
        <h1 className="pd-screen-title">Subject mastery — {profile.firstName}</h1>
      </div>

      <div className="pd-screen-body">
        <p style={{ color: "var(--ls-muted)", margin: "0 0 22px", maxWidth: 700 }}>
          Each bar reflects per-skill mastery from {profile.firstName}'s graded answers. Low bars are
          opportunities — not problems. The adaptive tuner increases support automatically.
        </p>
        <div className="pd-mastery-grid">
          {masteryView.map((row) => (
            <div key={row.subject} className="pd-mastery-row" data-subject={row.token}>
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
      </div>
    </main>
  );
}
