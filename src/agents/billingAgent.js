// Billing + entitlements agent.
//
// The product has three plans. Each plan unlocks a flat set of features so
// the gate is a simple boolean check, not a matrix. Adding a new feature
// means adding it to a plan's `features` array.
//
// Pricing is config — actual Stripe Price IDs come from env so test/staging
// can use different prices without a code change.

export const PLAN_TIERS = Object.freeze({
  FREE: "free",
  FAMILY: "family",
  FAMILY_PLUS: "family_plus"
});

export const FEATURES = Object.freeze({
  WEEKS_BEYOND_ONE: "weeks_beyond_one",
  LLM_TUTORING: "llm_tutoring",
  LLM_REPORTS: "llm_reports",
  PRINTABLE_REPORTS: "printable_reports",
  TEACHER_SHARE: "teacher_share",
  ACHIEVEMENT_EXPORT: "achievement_export",
  MULTIPLE_CHILDREN: "multiple_children",
  PRIORITY_SUPPORT: "priority_support"
});

const PLAN_FEATURES = {
  [PLAN_TIERS.FREE]: [FEATURES.PRINTABLE_REPORTS],
  [PLAN_TIERS.FAMILY]: [
    FEATURES.PRINTABLE_REPORTS,
    FEATURES.WEEKS_BEYOND_ONE,
    FEATURES.LLM_TUTORING,
    FEATURES.LLM_REPORTS,
    FEATURES.TEACHER_SHARE,
    FEATURES.ACHIEVEMENT_EXPORT
  ],
  [PLAN_TIERS.FAMILY_PLUS]: [
    FEATURES.PRINTABLE_REPORTS,
    FEATURES.WEEKS_BEYOND_ONE,
    FEATURES.LLM_TUTORING,
    FEATURES.LLM_REPORTS,
    FEATURES.TEACHER_SHARE,
    FEATURES.ACHIEVEMENT_EXPORT,
    FEATURES.MULTIPLE_CHILDREN,
    FEATURES.PRIORITY_SUPPORT
  ]
};

export const PLAN_CATALOG = Object.freeze([
  {
    tier: PLAN_TIERS.FREE,
    name: "Free",
    tagline: "Diagnostic + Week 1",
    monthlyUSD: 0,
    yearlyUSD: 0,
    features: PLAN_FEATURES[PLAN_TIERS.FREE],
    description:
      "Try the program. Your child completes the diagnostic and the full first week with the deterministic offline tutor."
  },
  {
    tier: PLAN_TIERS.FAMILY,
    name: "Family",
    tagline: "Full 8-week summer for one child",
    monthlyUSD: 7.99,
    yearlyUSD: 69,
    features: PLAN_FEATURES[PLAN_TIERS.FAMILY],
    description:
      "All 8 weeks, real LLM tutoring, weekly parent narratives, parent-approved teacher shares, and the printable transcript."
  },
  {
    tier: PLAN_TIERS.FAMILY_PLUS,
    name: "Family Plus",
    tagline: "Up to 4 children + priority support",
    monthlyUSD: 14.99,
    yearlyUSD: 129,
    features: PLAN_FEATURES[PLAN_TIERS.FAMILY_PLUS],
    description:
      "Everything in Family for up to 4 siblings. Priority support and early access to new content tracks."
  }
]);

export function entitlementsForTier(tier) {
  const features = PLAN_FEATURES[tier] ?? PLAN_FEATURES[PLAN_TIERS.FREE];
  return Object.freeze({
    tier,
    features: [...features],
    maxChildren: tier === PLAN_TIERS.FAMILY_PLUS ? 4 : 1,
    weeksUnlocked: features.includes(FEATURES.WEEKS_BEYOND_ONE) ? 8 : 1
  });
}

