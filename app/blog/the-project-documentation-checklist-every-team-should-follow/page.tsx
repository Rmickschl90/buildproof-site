import type { Metadata } from "next";
import Link from "next/link";
import "../../landing.css";

export const metadata: Metadata = {
  title: "The Project Documentation Checklist Every Team Should Follow | Leeward",
  description:
    "A practical checklist for maintaining project documentation, approvals, communication records, daily logs, and project history.",
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

          <h1>The Project Documentation Checklist Every Team Should Follow</h1>

          <p className="bp-share-text">
            Strong project records are rarely built at the end of a project.
            They are built one update, approval, photo, and note at a time.
          </p>

          <div style={{ display: "grid", gap: "28px", marginTop: "40px" }}>
            <p>
              Many teams assume documentation means collecting files and storing
              them somewhere safe. In reality, effective project documentation is
              about creating a clear and complete history of what happened
              throughout the life of a project.
            </p>

            <p>
              When documentation is incomplete, teams often struggle to answer
              simple questions about approvals, changes, communication, timelines,
              and project decisions.
            </p>

            <h2>1. Maintain a clear project timeline</h2>

            <p>
              Every project should have a chronological history that shows how the
              work progressed. Timelines help connect updates, approvals, photos,
              and communication into a single record.
            </p>

            <h2>2. Record daily updates</h2>

            <p>
              Daily logs and project updates provide context that is often lost
              over time. Small details recorded today can become extremely
              important weeks or months later.
            </p>

            <h2>3. Capture photo documentation</h2>

            <p>
              Photos help verify progress, conditions, completed work, and project
              changes. Photo documentation becomes significantly more valuable when
              it is tied to a project timeline and supporting notes.
            </p>

            <h2>4. Preserve communication records</h2>

            <p>
              Project communication should not be scattered across multiple
              systems. Communication records help establish what was discussed,
              what decisions were made, and what expectations were communicated.
            </p>

            <h2>5. Track approvals</h2>

            <p>
              Approvals are often some of the most important records in a project.
              Teams should be able to clearly identify who approved something,
              when it was approved, and what information supported that decision.
            </p>

            <h2>6. Organize supporting files</h2>

            <p>
              Documents, attachments, reports, drawings, and other project files
              should remain connected to the work they support instead of being
              stored in isolated locations.
            </p>

            <h2>7. Create exportable project records</h2>

            <p>
              A complete project history should remain accessible even after a
              project is complete. Exportable records help preserve accountability
              and simplify future reference.
            </p>

            <h2>The goal is clarity</h2>

            <p>
              Good project documentation is not about creating more paperwork. It
              is about creating enough clarity that teams can confidently answer
              what happened, when it happened, what was approved, and what
              documentation exists.
            </p>

            <p>
              Leeward helps teams maintain project documentation, communication
              records, approvals, photo documentation, and project history in one
              organized timeline.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
