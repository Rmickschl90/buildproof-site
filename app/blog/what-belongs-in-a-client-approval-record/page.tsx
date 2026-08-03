import type { Metadata } from "next";
import Link from "next/link";
import "../../landing.css";

export const metadata: Metadata = {
  title:
    "What Belongs in a Client Approval Record (and Why Verbal Approval Isn't Enough) | Leeward",
  description:
    "Learn what a strong client approval record should include, and why verbal or informal approval leaves contractors, subcontractors, landlords, and property managers exposed.",
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

          <p className="bp-eyebrow">Approvals</p>

          <h1>
            What Belongs in a Client Approval Record (and Why Verbal Approval
            Isn't Enough)
          </h1>

          <p className="bp-share-text">
            A nod, a phone call, or a quick "yes, go ahead" feels like
            approval in the moment. It rarely holds up as proof of approval
            later.
          </p>

          <div style={{ display: "grid", gap: "28px", marginTop: "40px" }}>
            <p>
              Verbal approval is fast, which is exactly why so many
              contractors, subcontractors, landlords, and property managers
              rely on it. The problem shows up later, when a client disputes a
              charge, a cost, or a scope of work, and there is nothing to
              point to except two different memories of the same
              conversation.
            </p>

            <h2>Why verbal approval isn't enough</h2>

            <p>
              Verbal approval leaves no timestamp, no record of exactly what
              was agreed to, and no way to prove it happened at all if the
              client later says otherwise. It puts the business in the
              position of arguing its own version of events instead of
              simply showing the record.
            </p>

            <h2>What a real approval record should show</h2>

            <ul>
              <li>Exactly what was approved — not a general "yes"</li>
              <li>The cost or scope tied to that approval</li>
              <li>Who approved it, by name</li>
              <li>The exact date and time approval was given</li>
              <li>Whether and when the client actually viewed the request</li>
            </ul>

            <p>
              An approval record that only says "approved" without showing
              what was approved is barely stronger than no record at all. The
              detail is what makes it dependable.
            </p>

            <h2>Approvals need to be tied to what they approve</h2>

            <p>
              A strong approval record connects directly to line items — the
              specific costs, materials, or scope changes being approved —
              rather than a single blanket approval covering an entire
              project. When a dispute is about one specific charge, a general
              approval doesn't answer the question. A line-item approval
              does.
            </p>

            <h2>Approval records protect everyone involved</h2>

            <p>
              A clear approval record does not just protect the business from
              disputes. It protects the client too, since it prevents them
              from being charged for anything they did not actually agree to.
              A dependable approval process benefits both sides of the
              relationship.
            </p>

            <h2>How Leeward helps</h2>

            <p>
              Leeward's approval requests are sent to clients through a secure
              share link, with delivery and view history tracked
              automatically. Once a client approves, the record — including
              line items, cost, and timestamp — locks in place and becomes
              part of the project's permanent, exportable history.
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
