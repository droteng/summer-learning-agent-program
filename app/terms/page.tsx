import Link from "next/link";
import "../landing.css";
import "./legal.css";

export const metadata = {
  title: "Terms of Service — Dr. Spark Academy",
  description: "The agreement between you and Dr. Spark Academy / GENAK Publishing."
};

const LAST_UPDATED = "May 17, 2026";

export default function TermsPage() {
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

      <article className="legal-page">
        <header className="legal-head">
          <span className="ls-eyebrow">Terms of Service</span>
          <h1>The agreement between you and us.</h1>
          <p className="legal-meta">Last updated: {LAST_UPDATED}</p>
          <p className="legal-meta">
            Operator: <strong>GENAK Publishing</strong>, doing business as Dr. Spark Academy
            (drsparkacademy.com).
          </p>
        </header>

        <section>
          <h2>1. Who can use Dr. Spark Academy</h2>
          <p>
            Dr. Spark Academy is a parent-supervised learning program for U.S. Grade 6 students (typically
            ages 11–12). Only a parent or legal guardian (18+) may create the account, accept these terms,
            and provide consent on behalf of the child. Children may use the service through the parent's
            account; they may not sign up directly.
          </p>
        </section>

        <section>
          <h2>2. The subscription</h2>
          <p>We offer three cadences for two tiers (Family · Family Plus):</p>
          <ul>
            <li>
              <strong>Season Pass</strong> — a one-time payment that covers 90 days. Access ends on day
              91 unless renewed; no automatic renewal.
            </li>
            <li>
              <strong>Monthly</strong> — recurring monthly billing. You may cancel at any time from the
              billing screen; access continues until the end of the current billing period.
            </li>
            <li>
              <strong>Yearly</strong> — recurring annual billing. Same cancellation terms as monthly,
              prorated only if required by your local consumer law.
            </li>
          </ul>
          <p>
            All payments are processed by Stripe, our merchant of record. We never see your full card
            number. Pricing is in U.S. dollars; conversion fees are between you and your card issuer.
          </p>
        </section>

        <section>
          <h2>3. Refunds</h2>
          <p>
            Refund details live on our dedicated <Link href="/refund-policy">Refund Policy</Link> page.
            In short: we offer a 14-day no-questions refund on the Season Pass and a full refund of any
            unused recurring period if you cancel within 30 days of a renewal you didn't intend.
          </p>
        </section>

        <section>
          <h2>4. Children's privacy &amp; COPPA</h2>
          <p>
            We follow COPPA (the U.S. Children's Online Privacy Protection Act). Before we save anything
            beyond a first name and grade level, we ask you for explicit verifiable parental consent — see
            our <Link href="/parent/consent">Consent &amp; Privacy</Link> page. We never collect a child's
            last name, photo, voice, exact location, email, or phone number. Children cannot directly
            message other children inside the product.
          </p>
        </section>

        <section>
          <h2>5. What you give us permission to do</h2>
          <p>
            You give us a non-exclusive, revocable, royalty-free license to use the answers your child
            writes inside missions for the sole purpose of grading them, generating weekly parent reports,
            and improving the program's tutoring agents. We do not sell, rent, or share these inputs with
            advertisers. AI-grading sub-processors (Anthropic, optionally Google or OpenAI) receive lesson
            prompts only — never your last name, address, photo, or contact details.
          </p>
        </section>

        <section>
          <h2>6. What we don't allow</h2>
          <ul>
            <li>Reverse-engineering, scraping, or automating access to the service.</li>
            <li>Using the service to harass others or to violate any law.</li>
            <li>Sharing a single Family-tier seat with multiple unrelated households.</li>
            <li>Republishing or redistributing the Founder's Book PDF beyond personal household use.</li>
          </ul>
          <p>
            Violations may result in suspension. We'll always tell you why and give you a way to appeal
            before permanent termination.
          </p>
        </section>

        <section>
          <h2>7. Intellectual property</h2>
          <p>
            All authored mission content, the Founder's Book "Leo and The Game Squad", artwork, and
            software are copyright © GENAK Publishing. The text your child writes inside the product
            belongs to your family — you can request a copy or deletion at any time from the parent
            dashboard.
          </p>
        </section>

        <section>
          <h2>8. Service availability &amp; "as-is"</h2>
          <p>
            We work hard to keep the service running, but we don't promise it will be available 100% of
            the time. We may pause or change features with reasonable notice. The service is provided
            "as is" without warranty of any kind. We are not liable for indirect or consequential
            damages; total liability in any 12-month period is capped at the amount you paid us in that
            period.
          </p>
        </section>

        <section>
          <h2>9. Termination</h2>
          <p>
            You may cancel any time from the <Link href="/parent/billing">billing screen</Link>.
            You may request full deletion of your child's data from the{" "}
            <Link href="/parent/data-deletion">data-deletion page</Link>. We will delete within 30 days
            of a valid request, retaining only what we're legally required to keep (e.g., tax records).
          </p>
        </section>

        <section>
          <h2>10. Changes to these terms</h2>
          <p>
            If we make material changes, we'll email the address on file and surface a banner in your
            parent dashboard. Continued use after the change takes effect counts as acceptance.
          </p>
        </section>

        <section>
          <h2>11. Governing law</h2>
          <p>
            These terms are governed by the laws of the State of [your state here]. Disputes will be
            handled in the courts of that state, except where local consumer law gives you stronger
            protections.
          </p>
        </section>

        <section>
          <h2>12. Contact</h2>
          <p>
            Questions about these terms? Email{" "}
            <a href="mailto:hello@drsparkacademy.com">hello@drsparkacademy.com</a>. Privacy-specific
            questions go to <a href="mailto:privacy@drsparkacademy.com">privacy@drsparkacademy.com</a>.
          </p>
        </section>

        <aside className="legal-disclaimer">
          <strong>Note from the operator:</strong> This is a starter template generated for the launch.
          Before serving real paying customers, have it reviewed by a lawyer in your jurisdiction —
          especially the "Governing law" and "Refunds" sections. Replace "[your state here]" above and
          align the refund window with what you actually want to offer.
        </aside>
      </article>

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
        </div>
      </footer>
    </main>
  );
}
