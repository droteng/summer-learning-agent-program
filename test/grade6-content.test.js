import assert from "node:assert/strict";
import test from "node:test";
import {
  authoredMissions,
  findAuthoredMission,
  grade6MathWeek1Day1
} from "../src/content/grade6/week1/math-day1.js";

test("Grade 6 Math Week 1 Day 1 is fully authored", () => {
  const mission = grade6MathWeek1Day1;
  assert.equal(mission.gradeLevel, 6);
  assert.equal(mission.subject, "Math");
  assert.ok(mission.miniLesson.length >= 2);
  assert.ok(mission.workedExample.steps.length >= 3);
  assert.ok(mission.items.length >= 5);
  assert.ok(mission.items.every((item) => item.hintLadder.length >= 2));
  assert.ok(mission.misconceptionBank.length >= 2);
  assert.ok(mission.standardsRefs.some((ref) => ref.startsWith("CCSS.6.RP")));
});

test("multiple-choice and numeric items expose answers the assessment agent can grade", () => {
  for (const item of grade6MathWeek1Day1.items) {
    if (item.type === "multiple_choice") {
      assert.ok(Number.isInteger(item.answerIndex));
      assert.ok(item.choices[item.answerIndex]);
    }
    if (item.type === "numeric") {
      assert.equal(typeof item.answer, "number");
      assert.equal(typeof item.tolerance, "number");
    }
    if (item.type === "short_answer") {
      assert.ok(item.rubric);
      assert.ok(item.exemplar);
    }
  }
});

test("findAuthoredMission resolves by grade, week, day, subject", () => {
  const found = findAuthoredMission({
    gradeLevel: 6,
    weekNumber: 1,
    dayNumber: 1,
    subject: "Math"
  });
  assert.equal(found?.id, "g6.math.w1.d1");

  const missing = findAuthoredMission({
    gradeLevel: 6,
    weekNumber: 99,
    dayNumber: 99,
    subject: "Math"
  });
  assert.equal(missing, undefined);
});

test("authoredMissions index is keyed by mission id", () => {
  assert.equal(authoredMissions[grade6MathWeek1Day1.id], grade6MathWeek1Day1);
});
