// Parent action handler — mutates persisted progress in response to approve
// or decline actions on reward requests and friend invites. Pure function so
// it can be unit-tested without touching the database.

const ACTIONS = Object.freeze({
  APPROVE_REWARD: "approve_reward",
  DECLINE_REWARD: "decline_reward",
  APPROVE_INVITE: "approve_invite",
  DECLINE_INVITE: "decline_invite"
});

export function applyParentAction({ progress, action, id, now = () => new Date().toISOString() }) {
  if (!progress || typeof progress !== "object") {
    throw new ParentActionError("missing_progress");
  }
  if (!Object.values(ACTIONS).includes(action)) {
    throw new ParentActionError("unknown_action");
  }
  if (!id || typeof id !== "string") {
    throw new ParentActionError("missing_id");
  }

  if (action === ACTIONS.APPROVE_REWARD || action === ACTIONS.DECLINE_REWARD) {
    return updateRewardRequest({ progress, action, id, now });
  }
  return updateFriendInvite({ progress, action, id, now });
}

function updateRewardRequest({ progress, action, id, now }) {
  const list = Array.isArray(progress.rewardRequests) ? progress.rewardRequests : [];
  const idx = list.findIndex((r) => r?.id === id);
  if (idx === -1) {
    throw new ParentActionError("reward_request_not_found");
  }
  const next = list.slice();
  const target = next[idx];
  if (target.status !== "pending_parent") {
    return { progress, changed: false, reason: "already_resolved" };
  }
  next[idx] = {
    ...target,
    status: action === ACTIONS.APPROVE_REWARD ? "approved" : "declined",
    decidedAt: now(),
    decidedBy: "parent"
  };
  return {
    progress: { ...progress, rewardRequests: next },
    changed: true,
    item: next[idx]
  };
}

function updateFriendInvite({ progress, action, id, now }) {
  const list = Array.isArray(progress.friendInvites) ? progress.friendInvites : [];
  const idx = list.findIndex((r) => r?.id === id);
  if (idx === -1) {
    throw new ParentActionError("friend_invite_not_found");
  }
  const next = list.slice();
  const target = next[idx];
  if (target.status !== "needs_parent_approval") {
    return { progress, changed: false, reason: "already_resolved" };
  }
  next[idx] = {
    ...target,
    status: action === ACTIONS.APPROVE_INVITE ? "approved" : "declined",
    decidedAt: now(),
    decidedBy: "parent"
  };
  return {
    progress: { ...progress, friendInvites: next },
    changed: true,
    item: next[idx]
  };
}

export const PARENT_ACTIONS = ACTIONS;

export class ParentActionError extends Error {
  constructor(code) {
    super(code);
    this.name = "ParentActionError";
    this.code = code;
  }
}
