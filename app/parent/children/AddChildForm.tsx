"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function AddChildForm() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [gradeLevel, setGradeLevel] = useState("6");
  const [pin, setPin] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/auth/add-child", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, gradeLevel: Number(gradeLevel), pin })
      });
      if (res.ok) {
        setFirstName("");
        setPin("");
        setGradeLevel("6");
        router.refresh();
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data?.message ?? "Could not add child.");
      }
    } catch {
      setError("Network error. Try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="ls-auth-form" style={{ maxWidth: 480 }}>
      <label>
        First name
        <input
          type="text"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Avery"
        />
      </label>
      <label>
        Grade level
        <input
          type="number"
          min={1}
          max={12}
          value={gradeLevel}
          onChange={(e) => setGradeLevel(e.target.value)}
        />
      </label>
      <label>
        Sign-in PIN
        <input
          type="text"
          inputMode="numeric"
          pattern="\d{4,8}"
          required
          value={pin}
          onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))}
          placeholder="4–8 digits"
        />
        <span className="ls-auth-hint">Pick a PIN that's different from your other children's.</span>
      </label>
      {error && <p className="ls-auth-error">{error}</p>}
      <button type="submit" className="ls-cta-primary ls-cta-block" disabled={busy}>
        {busy ? "Adding…" : "Add child →"}
      </button>
    </form>
  );
}
