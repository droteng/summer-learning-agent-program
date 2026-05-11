"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

type Bucket = "rewards" | "invites";

interface ApprovalItem {
  id: string;
  label: string;
  status: "approved" | "declined" | "pending";
}

interface ApprovalControlsProps {
  studentId: string;
  bucket: Bucket;
  items: ApprovalItem[];
  emptyText: string;
}

export function ApprovalControls({ studentId, bucket, items, emptyText }: ApprovalControlsProps) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [busyId, setBusyId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  if (items.length === 0) {
    return <p className="pd-empty-state">{emptyText}</p>;
  }

  async function decide(id: string, decision: "approve" | "decline") {
    setBusyId(id);
    setError(null);
    const action =
      bucket === "rewards"
        ? decision === "approve"
          ? "approve_reward"
          : "decline_reward"
        : decision === "approve"
          ? "approve_invite"
          : "decline_invite";
    try {
      const res = await fetch("/api/parent-action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ studentId, action, id })
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? `http_${res.status}`);
      }
      startTransition(() => router.refresh());
    } catch (err: any) {
      setError(err?.message ?? "failed");
    } finally {
      setBusyId(null);
    }
  }

  return (
    <div>
      <ul className="pd-approvals-list">
        {items.map((item) => (
          <li key={item.id} className="pd-approval-item" data-status={item.status}>
            <span className="pd-approval-label">{item.label}</span>
            {item.status === "pending" ? (
              <span className="pd-approval-actions">
                <button
                  type="button"
                  className="pd-action pd-action--approve"
                  disabled={pending || busyId === item.id}
                  onClick={() => decide(item.id, "approve")}
                >
                  {busyId === item.id ? "…" : "Approve"}
                </button>
                <button
                  type="button"
                  className="pd-action pd-action--decline"
                  disabled={pending || busyId === item.id}
                  onClick={() => decide(item.id, "decline")}
                >
                  Decline
                </button>
              </span>
            ) : (
              <span className="pd-approval-status">
                {item.status === "approved" ? "Approved" : "Declined"}
              </span>
            )}
          </li>
        ))}
      </ul>
      {error && <p className="pd-action-error">Couldn't update: {error}</p>}
    </div>
  );
}
