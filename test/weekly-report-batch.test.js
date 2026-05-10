import assert from "node:assert/strict";
import test from "node:test";
import {
  AnthropicBatchError,
  createAnthropicBatchClient
} from "../src/integrations/anthropicBatch.js";
import {
  buildBatchRequest,
  decodeCustomId,
  encodeCustomId,
  parseBatchResultLine,
  summarizeBatch
} from "../src/agents/weeklyReportBatchAgent.js";
import { createWeeklyParentReportWithLlm } from "../src/agents/parentLiaisonAgent.js";
import { createProgramPlan } from "../src/agents/principalAgent.js";
import { saveWeeklyReportNarrative } from "../src/data/db.js";

function fakeFetch(handler) {
  const calls = [];
  return {
    calls,
    fetchImpl: async (url, init) => {
      calls.push({ url, init });
      return handler({ url, init, calls });
    }
  };
}

const SAMPLE_BASE_REPORT = {
  status: "ready",
  headline: "Test report",
  student: { firstName: "Avery", gradeLevel: 6 },
  week: { weekNumber: 1, theme: "Explorer Mode", project: "Map" },
  completion: { completedCount: 2, totalMissions: 5, completionPercent: 40 },
  weeklyEarnings: { xp: 40, masteryStars: 1, campCoins: 10 },
  subjectCoverage: [{ subject: "Math", completedLessons: 1 }],
  completedMissions: [{ dayLabel: "Monday", reflection: "I learned a ratio." }],
  rewards: { pendingCount: 0, approvedCount: 0, requests: [] },
  invitations: { pendingCount: 0, approvedCount: 0 }
};

test("encodeCustomId and decodeCustomId round-trip", () => {
  const id = encodeCustomId({ parentEmail: "Leo@Example.COM", weekNumber: 2 });
  assert.equal(id, "wkrpt:leo%40example.com:2");
  const decoded = decodeCustomId(id);
  assert.equal(decoded.parentEmail, "leo@example.com");
  assert.equal(decoded.weekNumber, 2);
});

test("decodeCustomId rejects malformed ids", () => {
  assert.equal(decodeCustomId("not-a-batch-id"), null);
  assert.equal(decodeCustomId(""), null);
  assert.equal(decodeCustomId(null), null);
});

test("buildBatchRequest produces a properly shaped Anthropic request", () => {
  const request = buildBatchRequest({
    parentEmail: "leo@example.com",
    weekNumber: 1,
    baseReport: SAMPLE_BASE_REPORT,
    student: { firstName: "Avery", gradeLevel: 6 }
  });
  assert.match(request.custom_id, /^wkrpt:/);
  assert.equal(request.params.model, "claude-sonnet-4-6");
  assert.equal(request.params.max_tokens, 800);
  assert.equal(typeof request.params.system, "string");
  assert.equal(request.params.messages.length, 1);
  assert.equal(request.params.messages[0].role, "user");
});

test("buildBatchRequest validates inputs", () => {
  assert.throws(() => buildBatchRequest({ baseReport: SAMPLE_BASE_REPORT, weekNumber: 1 }), /parentEmail required/);
  assert.throws(() => buildBatchRequest({ parentEmail: "x@y.z", weekNumber: 1 }), /baseReport required/);
  assert.throws(
    () => buildBatchRequest({ parentEmail: "x@y.z", baseReport: SAMPLE_BASE_REPORT, weekNumber: "bad" }),
    /valid weekNumber required/
  );
});

test("parseBatchResultLine extracts narrative on success", () => {
  const line = {
    custom_id: encodeCustomId({ parentEmail: "leo@example.com", weekNumber: 1 }),
    result: {
      type: "succeeded",
      message: {
        content: [
          {
            text:
              '{"narrative":"Avery is doing well.","coachingTips":["Praise effort"],"nextWeekPriorities":[{"subject":"Math","reason":"Keep going"}]}'
          }
        ]
      }
    }
  };
  const parsed = parseBatchResultLine(line);
  assert.equal(parsed.ok, true);
  assert.equal(parsed.parentEmail, "leo@example.com");
  assert.equal(parsed.weekNumber, 1);
  assert.equal(parsed.narrative, "Avery is doing well.");
});

test("parseBatchResultLine reports unparseable narratives", () => {
  const line = {
    custom_id: encodeCustomId({ parentEmail: "leo@example.com", weekNumber: 1 }),
    result: { type: "succeeded", message: { content: [{ text: "not json" }] } }
  };
  const parsed = parseBatchResultLine(line);
  assert.equal(parsed.ok, false);
  assert.equal(parsed.error, "unparseable_narrative");
});

test("parseBatchResultLine reports failures from Anthropic", () => {
  const line = {
    custom_id: encodeCustomId({ parentEmail: "leo@example.com", weekNumber: 1 }),
    result: { type: "errored", error: { message: "rate_limited" } }
  };
  const parsed = parseBatchResultLine(line);
  assert.equal(parsed.ok, false);
  assert.equal(parsed.error, "rate_limited");
});

test("parseBatchResultLine returns null when custom_id is missing", () => {
  assert.equal(parseBatchResultLine(null), null);
  assert.equal(parseBatchResultLine({}), null);
});

