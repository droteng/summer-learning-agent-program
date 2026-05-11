// Next.js calls this once at server startup. Used to register Sentry's
// server-side error capture. The init is gated on SENTRY_DSN so dev and
// CI (with no DSN) skip the SDK entirely — the existing observability
// shim continues emitting structured stderr lines.

import * as Sentry from "@sentry/nextjs";

export async function register() {
  if (!process.env.SENTRY_DSN) return;
  if (process.env.NEXT_RUNTIME === "nodejs") {
    await import("./sentry.server.config");
  }
  if (process.env.NEXT_RUNTIME === "edge") {
    await import("./sentry.edge.config");
  }
}

export const onRequestError = Sentry.captureRequestError;
