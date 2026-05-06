import assert from "node:assert/strict";
import test from "node:test";
import {
  deleteAuthSession,
  loadFamilyAccount,
  loadAuthSession,
  loadProfileSnapshot,
  loadProgressSnapshot,
  saveFamilyAccount,
  saveAuthSession,
  saveProfileSnapshot,
  saveProgressSnapshot
} from "../src/data/localDb.js";

test("saves and loads a local progress snapshot", () => {
  const studentId = `test-student-${Date.now()}`;
  const progress = {
    completedMissionIds: ["week-1-day-1"],
    xp: 20,
    masteryStars: 0,
    campCoins: 5,
    reflections: {
      "week-1-day-1": "I learned how to explain an algorithm."
    }
  };

  const saved = saveProgressSnapshot({ studentId, progress });
  const loaded = loadProgressSnapshot(studentId);

  assert.ok(saved.updatedAt);
  assert.deepEqual(loaded, progress);
});

test("saves and loads a parent onboarding profile", () => {
  const profile = {
    id: "db-profile-student",
    firstName: "Avery",
    gradeLevel: 6,
    interests: ["coding", "science"],
    selectedEnrichmentTracks: ["healthWellness", "financialLiteracy"],
    faithSetting: "parent-controlled",
    activityPreferences: {
      outdoorAllowed: true
    }
  };

  const saved = saveProfileSnapshot({
    profileId: "test-parent-profile",
    profile
  });
  const loaded = loadProfileSnapshot("test-parent-profile");

  assert.equal(saved.profile.firstName, "Avery");
  assert.deepEqual(loaded, profile);
});

test("saves and loads a local family account", () => {
  const account = {
    id: "test-family",
    parent: {
      name: "Leo",
      email: "leo@example.com"
    },
    children: [{ id: "student-test", firstName: "Avery", role: "child" }],
    credentials: {
      version: "test",
      parentSalt: "a",
      childSalt: "b",
      parentPasscodeHash: "hash-a",
      childPasscodeHash: "hash-b"
    }
  };
  const saved = saveFamilyAccount({
    accountId: "test-family",
    account
  });
  const loaded = loadFamilyAccount("test-family");

  assert.ok(saved.updatedAt);
  assert.equal(loaded.parent.name, "Leo");
  assert.equal(loaded.credentials.parentPasscodeHash, "hash-a");
});

test("saves, loads, and deletes an auth session", () => {
  const session = {
    id: `session-${Date.now()}`,
    accountId: "test-family",
    role: "parent",
    createdAt: new Date().toISOString(),
    expiresAt: new Date(Date.now() + 60_000).toISOString()
  };

  saveAuthSession(session);
  const loaded = loadAuthSession(session.id);
  const deleted = deleteAuthSession(session.id);

  assert.equal(loaded.role, "parent");
  assert.equal(deleted.deleted, true);
  assert.equal(loadAuthSession(session.id), null);
});
