// Child message safety moderator.
//
// Two layers run in this order:
//   1. Deterministic regex pre-filter for the unambiguous cases — PII shapes
//      (phone, email), keyword PII ("address", "phone number"), and the
//      crisis trigger list. These can never be missed, so we never rely on
//      the LLM for them. The crisis tier ALWAYS routes to the crisis
//      response even if the LLM disagrees.
//   2. Hosted classifier (cheap-tier Haiku 4.5 with caching) for nuance —
//      bullying, meet-up intent, soft NSFW, language we want a human to
//      see before sharing. Falls back to "allowed with parent visibility"
//      when no LLM, malformed JSON, provider error, or budget exhaustion.
//
// Severity tiers (each maps to a fixed UI behavior):
//   - safe     : status=allowed, no parent alert
//   - warn     : status=allowed, parent-visible flag, no UI change
//   - softblock: status=blocked, suggested rewrite shown to child
//   - hardblock: status=blocked, child can't repost without parent edit
//   - crisis   : status=blocked + parent alert + crisis resources shown
//
// This module never persists. It returns decisions; the caller decides
// what to do with them.

import { TIERS } from "./llm/index.js";

export const SEVERITY = Object.freeze({
  SAFE: "safe",
  WARN: "warn",
  SOFTBLOCK: "softblock",
  HARDBLOCK: "hardblock",
  CRISIS: "crisis"
});

export const CATEGORIES = Object.freeze({
  PII_SHARE: "pii_share",
  MEETUP_REQUEST: "meetup_request",
  BULLYING: "bullying",
  NSFW: "nsfw",
  PROFANITY: "profanity",
  SELF_HARM: "self_harm",
  HARM_OTHERS: "harm_others"
});

const PII_PATTERNS = [
  /\b\d{3}[-.\s]?\d{3}[-.\s]?\d{4}\b/, // US phone
  /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i, // email
  /\b(?:my\s+(?:home\s+)?(?:address|phone\s+number|password)|where\s+i\s+live)\b/i,
  /\b\d{1,5}\s+\w+\s+(?:street|st|avenue|ave|road|rd|boulevard|blvd|drive|dr|lane|ln)\b/i // street address
];

