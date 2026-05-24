import Link from "next/link";
import "../landing.css";
import "../terms/legal.css";

export const metadata = {
  title: "Privacy Policy — Dr. Spark Academy",
  description:
    "How Dr. Spark Academy collects, uses, and protects information about you and your child. COPPA-compliant. Parent-supervised."
};

const LAST_UPDATED = "May 24, 2026";

export default function PrivacyPage() {
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
          <span className="ls-eyebrow">Privacy Policy</span>
          <h1>Your child's data, your call.</h1>
          <p className="legal-meta">Last updated: {LAST_UPDATED}</p>
          <p className="legal-meta">
            Operator: <strong>GENAK Estates LLC</strong>, a Connecticut limited liability company,
            doing business as Dr. Spark Academy (drsparkacademy.com). Mailing: Tolland, Connecticut, USA.
          </p>
          <p className="legal-meta">
            Privacy contact:{" "}
            <a href="mailto:privacy@drsparkacademy.com">privacy@drsparkacademy.com</a>
          </p>
        </header>

        <section>
          <h2>1. Plain-English summary</h2>
          <p>
            Dr. Spark Academy is a learning program for U.S. Grade 6 students (typically ages 11–12).
            A parent or legal guardian must set up the account, give consent, and approve key activities
            on the child's behalf. We collect only what we need to teach your child and to send you
            useful weekly reports. We don't sell personal information. We don't run advertising
            trackers. We don't share your child's first name or schoolwork with anyone you haven't
            explicitly approved.
          </p>
          <p>
            If anything below feels confusing, email{" "}
            <a href="mailto:privacy@drsparkacademy.com">privacy@drsparkacademy.com</a> and we'll
            explain in plain language.
          </p>
        </section>

        <section>
          <h2>2. Who this policy is for</h2>
          <p>This policy applies to:</p>
          <ul>
            <li>Parents and legal guardians who create an account on Dr. Spark Academy.</li>
            <li>Children (typically U.S. Grade 6, ages 11–12) using the service through the parent's account.</li>
            <li>Visitors to drsparkacademy.com who haven't signed up.</li>
          </ul>
          <p>
            Children may not sign up directly. Only a parent or legal guardian (18+) may create the
            account, accept these terms, and provide consent on behalf of the child.
          </p>
        </section>

        <section>
          <h2>3. What we collect from parents</h2>
          <p>From you (the parent / guardian), we collect:</p>
          <ul>
            <li>Your first and last name, email address, and the password hash you set up.</li>
            <li>Your billing information when you subscribe — handled by our payment processor (Stripe). We never see your full card number.</li>
            <li>Your consent records — which scopes (lesson grading, weekly reports, etc.) you approved, when, and through which verification method.</li>
            <li>Your reward approvals, friend-invite decisions, and any teacher / school sharing approvals.</li>
            <li>Communications you send us (support emails, feedback).</li>
          </ul>
        </section>

        <section>
          <h2>4. What we collect from children</h2>
          <p>From your child, we collect <strong>only the minimum needed to teach</strong>:</p>
          <ul>
            <li>Your child's first name or nickname (you provide this — it's how the agents address them).</li>
            <li>Grade level and parent-selected enrichment tracks.</li>
            <li>Your child's answers to learning missions and short reflections.</li>
            <li>Mastery scores derived from those answers (no other behavioral profiling).</li>
            <li>Reward progress and badges earned.</li>
          </ul>
          <p>
            <strong>What we deliberately do NOT collect from children:</strong>
          </p>
          <ul>
            <li>Home address, phone number, or personal email for the child.</li>
            <li>Exact location (GPS).</li>
            <li>Photos or videos of the child.</li>
            <li>Health diagnoses or private faith reflections (we keep Health & Wellness and Christian Leadership content educational and age-appropriate, not personal).</li>
            <li>Unmoderated child-to-child messages outside parent-approved learning squads.</li>
            <li>Cross-site advertising identifiers.</li>
          </ul>
        </section>

        <section>
          <h2>5. Children's Online Privacy Protection Act (COPPA)</h2>
          <p>
            Because Dr. Spark Academy is directed to children under 13 in the United States, COPPA applies.
            Here's how we comply:
          </p>
          <ul>
            <li>
              <strong>Verifiable Parental Consent.</strong> Before we collect any personal information
              from your child, you must complete the parent consent flow at{" "}
              <Link href="/parent/consent">/parent/consent</Link>. We keep an auditable record of the
              specific scopes you approved (lesson grading, weekly reports, achievement export,
              optional teacher sharing, optional social learning, optional LLM processing).
            </li>
            <li>
              <strong>You can review what we have.</strong> Sign in and go to your parent dashboard to
              see your child's profile, answers, scores, and shared content. You can request a full
              export anytime — email <a href="mailto:privacy@drsparkacademy.com">privacy@drsparkacademy.com</a>.
            </li>
            <li>
              <strong>You can delete it.</strong> Visit{" "}
              <Link href="/parent/data-deletion">/parent/data-deletion</Link> to request deletion of
              your child's data. We process deletion within 30 days. Some records (consent receipts,
              payment records) must be kept for legal or accounting reasons; we'll tell you which.
            </li>
            <li>
              <strong>You can refuse further collection.</strong> Withdraw any consent scope at the
              consent page; the related feature turns off immediately for your child.
            </li>
            <li>
              <strong>We don't condition participation on disclosing more than is necessary.</strong>
              The core lessons run on the minimum data set described in Section 4.
            </li>
          </ul>
        </section>

        <section>
          <h2>6. How we use what we collect</h2>
          <ul>
            <li>To personalize the daily missions to your child's level.</li>
            <li>To generate weekly reports for you (and, only if you approve, for a teacher).</li>
            <li>To award badges, certificates, and a parent-approved transcript.</li>
            <li>To process subscription payments and prevent fraud.</li>
            <li>To improve the product (in aggregate, never personally identifying your child).</li>
            <li>To respond to your support requests and legal obligations.</li>
          </ul>
          <p>
            We do <strong>not</strong> use children's data to train external AI models. When LLM
            processing is enabled (a scope you must explicitly approve), prompts may include your
            child's first name and the lesson topic, but never last name, address, photo, or contact
            details.
          </p>
        </section>

        <section>
          <h2>7. Parent controls</h2>
          <p>From your parent dashboard you can:</p>
          <ul>
            <li>Create and manage child profiles.</li>
            <li>Choose optional subjects and faith settings (no faith content, Christian character only, or Christian Bible-based leadership).</li>
            <li>Approve or deny rewards before they're issued.</li>
            <li>Approve friend invitations — parent-mediated only. A child can request a friend invitation, but the link is sent to the friend's parent, not the friend directly.</li>
            <li>Control learning squad visibility (defaults hide exact scores, health-check answers, and faith reflections).</li>
            <li>Enable or disable live sessions and external integrations.</li>
            <li>Approve or revoke teacher / school sharing.</li>
            <li>Request export or deletion of your child's data.</li>
          </ul>
        </section>

        <section>
          <h2>8. Who we share data with (very few)</h2>
          <p>We share data only with the third parties listed below, and only as necessary:</p>
          <ul>
            <li>
              <strong>Anthropic</strong> (and optionally <strong>OpenRouter</strong>) — receives lesson
              prompts when the LLM processing scope is enabled. Prompts may include your child's first
              name and the lesson topic but never your last name, address, photo, or contact details.
              These providers act as our data processors and do not use the content to train their
              models.
            </li>
            <li>
              <strong>Stripe</strong> — receives the payment information you provide when you
              subscribe. Stripe is the merchant of record and processes payments under its own
              published privacy policy.
            </li>
            <li>
              <strong>Vercel</strong> — hosts the application. May see request metadata (IP address,
              user agent, page accessed) but not child content beyond what's required to deliver the
              page.
            </li>
            <li>
              <strong>Cloudflare</strong> — provides DNS, CDN, and email routing for{" "}
              <code>drsparkacademy.com</code>. Sees the same request metadata as Vercel.
            </li>
            <li>
              <strong>Teachers / schools</strong> — <em>only</em> when you explicitly approve sharing,
              and only the specific items you approve.
            </li>
            <li>
              <strong>Law enforcement</strong> — only if compelled by valid legal process.
            </li>
          </ul>
          <p>
            We do not sell personal information. We do not share your child's information with
            advertising networks for cross-site tracking. Ever.
          </p>
        </section>

        <section>
          <h2>9. School deployments (FERPA-adjacent)</h2>
          <p>
            If Dr. Spark Academy is used in a school setting, the school may direct certain handling of
            education records under FERPA. In that case the school is the controller of student data
            and Dr. Spark Academy acts as the school's service provider. The school's data-handling
            agreement supplements (and where conflicting, supersedes) this policy for the records it
            covers.
          </p>
          <p>
            For most home / family use, FERPA does not apply — but we follow similar minimization and
            access principles by default.
          </p>
        </section>

        <section>
          <h2>10. Health & wellness and faith content</h2>
          <p>
            Health & Wellness lessons teach general concepts about food, movement, hydration, sleep,
            stress, and chronic-disease prevention. They <strong>do not diagnose, treat, or shame</strong>{" "}
            a child. If your child has a medical condition, talk to their pediatrician — we are not a
            substitute for medical advice.
          </p>
          <p>
            Christian Leadership content is <strong>optional and parent-controlled</strong>. The
            default setting includes no faith content; you can opt in to "Christian character only" or
            "Christian Bible-based leadership" if those align with your family's values. We do not log
            your child's private faith reflections in a way that can be shared outside your account.
          </p>
        </section>

        <section>
          <h2>11. How long we keep data</h2>
          <ul>
            <li><strong>Active accounts:</strong> we retain your child's profile and learning history while the subscription is active so you can see weekly progress and your child can resume missions.</li>
            <li><strong>After deletion request:</strong> we delete personal data within 30 days. Aggregated, de-identified statistics may be retained.</li>
            <li><strong>After cancellation (no deletion request):</strong> child personal data is deleted after 180 days of inactivity. We notify you before deletion.</li>
            <li><strong>Consent receipts and payment records:</strong> kept for the duration required by law (typically 7 years for tax/payment records).</li>
          </ul>
        </section>

        <section>
          <h2>12. How we protect data</h2>
          <ul>
            <li>HTTPS / TLS for everything in transit.</li>
            <li>Hashed passwords (we never store plain text).</li>
            <li>Encrypted storage at rest for the database.</li>
            <li>Least-privilege access for our team — we can't see your child's specific answers without a specific support reason and a recorded access event.</li>
            <li>Audit logging on sensitive operations (consent changes, sharing approvals, data exports, deletions).</li>
            <li>No advertising trackers anywhere on the site.</li>
          </ul>
          <p>
            No system can be 100% secure. If we ever experience a breach affecting personal
            information about your family, we will notify you and the appropriate regulators as
            required by law.
          </p>
        </section>

        <section>
          <h2>13. Your privacy rights (parent + child)</h2>
          <p>Depending on where you live, you may have rights to:</p>
          <ul>
            <li><strong>Access</strong> — see what we have about you and your child.</li>
            <li><strong>Correct</strong> — fix inaccurate information.</li>
            <li><strong>Delete</strong> — have us erase data, subject to legal retention requirements.</li>
            <li><strong>Port</strong> — receive your data in a portable format.</li>
            <li><strong>Restrict or object</strong> to certain processing (e.g., turn off LLM processing).</li>
            <li><strong>Withdraw consent</strong> at any time.</li>
            <li><strong>Opt out</strong> of the sale or sharing of personal information (we don't sell, but California residents may exercise this right by request).</li>
            <li><strong>Lodge a complaint</strong> with your state attorney general or the FTC.</li>
          </ul>
          <p>
            Email <a href="mailto:privacy@drsparkacademy.com">privacy@drsparkacademy.com</a> to
            exercise any of these. We'll respond within 30 days. We may need to verify your identity
            before acting on the request.
          </p>
        </section>

        <section>
          <h2>14. Cookies and similar technologies</h2>
          <p>
            We use only the cookies needed to keep you signed in and to remember your dashboard
            preferences. No third-party advertising cookies, no cross-site trackers, no analytics
            cookies without your consent where required by law.
          </p>
        </section>

        <section>
          <h2>15. International transfers</h2>
          <p>
            Dr. Spark Academy is operated from the United States. If you use the service from outside
            the U.S., your information may be transferred to and processed in the U.S. We rely on
            appropriate safeguards (such as Standard Contractual Clauses) where required by the
            applicable jurisdiction. The service is primarily designed for U.S. families and may not
            be appropriate for use elsewhere.
          </p>
        </section>

        <section>
          <h2>16. Changes to this policy</h2>
          <p>
            We may update this policy from time to time. The "Last updated" date at the top reflects
            the most recent revision. If a change is material — for example, a new category of data
            collection or a new third-party processor — we'll notify you by email <em>before</em> the
            change takes effect, and you may need to re-confirm consent.
          </p>
        </section>

        <section>
          <h2>17. Contact</h2>
          <p>
            <strong>GENAK Estates LLC — Privacy</strong><br />
            Email: <a href="mailto:privacy@drsparkacademy.com">privacy@drsparkacademy.com</a><br />
            Mail: GENAK Estates LLC, Tolland, Connecticut, USA<br />
            Operating brand: Dr. Spark Academy (drsparkacademy.com)
          </p>
          <p>
            For company-level questions, see our parent company at{" "}
            <a href="https://genak.ai" target="_blank" rel="noopener">genak.ai</a>.
          </p>
        </section>

        <aside className="legal-disclaimer">
          <strong>Note from the operator:</strong> This privacy policy is a starter document for the
          launch. Before serving real paying customers, have it reviewed by a lawyer who specializes
          in children's online privacy (COPPA / state-equivalent laws) — particularly Section 5 on
          verifiable parental consent, Section 8 on third-party processors, and Section 11 on
          retention timelines. Once reviewed, remove this note.
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
            <Link href="/privacy">Privacy</Link>
            <Link href="/refund-policy">Refunds</Link>
            <Link href="/parent/consent">Consent</Link>
            <Link href="/parent/data-deletion">Data deletion</Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}
