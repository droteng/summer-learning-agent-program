"use client";

import Link from "next/link";
import { useState } from "react";
import "../../landing.css";
import "../auth.css";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/auth/request-password-reset", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      if (res.ok) {
        setSent(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data?.message ?? "Could not send reset link. Try again.");
      }
    } catch {
      setError("Network error. Try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="ls-landing">
      <header className="ls-nav">
        <Link href="/" className="ls-brand">
          <span className="ls-brand-mark">DSA</span>
          <span className="ls-brand-name">Dr. Spark Academy</span>
        </Link>
        <nav className="ls-nav-links" aria-label="Primary">
          <Link href="/parent/signin">Back to sign in</Link>
        </nav>
      </header>

      <div className="ls-auth-shell">
        <section className="ls-auth-card">
          <span className="ls-eyebrow">Forgot password</span>
          <h1>Reset your password.</h1>
          <p className="ls-auth-sub">
            Enter the email on your parent account. We'll send a reset link that's valid for 1 hour.
          </p>

          {sent ? (
            <div className="ls-auth-success">
              <p style={{ margin: 0, fontWeight: 700 }}>📬 Check your inbox.</p>
              <p style={{ margin: "8px 0 0", color: "var(--ls-muted)", fontSize: 14 }}>
                If <strong>{email}</strong> matches an account, a reset link is on its way.
                Look in spam if you don't see it within a minute or two.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="ls-auth-form" autoComplete="on">
              <label>
                Email
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                  autoFocus
                />
              </label>
              {error && <p className="ls-auth-error">{error}</p>}
              <button type="submit" className="ls-cta-primary ls-cta-block" disabled={busy}>
                {busy ? "Sending…" : "Send reset link →"}
              </button>
            </form>
          )}

          <p className="ls-auth-foot">
            Remembered it? <Link href="/parent/signin">Sign in →</Link>
          </p>
        </section>
      </div>
    </main>
  );
}
