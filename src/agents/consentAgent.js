// Verifiable Parental Consent (COPPA) record-keeping.
//
// This module captures the *evidence* of parental consent and exposes a gate
// the rest of the app can call before doing things that collect or share
// personal child data. The actual *verification* method (signed PDF, $0 card
// auth, KBA) is pluggable — production should swap `self_attest` for a real
// verifier. The agent's job is to make the swap a one-line change.
//
// What this module is NOT: legal advice. Have counsel review the disclosure
// copy and the chosen verification method before launch.

export const DISCLOSURE_VERSION = "v2";
export const DEFAULT_CONSENT_DURATION_DAYS = 365;

export const CONSENT_SCOPES = Object.freeze({
  LESSON_GRADING: "lesson_grading",
  WEEKLY_REPORTS: "weekly_reports",
  ACHIEVEMENT_EXPORT: "achievement_export",
  TEACHER_SHARE: "teacher_share",
  SOCIAL_LEARNING: "social_learning",
  LLM_PROCESSING: "llm_processing"
});

export const ALL_SCOPES = Object.freeze(Object.values(CONSENT_SCOPES));

export const CONSENT_METHODS = Object.freeze({
  // MVP fallback: parent self-attests under penalty of perjury that they are
  // the legal guardian. Not a substitute for verifiable consent under COPPA
  // for under-13s; usable for a closed family beta only.
  SELF_ATTEST: "self_attest",
  // Production: $0 authorization on a payment card. The card requires the
  // user to be an adult per the issuer's TOS, satisfying the FTC's
  // payment-system method.
  CARD_AUTH: "card_auth",
  // Production: parent prints, signs, and uploads/mails a consent form.
  SIGNED_FORM: "signed_form"
});

const VERIFIABLE_METHODS = new Set([CONSENT_METHODS.CARD_AUTH, CONSENT_METHODS.SIGNED_FORM]);

/**
 * @param {{
 *   parentName: string,
 *   parentEmail: string,
 *   studentId: string,
 *   childFirstName: string,
 *   method: string,
 *   scopes?: readonly string[],
 *   evidence?: object,
 *   ipAddress?: string|null,
 *   userAgent?: string|null,
 *   now?: () => Date
 * }} args
 */
export function createConsentRecord(args = {}) {
  const {
    parentName,
    parentEmail,
    studentId,
    childFirstName,
    method,
    scopes = ALL_SCOPES,
    evidence = {},
    ipAddress,
    userAgent,
    now = () => new Date()
  } = args;
  const errors = [];
  if (!nonEmptyString(parentName)) errors.push("parentName_required");
  if (!nonEmptyString(parentEmail) || !looksLikeEmail(parentEmail)) errors.push("parentEmail_invalid");
  if (!nonEmptyString(studentId)) errors.push("studentId_required");
  if (!nonEmptyString(childFirstName)) errors.push("childFirstName_required");
  if (!Object.values(CONSENT_METHODS).includes(method)) errors.push("method_invalid");
  if (!Array.isArray(scopes) || scopes.length === 0) errors.push("scopes_required");
  for (const scope of scopes) {
    if (!ALL_SCOPES.includes(scope)) errors.push(`scope_unknown:${scope}`);
  }
  if (errors.length > 0) {
    throw new ConsentError("invalid_consent_input", errors);
  }

  const created = now();
  const expiresAt = new Date(created.getTime() + DEFAULT_CONSENT_DURATION_DAYS * 86_400_000);

  return Object.freeze({
    id: `consent-${created.getTime()}-${Math.random().toString(36).slice(2, 8)}`,
    parentName: parentName.trim(),
    parentEmail: parentEmail.trim().toLowerCase(),
    studentId,
    childFirstName: childFirstName.trim(),
    method,
    scopes: [...scopes],
    evidence,
    ipAddress: ipAddress ?? null,
    userAgent: userAgent ?? null,
    disclosureVersion: DISCLOSURE_VERSION,
    status: "active",
    verifiable: VERIFIABLE_METHODS.has(method),
    createdAt: created.toISOString(),
    expiresAt: expiresAt.toISOString(),
    revokedAt: null
  });
}

/**
 * @param {object} record
 * @param {{ now?: () => Date, reason?: string }} [opts]
 */
