import type { Metadata } from "next";
import Link from "next/link";
import "../../landing.css";

export const metadata: Metadata = {
  title: "What Good Project Documentation Looks Like | Leeward",
  description:
    "Learn what good project documentation includes, from project timelines and daily logs to approvals, photo records, communication history, and exports.",
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

          <p className="bp-eyebrow">Project Records</p>

          <h1>What Good Project Documentation Looks Like</h1>

          <p className="bp-share-text">
            Good project documentation creates a clear record of work,
            communication, approvals, changes, photos, and supporting files.
          </p>

          <div style={{ display: "grid", gap: "28px", marginTop: "40px" }}>
            <p>
              Good documentation is not just a collection of files. It is a clear
              project record that helps explain what happened, when it happened,
              who approved it, and what information supports the project history.
            </p>

            <h2>Good documentation is organized chronologically</h2>

            <p>
              Project records are easier to understand when they follow the order
              of events. A timeline helps connect updates, photos, approvals,
              notes, and communication records into one structured history.
            </p>

            <h2>Good documentation includes daily updates</h2>

            <p>
              Daily logs and project updates provide context. They help explain
              what work was completed, what changed, what issues appeared, and what
              information mattered on a given day.
            </p>

            <h2>Good documentation connects photos to context</h2>

            <p>
              Photos are more useful when they are tied to project updates,
              timestamps, notes, approvals, or supporting files. A photo record
              should help explain the project, not just exist in a gallery.
            </p>

            <h2>Good documentation preserves approvals</h2>

            <p>
              Approval records should make it clear what was approved, who
              approved it, when approval happened, and what documentation supported
              the decision.
            </p>

            <h2>Good documentation preserves communication history</h2>

            <p>
              Project communication often contains important decisions and
              expectations. Keeping communication records connected to the project
              timeline helps reduce confusion later.
            </p>

            <h2>Good documentation can be exported</h2>

            <p>
              Project history should remain useful after the project is complete.
              Exportable project records help teams preserve documentation for
              future reference, client communication, or accountability.
            </p>

            <h2>Good documentation should be easy to maintain</h2>

            <p>
              Documentation only works if teams actually use it. The best systems
              make recordkeeping a natural part of daily project communication
              instead of a separate administrative burden.
            </p>

            <p>
              Leeward helps teams maintain timelines, daily logs, project updates,
              photo documentation, approvals, communication records, and exportable
              project history in one organized place.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
