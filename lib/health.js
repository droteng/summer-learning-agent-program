// Pure health-check logic, separated from the Next route so it is unit-
// testable from node:test without spinning up the framework runtime.

import { ConfigError, getConfig } from "./config.js";

const startedAt = Date.now();

/**
 * @typedef {Object} Check
 * @property {"ok"|"fail"|"skipped"} status
 * @property {string} [reason]
 * @property {string[]} [providers]
 *
 * @typedef {Object} HealthReport
 * @property {"ok"|"degraded"|"fail"} status
 * @property {string} service
 * @property {string} version
 * @property {number} uptimeMs
 * @property {string} time
 * @property {Record<string, Check>} checks
 */

/**
 * @param {{
 *   env?: NodeJS.ProcessEnv,
 *   db?: { ping: () => boolean | Promise<boolean> },
 *   now?: () => Date
 * }} [deps]
 * @returns {Promise<HealthReport>}
 */
export async function runHealthChecks(deps = {}) {
  const env = deps.env ?? process.env;
  const now = deps.now ?? (() => new Date());

  /** @type {Record<string, Check>} */
  const checks = {};
  /** @type {"ok"|"degraded"|"fail"} */
  let status = "ok";

  let config = null;
  try {
    config = getConfig({ env, force: true });
    checks.config = { status: "ok" };
  } catch (err) {
    const reason =
      err instanceof ConfigError
        ? err.errors.join("; ") || err.message
        : err instanceof Error
          ? err.message
          : String(err);
    checks.config = { status: "fail", reason };
    status = "fail";
  }

  if (deps.db) {
    try {
      const ok = await deps.db.ping();
      checks.database = { status: ok ? "ok" : "fail" };
      if (!ok) status = "fail";
    } catch (err) {
      checks.database = {
        status: "fail",
        reason: err instanceof Error ? err.message : String(err)
      };
      status = "fail";
    }
  } else {
    checks.database = { status: "skipped" };
  }

  if (config) {
    const providers = ["mock"];
    if (config.llm.anthropicApiKey) providers.push("anthropic");
    if (config.llm.openrouterApiKey) providers.push("openrouter");
    checks.llm = { status: "ok", providers };
    if (config.nodeEnv === "production" && providers.length === 1) {
      // mock-only in production isn't a fail, but warn loudly via degraded.
      if (status === "ok") status = "degraded";
    }
  } else {
    checks.llm = { status: "skipped" };
  }

  return {
    status,
    service: config?.appName ?? "learning-squad.ai",
    version: config?.appVersion ?? "0.0.0",
    uptimeMs: Date.now() - startedAt,
    time: now().toISOString(),
    checks
  };
}

export function httpStatusForHealth(report) {
  if (report.status === "fail") return 503;
  return 200;
}
