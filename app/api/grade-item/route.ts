import { NextResponse } from "next/server";
import { gradeItem } from "../../../src/agents/assessmentAgent.js";
import { getAuthoredItemById } from "../../../src/content/index.js";
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
import { authorizeStudentAccess, isDemoStudentId, requireApiUser } from "../../lib/auth-server";

let cachedLlm: ReturnType<typeof createLlm> | null = null;

function getLlm() {
  if (!cachedLlm) {
    cachedLlm = createLlm();
  }
  return cachedLlm;
}

export async function POST(request: Request) {
  const payload = await request.json();
  // Grade against the canonical authored item whenever the id is in the
  // catalog. Clients receive answer-stripped items, and a tampered payload
  // must not be able to redefine what counts as correct.
  const canonical = typeof payload?.item?.id === "string" ? getAuthoredItemById(payload.item.id) : null;
  const item = canonical ?? payload?.item;
  const response = payload?.response ?? {};
  const studentId = payload?.studentId ?? null;
  const useLlm = payload?.useLlm !== false;
  const persist = payload?.persist === true && typeof studentId === "string" && studentId.length > 0;

  if (!item || typeof item !== "object" || !item.type) {
    return NextResponse.json({ error: "missing_item" }, { status: 400 });
  }

  // Grading against a real studentId (reads entitlement, may write
  // progress) requires the caller to own that student.
  if (typeof studentId === "string" && studentId.length > 0 && !isDemoStudentId(studentId)) {
    const access = await authorizeStudentAccess(studentId);
    if (!access.ok) {
      return NextResponse.json({ error: access.error }, { status: access.status });
    }
  }

  // LLM grading costs money — anonymous callers get deterministic grading.
  let effectiveLlm = useLlm && (await requireApiUser()).ok ? getLlm() : null;
  if (effectiveLlm && typeof studentId === "string" && studentId.length > 0) {
    const { resolveEntitlement } = await import("../../../src/agents/entitlementAgent.js");
    const entitlement = await resolveEntitlement({ studentId });
    if (!entitlement.llmTutoring) {
      effectiveLlm = null;
    }
  }
  const grade = await gradeItem({ item, response, llm: effectiveLlm, studentId });

  let masterySummary: ReturnType<typeof summarizeMasteryBySubject> | null = null;
  let diagnosticSummaryFromMastery: ReturnType<typeof masteryToDiagnosticSummary> | null = null;
  let savedAt: string | null = null;
  if (persist) {
    const existing = (await loadProgressSnapshot(studentId)) ?? null;
    const next = recordGradedItem({ progress: existing, item, gradeResult: grade });
    const saved = await saveProgressSnapshot({ studentId, progress: next });
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
