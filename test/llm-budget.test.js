import assert from "node:assert/strict";
import test from "node:test";
import { createBudget } from "../src/agents/llm/budget.js";

test("budget allows spend under the cap and blocks once exceeded", () => {
  const budget = createBudget({ monthlyTokenCap: 1000 });
  assert.equal(budget.canSpend("child-1", 400), true);
  budget.record("child-1", 400);
  assert.equal(budget.canSpend("child-1", 500), true);
  budget.record("child-1", 500);
  assert.equal(budget.canSpend("child-1", 200), false);
});

test("budget tracks each student independently", () => {
  const budget = createBudget({ monthlyTokenCap: 100 });
  budget.record("child-a", 90);
  assert.equal(budget.canSpend("child-a", 20), false);
  assert.equal(budget.canSpend("child-b", 50), true);
});

test("budget snapshot reports usage, calls, and remaining tokens", () => {
  const budget = createBudget({ monthlyTokenCap: 500 });
  budget.record("child-1", 120);
  budget.record("child-1", 80);
  const snap = budget.snapshot("child-1");
  assert.equal(snap.used, 200);
  assert.equal(snap.remaining, 300);
  assert.equal(snap.calls, 2);
  assert.equal(snap.cap, 500);
});

test("budget rolls over when the month changes", () => {
  let current = new Date("2026-05-15T12:00:00Z");
  const budget = createBudget({ monthlyTokenCap: 100, now: () => current });
  budget.record("child-1", 90);
  assert.equal(budget.canSpend("child-1", 20), false);

  current = new Date("2026-06-01T12:00:00Z");
  assert.equal(budget.canSpend("child-1", 20), true);
  assert.equal(budget.snapshot("child-1").used, 0);
});

test("missing student id always allows spend", () => {
  const budget = createBudget({ monthlyTokenCap: 10 });
  assert.equal(budget.canSpend(null, 1_000_000), true);
  budget.record(null, 5_000); // no-op, must not throw
  assert.equal(budget.snapshot(null).remaining, 10);
});
