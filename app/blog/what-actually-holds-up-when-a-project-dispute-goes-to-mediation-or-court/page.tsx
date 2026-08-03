import type { Metadata } from "next";
import Link from "next/link";
import "../../landing.css";

export const metadata: Metadata = {
  title:
    "What Actually Holds Up When a Project Dispute Goes to Mediation or Court | Leeward",
  description:
    "Learn what kind of project documentation tends to hold up when a dispute reaches mediation or court, and how to keep dispute-ready records as work happens.",
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

          <p className="bp-eyebrow">Dispute-Ready Records</p>

          <h1>
            What Actually Holds Up When a Project Dispute Goes to Mediation
            or Court
          </h1>

          <p className="bp-share-text">
            This isn't legal advice — every dispute is different, and an
            attorney is the right person to weigh in on any specific
            situation. But there are patterns in what kind of documentation
            tends to matter when a disagreement escalates.
          </p>

          <div style={{ display: "grid", gap: "28px", marginTop: "40px" }}>
            <p>
              Most project disputes never reach mediation or court. But the
              small number that do share something in common: the party with
              a clear, organized, contemporaneous record is in a
              fundamentally stronger position than the party reconstructing
              events from memory after the fact.
            </p>

            <h2>Contemporaneous beats reconstructed</h2>

            <p>
              A record created while the work was happening — a photo taken
              on the day, an approval logged at the time it was given, a note
              written the same afternoon — generally carries more weight than
              a summary written after a dispute has already started.
              Reconstructed timelines are more vulnerable to gaps, and gaps
              invite doubt.
            </p>

            <h2>What tends to matter</h2>

            <ul>
              <li>Timestamps that weren't added or edited after the fact</li>
              <li>Photos connected to a specific date and a specific job</li>
              <li>Written approvals, not verbal ones remembered differently by each side</li>
              <li>A complete timeline, not isolated screenshots pulled together after the fact</li>
              <li>A record of what was actually delivered or communicated, and when</li>
            </ul>

            <h2>Completeness matters as much as accuracy</h2>

            <p>
              A record with gaps invites the question "what happened during
              the part you didn't document?" — even when the answer is
              nothing unusual. A continuous, day-by-day record is harder to
              poke holes in than a handful of strong photos with long silent
              stretches in between.
            </p>

            <h2>Locked records carry more weight than editable ones</h2>

            <p>
              A record that can still be changed after the fact is a weaker
              record than one that was finalized and locked at the time. If
              an approval, a sent update, or a finalized entry can no longer
              be edited, that itself is part of what makes the record
              credible.
            </p>

            <h2>Build the record before you need it</h2>

            <p>
              None of this is achievable retroactively. The only real
              strategy is documenting as work happens, consistently, so that
              if a dispute ever does escalate, the record already exists
              instead of needing to be assembled under pressure.
            </p>

            <h2>How Leeward helps</h2>

            <p>
              Leeward locks finalized entries and approvals, preserves
              timestamps and delivery history, and generates a complete
              dispute-ready export — including timelines, photos, approvals,
              communication history, and payment records — so the record is
              already built by the time anyone needs it.
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
