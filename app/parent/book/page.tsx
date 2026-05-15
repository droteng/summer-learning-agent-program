import Link from "next/link";
import "../../landing.css";
import "../parent.css";
import { loadParentData } from "../_data";
import { requireParent } from "../../lib/auth-server";

export const dynamic = "force-dynamic";

type SearchParams = Promise<{ student?: string; week?: string }>;

export default async function BookScreen({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const { studentId, user } = await requireParent();
  const weekNumber = Number(params?.week ?? 1) || 1;
  const { entitlement } = await loadParentData({ studentId, weekNumber, accountId: user.accountId });

  const q = `?student=${encodeURIComponent(studentId)}&week=${weekNumber}`;

  return (
    <main className="ls-landing pd-screen">
      <header className="ls-nav">
        <Link href="/" className="ls-brand">
          <span className="ls-brand-mark">DSA</span>
          <span className="ls-brand-name">Dr. Spark Academy</span>
        </Link>
        <nav className="ls-nav-links" aria-label="Primary">
          <Link href={`/parent${q}`}>Dashboard</Link>
        </nav>
      </header>

      <div className="pd-screen-head">
        <Link href={`/parent${q}`} className="pd-screen-back">← Dashboard</Link>
        <h1 className="pd-screen-title">Founder's Book</h1>
      </div>

      <div className="pd-screen-body">
        <section className="pd-card pd-book-card" style={{ maxWidth: 880 }}>
          <div className="pd-section-head">
            <h3>Leo and The Game Squad — by Dr. Spark</h3>
            <p>
              A middle-school science &amp; health adventure. Included with every paid plan.
              Pair it with the 5-day Book Club enrichment track on the child map.
            </p>
          </div>
          <div className="pd-book-body">
            <img
              className="pd-book-cover"
              src="/book-cover.jpg"
              alt="Cover of Leo and The Game Squad by Dr. Spark"
              width={160}
              height={240}
            />
            <div className="pd-book-cta">
              {entitlement.founderBook ? (
                <a
                  className="pd-primary"
                  href={`/api/book-download?student=${encodeURIComponent(studentId)}`}
                  download
                >
                  Download PDF →
                </a>
              ) : (
                <Link className="pd-primary" href={`/parent/billing${q}`}>
                  Subscribe to unlock →
                </Link>
              )}
              <p className="pd-book-note">
                Ages 10+. Read together over 5 sessions. Each session pairs with a guided book-club mission
                in the child's enrichment track.
              </p>
              <p className="pd-book-note">
                Available formats: PDF (works on any device). Group-reading tip: take turns reading aloud,
                pause after each Level for the comprehension questions.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
