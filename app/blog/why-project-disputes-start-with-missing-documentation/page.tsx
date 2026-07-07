import type { Metadata } from "next";
import Link from "next/link";
import "../../landing.css";

export const metadata: Metadata = {
  title: "Why Project Disputes Often Start With Missing Documentation | Leeward",
  description:
    "Learn why project disputes often begin with missing documentation, unclear timelines, scattered communication records, and unproven approvals.",
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

          <p className="bp-eyebrow">Project Documentation</p>

          <h1>Why Project Disputes Often Start With Missing Documentation</h1>

          <p className="bp-share-text">
            Many project disputes do not begin because someone intentionally did
            poor work. They begin because the record of what happened is unclear.
          </p>

          <div style={{ display: "grid", gap: "28px", marginTop: "40px" }}>
            <p>
              When a project is moving quickly, communication often spreads across
              text messages, emails, phone calls, photos, invoices, and verbal
              conversations. That may feel manageable in the moment, but it becomes
              difficult to rely on later when someone asks what was approved, when
              something changed, or what documentation exists.
            </p>

            <p>
              Missing documentation creates uncertainty. A customer may remember a
              conversation differently. A team member may forget when a change was
              approved. Photos may exist, but without a clear timeline they may not
              explain what happened or when.
            </p>

            <h2>Why scattered records create risk</h2>

            <p>
              Project records are most valuable when they are connected. A photo,
              update, approval, or note is stronger when it belongs to a clear
              timeline. Without that timeline, teams may be forced to reconstruct
              events after a problem has already appeared.
            </p>

            <p>
              This is where many disputes become harder than they need to be. The
              issue may not be the work itself. The issue may be that communication,
              approvals, and documentation are spread across too many places.
            </p>

            <h2>What good project documentation should answer</h2>

            <p>A dependable project record should help answer simple questions:</p>

            <ul>
              <li>What happened?</li>
              <li>When did it happen?</li>
              <li>Who approved it?</li>
              <li>What was communicated?</li>
              <li>What photos, notes, files, or records support it?</li>
            </ul>

            <p>
              These questions matter for contractors, project teams, property
              managers, restoration companies, maintenance teams, and other
              project-based organizations that need clear records when accountability
              matters.
            </p>

            <h2>Documentation works best when it happens during the project</h2>

            <p>
              The best time to document a project is while the work is happening.
              Waiting until a dispute appears often means searching through old
              messages, screenshots, photo galleries, spreadsheets, or disconnected
              systems.
            </p>

            <p>
              A better approach is to create project history as part of normal
              communication. Daily logs, jobsite photos, project updates, approval
              requests, file attachments, and delivery history become much more
              useful when they are organized as work progresses.
            </p>

            <h2>How Leeward helps</h2>

            <p>
              Leeward helps teams maintain project documentation, communication
              records, approvals, photo documentation, daily updates, and exportable
              project history in one organized timeline.
            </p>

            <p>
              The goal is not to add administrative burden. The goal is to make
              dependable project records easier to create before questions arise.
            </p>

            <p>
              Clear project history is rarely appreciated when everything goes
              right. It becomes invaluable when questions appear weeks or months
              later.
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


