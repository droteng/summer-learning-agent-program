import Link from "next/link";
import "./landing.css";

export const metadata = {
  title: "Dr. Spark Academy — Parent-supervised summer learning",
  description:
    "A multi-agent summer learning program for U.S. Grade 6 students. Daily missions, adaptive tutoring, parent approvals, and the Founder's Book included with every plan."
};

const FEATURES = [
  {
    icon: "🗺️",
    title: "Daily mission map",
    body: "Eight weeks of authored Grade 6 missions in Math, ELA, Science, Coding, Civics, and more. Each day, one focused 18–25 minute quest."
  },
  {
    icon: "🎓",
    title: "Adaptive tutor",
    body: "An LLM-powered tutor that hints, never solves. Wrong answers get a hint ladder. Right answers get a worked-example reflection."
  },
  {
    icon: "📚",
    title: "Founder's Book included",
    body: "Every paid plan includes the ebook \"Leo and The Game Squad\" by Dr. Spark, plus a 5-day book-club enrichment track."
  },
  {
    icon: "🛡️",
    title: "Parent-supervised",
    body: "COPPA-compliant consent flow. Friend invites and external sharing always require your approval. No child-to-child DMs."
  },
  {
    icon: "📊",
    title: "Weekly parent reports",
    body: "Plain-English summaries of what your child learned, mastered, and struggled with. Optional teacher-share with one click."
  },
  {
    icon: "💸",
    title: "Honest pricing",
    body: "$99 single-child Season Pass · $149 family · $29–$49 monthly · yearly plans for continued enrichment. No surprises."
  }
];

const FAQ = [
  {
    q: "What grade is this for?",
    a: "U.S. Grade 6 (typically ages 11–12). Reading level targets Grade 5–6 so the academic work is the challenge — not the text."
  },
  {
    q: "Do I need to be a teacher to run this?",
    a: "No. The program is designed for parents. You set up the profile, approve rewards and friend invites, and read the weekly report. The agents do the teaching."
  },
  {
    q: "How does the Founder's Book Club work?",
    a: "Five enrichment missions take you through \"Leo and The Game Squad\" — read together, then your child completes a guided comprehension + reflection mission. Solo or group mode."
  },
  {
    q: "What if my child finishes the eight weeks?",
    a: "Yearly subscribers get enrichment tracks (Media Literacy, Study Skills, Financial Literacy, Book Club) that continue year-round."
  }
];

export default function LandingPage() {
  return (
    <main className="ls-landing">
      <header className="ls-nav">
        <Link href="/" className="ls-brand">
          <span className="ls-brand-mark">DSA</span>
          <span className="ls-brand-name">Dr. Spark Academy</span>
        </Link>
        <nav className="ls-nav-links" aria-label="Primary">
          <Link href="/product">How it works</Link>
          <Link href="/parent/signin">Parent sign in</Link>
          <Link href="/child/signin">Child sign in</Link>
          <Link href="/parent/signup" className="ls-nav-cta">Start free trial →</Link>
        </nav>
      </header>

      <section className="ls-hero" aria-label="Welcome">
        <div className="ls-hero-copy">
          <span className="ls-eyebrow">Summer 2026 · Grade 6 · Parent-supervised</span>
          <h1>
            Summer learning that feels like a <span className="ls-accent">mission</span>,
            not a worksheet.
          </h1>
          <p className="ls-hero-sub">
            A multi-agent program that keeps Grade 6 students engaged with daily quests, adaptive
            tutoring, and a Founder's Book that pairs with a 5-day reading club.
          </p>
          <div className="ls-cta-row">
            <Link href="/parent/signup" className="ls-cta-primary">
              Start free trial
              <span aria-hidden="true">→</span>
            </Link>
            <Link href="/product" className="ls-cta-secondary">See how it works</Link>
          </div>
          <div className="ls-signin-row">
            <Link href="/parent/signin" className="ls-signin-link">
              <span className="ls-signin-icon" aria-hidden="true">👤</span>
              Parent sign in
            </Link>
            <Link href="/child/signin" className="ls-signin-link">
              <span className="ls-signin-icon" aria-hidden="true">🎮</span>
              Child sign in
            </Link>
          </div>
        </div>
        <div className="ls-hero-art">
          <img
            src="/landing-hero.jpg"
            alt="A parent and two children learning together at a sunny kitchen table with a tablet"
            width={1280}
            height={731}
          />
        </div>
      </section>

      <section className="ls-section" aria-label="Features">
        <div className="ls-section-head">
          <h2>What's inside the program</h2>
          <p>Six core systems your child sees every week — built to keep them learning without burning out.</p>
        </div>
        <div className="ls-feature-grid">
          {FEATURES.map((f) => (
            <article key={f.title} className="ls-feature-card">
              <div className="ls-feature-icon" aria-hidden="true">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ls-section ls-pricing" aria-label="Pricing">
        <div className="ls-section-head">
          <h2>Built for the way summers actually work</h2>
          <p>Pick the cadence that fits — every paid plan includes the Founder's Book and the full mission map.</p>
        </div>
        <div className="ls-pricing-grid">
          <div className="ls-price-card ls-price-card-feature">
            <span className="ls-price-eyebrow">Most popular</span>
            <h3>Season Pass</h3>
            <p className="ls-price-amount">$99 <span>single child</span></p>
            <p className="ls-price-amount-alt">$149 family · up to 4 kids</p>
            <ul>
              <li>8-week summer voyage</li>
              <li>Adaptive LLM tutor</li>
              <li>Founder's Book download</li>
              <li>Weekly parent reports</li>
            </ul>
            <Link href="/parent/billing" className="ls-cta-primary ls-cta-block">Choose Season Pass</Link>
          </div>
          <div className="ls-price-card">
            <h3>Monthly</h3>
            <p className="ls-price-amount">$29 <span>/mo single</span></p>
            <p className="ls-price-amount-alt">$49 /mo family</p>
            <ul>
              <li>Cancel anytime</li>
              <li>Same content as Season Pass</li>
              <li>Built for try-before-you-commit</li>
            </ul>
            <Link href="/parent/billing" className="ls-cta-secondary ls-cta-block">See monthly plans</Link>
          </div>
          <div className="ls-price-card">
            <h3>Yearly</h3>
            <p className="ls-price-amount">$249 <span>/yr single</span></p>
            <p className="ls-price-amount-alt">$399 /yr family</p>
            <ul>
              <li>Summer voyage + enrichment</li>
              <li>Year-round Book Club, Media Literacy, Study Skills, Finance</li>
              <li>Best value per month</li>
            </ul>
            <Link href="/parent/billing" className="ls-cta-secondary ls-cta-block">See yearly plans</Link>
          </div>
        </div>
      </section>

      <section className="ls-section" aria-label="FAQ">
        <div className="ls-section-head">
          <h2>Common questions</h2>
        </div>
        <div className="ls-faq-grid">
          {FAQ.map((item) => (
            <details key={item.q} className="ls-faq">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
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
            <Link href="/terms">Terms</Link>
            <Link href="/refund-policy">Refunds</Link>
            <Link href="/parent/consent">Consent &amp; privacy</Link>
            <Link href="/parent/data-deletion">Data deletion</Link>
          </nav>
          <p className="ls-footer-fine">
            © 2026 Dr. Spark Academy · Operated by GENAK Estates LLC · COPPA-compliant ·{" "}
            <a href="mailto:privacy@drsparkacademy.com">privacy@drsparkacademy.com</a>
          </p>
        </div>
      </footer>
    </main>
  );
}
