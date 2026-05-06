import assert from "node:assert/strict";
import test from "node:test";
import {
  createSession,
  createFamilyAccount,
  publicSessionView,
  publicAccountView,
  verifyAccountSignIn
} from "../src/agents/accountAgent.js";

test("creates a public family account without exposing passcode hashes", () => {
  const account = createFamilyAccount({
    parentName: "Leo",
    parentEmail: "leo@example.com",
    childName: "Avery",
    parentPasscode: "parent-secret",
    childPasscode: "child-secret"
  });
  const publicView = publicAccountView(account);

  assert.equal(publicView.parent.name, "Leo");
  assert.equal(publicView.children[0].firstName, "Avery");
  assert.equal(publicView.credentials, undefined);
  assert.ok(account.credentials.parentPasscodeHash);
});

test("verifies parent and child sign-in against saved account credentials", () => {
  const account = createFamilyAccount({
    parentName: "Leo",
    childName: "Avery",
    parentPasscode: "parent-secret",
    childPasscode: "child-secret"
  });
  const parent = verifyAccountSignIn({
    account,
    role: "parent",
    passcode: "parent-secret"
  });
  const child = verifyAccountSignIn({
    account,
    role: "child",
    passcode: "child-secret"
  });
  const blocked = verifyAccountSignIn({
    account,
    role: "parent",
    passcode: "child-secret"
  });

  assert.equal(parent.status, "signed_in");
  assert.equal(parent.permissions.canApproveRewards, true);
  assert.equal(child.status, "signed_in");
  assert.equal(child.permissions.canApproveRewards, false);
  assert.equal(blocked.status, "blocked");
});

test("creates public session views with role permissions", () => {
  const session = createSession({
    accountId: "local-family",
    role: "parent",
    ttlHours: 1
  });
  const publicSession = publicSessionView(session);

  assert.equal(publicSession.role, "parent");
  assert.equal(publicSession.accountId, "local-family");
  assert.equal(publicSession.permissions.canPrepareTeacherShare, true);
});

test("hides expired sessions from public session view", () => {
  const session = createSession({
    accountId: "local-family",
    role: "child",
    ttlHours: -1
  });

  assert.equal(publicSessionView(session), null);
});
