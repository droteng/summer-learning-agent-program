import Link from "next/link";
import "../../../landing.css";
import "../quest-map.css";
import "../child-hub.css";
import { findEnrichmentMissions } from "../../../../src/content/index.js";
import { themeForSubject } from "../../../../src/data/subjectTheme.js";

export const dynamic = "force-dynamic";

type SearchParams = Promise<{ student?: string }>;

export default async function BookClubScreen({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const studentId =
    typeof params?.student === "string" && params.student.length > 0 ? params.student : "demo-student";
  const q = `?student=${encodeURIComponent(studentId)}`;

  const bookClubMissions = findEnrichmentMissions("bookClub").map((m: any) => {
    const theme = themeForSubject(m.subject);
    return {
      id: m.id,
      topic: m.topic,
      dayNumber: m.dayNumber,
      token: theme?.token ?? "default"
    };
  });

  return (
    <main className="ls-landing child-hub">
      <header className="ls-nav">
        <Link href="/" className="ls-brand">
          <span className="ls-brand-mark">DSA</span>
          <span className="ls-brand-name">Dr. Spark Academy</span>
        </Link>
        <nav className="ls-nav-links" aria-label="Primary">
          <Link href={`/child/map${q}`}>← Hub</Link>
          <Link href={`/parent/book${q}`}>Parent: download book</Link>
        </nav>
      </header>

      <div className="pd-screen-head" style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 18px" }}>
        <Link href={`/child/map${q}`} className="pd-screen-back">← Hub</Link>
        <h1 className="pd-screen-title">📚 Founder's Book Club</h1>
      </div>

      <div className="pd-screen-body" style={{ display: "grid", gap: 24 }}>
        <section style={{
          display: "grid",
          gridTemplateColumns: "200px 1fr",
          gap: 28,
          alignItems: "center",
          background: "linear-gradient(135deg, #fff7ed 0%, #fef3c7 100%)",
          border: "2px solid var(--ls-line)",
          borderRadius: 20,
          padding: 24
        }}>
          <img
            src="/book-cover.jpg"
            alt="Cover of Leo and The Game Squad by Dr. Spark"
            width={200}
            height={300}
            style={{ borderRadius: 12, boxShadow: "0 14px 32px -16px rgba(15, 23, 42, 0.5)" }}
          />
          <div>
            <span className="ls-eyebrow">A middle-school adventure</span>
            <h2 style={{ margin: "8px 0 10px", fontSize: 28, fontWeight: 900 }}>Leo and The Game Squad</h2>
            <p style={{ margin: "0 0 6px", color: "var(--ls-muted)", lineHeight: 1.55 }}>
              Three friends fall asleep gaming and wake up <strong>inside Leo's body</strong>. They meet Flo
              (their green-skinned guide), Agent T (a suspicious memory T-cell), and battle the Pressure Beast,
              Anxiety Titan, and Queen Toxina to bring balance back.
            </p>
            <p style={{ margin: "0 0 14px", color: "var(--ls-muted)", lineHeight: 1.55 }}>
              <strong>5 book-club missions</strong> guide you through it — read 2–3 levels, answer comprehension
              questions, then talk about it (solo or with a parent or friend).
            </p>
            <Link href={`/parent/book${q}`} className="ls-cta-secondary" style={{ fontSize: 14 }}>
              Ask parent to download the book →
            </Link>
          </div>
        </section>

        <section>
          <h3 style={{ margin: "0 0 14px", fontSize: 20, fontWeight: 800 }}>5 sessions</h3>
          <div style={{ display: "grid", gap: 12 }}>
            {bookClubMissions.map((m) => (
              <Link
                key={m.id}
                href={`/child/map/voyage?student=${encodeURIComponent(studentId)}&quest=${encodeURIComponent(m.id)}#quest`}
                style={{
                  display: "grid",
                  gridTemplateColumns: "48px 1fr auto",
                  alignItems: "center",
                  gap: 16,
                  padding: "16px 22px",
                  background: "white",
                  border: "1px solid var(--ls-line)",
                  borderRadius: 14,
                  textDecoration: "none",
                  color: "inherit",
                  transition: "transform 0.15s, border-color 0.15s"
                }}
              >
                <span style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, var(--ls-accent), var(--ls-rose))",
                  color: "white",
                  display: "grid",
                  placeItems: "center",
                  fontWeight: 900,
                  fontSize: 18
                }}>{m.dayNumber}</span>
                <div>
                  <strong style={{ fontSize: 16 }}>{m.topic}</strong>
                </div>
                <span style={{ color: "var(--ls-accent)", fontSize: 22, fontWeight: 700 }}>→</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
