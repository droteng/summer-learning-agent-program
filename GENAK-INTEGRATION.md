# Dr. Spark Academy — GENAK integration notes

**Written:** 2026-05-24
**Audience:** Any future Claude / agent / human working on this repo who needs the cross-product GENAK operational context.

This file gives you the strategic context that lives outside this repo, so Dr. Spark Academy's product decisions stay aligned with the rest of the GENAK product family.

---

## What GENAK is

GENAK is the parent product family that includes:

- **Diabetes Action Layer (DAL)** — health / clinical decision support (`diabeteslayer.com`)
- **Dr. Spark Academy** — this product (`drsparkacademy.com`)
- **KDP Author Engine** — book publishing automation (`kdp.genak.ai`)
- More products in the pipeline under `*.genak.ai`

**Operating legal entity:** GENAK Estates LLC, a Connecticut LLC. All three products today are operated under this entity. When public-facing legal copy (Terms, Privacy, Disclaimer) names the operator, use "GENAK Estates LLC, Tolland, Connecticut, USA" — matching `genak.ai/privacy`, `diabeteslayer.com/privacy`, etc.

**The through-line across GENAK products:** *AI agents that handle expert workflows for people who aren't experts.* For Dr. Spark Academy that's curriculum design — agents handle the work an experienced teacher / curriculum designer would otherwise do, while parents stay in supervisory control.

## Domains

| Surface | URL | Status |
|---|---|---|
| Public site | `https://drsparkacademy.com` | ✅ Live (Vercel) |
| Parent GENAK hub (links here) | `https://genak.ai` | ✅ Live |
| DNS provider | Cloudflare | Apex + www CNAME → Vercel edge |
| Email | Cloudflare Email Routing | 5 aliases → `droteng5@gmail.com` |

## Email aliases (live since 2026-05-24)

```
[ON]  support@drsparkacademy.com   →  droteng5@gmail.com
[ON]  hello@drsparkacademy.com     →  droteng5@gmail.com
[ON]  privacy@drsparkacademy.com   →  droteng5@gmail.com
[ON]  noreply@drsparkacademy.com   →  droteng5@gmail.com
[ON]  legal@drsparkacademy.com     →  droteng5@gmail.com
```

Use these in:
- Application config (`SMTP_FROM=noreply@drsparkacademy.com`)
- Footer / contact page (`support@`, `privacy@`)
- Terms of service (`legal@`)
- Privacy policy (`privacy@`)

If you need to add more aliases later, run a quick API call from a session with the Cloudflare token loaded — see `/Users/asamoahoteng/Soft Projects/genak-ops/scripts/` for the pattern, or just say so and Claude can do it via the existing token.

## Brand alignment status

Dr. Spark Academy currently has its **own brand identity** from before the GENAK rollup — it doesn't share the dark slate + cyan theme used by `genak.ai`, `diabeteslayer.com` (web), and `kdp.genak.ai`.

This is intentionally left as-is for now because:
- The audience (kids + parents) may benefit from a warmer/brighter palette than the tech-aesthetic GENAK theme
- Restyling is a deliberate decision the user hasn't asked for

If/when the user does ask to align with GENAK, the relevant assets are:
- Design tokens: `/Users/asamoahoteng/Soft Projects/genak-landing/src/styles/global.css`
- Brand mark + favicons: `/Users/asamoahoteng/Soft Projects/genak-ops/brand/`
- Typography: Fraunces (serif headings) + Inter (body) + JetBrains Mono (accent)

## Compliance & legal posture

- **COPPA** — relevant since kids under 13 may use the product. See `COMPLIANCE_NOTES.md`.
- **FERPA** — relevant if any school-affiliated deployment exists or is planned.
- **Legal entity in copy** — all public legal copy should name **GENAK Estates LLC** as the operator, matching the rest of the family. If the existing Terms / Privacy pages here name only "Dr. Spark Academy" without the operating entity, update them for consistency with `genak.ai/terms` and `diabeteslayer.com/terms`.

## Operational registry

Everything about deploying, updating, or moving Dr. Spark Academy's domain (and the other GENAK sites) is tracked in:

```
/Users/asamoahoteng/Soft Projects/genak-ops/
├── registry.yaml                       ← canonical list of all GENAK domains
├── sites/drsparkacademy.com.md         ← deploy recipe + open items
├── brand/                              ← GENAK brand assets
└── .env                                ← credentials (gitignored)
```

Read those before doing any deployment / DNS / email work.

## Open items for whoever picks this up next

- [x] ~~Reconcile naming: "Paperclip Academy" (internal) vs "Dr. Spark Academy" (public).~~ — done 2026-05-24. Product name is now "Dr. Spark Academy" everywhere in code/docs/public surfaces. Repo folder kept as `summer-learning-agent-program/` to avoid churning git remotes and Vercel config.
- [x] ~~Confirm Terms / Privacy pages reference GENAK Estates LLC as operator~~ — done 2026-05-24. `/terms` updated from "GENAK Publishing" → "GENAK Estates LLC". `/privacy` page newly created (was a 404 before) at `app/privacy/page.tsx`, COPPA-aligned, 17 sections, full GENAK family pattern. Verify post-deploy via `curl -s https://drsparkacademy.com/privacy | grep -i "GENAK Estates"`.
- [ ] Update Vercel env vars (if used for outbound email) to use `SMTP_FROM=noreply@drsparkacademy.com` now that the alias is live.
- [ ] Cross-link Dr. Spark Academy ↔ other GENAK products in the footer (already done on genak.ai → links here).
- [ ] When restyling for GENAK consistency is on the table, pair it with a single content audit so the brand refresh ships in one go.
