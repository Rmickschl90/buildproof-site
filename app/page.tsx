import "./landing.css";

export default function Home() {
  return (
    <main className="bp-page">
      <header className="bp-header">
        <div className="bp-container bp-header-inner">
          <a href="/" className="bp-logo-link" aria-label="BuildProof home">
            <img
              src="/buildproof-logo.png"
              alt="BuildProof"
              style={{
                width: "264px",
                height: "auto",
                display: "block",
              }}
            />
          </a>

          <nav className="bp-nav">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="mailto:admin@linquelabs.com">Contact</a>
          </nav>
        </div>
      </header>

      <section className="bp-hero">
        <div className="bp-container">
          <h1>
            Clear project history when accountability matters most.
          </h1>

          <p className="bp-subhead">
            BuildProof organizes timelines, approvals, photos, exports, and
            project updates into one structured record with shareable history and
            accountability built in.
          </p>

          <p className="bp-support">
            Most problems don’t come from bad work — they come from bad
            records.
          </p>

          <div className="bp-actions">
            <a
              href="https://buy.stripe.com/9B6dR2f8cgmO5PL7sQaEE00"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#0f172a",
                color: "white",
                borderRadius: "14px",
                padding: "18px 28px",
                fontSize: "16px",
                fontWeight: 700,
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Get Started
            </a>
          </div>

          <div
            className="bp-hero-image-wrap"
            style={{
              marginTop: "72px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src="/hero-timeline.png"
              alt="BuildProof approval workflow"
              style={{
                width: "280px",
                maxWidth: "80vw",
                height: "auto",
                borderRadius: "28px",
                boxShadow: "0 25px 60px rgba(0, 0, 0, 0.12)",
                display: "block",
              }}
            />
          </div>
        </div>
      </section>

      <section className="bp-share-section">
        <div className="bp-container">
          <p className="bp-eyebrow">Structured project communication</p>

          <h2 className="bp-share-title">
            Share clean, read-only project timelines with clients.
          </h2>

          <p className="bp-share-text">
            BuildProof keeps approvals, updates, photos, and finalized records
            organized in chronological order — giving clients a professional way
            to follow project progress without editing access.
          </p>

          <div
            className="bp-hero-image-wrap"
            style={{
              marginTop: "56px",
              marginBottom: "40px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src="/share-timeline.png"
              alt="BuildProof share timeline"
              style={{
                width: "280px",
                maxWidth: "80vw",
                height: "auto",
                borderRadius: "28px",
                boxShadow: "0 25px 60px rgba(0, 0, 0, 0.12)",
                display: "block",
              }}
            />
          </div>
        </div>
      </section>

      <section className="bp-share-section">
        <div className="bp-container">
          <p className="bp-eyebrow">Dispute-ready exports</p>

          <h2 className="bp-share-title">
            Turn project history into organized documentation.
          </h2>

          <p className="bp-share-text">
            BuildProof preserves timeline records, approvals, delivery history,
            view activity, and project details so important records are easier
            to reference when accountability matters.
          </p>

          <div
            style={{
              display: "flex",
              gap: "28px",
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: "56px",
              marginBottom: "40px",
            }}
          >
            <img
              src="/timeline-records.png"
              alt="BuildProof timeline records"
              style={{
                width: "280px",
                maxWidth: "80vw",
                height: "auto",
                borderRadius: "28px",
                boxShadow: "0 25px 60px rgba(0, 0, 0, 0.12)",
                display: "block",
              }}
            />

            <img
              src="/approval-delivery-records.png"
              alt="BuildProof approval and delivery records"
              style={{
                width: "280px",
                maxWidth: "80vw",
                height: "auto",
                borderRadius: "28px",
                boxShadow: "0 25px 60px rgba(0, 0, 0, 0.12)",
                display: "block",
              }}
            />
          </div>
        </div>
      </section>

      <section id="features" className="bp-section">
        <div className="bp-container">
          <h2>Built for clear project history when accountability matters.</h2>

          <div className="bp-grid">
            <div className="bp-card">
              <h3>Chronological Project Records</h3>

              <p>
                Keep project updates, photos, approvals, notes, and attachments
                organized in a clean timeline that shows exactly what happened and
                when.
              </p>
            </div>

            <div className="bp-card">
              <h3>Offline Jobsite Capture</h3>

              <p>
                Continue documenting projects even with unreliable service, then sync
                records later when the connection returns.
              </p>
            </div>

            <div className="bp-card">
              <h3>Approval Tracking</h3>

              <p>
                Keep approvals directly connected to project history with cost impact,
                schedule impact, timestamps, responses, and supporting documentation.
              </p>
            </div>

            <div className="bp-card">
              <h3>Read-Only Client Timelines</h3>

              <p>
                Share professional client-facing timelines that update as the project
                progresses without giving editing access to the underlying records.
              </p>
            </div>

            <div className="bp-card">
              <h3>Frozen Send Snapshots</h3>

              <p>
                Sent updates preserve a locked snapshot of finalized records so the
                project history shared at that moment stays consistent over time.
              </p>
            </div>

            <div className="bp-card">
              <h3>Delivery & View History</h3>

              <p>
                Track sent update history, share-link activity, view timestamps, and
                access details such as IP address records for stronger accountability.
              </p>
            </div>

            <div className="bp-card">
              <h3>Integrity & Timestamp Records</h3>

              <p>
                Preserve important documentation metadata including timestamps,
                integrity tags, approval history, and record details that help support
                project accountability.
              </p>
            </div>

            <div className="bp-card">
              <h3>One-Click Dispute Export Packages</h3>

              <p>
                Generate professional PDF documentation packages containing timelines,
                approvals, attachments, delivery history, view activity, and supporting
                project records.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="bp-section">
        <div className="bp-container">
          <p className="bp-eyebrow">Simple pricing</p>

          <h2 className="bp-share-title">
            Straightforward pricing for growing teams.
          </h2>

          <p className="bp-share-text">
            One plan. Full access to BuildProof’s documentation workflow,
            approvals, exports, offline capability, and client-facing project
            timelines.
          </p>

          <div
            style={{
              marginTop: "56px",
              background: "white",
              border: "1px solid #e2e8f0",
              borderRadius: "28px",
              padding: "48px",
              maxWidth: "560px",
              boxShadow: "0 20px 60px rgba(15, 23, 42, 0.08)",
            }}
          >
            <p
              style={{
                margin: 0,
                color: "#64748b",
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              BuildProof
            </p>

            <div
              style={{
                marginTop: "16px",
                display: "flex",
                alignItems: "baseline",
                gap: "8px",
              }}
            >
              <span
                style={{
                  fontSize: "64px",
                  fontWeight: 900,
                  letterSpacing: "-0.06em",
                  lineHeight: 1,
                }}
              >
                $29
              </span>

              <span
                style={{
                  color: "#64748b",
                  fontSize: "20px",
                  fontWeight: 600,
                }}
              >
                / month
              </span>
            </div>

            <div
              style={{
                marginTop: "32px",
                display: "grid",
                gap: "16px",
                color: "#334155",
                fontSize: "17px",
                lineHeight: 1.7,
              }}
            >
              <div>✓ Unlimited projects</div>
              <div>✓ Approval workflows</div>
              <div>✓ One-click dispute exports</div>
              <div>✓ Offline documentation</div>
              <div>✓ Client-facing timelines</div>
              <div>✓ Delivery & view tracking</div>
            </div>

            <a
              className="bp-primary"
              href="https://buy.stripe.com/9B6dR2f8cgmO5PL7sQaEE00"
              style={{
                marginTop: "40px",
                width: "100%",
                display: "block",
                textAlign: "center",
                textDecoration: "none",
              }}
            >
              Get Started
            </a>

            <p
              style={{
                marginTop: "18px",
                color: "#64748b",
                fontSize: "14px",
              }}
            >
              Pricing and features may continue evolving during rollout.
            </p>
          </div>
        </div>
      </section>

      <footer className="bp-footer">
        <div className="bp-container bp-footer-inner">
          <p>BuildProof © 2026</p>

          <div>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="mailto:admin@linquelabs.com">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}