import { TIERS } from "./llm/index.js";

export function createMasteryCheck({ subject, dayNumber }) {
  return {
    subject,
    type: dayNumber % 5 === 0 ? "weekly_reflection" : "quick_check",
    prompt:
      dayNumber % 5 === 0
        ? "What did you learn this week, and what do you still want help with?"
        : "Explain your answer in one or two sentences so your teacher agent can check your thinking.",
    signals: ["effort", "accuracy", "explanation", "confidence"]
  };
}

export function summarizeWeeklyProgress({ week, missions }) {
  const subjects = [...new Set(missions.flatMap((mission) => mission.lessons.map((lesson) => lesson.subject)))];

  return {
    weekNumber: week.weekNumber,
    theme: week.theme,
    missionCount: missions.length,
    subjects,
    parentSummary: `This week focuses on ${week.theme}. The student completes ${missions.length} missions and builds toward: ${week.project}`,
    reviewQuestions: [
      "Which mission showed the strongest effort?",
      "Which subject needs a reteach or easier example?",
      "Is the reward plan motivating without becoming distracting?"
    ]
  };
}

// Grade a single authored item. MCQ and numeric items are graded
// deterministically. Short-answer items are graded via the LLM rubric path
// when an llm provider is supplied; otherwise a length+evidence heuristic is
// used. The returned grade is the same shape regardless of path so callers
// don't branch on item type.
export async function gradeItem({ item, response = {}, llm = null, studentId = null }) {
  const attempts = Math.max(1, Number(response.attempts) || 1);
  const baseResult = { itemId: item.id, type: item.type, attempts, studentId };

  if (item.type === "multiple_choice") {
    return gradeMultipleChoice({ item, response, baseResult });
  }
  if (item.type === "numeric") {
    return gradeNumeric({ item, response, baseResult });
  }
  if (item.type === "short_answer") {
    return await gradeShortAnswer({ item, response, llm, baseResult });
  }

  return finalize({
    ...baseResult,
    correct: null,
    score: 0,
    rubricLevel: null,
    feedback: "This item type is not gradable yet.",
    misconceptionId: null,
    nextHintIndex: -1,
    model: null
  });
}

function gradeMultipleChoice({ item, response, baseResult }) {
  const correct = Number(response.choiceIndex) === Number(item.answerIndex);
  return finalize({
    ...baseResult,
    correct,
    score: correct ? 1 : 0,
    rubricLevel: null,
    feedback: correct
      ? truncate(`Correct! ${item.explanation ?? ""}`.trim(), 220)
      : `Not quite. ${chooseHint(item, baseResult.attempts)}`,
    misconceptionId: correct ? null : pickMisconception(item),
    nextHintIndex: nextHintIndex({ correct, item, attempts: baseResult.attempts }),
    model: null
  });
}

function gradeNumeric({ item, response, baseResult }) {
  const value = Number(response.value);
  const tolerance = Number(item.tolerance ?? 0);
  const target = Number(item.answer);
  const correct = Number.isFinite(value) && Number.isFinite(target) && Math.abs(value - target) <= tolerance;
  const unitSuffix = item.unit ? ` ${item.unit}` : "";
  return finalize({
    ...baseResult,
    correct,
    score: correct ? 1 : 0,
    rubricLevel: null,
    feedback: correct
      ? truncate(`Right — ${target}${unitSuffix}. ${item.explanation ?? ""}`.trim(), 220)
      : `Try again. ${chooseHint(item, baseResult.attempts)}`,
    misconceptionId: correct ? null : pickMisconception(item),
    nextHintIndex: nextHintIndex({ correct, item, attempts: baseResult.attempts }),
    model: null
  });
}

async function gradeShortAnswer({ item, response, llm, baseResult }) {
  const text = String(response.text ?? "").trim();
  const heuristic = heuristicShortAnswer({ item, text });

  if (!llm) {
    return finalize({
      ...baseResult,
      correct: heuristic.level === 3,
      score: levelToScore(heuristic.level),
      rubricLevel: heuristic.level,
      feedback: heuristic.feedback,
      misconceptionId: null,
      nextHintIndex: heuristic.level >= 2 ? -1 : Math.min(baseResult.attempts, (item.hintLadder?.length ?? 0) - 1),
      model: null
    });
  }

  let llmRes;
  try {
    llmRes = await llm.complete({
      tier: TIERS.TUTOR,
      studentId: baseResult.studentId,
      subject: item.subject,
      hardSubject: false,
      temperature: 0.1,
      system: RUBRIC_SYSTEM_PROMPT,
      messages: [{ role: "user", content: buildRubricPrompt({ item, text }) }]
    });
  } catch {
    return finalize({
      ...baseResult,
      correct: heuristic.level === 3,
      score: levelToScore(heuristic.level),
      rubricLevel: heuristic.level,
      feedback: heuristic.feedback,
      misconceptionId: null,
      nextHintIndex: heuristic.level >= 2 ? -1 : Math.min(baseResult.attempts, (item.hintLadder?.length ?? 0) - 1),
      model: null
    });
  }

  const parsed = !llmRes.fallback ? parseRubricJson(llmRes.text) : null;
  if (!parsed) {
    return finalize({
      ...baseResult,
      correct: heuristic.level === 3,
      score: levelToScore(heuristic.level),
      rubricLevel: heuristic.level,
      feedback: heuristic.feedback,
      misconceptionId: null,
      nextHintIndex: heuristic.level >= 2 ? -1 : Math.min(baseResult.attempts, (item.hintLadder?.length ?? 0) - 1),
      model: { provider: llmRes.provider, model: llmRes.model, fallback: true }
    });
  }

  return finalize({
    ...baseResult,
    correct: parsed.level === 3,
    score: levelToScore(parsed.level),
    rubricLevel: parsed.level,
    feedback: parsed.feedback,
    misconceptionId: parsed.misconceptionId,
    nextHintIndex: parsed.level >= 2 ? -1 : Math.min(baseResult.attempts, (item.hintLadder?.length ?? 0) - 1),
    model: { provider: llmRes.provider, model: llmRes.model, fallback: false }
  });
}

