import assert from "node:assert/strict";
import test from "node:test";
import {
  CATEGORIES,
  moderateChildMessage,
  moderateChildMessageWithLlm,
  SEVERITY
} from "../src/agents/safetyModeratorAgent.js";
import { createLlm } from "../src/agents/llm/index.js";
import { createTelemetry } from "../src/agents/llm/telemetry.js";

const silent = () => createTelemetry({ sink: () => {} });

test("safe message passes the regex pre-filter", () => {
  const result = moderateChildMessage("Today I learned about ratios and built a chart.");
  assert.equal(result.status, "allowed");
  assert.equal(result.severity, SEVERITY.SAFE);
  assert.deepEqual(result.categories, []);
});

test("crisis pattern always wins, even before LLM", async () => {
  const phrases = ["I want to die", "Sometimes I think about hurting myself", "im suicidal"];
  for (const phrase of phrases) {
    const sync = moderateChildMessage(phrase);
    assert.equal(sync.severity, SEVERITY.CRISIS, `expected CRISIS for "${phrase}"`);
    assert.equal(sync.parentAlertRequired, true);
    assert.ok(sync.crisisResources?.us?.phone);
  }
});

test("crisis pattern is not overridden by an LLM that says safe", async () => {
  const llm = createLlm({
    env: { ANTHROPIC_API_KEY: "x" },
    telemetry: silent(),
    providers: {
      mock: { name: "mock", async complete() { return mockOk(); } },
      anthropic: {
        name: "anthropic",
        async complete() {
          return {
            text: '{"severity":"safe","categories":[],"reason":"ok","suggestedRewrite":null}',
            usage: { inputTokens: 50, outputTokens: 20, cachedInputTokens: 0 },
            model: "claude-haiku-4-5",
            provider: "anthropic",
            latencyMs: 5,
            fallback: false
          };
        }
      }
    }
  });
  const result = await moderateChildMessageWithLlm({ message: "I want to die", llm });
  assert.equal(result.severity, SEVERITY.CRISIS);
});

test("PII shapes are blocked at the regex layer", () => {
  for (const phrase of [
    "Call me at 415-555-1234",
    "Email me at kid@example.com",
    "I live at 1234 Maple Street"
  ]) {
    const result = moderateChildMessage(phrase);
    assert.equal(result.status, "blocked");
    assert.equal(result.severity, SEVERITY.HARDBLOCK);
    assert.ok(result.categories.includes(CATEGORIES.PII_SHARE));
  }
});

test("harm-others patterns hardblock with parent alert", () => {
  const result = moderateChildMessage("I'll hurt him after school");
  assert.equal(result.status, "blocked");
  assert.equal(result.severity, SEVERITY.HARDBLOCK);
  assert.equal(result.parentAlertRequired, true);
  assert.ok(result.categories.includes(CATEGORIES.HARM_OTHERS));
});

test("LLM classifier upgrades a safe-looking message to softblock via JSON", async () => {
  const llm = createLlm({
    env: { ANTHROPIC_API_KEY: "x" },
    telemetry: silent(),
    providers: {
      mock: { name: "mock", async complete() { return mockOk(); } },
      anthropic: {
        name: "anthropic",
        async complete() {
          return {
            text:
              '{"severity":"softblock","categories":["bullying"],"reason":"This sounds mean. Try saying how you feel instead.","suggestedRewrite":"I felt left out at recess today."}',
            usage: { inputTokens: 80, outputTokens: 40, cachedInputTokens: 0 },
            model: "claude-haiku-4-5",
            provider: "anthropic",
            latencyMs: 6,
            fallback: false
          };
        }
      }
    }
  });
  const result = await moderateChildMessageWithLlm({
    message: "Jordan was being annoying again at recess",
    llm
  });
  assert.equal(result.status, "blocked");
  assert.equal(result.severity, SEVERITY.SOFTBLOCK);
  assert.ok(result.suggestedRewrite);
  assert.ok(result.categories.includes(CATEGORIES.BULLYING));
  assert.equal(result.classifier.fallback, false);
});

test("LLM safe verdict keeps the message allowed", async () => {
  const llm = createLlm({
    env: { ANTHROPIC_API_KEY: "x" },
    telemetry: silent(),
    providers: {
      mock: { name: "mock", async complete() { return mockOk(); } },
      anthropic: {
        name: "anthropic",
        async complete() {
          return {
            text: '{"severity":"safe","categories":[],"reason":"ok","suggestedRewrite":null}',
            usage: { inputTokens: 50, outputTokens: 10, cachedInputTokens: 0 },
            model: "claude-haiku-4-5",
            provider: "anthropic",
            latencyMs: 4,
            fallback: false
          };
        }
      }
    }
  });
  const result = await moderateChildMessageWithLlm({
    message: "Today I learned how loops work in code.",
    llm
  });
  assert.equal(result.status, "allowed");
});

test("LLM malformed JSON falls back to the regex baseline", async () => {
  const llm = createLlm({
    env: { ANTHROPIC_API_KEY: "x" },
    telemetry: silent(),
    providers: {
      mock: { name: "mock", async complete() { return mockOk(); } },
      anthropic: {
        name: "anthropic",
        async complete() {
          return {
            text: "This child seems fine.",
            usage: { inputTokens: 30, outputTokens: 8, cachedInputTokens: 0 },
            model: "claude-haiku-4-5",
            provider: "anthropic",
            latencyMs: 3,
            fallback: false
          };
        }
      }
    }
  });
  const result = await moderateChildMessageWithLlm({
    message: "Just sharing a chart I made",
    llm
  });
  assert.equal(result.status, "allowed");
  assert.equal(result.severity, SEVERITY.SAFE);
});

test("LLM provider error doesn't fail the moderation — baseline holds", async () => {
  const llm = createLlm({
    env: { ANTHROPIC_API_KEY: "x" },
    telemetry: silent(),
    providers: {
      mock: { name: "mock", async complete() { return mockOk(); } },
      anthropic: {
        name: "anthropic",
        async complete() {
          throw new Error("upstream timeout");
        }
      }
    }
  });
  const result = await moderateChildMessageWithLlm({ message: "harmless update", llm });
  assert.equal(result.status, "allowed");
});

test("no LLM supplied returns the regex baseline unchanged", async () => {
  const result = await moderateChildMessageWithLlm({ message: "harmless update" });
  assert.equal(result.status, "allowed");
  assert.equal(result.severity, SEVERITY.SAFE);
});

test("warn severity flags for parent review but stays allowed", async () => {
  const llm = createLlm({
    env: { ANTHROPIC_API_KEY: "x" },
    telemetry: silent(),
    providers: {
      mock: { name: "mock", async complete() { return mockOk(); } },
      anthropic: {
        name: "anthropic",
        async complete() {
          return {
            text:
              '{"severity":"warn","categories":[],"reason":"borderline, ok for parent review","suggestedRewrite":null}',
            usage: { inputTokens: 30, outputTokens: 20, cachedInputTokens: 0 },
            model: "claude-haiku-4-5",
            provider: "anthropic",
            latencyMs: 4,
            fallback: false
          };
        }
      }
    }
  });
  const result = await moderateChildMessageWithLlm({ message: "borderline note", llm });
  assert.equal(result.status, "allowed");
  assert.equal(result.severity, SEVERITY.WARN);
});

function mockOk() {
  return {
    text: "ignore",
    usage: { inputTokens: 0, outputTokens: 0, cachedInputTokens: 0 },
    model: "mock",
    provider: "mock",
    latencyMs: 0,
    fallback: true
  };
}
