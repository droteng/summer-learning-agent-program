import assert from "node:assert/strict";
import test from "node:test";
import {
  applyParentAction,
  PARENT_ACTIONS,
  ParentActionError
} from "../src/agents/parentActionAgent.js";

const FIXED_NOW = () => "2026-05-10T12:00:00Z";

function baseProgress() {
  return {
    completedMissionIds: [],
    rewardRequests: [
      { id: "reward-1", status: "pending_parent", requestedReward: "Park outing" },
      { id: "reward-2", status: "approved", requestedReward: "Movie night" }
    ],
    friendInvites: [
      { id: "invite-1", status: "needs_parent_approval", friendName: "Jordan" },
      { id: "invite-2", status: "approved", friendName: "Riley" }
    ]
  };
}

test("approves a pending reward request", () => {
  const result = applyParentAction({
    progress: baseProgress(),
    action: PARENT_ACTIONS.APPROVE_REWARD,
    id: "reward-1",
    now: FIXED_NOW
  });
  assert.equal(result.changed, true);
  assert.equal(result.item.status, "approved");
  assert.equal(result.item.decidedBy, "parent");
  assert.equal(result.item.decidedAt, "2026-05-10T12:00:00Z");
  assert.equal(result.progress.rewardRequests[0].status, "approved");
  // Other items untouched
  assert.equal(result.progress.rewardRequests[1].status, "approved");
});

test("declines a pending reward request", () => {
  const result = applyParentAction({
    progress: baseProgress(),
    action: PARENT_ACTIONS.DECLINE_REWARD,
    id: "reward-1",
    now: FIXED_NOW
  });
  assert.equal(result.item.status, "declined");
});

test("approves a pending friend invite", () => {
  const result = applyParentAction({
    progress: baseProgress(),
    action: PARENT_ACTIONS.APPROVE_INVITE,
    id: "invite-1",
    now: FIXED_NOW
  });
  assert.equal(result.changed, true);
  assert.equal(result.progress.friendInvites[0].status, "approved");
});

test("idempotent: already-approved items return unchanged", () => {
  const result = applyParentAction({
    progress: baseProgress(),
    action: PARENT_ACTIONS.APPROVE_REWARD,
    id: "reward-2"
  });
  assert.equal(result.changed, false);
  assert.equal(result.reason, "already_resolved");
});

test("missing item raises a typed error", () => {
  assert.throws(
    () =>
      applyParentAction({
        progress: baseProgress(),
        action: PARENT_ACTIONS.APPROVE_REWARD,
        id: "nope"
      }),
    (err) => err instanceof ParentActionError && err.code === "reward_request_not_found"
  );
});

test("rejects unknown actions", () => {
  assert.throws(
    () =>
      applyParentAction({
        progress: baseProgress(),
        action: "bribe",
        id: "reward-1"
      }),
    (err) => err instanceof ParentActionError && err.code === "unknown_action"
  );
});

test("rejects missing progress and missing id", () => {
  assert.throws(
    () => applyParentAction({ progress: null, action: PARENT_ACTIONS.APPROVE_REWARD, id: "x" }),
    /missing_progress/
  );
  assert.throws(
    () => applyParentAction({ progress: baseProgress(), action: PARENT_ACTIONS.APPROVE_REWARD, id: "" }),
    /missing_id/
  );
});

test("returns the same progress reference when unchanged", () => {
  const progress = baseProgress();
  const result = applyParentAction({
    progress,
    action: PARENT_ACTIONS.APPROVE_REWARD,
    id: "reward-2"
  });
  assert.equal(result.progress, progress, "unchanged result should reuse the same object");
});
