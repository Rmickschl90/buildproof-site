import type { Metadata } from "next";
import Link from "next/link";
import "../../landing.css";

export const metadata: Metadata = {
  title:
    "Tracking Partial Payments and Deposits Without Losing the Paper Trail | Leeward",
  description:
    "Learn how contractors, subcontractors, landlords, and property managers can track deposits and partial payments without losing the record of what was actually paid.",
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

          <p className="bp-eyebrow">Payments</p>

          <h1>
            Tracking Partial Payments and Deposits Without Losing the Paper
            Trail
          </h1>

          <p className="bp-share-text">
            "Did the client pay the deposit?" should never be a question
            answered by scrolling through a bank app trying to match a
            deposit to a job.
          </p>

          <div style={{ display: "grid", gap: "28px", marginTop: "40px" }}>
            <p>
              Most projects don't get paid in one lump sum. A deposit comes in
              before work starts, a partial payment arrives midway, and the
              balance is settled at the end. Each of those payments should be
              tied to a specific job — but for a lot of contractors,
              subcontractors, landlords, and property managers, that
              connection lives only in a bank statement or a mental note.
            </p>

            <h2>Why payment records get disconnected from the work</h2>

            <p>
              A deposit gets paid over Venmo. A partial payment shows up as a
              check number in a bank feed. Weeks later, when it's time to
              figure out the balance due, someone has to reconstruct which
              payments belonged to which job — and that reconstruction is
              where mistakes and disputes start.
            </p>

            <h2>What a dependable payment record should include</h2>

            <ul>
              <li>The date each payment was received</li>
              <li>The amount</li>
              <li>An optional note — "Venmo," "check #1042," and so on</li>
              <li>A running Balance Due that updates automatically</li>
            </ul>

            <p>
              None of this needs to be complicated bookkeeping. It needs to
              exist in one place, attached to the job it belongs to, so
              "what's left to pay" is always a lookup instead of a
              calculation.
            </p>

            <h2>The contract total shouldn't move — the balance should</h2>

            <p>
              A common mistake is letting logged payments quietly change the
              contract total. The total — the baseline estimate plus any
              approved change orders — should stay fixed. Paid and Balance
              Due are separate figures next to it. That way a client can
              always see what the full job costs and how much of it has
              already been paid, without the two numbers getting tangled
              together.
            </p>

            <h2>Corrections should be visible, not hidden</h2>

            <p>
              Payment records get entered wrong sometimes — the wrong amount,
              the wrong date. When that happens, the fix should be a clear
              correction (delete and re-log), not a quiet edit to a number
              that already existed. A record that can be silently changed
              after the fact isn't much of a record.
            </p>

            <h2>How Leeward helps</h2>

            <p>
              Leeward lets you log payments against a project as they come in
              — with a simple $ amount or % of balance due, plus an optional
              note — and automatically tracks Paid and Balance Due alongside
              the contract total. Clients see the summary through the same
              live invoice link used for the rest of the project record.
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
