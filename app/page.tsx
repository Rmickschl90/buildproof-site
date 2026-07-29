import "./landing.css";

export default function Home() {
  return (
    <main className="bp-page">
      <header className="bp-header">
        <div className="bp-container bp-header-inner">
          <a href="/" className="bp-logo-link" aria-label="Leeward home">
            <img
              src="/leeward-logo.png"
              alt="Leeward"
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
            <a href="/blog">Blog</a>
            <a href="mailto:admin@linquelabs.com">Contact</a>
          </nav>
        </div>
      </header>

      <section className="bp-hero">
        <div className="bp-container">
          <h1>
            Clear records when accountability matters most.
          </h1>

          <p className="bp-subhead">
            Leeward organizes timelines, estimates, change orders, invoices,
            documents, and approvals into one structured record — with
            shareable client history and accountability built in.
          </p>

          <p className="bp-support">
            Most problems don’t come from bad work — they come from bad
            records.
          </p>

          <p className="bp-support" style={{ marginTop: "10px" }}>
            Built for contractors, subcontractors, landlords, property
            managers, and anyone else who needs a clear record of what
            happened.
          </p>

          <div className="bp-actions">
            <a
              href="https://app.getleeward.com/login"
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

          <p
            style={{
              marginTop: "16px",
              color: "#64748b",
              fontSize: "15px",
              fontWeight: 600,
            }}
          >
            Start with a 30-day free trial.
          </p>

          <div
            className="bp-hero-image-wrap"
            style={{
              marginTop: "72px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src="/hero-dashboard-dark.jpg"
              alt="Leeward record view, dark mode"
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
          <p className="bp-eyebrow">Structured record communication</p>

          <h2 className="bp-share-title">
            Share clean, read-only record timelines with clients, tenants,
            or owners.
          </h2>

          <p className="bp-share-text">
            Leeward keeps approvals, updates, photos, and finalized records
            organized in chronological order — giving clients, tenants, or
            property owners a professional way to follow progress without
            editing access.
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
              src="/shared-timeline-view-v2.jpg"
              alt="Leeward read-only shared timeline view"
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
          <p className="bp-eyebrow">Estimates & change orders</p>

          <h2 className="bp-share-title">
            Turn your bid into a running, shareable total.
          </h2>

          <p className="bp-share-text">
            Build a baseline estimate with itemized line items, add change
            orders as the work evolves, and let Leeward keep a running total
            automatically. Log payments as they come in and watch the
            balance due update automatically — no separate spreadsheet, no
            manual math.
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
              src="/estimate-tab-dark.jpg"
              alt="Leeward estimate tab with line items and running total"
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
              src="/log-payment-dark.jpg"
              alt="Leeward log payment dialog with dollar amount or percent of balance due"
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
          <p className="bp-eyebrow">Client invoices</p>

          <h2 className="bp-share-title">
            Share a live invoice link that's always up to date.
          </h2>

          <p className="bp-share-text">
            Send a read-only invoice link showing the current total,
            itemized charges, and balance due after payments — no separate
            document to keep updated by hand.
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
              src="/client-invoice-view-v2.jpg"
              alt="Leeward client-facing invoice view"
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
            Turn a record’s history into organized documentation.
          </h2>

          <p className="bp-share-text">
            Leeward preserves timeline records, approvals, delivery history,
            view activity, and record details — plus reference documents
            like leases, insurance certificates, permits, and inspection
            reports — so everything is organized and ready to export,
            whether you're closing out a job or documenting a rental
            property.
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
              src="/timeline-photo-dark.jpg"
              alt="Leeward timeline with photo documentation"
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
              src="/documents-tab-dark.jpg"
              alt="Leeward reference documents tab"
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
          <p className="bp-eyebrow">Built around how the work actually happens</p>

          <h2 className="bp-share-title">
            Start a record in seconds. Send an update in one tap.
          </h2>

          <p className="bp-share-text">
            Attach photos and files as you go, then send a polished update —
            approvals, photos, and cost changes included — to whoever needs
            to see it, the moment you're ready. Everything works offline and
            syncs automatically when you're back in range.
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
              src="/send-update-dark.jpg"
              alt="Leeward send update composer"
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

      <section className="bp-section">
        <div className="bp-container">
          <div
            style={{
              background: "#0f172a",
              color: "white",
              borderRadius: "32px",
              padding: "56px 32px",
              textAlign: "center",
              boxShadow: "0 25px 70px rgba(15, 23, 42, 0.18)",
            }}
          >
            <p className="bp-eyebrow" style={{ color: "#cbd5e1" }}>
              For crews, offices, and property teams
            </p>

            <h2 style={{ color: "white", marginBottom: "18px" }}>
              One subscription. Your whole team, every record.
            </h2>

            <p
              style={{
                color: "#cbd5e1",
                fontSize: "18px",
                lineHeight: 1.7,
                maxWidth: "680px",
                margin: "0 auto",
              }}
            >
              Invite your crew, office admin, property manager, or partner
              under one Team plan. Every member can access every record — no
              per-record permissions to manage, no re-sharing login
              credentials. The owner keeps billing and control; everyone else
              just gets to work.
            </p>
          </div>
        </div>
      </section>

      <section id="features" className="bp-section">
        <div className="bp-container">
          <h2>Built for clear record history when accountability matters.</h2>

          <div className="bp-grid">
            <div className="bp-card">
              <h3>Chronological Record History</h3>

              <p>
                Keep updates, photos, approvals, notes, and attachments
                organized in a clean timeline that shows exactly what happened
                and when — on a job site, a rental unit, or anywhere else you
                need a record.
              </p>
            </div>

            <div className="bp-card">
              <h3>Estimates & Change Orders</h3>

              <p>
                Build a baseline estimate with line items, add change orders as
                work evolves, and keep a running total that updates
                automatically.
              </p>
            </div>

            <div className="bp-card">
              <h3>Client Invoice Links</h3>

              <p>
                Share a live, read-only invoice link showing the current total,
                itemized charges, and balance due — no separate document to
                keep updated by hand.
              </p>
            </div>

            <div className="bp-card">
              <h3>Payment Tracking</h3>

              <p>
                Log payments as clients pay and see balance due update
                automatically, both in the app and on the client-facing
                invoice.
              </p>
            </div>

            <div className="bp-card">
              <h3>Reference Document Vault</h3>

              <p>
                Keep leases, insurance certificates, permits, inspection
                reports, and other supporting documents attached to a
                record, with the option to include any of them in a dispute
                export.
              </p>
            </div>

            <div className="bp-card">
              <h3>Team Accounts</h3>

              <p>
                Add crew members, office staff, or property management
                teammates to one shared plan so everyone can access the
                same records without swapping logins.
              </p>
            </div>

            <div className="bp-card">
              <h3>Offline Jobsite Capture</h3>

              <p>
                Continue documenting work even with unreliable service, then sync
                records later when the connection returns.
              </p>
            </div>

            <div className="bp-card">
              <h3>Approval Tracking</h3>

              <p>
                Keep approvals directly connected to record history with cost impact,
                schedule impact, timestamps, responses, and supporting documentation.
              </p>
            </div>

            <div className="bp-card">
              <h3>Read-Only Client Timelines</h3>

              <p>
                Share professional client-facing timelines that update as the record
                progresses without giving editing access to the underlying records.
              </p>
            </div>

            <div className="bp-card">
              <h3>Frozen Send Snapshots</h3>

              <p>
                Sent updates preserve a locked snapshot of finalized records so the
                history shared at that moment stays consistent over time.
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
                accountability for any kind of record.
              </p>
            </div>

            <div className="bp-card">
              <h3>One-Click Dispute Export Packages</h3>

              <p>
                Generate professional PDF documentation packages containing timelines,
                approvals, attachments, delivery history, view activity, and supporting
                reference documents.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="bp-section">
        <div className="bp-container">
          <p className="bp-eyebrow">Simple pricing</p>

          <h2 className="bp-share-title">
            Straightforward pricing for solo users and growing teams.
          </h2>

          <p className="bp-share-text">
            Every plan includes Leeward’s full documentation workflow —
            estimates, approvals, exports, offline capability, and
            client-facing timelines. Both plans start with a 30-day free
            trial.
          </p>

          <div
            style={{
              marginTop: "56px",
              display: "flex",
              gap: "28px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                background: "white",
                border: "1px solid #e2e8f0",
                borderRadius: "28px",
                padding: "48px",
                maxWidth: "480px",
                flex: "1 1 380px",
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
                Individual
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
                <div>✓ Unlimited records</div>
                <div>✓ Estimates, change orders & invoices</div>
                <div>✓ One-click dispute exports</div>
                <div>✓ Offline documentation</div>
                <div>✓ Client-facing timelines</div>
                <div>✓ Delivery & view tracking</div>
              </div>

              <a
                className="bp-primary"
                href="https://app.getleeward.com/login"
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
                For one person keeping a clear record of their own work or
                properties.
              </p>
            </div>

            <div
              style={{
                background: "white",
                border: "1px solid #e2e8f0",
                borderRadius: "28px",
                padding: "48px",
                maxWidth: "480px",
                flex: "1 1 380px",
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
                Team
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
                  $69
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
                <div>✓ Everything in Individual</div>
                <div>✓ Up to 5 team members</div>
                <div>✓ Shared access to every record</div>
                <div>✓ One owner manages billing & invites</div>
              </div>

              <a
                className="bp-primary"
                href="https://app.getleeward.com/login"
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
                For crews, offices, and property management teams.
              </p>
            </div>
          </div>

          <p
            style={{
              marginTop: "24px",
              color: "#64748b",
              fontSize: "14px",
            }}
          >
            Pricing and features may continue evolving during rollout.
          </p>
        </div>
      </section>

      <section className="bp-section">
        <div className="bp-container">
          <div
            style={{
              background: "#0f172a",
              color: "white",
              borderRadius: "32px",
              padding: "56px 32px",
              textAlign: "center",
              boxShadow: "0 25px 70px rgba(15, 23, 42, 0.18)",
            }}
          >
            <p
              className="bp-eyebrow"
              style={{ color: "#cbd5e1" }}
            >
              Available on Android
            </p>

            <h2 style={{ color: "white", marginBottom: "18px" }}>
              Use Leeward anywhere the work happens.
            </h2>

            <p
              style={{
                color: "#cbd5e1",
                fontSize: "18px",
                lineHeight: 1.7,
                maxWidth: "680px",
                margin: "0 auto",
              }}
            >
              Start in your browser or install Leeward on your Android device from
              Google Play. iPhone users can access Leeward through the web while App
              Store distribution is being prepared. Built for contractors,
              subcontractors, and property managers who need a clear record
              of work performed.
            </p>

            <div
              style={{
                marginTop: "34px",
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "18px",
              }}
            >
              <a
                href="https://play.google.com/store/apps/details?id=com.linquelabs.leeward"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get Leeward on Google Play"
                style={{ display: "inline-flex" }}
              >
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  style={{
                    height: "72px",
                    width: "auto",
                    display: "block",
                  }}
                />
              </a>
            </div>

            <p
              style={{
                marginTop: "18px",
                color: "#94a3b8",
                fontSize: "14px",
              }}
            >
              Web access is available at app.getleeward.com.
            </p>
          </div>
        </div>
      </section>

      <footer className="bp-footer">
        <div className="bp-container bp-footer-inner">
          <p>Leeward © 2026</p>

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
