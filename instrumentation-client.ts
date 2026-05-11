import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: process.env.NODE_ENV === "production" ? 0.1 : 0,
  replaysSessionSampleRate: 0,
  replaysOnErrorSampleRate: 0,
  environment: process.env.NODE_ENV,
  release: process.env.NEXT_PUBLIC_APP_VERSION,
  enabled: Boolean(process.env.NEXT_PUBLIC_SENTRY_DSN)
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
