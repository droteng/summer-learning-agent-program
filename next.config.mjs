import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {};

// Sentry build-time integration: uploads source maps when SENTRY_AUTH_TOKEN
// is set in CI. When the auth token is missing (local dev, PR builds) the
// wrapper is a no-op. The runtime SDK is gated separately on SENTRY_DSN.
export default withSentryConfig(nextConfig, {
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  silent: !process.env.CI,
  widenClientFileUpload: true,
  tunnelRoute: "/monitoring"
});
