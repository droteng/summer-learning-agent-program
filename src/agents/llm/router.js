export const TIERS = Object.freeze({
  CHEAP: "cheap",
  TUTOR: "tutor",
  REASONING: "reasoning",
  SAFETY: "safety",
  ASYNC: "async"
});

export const HARD_SUBJECTS = new Set([
  "Math:fractions",
  "Math:multi-step-word-problems",
  "Coding/Computer Science/AI:debugging",
  "ELA/Writing:revision",
  "Science:experimental-design"
]);

const DEFAULT_MODEL_BY_TIER = {
  [TIERS.CHEAP]: { provider: "anthropic", model: "claude-haiku-4-5", maxTokens: 400, cache: true },
  [TIERS.SAFETY]: { provider: "anthropic", model: "claude-haiku-4-5", maxTokens: 200, cache: true },
  [TIERS.TUTOR]: { provider: "anthropic", model: "claude-haiku-4-5", maxTokens: 600, cache: true },
  [TIERS.REASONING]: { provider: "anthropic", model: "claude-sonnet-4-6", maxTokens: 1200, cache: true },
  [TIERS.ASYNC]: { provider: "anthropic", model: "claude-sonnet-4-6", maxTokens: 2000, cache: true, batch: true }
};

const HARD_TUTOR_OVERRIDE = {
  provider: "anthropic",
  model: "claude-sonnet-4-6",
  maxTokens: 800,
  cache: true
};

export function pickModel({ tier = TIERS.CHEAP, hardSubject = false, providerOverride } = {}) {
  const base =
    tier === TIERS.TUTOR && hardSubject
      ? HARD_TUTOR_OVERRIDE
      : DEFAULT_MODEL_BY_TIER[tier] ?? DEFAULT_MODEL_BY_TIER[TIERS.CHEAP];

  if (providerOverride && providerOverride !== base.provider) {
    return { ...base, provider: providerOverride, model: translateModel(base.model, providerOverride) };
  }
  return { ...base };
}

function translateModel(anthropicModel, targetProvider) {
  if (targetProvider !== "openrouter") return anthropicModel;
  const map = {
    "claude-haiku-4-5": "anthropic/claude-haiku-4.5",
    "claude-sonnet-4-6": "anthropic/claude-sonnet-4.6"
  };
  return map[anthropicModel] ?? anthropicModel;
}

export function isHardSubject(subject, topicTag) {
  if (!subject) return false;
  if (!topicTag) return false;
  return HARD_SUBJECTS.has(`${subject}:${topicTag}`);
}
