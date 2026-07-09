# Deployment

This is the operator-facing checklist for going from a working local build to
a hosted, paying-customer-ready deployment. It assumes you have a working
`npm run dev` (see [README](../README.md)) and have read
[PROVIDER_DECISIONS](./PROVIDER_DECISIONS.md).

## Prerequisites

- Node.js ≥ 22 locally and on the host runtime.
- A GitHub repository (already set up for this project).
- A hosting account (Vercel recommended — see PROVIDER_DECISIONS).
- An Anthropic API key (recommended) and/or OpenRouter API key. Without
  either, the app falls back to the deterministic mock provider; it works
  but gives lower-quality teaching.

## Pre-deploy checklist

Run all three locally before opening a PR or pushing to main:

```bash
npm ci
npm run typecheck
LLM_TELEMETRY_SILENT=1 npm test
npm run build
```

CI will run the same three on every push and pull request.

## Environment variables

Every variable lives in [`.env.example`](../.env.example). Copy it to
`.env.local` for development; configure the same set in your host's
environment for production.

| Variable | Required in production | Purpose |
|---|---|---|
| `NODE_ENV` | yes | `production` enables stricter config validation. |
| `APP_NAME` | no (defaults) | Service identity in `/api/health`. |
| `APP_VERSION` | no (defaults) | Surfaces in health checks for rollout verification. |
| `APP_URL` | yes | Public URL; used for OpenRouter attribution and report links. |
| `ANTHROPIC_API_KEY` | strongly recommended | Default LLM provider; best caching + Batch API. |
| `OPENROUTER_API_KEY` | optional | Lets the router reach floor-priced models. |
| `LLM_MONTHLY_TOKEN_CAP` | no (defaults to 250k) | Per-child circuit breaker. |
| `LLM_TIER_OVERRIDE` | no | Set to `cheap` to globally throttle if costs spike. |
| `LLM_PROVIDER_OVERRIDE` | no | Force a single provider for A/B tests. |
| `SENTRY_DSN` | recommended | Server-side error capture. |
| `POSTHOG_KEY` | recommended | Product analytics; required to see unit economics. |
| `POSTHOG_HOST` | no (defaults) | Self-hosted PostHog or EU host override. |

The config loader (`lib/config.js`) validates these on first call and throws
`ConfigError` listing every problem at once. `/api/health` exposes the same
validation as a health check.

## Hosting (Vercel)

1. Connect the GitHub repo to Vercel — the project auto-detects Next.js.
2. Set the environment variables above in the Vercel project settings. Use
   different values per environment (Preview vs Production).
3. The first deploy will run `npm run build` automatically. Verify it
   succeeds before promoting to production.
4. Add the production domain (`drsparkacademy.com`) and configure DNS.
5. Hit `https://your-domain/api/health` and confirm `status: "ok"`.

## Database

The MVP uses Node's built-in `node:sqlite` for local persistence. SQLite is
**not appropriate for serverless production deployments** — Vercel's serverless
functions have ephemeral file systems and SQLite writes will be lost between
requests.

Production options, in order of preference:

1. **Supabase Postgres** — managed, COPPA-friendly, generous free tier.
2. **Neon** — serverless Postgres, very low cost at small scale.
3. **Turso (libSQL)** — distributed SQLite, lowest latency for read-heavy.

The data access layer is isolated in [`src/data/localDb.js`](../src/data/localDb.js).
Replace the `node:sqlite` calls with a Postgres client (`pg` or `postgres`)
without touching the agent layer.

## Health monitoring

`GET /api/health` returns:

```json
{
  "status": "ok" | "degraded" | "fail",
  "service": "Dr. Spark Academy",
  "version": "0.1.0",
  "uptimeMs": 12345,
  "time": "2026-05-10T12:34:56.000Z",
  "checks": {
    "config": { "status": "ok" },
    "database": { "status": "ok" },
    "llm": { "status": "ok", "providers": ["mock", "anthropic"] }
  }
}
```

HTTP 200 for `ok` or `degraded`; HTTP 503 for `fail`. Wire your uptime
provider (Better Stack, UptimeRobot, Vercel built-in) to ping this endpoint
every 60 seconds.

## Cost monitoring

Every LLM turn emits a structured `llm_call` event to stdout with
`{ provider, model, inputTokens, outputTokens, cacheReadTokens, costCents,
fallback, fallbackReason, budgetRemaining }`. Pipe these to PostHog or your
log aggregator to see unit economics per child per week from day one.

If you spot a cost spike, set `LLM_TIER_OVERRIDE=cheap` in your host's
environment and redeploy — every call gets routed to Haiku 4.5 immediately.

## Rollback

Vercel keeps every previous deployment hot for instant rollback. From the
Vercel dashboard, find the last green deployment and click "Promote to
Production." This is faster than reverting the commit.

For data migrations, always:

1. Take a manual database snapshot before the deploy.
2. Make the code change backward-compatible with the old schema.
3. Run the schema change.
4. Deploy the new code.
5. Drop the old columns / tables in a follow-up deploy a week later.

## Post-deploy verification

After every production deploy:

- [ ] `/api/health` returns `status: "ok"`.
- [ ] `/product` loads (sales page).
- [ ] `/child/map` loads with no auth.
- [ ] `/api/program-plan` returns a valid 8-week plan for a Grade 6 profile.
- [ ] `/api/grade-item` correctly grades an MCQ with a known answer.
- [ ] One end-to-end smoke run from a real parent account in incognito.

## Known limitations

- The current MVP does not implement verifiable parental consent (a hard COPPA
  requirement). Do not enable child accounts in production until that is wired
  — see `COMPLIANCE_NOTES.md`.
- `node:sqlite` is the local persistence layer. Swap for Postgres before
  enabling multi-user production access.
- Friend invites and Learning Squads are parent-approved end-to-end but the
  safety moderator is regex-only. Consider adding a hosted moderation
  classifier before social features are exposed beyond a closed beta.
