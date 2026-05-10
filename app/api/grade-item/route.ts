import { NextResponse } from "next/server";
import { gradeItem } from "../../../src/agents/assessmentAgent.js";
import { createLlm } from "../../../src/agents/llm/index.js";
import { recordGradedItem } from "../../../src/agents/progressAgent.js";
import {
  loadProgressSnapshot,
  saveProgressSnapshot
} from "../../../src/data/localDb.js";
import {
  masteryToDiagnosticSummary,
  summarizeMasteryBySubject
} from "../../../src/agents/masteryAgent.js";

let cachedLlm: ReturnType<typeof createLlm> | null = null;

function getLlm() {
  if (!cachedLlm) {
    cachedLlm = createLlm();
  }
  return cachedLlm;
}

export async function POST(request: Request) {
  const payload = await request.json();
  const item = payload?.item;
  const response = payload?.response ?? {};
  const studentId = payload?.studentId ?? null;
  const useLlm = payload?.useLlm !== false;
  const persist = payload?.persist === true && typeof studentId === "string" && studentId.length > 0;

  if (!item || typeof item !== "object" || !item.type) {
    return NextResponse.json({ error: "missing_item" }, { status: 400 });
  }

  const llm = useLlm ? getLlm() : null;
  const grade = await gradeItem({ item, response, llm, studentId });

  let masterySummary: ReturnType<typeof summarizeMasteryBySubject> | null = null;
  let diagnosticSummaryFromMastery: ReturnType<typeof masteryToDiagnosticSummary> | null = null;
  let savedAt: string | null = null;
  if (persist) {
    const existing = loadProgressSnapshot(studentId) ?? null;
    const next = recordGradedItem({ progress: existing, item, gradeResult: grade });
    const saved = saveProgressSnapshot({ studentId, progress: next });
    savedAt = saved.updatedAt;
    masterySummary = summarizeMasteryBySubject(next.skillMastery ?? {});
    diagnosticSummaryFromMastery = masteryToDiagnosticSummary(next.skillMastery ?? {});
  }

  return NextResponse.json({
    grade,
    mastery: masterySummary,
    diagnosticSummaryFromMastery,
    savedAt
  });
}
