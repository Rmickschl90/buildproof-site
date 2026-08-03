import type { Metadata } from "next";
import Link from "next/link";
import "../../landing.css";

export const metadata: Metadata = {
  title:
    "A Field Guide to Working Offline: Why Connectivity Shouldn't Break Your Documentation | Leeward",
  description:
    "Learn why offline reliability matters for project documentation, and what to look for in a tool built to handle spotty jobsite connectivity without losing your records.",
};

export default function ArticlePage() {
  return (
    <main className="bp-page">
      <section className="bp-section">
        <div className="bp-container" style={{ maxWidth: "860px" }}>
          <div style={{ marginBottom: "24px" }}>
            <Link href="/blog" style={{ textDecoration: "none" }}>
              Back to Blog
            </Link>
          </div>

          <p className="bp-eyebrow">Offline Reliability</p>

          <h1>
            A Field Guide to Working Offline: Why Connectivity Shouldn't
            Break Your Documentation
          </h1>

          <p className="bp-share-text">
            A basement, a rural jobsite, a rooftop, a parking garage — the
            places where documentation matters most are often the places
            with the worst signal.
          </p>

          <div style={{ display: "grid", gap: "28px", marginTop: "40px" }}>
            <p>
              Most project documentation tools are built and tested with a
              strong Wi-Fi connection in mind. That works fine in a demo. It
              falls apart the first time a contractor tries to log an entry
              or upload a photo from a jobsite with one bar of signal, and the
              app either fails silently or loses what they were trying to
              save.
            </p>

            <h2>Why this matters more than it seems</h2>

            <p>
              Documentation is most valuable when it's created in the moment
              — a photo of a condition before it's covered up, a note about a
              conversation that just happened, an approval requested while
              everyone is still on site. If the tool only works with a
              connection, the record either doesn't get made, or it gets made
              later from memory, which defeats the purpose.
            </p>

            <h2>What offline reliability actually requires</h2>

            <p>
              It's not enough for an app to simply "work without internet."
              Real offline reliability means every entry, photo, approval,
              and update queues locally and syncs automatically the moment a
              connection returns — without duplicating records, without
              losing camera-captured photos to a crashed tab, and without
              silently dropping anything.
            </p>

            <h2>Camera photos are the hardest part to get right</h2>

            <p>
              Photos taken directly from a phone's camera while offline are
              especially fragile. If they're held in memory as a temporary
              file reference rather than saved as durable bytes the moment
              they're captured, they can vanish the instant the browser tab
              is backgrounded, the phone locks, or the app is reopened later
              — a quiet failure that's easy to miss until it's too late to
              recover the photo.
            </p>

            <h2>What to look for</h2>

            <ul>
              <li>Entries and photos save instantly, even with zero signal</li>
              <li>Automatic sync when connectivity returns — no manual retry</li>
              <li>No duplicate records if the same action queues twice</li>
              <li>Nothing silently fails without telling you</li>
            </ul>

            <h2>How Leeward helps</h2>

            <p>
              Leeward is built mobile-first for field use and works fully
              offline — entries, attachments, approvals, sends, and payments
              all queue locally and sync automatically the moment
              connectivity returns, with camera-captured photos converted to
              durable storage the instant they're taken so nothing is lost
              between the jobsite and the office.
            </p>

            <div style={{ marginTop: "20px" }}>
              <Link
                href="/"
                className="bp-primary"
                style={{
                  display: "inline-flex",
                  textDecoration: "none",
                  padding: "14px 20px",
                }}
              >
                Learn more about Leeward
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
