# Architecture

## Current Build Target

Start with a local-first prototype that proves the agent workflow before committing to a full production stack.

The first prototype should answer:

- Can a Principal Agent coordinate a Grade 6 summer learning plan?
- Can the system combine core academics, optional enrichment, physical activity prompts, rewards, and parent reports?
- Can the product remain parent-controlled while still feeling fun for the child?

## Layers

### 1. Experience Layer

Future surfaces:

- Parent dashboard.
- Child daily mission dashboard.
- Teacher/school share portal.
- OpenClaw/ClawHub package.
- Tablet-friendly responsive web app.

### 2. Agent Orchestration Layer

The Principal Agent coordinates specialized agents:

- Curriculum Architect.
- Subject Teachers.
- Activity Coach.
- Rewards Agent.
- Parent Liaison.
- Social Coordinator.
- Safety Moderator.
- Teacher Liaison.

### 3. Curriculum Layer

Curriculum is structured as:

- Grade.
- Program length.
- Weekly themes.
- Core subjects.
- Optional enrichment tracks.
- Daily mission templates.
- Assessment checks.
- Project options.

### 4. Family Policy Layer

Parents control:

- Optional subjects.
- Faith settings.
- Reward types.
- Friend invitations.
- Progress visibility.
- Live session permissions.
- Teacher/school sharing.

### 5. Data Layer

Early local data can be plain JSON. Production should use a real database with strict child privacy controls.

## Recommended Technical Path

### Prototype

- Node.js.
- Plain JavaScript modules.
- JSON-like curriculum definitions.
- Local generated reports.

### MVP Web App

- TypeScript.
- React or Next.js.
- SQLite/Postgres depending on deployment.
- Server-side agent orchestration.
- Parent-controlled auth and permissions.

### Distribution

- Website subscription product.
- PWA for desktop, iPad, and Android tablets.
- OpenClaw/ClawHub package for agent-native users.

