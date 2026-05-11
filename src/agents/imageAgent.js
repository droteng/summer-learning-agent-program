// Image-generation orchestrator.
//
// Same shape as the LLM port: a router that picks the cheapest provider
// that fits the use case, a budget circuit breaker, a cache that
// short-circuits identical prompts, and graceful fallback to a
// deterministic SVG mock so the product ships without API keys.
//
// Use cases live in `INTENTS`. Each intent maps to a default style and a
// preferred provider chain. Caller passes an intent + subject + scene
// description; the agent builds the final prompt with kid-safe guardrails.

import { createMockImageProvider } from "../integrations/imageProviders/mock.js";
import {
  createGoogleImageProvider,
  ImageProviderError
} from "../integrations/imageProviders/google.js";
import { createOpenAIImageProvider } from "../integrations/imageProviders/openai.js";
import { createFluxImageProvider } from "../integrations/imageProviders/flux.js";
import { createIdeogramImageProvider } from "../integrations/imageProviders/ideogram.js";
import {
  loadGeneratedImage,
  saveGeneratedImage,
  loadImageBudgetUsage,
  recordImageBudgetSpend
} from "../data/db.js";

export { ImageProviderError } from "../integrations/imageProviders/google.js";

export const INTENTS = Object.freeze({
  MISSION_HERO: "mission_hero",
  CONCEPT_DIAGRAM: "concept_diagram",
  SUBJECT_HERO: "subject_hero",
  VOCAB_CARD: "vocab_card",
  DECORATION: "decoration"
});

// Each intent points to a preferred chain. The agent walks the chain in
// order until one provider succeeds. Mock is always the final fallback.
const INTENT_CHAINS = {
  [INTENTS.MISSION_HERO]: ["google", "openai", "flux", "mock"],
  [INTENTS.CONCEPT_DIAGRAM]: ["ideogram", "google", "openai", "flux", "mock"],
  [INTENTS.SUBJECT_HERO]: ["google", "openai", "flux", "mock"],
  [INTENTS.VOCAB_CARD]: ["ideogram", "google", "openai", "mock"],
  [INTENTS.DECORATION]: ["flux", "google", "openai", "mock"]
};

const KID_SAFE_GUARDRAILS = [
  "Child-friendly cartoon illustration for a Grade 6 (age 11-12) learning program.",
  "Style: warm, vibrant colors, slightly geometric, friendly stylized figures.",
  "No photorealism. No realistic human faces. No text in the image unless explicitly requested.",
  "Avoid: scary imagery, weapons, branded characters or logos, copyrighted styles, anything sexually suggestive.",
  "Composition: clean central focus, soft background, plenty of whitespace."
];

