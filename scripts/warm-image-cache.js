#!/usr/bin/env node
// Batch-warm the image cache.
//
// Walks every authored mission and asks the image agent for its
// MISSION_HERO illustration. Real provider results land in the
// generated_images table keyed by (intent, prompt, aspect ratio), so
// the next page render serves the warm image with no API call.
//
// Run with at least one image provider API key set. With no keys, the
// mock provider answers everything — its results are NOT cached
// (intentional), so this becomes a no-op dry run.
//
// Usage:
//   node scripts/warm-image-cache.js               # all missions
//   node scripts/warm-image-cache.js --grade 6     # filter by grade
//   node scripts/warm-image-cache.js --week 3      # filter by week
//   node scripts/warm-image-cache.js --limit 5     # cap total calls
//   node scripts/warm-image-cache.js --dry-run     # print what would run
//   node scripts/warm-image-cache.js --include-islands  # also warm week heroes

import { createImageAgent, INTENTS } from "../src/agents/imageAgent.js";
import { ALL_MISSIONS } from "../src/content/index.js";
import { grade6Weeks } from "../src/data/grade6Curriculum.js";
import { SUBJECT_THEMES } from "../src/data/subjectTheme.js";

const ARGS = parseArgs(process.argv.slice(2));

function parseArgs(argv) {
  const out = {
    grade: null,
    week: null,
    limit: null,
    dryRun: false,
    includeIslands: false,
    includeSubjects: false
  };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--grade") out.grade = Number(argv[++i]);
    else if (a === "--week") out.week = Number(argv[++i]);
    else if (a === "--limit") out.limit = Number(argv[++i]);
    else if (a === "--dry-run") out.dryRun = true;
    else if (a === "--include-islands") out.includeIslands = true;
    else if (a === "--include-subjects") out.includeSubjects = true;
    else if (a === "--all") {
      out.includeIslands = true;
      out.includeSubjects = true;
    } else if (a === "--help" || a === "-h") {
      console.log(
        "Usage: node scripts/warm-image-cache.js [--grade N] [--week N] [--limit N] [--dry-run] [--include-islands] [--include-subjects] [--all]"
      );
      process.exit(0);
    }
  }
  return out;
}

function filtered(missions) {
  return missions.filter((m) => {
    if (ARGS.grade != null && m.gradeLevel !== ARGS.grade) return false;
    if (ARGS.week != null && m.weekNumber !== ARGS.week) return false;
    return true;
  });
}

function subjectHeroJobs() {
  return Object.entries(SUBJECT_THEMES).map(([subjectKey, t]) => ({
    kind: "subject-hero",
    intent: INTENTS.SUBJECT_HERO,
    subject: subjectKey,
    topic: t.label,
    scene: `Decorative banner illustrating the school subject "${t.label}". Iconic objects and symbols for the subject arranged in a friendly cartoon collage. Bright vibrant colors, no human faces, no text.`,
    aspectRatio: "3:1",
    label: `subject-hero:${t.label}`
  }));
}

function islandJobs() {
  return grade6Weeks
    .filter((w) => (ARGS.week == null ? true : w.weekNumber === ARGS.week))
    .map((w) => ({
      kind: "island",
      intent: INTENTS.DECORATION,
      topic: w.theme,
      scene: `Summer camp week themed "${w.theme}". Capstone project: ${w.project}. Bright outdoor adventure scene with kid-friendly tools and gear, no faces, no text.`,
      aspectRatio: "16:9",
      label: `island:G6W${w.weekNumber} ${w.theme}`
    }));
}

async function main() {
  const missions = filtered(ALL_MISSIONS);
  const missionJobs = missions.map((m) => ({
    kind: "mission",
    intent: INTENTS.MISSION_HERO,
    subject: m.subject,
    topic: m.topic,
    scene: m.hook,
    aspectRatio: "16:9",
    label: `mission:${m.id} ${m.subject} – ${m.topic}`
  }));

  const islands = ARGS.includeIslands ? islandJobs() : [];
  const subjects = ARGS.includeSubjects ? subjectHeroJobs() : [];
  const allJobs = [...missionJobs, ...islands, ...subjects];
  const jobs = ARGS.limit != null ? allJobs.slice(0, ARGS.limit) : allJobs;

  console.log(
    `Warming ${jobs.length} illustration${jobs.length === 1 ? "" : "s"} ` +
      `(missions=${missionJobs.length}, islands=${islands.length}, subjects=${subjects.length}${ARGS.limit != null ? `, capped at ${ARGS.limit}` : ""}).`
  );
  if (ARGS.dryRun) {
    for (const j of jobs) console.log(`  · ${j.label}`);
    return;
  }

  const agent = createImageAgent();
  const stats = { ok: 0, mock: 0, error: 0, costCents: 0 };

  for (const job of jobs) {
    try {
      const result = await agent.generate({
        intent: job.intent,
        subject: job.subject,
        topic: job.topic,
        scene: job.scene,
        aspectRatio: job.aspectRatio
      });
      if (result.fallback) {
        stats.mock += 1;
        console.log(`  mock  ${job.label}`);
      } else {
        stats.ok += 1;
        stats.costCents += result.estimatedCostCents ?? 0;
        console.log(`  ok    ${job.label}  (${result.provider}, ${result.latencyMs}ms)`);
      }
    } catch (err) {
      stats.error += 1;
      console.log(`  ERR   ${job.label}  ${err?.message ?? err}`);
    }
  }

  console.log(
    `\nDone. cached=${stats.ok} mock=${stats.mock} errors=${stats.error} ` +
      `spend≈$${(stats.costCents / 100).toFixed(2)}`
  );
  if (stats.mock > 0 && stats.ok === 0) {
    console.log(
      "Note: no real provider answered — set GOOGLE_API_KEY, OPENAI_API_KEY, REPLICATE_API_TOKEN, or IDEOGRAM_API_KEY to populate the cache."
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
