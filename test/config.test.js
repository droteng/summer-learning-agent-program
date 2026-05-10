import assert from "node:assert/strict";
import test from "node:test";
import { ConfigError, getConfig, resetConfigCache } from "../lib/config.js";

function configFromEnv(env) {
  resetConfigCache();
  return getConfig({ env, force: true });
}

test("loads with all defaults when env is empty", () => {
  const config = configFromEnv({});
  assert.equal(config.appName, "learning-squad.ai");
  assert.equal(config.llm.monthlyTokenCap, 250_000);
  assert.equal(config.llm.anthropicApiKey, null);
  assert.equal(config.llm.openrouterApiKey, null);
  assert.equal(config.llm.tierOverride, null);
  assert.equal(config.llm.providerOverride, null);
  assert.equal(config.observability.sentryDsn, null);
  assert.ok(Object.isFrozen(config));
  assert.ok(Object.isFrozen(config.llm));
});

test("rejects an invalid LLM_MONTHLY_TOKEN_CAP", () => {
  assert.throws(
    () => configFromEnv({ LLM_MONTHLY_TOKEN_CAP: "-5" }),
    (err) => err instanceof ConfigError && err.errors.some((e) => e.includes("LLM_MONTHLY_TOKEN_CAP"))
  );
  assert.throws(
    () => configFromEnv({ LLM_MONTHLY_TOKEN_CAP: "not-a-number" }),
    ConfigError
  );
});

test("rejects an unknown LLM_TIER_OVERRIDE", () => {
  assert.throws(
    () => configFromEnv({ LLM_TIER_OVERRIDE: "ridiculous" }),
    (err) => err instanceof ConfigError && err.errors.some((e) => e.includes("LLM_TIER_OVERRIDE"))
  );
});

test("rejects an unknown LLM_PROVIDER_OVERRIDE", () => {
  assert.throws(
    () => configFromEnv({ LLM_PROVIDER_OVERRIDE: "skynet" }),
    (err) => err instanceof ConfigError && err.errors.some((e) => e.includes("LLM_PROVIDER_OVERRIDE"))
  );
});

test("rejects a malformed APP_URL", () => {
  assert.throws(
    () => configFromEnv({ APP_URL: "not a url" }),
    (err) => err instanceof ConfigError && err.errors.some((e) => e.includes("APP_URL"))
  );
});

test("collects every error in a single throw", () => {
  try {
    configFromEnv({
      LLM_MONTHLY_TOKEN_CAP: "0",
      LLM_TIER_OVERRIDE: "wrong",
      LLM_PROVIDER_OVERRIDE: "wrong",
      APP_URL: "::::"
    });
    assert.fail("should have thrown");
  } catch (err) {
    assert.ok(err instanceof ConfigError);
    assert.equal(err.errors.length, 4);
  }
});

test("accepts a valid environment", () => {
  const config = configFromEnv({
    NODE_ENV: "production",
    APP_URL: "https://learning-squad.ai",
    ANTHROPIC_API_KEY: "sk-test",
    OPENROUTER_API_KEY: " or-test ",
    LLM_MONTHLY_TOKEN_CAP: "100000",
    LLM_TIER_OVERRIDE: "cheap",
    LLM_PROVIDER_OVERRIDE: "anthropic",
    SENTRY_DSN: "https://abc@sentry.io/1",
    POSTHOG_KEY: "ph-test"
  });
  assert.equal(config.nodeEnv, "production");
  assert.equal(config.llm.anthropicApiKey, "sk-test");
  assert.equal(config.llm.openrouterApiKey, "or-test");
  assert.equal(config.llm.monthlyTokenCap, 100_000);
  assert.equal(config.llm.tierOverride, "cheap");
  assert.equal(config.llm.providerOverride, "anthropic");
  assert.equal(config.observability.sentryDsn, "https://abc@sentry.io/1");
});

test("test environment forces observability silent", () => {
  const config = configFromEnv({ NODE_ENV: "test" });
  assert.equal(config.observability.silent, true);
});

test("OBSERVABILITY_SILENT=1 forces silence regardless of NODE_ENV", () => {
  const config = configFromEnv({ NODE_ENV: "production", OBSERVABILITY_SILENT: "1", SENTRY_DSN: "x", POSTHOG_KEY: "y" });
  assert.equal(config.observability.silent, true);
});
