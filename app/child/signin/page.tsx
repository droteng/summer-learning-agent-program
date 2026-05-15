"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "../../landing.css";
import "../../parent/auth.css";

export default function ChildSigninPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/auth/child-signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, pin })
      });
      if (res.ok) {
        router.push("/child/map");
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
          <Link href="/parent/signin">Parent sign-in</Link>
        </nav>
      </header>

      <div className="ls-auth-shell">
        <section className="ls-auth-card">
          <span className="ls-eyebrow">Kid sign-in</span>
          <h1>Welcome back, voyager! 👋</h1>
          <p className="ls-auth-sub">Ask a parent for the family email and your PIN.</p>

          <form onSubmit={onSubmit} className="ls-auth-form" autoComplete="off">
            <label>
              Parent's email
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="parent@example.com" />
            </label>
            <label>
              Your PIN
              <input type="text" inputMode="numeric" pattern="\d{4,8}" required value={pin} onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))} placeholder="4–8 digits" autoFocus />
            </label>
            {error && <p className="ls-auth-error">{error}</p>}
            <button type="submit" className="ls-cta-primary ls-cta-block" disabled={busy}>
              {busy ? "Signing in…" : "Let's go →"}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
