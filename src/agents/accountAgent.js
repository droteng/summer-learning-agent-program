import { createHash, randomUUID } from "node:crypto";
import { getRolePermissions } from "./rolePolicyAgent.js";

const credentialVersion = "local-sha256-v1";
const productionAccountVersion = "production-account-foundation-v1";

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

export function createProductionAccountFoundation({ account, studentProfile, parentPolicy }) {
  const children = createChildProfileBlueprints({ account, studentProfile });
  const parentEmail = account?.parent?.email ?? "";
  const readinessChecks = createReadinessChecks({ account, children, parentPolicy });

  return {
    status: readinessChecks.every((check) => check.status === "ready") ? "ready_for_provider" : "needs_setup",
    version: productionAccountVersion,
    parentAccount: {
      ownerName: account?.parent?.name ?? "Parent",
      email: parentEmail,
      emailStatus: parentEmail ? "captured_for_verification" : "missing",
      requiredProviderFields: ["email", "passwordless or password credential", "verified parent consent", "recovery method"]
    },
    childProfiles: children,
    rolePermissions: {
      parent: getRolePermissions("parent"),
      child: getRolePermissions("child")
    },
    dataAccessPolicy: {
      parentOwnsChildProfiles: true,
      childCanAccessOwnLearning: true,
      childCannotApproveRewards: true,
      childCannotChangeSharing: true,
      schoolSharingRequiresParentApproval: true,
      externalIntegrationsRequireParentApproval: true
    },
    sessionPlan: {
      localMvp: "HTTP-only local session cookie tied to SQLite auth_sessions.",
      production: "Provider-backed parent account session with child role switching controlled by the parent.",
      recommendedProviderOptions: ["Clerk", "Auth0", "Supabase Auth", "Firebase Auth"],
      requiredHardening: [
        "Verified parent email before sharing or paid subscription use.",
        "Separate child profile id under the parent account.",
        "Server-side role checks on parent-only API routes.",
        "Session expiry, refresh, logout, and device revocation.",
        "Audit trail for rewards, sharing, and external integrations."
      ]
    },
    migrationPlan: createLocalMigrationPlan({ account, children }),
    readinessChecks,
    launchBlockers: readinessChecks.filter((check) => check.status !== "ready").map((check) => check.label)
  };
}

export function canAccessChildProfile({ session, childId, account }) {
  const publicSession = publicSessionView(session);

  if (!publicSession || !account) {
    return {
      status: "blocked",
      reason: "A valid session and family account are required."
    };
  }

  const child = account.children?.find((item) => item.id === childId);

  if (!child) {
    return {
      status: "blocked",
      reason: "Child profile is not part of this family account."
    };
  }

  if (publicSession.accountId !== account.id) {
    return {
      status: "blocked",
      reason: "Session account does not own this child profile."
    };
  }

  return {
    status: "allowed",
    role: publicSession.role,
    child: {
      id: child.id,
      firstName: child.firstName
    },
    permissions: publicSession.permissions
  };
}

function createChildProfileBlueprints({ account, studentProfile }) {
  const accountChildren = account?.children?.length
    ? account.children
    : [
        {
          id: studentProfile?.id ?? "mvp-preview-student",
          firstName: studentProfile?.firstName ?? "Student",
          role: "child"
        }
      ];

  return accountChildren.map((child) => ({
    id: child.id,
    firstName: child.firstName,
    role: "child",
    gradeLevel: studentProfile?.id === child.id ? studentProfile.gradeLevel : studentProfile?.gradeLevel ?? 6,
    parentManaged: true,
    productionFields: [
      "child profile id",
      "grade level",
      "selected enrichment tracks",
      "activity preferences",
      "progress snapshot",
      "sharing permissions"
    ],
    hiddenFromChild: ["parent email", "passcodes", "payment status", "teacher share controls", "external integration settings"]
  }));
}

function createReadinessChecks({ account, children, parentPolicy }) {
  return [
    {
      label: "Parent account exists",
      status: account ? "ready" : "needs_setup"
    },
    {
      label: "Parent email captured",
      status: account?.parent?.email ? "ready" : "needs_setup"
    },
    {
      label: "At least one child profile exists",
      status: children.length > 0 ? "ready" : "needs_setup"
    },
    {
      label: "Parent controls defined",
      status: parentPolicy ? "ready" : "needs_setup"
    },
    {
      label: "Hosted auth provider selected",
      status: "planned"
    },
    {
      label: "Payment/subscription ownership connected",
      status: "planned"
    }
  ];
}

function createLocalMigrationPlan({ account, children }) {
  return [
    {
      step: "Create hosted parent account",
      detail: account?.parent?.email
        ? `Use ${account.parent.email} as the parent-owned login email after verification.`
        : "Collect and verify a parent email before hosted launch."
    },
    {
      step: "Create child profile records",
      detail: `Migrate ${children.length} local child profile${children.length === 1 ? "" : "s"} under the parent account.`
    },
    {
      step: "Move local progress snapshots",
      detail: "Attach progress, rewards, reflections, squad updates, and reports to child profile ids."
    },
    {
      step: "Retire shared local passcodes",
      detail: "Replace local MVP parent/child passcodes with provider-backed parent sign-in and parent-controlled child access."
    },
    {
      step: "Enforce server role checks",
      detail: "Keep parent-only APIs protected for setup, rewards, teacher sharing, exports, and external integrations."
    }
  ];
}

function hashPasscode(passcode = "", salt) {
  return createHash("sha256").update(`${salt}:${passcode}`).digest("hex");
}
