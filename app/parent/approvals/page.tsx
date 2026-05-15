import Link from "next/link";
import "../../landing.css";
import "../parent.css";
import { loadParentData } from "../_data";
import { requireParent } from "../../lib/auth-server";
import { ApprovalControls } from "../ApprovalControls";

export const dynamic = "force-dynamic";

type SearchParams = Promise<{ student?: string; week?: string }>;

export default async function ApprovalsScreen({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const { studentId } = await requireParent();
  const weekNumber = Number(params?.week ?? 1) || 1;
  const { progress, profile } = await loadParentData({ studentId, weekNumber });

  const q = `?student=${encodeURIComponent(studentId)}&week=${weekNumber}`;

  const rewardRequests = (progress?.rewardRequests ?? []).filter(
    (r: any) => r.status === "pending_parent"
  );
  const friendInvites = (progress?.friendInvites ?? []).filter(
    (i: any) => i.status === "needs_parent_approval"
  );
  const total = rewardRequests.length + friendInvites.length;

  return (
    <main className="ls-landing pd-screen">
      <header className="ls-nav">
        <Link href="/" className="ls-brand">
          <span className="ls-brand-mark">DSA</span>
          <span className="ls-brand-name">Dr. Spark Academy</span>
        </Link>
        <nav className="ls-nav-links" aria-label="Primary">
          <Link href={`/parent${q}`}>Dashboard</Link>
        </nav>
      </header>

      <div className="pd-screen-head">
        <Link href={`/parent${q}`} className="pd-screen-back">← Dashboard</Link>
        <h1 className="pd-screen-title">
          Pending approvals {total > 0 && <span style={{ color: "var(--ls-accent-deep)" }}>· {total}</span>}
        </h1>
      </div>

      <div className="pd-screen-body">
        {total === 0 ? (
          <div className="pd-empty">
            <span style={{ fontSize: 48 }} aria-hidden="true">✨</span>
            <h2>You're all caught up.</h2>
            <p>{profile.firstName} has no pending reward requests or friend invitations waiting on you.</p>
          </div>
        ) : (
          <div style={{ display: "grid", gap: 24 }}>
            <section className="pd-card">
              <div className="pd-section-head">
                <h3>Reward requests</h3>
                <p>Approve or decline rewards your child has earned and asked for.</p>
              </div>
              <ApprovalControls
                studentId={studentId}
                bucket="rewards"
                items={rewardRequests}
                emptyText="No reward requests waiting."
              />
            </section>
            <section className="pd-card">
              <div className="pd-section-head">
                <h3>Friend invitations</h3>
                <p>Friend invitations always require your approval before the friend's parent is contacted.</p>
              </div>
              <ApprovalControls
                studentId={studentId}
                bucket="invites"
                items={friendInvites}
                emptyText="No friend invitations waiting."
              />
            </section>
          </div>
        )}
      </div>
    </main>
  );
}
