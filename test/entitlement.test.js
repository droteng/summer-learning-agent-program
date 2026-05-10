import assert from "node:assert/strict";
import test from "node:test";
import {
  isWeekUnlocked,
  pickParentEmail,
  resolveEntitlement
} from "../src/agents/entitlementAgent.js";
import { appendConsentRecord, saveSubscription } from "../src/data/db.js";
import { createConsentRecord, CONSENT_METHODS } from "../src/agents/consentAgent.js";
import { PLAN_TIERS } from "../src/agents/billingAgent.js";

test("pickParentEmail prefers active consent over older revoked ones", () => {
  const records = [
    { parentEmail: "old@example.com", status: "revoked", createdAt: "2025-01-01T00:00:00Z" },
    { parentEmail: "current@example.com", status: "active", createdAt: "2026-01-01T00:00:00Z" }
  ];
  assert.equal(pickParentEmail(records), "current@example.com");
});

test("pickParentEmail falls back to newest record when none are active", () => {
  const records = [
    { parentEmail: "older@example.com", status: "revoked", createdAt: "2025-01-01T00:00:00Z" },
    { parentEmail: "newer@example.com", status: "revoked", createdAt: "2026-01-01T00:00:00Z" }
  ];
  assert.equal(pickParentEmail(records), "newer@example.com");
});

test("pickParentEmail returns null for empty input", () => {
  assert.equal(pickParentEmail([]), null);
  assert.equal(pickParentEmail(null), null);
  assert.equal(pickParentEmail(undefined), null);
});

test("isWeekUnlocked compares against the weeksUnlocked count", () => {
  assert.equal(isWeekUnlocked({ weekNumber: 1, weeksUnlocked: 1 }), true);
  assert.equal(isWeekUnlocked({ weekNumber: 2, weeksUnlocked: 1 }), false);
  assert.equal(isWeekUnlocked({ weekNumber: 5, weeksUnlocked: 8 }), true);
  assert.equal(isWeekUnlocked({ weekNumber: 1, weeksUnlocked: undefined }), true);
});

test("resolveEntitlement returns free-tier defaults when no consent or subscription exists", async () => {
  const ent = await resolveEntitlement({ studentId: `unconfigured-${Date.now()}` });
  assert.equal(ent.tier, PLAN_TIERS.FREE);
  assert.equal(ent.weeksUnlocked, 1);
  assert.equal(ent.llmTutoring, false);
  assert.equal(ent.llmReports, false);
  assert.equal(ent.parentEmail, null);
});

test("resolveEntitlement picks parent email from consent and upgrades when subscription is active", async () => {
  const studentId = `ent-${Date.now()}`;
  const parentEmail = `parent-${Date.now()}@example.com`;
  const consent = createConsentRecord({
    parentName: "Leo",
    parentEmail,
    studentId,
    childFirstName: "Avery",
    method: CONSENT_METHODS.SELF_ATTEST
  });
  await appendConsentRecord({ studentId, record: consent });

  await saveSubscription({
    parentEmail,
    subscription: {
      tier: PLAN_TIERS.FAMILY,
      status: "active",
      stripeSubscriptionId: "sub_test",
      stripeCustomerId: "cus_test",
      parentEmail: parentEmail.toLowerCase(),
      priceId: "price_x",
      currentPeriodEnd: new Date(Date.now() + 30 * 86_400_000).toISOString(),
      cancelAtPeriodEnd: false
    }
  });

  const ent = await resolveEntitlement({ studentId });
  assert.equal(ent.parentEmail, parentEmail.toLowerCase());
  assert.equal(ent.tier, PLAN_TIERS.FAMILY);
  assert.equal(ent.weeksUnlocked, 8);
  assert.equal(ent.llmTutoring, true);
  assert.equal(ent.llmReports, true);
});

test("resolveEntitlement honors canceled subscriptions by reverting to free", async () => {
  const studentId = `ent-cancel-${Date.now()}`;
  const parentEmail = `parent-cancel-${Date.now()}@example.com`;
  const consent = createConsentRecord({
    parentName: "Leo",
    parentEmail,
    studentId,
    childFirstName: "Avery",
    method: CONSENT_METHODS.SELF_ATTEST
  });
  await appendConsentRecord({ studentId, record: consent });
  await saveSubscription({
    parentEmail,
    subscription: {
      tier: PLAN_TIERS.FAMILY,
      status: "canceled",
      stripeSubscriptionId: "sub_old",
      stripeCustomerId: "cus_old",
      parentEmail: parentEmail.toLowerCase()
    }
  });

  const ent = await resolveEntitlement({ studentId });
  assert.equal(ent.tier, PLAN_TIERS.FREE);
  assert.equal(ent.weeksUnlocked, 1);
});
