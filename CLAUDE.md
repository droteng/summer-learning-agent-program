# Dr. Spark Academy — Project Context for Claude

> **Naming history:** This product was internally called *Paperclip Academy* before the GENAK rollup. As of 2026-05-24 the official name everywhere — code, docs, public surfaces, the GENAK family — is **Dr. Spark Academy** (matching the live domain `drsparkacademy.com`). If you find any straggling "Paperclip" references in old commits, branches, or comments, replace them with "Dr. Spark Academy".

## What This Is

A parent-supervised, multi-agent summer learning program for U.S. students. The first launch target is Grade 6 — a core academic camp plus optional enrichment tracks chosen by parents. Operated by **GENAK Estates LLC** (Connecticut, USA) as a product in the GENAK family.

## Key URLs

| Surface | URL |
|---|---|
| **Public site / product** | https://drsparkacademy.com |
| **Parent company hub** | https://genak.ai (lists Dr. Spark Academy as a sibling product) |
| **Vercel project** | (see `.vercel/project.json` for project ID) |
| **GitHub repo** | (see `.git/config` for remote URL) |

## Contact

| Purpose | Email |
|---|---|
| General support | **support@drsparkacademy.com** |
| Hello / partnerships | hello@drsparkacademy.com |
| Privacy / GDPR | privacy@drsparkacademy.com |
| Legal / terms | legal@drsparkacademy.com |
| Transactional sender | noreply@drsparkacademy.com |

All 5 aliases routed via **Cloudflare Email Routing** → `droteng5@gmail.com` (set up 2026-05-24).

Cross-family GENAK aliases (also reach the same inbox if useful):
- hello@genak.ai, support@genak.ai, privacy@genak.ai, legal@genak.ai, press@genak.ai

## Hosting

| Surface | Host | Notes |
|---|---|---|
| Web app | **Vercel** | Git-push deploy. See `.vercel/project.json` and `docs/DEPLOYMENT.md`. |
| Domain | **Cloudflare DNS** (`drsparkacademy.com` zone) | CNAMEs apex + www point at Vercel edge. |
| Email | **Cloudflare Email Routing** | 5 aliases forwarding to `droteng5@gmail.com`. |

## Stack

- **Next.js** (App Router, Node ≥ 22)
- Multi-agent orchestration via OpenClaw / Anthropic API
- Provider decisions documented in `docs/PROVIDER_DECISIONS.md`

## Repo orientation

| Path | What's in it |
|---|---|
| `app/` | Next.js routes + UI |
| `lib/` | Shared logic (data, providers, agents) |
| `openclaw/` | OpenClaw agent configurations |
| `data/` | Curriculum / seed data |
| `docs/` | Deployment + provider docs |
| `README.md` | Product vision and orientation |
| `PRODUCT_SPEC.md` | Detailed product spec |
| `CURRICULUM_PLAN.md` | Grade 6 curriculum plan |
| `ROADMAP.md` | What's next |
| `TASKS.md` | Current task list |
| `DECISIONS.md` | Architectural decisions log |
| `COMPLIANCE_NOTES.md` | Privacy / COPPA / FERPA notes |
| `AGENT_HANDOFF.md` | Inter-agent message protocol |
| `GENAK-INTEGRATION.md` | Cross-product GENAK operational notes |

> Note: the repo folder is still `summer-learning-agent-program/` — that's the original code-level slug and changing it would create unnecessary churn in git remotes, Vercel project config, and any external links. Only the product name itself has been unified to "Dr. Spark Academy".

## Related repos (siblings under `/Users/asamoahoteng/Soft Projects/`)

| Path | Purpose |
|---|---|
| `genak-landing/` | GENAK company hub at `https://genak.ai` |
| `genak-ops/` | Central deployment registry + credentials for all GENAK domains |
| `diabetes-action-layer/` | Sister product — DAL — at diabeteslayer.com |
| `kdp-author-engine/` | Sister product — KDP Author Engine — at kdp.genak.ai |

The canonical state of every GENAK domain (DNS, hosting, deploy commands, credentials) lives in `/Users/asamoahoteng/Soft Projects/genak-ops/`. Read `genak-ops/CLAUDE.md` if you need to do any cross-domain operational work.

## When updating this product

1. Make changes in this repo
2. `git add -A && git commit -m "..." && git push origin main`
3. **Vercel auto-deploys** from `main`. Preview deploys per PR.
4. For manual / CI-driven deploys, the Vercel CLI workflow is in `docs/DEPLOYMENT.md`.
5. If you change the domain configuration, also update `genak-ops/registry.yaml`.

## Brand / visual

Dr. Spark Academy currently does **not** use the GENAK dark theme — it has its own brand identity from before the GENAK rollup. If the user asks you to align it with the GENAK family (slate-950 dark, cyan/amber accents, Fraunces serif), the design tokens are at `/Users/asamoahoteng/Soft Projects/genak-landing/src/styles/global.css` and `/Users/asamoahoteng/Soft Projects/genak-ops/brand/`.

Don't restyle without explicit instruction — the existing product brand may be a deliberate choice for the audience (kids and parents).

## Compliance posture

- COPPA-aware (US under-13 child users) — see `COMPLIANCE_NOTES.md`
- FERPA-aware if used in school settings
- Privacy policy + Terms should reference **GENAK Estates LLC** as operator (matching genak.ai and diabeteslayer.com legal pages)
