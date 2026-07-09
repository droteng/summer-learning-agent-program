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
import { loadFamilyAccount } from "../../src/data/db.js";

export type CurrentUser = {
  sessionId: string;
  role: "parent" | "child";
  accountId: string;
  parentEmail: string | null;
  parentName: string | null;
  emailVerified: boolean;
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

// ─── API-route authorization (returns JSON-friendly results, no redirects) ───

// Ids used by the marketing preview and the pre-auth prototype. They hold
// shared demo data only — never real child records — so unauthenticated
// access to them stays allowed.
const DEMO_STUDENT_IDS = new Set(["mvp-preview-student", "mvp-preview-profile"]);

export function isDemoStudentId(id: string | null | undefined): boolean {
  return typeof id === "string" && DEMO_STUDENT_IDS.has(id);
}

// Single shape (not a discriminated union): this project compiles with
// strict:false, where TS does not narrow `!access.ok`. On success `user`
// is set (null for demo ids); on failure `status`/`error` are set.
export type StudentAccess = {
  ok: boolean;
  user?: CurrentUser | null;
  status?: number;
  error?: string;
};

// Authorize the current session to act on `studentId`.
//
// - Demo ids pass without a session (unless parentOnly).
// - Child sessions may only touch their own studentId.
// - Parent sessions may touch any child in their account.
// - `parentOnly` additionally rejects child sessions (consent, erasure,
//   approvals — actions COPPA reserves for the parent).
export async function authorizeStudentAccess(
  studentId: string | null | undefined,
  opts: { parentOnly?: boolean } = {}
): Promise<StudentAccess> {
  if (!opts.parentOnly && isDemoStudentId(studentId)) {
    return { ok: true, user: null };
  }
  const user = await getCurrentUser();
  if (!user) return { ok: false, status: 401, error: "unauthorized" };
  if (opts.parentOnly && user.role !== "parent") {
    return { ok: false, status: 403, error: "forbidden" };
  }
  if (typeof studentId !== "string" || studentId.length === 0) {
    return { ok: false, status: 400, error: "missing_student_id" };
  }
  if (user.role === "child") {
    if (user.childId !== studentId) return { ok: false, status: 403, error: "forbidden" };
    return { ok: true, user };
  }
  const account = await loadFamilyAccount(user.accountId);
  const children: Array<{ id?: string }> = Array.isArray(account?.children) ? account.children : [];
  if (!children.some((c) => c?.id === studentId)) {
    return { ok: false, status: 403, error: "forbidden" };
  }
  return { ok: true, user };
}

// Require any signed-in session (parent or child) without binding to a
// specific student. Used by endpoints that spend money (LLM/image calls)
// where the resource being protected is the budget, not a record.
export async function requireApiUser(): Promise<StudentAccess> {
  const user = await getCurrentUser();
  if (!user) return { ok: false, status: 401, error: "unauthorized" };
  return { ok: true, user };
}
