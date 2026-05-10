import Link from "next/link";
import "./data-deletion.css";
import { loadErasureAudits } from "../../../src/data/db.js";
import { ErasureForm } from "./ErasureForm";

export const dynamic = "force-dynamic";

type SearchParams = Promise<{ student?: string; child?: string }>;

export default async function DataDeletionPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const studentId =
    typeof params?.student === "string" && params.student.length > 0 ? params.student : "demo-student";
  const childFirstName =
    typeof params?.child === "string" && params.child.length > 0 ? params.child : "Avery";

  const audits = await loadErasureAudits(studentId);

  return (
    <main className="cs-page">
      <div className="cs-shell">
        <header className="cs-topbar">
          <Link href={`/parent?student=${encodeURIComponent(studentId)}`} className="qm-back">
            <span aria-hidden="true">←</span> Parent dashboard
          </Link>
          <span className="cs-eyebrow">COPPA · Data deletion</span>
        </header>

        <section className="cs-hero" style={{ background: "linear-gradient(135deg, white, #fef2f2)", borderColor: "#fecaca" }}>
          <h1>Delete {childFirstName}'s data</h1>
          <p className="cs-hero-sub">
            This permanently removes your child's progress, profile, mastery scores, and consent
            records from our service. We keep only an audit record of the deletion. This action
            cannot be undone.
          </p>
        </section>

        <section className="cs-disclosure" aria-label="What gets deleted">
          <h2>What gets deleted</h2>
          <ul>
            <li>All mission completions and reflections.</li>
            <li>All graded items and skill-mastery scores.</li>
            <li>Your parent onboarding profile for this child.</li>
            <li>All consent records (active and revoked) for this child.</li>
          </ul>

          <h2 style={{ marginTop: 12 }}>What we retain</h2>
          <ul>
            <li>
              A short audit record listing your name, your email, the date, and the counts of
              records deleted. We need this so we can prove the deletion if asked, and so the
              same erasure request cannot be silently lost.
            </li>
            <li>
              Your family account login. Sign in and create a new child profile any time.
            </li>
          </ul>
        </section>

        <ErasureForm studentId={studentId} expectedChildFirstName={childFirstName} />

        {audits.length > 0 && (
          <section className="pd-card">
            <div className="pd-section-head">
              <h3>Deletion history</h3>
              <p>One row per parent-requested erasure for this child.</p>
            </div>
            <ul className="pd-approvals-list">
              {audits.map((a: any) => (
                <li key={a.auditId} className="pd-approval-item" data-status="approved">
                  <span>
                    {new Date(a.completedAt ?? a.requestedAt).toLocaleString()} —{" "}
                    {a.parentName} —{" "}
                    progress:{a.recordCounts?.progress ?? 0}, profile:
                    {a.recordCounts?.profile ?? 0}, consent:
                    {a.recordCounts?.consent_records ?? 0}, item grades:
                    {a.recordCounts?.item_grades ?? 0}
                  </span>
                  <span className="pd-approval-status">{a.reason}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <footer className="qm-footer">
          Audit IDs are kept forever so we can answer deletion verification requests.
        </footer>
      </div>
    </main>
  );
}
