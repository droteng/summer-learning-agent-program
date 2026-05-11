// Stripe REST client implemented with fetch + form-urlencoded so we don't
// take the SDK dependency. Stripe's API only requires HTTPS + Basic auth
// using the secret key as the username.
//
// Webhook signature verification uses Node's built-in crypto (HMAC-SHA256)
// per Stripe's documented scheme: signed payload is `${timestamp}.${rawBody}`,
// signed with the webhook secret, compared in constant time.

import { createHmac, timingSafeEqual } from "node:crypto";

const STRIPE_API = "https://api.stripe.com/v1";

export class StripeError extends Error {
  constructor(code, message, status) {
    super(message);
    this.name = "StripeError";
    this.code = code;
    this.status = status;
  }
}

export function createStripeClient({
  apiKey,
  fetchImpl = globalThis.fetch,
  apiVersion = "2024-11-20.acacia"
}) {
  if (!apiKey) {
    throw new StripeError("missing_api_key", "Stripe secret key is required");
  }

  async function call(method, path, body) {
    const headers = {
      Authorization: `Basic ${Buffer.from(`${apiKey}:`).toString("base64")}`,
      "Stripe-Version": apiVersion
    };
    let url = `${STRIPE_API}${path}`;
    let init = { method, headers };
    if (body && method !== "GET") {
      headers["Content-Type"] = "application/x-www-form-urlencoded";
      init.body = encodeForm(body);
    } else if (body && method === "GET") {
      const query = encodeForm(body);
      url += `${url.includes("?") ? "&" : "?"}${query}`;
    }
    const res = await fetchImpl(url, init);
    if (!res.ok) {
      const detail = await safeJson(res);
      throw new StripeError(
        detail?.error?.code ?? `stripe_${res.status}`,
        detail?.error?.message ?? `Stripe ${res.status}`,
        res.status
      );
    }
    return await res.json();
  }

  return {
    name: "stripe",

    /**
     * @param {{
     *   mode?: "subscription"|"setup"|"payment",
     *   priceId?: string,
     *   customerEmail?: string,
     *   successUrl: string,
     *   cancelUrl: string,
     *   metadata?: Record<string, string|number>,
     *   clientReferenceId?: string
     * }} args
     */
    async createCheckoutSession(args) {
      const {
        mode = "subscription",
        priceId,
        customerEmail,
        successUrl,
        cancelUrl,
        metadata = {},
        clientReferenceId
      } = args;
      if (mode === "subscription" && !priceId) {
        throw new StripeError("missing_price", "priceId required for subscription checkout");
      }
      const body = {
        mode,
        success_url: successUrl,
        cancel_url: cancelUrl,
        ...(customerEmail ? { customer_email: customerEmail } : {}),
        ...(clientReferenceId ? { client_reference_id: clientReferenceId } : {})
      };
      if (mode === "subscription") {
        body["line_items[0][price]"] = priceId;
        body["line_items[0][quantity]"] = "1";
        body["subscription_data[metadata][parent_email]"] = customerEmail ?? "";
      }
      for (const [k, v] of Object.entries(metadata)) {
        body[`metadata[${k}]`] = String(v);
        if (mode === "subscription") body[`subscription_data[metadata][${k}]`] = String(v);
      }
      return await call("POST", "/checkout/sessions", body);
    },

    /**
     * @param {{ customerId: string, returnUrl: string }} args
     */
    async createBillingPortalSession(args) {
      const { customerId, returnUrl } = args;
      return await call("POST", "/billing_portal/sessions", {
        customer: customerId,
        return_url: returnUrl
      });
    },

    async retrieveSubscription(subscriptionId) {
      return await call("GET", `/subscriptions/${encodeURIComponent(subscriptionId)}`);
    },

    async retrieveCustomer(customerId) {
      return await call("GET", `/customers/${encodeURIComponent(customerId)}`);
    }
  };
}

// Verifies Stripe's `Stripe-Signature` header against the raw body. The
// header looks like `t=<unix_timestamp>,v1=<signature>[,v1=<signature>]*`.
// Returns the parsed event payload when valid; throws StripeError when not.
export function verifyWebhookSignature({
  rawBody,
  signatureHeader,
  secret,
  toleranceSeconds = 300,
  now = () => Date.now()
}) {
  if (typeof rawBody !== "string") {
    throw new StripeError("invalid_body", "rawBody must be the original request string");
  }
  if (!secret) {
    throw new StripeError("missing_secret", "webhook secret is required");
  }
  if (!signatureHeader) {
    throw new StripeError("missing_signature", "Stripe-Signature header is required");
  }

  const parts = Object.create(null);
  for (const segment of signatureHeader.split(",")) {
    const [key, value] = segment.trim().split("=");
    if (!key || !value) continue;
    if (key === "v1") {
      parts.v1 = parts.v1 ? [...parts.v1, value] : [value];
    } else {
      parts[key] = value;
    }
  }

  const timestamp = Number.parseInt(parts.t, 10);
  if (!Number.isFinite(timestamp)) {
    throw new StripeError("invalid_timestamp", "missing or non-numeric t in signature header");
  }
  if (!parts.v1 || parts.v1.length === 0) {
    throw new StripeError("missing_v1", "no v1 signatures present");
  }

  const ageSec = now() / 1000 - timestamp;
  if (ageSec > toleranceSeconds) {
    throw new StripeError("signature_expired", `signature older than ${toleranceSeconds}s`);
  }

  const expected = createHmac("sha256", secret)
    .update(`${timestamp}.${rawBody}`, "utf8")
    .digest("hex");
  const expectedBuf = Buffer.from(expected, "utf8");

  const matched = parts.v1.some((candidate) => {
    const candidateBuf = Buffer.from(candidate, "utf8");
    return candidateBuf.length === expectedBuf.length && timingSafeEqual(candidateBuf, expectedBuf);
  });
  if (!matched) {
    throw new StripeError("invalid_signature", "no v1 signature matched");
  }

  let event;
  try {
    event = JSON.parse(rawBody);
  } catch {
    throw new StripeError("invalid_payload_json", "rawBody is not valid JSON");
  }
  return event;
}

function encodeForm(obj) {
  const params = new URLSearchParams();
  for (const [k, v] of Object.entries(obj)) {
    if (v === undefined || v === null) continue;
    params.append(k, String(v));
  }
  return params.toString();
}

async function safeJson(res) {
  try {
    return await res.json();
  } catch {
    return null;
  }
}
