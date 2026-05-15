import { randomBytes, randomUUID } from "node:crypto";
import { getRolePermissions } from "./rolePolicyAgent.js";
import { hashPassword, verifyPassword } from "./passwordAgent.js";
import {
  loadFamilyAccount,
  loadFamilyAccountByEmail,
  saveFamilyAccount,
  loadAuthSession,
  saveAuthSession,
  deleteAuthSession
} from "../data/db.js";

// Legacy demo auth — kept so existing /api/auth + auth-agent.test.js
// still compile while new account-based auth ramps up.

export const defaultAuthSettings = {
  parentPasscode: "parent-2468",
  childPasscode: "camp-1234"
};

export function verifyRoleSignIn({ role, passcode, authSettings = defaultAuthSettings }) {
  const normalizedRole = role === "parent" ? "parent" : "child";
  const expectedPasscode =
    normalizedRole === "parent" ? authSettings.parentPasscode : authSettings.childPasscode;

  if (!passcode || passcode !== expectedPasscode) {
    return {
      status: "blocked",
      role: normalizedRole,
      reason: "Passcode did not match this role."
    };
  }

  return {
    status: "signed_in",
    role: normalizedRole,
    permissions: getRolePermissions(normalizedRole)
  };
}

// ─── Real account-based auth ──────────────────────────────────────

const SESSION_TTL_HOURS = 24 * 14; // 2 weeks
export const COOKIE_NAME = "dsa_session";

function normalizeEmail(email) {
  return String(email ?? "").trim().toLowerCase();
}

function newSessionId() {
  return randomBytes(32).toString("hex");
}

export async function signupParent({ email, password, parentName, childName, childPin }) {
  const normEmail = normalizeEmail(email);
  if (!normEmail || !normEmail.includes("@")) {
    return { status: "error", code: "invalid_email", message: "Enter a valid email address." };
  }
  if (typeof password !== "string" || password.length < 8) {
    return { status: "error", code: "weak_password", message: "Password must be at least 8 characters." };
  }
  const existing = await loadFamilyAccountByEmail(normEmail);
  if (existing) {
    return { status: "error", code: "email_taken", message: "An account with this email already exists." };
  }

  const accountId = `family_${randomUUID()}`;
  const childId = `child_${randomUUID()}`;
  const passwordHash = await hashPassword(password);
  const childPinHash = childPin ? await hashPassword(String(childPin).padStart(8, "0")) : null;
  const createdAt = new Date().toISOString();

  const account = {
    id: accountId,
    createdAt,
    updatedAt: createdAt,
    parent: {
      name: parentName?.trim() || "Parent",
      email: normEmail
    },
    children: [
      {
        id: childId,
        firstName: childName?.trim() || "Student",
        gradeLevel: 6,
        role: "child"
      }
    ],
    credentials: {
      version: "scrypt-v1",
      passwordHash,
      childPinHash
    }
  };

  await saveFamilyAccount({ accountId, account });
  const session = await createAccountSession({ accountId, role: "parent", childId: null });
  return { status: "ok", account, sessionId: session.id };
}

export async function signinParent({ email, password }) {
  const normEmail = normalizeEmail(email);
  if (!normEmail) {
    return { status: "error", code: "invalid_email", message: "Enter your email." };
  }
  const account = await loadFamilyAccountByEmail(normEmail);
  if (!account || !account?.credentials?.passwordHash) {
    return { status: "error", code: "bad_credentials", message: "Email or password is incorrect." };
  }
  const ok = await verifyPassword(password, account.credentials.passwordHash);
  if (!ok) {
    return { status: "error", code: "bad_credentials", message: "Email or password is incorrect." };
  }
  const session = await createAccountSession({ accountId: account.id, role: "parent", childId: null });
  return { status: "ok", account, sessionId: session.id };
}

export async function signinChild({ email, pin }) {
  const normEmail = normalizeEmail(email);
  const account = await loadFamilyAccountByEmail(normEmail);
  if (!account) {
    return { status: "error", code: "bad_credentials", message: "Email or PIN is incorrect." };
  }
  const hash = account?.credentials?.childPinHash;
  if (!hash) {
    return { status: "error", code: "no_pin_set", message: "Ask a parent to set up a PIN first." };
  }
  const ok = await verifyPassword(String(pin ?? "").padStart(8, "0"), hash);
  if (!ok) {
    return { status: "error", code: "bad_credentials", message: "Email or PIN is incorrect." };
  }
  const child = account?.children?.[0];
  const session = await createAccountSession({
    accountId: account.id,
    role: "child",
    childId: child?.id ?? null
  });
  return { status: "ok", account, childId: child?.id ?? null, sessionId: session.id };
}

export async function createAccountSession({
  accountId,
  role,
  childId = null,
  ttlHours = SESSION_TTL_HOURS
}) {
  const id = newSessionId();
  const createdAt = new Date();
  const expiresAt = new Date(createdAt.getTime() + ttlHours * 60 * 60 * 1000);
  const session = {
    id,
    accountId,
    role: role === "parent" ? "parent" : "child",
    childId,
    createdAt: createdAt.toISOString(),
    expiresAt: expiresAt.toISOString()
  };
  await saveAuthSession(session);
  return session;
}

export async function readSession(sessionId) {
  if (!sessionId) return null;
  const session = await loadAuthSession(sessionId);
  if (!session) return null;
  if (new Date(session.expiresAt).getTime() <= Date.now()) {
    try {
      await deleteAuthSession(sessionId);
    } catch {
      /* ignore */
    }
    return null;
  }
  return session;
}

export async function signout(sessionId) {
  if (!sessionId) return;
  try {
    await deleteAuthSession(sessionId);
  } catch {
    /* ignore */
  }
}

export async function currentUser(sessionId) {
  const session = await readSession(sessionId);
  if (!session) return null;
  const account = await loadFamilyAccount(session.accountId);
  if (!account) return null;
  const child = account.children?.find((c) => c.id === session.childId) ?? account.children?.[0] ?? null;
  return {
    sessionId,
    role: session.role,
    accountId: account.id,
    parentEmail: account.parent?.email ?? null,
    parentName: account.parent?.name ?? null,
    childId: child?.id ?? null,
    childName: child?.firstName ?? null
  };
}
