import assert from "node:assert/strict";
import test from "node:test";
import { getRolePermissions } from "../src/agents/rolePolicyAgent.js";

test("parent role can approve rewards and teacher sharing", () => {
  const permissions = getRolePermissions("parent");

  assert.equal(permissions.canChangeSetup, true);
  assert.equal(permissions.canApproveRewards, true);
  assert.equal(permissions.canPrepareTeacherShare, true);
  assert.equal(permissions.canCompleteMissions, true);
});

test("child role can learn but not approve parent-controlled actions", () => {
  const permissions = getRolePermissions("child");

  assert.equal(permissions.canChangeSetup, false);
  assert.equal(permissions.canApproveRewards, false);
  assert.equal(permissions.canPrepareTeacherShare, false);
  assert.equal(permissions.canCompleteMissions, true);
  assert.equal(permissions.canWriteReflections, true);
});

