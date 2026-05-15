import Link from "next/link";
import "../../landing.css";
import "../auth.css";

type SearchParams = Promise<{ status?: string }>;

const COPY: Record<string, { title: string; body: string; tone: "ok" | "error" }> = {
  ok: {
    title: "Email verified! 🎉",
    body: "Thanks — you're all set. You'll now get weekly reports and password-reset emails at this address.",
    tone: "ok"
  },
  invalid: {
    title: "This verification link expired.",
    body: "Verification links expire after 24 hours. Sign in to your dashboard and click the banner to send a fresh one.",
    tone: "error"
  },
  missing: {
    title: "Verification link missing.",
    body: "The link in your email might have been cut off. Try clicking it again from the original email.",
    tone: "error"
  }
};

export default async function VerifyEmailPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const status = typeof params?.status === "string" ? params.status : "missing";
  const copy = COPY[status] ?? COPY.missing;

  return (
    <main className="ls-landing">
      <header className="ls-nav">
        <Link href="/" className="ls-brand">
          <span className="ls-brand-mark">DSA</span>
          <span className="ls-brand-name">Dr. Spark Academy</span>
        </Link>
      </header>

      <div className="ls-auth-shell">
        <section className="ls-auth-card" style={{ textAlign: "center" }}>
          <span className="ls-eyebrow">Email verification</span>
          <h1>{copy.title}</h1>
          <p className="ls-auth-sub" style={{ textAlign: "center" }}>{copy.body}</p>
          <Link
            href={copy.tone === "ok" ? "/parent" : "/parent/signin"}
            className="ls-cta-primary ls-cta-block"
            style={{ marginTop: 16 }}
          >
            {copy.tone === "ok" ? "Open dashboard →" : "Back to sign-in →"}
          </Link>
        </section>
      </div>
    </main>
  );
}