test("Anthropic batch client createBatch sets the beta header", async () => {
  const { fetchImpl, calls } = fakeFetch(async () => ({
    ok: true,
    status: 200,
    json: async () => ({ id: "msgbatch_1", processing_status: "in_progress" })
  }));
  const client = createAnthropicBatchClient({ apiKey: "sk_test", fetchImpl });
  const requests = [
    buildBatchRequest({
      parentEmail: "leo@example.com",
      weekNumber: 1,
      baseReport: SAMPLE_BASE_REPORT,
      student: { firstName: "Avery", gradeLevel: 6 }
    })
  ];
  await client.createBatch(requests);
  assert.equal(calls[0].init.method, "POST");
  assert.equal(calls[0].init.headers["anthropic-beta"], "message-batches-2024-09-24");
  assert.equal(calls[0].init.headers["x-api-key"], "sk_test");
});

test("Anthropic batch client surfaces typed errors", async () => {
  const { fetchImpl } = fakeFetch(async () => ({
    ok: false,
    status: 429,
    json: async () => ({ error: { type: "rate_limit_error", message: "Too many" } })
  }));
  const client = createAnthropicBatchClient({ apiKey: "sk_test", fetchImpl });
  await assert.rejects(
    () => client.createBatch([{ custom_id: "x", params: { model: "y", max_tokens: 1, messages: [] } }]),
    (err) => err instanceof AnthropicBatchError && err.code === "rate_limit_error" && err.status === 429
  );
});

test("retrieveResults rejects when batch is still processing", async () => {
  const { fetchImpl } = fakeFetch(async () => ({
    ok: true,
    status: 200,
    json: async () => ({ id: "msgbatch_2", processing_status: "in_progress" })
  }));
  const client = createAnthropicBatchClient({ apiKey: "sk_test", fetchImpl });
  await assert.rejects(
    () => client.retrieveResults("msgbatch_2"),
    (err) => err instanceof AnthropicBatchError && err.code === "not_ended"
  );
});

test("retrieveResults parses JSONL from the results url", async () => {
  const customId = encodeCustomId({ parentEmail: "leo@example.com", weekNumber: 1 });
  const jsonl = [
    JSON.stringify({
      custom_id: customId,
      result: {
        type: "succeeded",
        message: { content: [{ text: '{"narrative":"ok","coachingTips":["x"],"nextWeekPriorities":[{"subject":"Math","reason":"r"}]}' }] }
      }
    }),
    "",
    JSON.stringify({ custom_id: "bad", result: { type: "errored", error: { message: "boom" } } })
  ].join("\n");

  let call = 0;
  const { fetchImpl } = fakeFetch(async ({ url }) => {
    call += 1;
    if (call === 1) {
      return {
        ok: true,
        status: 200,
        json: async () => ({
          id: "msgbatch_3",
          processing_status: "ended",
          results_url: "https://example.com/results.jsonl"
        })
      };
    }
    return {
      ok: true,
      status: 200,
      text: async () => jsonl
    };
  });
  const client = createAnthropicBatchClient({ apiKey: "sk_test", fetchImpl });
  const lines = await client.retrieveResults("msgbatch_3");
  assert.equal(lines.length, 2);
});

test("summarizeBatch normalizes the request_counts shape", () => {
  const summary = summarizeBatch({
    id: "msgbatch_x",
    processing_status: "in_progress",
    request_counts: { succeeded: 2, errored: 1, expired: 0, canceled: 0, processing: 4 },
    created_at: "2026-05-10T00:00:00Z"
  });
  assert.equal(summary.succeeded, 2);
  assert.equal(summary.processing, 4);
  assert.equal(summary.status, "in_progress");
});

test("createWeeklyParentReportWithLlm prefers the cached narrative when available", async () => {
  const studentId = `cache-${Date.now()}`;
  const parentEmail = `parent-${Date.now()}@example.com`;
  const student = {
    id: studentId,
    firstName: "Avery",
    gradeLevel: 6,
    interests: ["coding"],
    selectedEnrichmentTracks: ["healthWellness"],
    activityPreferences: { outdoorAllowed: true }
  };
  const programPlan = createProgramPlan(student, {
    allowedRewards: ["device"],
    friendInvitesEnabled: false,
    teacherSharingEnabled: true
  });
  await saveWeeklyReportNarrative({
    parentEmail,
    weekNumber: 1,
    narrative: {
      narrative: "Cached narrative wins.",
      coachingTips: ["Tip 1", "Tip 2"],
      nextWeekPriorities: [{ subject: "Math", reason: "keep momentum" }],
      source: "batch",
      batchId: "msgbatch_cache_test"
    }
  });

  const exploding = { complete: async () => { throw new Error("LLM should not be called"); } };
  const report = await createWeeklyParentReportWithLlm({
    student,
    programPlan,
    progress: {
      completedMissionIds: ["week-1-day-1", "week-1-day-2"],
      xp: 40,
      masteryStars: 1,
      campCoins: 10,
      reflections: {}
    },
    weekNumber: 1,
    llm: exploding,
    parentEmail
  });
  assert.equal(report.narrative, "Cached narrative wins.");
  assert.equal(report.narrativeMeta.provider, "batch_cache");
  assert.equal(report.narrativeMeta.fallback, false);
  assert.equal(report.narrativeMeta.batchId, "msgbatch_cache_test");
});
