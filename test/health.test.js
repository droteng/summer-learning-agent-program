import assert from "node:assert/strict";
import test from "node:test";
import { httpStatusForHealth, runHealthChecks } from "../lib/health.js";

test("reports ok when config loads, db pings, and at least one LLM provider is configured", async () => {
  const report = await runHealthChecks({
    env: { ANTHROPIC_API_KEY: "sk-test" },
    db: { ping: () => true }
  });
  assert.equal(report.status, "ok");
  assert.equal(report.checks.config.status, "ok");
  assert.equal(report.checks.database.status, "ok");
  assert.equal(report.checks.llm.status, "ok");
  assert.ok(report.checks.llm.providers.includes("anthropic"));
  assert.ok(report.checks.llm.providers.includes("mock"));
  assert.equal(httpStatusForHealth(report), 200);
});

test("reports fail when the database ping returns false", async () => {
  const report = await runHealthChecks({
    env: {},
    db: { ping: () => false }
  });
  assert.equal(report.status, "fail");
  assert.equal(report.checks.database.status, "fail");
  assert.equal(httpStatusForHealth(report), 503);
});

test("reports fail when database ping throws", async () => {
  const report = await runHealthChecks({
    env: {},
    db: {
      ping: () => {
        throw new Error("ECONNREFUSED");
      }
    }
  });
  assert.equal(report.status, "fail");
  assert.match(report.checks.database.reason, /ECONNREFUSED/);
});

test("reports fail and surfaces the reason when config is invalid", async () => {
  const report = await runHealthChecks({
    env: { LLM_MONTHLY_TOKEN_CAP: "0" },
    db: { ping: () => true }
  });
  assert.equal(report.status, "fail");
  assert.equal(report.checks.config.status, "fail");
  assert.match(report.checks.config.reason, /LLM_MONTHLY_TOKEN_CAP/);
});

test("reports degraded when production has no real LLM provider", async () => {
  const report = await runHealthChecks({
    env: { NODE_ENV: "production", APP_URL: "https://example.com", SENTRY_DSN: "x", POSTHOG_KEY: "y" },
    db: { ping: () => true }
  });
  assert.equal(report.status, "degraded");
  assert.deepEqual(report.checks.llm.providers, ["mock"]);
  assert.equal(httpStatusForHealth(report), 200);
});

test("skips database check when no db dep is supplied", async () => {
  const report = await runHealthChecks({ env: {} });
  assert.equal(report.checks.database.status, "skipped");
});
