// Guards against correct-answer position bias in multiple-choice content.
//
// Regression context: the catalog once had 79% of MC answers on index 1 and
// 175 missions where EVERY answer sat at the same position — kids noticed
// the pattern and stopped reading the questions. These tests fail if that
// creeps back in via new authored content.

import assert from "node:assert/strict";
import test from "node:test";
import { ALL_MISSIONS, getAuthoredItemById } from "../src/content/index.js";

function allMcItems(mission) {
  return [
    ...(mission.items ?? []),
    ...(mission.dailyHour?.challengeArena?.items ?? [])
  ].filter((item) => item.type === "multiple_choice");
}

test("global answer-position distribution is roughly uniform", () => {
  const counts = { 0: 0, 1: 0, 2: 0, 3: 0 };
  let total = 0;
  for (const mission of ALL_MISSIONS) {
    for (const item of allMcItems(mission)) {
      if (item.choices.length !== 4) continue;
      counts[item.answerIndex] += 1;
      total += 1;
    }
  }
  assert.ok(total > 500, `expected a large MC catalog, found ${total}`);
  for (const position of [0, 1, 2, 3]) {
    const share = counts[position] / total;
    assert.ok(
      share >= 0.15 && share <= 0.35,
      `position ${position} holds ${(share * 100).toFixed(1)}% of correct answers (allowed 15–35%). ` +
        `Rebalance new content: distribution ${JSON.stringify(counts)}`
    );
  }
});

test("no mission keys every multiple-choice answer to the same position", () => {
  const offenders = [];
  for (const mission of ALL_MISSIONS) {
    const fourChoice = allMcItems(mission).filter((item) => item.choices.length === 4);
    if (fourChoice.length < 3) continue;
    const positions = new Set(fourChoice.map((item) => item.answerIndex));
    if (positions.size === 1) offenders.push(mission.id);
  }
  assert.deepEqual(
    offenders,
    [],
    `these missions have every correct answer at the same position — a child can pattern-match instead of reading`
  );
});

test("every answerIndex points at a real choice", () => {
  for (const mission of ALL_MISSIONS) {
    for (const item of allMcItems(mission)) {
      assert.ok(
        Number.isInteger(item.answerIndex) &&
          item.answerIndex >= 0 &&
          item.answerIndex < item.choices.length,
        `${item.id}: answerIndex ${item.answerIndex} out of range for ${item.choices.length} choices`
      );
    }
  }
});

test("getAuthoredItemById resolves core and arena items with answers intact", () => {
  const missionWithArena = ALL_MISSIONS.find(
    (m) => (m.dailyHour?.challengeArena?.items ?? []).some((i) => i.type === "multiple_choice")
  );
  assert.ok(missionWithArena, "no mission with arena MC items found");

  const coreItem = missionWithArena.items.find((i) => i.type === "multiple_choice");
  const arenaItem = missionWithArena.dailyHour.challengeArena.items.find(
    (i) => i.type === "multiple_choice"
  );

  for (const source of [coreItem, arenaItem].filter(Boolean)) {
    const resolved = getAuthoredItemById(source.id);
    assert.ok(resolved, `item ${source.id} not resolvable by id`);
    assert.equal(resolved.id, source.id);
    assert.equal(resolved.answerIndex, source.answerIndex, `${source.id} lost its answerIndex`);
    assert.deepEqual(resolved.choices, source.choices, `${source.id} choices changed`);
    // Mission-level subject is folded in so mastery buckets by real subject.
    assert.equal(resolved.subject, missionWithArena.subject);
  }

  assert.equal(getAuthoredItemById("not.a.real.item"), null);
});
