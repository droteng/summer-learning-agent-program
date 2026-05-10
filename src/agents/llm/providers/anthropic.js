// Anthropic Messages API client using fetch. No SDK dependency so the bundle
// stays small and serverless cold starts stay fast.
//
// Cost levers wired here:
//   - Prompt caching via cache_control on the system block (90% off cached input).
//   - Conservative max_tokens (caller decides per tier).
// Batch API support is a TODO for async tier; live-tutor calls should not use it.

const ENDPOINT = "https://api.anthropic.com/v1/messages";
const API_VERSION = "2023-06-01";

export function createAnthropicProvider({ apiKey, fetchImpl = globalThis.fetch, now = () => Date.now() }) {
  if (!apiKey) {
    throw new Error("anthropic_provider_requires_api_key");
  }

  return {
    name: "anthropic",
    async complete(req, hint = {}) {
      const t0 = now();
      const body = buildRequestBody(req, hint);

      const res = await fetchImpl(ENDPOINT, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-api-key": apiKey,
          "anthropic-version": API_VERSION
        },
        body: JSON.stringify(body)
      });

      if (!res.ok) {
        const detail = await safeText(res);
        throw new Error(`anthropic_${res.status}: ${detail.slice(0, 240)}`);
      }

      const data = await res.json();
      const text = (data.content ?? [])
        .filter((block) => block?.type === "text")
        .map((block) => block.text)
        .join("");
      const usage = data.usage ?? {};

      return {
        text,
        usage: {
          inputTokens: usage.input_tokens ?? 0,
          outputTokens: usage.output_tokens ?? 0,
          cachedInputTokens: usage.cache_read_input_tokens ?? 0,
          cacheCreationTokens: usage.cache_creation_input_tokens ?? 0
        },
        model: data.model ?? hint.model,
        provider: "anthropic",
        latencyMs: now() - t0,
        fallback: false,
        raw: { stopReason: data.stop_reason }
      };
    }
  };
}

function buildRequestBody(req, hint) {
  const messages = (req.messages ?? []).map((m) => ({
    role: m.role,
    content: typeof m.content === "string" ? m.content : m.content
  }));

  const system = req.system
    ? hint.cache
      ? [{ type: "text", text: req.system, cache_control: { type: "ephemeral" } }]
      : req.system
    : undefined;

  return {
    model: hint.model,
    max_tokens: hint.maxTokens ?? req.maxTokens ?? 600,
    temperature: req.temperature ?? 0.4,
    ...(system !== undefined ? { system } : {}),
    messages
  };
}

async function safeText(res) {
  try {
    return await res.text();
  } catch {
    return "";
  }
}
