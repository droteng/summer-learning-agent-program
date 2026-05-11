// OpenAI gpt-image-1 provider.
//
// Note: the parent product user called it "gpt-2" — that's a 2019 text-only
// model. OpenAI's current image generation model is gpt-image-1, which is
// what we use here. It has strong text-rendering ability (useful for
// labeled diagrams).

import { ImageProviderError } from "./google.js";

const ENDPOINT = "https://api.openai.com/v1/images/generations";
const DEFAULT_MODEL = "gpt-image-1";

export function createOpenAIImageProvider({
  apiKey,
  fetchImpl = globalThis.fetch,
  model = DEFAULT_MODEL,
  now = () => Date.now()
}) {
  if (!apiKey) {
    throw new ImageProviderError("openai", "missing_api_key", "OPENAI_API_KEY required");
  }

  return {
    name: "openai",
    async generate(req) {
      const t0 = now();
      const body = {
        model,
        prompt: req.prompt,
        size: pickSize(req.aspectRatio, req.widthPx, req.heightPx),
        n: 1,
        ...(req.quality ? { quality: req.quality } : {})
      };
      const res = await fetchImpl(ENDPOINT, {
        method: "POST",
        headers: {
          authorization: `Bearer ${apiKey}`,
          "content-type": "application/json"
        },
        body: JSON.stringify(body)
      });
      if (!res.ok) {
        const detail = await safeJson(res);
        throw new ImageProviderError(
          "openai",
          detail?.error?.code ?? `openai_${res.status}`,
          detail?.error?.message ?? `OpenAI API ${res.status}`,
          res.status
        );
      }
      const data = await res.json();
      const item = data?.data?.[0];
      if (!item) {
        throw new ImageProviderError("openai", "no_image_in_response", "Response had no image entry");
      }
      const dataUri = item.b64_json
        ? `data:image/png;base64,${item.b64_json}`
        : item.url ?? null;
      if (!dataUri) {
        throw new ImageProviderError("openai", "missing_image_payload", "Neither b64_json nor url present");
      }
      const cost = pickCostCents(body.size, body.quality);
      return {
        url: dataUri,
        provider: "openai",
        model,
        widthPx: req.widthPx ?? null,
        heightPx: req.heightPx ?? null,
        latencyMs: now() - t0,
        estimatedCostCents: cost,
        fallback: false,
        prompt: req.prompt
      };
    }
  };
}

function pickSize(aspect, widthPx, heightPx) {
  if (widthPx && heightPx) {
    if (widthPx === heightPx) return "1024x1024";
    return widthPx > heightPx ? "1536x1024" : "1024x1536";
  }
  if (aspect === "16:9" || aspect === "3:2" || aspect === "4:3") return "1536x1024";
  if (aspect === "9:16" || aspect === "2:3" || aspect === "3:4") return "1024x1536";
  return "1024x1024";
}

// Rough gpt-image-1 prices in cents. Update as OpenAI changes pricing.
function pickCostCents(size, quality = "medium") {
  const table = {
    "1024x1024": { low: 1.1, medium: 4.2, high: 16.7 },
    "1536x1024": { low: 1.6, medium: 6.3, high: 25.0 },
    "1024x1536": { low: 1.6, medium: 6.3, high: 25.0 }
  };
  return table[size]?.[quality] ?? 4.2;
}

async function safeJson(res) {
  try {
    return await res.json();
  } catch {
    return null;
  }
}
