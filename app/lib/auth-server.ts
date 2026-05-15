// Server-side helper to read the current user from the dsa_session cookie.
//
// Usage in a server component:
//   const user = await getCurrentUser();
//   if (!user) redirect("/parent/signin");
//
// Returns null if no cookie, expired session, or missing account.

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
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

// Require a signed-in parent (or child whose parent has a session).
// Returns the resolved studentId or redirects to the given sign-in page.
//
// `signInPath` defaults to /parent/signin. Pass "/child/signin" from
// kid-facing routes so the redirect lands on the right form.
export async function requireStudent(
  signInPath: "/parent/signin" | "/child/signin" = "/parent/signin"
): Promise<{
  user: CurrentUser;
  studentId: string;
  studentName: string;
  parentName: string | null;
}> {
  const user = await getCurrentUser();
  if (!user || !user.childId) {
    redirect(signInPath);
  }
  return {
    user: user!,
    studentId: user!.childId!,
    studentName: user!.childName ?? "Student",
    parentName: user!.parentName
  };
}

// Like requireStudent but parent-only. Child sessions are redirected
// to /child/map so they can't peek at the parent dashboard.
export async function requireParent() {
  const user = await getCurrentUser();
  if (!user) redirect("/parent/signin");
  if (user.role === "child") redirect("/child/map");
  return {
    user,
    studentId: user.childId ?? "",
    studentName: user.childName ?? "Student",
    parentName: user.parentName
  };
}
