import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leeward Blog | Project Documentation and Communication Records",
  description:
    "Guides about project documentation, communication records, approvals, daily logs, and maintaining clear project history.",
};

export default function BlogPage() {
  return (
    <main className="bp-page">
      <section className="bp-section">
        <div className="bp-container">
          <div style={{ marginBottom: "24px" }}>
            <Link href="/" style={{ textDecoration: "none" }}>
              ← Return to Homepage
            </Link>
          </div>

          <p className="bp-eyebrow">Leeward Blog</p>

          <h1>Project documentation guides for clearer project history.</h1>

          <p className="bp-share-text">
            Practical guides about project documentation, communication records,
            approvals, estimates, and maintaining clear project history when
            accountability matters — for contractors, subcontractors,
            landlords, and property managers alike.
          </p>

          <div className="bp-grid" style={{ marginTop: "48px" }}>
            <Link
              href="/blog/why-project-disputes-start-with-missing-documentation"
              className="bp-card"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h3>Why Project Disputes Often Start With Missing Documentation</h3>
              <p>
                Learn why unclear timelines, scattered communication, and missing
                approvals can turn normal project questions into disputes.
              </p>
            </Link>

            <Link
              href="/blog/the-project-documentation-checklist-every-team-should-follow"
              className="bp-card"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h3>The Project Documentation Checklist Every Team Should Follow</h3>
              <p>
                A practical checklist for maintaining project documentation,
                approvals, communication records, daily logs, and project history.
              </p>
            </Link>

            <Link
              href="/blog/how-to-maintain-a-clear-project-history-from-start-to-finish"
              className="bp-card"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h3>How to Maintain a Clear Project History From Start to Finish</h3>
              <p>
                Learn how to keep project timelines, approvals, communication records,
                and documentation organized from the first day to the last.
              </p>
            </Link>

            <Link
              href="/blog/why-text-messages-are-poor-project-records"
              className="bp-card"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h3>Why Text Messages Are Poor Project Records</h3>
              <p>
                Learn why scattered text messages are weak project records and how organized
                communication history helps protect project clarity.
              </p>
            </Link>

            <Link
              href="/blog/what-good-project-documentation-looks-like"
              className="bp-card"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h3>What Good Project Documentation Looks Like</h3>
              <p>
                Learn what strong project documentation includes, from timelines and daily
                logs to approvals, communication history, photo records, and exports.
              </p>
            </Link>

            <Link
              href="/blog/how-landlords-and-property-managers-can-keep-dispute-ready-records"
              className="bp-card"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h3>How Landlords and Property Managers Can Keep Dispute-Ready Records</h3>
              <p>
                Learn how landlords and property managers can maintain dispute-ready
                records of repairs, vendor work, and tenant communication.
              </p>
            </Link>

            <Link
              href="/blog/change-orders-why-undocumented-scope-changes-cause-payment-disputes"
              className="bp-card"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h3>Change Orders: Why Undocumented Scope Changes Cause the Most Payment Disputes</h3>
              <p>
                Learn why undocumented change orders are one of the most common causes
                of payment disputes, and what a dependable change order record should include.
              </p>
            </Link>

            <Link
              href="/blog/what-belongs-in-a-client-approval-record"
              className="bp-card"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h3>What Belongs in a Client Approval Record</h3>
              <p>
                Learn what a strong client approval record should include, and why
                verbal approval leaves your business exposed.
              </p>
            </Link>

            <Link
              href="/blog/tracking-partial-payments-and-deposits-without-losing-the-paper-trail"
              className="bp-card"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h3>Tracking Partial Payments and Deposits Without Losing the Paper Trail</h3>
              <p>
                Learn how to track deposits and partial payments without losing
                the record of what was actually paid, and when.
              </p>
            </Link>

            <Link
              href="/blog/a-field-guide-to-working-offline-why-connectivity-shouldnt-break-your-documentation"
              className="bp-card"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h3>A Field Guide to Working Offline</h3>
              <p>
                Learn why offline reliability matters for project documentation,
                and what to look for in a tool built for spotty jobsite connectivity.
              </p>
            </Link>

            <Link
              href="/blog/subcontractor-documentation-protecting-yourself-without-the-contract"
              className="bp-card"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h3>Subcontractor Documentation: Protecting Yourself Without the Contract</h3>
              <p>
                Learn why subcontractors face unique documentation risk, and what
                records protect you when you don&apos;t control the primary contract.
              </p>
            </Link>

            <Link
              href="/blog/what-actually-holds-up-when-a-project-dispute-goes-to-mediation-or-court"
              className="bp-card"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h3>What Actually Holds Up in Mediation or Court</h3>
              <p>
                Learn what kind of project documentation tends to hold up when
                a dispute escalates, and how to build the record before you need it.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

