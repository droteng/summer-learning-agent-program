import assert from "node:assert/strict";
import test from "node:test";
import { createHmac } from "node:crypto";
import {
  createStripeClient,
  StripeError,
  verifyWebhookSignature
} from "../src/integrations/stripe.js";

function fakeFetch(handler) {
  const calls = [];
  const fetchImpl = async (url, init) => {
    calls.push({ url, init });
    return await handler({ url, init });
  };
  return { fetchImpl, calls };
}

test("createCheckoutSession sends a form-urlencoded POST with the price id", async () => {
  const { fetchImpl, calls } = fakeFetch(async () => ({
    ok: true,
    status: 200,
    json: async () => ({ id: "cs_test", url: "https://stripe/checkout/cs_test" })
  }));
  const client = createStripeClient({ apiKey: "sk_test_123", fetchImpl });
  const session = await client.createCheckoutSession({
    mode: "subscription",
    priceId: "price_fam_m",
    customerEmail: "leo@example.com",
    successUrl: "https://app/success",
    cancelUrl: "https://app/cancel",
    metadata: { student_id: "child-1" }
  });
  assert.equal(session.url, "https://stripe/checkout/cs_test");

  const sent = calls[0];
  assert.match(sent.url, /\/v1\/checkout\/sessions$/);
  assert.equal(sent.init.method, "POST");
  assert.equal(sent.init.headers["Content-Type"], "application/x-www-form-urlencoded");
  assert.match(sent.init.headers.Authorization, /^Basic /);
  const body = sent.init.body;
  assert.match(body, /mode=subscription/);
  assert.match(body, /line_items%5B0%5D%5Bprice%5D=price_fam_m/);
  assert.match(body, /customer_email=leo%40example.com/);
  assert.match(body, /metadata%5Bstudent_id%5D=child-1/);
});

test("rejects missing priceId for subscription mode", async () => {
  const { fetchImpl } = fakeFetch(async () => ({ ok: true, json: async () => ({}) }));
  const client = createStripeClient({ apiKey: "sk_test_123", fetchImpl });
  await assert.rejects(
    () =>
      client.createCheckoutSession({
        mode: "subscription",
        successUrl: "https://app/success",
        cancelUrl: "https://app/cancel"
      }),
    (err) => err instanceof StripeError && err.code === "missing_price"
  );
});

test("Stripe error responses become StripeError with code + status", async () => {
  const { fetchImpl } = fakeFetch(async () => ({
    ok: false,
    status: 402,
    json: async () => ({ error: { code: "card_declined", message: "Your card was declined." } })
  }));
  const client = createStripeClient({ apiKey: "sk_test_123", fetchImpl });
  await assert.rejects(
    () => client.retrieveCustomer("cus_x"),
    (err) =>
      err instanceof StripeError &&
      err.code === "card_declined" &&
      err.status === 402 &&
      /declined/i.test(err.message)
  );
});

test("constructor throws when apiKey is missing", () => {
  assert.throws(() => createStripeClient({ apiKey: "" }), (err) => err instanceof StripeError);
});

test("verifyWebhookSignature accepts a freshly signed payload", () => {
  const secret = "whsec_test_secret";
  const rawBody = JSON.stringify({ type: "customer.subscription.created", data: { object: { id: "sub_1" } } });
  const timestamp = Math.floor(Date.now() / 1000);
  const expected = createHmac("sha256", secret).update(`${timestamp}.${rawBody}`, "utf8").digest("hex");

  const event = verifyWebhookSignature({
    rawBody,
    signatureHeader: `t=${timestamp},v1=${expected}`,
    secret
  });
  assert.equal(event.type, "customer.subscription.created");
});

test("verifyWebhookSignature rejects a forged signature", () => {
  const secret = "whsec_test_secret";
  const rawBody = JSON.stringify({ type: "x" });
  const timestamp = Math.floor(Date.now() / 1000);
  const forged = "0".repeat(64);
  assert.throws(
    () =>
      verifyWebhookSignature({
        rawBody,
        signatureHeader: `t=${timestamp},v1=${forged}`,
        secret
      }),
    (err) => err instanceof StripeError && err.code === "invalid_signature"
  );
});

test("verifyWebhookSignature rejects an old timestamp", () => {
  const secret = "whsec_test_secret";
  const rawBody = JSON.stringify({ type: "x" });
  const oldTs = Math.floor(Date.now() / 1000) - 10_000;
  const sig = createHmac("sha256", secret).update(`${oldTs}.${rawBody}`).digest("hex");
  assert.throws(
    () =>
      verifyWebhookSignature({
        rawBody,
        signatureHeader: `t=${oldTs},v1=${sig}`,
        secret
      }),
    (err) => err instanceof StripeError && err.code === "signature_expired"
  );
});

test("verifyWebhookSignature rejects malformed headers and non-JSON bodies", () => {
  assert.throws(
    () => verifyWebhookSignature({ rawBody: "ok", signatureHeader: "", secret: "s" }),
    (err) => err instanceof StripeError && err.code === "missing_signature"
  );
  assert.throws(
    () => verifyWebhookSignature({ rawBody: "ok", signatureHeader: "v1=zzz", secret: "s" }),
    (err) => err instanceof StripeError && err.code === "invalid_timestamp"
  );

  const secret = "s";
  const ts = Math.floor(Date.now() / 1000);
  const sig = createHmac("sha256", secret).update(`${ts}.notjson`).digest("hex");
  assert.throws(
    () =>
      verifyWebhookSignature({ rawBody: "notjson", signatureHeader: `t=${ts},v1=${sig}`, secret }),
    (err) => err instanceof StripeError && err.code === "invalid_payload_json"
  );
});
