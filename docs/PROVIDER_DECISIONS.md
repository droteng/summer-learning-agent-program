# Production provider decisions

This is a recommendations doc, not a binding choice. Every decision below has
a primary pick and a reasonable challenger. The goal is to hit *good enough*
defaults that get to launch without rework, with clear escape hatches when the
business case for migration arrives.

## Hosting

**Recommendation: Vercel.**

| Option | Pros | Cons |
|---|---|---|
| **Vercel** | Native Next.js support, edge runtime, great CDN, Preview environments per PR, generous free tier. | Pricey at scale; cold starts on serverless functions. |
| Render | Persistent containers, cheaper at scale, supports background workers natively. | Less Next.js-specific tooling; manual configuration. |
| Cloudflare Workers + Pages | Cheapest at scale, near-zero cold start, edge KV. | Compatibility constraints (no `node:sqlite`, limited Node APIs). |

Vercel wins on time-to-launch and Preview deployments — critical when the
team is small and reviewers want to click before approving.

**Migration cost**: low. Next.js app can run on Render or Cloudflare with
environment variable changes only.

## Database

**Recommendation: Supabase Postgres.**

| Option | Pros | Cons |
|---|---|---|
| **Supabase Postgres** | Managed Postgres + Auth + Storage in one; generous free tier; row-level security; COPPA-friendly. | Vendor coupling if you also adopt Supabase Auth. |
| Neon | Serverless Postgres, scales to zero, very low cost at small scale. | Just the database — Auth + Storage need separate vendors. |
| Turso (libSQL) | Distributed SQLite, lowest read latency, cheapest at small scale. | Limited tooling, smaller ecosystem; SQL dialect is mostly compatible but not 100%. |
| node:sqlite (current) | Zero deps, perfect for local dev. | Ephemeral on serverless; not safe for multi-instance production. |

The data access layer in [`src/data/localDb.js`](../src/data/localDb.js) is the
only file that needs to change. Wrap it with a `db` interface (`load`, `save`,
`delete` per entity) and the agent code stays untouched.

**Migration cost**: medium — schema migration scripts + connection pooling +
new env vars. Plan a half-day for the swap.

## Auth

**Recommendation: Clerk.**

| Option | Pros | Cons |
|---|---|---|
| **Clerk** | Excellent parental verification UX out of the box (email + phone), MFA, magic links, well-documented Next.js integration, COPPA-aware patterns. | Paid per MAU above the free tier. |
| Supabase Auth | Bundles with the recommended database; cheap. | Less polished UX for parental verification flows; less COPPA tooling. |
| Auth.js (NextAuth) | Free, flexible, fully self-hosted. | Every flow must be built — including the verifiable parental consent flow that COPPA requires. |

A child product is downstream of *parental* identity, not child identity. Clerk
makes that distinction first-class and lets you defer the COPPA verifiable
parental consent flow as a follow-on integration without rebuilding auth.

**Migration cost**: high if you outgrow Clerk — both your DB schema and your
session handling have to move. Start with Clerk only if you expect <100k MAU
in year one; Auth.js if you expect more.

## Payments

**Recommendation: Stripe.**

| Option | Pros | Cons |
|---|---|---|
| **Stripe** | Industry standard, deep Next.js examples, family-plan / sibling-discount patterns are well-trodden, excellent webhooks. | Higher per-transaction fee than some alternatives. |
| Paddle | Merchant of record — they handle global tax compliance. | Less flexible for novel pricing schemes; smaller ecosystem. |
| Lemon Squeezy | MoR + great DX. | Newer; smaller scale of public case studies. |

For a US-focused parent product, Stripe is the path of least resistance. If
you go international fast, switch to Paddle for the MoR sales tax handling.

**Pricing structure (suggested)**:
- Free tier: diagnostic + Week 1 only.
- Family plan: $7.99/mo or $69/yr — covers up to 2 children.
- Sibling: +$3/mo per additional child.
- School site license: tier-based, manual sales for schools >50 children.

## Observability

**Recommendation: Sentry + PostHog.**

| Concern | Tool |
|---|---|
| Server-side error capture | **Sentry** |
| Product analytics, feature flags, A/B | **PostHog** |
| Uptime / health pings | Better Stack or UptimeRobot, pinging `/api/health` |
| LLM cost tracking | The structured `llm_call` events emitted by [`lib/observability.js`](../lib/observability.js) — pipe them into PostHog as a custom event source. |

Sentry and PostHog both have generous free tiers and are easy to swap later.
The shim in `lib/observability.js` already encapsulates them, so call sites in
agents and routes do not change when the SDKs are wired.

## CI / CD

**Recommendation: GitHub Actions for CI; Vercel auto-deploy for CD.**

The workflow is at [`.github/workflows/ci.yml`](../.github/workflows/ci.yml).
It runs typecheck, test, and build on every push and PR. Add a Vercel deploy
hook for the `main` branch — every green merge promotes automatically.

For high-stakes changes (schema migrations, auth flows), gate behind a Preview
environment review and run the post-deploy checklist in
[DEPLOYMENT.md](./DEPLOYMENT.md) by hand.

## Decisions not made yet

These deserve their own RFC before launch:

- Verifiable parental consent flow (COPPA): card-on-file, signed PDF, or KBA?
- Image moderation pipeline if uploads ever ship.
- Native desktop wrapper (Tauri vs Electron) for the "buy on Mac/Windows" SKU.
- ClawHub vs OpenClaw packaging differences.
- International data residency once non-US students start signing up.
