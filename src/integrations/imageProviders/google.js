// Google Gemini 2.5 Flash Image ("nano-banana") provider.
//
// Calls generativelanguage.googleapis.com with the image-generation model.
// Returns a base64 PNG inline; we wrap as a data URI for storage parity
// with the mock provider. Production should download base64 once and push
// to blob storage — the imageAgent will swap data URI → blob URL on save.
//
// Pricing reference (as of late 2025): ~$0.039 per image. Strong safety
// filtering built in. Watermarked via SynthID.

const ENDPOINT_TMPL =
  "https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={apiKey}";

const DEFAULT_MODEL = "gemini-2.5-flash-image";

export class ImageProviderError extends Error {
  constructor(provider, code, message, status) {
    super(`[${provider}] ${message}`);
    this.name = "ImageProviderError";
    this.provider = provider;
    this.code = code;
    this.status = status;
  }
}

export function createGoogleImageProvider({
  apiKey,
  fetchImpl = globalThis.fetch,
  model = DEFAULT_MODEL,
  now = () => Date.now()
}) {
  if (!apiKey) {
    throw new ImageProviderError("google", "missing_api_key", "GOOGLE_API_KEY required");
  }

  return {
    name: "google",
    async generate(req) {
      const t0 = now();
      const url = ENDPOINT_TMPL.replace("{model}", encodeURIComponent(model)).replace(
        "{apiKey}",
        encodeURIComponent(apiKey)
      );
      const body = {
        contents: [{ parts: [{ text: req.prompt }] }],
        generationConfig: {
          responseModalities: ["IMAGE"],
          ...(req.aspectRatio ? { imageConfig: { aspectRatio: req.aspectRatio } } : {})
        }
      };
      const res = await fetchImpl(url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body)
      });
      if (!res.ok) {
        const detail = await safeJson(res);
        throw new ImageProviderError(
          "google",
          detail?.error?.status ?? `google_${res.status}`,
          detail?.error?.message ?? `Google API ${res.status}`,
          res.status
        );
      }
      const data = await res.json();
      const parts = data?.candidates?.[0]?.content?.parts ?? [];
      const imagePart = parts.find((p) => p?.inlineData?.data);
      if (!imagePart) {
        throw new ImageProviderError("google", "no_image_in_response", "Response did not include an image part");
      }
      const mime = imagePart.inlineData.mimeType ?? "image/png";
      const dataUri = `data:${mime};base64,${imagePart.inlineData.data}`;
      return {
        url: dataUri,
        provider: "google",
        model,
        widthPx: req.widthPx ?? null,
        heightPx: req.heightPx ?? null,
        latencyMs: now() - t0,
        estimatedCostCents: 3.9, // ~$0.039
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
