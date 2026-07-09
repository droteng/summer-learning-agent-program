// Deterministic static image fallback provider.
//
// Returns permanent generated assets from public/images/generated. Used when:
//   - no real image-generation API key is configured (free tier)
//   - the monthly image-spend budget is exhausted
//   - all real providers errored
//
// Real providers return request-specific images. This fallback makes sure the
// product never renders an empty visual gap when live image generation is unavailable.

import { staticImageFallbackForIntent } from "../../data/staticImageCatalog.js";

export function createMockImageProvider({ now = () => Date.now() } = {}) {
  return {
    name: "mock",
    async generate(req) {
      const t0 = now();
      const fallback = staticImageFallbackForIntent(req.intent);
      return {
        url: fallback.url,
        provider: "mock",
        model: "gpt-image-2:static-fallback",
        widthPx: fallback.widthPx,
        heightPx: fallback.heightPx,
        latencyMs: Math.max(0, now() - t0),
        estimatedCostCents: 0,
        fallback: true,
        prompt: req.prompt
      };
    }
  };
}
