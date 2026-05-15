import Link from "next/link";
import "../../landing.css";
import "../parent.css";
import { loadParentData } from "../_data";
import { requireParent } from "../../lib/auth-server";

export const dynamic = "force-dynamic";

type SearchParams = Promise<{ student?: string; week?: string }>;

export default async function SharingScreen({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const { studentId, user } = await requireParent();
  const weekNumber = Number(params?.week ?? 1) || 1;
  const { profile, entitlement } = await loadParentData({ studentId, weekNumber, accountId: user.accountId });

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
        </nav>
      </header>

      <div className="pd-screen-head">
        <Link href={`/parent${q}`} className="pd-screen-back">← Dashboard</Link>
        <h1 className="pd-screen-title">Sharing & teacher</h1>
      </div>

      <div className="pd-screen-body" style={{ display: "grid", gap: 20, maxWidth: 760 }}>
        <section className="pd-card">
          <div className="pd-section-head">
            <h3>Teacher share</h3>
            <p>Send a sanitized end-of-week summary to your child's teacher. Always parent-approved.</p>
          </div>
          {entitlement.teacherShare ? (
            <p>
              Teacher share is available on your plan. Generate a fresh share link from the printable
              package page when you're ready: <Link href={`/printable-package${q}`} style={{ color: "var(--ls-accent-deep)", fontWeight: 700 }}>Open printable package →</Link>
            </p>
          ) : (
            <p>
              Teacher share is locked on the free tier. <Link href={`/parent/billing${q}`} style={{ color: "var(--ls-accent-deep)", fontWeight: 700 }}>Upgrade to unlock →</Link>
            </p>
          )}
        </section>

        <section className="pd-card">
          <div className="pd-section-head">
            <h3>Privacy &amp; data</h3>
            <p>Manage what we collect about {profile.firstName}.</p>
          </div>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: 10 }}>
            <li>
              <Link href={`/parent/consent?student=${encodeURIComponent(studentId)}&child=${encodeURIComponent(profile.firstName)}`} style={{ color: "var(--ls-accent-deep)", fontWeight: 700 }}>
                Update consent →
              </Link>
            </li>
            <li>
              <Link href={`/parent/data-deletion?student=${encodeURIComponent(studentId)}`} style={{ color: "var(--ls-accent-deep)", fontWeight: 700 }}>
                Request data deletion →
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
