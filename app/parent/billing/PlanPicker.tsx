"use client";

import { useState } from "react";

type Plan = {
  tier: "free" | "family" | "family_plus";
  name: string;
  tagline: string;
  oneTimeUSD: number;
  monthlyUSD: number;
  yearlyUSD: number;
  features: string[];
  description: string;
  recommended?: boolean;
};

type Cadence = "summer_pass" | "monthly" | "yearly";

const FEATURE_LABELS: Record<string, string> = {
  printable_reports: "Printable parent + school report",
  weeks_beyond_one: "All 8 weeks of missions",
  llm_tutoring: "Real LLM tutor explanations",
  llm_reports: "Weekly parent narrative + tips",
  teacher_share: "Parent-approved teacher share",
  achievement_export: "Transcript, certificate, badges",
  enrichment_tracks: "Enrichment tracks (Financial Literacy + more)",
  multiple_children: "Up to 4 children",
  priority_support: "Priority support",
  year_round_practice: "Year-round skill-sharpener practice"
};

const CADENCE_LABELS: Record<Cadence, { label: string; tagline: string }> = {
  summer_pass: { label: "Summer pass", tagline: "90 days — best value" },
  monthly: { label: "Monthly", tagline: "Flexible" },
  yearly: { label: "Yearly", tagline: "Year-round access" }
};

const CADENCE_SUFFIX: Record<Cadence, string> = {
  summer_pass: "for the summer",
  monthly: "/mo",
  yearly: "/yr"
};

interface PlanPickerProps {
  plans: Plan[];
  currentTier: "free" | "family" | "family_plus";
  parentEmail: string;
  studentId: string;
  stripeConfigured: boolean;
}

export function PlanPicker({ plans, currentTier, parentEmail, studentId, stripeConfigured }: PlanPickerProps) {
  const [cadence, setCadence] = useState<Cadence>("summer_pass");
  const [busyTier, setBusyTier] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function startCheckout(tier: "family" | "family_plus") {
    if (!stripeConfigured) {
      setError("Billing isn't configured on this server. Set STRIPE_SECRET_KEY plus the price IDs in .env.local.");
      return;
    }
    if (!parentEmail) {
      setError("Add your parent email on the consent page first.");
      return;
    }
    setBusyTier(tier);
    setError(null);
    try {
      const res = await fetch("/api/billing/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tier, cadence, parentEmail, studentId })
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.message ?? body?.error ?? `http_${res.status}`);
      }
      const body = await res.json();
      if (body.url) {
        window.location.assign(body.url);
        return;
      }
      throw new Error("missing_checkout_url");
    } catch (err: any) {
      setError(err?.message ?? "checkout_failed");
    } finally {
      setBusyTier(null);
    }
  }

  function priceFor(plan: Plan): { amount: number; suffix: string } {
    const amount =
      cadence === "summer_pass" ? plan.oneTimeUSD : cadence === "monthly" ? plan.monthlyUSD : plan.yearlyUSD;
    return { amount, suffix: cadence === "summer_pass" && amount === 0 ? "" : CADENCE_SUFFIX[cadence] };
  }

  function ctaText(plan: Plan, isCurrent: boolean): string {
    if (isCurrent) return "Your plan";
    if (busyTier === plan.tier) return "Opening checkout…";
    if (cadence === "summer_pass") return `Buy ${plan.name} summer`;
    return `Choose ${plan.name}`;
  }

  return (
    <>
      <div className="bl-cadence" role="tablist" aria-label="Billing cadence">
        {(Object.keys(CADENCE_LABELS) as Cadence[]).map((c) => (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={cadence === c}
            data-active={cadence === c}
            onClick={() => setCadence(c)}
            title={CADENCE_LABELS[c].tagline}
          >
            {CADENCE_LABELS[c].label}
          </button>
        ))}
      </div>

      <p className="bl-cadence-note">
        {cadence === "summer_pass"
          ? "One-time purchase, 90 days of access. The recommended path for a single summer."
          : cadence === "monthly"
            ? "Flexible — cancel anytime from the billing portal."
            : "Includes the full summer plus year-round access to new enrichment tracks and skill-sharpener practice as we ship them."}
      </p>

      {error && <p className="bl-error">{error}</p>}

      <div className="bl-plans">
        {plans.map((plan) => {
          const { amount, suffix } = priceFor(plan);
          const isCurrent = plan.tier === currentTier;
          const isFree = plan.tier === "free";
          const recommended = plan.recommended && cadence === "summer_pass";
          return (
            <div
              key={plan.tier}
              className="bl-plan"
              data-recommended={recommended ? "true" : "false"}
              data-current={isCurrent ? "true" : "false"}
            >
              <h3 className="bl-plan-name">{plan.name}</h3>
              <p className="bl-plan-tagline">{plan.tagline}</p>
              <div className="bl-plan-price">
                <span className="bl-plan-amount">${amount.toFixed(amount % 1 === 0 ? 0 : 2)}</span>
                <span className="bl-plan-cadence">{suffix}</span>
              </div>
              <p className="bl-plan-description">{plan.description}</p>
              <ul className="bl-plan-features">
                {plan.features.map((f) => (
                  <li key={f}>{FEATURE_LABELS[f] ?? f}</li>
                ))}
              </ul>
              {isFree ? (
                <button type="button" className="bl-plan-cta" disabled>
                  {isCurrent ? "Your plan" : "Always free"}
                </button>
              ) : (
                <button
                  type="button"
                  className="bl-plan-cta"
                  data-primary="true"
                  disabled={busyTier !== null || isCurrent}
                  onClick={() => startCheckout(plan.tier as "family" | "family_plus")}
                >
                  {ctaText(plan, isCurrent)}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