export function createImageAgent({
  env = process.env,
  now = () => Date.now(),
  monthlyBudgetCents = Number(env.IMAGE_MONTHLY_BUDGET_CENTS ?? 5000),
  providers: providedProviders,
  cache = { load: loadGeneratedImage, save: saveGeneratedImage },
  budget = { load: loadImageBudgetUsage, record: recordImageBudgetSpend }
} = {}) {
  const providers = providedProviders ?? buildProvidersFromEnv(env);

  async function generate(req) {
    const intent = req.intent ?? INTENTS.MISSION_HERO;
    const chain = req.providerChain ?? INTENT_CHAINS[intent] ?? INTENT_CHAINS[INTENTS.MISSION_HERO];
    const finalPrompt = buildPrompt(req);
    const cacheKey = computeCacheKey({ prompt: finalPrompt, intent, aspectRatio: req.aspectRatio ?? "1:1" });

    // Cache short-circuit. Mock results are NOT cached at the DB level so
    // they can upgrade to real ones the moment keys are configured.
    const cached = await cache.load(cacheKey);
    if (cached) {
      return { ...cached, cached: true };
    }

    const budgetUsed = await safeBudgetLoad(budget);
    const budgetExhausted = budgetUsed >= monthlyBudgetCents;

    for (const providerName of chain) {
      const provider = providers[providerName];
      if (!provider) continue;
      if (providerName !== "mock" && budgetExhausted) continue;

      try {
        const result = await provider.generate({
          prompt: finalPrompt,
          subject: req.subject,
          aspectRatio: req.aspectRatio ?? "1:1",
          widthPx: req.widthPx,
          heightPx: req.heightPx,
          quality: req.quality
        });
        const record = {
          cacheKey,
          intent,
          subject: req.subject ?? null,
          prompt: finalPrompt,
          aspectRatio: req.aspectRatio ?? "1:1",
          url: result.url,
          provider: result.provider,
          model: result.model,
          widthPx: result.widthPx,
          heightPx: result.heightPx,
          estimatedCostCents: result.estimatedCostCents,
          fallback: result.fallback === true,
          createdAt: new Date(now()).toISOString()
        };
        if (!result.fallback) {
          await cache.save(record);
          await safeBudgetRecord(budget, result.estimatedCostCents ?? 0);
        }
        return { ...record, cached: false };
      } catch (err) {
        // Try the next provider. Don't fail unless the whole chain fails.
        if (!(err instanceof ImageProviderError)) {
          // Wrap unknown errors so the caller still gets a consistent shape.
        }
      }
    }

    // If we got here, even the mock failed — that's a programming error.
    throw new ImageProviderError("image_agent", "all_providers_failed", "Image generation chain exhausted");
  }

  return {
    generate,
    INTENTS,
    monthlyBudgetCents,
    providers
  };
}

export function buildPrompt(req) {
  const lines = [...KID_SAFE_GUARDRAILS];
  if (req.subject) {
    lines.push(`Subject: ${req.subject}.`);
  }
  if (req.topic) {
    lines.push(`Topic: ${req.topic}.`);
  }
  if (req.scene) {
    lines.push(`Scene: ${req.scene}.`);
  } else if (req.prompt) {
    lines.push(`Scene: ${req.prompt}.`);
  }
  if (req.intent === INTENTS.CONCEPT_DIAGRAM || req.intent === INTENTS.VOCAB_CARD) {
    lines.push("This image will be used in a learning context — clarity over decoration.");
  }
  return lines.join(" ");
}

export function computeCacheKey({ prompt, intent, aspectRatio }) {
  return `img:${intent}:${aspectRatio}:${stableHash(prompt)}`;
}

function stableHash(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = (h + ((h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24))) >>> 0;
  }
  return h.toString(36);
}

function buildProvidersFromEnv(env) {
  const out = {
    mock: createMockImageProvider()
  };
  if (env.GOOGLE_API_KEY) {
    try { out.google = createGoogleImageProvider({ apiKey: env.GOOGLE_API_KEY }); } catch { /* ignore */ }
  }
  if (env.OPENAI_API_KEY) {
    try { out.openai = createOpenAIImageProvider({ apiKey: env.OPENAI_API_KEY }); } catch { /* ignore */ }
  }
  if (env.REPLICATE_API_TOKEN) {
    try {
      out.flux = createFluxImageProvider({
        apiKey: env.REPLICATE_API_TOKEN,
        variant: env.FLUX_VARIANT ?? "schnell"
      });
    } catch { /* ignore */ }
  }
  if (env.IDEOGRAM_API_KEY) {
    try { out.ideogram = createIdeogramImageProvider({ apiKey: env.IDEOGRAM_API_KEY }); } catch { /* ignore */ }
  }
  return out;
}

async function safeBudgetLoad(budget) {
  try {
    const used = await budget.load();
    return typeof used === "number" ? used : 0;
  } catch {
    return 0;
  }
}

async function safeBudgetRecord(budget, cents) {
  try {
    await budget.record(cents);
  } catch {
    // budget tracking failure should never break image generation
  }
}
