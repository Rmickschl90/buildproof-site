import type { Metadata } from "next";
import Link from "next/link";
import "../../landing.css";

export const metadata: Metadata = {
  title:
    "How Landlords and Property Managers Can Keep Dispute-Ready Records | Leeward",
  description:
    "Learn how landlords and property managers can maintain dispute-ready records of repairs, vendor work, and tenant communication without adding extra administrative work.",
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

          <p className="bp-eyebrow">Landlords &amp; Property Managers</p>

          <h1>
            How Landlords and Property Managers Can Keep Dispute-Ready Records
          </h1>

          <p className="bp-share-text">
            Documentation tools are usually built with contractors in mind, but
            landlords and property managers face the exact same questions when
            something goes wrong: what happened, when did it happen, and who
            approved it.
          </p>

          <div style={{ display: "grid", gap: "28px", marginTop: "40px" }}>
            <p>
              A tenant disputes a repair charge. A security deposit deduction
              gets challenged. An insurance claim needs proof of when a repair
              was completed and by whom. In every one of these situations, the
              landlord or property manager who kept clear records is in a much
              stronger position than the one relying on memory, text threads,
              and paper work orders.
            </p>

            <h2>Property records carry the same weight as project records</h2>

            <p>
              A repair, a vendor visit, a maintenance request, or a unit
              turnover generates the same kind of history a construction
              project does: photos, approvals, communication, and cost. The
              difference is that this history is often scattered across a
              property manager's phone, email, and paper files instead of
              being organized anywhere.
            </p>

            <h2>Common gaps in landlord and property manager documentation</h2>

            <p>
              Vendor coordination frequently happens over text messages that
              get buried or deleted. Photos of completed repairs sit in a
              camera roll with no connection to the work order they document.
              Verbal approval for a repair cost is given over the phone, with
              nothing written down until an invoice arrives — and by then, the
              amount is often disputed.
            </p>

            <h2>What a dispute-ready property record should include</h2>

            <ul>
              <li>A timestamped timeline of repairs, visits, and vendor work</li>
              <li>Photos connected to the specific job they document</li>
              <li>Written approval for repair costs before work is billed</li>
              <li>Communication history with vendors and tenants</li>
              <li>A record of payments made against each job</li>
            </ul>

            <p>
              None of this needs to be complicated. It needs to exist, and it
              needs to be organized well enough to pull up quickly when a
              question arises weeks or months later.
            </p>

            <h2>Built for more than one type of team</h2>

            <p>
              Leeward started as a documentation tool for contractors, but the
              underlying problem — proving what happened, when, and who
              approved it — is identical for landlords, property managers, and
              anyone else responsible for maintaining rental property or
              managing vendor work. The same timeline, approval, and record
              system applies whether the job is a full renovation or a single
              maintenance call.
            </p>

            <h2>How Leeward helps</h2>

            <p>
              Leeward helps landlords, property managers, contractors, and
              subcontractors maintain a timestamped record of repairs, vendor
              communication, photo documentation, cost approvals, payment
              tracking, and exportable dispute-ready records in one organized
              timeline.
            </p>

            <p>
              Good records are rarely appreciated when everything goes
              smoothly. They become invaluable the moment a tenant, vendor, or
              insurer asks a question you need to answer with proof.
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
