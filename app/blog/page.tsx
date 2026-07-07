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
          <p className="bp-eyebrow">Leeward Blog</p>

          <h1>Project documentation guides for clearer project history.</h1>

          <p className="bp-share-text">
            Practical guides about project documentation, communication records,
            approvals, daily logs, and maintaining clear project history when
            accountability matters.
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
          </div>
        </div>
      </section>
    </main>
  );
}

