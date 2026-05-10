# Compliance Notes

This file is not legal advice. It tracks issues to discuss with counsel before launch.

## Child Privacy

The product is directed at children and families. It must be designed around parental consent, minimal data collection, transparency, deletion rights, and careful handling of child communications.

Key concern:

- COPPA applies to online services directed to children under 13 that collect personal information.

### Verifiable Parental Consent — current state

The branch `feat/coppa-consent` implements the audit-log, disclosure copy, and consent flow:

- `src/agents/consentAgent.js` captures consent records with method, scope, evidence, IP, user agent, disclosure version, and a 1-year expiry. Records are append-only; revocation creates a new state on the same record.
- `/parent/consent` shows the disclosure (`PARENT_DISCLOSURE`, version `v1`) and a form that records consent. The banner on `/parent` directs parents here when consent is missing.
- `consent_records` table now exists in both SQLite and Postgres backends.

### What is still required before live launch

- **Legal review of the disclosure copy.** The `PARENT_DISCLOSURE` strings in `consentAgent.js` were drafted by an engineer and have not been reviewed by counsel.
- **A verifiable method.** Today only `self_attest` is wired. `card_auth` requires `feat/stripe-subscriptions` to land; `signed_form` requires file upload + a mailer. Use the closed-beta self-attest path only with a known family group.
- **Deletion endpoint.** `/api/parent-action` can revoke consent. The data-deletion flow (`/api/account?delete=true`) is *not yet implemented*. Parents currently must email `privacy@learning-squad.ai` for deletion — that mailbox needs to exist and be monitored.
- **Mailing address.** `PARENT_DISCLOSURE.contactMailing` is a placeholder.
- **Production data residency.** Postgres on Supabase or Neon must be on the parent's home region. International expansion requires a separate review.

## School Sharing

Parent-controlled sharing is required for transcripts, reports, certificates, and portfolios.

Avoid sending student information to schools without parent approval.

## Health Content

Health & Wellness should teach general education about nutrition, exercise, sleep, hydration, and chronic disease prevention. It should not diagnose, treat, or shame children.

## Faith Content

Christian Leadership must be optional and parent-controlled.

Recommended settings:

- No faith content.
- Christian character only.
- Christian Bible-based leadership.

## Social Features

MVP should avoid private unsupervised child-to-child messaging.

Social features should include:

- Parent-approved invitations.
- Parent-visible groups.
- Moderation.
- Limited profile information.
- No public discovery of children.
- No public leaderboards by default.