export function getActivePlan(subscription, { now = () => new Date() } = {}) {
  if (!subscription) return PLAN_TIERS.FREE;
  if (!subscription.tier || !ALL_TIERS.includes(subscription.tier)) return PLAN_TIERS.FREE;
  // Active includes paid + grace + trialing. Past-due drops to free.
  const liveStatuses = new Set(["active", "trialing", "past_due_grace"]);
  if (!liveStatuses.has(subscription.status)) return PLAN_TIERS.FREE;
  if (subscription.currentPeriodEnd) {
    const grace = new Date(subscription.currentPeriodEnd).getTime() + 3 * 86_400_000;
    if (grace < now().getTime()) return PLAN_TIERS.FREE;
  }
  return subscription.tier;
}

export function isFeatureUnlocked({ subscription, feature, now }) {
  const tier = getActivePlan(subscription, { now });
  return entitlementsForTier(tier).features.includes(feature);
}

// Normalize a Stripe subscription into our shape. We only persist what we
// need; the source of truth lives in Stripe.
export function subscriptionFromStripeEvent(event) {
  const sub = event?.data?.object;
  if (!sub || typeof sub !== "object") return null;
  const items = sub.items?.data ?? [];
  const priceId = items[0]?.price?.id ?? null;
  return Object.freeze({
    stripeSubscriptionId: sub.id,
    stripeCustomerId: sub.customer ?? null,
    parentEmail: sub.metadata?.parent_email?.toLowerCase() ?? null,
    studentId: sub.metadata?.student_id ?? null,
    tier: tierForPriceId(priceId),
    status: normalizeStripeStatus(sub.status),
    priceId,
    currentPeriodEnd: sub.current_period_end
      ? new Date(sub.current_period_end * 1000).toISOString()
      : null,
    cancelAtPeriodEnd: !!sub.cancel_at_period_end,
    updatedAt: new Date().toISOString()
  });
}

// Map a Stripe Price ID to our tier. Tests inject the env directly.
export function tierForPriceId(priceId, env = process.env) {
  if (!priceId) return null;
  if (priceId === env.STRIPE_PRICE_FAMILY_MONTHLY || priceId === env.STRIPE_PRICE_FAMILY_YEARLY) {
    return PLAN_TIERS.FAMILY;
  }
  if (
    priceId === env.STRIPE_PRICE_FAMILY_PLUS_MONTHLY ||
    priceId === env.STRIPE_PRICE_FAMILY_PLUS_YEARLY
  ) {
    return PLAN_TIERS.FAMILY_PLUS;
  }
  return null;
}

export function priceIdForTier({ tier, cadence, env = process.env }) {
  const key = `${tier.toUpperCase()}_${cadence.toUpperCase()}`;
  const map = {
    FAMILY_MONTHLY: env.STRIPE_PRICE_FAMILY_MONTHLY,
    FAMILY_YEARLY: env.STRIPE_PRICE_FAMILY_YEARLY,
    FAMILY_PLUS_MONTHLY: env.STRIPE_PRICE_FAMILY_PLUS_MONTHLY,
    FAMILY_PLUS_YEARLY: env.STRIPE_PRICE_FAMILY_PLUS_YEARLY
  };
  return map[key] ?? null;
}

export function normalizeStripeStatus(status) {
  switch (status) {
    case "active":
    case "trialing":
    case "incomplete":
      return status === "incomplete" ? "past_due_grace" : status;
    case "past_due":
      return "past_due_grace";
    case "canceled":
    case "unpaid":
    case "incomplete_expired":
      return "canceled";
    default:
      return status ?? "unknown";
  }
}

export function summarizeBilling(subscription, opts) {
  const tier = getActivePlan(subscription, opts);
  const entitlements = entitlementsForTier(tier);
  return {
    tier,
    isPaid: tier !== PLAN_TIERS.FREE,
    weeksUnlocked: entitlements.weeksUnlocked,
    maxChildren: entitlements.maxChildren,
    cancelAtPeriodEnd: subscription?.cancelAtPeriodEnd ?? false,
    currentPeriodEnd: subscription?.currentPeriodEnd ?? null,
    stripeCustomerId: subscription?.stripeCustomerId ?? null
  };
}

const ALL_TIERS = Object.values(PLAN_TIERS);
