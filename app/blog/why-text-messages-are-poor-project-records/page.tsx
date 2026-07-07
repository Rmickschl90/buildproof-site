import type { Metadata } from "next";
import Link from "next/link";
import "../../landing.css";

export const metadata: Metadata = {
  title: "Why Text Messages Are Poor Project Records | Leeward",
  description:
    "Learn why text messages are weak project records and how organized documentation, approvals, timelines, and communication records reduce project risk.",
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

          <p className="bp-eyebrow">Communication Records</p>

          <h1>Why Text Messages Are Poor Project Records</h1>

          <p className="bp-share-text">
            Text messages are useful for quick communication, but they are rarely
            enough to maintain dependable project documentation.
          </p>

          <div style={{ display: "grid", gap: "28px", marginTop: "40px" }}>
            <p>
              Many project teams rely on text messages because they are fast,
              familiar, and easy to send from the field. That convenience is useful
              during the workday, but it can create problems when those messages
              become the only record of important project decisions.
            </p>

            <h2>Text messages are easy to lose</h2>

            <p>
              Messages can be buried in long conversations, deleted, split across
              multiple people, or separated from photos, approvals, files, and
              project notes. When records are scattered, it becomes harder to prove
              what was communicated.
            </p>

            <h2>Text messages lack project context</h2>

            <p>
              A message may say what someone agreed to, but it may not clearly show
              which project, update, photo, condition, or approval it belonged to.
              Without context, communication records become harder to trust later.
            </p>

            <h2>Photos and messages are stronger when connected</h2>

            <p>
              Jobsite photos, project updates, approvals, and communication records
              are more useful when they are organized together. A photo without a
              clear timeline may not explain what happened or when it happened.
            </p>

            <h2>Project communication should create project history</h2>

            <p>
              Good communication does more than move a project forward. It also
              creates a record of decisions, changes, expectations, and approvals.
              That record becomes valuable when questions arise.
            </p>

            <h2>Use text messages for quick communication, not final records</h2>

            <p>
              Text messages can still be useful. The problem is relying on them as
              the primary documentation system. Important updates, approvals,
              photos, and files should be preserved in a project timeline that is
              easier to review later.
            </p>

            <p>
              Leeward helps teams maintain communication records, project updates,
              approvals, photo documentation, and project history in one organized
              timeline instead of leaving important information scattered across
              disconnected conversations.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
