"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "../../landing.css";
import "../parent.css";
import "../auth.css";

export default function ParentSigninPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      if (res.ok) {
        router.push("/parent");
        router.refresh();
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data?.message ?? "Sign-in failed. Try again.");
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
          <Link href="/parent/signup">Create account</Link>
        </nav>
      </header>

      <div className="ls-auth-shell">
        <section className="ls-auth-card">
          <span className="ls-eyebrow">Parent sign-in</span>
          <h1>Welcome back.</h1>
          <p className="ls-auth-sub">Sign in to see your child's progress and approvals.</p>

          <form onSubmit={onSubmit} className="ls-auth-form" autoComplete="on">
            <label>
              Email
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" autoComplete="email" />
            </label>
            <label>
              Password
              <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Your password" autoComplete="current-password" />
            </label>
            {error && <p className="ls-auth-error">{error}</p>}
            <button type="submit" className="ls-cta-primary ls-cta-block" disabled={busy}>
              {busy ? "Signing in…" : "Sign in →"}
            </button>
          </form>

          <p className="ls-auth-foot">
            <Link href="/parent/forgot-password">Forgot your password?</Link>
          </p>
          <p className="ls-auth-foot">
            New to Dr. Spark Academy? <Link href="/parent/signup">Create an account →</Link>
          </p>
          <p className="ls-auth-foot">
            Looking for the child sign-in? <Link href="/child/signin">Open here →</Link>
          </p>
        </section>
      </div>
    </main>
  );
}
