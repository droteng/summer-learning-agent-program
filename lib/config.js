// Runtime config — single source of truth for env-driven settings.
//
// Why no zod / valibot: the schema is small (a dozen vars), every consumer is
// internal, and we already ship JS with JSDoc typing. Adding a validation lib
// would 4x the install size of this module for negligible payoff. Swap to zod
// later if the shape grows.

const TIERS = ["cheap", "tutor", "reasoning", "safety", "async"];
const PROVIDERS = ["anthropic", "openrouter", "mock"];

let cached = null;

export class ConfigError extends Error {
  constructor(message, errors = []) {
    super(message);
    this.name = "ConfigError";
    this.errors = errors;
  }
}

/**
 * @param {{ env?: NodeJS.ProcessEnv, force?: boolean }} [opts]
 */
export function getConfig(opts) {
  const env = opts?.env ?? process.env;
  const force = opts?.force === true;
  if (!force && cached) return cached;

  const errors = [];

  const nodeEnv = env.NODE_ENV ?? "development";
  if (!["development", "production", "test"].includes(nodeEnv)) {
    errors.push(`NODE_ENV must be development | production | test (got "${nodeEnv}")`);
  }

  const rawCap = env.LLM_MONTHLY_TOKEN_CAP ?? "250000";
  const monthlyTokenCap = Number.parseInt(rawCap, 10);
  if (!Number.isFinite(monthlyTokenCap) || monthlyTokenCap <= 0) {
    errors.push(`LLM_MONTHLY_TOKEN_CAP must be a positive integer (got "${rawCap}")`);
  }

  const tierOverride = trim(env.LLM_TIER_OVERRIDE);
  if (tierOverride && !TIERS.includes(tierOverride)) {
    errors.push(`LLM_TIER_OVERRIDE must be one of: ${TIERS.join(", ")}`);
  }

  const providerOverride = trim(env.LLM_PROVIDER_OVERRIDE);
  if (providerOverride && !PROVIDERS.includes(providerOverride)) {
    errors.push(`LLM_PROVIDER_OVERRIDE must be one of: ${PROVIDERS.join(", ")}`);
  }

  const appUrl = trim(env.APP_URL ?? env.LLM_APP_URL);
  if (appUrl && !isValidUrl(appUrl)) {
    errors.push(`APP_URL must be a valid URL (got "${appUrl}")`);
  }

  const postHogHost = env.POSTHOG_HOST ?? "https://us.i.posthog.com";
  if (postHogHost && !isValidUrl(postHogHost)) {
    errors.push(`POSTHOG_HOST must be a valid URL (got "${postHogHost}")`);
  }

  const databaseUrl = trim(env.DATABASE_URL);
  if (databaseUrl && !/^(postgres(ql)?|sqlite):\/\//i.test(databaseUrl)) {
    errors.push(`DATABASE_URL must start with postgres://, postgresql://, or sqlite:// (got "${databaseUrl}")`);
  }

  if (nodeEnv === "production") {
    // We don't require an LLM key — the mock provider is the legitimate free
    // tier — but observability is strongly recommended in production.
    if (!trim(env.SENTRY_DSN) && !trim(env.POSTHOG_KEY)) {
      // soft warning, not a hard error: emit on stderr so it shows up in logs.
      // eslint-disable-next-line no-console
      console.warn(
        "[config] production mode is missing both SENTRY_DSN and POSTHOG_KEY — errors and product analytics will not be captured."
      );
    }
  }

  if (errors.length > 0) {
    const summary = `Invalid runtime configuration:\n - ${errors.join("\n - ")}`;
    throw new ConfigError(summary, errors);
  }

  const config = Object.freeze({
    nodeEnv,
    appName: env.APP_NAME ?? "learning-squad.ai",
    appVersion: env.APP_VERSION ?? env.npm_package_version ?? "0.0.0",
    appUrl: appUrl ?? null,
    llm: Object.freeze({
      anthropicApiKey: trim(env.ANTHROPIC_API_KEY) ?? null,
      openrouterApiKey: trim(env.OPENROUTER_API_KEY) ?? null,
      monthlyTokenCap,
      tierOverride: tierOverride ?? null,
      providerOverride: providerOverride ?? null,
      appUrl: appUrl ?? null,
      appTitle: env.LLM_APP_TITLE ?? "learning-squad.ai",
      telemetrySilent: env.LLM_TELEMETRY_SILENT === "1"
    }),
    observability: Object.freeze({
      sentryDsn: trim(env.SENTRY_DSN) ?? null,
      postHogKey: trim(env.POSTHOG_KEY) ?? null,
      postHogHost,
      silent: env.OBSERVABILITY_SILENT === "1" || nodeEnv === "test"
    }),
    database: Object.freeze({
      url: databaseUrl ?? null,
      backend: !databaseUrl
        ? "sqlite"
        : /^postgres/i.test(databaseUrl)
          ? "postgres"
          : "sqlite"
    }),
    billing: Object.freeze({
      stripeSecretKey: trim(env.STRIPE_SECRET_KEY) ?? null,
      webhookSecret: trim(env.STRIPE_WEBHOOK_SECRET) ?? null,
      configured: !!trim(env.STRIPE_SECRET_KEY),
      prices: Object.freeze({
        familyMonthly: trim(env.STRIPE_PRICE_FAMILY_MONTHLY) ?? null,
        familyYearly: trim(env.STRIPE_PRICE_FAMILY_YEARLY) ?? null,
        familyPlusMonthly: trim(env.STRIPE_PRICE_FAMILY_PLUS_MONTHLY) ?? null,
        familyPlusYearly: trim(env.STRIPE_PRICE_FAMILY_PLUS_YEARLY) ?? null
      })
    })
  });

  cached = config;
  return config;
}

export function resetConfigCache() {
  cached = null;
}

export const CONFIG_CONSTANTS = Object.freeze({ TIERS, PROVIDERS });

function trim(value) {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

function isValidUrl(value) {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
}
