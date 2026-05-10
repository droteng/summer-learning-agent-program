import assert from "node:assert/strict";
import test from "node:test";
import {
  entitlementsForTier,
  FEATURES,
  getActivePlan,
  isFeatureUnlocked,
  normalizeStripeStatus,
  PLAN_CATALOG,
  PLAN_TIERS,
  priceIdForTier,
  subscriptionFromStripeEvent,
  summarizeBilling,
  tierForPriceId
} from "../src/agents/billingAgent.js";

test("free tier has limited features and no week unlocks", () => {
  const ent = entitlementsForTier(PLAN_TIERS.FREE);
  assert.equal(ent.weeksUnlocked, 1);
  assert.equal(ent.maxChildren, 1);
  assert.ok(ent.features.includes(FEATURES.PRINTABLE_REPORTS));
  assert.equal(ent.features.includes(FEATURES.LLM_TUTORING), false);
});

test("family tier unlocks weeks, llm tutoring, and reports", () => {
  const ent = entitlementsForTier(PLAN_TIERS.FAMILY);
  assert.equal(ent.weeksUnlocked, 8);
  assert.ok(ent.features.includes(FEATURES.LLM_TUTORING));
  assert.ok(ent.features.includes(FEATURES.LLM_REPORTS));
  assert.equal(ent.maxChildren, 1);
});

test("family plus adds multi-child + priority support", () => {
  const ent = entitlementsForTier(PLAN_TIERS.FAMILY_PLUS);
  assert.equal(ent.maxChildren, 4);
  assert.ok(ent.features.includes(FEATURES.MULTIPLE_CHILDREN));
  assert.ok(ent.features.includes(FEATURES.PRIORITY_SUPPORT));
});

test("getActivePlan: missing subscription is free", () => {
  assert.equal(getActivePlan(null), PLAN_TIERS.FREE);
});

test("getActivePlan: active subscription returns its tier", () => {
  const sub = { tier: PLAN_TIERS.FAMILY, status: "active" };
  assert.equal(getActivePlan(sub), PLAN_TIERS.FAMILY);
});

test("getActivePlan: trialing subscription is treated as active", () => {
  const sub = { tier: PLAN_TIERS.FAMILY, status: "trialing" };
  assert.equal(getActivePlan(sub), PLAN_TIERS.FAMILY);
});

test("getActivePlan: past-due grace allows access until 3 days after period end", () => {
  const recentEnd = new Date(Date.now() - 86_400_000).toISOString();
  const ancientEnd = new Date(Date.now() - 10 * 86_400_000).toISOString();
  assert.equal(
    getActivePlan({ tier: PLAN_TIERS.FAMILY, status: "past_due_grace", currentPeriodEnd: recentEnd }),
    PLAN_TIERS.FAMILY
  );
  assert.equal(
    getActivePlan({ tier: PLAN_TIERS.FAMILY, status: "past_due_grace", currentPeriodEnd: ancientEnd }),
    PLAN_TIERS.FREE
  );
});

test("getActivePlan: canceled subscription drops to free", () => {
  assert.equal(getActivePlan({ tier: PLAN_TIERS.FAMILY, status: "canceled" }), PLAN_TIERS.FREE);
});

test("getActivePlan: rejects unknown tiers as free", () => {
  assert.equal(getActivePlan({ tier: "lifetime", status: "active" }), PLAN_TIERS.FREE);
});

test("isFeatureUnlocked maps to current tier's feature list", () => {
  const family = { tier: PLAN_TIERS.FAMILY, status: "active" };
  assert.equal(isFeatureUnlocked({ subscription: family, feature: FEATURES.LLM_TUTORING }), true);
  assert.equal(isFeatureUnlocked({ subscription: null, feature: FEATURES.LLM_TUTORING }), false);
  assert.equal(isFeatureUnlocked({ subscription: family, feature: FEATURES.MULTIPLE_CHILDREN }), false);
});

test("PLAN_CATALOG covers all tiers", () => {
  const tiers = PLAN_CATALOG.map((p) => p.tier);
  for (const t of Object.values(PLAN_TIERS)) {
    assert.ok(tiers.includes(t), `PLAN_CATALOG missing tier ${t}`);
  }
});

