import Link from "next/link";
import "../landing.css";
import "../terms/legal.css";

export const metadata = {
  title: "Refund Policy — Dr. Spark Academy",
  description: "Straightforward refund terms for every plan on Dr. Spark Academy."
};

const LAST_UPDATED = "May 17, 2026";

export default function RefundPolicyPage() {
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
          <span className="ls-eyebrow">Refund Policy</span>
          <h1>If it doesn't fit, we'll give you your money back.</h1>
          <p className="legal-meta">Last updated: {LAST_UPDATED}</p>
        </header>

        <section>
          <h2>Season Pass ($99 / $149) — 14-day no-questions refund</h2>
          <p>
            You have <strong>14 calendar days</strong> from the purchase date to request a full refund of
            the Season Pass, no questions asked. After day 14, the pass is non-refundable but remains
            valid through day 90.
          </p>
          <p>
            How to request: email{" "}
            <a href="mailto:hello@drsparkacademy.com">hello@drsparkacademy.com</a>{" "}
            from the parent address on file, or use the contact form linked from your parent dashboard.
            Refunds typically process within 5 business days.
          </p>
        </section>

        <section>
          <h2>Monthly subscriptions ($29 / $49 per month)</h2>
          <p>
            You can cancel anytime from your{" "}
            <Link href="/parent/billing">billing screen</Link>. Cancellation stops the next renewal —
            you keep access through the end of the current period.
          </p>
          <p>
            If you forgot to cancel and were charged for a period you didn't intend to use, email us
            within <strong>30 days</strong> of that renewal and we'll refund it as long as the account
            shows minimal child activity during that period. We don't refund periods where the child
            completed missions.
          </p>
        </section>

        <section>
          <h2>Yearly subscriptions ($249 / $399 per year)</h2>
          <p>
            Same as monthly: cancel anytime, you keep access through the end of the current year.
          </p>
          <p>
            <strong>30-day prorated refund window:</strong> if you cancel within the first 30 days of
            an annual renewal, we'll refund the unused portion (prorated daily). After 30 days, no
            refund — but cancellation still applies and we won't bill the following year.
          </p>
        </section>

        <section>
          <h2>What's not refundable</h2>
          <ul>
            <li>
              The Founder's Book PDF once downloaded — by Amazon's terms and ours, digital books are
              not refundable after download.
            </li>
            <li>
              Stripe or card-network fees on the original charge (typically ~3% — Stripe doesn't
              return these to us when we refund).
            </li>
            <li>
              Any period where a single child completed 10+ missions (we treat that as engaged use of
              the service).
            </li>
          </ul>
        </section>

        <section>
          <h2>Chargebacks</h2>
          <p>
            Please reach out to us before filing a chargeback with your card issuer — we can almost
            always resolve refund requests directly in less time than a chargeback takes. Chargebacks
            cost us more than the refund itself, and unjustified chargebacks may result in account
            suspension under our <Link href="/terms">Terms of Service</Link>.
          </p>
        </section>

        <section>
          <h2>How to ask</h2>
          <p>
            Email <a href="mailto:hello@drsparkacademy.com">hello@drsparkacademy.com</a> from the email
            address on your parent account. Include:
          </p>
          <ul>
            <li>Your account email (so we can find your subscription)</li>
            <li>Which plan you're refunding (Season Pass / Monthly / Yearly)</li>
            <li>One sentence on why (optional — helps us improve)</li>
          </ul>
          <p>You'll get a reply within 1 business day. Refunds land back on the original card.</p>
        </section>

        <aside className="legal-disclaimer">
          <strong>Note from the operator:</strong> Adjust the refund windows above to match what you
          actually want to offer. Many education products use a stricter 7-day refund on Season Pass;
          we suggested 14 days to lower the buying friction. Whichever you pick, keep it consistent
          here, in your Stripe account settings, and on the billing screen.
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
