// Black Forest Labs Flux via Replicate.
//
// Replicate is the simplest production path for Flux without dedicated
// infrastructure. Flux Schnell is the cheapest option (~$0.003/image) —
// great fallback. Flux Pro 1.1 (~$0.04) is the quality default.
//
// Replicate's `predictions` endpoint is async — we poll until completion.
// Tradeoff: 5-30 seconds of latency. Acceptable for batch pre-generation;
// not for interactive use. Cache aggressively.

import { ImageProviderError } from "./google.js";

const CREATE_PREDICTION = "https://api.replicate.com/v1/predictions";
const POLL_INTERVAL_MS = 1500;
const MAX_POLL_ATTEMPTS = 60;

const MODELS = {
  schnell: "black-forest-labs/flux-schnell",
  pro: "black-forest-labs/flux-1.1-pro",
  dev: "black-forest-labs/flux-dev"
};

export function createFluxImageProvider({
  apiKey,
  fetchImpl = globalThis.fetch,
  variant = "schnell",
  now = () => Date.now(),
  sleep = (ms) => new Promise((r) => setTimeout(r, ms))
}) {
  if (!apiKey) {
    throw new ImageProviderError("flux", "missing_api_key", "REPLICATE_API_TOKEN required");
  }
  const model = MODELS[variant] ?? MODELS.schnell;

  async function call(method, url, body) {
    const res = await fetchImpl(url, {
      method,
      headers: {
        authorization: `Token ${apiKey}`,
        "content-type": "application/json"
      },
      ...(body ? { body: JSON.stringify(body) } : {})
    });
    if (!res.ok) {
      const detail = await safeJson(res);
      throw new ImageProviderError(
        "flux",
        detail?.detail ?? `flux_${res.status}`,
        detail?.detail ?? `Replicate ${res.status}`,
        res.status
      );
    }
    return await res.json();
  }

  return {
    name: "flux",
    async generate(req) {
      const t0 = now();
      const aspect = req.aspectRatio ?? "1:1";
      const created = await call("POST", CREATE_PREDICTION, {
        model,
        input: {
          prompt: req.prompt,
          aspect_ratio: aspect,
          output_format: "png",
          ...(variant === "schnell" ? { num_inference_steps: 4 } : {})
        }
      });
      let prediction = created;
      const pollUrl = prediction.urls?.get;
      if (!pollUrl) {
        throw new ImageProviderError("flux", "no_poll_url", "Replicate did not return a poll URL");
      }
      for (let attempt = 0; attempt < MAX_POLL_ATTEMPTS; attempt++) {
        if (prediction.status === "succeeded") break;
        if (prediction.status === "failed" || prediction.status === "canceled") {
          throw new ImageProviderError(
            "flux",
            prediction.status,
            prediction.error ?? "Replicate prediction failed"
          );
        }
        await sleep(POLL_INTERVAL_MS);
        prediction = await call("GET", pollUrl);
      }
      if (prediction.status !== "succeeded") {
        throw new ImageProviderError("flux", "poll_timeout", "Replicate did not complete in time");
      }
      const out = Array.isArray(prediction.output) ? prediction.output[0] : prediction.output;
      if (typeof out !== "string") {
        throw new ImageProviderError("flux", "unexpected_output_shape", "Replicate output was not a URL string");
      }
      return {
        url: out,
        provider: "flux",
        model,
        widthPx: req.widthPx ?? null,
        heightPx: req.heightPx ?? null,
        latencyMs: now() - t0,
        estimatedCostCents: variant === "schnell" ? 0.3 : variant === "pro" ? 4.0 : 2.5,
        fallback: false,
        prompt: req.prompt
      };
    }
  };
}

async function safeJson(res) {
  try {
    return await res.json();
  } catch {
    return null;
  }
}