test("normalizeStripeStatus collapses to our canonical states", () => {
  assert.equal(normalizeStripeStatus("active"), "active");
  assert.equal(normalizeStripeStatus("trialing"), "trialing");
  assert.equal(normalizeStripeStatus("past_due"), "past_due_grace");
  assert.equal(normalizeStripeStatus("incomplete"), "past_due_grace");
  assert.equal(normalizeStripeStatus("canceled"), "canceled");
  assert.equal(normalizeStripeStatus("incomplete_expired"), "canceled");
  assert.equal(normalizeStripeStatus("unpaid"), "canceled");
});

test("tierForPriceId reads env mapping", () => {
  const env = {
    STRIPE_PRICE_FAMILY_MONTHLY: "price_fam_m",
    STRIPE_PRICE_FAMILY_PLUS_YEARLY: "price_plus_y"
  };
  assert.equal(tierForPriceId("price_fam_m", env), PLAN_TIERS.FAMILY);
  assert.equal(tierForPriceId("price_plus_y", env), PLAN_TIERS.FAMILY_PLUS);
  assert.equal(tierForPriceId("price_unknown", env), null);
  assert.equal(tierForPriceId(null, env), null);
});

test("priceIdForTier composes the env key correctly", () => {
  const env = {
    STRIPE_PRICE_FAMILY_MONTHLY: "price_fam_m",
    STRIPE_PRICE_FAMILY_PLUS_YEARLY: "price_plus_y"
  };
  assert.equal(priceIdForTier({ tier: "family", cadence: "monthly", env }), "price_fam_m");
  assert.equal(priceIdForTier({ tier: "family_plus", cadence: "yearly", env }), "price_plus_y");
  assert.equal(priceIdForTier({ tier: "family", cadence: "yearly", env }), null);
});

test("subscriptionFromStripeEvent normalizes a customer.subscription.* event", () => {
  const env = { STRIPE_PRICE_FAMILY_MONTHLY: "price_fam_m" };
  process.env.STRIPE_PRICE_FAMILY_MONTHLY = "price_fam_m";
  const event = {
    type: "customer.subscription.created",
    data: {
      object: {
        id: "sub_123",
        customer: "cus_abc",
        status: "active",
        cancel_at_period_end: false,
        current_period_end: 2_000_000_000,
        items: { data: [{ price: { id: "price_fam_m" } }] },
        metadata: { parent_email: "Leo@Example.COM", student_id: "child-1" }
      }
    }
  };
  const normalized = subscriptionFromStripeEvent(event);
  assert.equal(normalized.stripeSubscriptionId, "sub_123");
  assert.equal(normalized.stripeCustomerId, "cus_abc");
  assert.equal(normalized.tier, PLAN_TIERS.FAMILY);
  assert.equal(normalized.parentEmail, "leo@example.com");
  assert.equal(normalized.status, "active");
  assert.equal(normalized.cancelAtPeriodEnd, false);
  delete process.env.STRIPE_PRICE_FAMILY_MONTHLY;
});

test("subscriptionFromStripeEvent returns null on missing data", () => {
  assert.equal(subscriptionFromStripeEvent(null), null);
  assert.equal(subscriptionFromStripeEvent({ data: {} }), null);
});

test("summarizeBilling exposes UI-ready fields", () => {
  const sub = {
    tier: PLAN_TIERS.FAMILY,
    status: "active",
    currentPeriodEnd: new Date(Date.now() + 86_400_000).toISOString(),
    cancelAtPeriodEnd: true,
    stripeCustomerId: "cus_xyz"
  };
  const summary = summarizeBilling(sub);
  assert.equal(summary.tier, PLAN_TIERS.FAMILY);
  assert.equal(summary.isPaid, true);
  assert.equal(summary.weeksUnlocked, 8);
  assert.equal(summary.cancelAtPeriodEnd, true);
  assert.equal(summary.stripeCustomerId, "cus_xyz");
});
