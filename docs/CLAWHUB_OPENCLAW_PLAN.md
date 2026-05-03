# ClawHub / OpenClaw Plan

## Goal

Package Paperclip Academy so it can be sold both as:

- A consumer web app on the project website.
- An OpenClaw/ClawHub agent program for OpenClaw users.

## OpenClaw Product Shape

The OpenClaw package should behave like a school operating system:

- Principal Agent coordinates the program.
- Teacher Agents teach subjects.
- Parent Liaison Agent asks for approvals.
- Safety Moderator Agent watches social features.
- Teacher Liaison Agent produces school-shareable reports.

## Likely Package Contents

- Agent definitions: `openclaw/agents.json`.
- Curriculum templates: `openclaw/curriculum.grade6.json`.
- Package metadata: `openclaw/package.json`.
- Reward templates: `openclaw/reward-menu.json`.
- Report template: `openclaw/teacher-share-template.md`.
- Safety and moderation defaults: `openclaw/safety-policy.json`.
- Package readme: `openclaw/README.md`.

## ClawHub Listing Positioning

Working listing title:

- Grade 6 Summer Learning Agent Program

Short description:

- A parent-supervised multi-agent summer camp that teaches core academics, coding, health habits, optional enrichment tracks, and rewards children for consistent learning.

Target buyers:

- Parents.
- Homeschool families.
- Tutors.
- Summer learning programs.
- OpenClaw builders who want a ready agent-school template.

## MVP Listing Features

- Grade 6 8-week summer curriculum.
- Principal + Teacher agent workflow.
- Parent reward approval.
- Daily body check.
- Optional enrichment tracks.
- Friend invitation safety model.
- Teacher sharing report model.

## Website Product Shape

The website version should eventually offer:

- Parent signup.
- Child dashboard.
- Parent dashboard.
- Daily lessons and projects.
- Reward approval.
- Friend squads.
- Teacher sharing.
- Subscription billing.

Current website route:

- `/product` presents the sellable product summary, feature set, and OpenClaw/ClawHub package readiness.

## Technical Packaging Direction

Keep core logic portable:

- Put curriculum, policy, reward, and report generation in plain modules.
- Keep UI separate from orchestration logic.
- Avoid tying all behavior to one web framework too early.
- Add OpenClaw-specific wrappers after the local engine is stable.

## Open Questions

- Final product name.
- Final ClawHub package format and metadata requirements.
- Whether OpenClaw handles payments directly or only listing/discovery.
- Whether the first ClawHub version should include UI or be agent-workflow only.
- Which model providers should be supported by default.
