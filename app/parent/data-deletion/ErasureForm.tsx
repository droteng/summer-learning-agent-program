"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface ErasureFormProps {
  studentId: string;
  expectedChildFirstName: string;
}

export function ErasureForm({ studentId, expectedChildFirstName }: ErasureFormProps) {
  const router = useRouter();
  const [parentName, setParentName] = useState("");
  const [parentEmail, setParentEmail] = useState("");
  const [confirmationText, setConfirmationText] = useState("");
  const [acknowledged, setAcknowledged] = useState(false);
  const [reason, setReason] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<any | null>(null);

  const confirmationMatches =
    confirmationText.trim().toLowerCase() === expectedChildFirstName.trim().toLowerCase();
  const canSubmit =
    acknowledged && confirmationMatches && parentName.trim() && parentEmail.trim();

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/data-erasure", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentId,
          parentName,
          parentEmail,
          confirmationText,
          expectedChildFirstName,
          reason: reason.trim() || "parent_requested"
        })
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? `http_${res.status}`);
      }
      const body = await res.json();
      setResult(body.audit);
      router.refresh();
    } catch (err: any) {
      setError(err?.message ?? "failed");
    } finally {
      setSubmitting(false);
    }
  }

  if (result) {
    return (
      <section className="de-success" aria-live="polite">
        <span className="de-success-eyebrow">Deletion complete</span>
        <h2>{expectedChildFirstName}'s data was deleted.</h2>
        <p className="de-success-sub">
          We removed {result.recordCounts.progress} progress record,{" "}
          {result.recordCounts.profile} profile, {result.recordCounts.consent_records} consent
          record, and {result.recordCounts.item_grades} item grades. The audit record was kept so
          we can prove deletion if asked. Audit id: <code>{result.auditId}</code>.
        </p>
        <a className="qm-back" href="/">Return to home</a>
      </section>
    );
  }

  return (
    <form className="de-form" onSubmit={submit}>
      <h2>Confirm deletion</h2>

      <div className="cs-grid">
        <div className="cs-field">
          <label htmlFor="erase-parent-name">Your full name</label>
          <input
            id="erase-parent-name"
            type="text"
            required
            autoComplete="name"
            value={parentName}
            onChange={(e) => setParentName(e.target.value)}
          />
        </div>
        <div className="cs-field">
          <label htmlFor="erase-parent-email">Your email</label>
          <input
            id="erase-parent-email"
            type="email"
            required
            autoComplete="email"
            value={parentEmail}
            onChange={(e) => setParentEmail(e.target.value)}
          />
        </div>
      </div>

      <div className="cs-field">
        <label htmlFor="erase-confirm">
          Type <strong>{expectedChildFirstName}</strong> to confirm
        </label>
        <input
          id="erase-confirm"
          type="text"
          required
          autoComplete="off"
          value={confirmationText}
          onChange={(e) => setConfirmationText(e.target.value)}
          aria-invalid={confirmationText.length > 0 && !confirmationMatches}
        />
        {confirmationText.length > 0 && !confirmationMatches && (
          <span className="de-mismatch">Names don't match. Type exactly: {expectedChildFirstName}</span>
        )}
      </div>

      <div className="cs-field">
        <label htmlFor="erase-reason">Reason (optional)</label>
        <input
          id="erase-reason"
          type="text"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="e.g. switching apps, no longer using"
        />
      </div>

      <div className="de-warning">
        <label>
          <input
            type="checkbox"
            checked={acknowledged}
            onChange={(e) => setAcknowledged(e.target.checked)}
          />
          <span>
            I understand this permanently deletes {expectedChildFirstName}'s missions, reflections,
            mastery scores, and consent records. We keep only an audit record of the deletion.
            This action cannot be undone.
          </span>
        </label>
      </div>

      <div className="cs-submit-row">
        {error && <p className="cs-error">{error}</p>}
        <button type="submit" className="de-submit" disabled={!canSubmit || submitting}>
          {submitting ? "Deleting…" : "Permanently delete data"}
        </button>
      </div>
    </form>
  );
}
