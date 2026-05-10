import assert from "node:assert/strict";
import test from "node:test";
import {
  createErasureRequest,
  ErasureError,
  ERASURE_TARGETS,
  finalizeErasureAudit
} from "../src/agents/dataErasureAgent.js";
import {
  loadConsentRecords,
  loadErasureAudits,
  loadProfileSnapshot,
  loadProgressSnapshot,
  appendConsentRecord,
  purgeStudentData,
  saveErasureAudit,
  saveProfileSnapshot,
  saveProgressSnapshot
} from "../src/data/db.js";
import { createConsentRecord, CONSENT_METHODS } from "../src/agents/consentAgent.js";

const FIXED = () => new Date("2026-05-10T12:00:00Z");

test("creates an erasure request when the confirmation matches", () => {
  const req = createErasureRequest({
    studentId: "child-erase-1",
    parentName: "Leo",
    parentEmail: "leo@example.com",
    confirmationText: "Avery",
    expectedChildFirstName: "Avery",
    now: FIXED
  });
  assert.equal(req.studentId, "child-erase-1");
  assert.equal(req.parentEmail, "leo@example.com");
  assert.match(req.auditId, /^erase-/);
  assert.equal(req.completedAt, null);
  assert.equal(req.recordCounts, null);
});

test("confirmation matching is case-insensitive and trims whitespace", () => {
  const req = createErasureRequest({
    studentId: "child-1",
    parentName: "Leo",
    parentEmail: "leo@example.com",
    confirmationText: "  avery  ",
    expectedChildFirstName: "Avery"
  });
  assert.ok(req.auditId);
});

test("confirmation mismatch throws and surfaces the code", () => {
  assert.throws(
    () =>
      createErasureRequest({
        studentId: "child-1",
        parentName: "Leo",
        parentEmail: "leo@example.com",
        confirmationText: "wrong",
        expectedChildFirstName: "Avery"
      }),
    (err) =>
      err instanceof ErasureError &&
      err.code === "invalid_erasure_request" &&
      err.details.includes("confirmation_text_mismatch")
  );
});

test("missing fields produce typed errors", () => {
  assert.throws(
    () =>
      createErasureRequest({
        studentId: "",
        parentName: "Leo",
        parentEmail: "leo@example.com",
        confirmationText: "Avery",
        expectedChildFirstName: "Avery"
      }),
    (err) => err instanceof ErasureError && err.details.includes("studentId_required")
  );
  assert.throws(
    () =>
      createErasureRequest({
        studentId: "x",
        parentName: "Leo",
        parentEmail: "not-an-email",
        confirmationText: "Avery",
        expectedChildFirstName: "Avery"
      }),
    /invalid_erasure_request/
  );
});

test("finalize stamps completedAt and copies the counts", () => {
  const req = createErasureRequest({
    studentId: "x",
    parentName: "Leo",
    parentEmail: "leo@example.com",
    confirmationText: "Avery",
    expectedChildFirstName: "Avery",
    now: FIXED
  });
  const audit = finalizeErasureAudit({
    request: req,
    recordCounts: { progress: 1, profile: 1, consent_records: 2, item_grades: 5 }
  });
  assert.ok(audit.completedAt);
  assert.equal(audit.recordCounts.consent_records, 2);
  assert.equal(audit.studentId, "x");
});

test("ERASURE_TARGETS lists every persisted data class", () => {
  for (const expected of ["progress", "profile", "consent_records", "item_grades"]) {
    assert.ok(ERASURE_TARGETS.includes(expected), `${expected} missing from ERASURE_TARGETS`);
  }
});

test("purgeStudentData removes progress, profile, and consent rows end-to-end", async () => {
  const studentId = `erase-int-${Date.now()}`;
  await saveProgressSnapshot({
    studentId,
    progress: {
      completedMissionIds: ["w1d1"],
      xp: 20,
      masteryStars: 0,
      campCoins: 5,
      reflections: { "w1d1": "good" },
      skillMastery: {},
      itemGrades: { "g6.math.w1.d1.q1": { score: 1, correct: true, attempts: 1 } }
    }
  });
  await saveProfileSnapshot({ profileId: studentId, profile: { id: studentId, firstName: "Avery" } });
  const consentRecord = createConsentRecord({
    parentName: "Leo",
    parentEmail: "leo@example.com",
    studentId,
    childFirstName: "Avery",
    method: CONSENT_METHODS.SELF_ATTEST
  });
  await appendConsentRecord({ studentId, record: consentRecord });

  const counts = await purgeStudentData(studentId);
  assert.equal(counts.progress, 1);
  assert.equal(counts.profile, 1);
  assert.equal(counts.consent_records, 1);
  assert.equal(counts.item_grades, 1);

  assert.equal(await loadProgressSnapshot(studentId), null);
  assert.equal(await loadProfileSnapshot(studentId), null);
  assert.deepEqual(await loadConsentRecords(studentId), []);
});

test("erasure audit is stored and listable after the purge", async () => {
  const studentId = `erase-audit-${Date.now()}`;
  const request = createErasureRequest({
    studentId,
    parentName: "Leo",
    parentEmail: "leo@example.com",
    confirmationText: "Avery",
    expectedChildFirstName: "Avery"
  });
  await saveProgressSnapshot({ studentId, progress: { completedMissionIds: ["w1d1"], xp: 0, masteryStars: 0, campCoins: 0, reflections: {}, skillMastery: {}, itemGrades: {} } });
  const counts = await purgeStudentData(studentId);
  const audit = finalizeErasureAudit({ request, recordCounts: counts });
  await saveErasureAudit(audit);

  const audits = await loadErasureAudits(studentId);
  assert.equal(audits.length, 1);
  assert.equal(audits[0].auditId, audit.auditId);
  assert.equal(audits[0].recordCounts.progress, 1);
});

test("purging a non-existent student is a safe no-op", async () => {
  const counts = await purgeStudentData(`never-existed-${Date.now()}`);
  assert.deepEqual(counts, { progress: 0, profile: 0, consent_records: 0, item_grades: 0 });
});
