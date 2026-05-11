import Link from "next/link";
import "./billing.css";
import {
  getActivePlan,
  PLAN_CATALOG,
  PLAN_TIERS,
  summarizeBilling
} from "../../../src/agents/billingAgent.js";
import { loadConsentRecords, loadSubscription } from "../../../src/data/db.js";
import { PlanPicker } from "./PlanPicker";

export const dynamic = "force-dynamic";

type SearchParams = Promise<{ student?: string; status?: string }>;

export default async function BillingPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const studentId =
    typeof params?.student === "string" && params.student.length > 0 ? params.student : "demo-student";
  const status = typeof params?.status === "string" ? params.status : null;

  const consentRecords = await loadConsentRecords(studentId);
  const parentEmail = pickParentEmailFromConsents(consentRecords);
  const subscription = parentEmail ? await loadSubscription(parentEmail) : null;
  const summary = summarizeBilling(subscription);
  const currentTier = getActivePlan(subscription);
  const stripeConfigured = !!process.env.STRIPE_SECRET_KEY;

  return (
    <main className="bl-page">
      <div className="bl-shell">
        <header className="pd-topbar">
          <Link className="pd-back" href={`/parent?student=${encodeURIComponent(studentId)}`}>
            <span aria-hidden="true">←</span> Parent dashboard
          </Link>
          <div className="pd-title-block">
            <span className="pd-title-eyebrow">Billing</span>
            <h1 className="pd-title">Pick a plan</h1>
          </div>
        </header>

        <section className="bl-hero">
          <h1>Free Week 1. Pay for the rest of summer if it's working.</h1>
          <p>
            Try the diagnostic and the entire first week without paying. Upgrade only if your
            child is engaged. Cancel any time from the billing portal.
          </p>
        </section>

        {status === "success" && (
          <section className="bl-current">
            <div>
              <span className="bl-current-eyebrow">Thanks!</span>
              <div className="bl-current-tier">Subscription is processing</div>
              <p className="bl-current-meta">
                Stripe will confirm via webhook within seconds. Refresh in a moment to see your
                new plan.
              </p>
            </div>
          </section>
        )}

        {status === "cancelled" && (
          <section className="bl-error" role="status">
            Checkout was cancelled. Your plan didn't change. Pick another option below or close
            this page.
          </section>
        )}

        {summary.isPaid && (
          <section className="bl-current">
            <div>
              <span className="bl-current-eyebrow">Active plan</span>
              <div className="bl-current-tier">{prettyTier(currentTier)}</div>
              <span className="bl-current-meta">
                {summary.cancelAtPeriodEnd
                  ? "Cancels at period end."
                  : summary.currentPeriodEnd
                    ? `Renews ${new Date(summary.currentPeriodEnd).toLocaleDateString()}`
                    : "Active"}
              </span>
            </div>
            <BillingPortalLink parentEmail={parentEmail ?? ""} disabled={!stripeConfigured} />
          </section>
        )}

        <PlanPicker
          plans={PLAN_CATALOG as any}
          currentTier={currentTier as any}
          parentEmail={parentEmail ?? ""}
          studentId={studentId}
          stripeConfigured={stripeConfigured}
        />

        {!parentEmail && (
          <section className="bl-error" role="status">
            We don't have your email yet. Record consent first at{" "}
            <Link href={`/parent/consent?student=${encodeURIComponent(studentId)}`} style={{ textDecoration: "underline" }}>
              /parent/consent
            </Link>{" "}
            so we can attach billing to a parent account.
          </section>
        )}

        <p className="bl-fineprint">
          You're charged by Stripe; we never see your card details. Free tier always includes the
          diagnostic and Week 1. Cancellation stops future charges and downgrades you to free at
          period end. Children's data is governed by the parental consent you recorded.
        </p>
      </div>
    </main>
  );
}

function pickParentEmailFromConsents(records: any[]): string | null {
  const active = records.find((r) => r?.status === "active");
  if (active?.parentEmail) return active.parentEmail;
  const newest = [...records].sort(
    (a: any, b: any) => new Date(b?.createdAt ?? 0).getTime() - new Date(a?.createdAt ?? 0).getTime()
  )[0];
  return newest?.parentEmail ?? null;
}

function prettyTier(tier: string) {
  if (tier === PLAN_TIERS.FAMILY) return "Family";
  if (tier === PLAN_TIERS.FAMILY_PLUS) return "Family Plus";
  return "Free";
}

function BillingPortalLink({ parentEmail, disabled }: { parentEmail: string; disabled: boolean }) {
  if (disabled) return null;
  return (
    <form action="/api/billing/portal" method="post" style={{ margin: 0 }}>
      <input type="hidden" name="parentEmail" value={parentEmail} />
      <button
        type="submit"
        className="bl-plan-cta"
        formAction="/api/billing/portal"
        formMethod="post"
      >
        Manage billing →
      </button>
    </form>
  );
}
