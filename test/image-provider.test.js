import assert from "node:assert/strict";
import test from "node:test";
import { createImageAgent, INTENTS, buildPrompt, computeCacheKey } from "../src/agents/imageAgent.js";
import { createMockImageProvider } from "../src/integrations/imageProviders/mock.js";
import { ImageProviderError } from "../src/integrations/imageProviders/google.js";
import { createGoogleImageProvider } from "../src/integrations/imageProviders/google.js";
import { createOpenAIImageProvider } from "../src/integrations/imageProviders/openai.js";

function memoryCacheAndBudget() {
  const cache = new Map();
  let budget = 0;
  let calls = 0;
  return {
    cache: {
      load: async (key) => cache.get(key) ?? null,
      save: async (record) => {
        cache.set(record.cacheKey, record);
        return record;
      }
    },
    budget: {
      load: async () => budget,
      record: async (cents) => {
        budget += Number(cents) || 0;
        calls += 1;
      }
    },
    inspect: () => ({ size: cache.size, budget, calls })
  };
}

test("buildPrompt wraps caller intent in child-safe guardrails", () => {
  const prompt = buildPrompt({
    intent: INTENTS.MISSION_HERO,
    subject: "Math",
    topic: "Ratios",
    scene: "Cookie recipe doubled with rabbits dancing around"
  });
  assert.match(prompt, /Child-friendly/);
  assert.match(prompt, /No photorealism/);
  assert.match(prompt, /Subject: Math/);
  assert.match(prompt, /Topic: Ratios/);
  assert.match(prompt, /Cookie recipe doubled/);
});

test("computeCacheKey is deterministic for the same inputs", () => {
  const a = computeCacheKey({ prompt: "hello world", intent: "mission_hero", aspectRatio: "1:1" });
  const b = computeCacheKey({ prompt: "hello world", intent: "mission_hero", aspectRatio: "1:1" });
  const c = computeCacheKey({ prompt: "hello world!", intent: "mission_hero", aspectRatio: "1:1" });
  assert.equal(a, b);
  assert.notEqual(a, c);
});

test("agent falls back to mock when no real provider is configured", async () => {
  const helpers = memoryCacheAndBudget();
  const agent = createImageAgent({
    env: {},
    cache: helpers.cache,
    budget: helpers.budget
  });
  const result = await agent.generate({
    intent: INTENTS.MISSION_HERO,
    subject: "Math",
    topic: "Ratios",
    scene: "cookies"
  });
  assert.equal(result.provider, "mock");
  assert.equal(result.fallback, true);
  assert.equal(result.estimatedCostCents, 0);
  assert.match(result.url, /^data:image\/svg/);
});

test("mock results are NOT cached so they can upgrade later", async () => {
  const helpers = memoryCacheAndBudget();
  const agent = createImageAgent({
    env: {},
    cache: helpers.cache,
    budget: helpers.budget
  });
  await agent.generate({ intent: INTENTS.MISSION_HERO, subject: "Math", scene: "x" });
  await agent.generate({ intent: INTENTS.MISSION_HERO, subject: "Math", scene: "x" });
  assert.equal(helpers.inspect().size, 0, "mock fallback never caches");
});

test("agent uses preferred provider and caches the result", async () => {
  const helpers = memoryCacheAndBudget();
  let calls = 0;
  const recordingProvider = {
    name: "google",
    async generate(req) {
      calls += 1;
      return {
        url: "https://cdn/example.png",
        provider: "google",
        model: "gemini-2.5-flash-image",
        widthPx: 1024,
        heightPx: 1024,
        latencyMs: 5,
        estimatedCostCents: 3.9,
        fallback: false,
        prompt: req.prompt
      };
    }
  };
  const agent = createImageAgent({
    env: {},
    providers: { mock: createMockImageProvider(), google: recordingProvider },
    cache: helpers.cache,
    budget: helpers.budget
  });
  const r1 = await agent.generate({ intent: INTENTS.MISSION_HERO, subject: "Math", scene: "x" });
  const r2 = await agent.generate({ intent: INTENTS.MISSION_HERO, subject: "Math", scene: "x" });
  assert.equal(r1.provider, "google");
  assert.equal(r1.cached, false);
  assert.equal(r2.cached, true);
  assert.equal(calls, 1, "second call must hit cache, not the provider");
  assert.equal(helpers.inspect().budget, 3.9);
});

