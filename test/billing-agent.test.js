import assert from "node:assert/strict";
import test from "node:test";
import {
  CADENCES,
  cadenceForPriceId,
  entitlementsForTier,
  FEATURES,
  getActivePlan,
  isFeatureUnlocked,
  normalizeStripeStatus,
  PLAN_CATALOG,
  PLAN_TIERS,
  priceIdForTier,
  stripeCheckoutModeForCadence,
  subscriptionFromCheckoutSession,
  subscriptionFromStripeEvent,
  summarizeBilling,
  SUMMER_PASS_DAYS,
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
    STRIPE_PRICE_FAMILY_SUMMER: "price_fam_s",
    STRIPE_PRICE_FAMILY_MONTHLY: "price_fam_m",
    STRIPE_PRICE_FAMILY_PLUS_YEARLY: "price_plus_y"
  };
  assert.equal(priceIdForTier({ tier: "family", cadence: "summer_pass", env }), "price_fam_s");
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

test("PLAN_CATALOG carries the new summer-pass + monthly + yearly prices", () => {
  const family = PLAN_CATALOG.find((p) => p.tier === PLAN_TIERS.FAMILY);
  const familyPlus = PLAN_CATALOG.find((p) => p.tier === PLAN_TIERS.FAMILY_PLUS);
  assert.equal(family.oneTimeUSD, 99);
  assert.equal(family.monthlyUSD, 29);
  assert.equal(family.yearlyUSD, 249);
  assert.equal(familyPlus.oneTimeUSD, 149);
  assert.equal(familyPlus.monthlyUSD, 49);
  assert.equal(familyPlus.yearlyUSD, 399);
  assert.equal(family.recommended, true);
});

test("stripeCheckoutModeForCadence picks payment for summer pass and subscription otherwise", () => {
  assert.equal(stripeCheckoutModeForCadence(CADENCES.SUMMER_PASS), "payment");
  assert.equal(stripeCheckoutModeForCadence(CADENCES.MONTHLY), "subscription");
  assert.equal(stripeCheckoutModeForCadence(CADENCES.YEARLY), "subscription");
});

test("cadenceForPriceId maps each env-injected price to its cadence", () => {
  const env = {
    STRIPE_PRICE_FAMILY_SUMMER: "price_fs",
    STRIPE_PRICE_FAMILY_MONTHLY: "price_fm",
    STRIPE_PRICE_FAMILY_YEARLY: "price_fy",
    STRIPE_PRICE_FAMILY_PLUS_SUMMER: "price_ps"
  };
  assert.equal(cadenceForPriceId("price_fs", env), CADENCES.SUMMER_PASS);
  assert.equal(cadenceForPriceId("price_fm", env), CADENCES.MONTHLY);
  assert.equal(cadenceForPriceId("price_fy", env), CADENCES.YEARLY);
  assert.equal(cadenceForPriceId("price_ps", env), CADENCES.SUMMER_PASS);
  assert.equal(cadenceForPriceId("price_unknown", env), null);
});

test("subscriptionFromCheckoutSession builds a 90-day summer pass from a payment session", () => {
  const env = { STRIPE_PRICE_FAMILY_SUMMER: "price_fam_s" };
  const fixed = () => new Date("2026-05-10T12:00:00Z");
  const session = {
    mode: "payment",
    customer: "cus_xyz",
    customer_email: "Leo@Example.com",
    metadata: { student_id: "child-1", parent_email: "leo@example.com", price_id: "price_fam_s" }
  };
  const sub = subscriptionFromCheckoutSession({ session, env, now: fixed });
  assert.equal(sub.tier, PLAN_TIERS.FAMILY);
  assert.equal(sub.status, "active");
  assert.equal(sub.cadence, CADENCES.SUMMER_PASS);
  assert.equal(sub.parentEmail, "leo@example.com");
  assert.equal(sub.studentId, "child-1");
  assert.equal(sub.stripeSubscriptionId, null);
  const days = (new Date(sub.currentPeriodEnd).getTime() - fixed().getTime()) / 86_400_000;
  assert.equal(Math.round(days), SUMMER_PASS_DAYS);
});

test("subscriptionFromCheckoutSession returns null for subscription-mode sessions", () => {
  const session = { mode: "subscription", customer: "cus_x", customer_email: "x@y.z" };
  assert.equal(subscriptionFromCheckoutSession({ session }), null);
});

test("getActivePlan: summer pass expires hard at currentPeriodEnd with no grace", () => {
  const recentExpiry = new Date(Date.now() - 60 * 60 * 1000).toISOString(); // 1 hour ago
  const sub = {
    tier: PLAN_TIERS.FAMILY,
    status: "active",
    cadence: CADENCES.SUMMER_PASS,
    currentPeriodEnd: recentExpiry
  };
  assert.equal(getActivePlan(sub), PLAN_TIERS.FREE, "summer pass past expiry should expire immediately");

  // Same expiry shape but a monthly subscription should still grant the 3-day grace.
  const monthly = { ...sub, cadence: CADENCES.MONTHLY, status: "past_due_grace" };
  assert.equal(getActivePlan(monthly), PLAN_TIERS.FAMILY, "monthly subscription gets 3-day grace");
});
