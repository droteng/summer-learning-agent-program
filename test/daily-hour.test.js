import assert from "node:assert/strict";
import test from "node:test";
import { ALL_MISSIONS } from "../src/content/index.js";
import { validateDailyHour, dailyHourMinutes } from "../src/content/dailyHourSchema.js";

test("every dailyHour block that exists passes the schema validator", () => {
  for (const m of ALL_MISSIONS) {
    if (!m.dailyHour) continue;
    const problems = validateDailyHour(m.dailyHour, m.id);
    assert.equal(problems.length, 0, `dailyHour problems in ${m.id}:\n${problems.join("\n")}`);
  }
});

test("Summer Week 1 (the pilot) has a full Daily Hour on every mission", () => {
  const week1Summer = ALL_MISSIONS.filter(
    (m) => (m.season ?? "summer") === "summer" && m.weekNumber === 1 && !m.enrichment
  );
  assert.ok(week1Summer.length >= 6, `expected 6 Summer Week 1 missions, got ${week1Summer.length}`);
  for (const m of week1Summer) {
    assert.ok(m.dailyHour, `${m.id} is missing a dailyHour`);
    // Each pilot mission should now be a ~60-minute day.
    assert.ok(m.estimatedMinutes >= 55, `${m.id} estimatedMinutes should reflect the full hour`);
    // The computed daily total should land near an hour.
    const mins = dailyHourMinutes(m.dailyHour, 18);
    assert.ok(mins >= 55 && mins <= 70, `${m.id} daily hour total ${mins} should be ~60`);
  }
});

test("Daily Hour arena items carry gradeable answer fields", () => {
  for (const m of ALL_MISSIONS) {
    if (!m.dailyHour) continue;
    for (const it of m.dailyHour.challengeArena.items) {
      if (it.type === "multiple_choice") {
        assert.ok(Number.isInteger(it.answerIndex), `${it.id} needs answerIndex`);
        assert.ok(Array.isArray(it.choices) && it.choices.length >= 2, `${it.id} needs choices`);
      } else if (it.type === "numeric") {
        assert.equal(typeof it.answer, "number", `${it.id} numeric needs answer`);
        assert.equal(typeof it.tolerance, "number", `${it.id} numeric needs tolerance`);
      } else if (it.type === "short_answer") {
        assert.ok(it.rubric && it.exemplar, `${it.id} short_answer needs rubric + exemplar`);
      }
    }
  }
});

test("validateDailyHour catches a malformed block", () => {
  const bad = { warmUp: { type: "nope", title: "", prompt: "" } };
  const problems = validateDailyHour(bad, "test");
  assert.ok(problems.length > 0);
});
