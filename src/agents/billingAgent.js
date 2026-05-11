// Billing + entitlements agent.
//
// Three plans (Free, Family, Family Plus) and three cadences (Summer pass,
// Monthly, Yearly). The Summer pass is a one-time payment that grants 90
// days of access — Stripe Checkout in mode=payment rather than subscription.
// Monthly and Yearly are standard recurring subscriptions.
//
// Pricing is configured in PLAN_CATALOG below; Stripe Price IDs come from
// env so test/staging can use different prices without a code change.

export const PLAN_TIERS = Object.freeze({
  FREE: "free",
  FAMILY: "family",
  FAMILY_PLUS: "family_plus"
});

export const CADENCES = Object.freeze({
  SUMMER_PASS: "summer_pass",
  MONTHLY: "monthly",
  YEARLY: "yearly"
});

export const SUMMER_PASS_DAYS = 90;

export const FEATURES = Object.freeze({
  WEEKS_BEYOND_ONE: "weeks_beyond_one",
  LLM_TUTORING: "llm_tutoring",
  LLM_REPORTS: "llm_reports",
  PRINTABLE_REPORTS: "printable_reports",
  TEACHER_SHARE: "teacher_share",
  ACHIEVEMENT_EXPORT: "achievement_export",
  MULTIPLE_CHILDREN: "multiple_children",
  PRIORITY_SUPPORT: "priority_support",
  ENRICHMENT_TRACKS: "enrichment_tracks",
  YEAR_ROUND_PRACTICE: "year_round_practice"
});

const PLAN_FEATURES = {
  [PLAN_TIERS.FREE]: [FEATURES.PRINTABLE_REPORTS],
  [PLAN_TIERS.FAMILY]: [
    FEATURES.PRINTABLE_REPORTS,
    FEATURES.WEEKS_BEYOND_ONE,
    FEATURES.LLM_TUTORING,
    FEATURES.LLM_REPORTS,
    FEATURES.TEACHER_SHARE,
    FEATURES.ACHIEVEMENT_EXPORT,
    FEATURES.ENRICHMENT_TRACKS
  ],
  [PLAN_TIERS.FAMILY_PLUS]: [
    FEATURES.PRINTABLE_REPORTS,
    FEATURES.WEEKS_BEYOND_ONE,
    FEATURES.LLM_TUTORING,
    FEATURES.LLM_REPORTS,
    FEATURES.TEACHER_SHARE,
    FEATURES.ACHIEVEMENT_EXPORT,
    FEATURES.ENRICHMENT_TRACKS,
    FEATURES.MULTIPLE_CHILDREN,
    FEATURES.PRIORITY_SUPPORT,
    FEATURES.YEAR_ROUND_PRACTICE
  ]
};

// Summer programs are bought as a one-time package, not as a subscription.
// Anchor pricing on the summer pass; monthly + yearly are convenience
// alternatives for parents who want to keep going past the 8-week core.
export const PLAN_CATALOG = Object.freeze([
  {
    tier: PLAN_TIERS.FREE,
    name: "Free",
    tagline: "Diagnostic + Week 1",
    oneTimeUSD: 0,
    monthlyUSD: 0,
    yearlyUSD: 0,
    features: PLAN_FEATURES[PLAN_TIERS.FREE],
    description:
      "Try the program. Your child completes the diagnostic and the full first week with the deterministic offline tutor. No card required."
  },
  {
    tier: PLAN_TIERS.FAMILY,
    name: "Family",
    tagline: "Full 8-week summer for one child",
    oneTimeUSD: 99,
    monthlyUSD: 29,
    yearlyUSD: 249,
    features: PLAN_FEATURES[PLAN_TIERS.FAMILY],
    description:
      "All 8 weeks of authored Grade 6 missions, real LLM tutoring, weekly parent narratives, parent-approved teacher share, achievement transcript, and one enrichment track. Summer pass covers 90 days; yearly adds year-round access to new enrichment tracks as they ship.",
    recommended: true
  },
  {
    tier: PLAN_TIERS.FAMILY_PLUS,
    name: "Family Plus",
    tagline: "Up to 4 children + every enrichment track",
    oneTimeUSD: 149,
    monthlyUSD: 49,
    yearlyUSD: 399,
    features: PLAN_FEATURES[PLAN_TIERS.FAMILY_PLUS],
    description:
      "Everything in Family for up to 4 siblings. All enrichment tracks unlocked. Yearly adds year-round skill-sharpener practice between summers. Priority support and early access to new content."
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
  const liveStatuses = new Set(["active", "trialing", "past_due_grace"]);
  if (!liveStatuses.has(subscription.status)) return PLAN_TIERS.FREE;
  if (subscription.currentPeriodEnd) {
    // Summer pass expires hard at currentPeriodEnd — no grace. Subscriptions
    // get a 3-day grace because Stripe retries failed charges.
    const isSummerPass = subscription.cadence === CADENCES.SUMMER_PASS;
    const graceMs = isSummerPass ? 0 : 3 * 86_400_000;
    const deadline = new Date(subscription.currentPeriodEnd).getTime() + graceMs;
    if (deadline < now().getTime()) return PLAN_TIERS.FREE;
  }
  return subscription.tier;
}

export function isFeatureUnlocked({ subscription, feature, now }) {
  const tier = getActivePlan(subscription, { now });
  return entitlementsForTier(tier).features.includes(feature);
}

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
    cadence: cadenceForPriceId(priceId),
    currentPeriodEnd: sub.current_period_end
      ? new Date(sub.current_period_end * 1000).toISOString()
      : null,
    cancelAtPeriodEnd: !!sub.cancel_at_period_end,
    updatedAt: new Date().toISOString()
  });
}

