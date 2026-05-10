// OpenRouter client using OpenAI-compatible chat completions. Used as a
// challenger / fallback path so we can reach Gemini Flash-Lite, DeepSeek, and
// other floor-priced models without locking the codebase to one vendor.

const ENDPOINT = "https://openrouter.ai/api/v1/chat/completions";

export function createOpenrouterProvider({
  apiKey,
  fetchImpl = globalThis.fetch,
  appUrl,
  appTitle,
  now = () => Date.now()
}) {
  if (!apiKey) {
    throw new Error("openrouter_provider_requires_api_key");
  }

  return {
    name: "openrouter",
    async complete(req, hint = {}) {
      const t0 = now();
      const body = {
        model: hint.model,
        max_tokens: hint.maxTokens ?? req.maxTokens ?? 600,
        temperature: req.temperature ?? 0.4,
        messages: [
          ...(req.system ? [{ role: "system", content: req.system }] : []),
          ...(req.messages ?? [])
        ]
      };

      const res = await fetchImpl(ENDPOINT, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${apiKey}`,
          ...(appUrl ? { "HTTP-Referer": appUrl } : {}),
          ...(appTitle ? { "X-Title": appTitle } : {})
        },
        body: JSON.stringify(body)
      });

      if (!res.ok) {
        const detail = await safeText(res);
        throw new Error(`openrouter_${res.status}: ${detail.slice(0, 240)}`);
      }

      const data = await res.json();
      const text = data.choices?.[0]?.message?.content ?? "";
      const usage = data.usage ?? {};

      return {
        text,
        usage: {
          inputTokens: usage.prompt_tokens ?? 0,
          outputTokens: usage.completion_tokens ?? 0,
          cachedInputTokens: usage.cache_read_input_tokens ?? 0
        },
        model: data.model ?? hint.model,
        provider: "openrouter",
        latencyMs: now() - t0,
        fallback: false,
        raw: { finishReason: data.choices?.[0]?.finish_reason }
      };
    }
  };
}

async function safeText(res) {
  try {
    return await res.text();
  } catch {
    return "";
  }
}