export function revokeConsentRecord(record, opts) {
  const { now = () => new Date(), reason = "parent_revoked" } = opts ?? {};
  if (!record || record.status !== "active") return record;
  return Object.freeze({
    ...record,
    status: "revoked",
    revokedAt: now().toISOString(),
    revocationReason: reason
  });
}

/**
 * @param {object} record
 * @param {{ now?: () => Date }} [opts]
 */
export function isConsentActive(record, opts) {
  const { now = () => new Date() } = opts ?? {};
  if (!record || record.status !== "active") return false;
  if (record.revokedAt) return false;
  if (!record.expiresAt) return false;
  return new Date(record.expiresAt).getTime() > now().getTime();
}

// Returns the most recent ACTIVE consent for a student that covers every
// requested scope, or null if none qualifies. Use this as the gate before
// any data-collection action.
/**
 * @param {{ records?: any[], studentId: string, requiredScopes?: string[], now?: () => Date }} args
 */
export function findActiveConsent(args) {
  const { records = [], studentId, requiredScopes = [], now } = args;
  const candidates = records
    .filter((r) => r.studentId === studentId && isConsentActive(r, { now }))
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  for (const candidate of candidates) {
    if (requiredScopes.every((scope) => candidate.scopes.includes(scope))) {
      return candidate;
    }
  }
  return null;
}

/**
 * @param {{ records?: any[], studentId: string, now?: () => Date }} args
 */
export function consentStatusForParent(args) {
  const { records = [], studentId, now } = args;
  const active = findActiveConsent({ records, studentId, requiredScopes: ALL_SCOPES, now });
  if (active) {
    return {
      status: "active",
      method: active.method,
      verifiable: active.verifiable,
      scopes: active.scopes,
      grantedBy: active.parentName,
      expiresAt: active.expiresAt,
      disclosureVersion: active.disclosureVersion
    };
  }
  const anyActive = (records ?? []).some(
    (r) => r.studentId === studentId && isConsentActive(r, { now })
  );
  if (anyActive) {
    return { status: "partial", scopes: [], reason: "missing_scopes" };
  }
  return { status: "missing", scopes: [] };
}

// COPPA-aligned disclosure copy. Surface this verbatim in the consent flow.
// Update the version string when copy changes so historic records reference
// the disclosure they actually accepted.
export const PARENT_DISCLOSURE = Object.freeze({
  version: DISCLOSURE_VERSION,
  operator: "Dr. Spark Academy",
  contactEmail: "privacy@drsparkacademy.com",
  contactMailing: "[Mailing address goes here before launch]",
  summary:
    "We provide a parent-supervised summer learning program for children. We collect only what is needed to teach your child and to send you weekly reports.",
  dataCollected: [
    "Your child's first name and grade level (you provide these).",
    "Your child's answers to learning missions and short reflections.",
    "Mastery scores derived from those answers (no other behavioral profiling).",
    "Your reward approvals and friend-invite decisions."
  ],
  purposes: [
    "Personalize the daily missions to your child's level.",
    "Generate weekly reports for you (and, only with your approval, for a teacher).",
    "Award badges, certificates, and a parent-approved transcript."
  ],
  thirdParties: [
    "Anthropic and (optionally) OpenRouter receive lesson prompts when our LLM tier is enabled. Prompts may include your child's first name and the lesson topic but never your last name, address, photo, or contact details.",
    "Stripe receives payment information you provide if you subscribe. Stripe is the merchant of record for those transactions.",
    "We never sell your child's data, and we never share it with advertisers."
  ],
  parentalRights: [
    "Review the data we have stored for your child at any time on the Parent dashboard.",
    "Request deletion of all of your child's data by emailing privacy@drsparkacademy.com. We will delete within 30 days.",
    "Revoke this consent at any time. Revocation stops collection going forward; previously collected data is deleted within 30 days unless you ask us to retain a copy."
  ],
  retention:
    "We retain your child's data while consent is active, plus 30 days of post-revocation grace for export. After deletion, anonymized aggregates may remain.",
  noChildPii:
    "We never collect your child's last name, photo, voice, exact location, email, or phone number. We never enable child-to-child direct messaging in this program."
});

export class ConsentError extends Error {
  constructor(code, details = []) {
    super(code);
    this.name = "ConsentError";
    this.code = code;
    this.details = details;
  }
}

function nonEmptyString(v) {
  return typeof v === "string" && v.trim().length > 0;
}

function looksLikeEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}
