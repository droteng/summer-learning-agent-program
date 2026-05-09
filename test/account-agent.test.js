import assert from "node:assert/strict";
import test from "node:test";
import {
  canAccessChildProfile,
  createSession,
  createFamilyAccount,
  createProductionAccountFoundation,
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

test("creates a production account foundation from the local family account", () => {
  const account = createFamilyAccount({
    parentName: "Leo",
    parentEmail: "leo@example.com",
    childName: "Avery",
    childId: "child-1",
    parentPasscode: "parent-secret",
    childPasscode: "child-secret"
  });
  const foundation = createProductionAccountFoundation({
    account,
    studentProfile: {
      id: "child-1",
      firstName: "Avery",
      gradeLevel: 6
    },
    parentPolicy: {
      teacherSharingEnabled: true
    }
  });

  assert.equal(foundation.version, "production-account-foundation-v1");
  assert.equal(foundation.parentAccount.emailStatus, "captured_for_verification");
  assert.equal(foundation.childProfiles[0].parentManaged, true);
  assert.equal(foundation.dataAccessPolicy.parentOwnsChildProfiles, true);
  assert.ok(foundation.sessionPlan.requiredHardening.some((item) => item.includes("Verified parent email")));
  assert.ok(foundation.migrationPlan.some((item) => item.step === "Retire shared local passcodes"));
  assert.ok(foundation.launchBlockers.includes("Hosted auth provider selected"));
});

test("child profile access is limited to the owning family account", () => {
  const account = createFamilyAccount({
    id: "family-1",
    parentName: "Leo",
    childName: "Avery",
    childId: "child-1",
    parentPasscode: "parent-secret",
    childPasscode: "child-secret"
  });
  const parentSession = createSession({
    accountId: "family-1",
    role: "parent",
    ttlHours: 1
  });
  const otherSession = createSession({
    accountId: "family-2",
    role: "parent",
    ttlHours: 1
  });
  const allowed = canAccessChildProfile({
    session: parentSession,
    childId: "child-1",
    account
  });
  const blocked = canAccessChildProfile({
    session: otherSession,
    childId: "child-1",
    account
  });

  assert.equal(allowed.status, "allowed");
  assert.equal(allowed.permissions.canApproveRewards, true);
  assert.equal(blocked.status, "blocked");
});