// Crisis phrases. Conservative on purpose — false positives route to a
// supportive response, not a child shame.
const CRISIS_PATTERNS = [
  /\b(?:kill\s+myself|want\s+to\s+die|end\s+it\s+all|don'?t\s+want\s+to\s+(?:live|be\s+alive))\b/i,
  /\b(?:hurt(?:ing)?\s+myself|cut\s+myself|self[\s-]?harm)\b/i,
  /\b(?:suicide|suicidal)\b/i
];

const HARM_OTHERS_PATTERNS = [
  /\b(?:i'?ll?\s+kill|i'?ll?\s+hurt|going\s+to\s+hurt)\s+(?:him|her|them|you|\w+)\b/i,
  /\bbring\s+(?:a\s+)?(?:gun|knife|weapon)\s+to\s+school\b/i
];

const CRISIS_RESOURCES = Object.freeze({
  us: {
    name: "988 Suicide & Crisis Lifeline",
    phone: "988",
    sms: "Text HOME to 741741",
    url: "https://988lifeline.org/"
  },
  message:
    "If you or someone you care about is in crisis, please reach out — you matter, and help is available right now."
});

// Synchronous regex moderator. Kept for backward compatibility and as the
// inner pre-filter the async path also calls first.
export function moderateChildMessage(message) {
  const cleaned = String(message ?? "");

  // Crisis pre-filter ALWAYS wins — never overruled by anything later.
  if (CRISIS_PATTERNS.some((p) => p.test(cleaned))) {
    return {
      status: "blocked",
      severity: SEVERITY.CRISIS,
      categories: [CATEGORIES.SELF_HARM],
      reason:
        "We're worried about you. Talking to a trusted adult right now helps. We've shared a crisis line below.",
      parentVisible: true,
      parentAlertRequired: true,
      crisisResources: CRISIS_RESOURCES
    };
  }

  if (HARM_OTHERS_PATTERNS.some((p) => p.test(cleaned))) {
    return {
      status: "blocked",
      severity: SEVERITY.HARDBLOCK,
      categories: [CATEGORIES.HARM_OTHERS],
      reason: "This message describes hurting someone. We can't share it. A parent or trusted adult should see this.",
      parentVisible: true,
      parentAlertRequired: true
    };
  }

  if (PII_PATTERNS.some((p) => p.test(cleaned))) {
    return {
      status: "blocked",
      severity: SEVERITY.HARDBLOCK,
      categories: [CATEGORIES.PII_SHARE],
      reason: "Message may include personal information or unsafe sharing.",
      parentVisible: true,
      parentAlertRequired: false
    };
  }

  return {
    status: "allowed",
    severity: SEVERITY.SAFE,
    categories: [],
    reason: null,
    parentVisible: true,
    parentAlertRequired: false
  };
}

// Async moderator. Runs the regex pre-filter first (crisis can never be
// missed). If pre-filter allows the message, calls the LLM safety tier for
// nuance. Falls back to the pre-filter's allowed decision if the LLM path
// fails for any reason.
export async function moderateChildMessageWithLlm({ message, llm = null, context = "squad_update" } = {}) {
  const baseline = moderateChildMessage(message);
  if (baseline.status === "blocked") {
    return baseline; // crisis / PII / harm-others always win
  }
  if (!llm) return baseline;

  let llmRes;
  try {
    llmRes = await llm.complete({
      tier: TIERS.SAFETY,
      temperature: 0,
      system: SAFETY_SYSTEM_PROMPT,
      messages: [{ role: "user", content: buildSafetyPrompt({ message, context }) }]
    });
  } catch {
    return baseline;
  }

  const parsed = !llmRes.fallback ? parseSafetyJson(llmRes.text) : null;
  if (!parsed) return baseline;

  if (parsed.severity === SEVERITY.SAFE) return baseline;

  if (parsed.severity === SEVERITY.WARN) {
    return {
      status: "allowed",
      severity: SEVERITY.WARN,
      categories: parsed.categories,
      reason: parsed.reason,
      parentVisible: true,
      parentAlertRequired: false,
      suggestedRewrite: parsed.suggestedRewrite ?? null,
      classifier: classifierMeta(llmRes)
    };
  }

  // softblock or hardblock
  return {
    status: "blocked",
    severity: parsed.severity,
    categories: parsed.categories,
    reason: parsed.reason,
    parentVisible: true,
    parentAlertRequired: parsed.severity === SEVERITY.HARDBLOCK,
    suggestedRewrite: parsed.suggestedRewrite ?? null,
    classifier: classifierMeta(llmRes)
  };
}

const SAFETY_SYSTEM_PROMPT = [
  "You moderate messages a child age 10-13 wants to share in a parent-supervised learning program.",
  "Output JSON only with this exact shape:",
  '{"severity": "safe"|"warn"|"softblock"|"hardblock", "categories": string[], "reason": string, "suggestedRewrite": string|null}.',
  "Categories must be drawn from: pii_share, meetup_request, bullying, nsfw, profanity.",
  "safe: nothing concerning.",
  "warn: borderline but acceptable — example: light teasing of a friend that should still be parent-visible.",
  "softblock: discourage but the child can revise — example: gossip, mild meanness, sharing first name + school.",
  "hardblock: must not be shared — example: meet-up plans, bullying, NSFW, sharing addresses or last names.",
  "Never block age-appropriate enthusiasm, frustration, or honest feelings.",
  "reason must be short and kind, addressed to the child.",
  "suggestedRewrite is null unless severity is softblock; in that case rewrite the same idea safely.",
  "Output JSON only, no preamble."
].join(" ");

function buildSafetyPrompt({ message, context }) {
  return [
    `Context: ${context}`,
    "Message:",
    `"""${message.slice(0, 1200)}"""`,
    "Return JSON only."
  ].join("\n");
}

function parseSafetyJson(text) {
  if (typeof text !== "string") return null;
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) return null;
  let raw;
  try {
    raw = JSON.parse(match[0]);
  } catch {
    return null;
  }
  const severity = String(raw.severity ?? "").toLowerCase();
  if (![SEVERITY.SAFE, SEVERITY.WARN, SEVERITY.SOFTBLOCK, SEVERITY.HARDBLOCK].includes(severity)) {
    return null;
  }
  const categories = Array.isArray(raw.categories)
    ? raw.categories.filter((c) => Object.values(CATEGORIES).includes(c))
    : [];
  const reason = typeof raw.reason === "string" && raw.reason.length > 0 ? raw.reason : "";
  const suggestedRewrite =
    typeof raw.suggestedRewrite === "string" && raw.suggestedRewrite.length > 0
      ? raw.suggestedRewrite
      : null;
  return { severity, categories, reason, suggestedRewrite };
}

function classifierMeta(llmRes) {
  return {
    provider: llmRes.provider,
    model: llmRes.model,
    fallback: !!llmRes.fallback
  };
}
