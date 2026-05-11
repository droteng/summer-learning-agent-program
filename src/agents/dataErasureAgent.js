// COPPA data-erasure agent.
//
// COPPA gives parents the right to delete their child's data. This module
// captures the *request*, validates the parent's confirmation, and produces
// an audit record. The actual purge happens in the data layer; the audit
// outlives the data so we can prove deletion later if asked.
//
// Design choices:
//   - Confirmation requires the parent to retype the child's first name,
//     matching GitHub-style "type the repo name to delete" patterns. Reduces
//     accidental clicks.
//   - The audit log is append-only and survives the purge. It's the only
//     record that the data ever existed.
//   - No grace period in MVP. Add a 30-day grace and a job runner if law
//     review requires it for your jurisdiction.

export const ERASURE_TARGETS = Object.freeze([
  "progress",
  "profile",
  "consent_records",
  "item_grades"
]);

export class ErasureError extends Error {
  constructor(code, details = []) {
    super(code);
    this.name = "ErasureError";
    this.code = code;
    this.details = details;
  }
}

/**
 * @param {{
 *   studentId: string,
 *   parentName: string,
 *   parentEmail: string,
 *   confirmationText: string,
 *   expectedChildFirstName: string,
 *   reason?: string,
 *   ipAddress?: string|null,
 *   userAgent?: string|null,
 *   now?: () => Date
 * }} args
 */
export function createErasureRequest(args) {
  const {
    studentId,
    parentName,
    parentEmail,
    confirmationText,
    expectedChildFirstName,
    reason = "parent_requested",
    ipAddress = null,
    userAgent = null,
    now = () => new Date()
  } = args ?? {};

  const errors = [];
  if (!nonEmptyString(studentId)) errors.push("studentId_required");
  if (!nonEmptyString(parentName)) errors.push("parentName_required");
  if (!nonEmptyString(parentEmail) || !looksLikeEmail(parentEmail)) errors.push("parentEmail_invalid");
  if (!nonEmptyString(expectedChildFirstName)) errors.push("expectedChildFirstName_required");
  if (
    !nonEmptyString(confirmationText) ||
    confirmationText.trim().toLowerCase() !== expectedChildFirstName.trim().toLowerCase()
  ) {
    errors.push("confirmation_text_mismatch");
  }
  if (errors.length > 0) {
    throw new ErasureError("invalid_erasure_request", errors);
  }

  const t = now();
  return Object.freeze({
    auditId: `erase-${t.getTime()}-${Math.random().toString(36).slice(2, 8)}`,
    studentId,
    parentName: parentName.trim(),
    parentEmail: parentEmail.trim().toLowerCase(),
    reason,
    requestedAt: t.toISOString(),
    completedAt: null,
    recordCounts: null,
    ipAddress,
    userAgent
  });
}

/**
 * Combine the request with the post-purge counts into a finalized audit row.
 */
export function finalizeErasureAudit({ request, recordCounts, now = () => new Date() }) {
  if (!request || !request.auditId) {
    throw new ErasureError("missing_request");
  }
  return Object.freeze({
    ...request,
    completedAt: now().toISOString(),
    recordCounts: { ...recordCounts }
  });
}

function nonEmptyString(v) {
  return typeof v === "string" && v.trim().length > 0;
}

function looksLikeEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}
