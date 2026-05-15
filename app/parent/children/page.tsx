import Link from "next/link";
import "../../landing.css";
import "../parent.css";
import "../auth.css";
import { requireParent } from "../../lib/auth-server";
import { resolveEntitlement } from "../../../src/agents/entitlementAgent.js";
import { loadFamilyAccount } from "../../../src/data/db.js";
import { AddChildForm } from "./AddChildForm";

export const dynamic = "force-dynamic";

export default async function ChildrenScreen() {
  const { user } = await requireParent();
  const account = await loadFamilyAccount(user.accountId);
  const entitlement = await resolveEntitlement({ studentId: user.childId ?? "" });

  const children = Array.isArray(account?.children) ? account.children : [];
  const remaining = Math.max(0, entitlement.maxChildren - children.length);
  const canAdd = remaining > 0;

  return (
    <main className="ls-landing pd-screen">
      <header className="ls-nav">
        <Link href="/" className="ls-brand">
          <span className="ls-brand-mark">DSA</span>
          <span className="ls-brand-name">Dr. Spark Academy</span>
        </Link>
        <nav className="ls-nav-links" aria-label="Primary">
          <Link href="/parent">← Dashboard</Link>
        </nav>
      </header>

      <div className="pd-screen-head">
        <Link href="/parent" className="pd-screen-back">← Dashboard</Link>
        <h1 className="pd-screen-title">Children · {children.length}/{entitlement.maxChildren}</h1>
      </div>

      <div className="pd-screen-body" style={{ display: "grid", gap: 20, maxWidth: 760 }}>
        <section className="pd-card">
          <div className="pd-section-head">
            <h3>Your children</h3>
            <p>Each child has their own PIN. They sign in at /child/signin with your email + their PIN.</p>
          </div>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: 10 }}>
            {children.map((child: any) => (
              <li
                key={child.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "44px 1fr auto",
                  alignItems: "center",
                  gap: 14,
                  padding: "14px 18px",
                  background: "white",
                  border: "1px solid rgba(31, 41, 55, 0.08)",
                  borderRadius: 14
                }}
              >
                <span
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, var(--ls-accent), var(--ls-rose))",
                    color: "white",
                    display: "grid",
                    placeItems: "center",
                    fontWeight: 900,
                    fontSize: 16
                  }}
                >
                  {(child.firstName ?? "?").slice(0, 1).toUpperCase()}
                </span>
                <div>
                  <strong style={{ fontSize: 16 }}>{child.firstName}</strong>
                  <span style={{ marginLeft: 10, color: "var(--ls-muted)", fontSize: 13 }}>
                    Grade {child.gradeLevel ?? "?"}
                  </span>
                  {child.pinHash || account?.credentials?.childPinHash ? (
                    <span style={{ marginLeft: 10, color: "var(--ls-muted)", fontSize: 13 }}>· PIN set</span>
                  ) : (
                    <span style={{ marginLeft: 10, color: "#b91c1c", fontSize: 13, fontWeight: 700 }}>
                      · no PIN
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="pd-card">
          <div className="pd-section-head">
            <h3>Add a child</h3>
            <p>
              {canAdd
                ? `You can add ${remaining} more (your plan supports up to ${entitlement.maxChildren}).`
                : `Your plan supports up to ${entitlement.maxChildren} child${entitlement.maxChildren === 1 ? "" : "ren"}.`}
            </p>
          </div>
          {canAdd ? (
            <AddChildForm />
          ) : (
            <Link className="ls-cta-primary" href="/parent/billing">
              Upgrade for more seats →
            </Link>
          )}
        </section>
      </div>
    </main>
  );
}
