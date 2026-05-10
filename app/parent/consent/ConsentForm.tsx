"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface ConsentFormProps {
  studentId: string;
  defaultChildFirstName: string;
  stripeConfigured: boolean;
}

type Method = "self_attest" | "card_auth" | "signed_form";

const METHOD_LIBRARY: Record<Method, { title: string; sub: string; verifiable: boolean; tag: string }> = {
  self_attest: {
    title: "Self-attest (closed beta only)",
    sub: "You confirm under penalty of perjury that you are the parent or legal guardian. Acceptable for a closed family beta; not a substitute for verifiable consent at scale.",
    verifiable: false,
    tag: "Beta"
  },
  card_auth: {
    title: "Card verification (verifiable)",
    sub: "We send you to Stripe for a one-time card check. No charge — Stripe just confirms the card is real, which under FTC guidance satisfies COPPA's monetary-transaction method.",
    verifiable: true,
    tag: "Verifiable"
  },
  signed_form: {
    title: "Signed PDF form (verifiable)",
    sub: "Print, sign, and upload the consent PDF. We email you the form to sign. Coming soon.",
    verifiable: true,
    tag: "Verifiable"
  }
};

export function ConsentForm({ studentId, defaultChildFirstName, stripeConfigured }: ConsentFormProps) {
  const router = useRouter();
  const [parentName, setParentName] = useState("");
  const [parentEmail, setParentEmail] = useState("");
  const [childFirstName, setChildFirstName] = useState(defaultChildFirstName);
  const [method, setMethod] = useState<Method>("self_attest");
  const [attested, setAttested] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const METHODS: { value: Method; title: string; sub: string; verifiable: boolean; tag: string; disabled?: boolean }[] = [
    { value: "self_attest", ...METHOD_LIBRARY.self_attest },
    {
      value: "card_auth",
      ...METHOD_LIBRARY.card_auth,
      sub: stripeConfigured
        ? METHOD_LIBRARY.card_auth.sub
        : METHOD_LIBRARY.card_auth.sub + " Stripe isn't configured on this server yet, so this option is unavailable.",
      disabled: !stripeConfigured
    },
    { value: "signed_form", ...METHOD_LIBRARY.signed_form, disabled: true }
  ];

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!attested) {
      setError("You must confirm you are the parent or legal guardian.");
      return;
    }
    if (method === "signed_form") {
      setError("Signed-form upload isn't enabled yet. Use card verification or self-attest.");
      return;
    }
    if (method === "card_auth" && !stripeConfigured) {
      setError("Card verification needs Stripe configured on the server.");
      return;
    }
    setSubmitting(true);
    setError(null);
    try {
      if (method === "card_auth") {
        const res = await fetch("/api/consent/card-auth/start", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ studentId, parentName, parentEmail, childFirstName })
        });
        if (!res.ok) {
          const body = await res.json().catch(() => null);
          throw new Error(body?.message ?? body?.error ?? `http_${res.status}`);
        }
        const body = await res.json();
        if (body.url) {
          window.location.assign(body.url);
          return;
        }
        throw new Error("missing_checkout_url");
      }

      const res = await fetch("/api/consent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentId,
          parentName,
          parentEmail,
          childFirstName,
          method,
          evidence: { attested: true, attestedVerb: "I am the parent or legal guardian." }
        })
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? `http_${res.status}`);
      }
      router.refresh();
      router.push(`/parent?student=${encodeURIComponent(studentId)}`);
    } catch (err: any) {
      setError(err?.message ?? "failed");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="cs-form" onSubmit={submit}>
      <h2>Record consent</h2>
      <div className="cs-grid">
        <div className="cs-field">
          <label htmlFor="parentName">Your full name</label>
          <input
            id="parentName"
            type="text"
            required
            autoComplete="name"
            value={parentName}
            onChange={(e) => setParentName(e.target.value)}
          />
        </div>
        <div className="cs-field">
          <label htmlFor="parentEmail">Your email</label>
          <input
            id="parentEmail"
            type="email"
            required
            autoComplete="email"
            value={parentEmail}
            onChange={(e) => setParentEmail(e.target.value)}
          />
        </div>
        <div className="cs-field" style={{ gridColumn: "1 / -1" }}>
          <label htmlFor="childFirstName">Your child's first name</label>
          <input
            id="childFirstName"
            type="text"
            required
            value={childFirstName}
            onChange={(e) => setChildFirstName(e.target.value)}
          />
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--qm-muted)", marginBottom: 8 }}>
          Verification method
        </h3>
        <div className="cs-methods">
          {METHODS.map((m) => (
            <label key={m.value} className="cs-method" data-checked={method === m.value}>
              <input
                type="radio"
                name="method"
                value={m.value}
                checked={method === m.value}
                onChange={() => setMethod(m.value)}
              />
              <div className="cs-method-body">
                <span className="cs-method-title">
                  {m.title}
                  <span className="cs-method-tag" data-verifiable={m.verifiable}>{m.tag}</span>
                </span>
                <p className="cs-method-sub">{m.sub}</p>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div className="cs-attest">
        <label>
          <input
            type="checkbox"
            checked={attested}
            onChange={(e) => setAttested(e.target.checked)}
          />
          <span>
            I confirm that I am the parent or legal guardian of {childFirstName || "the child"} named above, and that I have read the disclosure on this page. I consent to the listed data collection and processing on their behalf.
          </span>
        </label>
      </div>

      <div className="cs-submit-row">
        {error && <p className="cs-error">{error}</p>}
        <button
          type="submit"
          className="cs-submit"
          disabled={submitting || !attested}
        >
          {submitting ? "Saving…" : "Record consent"}
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </form>
  );
}
