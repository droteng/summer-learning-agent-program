import Link from "next/link";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import "../landing.css";
import "./parent.css";
import { loadParentData } from "./_data";
import { requireParent } from "../lib/auth-server";
import { COOKIE_NAME, signout } from "../../src/agents/authAgent.js";

async function signoutAction() {
  "use server";
  const store = await cookies();
  const sessionId = store.get(COOKIE_NAME)?.value;
  await signout(sessionId);
  store.delete(COOKIE_NAME);
  redirect("/");
}

export const dynamic = "force-dynamic";

type SearchParams = Promise<{ student?: string; week?: string }>;

export default async function ParentDashboardHub({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const weekNumber = Number(params?.week ?? 1) || 1;

  const { user, studentId } = await requireParent();
  const data = await loadParentData({ studentId, weekNumber, accountId: user.accountId });
  const { profile, consent, entitlement, report, completionPct, pendingApprovalCount, progress } = data;
  const displayName = user.parentName;
  const childDisplayName = user.childName ?? profile.firstName;

  const q = `?student=${encodeURIComponent(studentId)}&week=${weekNumber}`;

  const cards = [
    {
      key: "mastery",
      icon: "📊",
      title: "Subject mastery",
      sub: "Where your child is strong, where they need support.",
      href: `/parent/mastery${q}`,
      badge: null
    },
    {
      key: "approvals",
      icon: "⏳",
      title: "Pending approvals",
      sub: "Reward requests and friend invitations waiting on you.",
      href: `/parent/approvals${q}`,
      badge: pendingApprovalCount > 0 ? pendingApprovalCount : null
    },
    {
      key: "book",
      icon: "📚",
      title: "Founder's Book",
      sub: `"Leo and The Game Squad" — download + 5-day book club.`,
      href: `/parent/book${q}`,
      badge: entitlement.founderBook ? null : "Locked"
    },
    {
      key: "reports",
      icon: "📝",
      title: "Weekly report",
      sub: "Plain-English summary of this week's learning.",
      href: `/parent/reports${q}`,
      badge: null
    },
    {
      key: "sharing",
      icon: "🤝",
      title: "Sharing & teacher",
      sub: "Decide who can see your child's progress.",
      href: `/parent/sharing${q}`,
      badge: null
    },
    {
      key: "children",
      icon: "👨‍👩‍👧",
      title: "Children",
      sub: "Add a sibling, set PINs, manage profiles.",
      href: `/parent/children`,
      badge: null
    },
    {
      key: "billing",
      icon: "⚙️",
      title: "Plan & billing",
      sub: "Manage your subscription, family seats, and cadence.",
      href: `/parent/billing${q}`,
      badge: null
    }
  ];

  return (
    <main className="ls-landing pd-hub">
      <header className="ls-nav">
        <Link href="/" className="ls-brand">
          <span className="ls-brand-mark">DSA</span>
          <span className="ls-brand-name">Dr. Spark Academy</span>
        </Link>
        <nav className="ls-nav-links" aria-label="Primary">
          <Link href="/product">How it works</Link>
          <Link href={`/child/map${q}`}>Open child view</Link>
          {user ? (
            <form action={signoutAction}>
              <button type="submit" className="ls-nav-cta" style={{ border: "none", cursor: "pointer", font: "inherit" }}>
                Sign out
              </button>
            </form>
          ) : (
            <Link href="/parent/signin" className="ls-nav-cta">Sign in</Link>
          )}
        </nav>
      </header>

      {!user.emailVerified && (
        <div className="pd-hub-banner" style={{ borderColor: "#fbbf24" }}>
          <div>
            <span className="pd-hub-banner-eyebrow">Verify your email</span>
            <span>
              We sent a verification link to {user.parentEmail}. Click it to start receiving weekly reports and password-reset emails.
            </span>
          </div>
          <form action="/api/auth/resend-verification" method="POST">
            <button type="submit" className="ls-cta-secondary" style={{ cursor: "pointer", font: "inherit" }}>
              Resend link →
            </button>
          </form>
        </div>
      )}

      {consent.status !== "active" && (
        <div className="pd-hub-banner">
          <div>
            <span className="pd-hub-banner-eyebrow">COPPA · Consent required</span>
            <span>
              {consent.status === "missing"
                ? "Record parental consent before we save more of your child's data."
                : "Your current consent is missing some scopes. Update it to keep using full features."}
            </span>
          </div>
          <Link
            className="ls-cta-primary"
            href={`/parent/consent?student=${encodeURIComponent(studentId)}&child=${encodeURIComponent(profile.firstName)}`}
          >
            Record consent →
          </Link>
        </div>
      )}

      <section className="pd-hub-hero" aria-label="Summary">
        <div className="pd-hub-hero-copy">
          <span className="ls-eyebrow">Parent dashboard</span>
          <h1>{childDisplayName}'s Summer</h1>
          {displayName && (
            <p style={{ margin: "4px 0 6px", color: "var(--ls-muted)", fontSize: 13, fontWeight: 600 }}>
              Signed in as {displayName}
            </p>
          )}
          <p>
            {report.status === "ready"
              ? `Week ${weekNumber} · ${report.week.theme} — currently working on ${report.week.project}.`
              : "Pick a week (?week=1) once your child has started missions."}
          </p>
        </div>
        <div className="pd-hub-stats" role="group" aria-label="Headline metrics">
          <div className="pd-hub-stat">
            <span className="pd-hub-stat-value">{completionPct}%</span>
            <span className="pd-hub-stat-label">Week complete</span>
          </div>
          <div className="pd-hub-stat">
            <span className="pd-hub-stat-value">{progress?.masteryStars ?? 0}</span>
            <span className="pd-hub-stat-label">Stars earned</span>
          </div>
          <div className="pd-hub-stat" data-attention={pendingApprovalCount > 0 ? "true" : "false"}>
            <span className="pd-hub-stat-value">{pendingApprovalCount}</span>
            <span className="pd-hub-stat-label">Pending</span>
          </div>
        </div>
      </section>

      <section className="pd-hub-grid" aria-label="Sections">
        {cards.map((c) => (
          <Link key={c.key} href={c.href} className="pd-hub-card">
            <span className="pd-hub-card-icon" aria-hidden="true">{c.icon}</span>
            <div>
              <h3>{c.title}</h3>
              <p>{c.sub}</p>
            </div>
            {c.badge != null && (
              <span className="pd-hub-card-badge" data-kind={typeof c.badge === "number" ? "count" : "lock"}>
                {c.badge}
              </span>
            )}
            <span className="pd-hub-card-arrow" aria-hidden="true">→</span>
          </Link>
        ))}
      </section>

      <footer className="pd-hub-foot">
        <span>Need to step out? Your child's progress is saved automatically.</span>
        <Link href="/">Back to drsparkacademy.com →</Link>
      </footer>
    </main>
  );
}
