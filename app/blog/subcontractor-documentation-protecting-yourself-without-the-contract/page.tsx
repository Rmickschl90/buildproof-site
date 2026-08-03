import type { Metadata } from "next";
import Link from "next/link";
import "../../landing.css";

export const metadata: Metadata = {
  title:
    "Subcontractor Documentation: Protecting Yourself When You're Not the One Holding the Contract | Leeward",
  description:
    "Learn why subcontractors face unique documentation risk, and what records protect you when you don't control the primary contract or the client relationship.",
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

          <p className="bp-eyebrow">Subcontractors</p>

          <h1>
            Subcontractor Documentation: Protecting Yourself When You're Not
            the One Holding the Contract
          </h1>

          <p className="bp-share-text">
            A general contractor has the primary contract and the direct
            client relationship. A subcontractor often has neither — which
            makes their own records even more important, not less.
          </p>

          <div style={{ display: "grid", gap: "28px", marginTop: "40px" }}>
            <p>
              When a dispute happens on a project, the subcontractor is
              frequently in the most exposed position. They may not have
              signed the original contract with the property owner. They may
              be relayed instructions secondhand through a general
              contractor. And if something goes wrong, it's easy for
              responsibility to get pushed downward — especially when there's
              no independent record of what the subcontractor was actually
              told to do.
            </p>

            <h2>Why secondhand instructions create risk</h2>

            <p>
              A scope change relayed verbally from a GC, a "just go ahead and
              do it" over a phone call, a text that gets deleted — none of
              this protects a subcontractor if the GC's own account of events
              differs later. Without an independent record, a subcontractor
              is relying entirely on someone else's memory and someone
              else's incentive to remember it accurately.
            </p>

            <h2>What subcontractors should document independently</h2>

            <ul>
              <li>Every instruction or scope change, regardless of who relayed it</li>
              <li>Photos of conditions and completed work, timestamped</li>
              <li>Any approval received — even informal ones — in writing</li>
              <li>Daily logs of what was done and by whom</li>
            </ul>

            <p>
              This isn't about distrust. It's about not being the only party
              in the chain without a record when a question comes up months
              later.
            </p>

            <h2>Your own records don't need to depend on anyone else's system</h2>

            <p>
              A subcontractor doesn't need to wait for a GC to adopt better
              documentation practices. Keeping an independent timeline of the
              work performed, communication received, and approvals given —
              even informal ones — protects a subcontractor regardless of
              what system anyone else on the project is or isn't using.
            </p>

            <h2>How Leeward helps</h2>

            <p>
              Leeward gives subcontractors, contractors, landlords, and
              property managers their own independent record: a timeline of
              daily updates, photo documentation, communication history, and
              approvals — plus a dispute-ready export that stands on its own,
              regardless of what documentation anyone else on the project
              keeps.
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
