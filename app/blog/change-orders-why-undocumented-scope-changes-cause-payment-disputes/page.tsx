import type { Metadata } from "next";
import Link from "next/link";
import "../../landing.css";

export const metadata: Metadata = {
  title:
    "Change Orders: Why Undocumented Scope Changes Cause the Most Payment Disputes | Leeward",
  description:
    "Learn why undocumented change orders are one of the most common causes of payment disputes, and what a dependable change order record should include.",
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

          <p className="bp-eyebrow">Estimates &amp; Change Orders</p>

          <h1>
            Change Orders: Why Undocumented Scope Changes Cause the Most
            Payment Disputes
          </h1>

          <p className="bp-share-text">
            Most payment disputes are not about whether work happened. They
            are about whether the client agreed to pay for it.
          </p>

          <div style={{ display: "grid", gap: "28px", marginTop: "40px" }}>
            <p>
              Scope changes are normal on almost every project. A client asks
              for an upgrade, a hidden condition changes the plan, or a
              landlord approves an additional repair while a vendor is
              already on site. None of that is unusual. What causes disputes
              is when that change never gets written down before the work
              begins.
            </p>

            <h2>Why verbal change orders create risk</h2>

            <p>
              A phone call or a conversation on the jobsite feels efficient in
              the moment. But by the time an invoice reflects the added cost,
              the client's memory of what was agreed to — and how much it
              would cost — often does not match what actually shows up on the
              bill. At that point, the dispute is no longer about the work.
              It is about whether the approval ever happened at all.
            </p>

            <h2>What a documented change order should include</h2>

            <ul>
              <li>A clear description of what changed and why</li>
              <li>The exact cost of the change</li>
              <li>Who approved it and when</li>
              <li>A link back to the original baseline estimate</li>
            </ul>

            <p>
              A change order that only exists as a number on a final invoice
              is not a record. A change order that shows what was approved,
              by whom, and when is one.
            </p>

            <h2>Clients should always be able to see the running total</h2>

            <p>
              One of the simplest ways to prevent a dispute is to make sure a
              client can always see the current contract value — the original
              baseline estimate plus every approved change order — rather than
              finding out the total for the first time when the final invoice
              arrives. Surprises at invoice time are where most payment
              disputes are born.
            </p>

            <h2>How this connects to payment disputes</h2>

            <p>
              Trace almost any payment dispute back far enough and it lands on
              the same sentence: "I never agreed to that." A documented change
              order record removes the ambiguity. It does not matter whether
              the client remembers the conversation the same way — the record
              shows what was approved, and that record is what protects both
              sides.
            </p>

            <h2>How Leeward helps</h2>

            <p>
              Leeward's Estimate and Change Order system keeps a baseline
              estimate and every change order that follows it attached to the
              same project timeline, with a running Current Total that updates
              automatically as changes are approved. Clients can view the same
              total through a live, shareable invoice link — so nobody is
              surprised by what shows up on the final bill.
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
