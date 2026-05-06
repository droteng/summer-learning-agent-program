import { createHash, randomUUID } from "node:crypto";
import { getRolePermissions } from "./rolePolicyAgent.js";

const credentialVersion = "local-sha256-v1";

export function createFamilyAccount({
  id = "local-family",
  parentName,
  parentEmail,
  childName,
  childId = "mvp-preview-student",
  parentPasscode,
  childPasscode
}) {
  const createdAt = new Date().toISOString();
  const parentSalt = randomUUID();
  const childSalt = randomUUID();

  return {
    id,
    createdAt,
    updatedAt: createdAt,
    parent: {
      name: parentName || "Parent",
      email: parentEmail || ""
    },
    children: [
      {
        id: childId,
        firstName: childName || "Student",
        role: "child"
      }
    ],
    credentials: {
      version: credentialVersion,
      parentSalt,
      childSalt,
      parentPasscodeHash: hashPasscode(parentPasscode, parentSalt),
      childPasscodeHash: hashPasscode(childPasscode, childSalt)
    }
  };
}

export function publicAccountView(account) {
  if (!account) {
    return null;
  }

  return {
    id: account.id,
    createdAt: account.createdAt,
    updatedAt: account.updatedAt,
    parent: account.parent,
    children: account.children,
    credentialVersion: account.credentials?.version
  };
}

export function verifyAccountSignIn({ account, role, passcode }) {
  const normalizedRole = role === "parent" ? "parent" : "child";
  const salt = normalizedRole === "parent" ? account.credentials.parentSalt : account.credentials.childSalt;
  const expected =
    normalizedRole === "parent"
      ? account.credentials.parentPasscodeHash
      : account.credentials.childPasscodeHash;

  if (!passcode || hashPasscode(passcode, salt) !== expected) {
    return {
      status: "blocked",
      role: normalizedRole,
      reason: "Passcode did not match this account role."
    };
  }

  return {
    status: "signed_in",
    role: normalizedRole,
    account: publicAccountView(account),
    permissions: getRolePermissions(normalizedRole)
  };
}

export function createSession({ accountId = "local-family", role, ttlHours = 24 }) {
  const createdAt = new Date();
  const expiresAt = new Date(createdAt.getTime() + ttlHours * 60 * 60 * 1000);

  return {
    id: randomUUID(),
    accountId,
    role: role === "parent" ? "parent" : "child",
    createdAt: createdAt.toISOString(),
    expiresAt: expiresAt.toISOString()
  };
}

export function publicSessionView(session) {
  if (!session || new Date(session.expiresAt).getTime() <= Date.now()) {
    return null;
  }

  return {
    id: session.id,
    accountId: session.accountId,
    role: session.role,
    expiresAt: session.expiresAt,
    permissions: getRolePermissions(session.role)
  };
}

function hashPasscode(passcode = "", salt) {
  return createHash("sha256").update(`${salt}:${passcode}`).digest("hex");
}
