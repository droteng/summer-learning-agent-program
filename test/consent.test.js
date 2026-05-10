import assert from "node:assert/strict";
import test from "node:test";
import {
  ALL_SCOPES,
  CONSENT_METHODS,
  ConsentError,
  consentStatusForParent,
  createConsentRecord,
  DEFAULT_CONSENT_DURATION_DAYS,
  DISCLOSURE_VERSION,
  findActiveConsent,
  isConsentActive,
  PARENT_DISCLOSURE,
  revokeConsentRecord
} from "../src/agents/consentAgent.js";

const FIXED = () => new Date("2026-05-10T12:00:00Z");

function baseRecord(overrides = {}) {
  return createConsentRecord({
    parentName: "Leo Family",
    parentEmail: "Leo@Example.COM",
    studentId: "child-1",
    childFirstName: "Avery",
    method: CONSENT_METHODS.SELF_ATTEST,
    ipAddress: "127.0.0.1",
    userAgent: "test",
    now: FIXED,
    ...overrides
  });
}

test("creates a valid consent record with normalized email and full scopes by default", () => {
  const record = baseRecord();
  assert.equal(record.parentEmail, "leo@example.com", "email should be lowercased");
  assert.equal(record.status, "active");
  assert.equal(record.disclosureVersion, DISCLOSURE_VERSION);
  assert.equal(record.method, CONSENT_METHODS.SELF_ATTEST);
  assert.equal(record.verifiable, false, "self_attest is NOT a verifiable method");
  assert.equal(record.scopes.length, ALL_SCOPES.length);
  assert.equal(record.studentId, "child-1");
});

test("rejects missing required fields", () => {
  assert.throws(
    () =>
      createConsentRecord({
        parentName: "",
        parentEmail: "x@y.z",
        studentId: "child-1",
        childFirstName: "Avery",
        method: CONSENT_METHODS.SELF_ATTEST
      }),
    (err) => err instanceof ConsentError && err.code === "invalid_consent_input"
  );
});

test("rejects malformed email", () => {
  assert.throws(
    () =>
      createConsentRecord({
        parentName: "Leo",
        parentEmail: "not-an-email",
        studentId: "child-1",
        childFirstName: "Avery",
        method: CONSENT_METHODS.SELF_ATTEST
      }),
    (err) => err instanceof ConsentError && err.details.some((d) => d.includes("parentEmail"))
  );
});

test("rejects unknown method and unknown scope", () => {
  assert.throws(
    () =>
      createConsentRecord({
        parentName: "Leo",
        parentEmail: "leo@example.com",
        studentId: "child-1",
        childFirstName: "Avery",
        method: "magic"
      }),
    (err) =>
      err instanceof ConsentError &&
      err.code === "invalid_consent_input" &&
      err.details.includes("method_invalid")
  );
  assert.throws(
    () =>
      createConsentRecord({
        parentName: "Leo",
        parentEmail: "leo@example.com",
        studentId: "child-1",
        childFirstName: "Avery",
        method: CONSENT_METHODS.SELF_ATTEST,
        scopes: ["secret_handshake"]
      }),
    (err) =>
      err instanceof ConsentError &&
      err.details.some((d) => d.startsWith("scope_unknown:"))
  );
});

test("verifiable flag set for card_auth and signed_form", () => {
  const card = baseRecord({ method: CONSENT_METHODS.CARD_AUTH });
  const form = baseRecord({ method: CONSENT_METHODS.SIGNED_FORM });
  assert.equal(card.verifiable, true);
  assert.equal(form.verifiable, true);
});

test("expiry is one year out by default", () => {
  const record = baseRecord();
  const created = new Date(record.createdAt).getTime();
  const expires = new Date(record.expiresAt).getTime();
  const daysApart = (expires - created) / 86_400_000;
  assert.equal(Math.round(daysApart), DEFAULT_CONSENT_DURATION_DAYS);
});

test("revoke flips status and stamps revokedAt", () => {
  const record = baseRecord();
  const revoked = revokeConsentRecord(record, { now: FIXED, reason: "explicit_revoke" });
  assert.equal(revoked.status, "revoked");
  assert.ok(revoked.revokedAt);
  assert.equal(revoked.revocationReason, "explicit_revoke");
  // Original record was frozen and untouched
  assert.equal(record.status, "active");
});

test("isConsentActive enforces status, revocation, and expiry", () => {
  const record = baseRecord();
  assert.equal(isConsentActive(record, { now: FIXED }), true);

  const revoked = revokeConsentRecord(record);
  assert.equal(isConsentActive(revoked), false);

  const future = () => new Date("2030-01-01T00:00:00Z");
  assert.equal(isConsentActive(record, { now: future }), false, "expired record is inactive");
});

test("findActiveConsent prefers newer active records covering all scopes", () => {
  const older = baseRecord({ now: () => new Date("2026-01-01T00:00:00Z") });
  const newer = baseRecord({
    parentName: "Co-parent",
    parentEmail: "p2@example.com",
    now: () => new Date("2026-04-01T00:00:00Z")
  });
  const result = findActiveConsent({
    records: [older, newer],
    studentId: "child-1",
    requiredScopes: [...ALL_SCOPES],
    now: FIXED
  });
  assert.equal(result.parentName, "Co-parent");
});

test("findActiveConsent returns null when no record covers the requested scopes", () => {
  const limited = baseRecord({ scopes: ["lesson_grading"] });
  const result = findActiveConsent({
    records: [limited],
    studentId: "child-1",
    requiredScopes: ["llm_processing"],
    now: FIXED
  });
  assert.equal(result, null);
});

test("status summary reflects active, partial, and missing", () => {
  const active = baseRecord();
  const partial = baseRecord({ scopes: ["lesson_grading"] });
  assert.equal(
    consentStatusForParent({ records: [active], studentId: "child-1", now: FIXED }).status,
    "active"
  );
  assert.equal(
    consentStatusForParent({ records: [partial], studentId: "child-1", now: FIXED }).status,
    "partial"
  );
  assert.equal(
    consentStatusForParent({ records: [], studentId: "child-1", now: FIXED }).status,
    "missing"
  );
});

test("disclosure exposes required COPPA elements", () => {
  assert.ok(PARENT_DISCLOSURE.operator);
  assert.ok(PARENT_DISCLOSURE.contactEmail.includes("@"));
  assert.ok(PARENT_DISCLOSURE.summary.length > 20);
  assert.ok(PARENT_DISCLOSURE.dataCollected.length >= 3);
  assert.ok(PARENT_DISCLOSURE.purposes.length >= 2);
  assert.ok(PARENT_DISCLOSURE.parentalRights.some((r) => r.toLowerCase().includes("delet")));
  assert.ok(PARENT_DISCLOSURE.thirdParties.some((t) => t.toLowerCase().includes("stripe")));
  assert.ok(PARENT_DISCLOSURE.noChildPii.toLowerCase().includes("last name"));
});
