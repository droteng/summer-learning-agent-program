import { getRolePermissions } from "./rolePolicyAgent.js";

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
