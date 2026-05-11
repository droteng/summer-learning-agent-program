// Ideogram v2 provider. Best-in-class text rendering inside images, which
// makes it the right pick for labeled diagrams, posters, vocabulary cards.

import { ImageProviderError } from "./google.js";

const ENDPOINT = "https://api.ideogram.ai/generate";

export function createIdeogramImageProvider({
  apiKey,
  fetchImpl = globalThis.fetch,
  now = () => Date.now()
}) {
  if (!apiKey) {
    throw new ImageProviderError("ideogram", "missing_api_key", "IDEOGRAM_API_KEY required");
  }

  return {
    name: "ideogram",
    async generate(req) {
      const t0 = now();
      const body = {
        image_request: {
          prompt: req.prompt,
          aspect_ratio: ideogramAspect(req.aspectRatio),
          model: "V_2",
          ...(req.negativePrompt ? { negative_prompt: req.negativePrompt } : {}),
          ...(req.styleType ? { style_type: req.styleType } : {})
        }
      };
      const res = await fetchImpl(ENDPOINT, {
        method: "POST",
        headers: {
          "Api-Key": apiKey,
          "content-type": "application/json"
        },
        body: JSON.stringify(body)
      });
      if (!res.ok) {
        const detail = await safeJson(res);
        throw new ImageProviderError(
          "ideogram",
          detail?.error_message ?? `ideogram_${res.status}`,
          detail?.error_message ?? `Ideogram API ${res.status}`,
          res.status
        );
      }
      const data = await res.json();
      const item = data?.data?.[0];
      if (!item?.url) {
        throw new ImageProviderError("ideogram", "no_image_in_response", "Response had no image url");
      }
      return {
        url: item.url,
        provider: "ideogram",
        model: "V_2",
        widthPx: req.widthPx ?? null,
        heightPx: req.heightPx ?? null,
        latencyMs: now() - t0,
        estimatedCostCents: 8.0,
        fallback: false,
        prompt: req.prompt
      };
    }
  };
}

function ideogramAspect(aspect) {
  switch (aspect) {
    case "16:9":
      return "ASPECT_16_9";
    case "9:16":
      return "ASPECT_9_16";
    case "3:2":
      return "ASPECT_3_2";
    case "2:3":
      return "ASPECT_2_3";
    case "4:3":
      return "ASPECT_4_3";
    case "3:4":
      return "ASPECT_3_4";
    default:
      return "ASPECT_1_1";
  }
}

async function safeJson(res) {
  try {
    return await res.json();
  } catch {
    return null;
  }
}
