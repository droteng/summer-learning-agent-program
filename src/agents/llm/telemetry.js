// Prices in USD per 1M tokens. Update as providers change pricing.
// These are estimates — telemetry is for relative comparison, not billing.
const PRICES = {
  anthropic: {
    "claude-haiku-4-5": { input: 1.0, output: 5.0, cacheRead: 0.1 },
    "claude-sonnet-4-6": { input: 3.0, output: 15.0, cacheRead: 0.3 }
  },
  openrouter: {
    "anthropic/claude-haiku-4.5": { input: 1.05, output: 5.25, cacheRead: 0.11 },
    "anthropic/claude-sonnet-4.6": { input: 3.15, output: 15.75, cacheRead: 0.32 },
    "google/gemini-2.5-flash-lite": { input: 0.1, output: 0.4, cacheRead: 0.025 }
  }
};

export function estimateCostCents({ provider, model, usage = {} }) {
  const price = PRICES[provider]?.[model];
  if (!price) return 0;
  const cachedInput = usage.cachedInputTokens ?? 0;
  const billedInput = Math.max(0, (usage.inputTokens ?? 0) - cachedInput);
  const output = usage.outputTokens ?? 0;
  const usd =
    (billedInput / 1_000_000) * price.input +
    (cachedInput / 1_000_000) * price.cacheRead +
    (output / 1_000_000) * price.output;
  return Math.round(usd * 100 * 1000) / 1000; // tenth-of-a-cent precision
}

export function createTelemetry({ sink = defaultSink, clock = () => new Date().toISOString() } = {}) {
  return {
    log(event) {
      sink({ type: "llm_call", ts: clock(), ...event });
    },
    logError(event) {
      sink({ type: "llm_error", ts: clock(), ...event });
    }
  };
}

function defaultSink(record) {
  if (process.env.LLM_TELEMETRY_SILENT === "1") return;
  try {
    process.stdout.write(`${JSON.stringify(record)}\n`);
  } catch {
    // ignore stdout failures so telemetry never breaks a request
  }
}
