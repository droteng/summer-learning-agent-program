// Observability shim. Today emits structured stdout/stderr lines; swap the
// `write` calls for Sentry.captureException / posthog.capture when those SDKs
// are wired. Keeping the seam here means the call sites in agents/routes do
// not change when we bring in a real provider.
//
// This module is intentionally dependency-free so it can be imported from
// edge / serverless runtimes without bundle size concerns.

import { getConfig } from "./config.js";

export const observability = {
  /**
   * @param {unknown} err
   * @param {Record<string, unknown>} [context]
   */
  captureError(err, context) {
    if (isSilent()) return;
    const detail =
      err instanceof Error
        ? { message: err.message, name: err.name, stack: err.stack }
        : { message: String(err) };
    writeStderr({ type: "error", ...detail, context: context ?? null });
  },

  /**
   * @param {string} event
   * @param {Record<string, unknown>} [props]
   */
  capture(event, props) {
    if (isSilent()) return;
    writeStdout({ type: "event", event, props: props ?? null });
  },

  /**
   * @param {string} distinctId
   * @param {Record<string, unknown>} [props]
   */
  identify(distinctId, props) {
    if (isSilent()) return;
    writeStdout({ type: "identify", distinctId, props: props ?? null });
  }
};

function isSilent() {
  try {
    return getConfig().observability.silent;
  } catch {
    // Fall back to env so a config-loading failure does not flood the test
    // suite with telemetry. Production will fail at /api/health long before
    // observability silence becomes a concern.
    return process.env.OBSERVABILITY_SILENT === "1" || process.env.NODE_ENV === "test";
  }
}

function writeStdout(record) {
  try {
    process.stdout.write(`${JSON.stringify({ ...record, ts: new Date().toISOString() })}\n`);
  } catch {
    // never let observability break a request
  }
}

function writeStderr(record) {
  try {
    process.stderr.write(`${JSON.stringify({ ...record, ts: new Date().toISOString() })}\n`);
  } catch {
    // ignore
  }
}
