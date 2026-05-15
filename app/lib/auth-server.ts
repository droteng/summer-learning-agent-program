// Server-side helper to read the current user from the dsa_session cookie.
//
// Usage in a server component:
//   const user = await getCurrentUser();
//   if (!user) redirect("/parent/signin");
//
// Returns null if no cookie, expired session, or missing account.

import { cookies } from "next/headers";
import { COOKIE_NAME, currentUser } from "../../src/agents/authAgent.js";

export type CurrentUser = {
  sessionId: string;
  role: "parent" | "child";
  accountId: string;
  parentEmail: string | null;
  parentName: string | null;
  childId: string | null;
  childName: string | null;
};

export async function getCurrentUser(): Promise<CurrentUser | null> {
  const store = await cookies();
  const sessionId = store.get(COOKIE_NAME)?.value;
  if (!sessionId) return null;
  const user = await currentUser(sessionId);
  return user as CurrentUser | null;
}

// Identity resolver for the dashboards. Order of preference:
//   1. Real session cookie (parent or child role)
//   2. ?student= query param (legacy / demo fallback)
//   3. "demo-student" hardcoded fallback
//
// `requestedStudent` is what the page parsed out of searchParams.
export async function resolveStudentIdentity(requestedStudent: string | null) {
  const user = await getCurrentUser();
  if (user?.childId) {
    return {
      studentId: user.childId,
      studentName: user.childName ?? "Student",
      role: user.role,
      isAuthenticated: true,
      isDemo: false,
      parentName: user.parentName
    };
  }
  if (requestedStudent && requestedStudent.length > 0) {
    return {
      studentId: requestedStudent,
      studentName: null,
      role: null,
      isAuthenticated: false,
      isDemo: requestedStudent === "demo-student",
      parentName: null
    };
  }
  return {
    studentId: "demo-student",
    studentName: null,
    role: null,
    isAuthenticated: false,
    isDemo: true,
    parentName: null
  };
}
