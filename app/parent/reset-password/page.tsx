"use client";

import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import "../../landing.css";
import "../auth.css";

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<main className="ls-landing" />}>
      <ResetPasswordContent />
    </Suspense>
  );
}

function ResetPasswordContent() {
  const router = useRouter();
  const sp = useSearchParams();
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const t = sp?.get("token") ?? "";
    setToken(t);
  }, [sp]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password })
      });
      if (res.ok) {
        router.push("/parent");
        router.refresh();
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data?.message ?? "Could not reset password.");
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
      </header>

      <div className="ls-auth-shell">
        <section className="ls-auth-card">
          <span className="ls-eyebrow">Set a new password</span>
          <h1>Almost there.</h1>
          <p className="ls-auth-sub">
            Choose a new password — at least 8 characters. You'll be signed in after.
          </p>

          {!token ? (
            <p className="ls-auth-error">No reset token in this link. Request a new one from the forgot-password page.</p>
          ) : (
            <form onSubmit={onSubmit} className="ls-auth-form" autoComplete="off">
              <label>
                New password
                <input
                  type="password"
                  required
                  minLength={8}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 8 characters"
                  autoFocus
                  autoComplete="new-password"
                />
              </label>
              {error && <p className="ls-auth-error">{error}</p>}
              <button type="submit" className="ls-cta-primary ls-cta-block" disabled={busy || !token}>
                {busy ? "Setting…" : "Set new password →"}
              </button>
            </form>
          )}

          <p className="ls-auth-foot">
            <Link href="/parent/forgot-password">← Request a new link</Link>
          </p>
        </section>
      </div>
    </main>
  );
}
