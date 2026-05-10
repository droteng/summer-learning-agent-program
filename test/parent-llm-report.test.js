import assert from "node:assert/strict";
import test from "node:test";
import { createWeeklyParentReportWithLlm } from "../src/agents/parentLiaisonAgent.js";
import { createProgramPlan } from "../src/agents/principalAgent.js";
import { createLlm } from "../src/agents/llm/index.js";
import { createTelemetry } from "../src/agents/llm/telemetry.js";

const STUDENT = {
  id: "report-student",
  firstName: "Avery",
  gradeLevel: 6,
  interests: ["coding"],
  selectedEnrichmentTracks: ["healthWellness"],
  activityPreferences: { outdoorAllowed: true }
};

const POLICY = {
  allowedRewards: ["device", "park"],
  friendInvitesEnabled: false,
  teacherSharingEnabled: true
};

const SAMPLE_PROGRESS = {
  completedMissionIds: ["week-1-day-1", "week-1-day-2"],
  xp: 40,
  masteryStars: 1,
  campCoins: 10,
  reflections: { "week-1-day-1": "I made a learning map and explained one ratio strategy." },
  rewardRequests: [
    { status: "pending_parent", requestedReward: "Park outing", earnedBy: { theme: "Explorer Mode", dayLabel: "Monday" } }
  ]
};

function silentTelemetry() {
  return createTelemetry({ sink: () => {} });
}

test("falls back to deterministic narrative when no LLM is supplied", async () => {
  const programPlan = createProgramPlan(STUDENT, POLICY);
  const report = await createWeeklyParentReportWithLlm({
    student: STUDENT,
    programPlan,
    progress: SAMPLE_PROGRESS,
    weekNumber: 1
  });
  assert.equal(report.status, "ready");
  assert.ok(report.narrative.length > 0);
  assert.ok(report.coachingTips.length >= 1);
  assert.ok(report.nextWeekPriorities.length >= 1);
  assert.equal(report.narrativeMeta.fallback, true);
  assert.equal(report.narrativeMeta.provider, null);
});

test("uses parsed JSON narrative when the LLM returns a well-formed payload", async () => {
  const programPlan = createProgramPlan(STUDENT, POLICY);
  const recordingProvider = {
    name: "anthropic",
    async complete(req, hint) {
      return {
        text:
          '{"narrative":"Avery had a strong start in Math and shows pattern thinking. One concern is that reflections are short — encourage one full sentence per day.","coachingTips":["Sit with Avery for the first ten minutes on Monday.","Ask which strategy felt easiest and why."],"nextWeekPriorities":[{"subject":"Math","reason":"Build on the ratio momentum with one stretch problem."},{"subject":"Coding/Computer Science/AI","reason":"Schedule a short tracing exercise mid-week."}]}',
        usage: { inputTokens: 320, outputTokens: 160, cachedInputTokens: 0 },
        model: hint.model,
        provider: "anthropic",
        latencyMs: 12,
        fallback: false
      };
    }
  };
  const llm = createLlm({
    env: { ANTHROPIC_API_KEY: "x" },
    telemetry: silentTelemetry(),
    providers: {
      mock: { name: "mock", async complete() { throw new Error("mock should not be called"); } },
      anthropic: recordingProvider
    }
  });

  const report = await createWeeklyParentReportWithLlm({
    student: STUDENT,
    programPlan,
    progress: SAMPLE_PROGRESS,
    weekNumber: 1,
    llm
  });
  assert.equal(report.narrative.startsWith("Avery had a strong start"), true);
  assert.equal(report.coachingTips.length, 2);
  assert.equal(report.nextWeekPriorities[0].subject, "Math");
  assert.equal(report.narrativeMeta.fallback, false);
  assert.equal(report.narrativeMeta.provider, "anthropic");
});

test("falls back to heuristic when JSON is malformed", async () => {
  const programPlan = createProgramPlan(STUDENT, POLICY);
  const llm = createLlm({
    env: { ANTHROPIC_API_KEY: "x" },
    telemetry: silentTelemetry(),
    providers: {
      mock: { name: "mock", async complete() { return mockResponse(); } },
      anthropic: { name: "anthropic", async complete() {
        return {
          text: "Avery did great this week!",
          usage: { inputTokens: 100, outputTokens: 30, cachedInputTokens: 0 },
          model: "claude-sonnet-4-6",
          provider: "anthropic",
          latencyMs: 8,
          fallback: false
        };
      } }
    }
  });

  const report = await createWeeklyParentReportWithLlm({
    student: STUDENT,
    programPlan,
    progress: SAMPLE_PROGRESS,
    weekNumber: 1,
    llm
  });
  assert.equal(report.narrativeMeta.fallback, true, "expected heuristic fallback when JSON is missing");
  assert.equal(report.narrativeMeta.provider, "anthropic");
  assert.ok(report.narrative.length > 0);
});

test("falls back when provider throws", async () => {
  const programPlan = createProgramPlan(STUDENT, POLICY);
  const llm = createLlm({
    env: { ANTHROPIC_API_KEY: "x" },
    telemetry: silentTelemetry(),
    providers: {
      mock: { name: "mock", async complete() { return mockResponse(); } },
      anthropic: { name: "anthropic", async complete() { throw new Error("upstream timeout"); } }
    }
  });

  const report = await createWeeklyParentReportWithLlm({
    student: STUDENT,
    programPlan,
    progress: SAMPLE_PROGRESS,
    weekNumber: 1,
    llm
  });
  assert.equal(report.narrativeMeta.fallback, true);
  assert.ok(report.narrative.length > 0);
});

test("rejects partial JSON missing required fields", async () => {
  const programPlan = createProgramPlan(STUDENT, POLICY);
  const llm = createLlm({
    env: { ANTHROPIC_API_KEY: "x" },
    telemetry: silentTelemetry(),
    providers: {
      mock: { name: "mock", async complete() { return mockResponse(); } },
      anthropic: { name: "anthropic", async complete() {
        return {
          text: '{"narrative":"ok","coachingTips":["one tip"]}',
          usage: { inputTokens: 80, outputTokens: 20, cachedInputTokens: 0 },
          model: "claude-sonnet-4-6",
          provider: "anthropic",
          latencyMs: 8,
          fallback: false
        };
      } }
    }
  });

  const report = await createWeeklyParentReportWithLlm({
    student: STUDENT,
    programPlan,
    progress: SAMPLE_PROGRESS,
    weekNumber: 1,
    llm
  });
  assert.equal(report.narrativeMeta.fallback, true, "missing nextWeekPriorities should force fallback");
});

test("preserves the existing report shape (tests, completion, teacher summary)", async () => {
  const programPlan = createProgramPlan(STUDENT, POLICY);
  const report = await createWeeklyParentReportWithLlm({
    student: STUDENT,
    programPlan,
    progress: SAMPLE_PROGRESS,
    weekNumber: 1
  });
  assert.equal(report.completion.completedCount, 2);
  assert.ok(report.teacherSummary.includes("Avery"));
  assert.ok(report.excludedPrivateData.includes("Private health check answers"));
});

function mockResponse() {
  return {
    text: "mock",
    usage: { inputTokens: 0, outputTokens: 0, cachedInputTokens: 0 },
    model: "mock",
    provider: "mock",
    latencyMs: 0,
    fallback: true
  };
}
