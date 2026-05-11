import assert from "node:assert/strict";
import test from "node:test";
import {
  authoredMissions,
  findAuthoredMission,
  findAuthoredMissionsForDay,
  getAuthoredMissionById
} from "../src/content/index.js";

const ALL_MISSIONS = Object.values(authoredMissions);

test("registry exposes all authored Grade 6 missions", () => {
  assert.ok(ALL_MISSIONS.length >= 56, `expected at least 56 authored missions, got ${ALL_MISSIONS.length}`);
  for (const mission of ALL_MISSIONS) {
    assert.equal(mission.gradeLevel, 6, `${mission.id} not Grade 6`);
    assert.ok(mission.id.length > 0);
    assert.ok(mission.subject.length > 0);
    assert.ok(typeof mission.weekNumber === "number");
    assert.ok(typeof mission.dayNumber === "number");
    assert.ok(mission.topic.length > 0);
    assert.ok(mission.hook.length > 0);
    assert.ok(Array.isArray(mission.miniLesson) && mission.miniLesson.length >= 2);
    assert.ok(mission.workedExample && Array.isArray(mission.workedExample.steps));
    assert.ok(Array.isArray(mission.items) && mission.items.length >= 5);
    assert.ok(Array.isArray(mission.misconceptionBank));
    assert.ok(mission.reflectionPrompt.length > 0);
    assert.ok(mission.estimatedMinutes > 0);
  }
});

test("every item has fields the assessment agent can grade", () => {
  for (const mission of ALL_MISSIONS) {
    for (const item of mission.items) {
      assert.ok(item.id && item.id.length > 0, `${mission.id} item missing id`);
      assert.ok(item.stem.length > 0);
      assert.ok(["multiple_choice", "numeric", "short_answer"].includes(item.type), `${item.id} unknown type`);
      assert.ok(Array.isArray(item.hintLadder) && item.hintLadder.length >= 2);
      if (item.type === "multiple_choice") {
        assert.ok(Array.isArray(item.choices) && item.choices.length >= 2);
        assert.ok(Number.isInteger(item.answerIndex));
        assert.ok(item.choices[item.answerIndex], `${item.id} answerIndex out of range`);
      }
      if (item.type === "numeric") {
        assert.equal(typeof item.answer, "number");
        assert.equal(typeof item.tolerance, "number");
      }
      if (item.type === "short_answer") {
        assert.ok(item.rubric);
        assert.ok(item.rubric.level3 && item.rubric.level2 && item.rubric.level1);
        assert.ok(item.exemplar);
      }
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

test("findAuthoredMissionsForDay returns every subject authored on that day", () => {
  const day1 = findAuthoredMissionsForDay({ gradeLevel: 6, weekNumber: 1, dayNumber: 1 });
  const subjects = day1.map((m) => m.subject).sort();
  assert.deepEqual(subjects, ["ELA/Writing", "Math"], "expected Math + ELA on Day 1");

  const day3 = findAuthoredMissionsForDay({ gradeLevel: 6, weekNumber: 1, dayNumber: 3 });
  assert.equal(day3.length, 1);
  assert.equal(day3[0].subject, "Coding/Computer Science/AI");
});

test("getAuthoredMissionById returns the exact mission", () => {
  const sci = getAuthoredMissionById("g6.sci.w1.d2");
  assert.ok(sci);
  assert.equal(sci.subject, "Science");

  assert.equal(getAuthoredMissionById("does-not-exist"), null);
});

test("Week 1 covers all six core subjects across the five days", () => {
  const weekOne = ALL_MISSIONS.filter((m) => m.weekNumber === 1);
  const subjects = new Set(weekOne.map((m) => m.subject));
  assert.ok(subjects.has("Math"));
  assert.ok(subjects.has("ELA/Writing"));
  assert.ok(subjects.has("Science"));
  assert.ok(subjects.has("Coding/Computer Science/AI"));
  assert.ok(subjects.has("History/Civics"));
  assert.ok(subjects.has("World/Current Affairs"));
});

test("Weeks 2 through 8 each have at least one authored mission per day", () => {
  for (const weekNumber of [2, 3, 4, 5, 6, 7, 8]) {
    for (let dayNumber = 1; dayNumber <= 5; dayNumber++) {
      const missions = ALL_MISSIONS.filter(
        (m) => m.weekNumber === weekNumber && m.dayNumber === dayNumber
      );
      assert.ok(
        missions.length >= 1,
        `Week ${weekNumber} Day ${dayNumber} has no authored mission`
      );
    }
  }
});

test("Week 2 emphasizes data and numbers; Week 3 emphasizes narrative", () => {
  const week2Topics = ALL_MISSIONS.filter((m) => m.weekNumber === 2).map((m) => m.topicTag);
  const week3Topics = ALL_MISSIONS.filter((m) => m.weekNumber === 3).map((m) => m.topicTag);
  // Week 2 should include at least one chart/data/measurement topic
  assert.ok(
    week2Topics.some((t) => /data|chart|measure|stat|variable|numerical/.test(t)),
    "Week 2 missing data-themed content"
  );
  // Week 3 should include at least one narrative/story topic
  assert.ok(
    week3Topics.some((t) => /narrative|sensory|dialogue|revision|story/.test(t)),
    "Week 3 missing narrative-themed content"
  );
});

test("Week 4 emphasizes coding/AI; Week 5 emphasizes earth and invention", () => {
  const week4Topics = ALL_MISSIONS.filter((m) => m.weekNumber === 4).map((m) => m.topicTag);
  const week5Topics = ALL_MISSIONS.filter((m) => m.weekNumber === 5).map((m) => m.topicTag);
  assert.ok(
    week4Topics.some((t) => /function|debug|ai|tool|logic/.test(t)),
    "Week 4 missing coding/AI-themed content"
  );
  assert.ok(
    week5Topics.some((t) => /ecosystem|engineer|scale|invention|research/.test(t)),
    "Week 5 missing earth-and-invention-themed content"
  );
});

test("each mission's topicTag plugs into the mastery model", () => {
  for (const mission of ALL_MISSIONS) {
    assert.ok(mission.topicTag && mission.topicTag.length > 0, `${mission.id} missing topicTag`);
    const skillId = `${mission.subject}:${mission.topicTag}`;
    assert.ok(skillId.includes(":"), "skill id format should be subject:topicTag");
  }
});
