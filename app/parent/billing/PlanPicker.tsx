"use client";

import { useState } from "react";

type Plan = {
  tier: "free" | "family" | "family_plus";
  name: string;
  tagline: string;
  monthlyUSD: number;
  yearlyUSD: number;
  features: string[];
  description: string;
};

const FEATURE_LABELS: Record<string, string> = {
  printable_reports: "Printable parent + school report",
  weeks_beyond_one: "All 8 weeks of missions",
  llm_tutoring: "Real LLM tutor explanations",
  llm_reports: "Weekly parent narrative + tips",
  teacher_share: "Parent-approved teacher share",
  achievement_export: "Transcript, certificate, badges",
  multiple_children: "Up to 4 children",
  priority_support: "Priority support"
};

interface PlanPickerProps {
  plans: Plan[];
  currentTier: "free" | "family" | "family_plus";
  parentEmail: string;
  studentId: string;
  stripeConfigured: boolean;
}

export function PlanPicker({ plans, currentTier, parentEmail, studentId, stripeConfigured }: PlanPickerProps) {
  const [cadence, setCadence] = useState<"monthly" | "yearly">("monthly");
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

  return (
    <>
      <div className="bl-cadence" role="tablist" aria-label="Billing cadence">
        <button
          type="button"
          role="tab"
          aria-selected={cadence === "monthly"}
          data-active={cadence === "monthly"}
          onClick={() => setCadence("monthly")}
        >
          Monthly
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={cadence === "yearly"}
          data-active={cadence === "yearly"}
          onClick={() => setCadence("yearly")}
        >
          Yearly · save ~28%
        </button>
      </div>

      {error && <p className="bl-error">{error}</p>}

      <div className="bl-plans">
        {plans.map((plan) => {
          const price = cadence === "monthly" ? plan.monthlyUSD : plan.yearlyUSD;
          const isCurrent = plan.tier === currentTier;
          const isFree = plan.tier === "free";
          const recommended = plan.tier === "family";
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
                <span className="bl-plan-amount">${price.toFixed(price % 1 === 0 ? 0 : 2)}</span>
                <span className="bl-plan-cadence">{isFree ? "" : `/${cadence === "monthly" ? "mo" : "yr"}`}</span>
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
                  {isCurrent
                    ? "Your plan"
                    : busyTier === plan.tier
                      ? "Opening checkout…"
                      : `Choose ${plan.name}`}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