// One-time summer-pass purchases come through checkout.session.completed
// (mode=payment), not via subscription events. Build a synthetic
// subscription record with a hard 90-day expiry.
/**
 * @param {{ session: object, env?: NodeJS.ProcessEnv, now?: () => Date }} args
 */
export function subscriptionFromCheckoutSession(args) {
  const { session, env = process.env, now = () => new Date() } = args ?? {};
  if (!session || session.mode !== "payment") return null;
  const lineItem = session?.line_items?.data?.[0];
  const priceId = lineItem?.price?.id ?? session?.metadata?.price_id ?? null;
  const tier = tierForPriceId(priceId, env);
  if (!tier) return null;
  const customerEmail =
    session?.customer_details?.email ??
    session?.customer_email ??
    session?.metadata?.parent_email ??
    null;
  if (!customerEmail) return null;
  const expiresAt = new Date(now().getTime() + SUMMER_PASS_DAYS * 86_400_000);
  return Object.freeze({
    stripeSubscriptionId: null,
    stripeCustomerId: session.customer ?? null,
    parentEmail: customerEmail.toLowerCase(),
    studentId: session?.metadata?.student_id ?? null,
    tier,
    status: "active",
    priceId,
    cadence: CADENCES.SUMMER_PASS,
    currentPeriodEnd: expiresAt.toISOString(),
    cancelAtPeriodEnd: false,
    updatedAt: new Date().toISOString()
  });
}

export function tierForPriceId(priceId, env = process.env) {
  if (!priceId) return null;
  if (
    priceId === env.STRIPE_PRICE_FAMILY_SUMMER ||
    priceId === env.STRIPE_PRICE_FAMILY_MONTHLY ||
    priceId === env.STRIPE_PRICE_FAMILY_YEARLY
  ) {
    return PLAN_TIERS.FAMILY;
  }
  if (
    priceId === env.STRIPE_PRICE_FAMILY_PLUS_SUMMER ||
    priceId === env.STRIPE_PRICE_FAMILY_PLUS_MONTHLY ||
    priceId === env.STRIPE_PRICE_FAMILY_PLUS_YEARLY
  ) {
    return PLAN_TIERS.FAMILY_PLUS;
  }
  return null;
}

export function cadenceForPriceId(priceId, env = process.env) {
  if (!priceId) return null;
  if (priceId === env.STRIPE_PRICE_FAMILY_SUMMER || priceId === env.STRIPE_PRICE_FAMILY_PLUS_SUMMER) {
    return CADENCES.SUMMER_PASS;
  }
  if (priceId === env.STRIPE_PRICE_FAMILY_MONTHLY || priceId === env.STRIPE_PRICE_FAMILY_PLUS_MONTHLY) {
    return CADENCES.MONTHLY;
  }
  if (priceId === env.STRIPE_PRICE_FAMILY_YEARLY || priceId === env.STRIPE_PRICE_FAMILY_PLUS_YEARLY) {
    return CADENCES.YEARLY;
  }
  return null;
}

export function priceIdForTier({ tier, cadence, env = process.env }) {
  const key = `${tier.toUpperCase()}_${cadence.toUpperCase()}`;
  const map = {
    FAMILY_SUMMER_PASS: env.STRIPE_PRICE_FAMILY_SUMMER,
    FAMILY_MONTHLY: env.STRIPE_PRICE_FAMILY_MONTHLY,
    FAMILY_YEARLY: env.STRIPE_PRICE_FAMILY_YEARLY,
    FAMILY_PLUS_SUMMER_PASS: env.STRIPE_PRICE_FAMILY_PLUS_SUMMER,
    FAMILY_PLUS_MONTHLY: env.STRIPE_PRICE_FAMILY_PLUS_MONTHLY,
    FAMILY_PLUS_YEARLY: env.STRIPE_PRICE_FAMILY_PLUS_YEARLY
  };
  return map[key] ?? null;
}

export function stripeCheckoutModeForCadence(cadence) {
  return cadence === CADENCES.SUMMER_PASS ? "payment" : "subscription";
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
    cadence: subscription?.cadence ?? null,
    isPaid: tier !== PLAN_TIERS.FREE,
    weeksUnlocked: entitlements.weeksUnlocked,
    maxChildren: entitlements.maxChildren,
    cancelAtPeriodEnd: subscription?.cancelAtPeriodEnd ?? false,
    currentPeriodEnd: subscription?.currentPeriodEnd ?? null,
    stripeCustomerId: subscription?.stripeCustomerId ?? null,
    isSummerPass: subscription?.cadence === CADENCES.SUMMER_PASS
  };
}

const ALL_TIERS = Object.values(PLAN_TIERS);
