import assert from "node:assert/strict";
import test from "node:test";
import { loadProgressSnapshot, saveProgressSnapshot } from "../src/data/localDb.js";

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

