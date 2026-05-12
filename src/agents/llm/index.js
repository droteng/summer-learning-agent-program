// LLM orchestration entry point.
//
// Responsibilities:
//   - Pick the cheapest model that fits the task (router).
//   - Enforce a per-child monthly token budget; fall back to the deterministic
//     mock provider when the cap is reached. Parents see "classic mode" rather
//     than a hard failure. This is the runaway-cost circuit breaker.
//   - Catch provider errors and degrade gracefully to the mock provider so a
//     vendor outage never blocks a child's lesson.
//   - Emit a structured llm_call event for every turn so unit economics are
//     visible from day one.

import { pickModel, TIERS } from "./router.js";
import { createBudget } from "./budget.js";
import { createTelemetry, estimateCostCents } from "./telemetry.js";
import { createMockProvider } from "./providers/mock.js";
import { createAnthropicProvider } from "./providers/anthropic.js";
import { createOpenrouterProvider } from "./providers/openrouter.js";

export { TIERS } from "./router.js";

export function createLlm({
  env = process.env,
  budget = createBudget({
    monthlyTokenCap: Number(env.LLM_MONTHLY_TOKEN_CAP ?? 250_000)
  }),
  telemetry = createTelemetry(),
  fetchImpl = globalThis.fetch,
  providers: providedProviders,
  now = () => Date.now()
} = {}) {
  const tierOverride = env.LLM_TIER_OVERRIDE; // e.g. "cheap" forces everyone down
  const providerOverride = env.LLM_PROVIDER_OVERRIDE; // e.g. "openrouter"

  const providers = providedProviders ?? buildProvidersFromEnv(env, fetchImpl);

  async function complete(req = {}) {
    const tier = tierOverride ?? req.tier ?? TIERS.CHEAP;
    const hint = pickModel({ tier, hardSubject: req.hardSubject, providerOverride });
    const studentId = req.studentId ?? null;

    const budgetReady = !studentId || budget.canSpend(studentId, hint.maxTokens ?? 600);
    const provider = providers[hint.provider] ?? null;
    const useMock = !budgetReady || !provider;

    const chosen = useMock ? providers.mock : provider;
    const reason = !budgetReady ? "budget_exhausted" : !provider ? "no_provider" : null;

    let response;
    let errorMessage = null;
    try {
      response = await chosen.complete(req, hint);
    } catch (err) {
      errorMessage = err?.message ?? String(err);
      telemetry.logError({
        provider: hint.provider,
        model: hint.model,
        tier,
        studentId,
        error: errorMessage
      });
      response = await providers.mock.complete(req, hint);
    }

    const totalTokens = (response.usage?.inputTokens ?? 0) + (response.usage?.outputTokens ?? 0);
    if (studentId && !response.fallback) {
      budget.record(studentId, totalTokens);
    }

    if (response.estimatedCostCents == null) {
      response.estimatedCostCents = estimateCostCents({
        provider: response.provider,
        model: response.model,
        usage: response.usage
      });
    }

    telemetry.log({
      tier,
      provider: response.provider,
      model: response.model,
      studentId,
      inputTokens: response.usage?.inputTokens ?? 0,
      outputTokens: response.usage?.outputTokens ?? 0,
      cacheReadTokens: response.usage?.cachedInputTokens ?? 0,
      latencyMs: response.latencyMs ?? 0,
      costCents: response.estimatedCostCents,
      fallback: response.fallback === true,
      fallbackReason: reason ?? (errorMessage ? "provider_error" : null),
      budgetRemaining: studentId ? budget.snapshot(studentId).remaining : null
    });

    return response;
  }

  return {
    complete,
    pickModel: (opts) => pickModel({ ...opts, providerOverride }),
    budget,
    providers
  };
}

function buildProvidersFromEnv(env, fetchImpl) {
  const providers = {
    mock: createMockProvider()
  };

  if (env.ANTHROPIC_API_KEY) {
    providers.anthropic = createAnthropicProvider({
      apiKey: env.ANTHROPIC_API_KEY,
      fetchImpl
    });
  }

  if (env.OPENROUTER_API_KEY) {
    providers.openrouter = createOpenrouterProvider({
      apiKey: env.OPENROUTER_API_KEY,
      fetchImpl,
      appUrl: env.LLM_APP_URL,
      appTitle: env.LLM_APP_TITLE ?? "Dr. Spark Academy"
    });
  }

  return providers;
}
