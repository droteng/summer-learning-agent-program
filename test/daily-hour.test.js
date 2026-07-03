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

test("every Grade 6 core mission (all four seasons) has a full Daily Hour", () => {
  // The rollout: every non-enrichment Grade 6 mission across all four live
  // seasons is a ~60-minute, 6-segment day. (Pilot = Summer Week 1; now the
  // full year: Summer + Fall + Winter + Spring.)
  const core = ALL_MISSIONS.filter(
    (m) =>
      m.gradeLevel === 6 &&
      ["summer", "fall", "winter", "spring"].includes(m.season ?? "summer") &&
      !m.enrichment
  );
  assert.ok(core.length >= 161, `expected 161+ core missions, got ${core.length}`);
  for (const m of core) {
    assert.ok(m.dailyHour, `${m.id} is missing a dailyHour`);
    // Each mission should now be a ~60-minute day.
    assert.ok(m.estimatedMinutes >= 55, `${m.id} estimatedMinutes should reflect the full hour`);
    // The computed daily total should land near an hour.
    const mins = dailyHourMinutes(m.dailyHour, 18);
    assert.ok(mins >= 55 && mins <= 70, `${m.id} daily hour total ${mins} should be ~60`);
  }
});

test("Daily Hour badge ids are unique across the whole program", () => {
  const withDH = ALL_MISSIONS.filter((m) => m.dailyHour);
  const ids = withDH.map((m) => m.dailyHour.reflectAndReward.badge.id);
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
  assert.equal(dupes.length, 0, `duplicate badge ids: ${[...new Set(dupes)].join(", ")}`);
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
