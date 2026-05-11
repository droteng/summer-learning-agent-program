import assert from "node:assert/strict";
import test from "node:test";
import {
  appendCompletion,
  buildCompletionEntry,
  computeStreak,
  STREAK_MILESTONES,
  streakMessage
} from "../src/agents/streakAgent.js";

function dayIso(daysFromToday, hourOfDay = 10) {
  const d = new Date();
  d.setDate(d.getDate() + daysFromToday);
  d.setHours(hourOfDay, 0, 0, 0);
  return d.toISOString();
}

test("no completions yields zero streak with first milestone as next", () => {
  const streak = computeStreak({ completionLog: [] });
  assert.equal(streak.currentDays, 0);
  assert.equal(streak.longestDays, 0);
  assert.equal(streak.nextMilestone, STREAK_MILESTONES[0]);
  assert.equal(streak.lastActivityIso, null);
});

test("single completion today gives a one-day streak", () => {
  const streak = computeStreak({
    completionLog: [{ missionId: "w1d1", completedAt: dayIso(0) }]
  });
  assert.equal(streak.currentDays, 1);
  assert.equal(streak.longestDays, 1);
});

test("consecutive days grow the streak", () => {
  const streak = computeStreak({
    completionLog: [
      { missionId: "w1d1", completedAt: dayIso(-2) },
      { missionId: "w1d2", completedAt: dayIso(-1) },
      { missionId: "w1d3", completedAt: dayIso(0) }
    ]
  });
  assert.equal(streak.currentDays, 3);
  assert.equal(streak.longestDays, 3);
  assert.equal(streak.atMilestone, true, "3 is a milestone");
});

test("a missed day breaks the streak when no freezes are available", () => {
  const streak = computeStreak({
    completionLog: [
      { missionId: "w1d1", completedAt: dayIso(-5) },
      { missionId: "w1d2", completedAt: dayIso(-4) },
      // gap on day -3 — streak should reset
      { missionId: "w1d3", completedAt: dayIso(-2) },
      { missionId: "w1d4", completedAt: dayIso(-1) },
      { missionId: "w1d5", completedAt: dayIso(0) }
    ]
  });
  assert.equal(streak.currentDays, 3, "current run is the last 3 consecutive days");
  assert.equal(streak.longestDays, 3, "previous run also 2; current run wins");
});

test("a streak freeze covers a single missed day", () => {
  const streak = computeStreak({
    completionLog: [
      { missionId: "w1d1", completedAt: dayIso(-3) },
      // gap on day -2
      { missionId: "w1d2", completedAt: dayIso(-1) },
      { missionId: "w1d3", completedAt: dayIso(0) }
    ],
    streakFreezesAvailable: 1
  });
  assert.equal(streak.currentDays, 4, "freeze stitches across the gap");
  assert.equal(streak.freezesUsed, 1);
  assert.equal(streak.freezesAvailable, 0);
});

test("not active today and not yesterday yields zero current streak", () => {
  const streak = computeStreak({
    completionLog: [
      { missionId: "w1d1", completedAt: dayIso(-5) },
      { missionId: "w1d2", completedAt: dayIso(-4) },
      { missionId: "w1d3", completedAt: dayIso(-3) }
    ]
  });
  assert.equal(streak.currentDays, 0);
  assert.equal(streak.longestDays, 3, "history is preserved as longest");
  assert.ok(streak.lastActivityIso);
});

test("duplicate completions on the same day don't double-count", () => {
  const streak = computeStreak({
    completionLog: [
      { missionId: "w1d1", completedAt: dayIso(-1, 9) },
      { missionId: "w1d2", completedAt: dayIso(-1, 14) },
      { missionId: "w1d3", completedAt: dayIso(0) }
    ]
  });
  assert.equal(streak.currentDays, 2);
});

test("yesterday-only streak still counts as active", () => {
  const streak = computeStreak({
    completionLog: [
      { missionId: "w1d1", completedAt: dayIso(-2) },
      { missionId: "w1d2", completedAt: dayIso(-1) }
    ]
  });
  assert.equal(streak.currentDays, 2);
});

test("appendCompletion ignores duplicate mission ids", () => {
  const empty = { completionLog: [] };
  const once = appendCompletion(empty, { missionId: "w1d1", completedAt: dayIso(0) });
  const twice = appendCompletion(once, { missionId: "w1d1", completedAt: dayIso(0) });
  assert.equal(twice.completionLog.length, 1);
});

test("buildCompletionEntry stamps the current ISO when no completedAt supplied", () => {
  const fixed = () => new Date("2026-05-10T12:00:00Z");
  const entry = buildCompletionEntry({ missionId: "x" }, { now: fixed });
  assert.equal(entry.completedAt, "2026-05-10T12:00:00.000Z");
});

test("streakMessage covers zero, milestone, and progress states", () => {
  assert.match(streakMessage({ currentDays: 0 }), /Start your streak/);
  assert.match(streakMessage({ currentDays: 3, atMilestone: true, nextMilestone: 5 }), /milestone/i);
  assert.match(streakMessage({ currentDays: 4, atMilestone: false, nextMilestone: 5 }), /one more/i);
  assert.match(streakMessage({ currentDays: 2, atMilestone: false, nextMilestone: 5 }), /3 more/);
});

test("STREAK_MILESTONES is sorted ascending", () => {
  for (let i = 1; i < STREAK_MILESTONES.length; i++) {
    assert.ok(STREAK_MILESTONES[i] > STREAK_MILESTONES[i - 1]);
  }
});

test("completeMission appends a completion-log entry", async () => {
  const { completeMission, createEmptyProgress } = await import("../src/agents/progressAgent.js");
  const mission = {
    dayNumber: 1,
    rewardOpportunity: { xp: 20, masteryStars: 0, campCoins: 5 }
  };
  const fixed = () => new Date("2026-05-10T12:00:00Z");
  const next = completeMission({ progress: createEmptyProgress(), weekNumber: 1, mission, now: fixed });
  assert.equal(next.completionLog.length, 1);
  assert.equal(next.completionLog[0].missionId, "week-1-day-1");
  assert.equal(next.completionLog[0].completedAt, "2026-05-10T12:00:00.000Z");
});

test("completeMission is idempotent on the completion log", async () => {
  const { completeMission, createEmptyProgress } = await import("../src/agents/progressAgent.js");
  const mission = {
    dayNumber: 1,
    rewardOpportunity: { xp: 20, masteryStars: 0, campCoins: 5 }
  };
  const once = completeMission({ progress: createEmptyProgress(), weekNumber: 1, mission });
  const twice = completeMission({ progress: once, weekNumber: 1, mission });
  assert.equal(twice.completionLog.length, 1);
});
