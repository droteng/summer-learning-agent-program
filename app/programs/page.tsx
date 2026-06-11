import Link from "next/link";
import "../landing.css";
import "./programs.css";
import { GRADES, GRADE_STATUS, SEASON_STRUCTURES, getProgram } from "../../src/data/programCatalog.js";
import { SEASONS, SEASON_THEMES } from "../../src/data/seasonTheme.js";

export const metadata = {
  title: "Programs — Dr. Spark Academy",
  description:
    "A full year of learning: Summer, Fall, Winter, and Spring expeditions across Grades 4–7. One yearly plan unlocks every season as it rolls out."
};

const SEASON_ORDER = [SEASONS.SUMMER, SEASONS.FALL, SEASONS.WINTER, SEASONS.SPRING];

const STATUS_LABEL: Record<string, { label: string; kind: string }> = {
  live: { label: "Live now", kind: "live" },
  in_development: { label: "In development", kind: "dev" },
  planned: { label: "Planned", kind: "planned" }
};

export default function ProgramsPage() {
  return (
    <main className="ls-landing">
      <header className="ls-nav">
        <Link href="/" className="ls-brand">
          <span className="ls-brand-mark">DSA</span>
          <span className="ls-brand-name">Dr. Spark Academy</span>
        </Link>
        <nav className="ls-nav-links" aria-label="Primary">
          <Link href="/product">How it works</Link>
          <Link href="/parent/billing">Pricing</Link>
          <Link href="/parent/signin">Sign in</Link>
        </nav>
      </header>

      <section className="ls-hero pr-hero" aria-label="A full year of learning">
        <div className="ls-hero-copy">
          <span className="ls-eyebrow">A full year of learning</span>
          <h1>
            Four seasons. <span className="ls-accent">One yearly plan.</span>
          </h1>
          <p className="ls-hero-sub">
            Each season is its own expedition — new themes, new science, a fresh palette. Buy a single
            Season Pass, or go yearly and unlock every season as it rolls out across the year.
          </p>
          <div className="ls-cta-row">
            <Link href="/parent/billing" className="ls-cta-primary">
              See plans &amp; enroll <span aria-hidden="true">→</span>
            </Link>
            <Link href="/product" className="ls-cta-secondary">How it works</Link>
          </div>
        </div>
        <div className="pr-season-chips" aria-hidden="true">
          {SEASON_ORDER.map((s) => {
            const t = SEASON_THEMES[s];
            return (
              <span
                key={s}
                className="pr-season-chip"
                style={{ background: t.bgWarm, color: t.accentDeep, borderColor: t.accent }}
              >
                <span className="pr-season-chip-emoji">{t.emoji}</span> {t.label}
              </span>
            );
          })}
        </div>
      </section>

      {/* Season roadmap */}
      <section className="ls-section" aria-label="The four seasons">
        <div className="ls-section-head">
          <h2>The four seasons</h2>
          <p>Every season carries the whole core curriculum — only the themes, projects, and palette change.</p>
        </div>
        <div className="pr-season-grid">
          {SEASON_ORDER.map((season) => {
            const theme = SEASON_THEMES[season];
            const structure = SEASON_STRUCTURES[season];
            const g6 = getProgram(6, season);
            const status = STATUS_LABEL[g6.status] ?? STATUS_LABEL.in_development;
            return (
              <article
                key={season}
                className="pr-season-card"
                style={{ background: theme.bg, borderColor: theme.accent }}
              >
                <header className="pr-season-card-head">
                  <span className="pr-season-card-emoji" aria-hidden="true">{theme.emoji}</span>
                  <div>
                    <h3 style={{ color: theme.accentDeep }}>{structure.title}</h3>
                    <span className={`pr-status pr-status-${status.kind}`}>{status.label}</span>
                  </div>
                </header>
                <p className="pr-season-bigidea">{structure.bigIdea}</p>
                <ul className="pr-week-list">
                  {structure.weeks.map((w: any) => (
                    <li key={w.weekNumber}>
                      <span className="pr-week-num" style={{ background: theme.accent }}>{w.weekNumber}</span>
                      <span className="pr-week-theme">{w.theme}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      {/* Grade matrix */}
      <section className="ls-section" aria-label="Grades">
        <div className="ls-section-head">
          <h2>Built for Grades 4–7</h2>
          <p>Grade 6 is live today. Grades 4, 5, and 7 share the same expeditions with grade-tuned difficulty, rolling out next.</p>
        </div>
        <div className="pr-grade-grid">
          {GRADES.map((grade: number) => {
            const gstatus = GRADE_STATUS[grade] ?? "in_development";
            const s = STATUS_LABEL[gstatus] ?? STATUS_LABEL.in_development;
            return (
              <div key={grade} className="pr-grade-card" data-status={gstatus}>
                <span className="pr-grade-num">{grade}</span>
                <div>
                  <strong>Grade {grade}</strong>
                  <span className={`pr-status pr-status-${s.kind}`}>{s.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Yearly value callout */}
      <section className="ls-section ls-pricing pr-yearly" aria-label="Why yearly">
        <div className="ls-section-head">
          <h2>Why go yearly?</h2>
          <p>A Season Pass unlocks one season. The yearly plan unlocks all four — and every new season we ship lands in your account automatically.</p>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
          <Link href="/parent/billing" className="ls-cta-primary">
            See pricing <span aria-hidden="true">→</span>
          </Link>
          <Link href="/parent/signup" className="ls-cta-secondary">Create an account</Link>
        </div>
      </section>

      <footer className="ls-footer">
        <div className="ls-footer-inner">
          <div>
            <span className="ls-brand-mark">DSA</span>
            <strong>Dr. Spark Academy</strong>
            <p className="ls-footer-tag">A full year of parent-supervised learning, Grades 4–7.</p>
          </div>
          <nav aria-label="Footer">
            <Link href="/product">How it works</Link>
            <Link href="/programs">Programs</Link>
            <Link href="/parent/billing">Pricing</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/refund-policy">Refunds</Link>
            <Link href="/privacy">Privacy</Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}
