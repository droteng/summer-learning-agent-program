import Link from "next/link";
import "../../landing.css";
import "../parent.css";
import { loadParentData } from "../_data";

export const dynamic = "force-dynamic";

type SearchParams = Promise<{ student?: string; week?: string }>;

export default async function ReportsScreen({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const studentId =
    typeof params?.student === "string" && params.student.length > 0 ? params.student : "demo-student";
  const weekNumber = Number(params?.week ?? 1) || 1;
  const { report, completionPct, profile, progress } = await loadParentData({ studentId, weekNumber });

  const q = `?student=${encodeURIComponent(studentId)}&week=${weekNumber}`;
  const reflections: any[] = progress?.weeklyReflections ?? [];

  return (
    <main className="ls-landing pd-screen">
      <header className="ls-nav">
        <Link href="/" className="ls-brand">
          <span className="ls-brand-mark">DSA</span>
          <span className="ls-brand-name">Dr. Spark Academy</span>
        </Link>
        <nav className="ls-nav-links" aria-label="Primary">
          <Link href={`/parent${q}`}>Dashboard</Link>
        </nav>
      </header>

      <div className="pd-screen-head">
        <Link href={`/parent${q}`} className="pd-screen-back">← Dashboard</Link>
        <h1 className="pd-screen-title">Week {weekNumber} report — {profile.firstName}</h1>
      </div>

      <div className="pd-screen-body" style={{ display: "grid", gap: 20 }}>
        {report.status === "ready" ? (
          <section className="pd-card">
            <div className="pd-section-head">
              <h3>{report.week.theme}</h3>
              <p>Capstone project: {report.week.project} · {completionPct}% complete</p>
            </div>
            {report.narrative && (
              <p style={{ lineHeight: 1.6, margin: 0, color: "var(--qm-fg)" }}>{report.narrative}</p>
            )}
            {report.highlights?.length > 0 && (
              <ul style={{ margin: "16px 0 0", paddingLeft: 22, color: "var(--qm-fg)", lineHeight: 1.55 }}>
                {report.highlights.map((h: string, i: number) => <li key={i}>{h}</li>)}
              </ul>
            )}
          </section>
        ) : (
          <div className="pd-empty">
            <span style={{ fontSize: 48 }} aria-hidden="true">⏳</span>
            <h2>Report not ready yet.</h2>
            <p>Your child needs to complete missions this week first. Check back after a few sessions.</p>
          </div>
        )}

        {reflections.length > 0 && (
          <section className="pd-card">
            <div className="pd-section-head">
              <h3>Recent reflections</h3>
              <p>What {profile.firstName} wrote in their own words this week.</p>
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: 12 }}>
              {reflections.slice(-5).reverse().map((r: any, i: number) => (
                <li key={i} style={{
                  padding: 14,
                  background: "rgba(254, 243, 199, 0.4)",
                  borderRadius: 12,
                  borderLeft: "3px solid var(--ls-accent, #f97316)"
                }}>
                  <span style={{ fontSize: 12, color: "var(--ls-muted)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    {r.subject ?? "Mission"}
                  </span>
                  <p style={{ margin: "4px 0 0", lineHeight: 1.5, color: "var(--qm-fg)" }}>{r.text}</p>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </main>
  );
}