function finalize(result) {
  return result;
}

function nextHintIndex({ correct, item, attempts }) {
  if (correct) return -1;
  const ladderLength = item.hintLadder?.length ?? 0;
  if (ladderLength === 0) return -1;
  return Math.min(attempts - 1, ladderLength - 1);
}

function chooseHint(item, attempts) {
  const ladder = item.hintLadder ?? [];
  if (ladder.length === 0) return "Try again with a smaller example.";
  return ladder[Math.min(attempts - 1, ladder.length - 1)];
}

function pickMisconception(item) {
  const candidates = item.misconceptionsTargeted ?? [];
  return candidates[0] ?? null;
}

function levelToScore(level) {
  if (level === 3) return 1;
  if (level === 2) return 0.6;
  if (level === 1) return 0.2;
  return 0;
}

const EVIDENCE_WORDS = [
  "because",
  "therefore",
  "for example",
  "divide",
  "multiply",
  "equivalent",
  "ratio",
  "factor",
  "compare",
  "evidence",
  "first",
  "then",
  "fact"
];

function heuristicShortAnswer({ item, text }) {
  if (!text) {
    return {
      level: 1,
      feedback: `Try writing 1–2 sentences. ${chooseHint(item, 1)}`
    };
  }

  const wordCount = text.split(/\s+/).filter(Boolean).length;
  const lower = text.toLowerCase();
  const hasEvidence = EVIDENCE_WORDS.some((word) => lower.includes(word));

  if (wordCount >= 18 && hasEvidence) {
    return {
      level: 3,
      feedback: "Strong explanation — you named the reasoning clearly."
    };
  }

  if (wordCount >= 8) {
    return {
      level: 2,
      feedback: "Good start. Add one specific example or the reason it works to reach the top of the rubric."
    };
  }

  return {
    level: 1,
    feedback: `Add more detail. ${chooseHint(item, 1)}`
  };
}

const RUBRIC_SYSTEM_PROMPT = [
  "You grade a Grade 6 student short-answer response against a 3-level rubric.",
  "Output JSON only with this exact shape: {\"level\": 1|2|3, \"feedback\": string, \"misconceptionId\": string|null}.",
  "feedback must be 1–2 short sentences, kid-friendly, and never shame the student.",
  "misconceptionId must be one of the provided ids or null when none applies.",
  "Do not include any text outside the JSON object."
].join(" ");

function buildRubricPrompt({ item, text }) {
  const misconceptionIds = (item.misconceptionsTargeted ?? []).join(", ") || "(none provided)";
  const rubric = item.rubric ?? {};
  return [
    `Stem: ${item.stem}`,
    `Rubric:`,
    `- level3: ${rubric.level3 ?? "demonstrates strong reasoning"}`,
    `- level2: ${rubric.level2 ?? "partially correct"}`,
    `- level1: ${rubric.level1 ?? "off-target or missing reasoning"}`,
    `Exemplar (level 3): ${item.exemplar ?? "(none)"}`,
    `Allowed misconceptionIds: ${misconceptionIds}`,
    `Student response: """${text}"""`,
    "Return JSON only."
  ].join("\n");
}

function parseRubricJson(text) {
  if (typeof text !== "string") return null;
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) return null;
  let raw;
  try {
    raw = JSON.parse(match[0]);
  } catch {
    return null;
  }
  const level = Number(raw.level);
  if (![1, 2, 3].includes(level)) return null;
  const feedback = typeof raw.feedback === "string" && raw.feedback.length > 0 ? raw.feedback : null;
  if (!feedback) return null;
  const misconceptionId =
    raw.misconceptionId === null || raw.misconceptionId === undefined
      ? null
      : String(raw.misconceptionId);
  return { level, feedback, misconceptionId };
}

function truncate(text, maxLength) {
  if (!text) return text;
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 1).trimEnd() + "…";
}