test("agent walks the chain when a provider errors", async () => {
  const helpers = memoryCacheAndBudget();
  const failingGoogle = {
    name: "google",
    async generate() {
      throw new ImageProviderError("google", "quota_exceeded", "Out of quota", 429);
    }
  };
  let openaiCalled = false;
  const fallbackOpenai = {
    name: "openai",
    async generate(req) {
      openaiCalled = true;
      return {
        url: "https://cdn/openai.png",
        provider: "openai",
        model: "gpt-image-1",
        latencyMs: 7,
        estimatedCostCents: 4.2,
        fallback: false,
        prompt: req.prompt
      };
    }
  };
  const agent = createImageAgent({
    env: {},
    providers: { mock: createMockImageProvider(), google: failingGoogle, openai: fallbackOpenai },
    cache: helpers.cache,
    budget: helpers.budget
  });
  const result = await agent.generate({ intent: INTENTS.MISSION_HERO, subject: "Math", scene: "x" });
  assert.equal(result.provider, "openai");
  assert.equal(openaiCalled, true);
});

test("budget exhaustion skips real providers and falls back to mock", async () => {
  const helpers = memoryCacheAndBudget();
  let calls = 0;
  const provider = {
    name: "google",
    async generate(req) {
      calls += 1;
      return {
        url: "https://cdn/img.png",
        provider: "google",
        model: "gemini-2.5-flash-image",
        latencyMs: 5,
        estimatedCostCents: 3.9,
        fallback: false,
        prompt: req.prompt
      };
    }
  };
  // Start with budget already at the cap.
  helpers.budget.load = async () => 10_000;
  const agent = createImageAgent({
    env: {},
    monthlyBudgetCents: 5000,
    providers: { mock: createMockImageProvider(), google: provider },
    cache: helpers.cache,
    budget: helpers.budget
  });
  const result = await agent.generate({ intent: INTENTS.MISSION_HERO, subject: "Math", scene: "x" });
  assert.equal(result.provider, "mock");
  assert.equal(result.fallback, true);
  assert.equal(calls, 0, "real provider must not be called when budget is exhausted");
});

test("agent walks chain via custom providerChain override", async () => {
  const helpers = memoryCacheAndBudget();
  const fluxCalled = { v: false };
  const agent = createImageAgent({
    env: {},
    providers: {
      mock: createMockImageProvider(),
      flux: {
        name: "flux",
        async generate(req) {
          fluxCalled.v = true;
          return {
            url: "https://cdn/flux.png",
            provider: "flux",
            model: "flux-schnell",
            latencyMs: 3,
            estimatedCostCents: 0.3,
            fallback: false,
            prompt: req.prompt
          };
        }
      }
    },
    cache: helpers.cache,
    budget: helpers.budget
  });
  const result = await agent.generate({
    intent: INTENTS.DECORATION,
    subject: "Math",
    scene: "x",
    providerChain: ["flux", "mock"]
  });
  assert.equal(result.provider, "flux");
  assert.equal(fluxCalled.v, true);
});

test("Google provider validates API key", () => {
  assert.throws(() => createGoogleImageProvider({ apiKey: "" }), ImageProviderError);
});

test("OpenAI provider validates API key", () => {
  assert.throws(() => createOpenAIImageProvider({ apiKey: "" }), ImageProviderError);
});

test("Google provider calls the gemini image endpoint with the prompt", async () => {
  const calls = [];
  const fetchImpl = async (url, init) => {
    calls.push({ url, init });
    return {
      ok: true,
      status: 200,
      async json() {
        return {
          candidates: [
            {
              content: {
                parts: [
                  { inlineData: { mimeType: "image/png", data: "ZmFrZS1ieXRlcw==" } }
                ]
              }
            }
          ]
        };
      }
    };
  };
  const provider = createGoogleImageProvider({ apiKey: "test-key", fetchImpl });
  const result = await provider.generate({ prompt: "test prompt", aspectRatio: "16:9" });
  assert.match(calls[0].url, /generativelanguage.googleapis.com/);
  assert.match(calls[0].url, /test-key/);
  assert.equal(result.provider, "google");
  assert.match(result.url, /^data:image\/png;base64,/);
});
