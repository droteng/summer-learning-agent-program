// Bridges the synchronous weekly-report path to the Anthropic Batch API.
//
// Workflow:
//   1. For each (parent, week) pair we want a narrative for, call
//      `buildBatchRequest(baseReport, student)` to produce a `{ custom_id,
//      params }` entry. The custom_id encodes parent_email + week_number
//      so we can match results back without an extra mapping table.
//   2. Submit the array via createAnthropicBatchClient.createBatch().
//   3. Later (poll loop or webhook), retrieveResults() returns JSONL lines.
//      Pass each through `parseBatchResultLine()` to get the parsed
//      narrative/tips/priorities ready to cache against the parent record.
//
// Cost model: Sonnet 4.6 at 50% off the regular rate. Tradeoff: latency
// jumps from seconds to minutes (sometimes longer). Use this for
// non-real-time work (overnight digests, weekend report generation), never
// for tutoring.

import {
  NARRATIVE_SYSTEM_PROMPT,
  buildNarrativePrompt,
  parseNarrativeJson
} from "./parentLiaisonAgent.js";

const DEFAULT_MODEL = "claude-sonnet-4-6";
const DEFAULT_MAX_TOKENS = 800;

/**
 * @param {{
 *   parentEmail: string,
 *   weekNumber: number|string,
 *   baseReport: object,
 *   student: { firstName?: string, gradeLevel?: number },
 *   model?: string,
 *   maxTokens?: number,
 *   temperature?: number
 * }} args
 */
export function buildBatchRequest(args) {
  const {
    parentEmail,
    weekNumber,
    baseReport,
    student,
    model = DEFAULT_MODEL,
    maxTokens = DEFAULT_MAX_TOKENS,
    temperature = 0.4
  } = args ?? {};

  if (typeof parentEmail !== "string" || parentEmail.length === 0) {
    throw new Error("parentEmail required");
  }
  if (!baseReport || typeof baseReport !== "object") {
    throw new Error("baseReport required");
  }
  const week = Number(weekNumber);
  if (!Number.isFinite(week) || week <= 0) {
    throw new Error("valid weekNumber required");
  }

  return {
    custom_id: encodeCustomId({ parentEmail, weekNumber: week }),
    params: {
      model,
      max_tokens: maxTokens,
      temperature,
      system: NARRATIVE_SYSTEM_PROMPT,
      messages: [
        { role: "user", content: buildNarrativePrompt({ baseReport, student }) }
      ]
    }
  };
}

/**
 * Parse a single JSONL line from a finished batch's results URL into the
 * shape the cache + UI expect. Returns null if the line was not a successful
 * narrative result.
 */
export function parseBatchResultLine(line) {
  if (!line || typeof line !== "object") return null;
  const customId = line.custom_id;
  const decoded = decodeCustomId(customId);
  if (!decoded) return null;

  if (line.result?.type !== "succeeded") {
    return {
      ...decoded,
      ok: false,
      error: line.result?.error?.message ?? line.result?.type ?? "unknown",
      narrative: null,
      coachingTips: null,
      nextWeekPriorities: null
    };
  }

  const text = line.result.message?.content?.[0]?.text;
  if (typeof text !== "string") return null;
  const parsed = parseNarrativeJson(text);
  if (!parsed) {
    return {
      ...decoded,
      ok: false,
      error: "unparseable_narrative",
      narrative: null,
      coachingTips: null,
      nextWeekPriorities: null
    };
  }
  return {
    ...decoded,
    ok: true,
    error: null,
    narrative: parsed.narrative,
    coachingTips: parsed.coachingTips,
    nextWeekPriorities: parsed.nextWeekPriorities
  };
}

export function encodeCustomId({ parentEmail, weekNumber }) {
  return `wkrpt:${encodeURIComponent(parentEmail.toLowerCase())}:${Number(weekNumber)}`;
}

export function decodeCustomId(customId) {
  if (typeof customId !== "string") return null;
  const m = customId.match(/^wkrpt:([^:]+):(\d+)$/);
  if (!m) return null;
  return {
    parentEmail: decodeURIComponent(m[1]).toLowerCase(),
    weekNumber: Number(m[2])
  };
}

/**
 * Aggregate batch counts into a one-line status the operator dashboard can
 * render. Pure function — no DB access.
 */
export function summarizeBatch(meta) {
  if (!meta) return null;
  const counts = meta.request_counts ?? {};
  return {
    id: meta.id,
    status: meta.processing_status,
    succeeded: counts.succeeded ?? 0,
    errored: counts.errored ?? 0,
    expired: counts.expired ?? 0,
    canceled: counts.canceled ?? 0,
    processing: counts.processing ?? 0,
    createdAt: meta.created_at ?? null,
    endedAt: meta.ended_at ?? null,
    resultsUrl: meta.results_url ?? null
  };
}
