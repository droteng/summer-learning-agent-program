// Operator-facing endpoint that submits and polls Anthropic Message Batches
// for weekly parent reports.
//
// POST: takes an array of { parentEmail, weekNumber, studentProfile,
//   parentPolicy, progress }, builds the per-parent base report, packages a
//   batch payload, submits to Anthropic, and persists the batch_id.
//
// GET ?batchId=...: polls the batch. If "ended", retrieves the JSONL,
//   parses each line, caches the narrative against the parent+week, and
//   marks the batch completed in the local store.
//
// This route is intentionally not auth-gated yet (closed beta). Add an
// admin guard before production.

import { NextResponse } from "next/server";
import { createProgramPlan } from "../../../../src/agents/principalAgent.js";
import { createWeeklyParentReport } from "../../../../src/agents/parentLiaisonAgent.js";
import {
  buildBatchRequest,
  parseBatchResultLine,
  summarizeBatch
} from "../../../../src/agents/weeklyReportBatchAgent.js";
import {
  AnthropicBatchError,
  createAnthropicBatchClient
} from "../../../../src/integrations/anthropicBatch.js";
import {
  loadReportBatch,
  saveReportBatch,
  saveWeeklyReportNarrative
} from "../../../../src/data/db.js";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let payload: any;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const submissions = Array.isArray(payload?.submissions) ? payload.submissions : null;
  if (!submissions || submissions.length === 0) {
    return NextResponse.json({ error: "submissions_required" }, { status: 400 });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "anthropic_not_configured" }, { status: 503 });
  }

  const requests = [];
  const skipped = [];
  for (const submission of submissions) {
    if (!submission?.parentEmail || !submission?.studentProfile || !submission?.weekNumber) {
      skipped.push({ submission, reason: "missing_fields" });
      continue;
    }
    const programPlan = createProgramPlan(submission.studentProfile, submission.parentPolicy ?? { allowedRewards: [], friendInvitesEnabled: false, teacherSharingEnabled: false });
    const baseReport = createWeeklyParentReport({
      student: submission.studentProfile,
      programPlan,
      progress: submission.progress,
      weekNumber: submission.weekNumber
    });
    if (baseReport.status !== "ready") {
      skipped.push({ submission, reason: baseReport.status });
      continue;
    }
    try {
      requests.push(
        buildBatchRequest({
          parentEmail: submission.parentEmail,
          weekNumber: submission.weekNumber,
          baseReport,
          student: submission.studentProfile
        })
      );
    } catch (err: any) {
      skipped.push({ submission, reason: err?.message ?? "build_failed" });
    }
  }

  if (requests.length === 0) {
    return NextResponse.json({ error: "no_valid_submissions", skipped }, { status: 400 });
  }

  try {
    const client = createAnthropicBatchClient({ apiKey });
    const batch = await client.createBatch(requests);
    const submittedAt = new Date().toISOString();
    await saveReportBatch({
      batchId: batch.id,
      status: batch.processing_status ?? "in_progress",
      submission: {
        customIds: requests.map((r) => r.custom_id),
        skipped
      },
      submittedAt
    });
    return NextResponse.json({
      ok: true,
      batch: summarizeBatch(batch),
      skipped,
      requested: requests.length
    });
  } catch (err) {
    if (err instanceof AnthropicBatchError) {
      return NextResponse.json({ error: err.code, message: err.message }, { status: err.status ?? 502 });
    }
    return NextResponse.json({ error: "batch_submit_failed" }, { status: 502 });
  }
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const batchId = url.searchParams.get("batchId");
  if (!batchId) {
    return NextResponse.json({ error: "batchId_required" }, { status: 400 });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "anthropic_not_configured" }, { status: 503 });
  }

  try {
    const client = createAnthropicBatchClient({ apiKey });
    const meta = await client.retrieveBatch(batchId);
    const summary = summarizeBatch(meta);
    const stored = await loadReportBatch(batchId);

    if (meta.processing_status !== "ended") {
      await saveReportBatch({
        batchId,
        status: meta.processing_status ?? "in_progress",
        submission: stored?.submission ?? null
      });
      return NextResponse.json({ ok: true, batch: summary, cached: 0, errored: 0 });
    }

    const lines = await client.retrieveResults(batchId);
    let cached = 0;
    let errored = 0;
    const records = [];
    for (const line of lines) {
      const parsed = parseBatchResultLine(line);
      if (!parsed) continue;
      if (parsed.ok) {
        await saveWeeklyReportNarrative({
          parentEmail: parsed.parentEmail,
          weekNumber: parsed.weekNumber,
          narrative: {
            narrative: parsed.narrative,
            coachingTips: parsed.coachingTips,
            nextWeekPriorities: parsed.nextWeekPriorities,
            source: "batch",
            batchId
          }
        });
        cached += 1;
        records.push({ parentEmail: parsed.parentEmail, weekNumber: parsed.weekNumber, ok: true });
      } else {
        errored += 1;
        records.push({
          parentEmail: parsed.parentEmail,
          weekNumber: parsed.weekNumber,
          ok: false,
          error: parsed.error
        });
      }
    }

    await saveReportBatch({
      batchId,
      status: "ended",
      submission: stored?.submission ?? null,
      lastResult: { cached, errored, records },
      completedAt: meta.ended_at ?? new Date().toISOString()
    });

    return NextResponse.json({ ok: true, batch: summary, cached, errored, records });
  } catch (err) {
    if (err instanceof AnthropicBatchError) {
      return NextResponse.json({ error: err.code, message: err.message }, { status: err.status ?? 502 });
    }
    return NextResponse.json({ error: "batch_poll_failed" }, { status: 502 });
  }
}
