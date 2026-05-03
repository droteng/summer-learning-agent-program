# OpenClaw / ClawHub Package

This folder packages `learning-squad.ai` as a portable multi-agent summer learning program.

## Contents

- `package.json`: listing metadata, package identity, privacy flags, and distribution shape.
- `agents.json`: Principal, Teacher, Parent Liaison, Safety, Social, Reward, Diagnostic, and Teacher Liaison agents.
- `curriculum.grade6.json`: Grade 6 launch curriculum skeleton.
- `safety-policy.json`: parent approval, moderation, health, faith, and social safety defaults.
- `reward-menu.json`: default reward currencies and parent-approved reward options.
- `teacher-share-template.md`: report template for parent-approved school sharing.

## MVP Runtime

The current web MVP runs in Next.js with local SQLite. The agent and curriculum logic are plain JavaScript modules under `src/`, so OpenClaw wrappers can call the same orchestration layer without depending on the web UI.

## Listing Readiness

This is not yet a final ClawHub submission package because the exact ClawHub schema is still unknown. It is a stable package draft that captures the product metadata, privacy posture, agent map, and curriculum assets.
