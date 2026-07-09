"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "../../landing.css";
import "../parent.css";
import "../auth.css";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [parentName, setParentName] = useState("");
  const [childName, setChildName] = useState("");
  const [gradeLevel, setGradeLevel] = useState(6);
  const [childPin, setChildPin] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, parentName, childName, childPin, gradeLevel })
      });
      if (res.ok) {
        router.push("/parent");
        router.refresh();
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data?.message ?? "Sign-up failed. Try again.");
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
          <Link href="/parent/signin">Sign in instead</Link>
        </nav>
      </header>

      <div className="ls-auth-shell">
        <section className="ls-auth-card">
          <span className="ls-eyebrow">Create your family account</span>
          <h1>Start your child's summer voyage.</h1>
          <p className="ls-auth-sub">
            Takes ~2 minutes. You'll set up the parent login and your child's sign-in PIN.
          </p>

          <form onSubmit={onSubmit} className="ls-auth-form" autoComplete="on">
            <label>
              Your name
              <input type="text" required value={parentName} onChange={(e) => setParentName(e.target.value)} placeholder="Jane Doe" autoComplete="name" />
            </label>
            <label>
              Email
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" autoComplete="email" />
            </label>
            <label>
              Password
              <input type="password" required minLength={8} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="At least 8 characters" autoComplete="new-password" />
              <span className="ls-auth-hint">Min 8 characters. Use a mix of letters &amp; numbers.</span>
            </label>
            <div className="ls-auth-divider" aria-hidden="true">your child</div>
            <label>
              Child's first name
              <input type="text" required value={childName} onChange={(e) => setChildName(e.target.value)} placeholder="Avery" />
            </label>
            <label>
              Child's grade
              <select
                value={gradeLevel}
                onChange={(e) => setGradeLevel(Number(e.target.value))}
                aria-label="Child's grade level"
              >
                <option value={5}>Grade 5</option>
                <option value={6}>Grade 6</option>
                <option value={7}>Grade 7</option>
              </select>
              <span className="ls-auth-hint">Sets which summer voyage your child starts on. Grades 5–7 are live.</span>
            </label>
            <label>
              Child's sign-in PIN
              <input type="text" inputMode="numeric" pattern="\d{4,8}" required value={childPin} onChange={(e) => setChildPin(e.target.value.replace(/\D/g, ""))} placeholder="4–8 digits, e.g. 4823" />
              <span className="ls-auth-hint">Your child will use your email + this PIN to sign in.</span>
            </label>
            {error && <p className="ls-auth-error">{error}</p>}
            <button type="submit" className="ls-cta-primary ls-cta-block" disabled={busy}>
              {busy ? "Creating…" : "Create account →"}
            </button>
          </form>

          <p className="ls-auth-foot">
            Already have an account? <Link href="/parent/signin">Sign in →</Link>
          </p>
        </section>
      </div>
    </main>
  );
}
