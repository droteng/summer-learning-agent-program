import assert from "node:assert/strict";
import test from "node:test";
import { pickModel, isHardSubject, TIERS } from "../src/agents/llm/router.js";

test("cheap tier routes to Haiku with prompt caching enabled", () => {
  const hint = pickModel({ tier: TIERS.CHEAP });
  assert.equal(hint.provider, "anthropic");
  assert.equal(hint.model, "claude-haiku-4-5");
  assert.equal(hint.cache, true);
  assert.ok(hint.maxTokens <= 600);
});

test("tutor tier on a hard subject escalates to Sonnet", () => {
  const hint = pickModel({ tier: TIERS.TUTOR, hardSubject: true });
  assert.equal(hint.model, "claude-sonnet-4-6");
});

test("tutor tier on an easy subject stays on Haiku", () => {
  const hint = pickModel({ tier: TIERS.TUTOR, hardSubject: false });
  assert.equal(hint.model, "claude-haiku-4-5");
});

test("async tier marks the request as batch-eligible", () => {
  const hint = pickModel({ tier: TIERS.ASYNC });
  assert.equal(hint.batch, true);
  assert.equal(hint.model, "claude-sonnet-4-6");
});

test("provider override translates Anthropic model ids to OpenRouter format", () => {
  const hint = pickModel({ tier: TIERS.CHEAP, providerOverride: "openrouter" });
  assert.equal(hint.provider, "openrouter");
  assert.equal(hint.model, "anthropic/claude-haiku-4.5");
});

test("hard-subject lookup recognises fractions and code debugging", () => {
  assert.equal(isHardSubject("Math", "fractions"), true);
  assert.equal(isHardSubject("Coding/Computer Science/AI", "debugging"), true);
  assert.equal(isHardSubject("Math", "ratios"), false);
  assert.equal(isHardSubject(null, "fractions"), false);
});

test("unknown tier falls back to cheap defaults", () => {
  const hint = pickModel({ tier: "nonsense" });
  assert.equal(hint.model, "claude-haiku-4-5");
});
