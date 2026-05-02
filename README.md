# Paperclip Academy

Paperclip Academy is a parent-supervised, multi-agent summer learning program for U.S. students. The first launch target is Grade 6, with a core academic camp plus optional enrichment tracks chosen by parents.

The product vision is a coordinated agent school:

- A Principal Agent plans and coordinates the whole program.
- Teacher Agents deliver subject lessons and projects.
- Coach Agents keep the child motivated and age-appropriate.
- Parent and safety agents control rewards, sharing, permissions, and supervision.

## Initial Target

- Grade: U.S. Grade 6
- Format: Summer program
- Platforms: Desktop, iPad, Android tablet, and later ClawHub/OpenClaw distribution
- Sales channels: ClawHub and project website
- Primary buyer: Parents
- Secondary users: Children, tutors, homeschool families, and school teachers receiving shared reports

## Core Subjects

- Math
- English / Writing / ELA
- Computer Science / Coding / AI
- Science
- History / Civics
- World / Current Affairs

## Optional Enrichment Tracks

Parents choose 2 optional subjects for an additional 3-4 week block:

- Health & Wellness
- Christian Leadership
- Financial Literacy
- Media Literacy
- Creativity / Design
- Study Skills

Physical activity prompts are included in the daily planner for every student, even when Health & Wellness is not selected.

## Project Memory

- Product strategy: `PRODUCT_SPEC.md`
- Roadmap: `ROADMAP.md`
- Active task list: `TASKS.md`
- Key decisions: `DECISIONS.md`
- Agent handoff notes: `AGENT_HANDOFF.md`
- Curriculum plan: `CURRICULUM_PLAN.md`
- Safety and compliance notes: `COMPLIANCE_NOTES.md`

## Local App

Run the agent demo:

```bash
npm run demo
```

Run tests:

```bash
npm test
```

Run the MVP Next.js app:

```bash
npm run dev
```

Then open `http://localhost:3000`.

Run the original no-dependency prototype:

```bash
npm run prototype
```

Then open `http://localhost:4173`.

Printable report route:

```text
http://localhost:4173/report.html
```

## GitHub

GitHub remote is attached, but the first push needs local GitHub authentication. See `docs/GITHUB_SETUP.md`.

## Dependency Notes

`npm audit --audit-level=moderate` currently reports a PostCSS advisory through Next.js. npm suggests a forced downgrade to an old Next version, so do not apply `npm audit fix --force` blindly.
