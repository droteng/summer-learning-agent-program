import Link from "next/link";
import "./consent.css";
import {
  consentStatusForParent,
  PARENT_DISCLOSURE
} from "../../../src/agents/consentAgent.js";
import { loadConsentRecords } from "../../../src/data/db.js";
import { ConsentForm } from "./ConsentForm";

export const dynamic = "force-dynamic";

type SearchParams = Promise<{ student?: string; child?: string }>;

export default async function ConsentPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const studentId =
    typeof params?.student === "string" && params.student.length > 0 ? params.student : "demo-student";
  const childFirstName =
    typeof params?.child === "string" && params.child.length > 0 ? params.child : "Avery";

  const records = await loadConsentRecords(studentId);
  const status = consentStatusForParent({ records, studentId });

  return (
    <main className="cs-page">
      <div className="cs-shell">
        <header className="cs-topbar">
          <Link href={`/parent?student=${encodeURIComponent(studentId)}`} className="qm-back">
            <span aria-hidden="true">←</span> Parent dashboard
          </Link>
          <span className="cs-eyebrow">COPPA · Verifiable parental consent</span>
        </header>

        <section className="cs-hero">
          <h1>Parental consent for {childFirstName}</h1>
          <p className="cs-hero-sub">
            U.S. federal law (COPPA) requires verifiable parental consent before we collect personal
            information from a child under 13. Read the short disclosure below, then record your
            consent. You can revoke it any time from this page.
          </p>
        </section>

        {status.status === "active" && (
          <section className="cs-status">
            <span className="cs-status-eyebrow">Consent recorded</span>
            <p>
              Granted by {status.grantedBy}. Method: <strong>{status.method}</strong>. Disclosure version{" "}
              {status.disclosureVersion}. Expires {new Date(status.expiresAt as string).toLocaleDateString()}.
              {status.verifiable ? " (Verifiable method.)" : " (Self-attest — closed beta only.)"}
            </p>
          </section>
        )}

        <section className="cs-disclosure" aria-label="Disclosure">
          <h2>What we collect and why</h2>
          <span className="cs-version-tag">Disclosure version {PARENT_DISCLOSURE.version}</span>
          <p>{PARENT_DISCLOSURE.summary}</p>

          <div className="cs-section">
            <h3>Data we collect</h3>
            <ul>
              {PARENT_DISCLOSURE.dataCollected.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>

          <div className="cs-section">
            <h3>Why we collect it</h3>
            <ul>
              {PARENT_DISCLOSURE.purposes.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>

          <div className="cs-section">
            <h3>Third parties</h3>
            <ul>
              {PARENT_DISCLOSURE.thirdParties.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>

          <div className="cs-section">
            <h3>Your rights as a parent</h3>
            <ul>
              {PARENT_DISCLOSURE.parentalRights.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>

          <div className="cs-section">
            <h3>What we never collect</h3>
            <p>{PARENT_DISCLOSURE.noChildPii}</p>
          </div>

          <div className="cs-section">
            <h3>Retention and deletion</h3>
            <p>{PARENT_DISCLOSURE.retention}</p>
          </div>

          <div className="cs-section">
            <h3>Contact</h3>
            <p>
              Operator: <strong>{PARENT_DISCLOSURE.operator}</strong>. Email{" "}
              <a href={`mailto:${PARENT_DISCLOSURE.contactEmail}`}>{PARENT_DISCLOSURE.contactEmail}</a>{" "}
              for review, deletion, or revocation. Mailing address: {PARENT_DISCLOSURE.contactMailing}.
            </p>
          </div>
        </section>

        <ConsentForm studentId={studentId} defaultChildFirstName={childFirstName} />

        {records.length > 0 && (
          <section className="pd-card">
            <div className="pd-section-head">
              <h3>Consent history</h3>
              <p>Every recorded and revoked consent for this child, newest first.</p>
            </div>
            <ul className="pd-approvals-list">
              {[...records]
                .sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                .map((r: any) => (
                  <li key={r.id} className="pd-approval-item" data-status={r.status === "active" ? "approved" : "declined"}>
                    <span>
                      {new Date(r.createdAt).toLocaleDateString()} — {r.parentName} — {r.method}
                    </span>
                    <span className="pd-approval-status">{r.status}</span>
                  </li>
                ))}
            </ul>
          </section>
        )}

        <section className="pd-card">
          <div className="pd-section-head">
            <h3>Right to delete</h3>
            <p>You can request permanent deletion of {childFirstName}'s data at any time.</p>
          </div>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: "var(--qm-muted)" }}>
            Deletion removes every progress, profile, and consent record for this child. We keep
            only an audit row to prove the deletion happened.
          </p>
          <Link
            className="pd-banner-cta"
            style={{ marginTop: 16, display: "inline-flex" }}
            href={`/parent/data-deletion?student=${encodeURIComponent(studentId)}&child=${encodeURIComponent(childFirstName)}`}
          >
            Request data deletion →
          </Link>
        </section>

        <footer className="qm-footer">
          This disclosure is not legal advice. Have counsel review before launch.
        </footer>
      </div>
    </main>
  );
}
