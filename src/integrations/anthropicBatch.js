// Anthropic Message Batches client. Implements the documented endpoints for
// submitting up to 100k message requests at a time at 50% off the regular
// per-token price. Results return as JSONL from a presigned URL.
//
// Why fetch and not the SDK: keeps the bundle small and the runtime simple
// (no streaming SSE, no extra dependencies). The batch flow only needs four
// REST calls — create, retrieve, results, cancel — each modeled here.
//
// All endpoints require the message-batches beta header.

const BATCH_API = "https://api.anthropic.com/v1/messages/batches";
const API_VERSION = "2023-06-01";
const BETA = "message-batches-2024-09-24";

export class AnthropicBatchError extends Error {
  constructor(code, message, status) {
    super(message);
    this.name = "AnthropicBatchError";
    this.code = code;
    this.status = status;
  }
}

export function createAnthropicBatchClient({ apiKey, fetchImpl = globalThis.fetch }) {
  if (!apiKey) {
    throw new AnthropicBatchError("missing_api_key", "Anthropic API key required");
  }

  const baseHeaders = {
    "x-api-key": apiKey,
    "anthropic-version": API_VERSION,
    "anthropic-beta": BETA
  };

  async function call(method, url, body) {
    const headers = { ...baseHeaders };
    let init = { method, headers };
    if (body !== undefined) {
      headers["content-type"] = "application/json";
      init.body = JSON.stringify(body);
    }
    const res = await fetchImpl(url, init);
    if (!res.ok) {
      const detail = await safeJson(res);
      throw new AnthropicBatchError(
        detail?.error?.type ?? `anthropic_batch_${res.status}`,
        detail?.error?.message ?? `Anthropic batch ${res.status}`,
        res.status
      );
    }
    return await res.json();
  }

  return {
    name: "anthropic-batch",

    /**
     * @param {Array<{ custom_id: string, params: object }>} requests
     */
    async createBatch(requests) {
      if (!Array.isArray(requests) || requests.length === 0) {
        throw new AnthropicBatchError("empty_batch", "createBatch requires at least one request");
      }
      return await call("POST", BATCH_API, { requests });
    },

    async retrieveBatch(batchId) {
      return await call("GET", `${BATCH_API}/${encodeURIComponent(batchId)}`);
    },

    /**
     * Streams the JSONL results, returning an array of parsed lines.
     * The batch must be in processing_status === "ended" or this throws.
     */
    async retrieveResults(batchId) {
      const meta = await this.retrieveBatch(batchId);
      if (meta.processing_status !== "ended") {
        throw new AnthropicBatchError(
          "not_ended",
          `Batch ${batchId} is not ended yet (status: ${meta.processing_status})`,
          409
        );
      }
      if (!meta.results_url) {
        throw new AnthropicBatchError(
          "missing_results_url",
          `Batch ${batchId} ended but exposes no results_url`,
          500
        );
      }
      const res = await fetchImpl(meta.results_url, { headers: baseHeaders });
      if (!res.ok) {
        const detail = await safeText(res);
        throw new AnthropicBatchError(
          `results_fetch_${res.status}`,
          detail.slice(0, 240),
          res.status
        );
      }
      const text = await res.text();
      return text
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean)
        .map((line) => {
          try {
            return JSON.parse(line);
          } catch {
            return null;
          }
        })
        .filter(Boolean);
    },

    async cancelBatch(batchId) {
      return await call("POST", `${BATCH_API}/${encodeURIComponent(batchId)}/cancel`);
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

async function safeText(res) {
  try {
    return await res.text();
  } catch {
    return "";
  }
}
