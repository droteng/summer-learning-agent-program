import Link from "next/link";
import "../landing.css";

export const metadata = {
  title: "How it works — Dr. Spark Academy",
  description:
    "How the Dr. Spark Academy summer program works: multi-agent learning, parent supervision, adaptive missions, and the Founder's Book."
};

const STEPS = [
  {
    n: "1",
    title: "You enroll & set up the profile",
    body: "Parent sign-up takes ~3 minutes. You answer a few questions about your Grade 6 student's interests, enrichment tracks (Health, Faith, Finance, Media Literacy, Book Club), and reward preferences."
  },
  {
    n: "2",
    title: "A diagnostic quest tunes the program",
    body: "Your child does a short diagnostic — no pressure, no grade. The principal agent uses the results to decide which subjects need support, which run standard, which can stretch."
  },
  {
    n: "3",
    title: "Daily 18–25 minute missions",
    body: "Each weekday, one focused mission. Hook → mini-lesson → worked example → practice items with an AI tutor that hints (never solves) → reflection prompt. Built to fit before screen time, not replace it."
  },
  {
    n: "4",
    title: "Weekly reports to you, the parent",
    body: "Every Sunday, a plain-English summary lands in your dashboard: what your child mastered, what they struggled with, and any approvals waiting for you (rewards, friend invites)."
  },
  {
    n: "5",
    title: "The Founder's Book Club every other week",
    body: "Read \"Leo and The Game Squad\" by Dr. Spark with your child. Five guided missions take you through the body-systems adventure with comprehension + reflection prompts. Solo or group mode."
  },
  {
    n: "6",
    title: "Capstone showcase at week 8",
    body: "Your child completes a capstone project that you can share — printable certificates, a teacher-share report (optional, parent-approved), and badges they actually earned."
  }
];

const AGENTS = [
  {
    icon: "🎯",
    title: "Principal Agent",
    body: "Coordinates the daily mission plan based on your child's diagnostic + ongoing mastery data."
  },
  {
    icon: "📐",
    title: "Subject Tutors",
    body: "Specialized agents for Math, ELA, Science, Coding/AI, History, World Affairs. They hint, they don't solve."
  },
  {
    icon: "🛡️",
    title: "Safety Moderator",
    body: "All child-generated text and friend-invite requests pass through a moderation layer before reaching a human."
  },
  {
    icon: "📝",
    title: "Parent Liaison",
    body: "Composes your weekly report in plain English. No jargon, no scary metrics — just what your child learned this week."
  }
];

export default function ProductPage() {
  return (
    <main className="ls-landing">
      <header className="ls-nav">
        <Link href="/" className="ls-brand">
          <span className="ls-brand-mark">DSA</span>
          <span className="ls-brand-name">Dr. Spark Academy</span>
        </Link>
        <nav className="ls-nav-links" aria-label="Primary">
          <Link href="/product">How it works</Link>
          <Link href="/parent">Parent sign in</Link>
          <Link href="/child/map">Child sign in</Link>
          <Link href="/parent/billing" className="ls-nav-cta">Start free trial →</Link>
        </nav>
      </header>

      <section className="ls-hero" aria-label="How it works">
        <div className="ls-hero-copy">
          <span className="ls-eyebrow">How it works</span>
          <h1>Six steps from <span className="ls-accent">enrollment to capstone</span>.</h1>
          <p className="ls-hero-sub">
            A parent-supervised multi-agent program designed to feel like a summer adventure — not a packet of worksheets.
            You stay in control, your child stays engaged, and the agents do the heavy lifting in between.
          </p>
          <div className="ls-cta-row">
            <Link href="/parent/billing" className="ls-cta-primary">
              Start free trial
              <span aria-hidden="true">→</span>
            </Link>
            <Link href="/" className="ls-cta-secondary">Back to home</Link>
          </div>
        </div>
        <div className="ls-hero-art">
          <img
            src="/landing-hero.jpg"
            alt="A parent and two children learning together at a sunny kitchen table"
            width={1280}
            height={731}
          />
        </div>
      </section>

      <section className="ls-section" aria-label="Steps">
        <div className="ls-section-head">
          <h2>What a summer looks like</h2>
          <p>From the first profile setup through the capstone showcase, here's the full arc.</p>
        </div>
        <ol className="ls-steps">
          {STEPS.map((s) => (
            <li key={s.n}>
              <div className="ls-step-num" aria-hidden="true">{s.n}</div>
              <div className="ls-step-body">
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="ls-section" aria-label="Agents">
        <div className="ls-section-head">
          <h2>The agents behind the scenes</h2>
          <p>Specialized AI agents that the principal coordinates — every one designed with kid-safety guardrails first.</p>
        </div>
        <div className="ls-feature-grid">
          {AGENTS.map((a) => (
            <article key={a.title} className="ls-feature-card">
              <div className="ls-feature-icon" aria-hidden="true">{a.icon}</div>
              <h3>{a.title}</h3>
              <p>{a.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ls-section ls-pricing" aria-label="Ready to enroll">
        <div className="ls-section-head">
          <h2>Ready when you are</h2>
          <p>The summer voyage runs eight weeks. Pick a cadence that fits your family.</p>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
          <Link href="/parent/billing" className="ls-cta-primary">
            See pricing & enroll
            <span aria-hidden="true">→</span>
          </Link>
          <Link href="/parent" className="ls-cta-secondary">Already enrolled? Sign in</Link>
        </div>
      </section>

      <footer className="ls-footer">
        <div className="ls-footer-inner">
          <div>
            <span className="ls-brand-mark">DSA</span>
            <strong>Dr. Spark Academy</strong>
            <p className="ls-footer-tag">Parent-supervised summer learning for Grade 6.</p>
          </div>
          <nav aria-label="Footer">
            <Link href="/product">How it works</Link>
            <Link href="/parent/billing">Pricing</Link>
            <Link href="/parent/consent">Consent &amp; privacy</Link>
            <Link href="/parent/data-deletion">Data deletion</Link>
          </nav>
          <p className="ls-footer-fine">
            © 2026 GENAK Publishing · COPPA-compliant ·{" "}
            <a href="mailto:privacy@drsparkacademy.com">privacy@drsparkacademy.com</a>
          </p>
        </div>
      </footer>
    </main>
  );
}
