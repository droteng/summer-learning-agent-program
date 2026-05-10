import assert from "node:assert/strict";
import test from "node:test";
import { createLlm, TIERS } from "../src/agents/llm/index.js";
import { createMockProvider } from "../src/agents/llm/providers/mock.js";
import { createBudget } from "../src/agents/llm/budget.js";
import { createTelemetry, estimateCostCents } from "../src/agents/llm/telemetry.js";

function silentTelemetry() {
  const events = [];
  return {
    events,
    telemetry: createTelemetry({ sink: (event) => events.push(event) })
  };
}

test("default LLM with no API keys uses the mock provider", async () => {
  const { events, telemetry } = silentTelemetry();
  const llm = createLlm({ env: {}, telemetry });

  const res = await llm.complete({
    tier: TIERS.TUTOR,
    subject: "Math",
    task: "Solve a real-world ratio problem.",
    studentName: "Avery",
    studentId: "child-1",
    messages: [{ role: "user", content: "Solve a real-world ratio problem." }]
  });

  assert.equal(res.provider, "mock");
  assert.equal(res.fallback, true);
  assert.ok(res.text.includes("Mini-lesson"));
  assert.ok(res.text.includes("Avery"));
  assert.equal(events.length, 1);
  assert.equal(events[0].fallbackReason, "no_provider");
});

test("budget exhaustion forces fallback to mock and records the reason", async () => {
  const { events, telemetry } = silentTelemetry();
  const budget = createBudget({ monthlyTokenCap: 100 });
  budget.record("child-1", 99); // already nearly out

  const fakeProvider = {
    name: "anthropic",
    async complete() {
      throw new Error("should_not_be_called_when_budget_exhausted");
    }
  };

  const llm = createLlm({
    env: {},
    budget,
    telemetry,
    providers: { mock: createMockProvider(), anthropic: fakeProvider }
  });

  const res = await llm.complete({
    tier: TIERS.CHEAP,
    studentId: "child-1",
    subject: "Math",
    task: "Try a quick warm-up.",
    messages: [{ role: "user", content: "Try a quick warm-up." }]
  });

  assert.equal(res.provider, "mock");
  assert.equal(res.fallback, true);
  assert.equal(events[0].fallbackReason, "budget_exhausted");
});

test("provider error degrades gracefully to the mock provider", async () => {
  const { events, telemetry } = silentTelemetry();
  const errorProvider = {
    name: "anthropic",
    async complete() {
      throw new Error("anthropic_500: simulated outage");
    }
  };
  const llm = createLlm({
    env: {},
    telemetry,
    providers: { mock: createMockProvider(), anthropic: errorProvider }
  });

  const res = await llm.complete({
    tier: TIERS.CHEAP,
    subject: "Math",
    task: "Warm up with a ratio problem.",
    messages: [{ role: "user", content: "Warm up with a ratio problem." }]
  });

  assert.equal(res.provider, "mock");
  const errorEvent = events.find((e) => e.type === "llm_error");
  assert.ok(errorEvent, "expected an llm_error telemetry event");
  assert.match(errorEvent.error, /simulated outage/);
  const callEvent = events.find((e) => e.type === "llm_call");
  assert.equal(callEvent.fallbackReason, "provider_error");
});

test("LLM_TIER_OVERRIDE forces every call to the cheap tier", async () => {
  const { events, telemetry } = silentTelemetry();
  const calls = [];
  const recordingProvider = {
    name: "anthropic",
    async complete(req, hint) {
      calls.push(hint);
      return {
        text: "hi",
        usage: { inputTokens: 10, outputTokens: 5, cachedInputTokens: 0 },
        model: hint.model,
        provider: "anthropic",
        latencyMs: 1,
        fallback: false
      };
    }
  };

  const llm = createLlm({
    env: { LLM_TIER_OVERRIDE: TIERS.CHEAP, ANTHROPIC_API_KEY: "x" },
    telemetry,
    providers: { mock: createMockProvider(), anthropic: recordingProvider }
  });

  await llm.complete({
    tier: TIERS.REASONING,
    studentId: "child-9",
    messages: [{ role: "user", content: "What is 2+2?" }]
  });

  assert.equal(calls[0].model, "claude-haiku-4-5");
  assert.equal(events[0].tier, TIERS.CHEAP);
});

test("real provider call records usage to the budget and emits cost telemetry", async () => {
  const { events, telemetry } = silentTelemetry();
  const fakeProvider = {
    name: "anthropic",
    async complete(req, hint) {
      return {
        text: "great work",
        usage: { inputTokens: 800, outputTokens: 200, cachedInputTokens: 600 },
        model: hint.model,
        provider: "anthropic",
        latencyMs: 42,
        fallback: false
      };
    }
  };
  const budget = createBudget({ monthlyTokenCap: 10_000 });

  const llm = createLlm({
    env: { ANTHROPIC_API_KEY: "x" },
    budget,
    telemetry,
    providers: { mock: createMockProvider(), anthropic: fakeProvider }
  });

  const res = await llm.complete({
    tier: TIERS.TUTOR,
    studentId: "child-budgeted",
    messages: [{ role: "user", content: "explain ratios" }]
  });

  assert.equal(res.provider, "anthropic");
  assert.equal(res.fallback, false);
  assert.equal(budget.snapshot("child-budgeted").used, 1000);
  const callEvent = events.find((e) => e.type === "llm_call");
  assert.equal(callEvent.cacheReadTokens, 600);
  assert.ok(callEvent.costCents >= 0);
});

test("cost estimator applies the cache discount", () => {
  const noCache = estimateCostCents({
    provider: "anthropic",
    model: "claude-haiku-4-5",
    usage: { inputTokens: 1_000_000, outputTokens: 0, cachedInputTokens: 0 }
  });
  const allCached = estimateCostCents({
    provider: "anthropic",
    model: "claude-haiku-4-5",
    usage: { inputTokens: 1_000_000, outputTokens: 0, cachedInputTokens: 1_000_000 }
  });
  assert.ok(noCache > allCached, "fully cached input must cost less than uncached input");
});
