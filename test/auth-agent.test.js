import assert from "node:assert/strict";
import test from "node:test";
import { verifyRoleSignIn } from "../src/agents/authAgent.js";

test("allows parent sign-in with the local MVP parent passcode", () => {
  const result = verifyRoleSignIn({
    role: "parent",
    passcode: "parent-2468"
  });

  assert.equal(result.status, "signed_in");
  assert.equal(result.role, "parent");
  assert.equal(result.permissions.canApproveRewards, true);
});

test("blocks parent controls when the passcode is wrong", () => {
  const result = verifyRoleSignIn({
    role: "parent",
    passcode: "camp-1234"
  });

  assert.equal(result.status, "blocked");
  assert.equal(result.role, "parent");
});

test("allows child sign-in without parent-only permissions", () => {
  const result = verifyRoleSignIn({
    role: "child",
    passcode: "camp-1234"
  });

  assert.equal(result.status, "signed_in");
  assert.equal(result.role, "child");
  assert.equal(result.permissions.canCompleteMissions, true);
  assert.equal(result.permissions.canApproveRewards, false);
});
