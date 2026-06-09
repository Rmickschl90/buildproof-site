export default function SuccessPage() {
  return (
    <main
      style={{
        maxWidth: 760,
        margin: "0 auto",
        padding: "72px 24px",
        lineHeight: 1.7,
        color: "#0f172a",
      }}
    >
      <p
        style={{
          color: "#64748b",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
        }}
      >
        Leeward
      </p>

      <h1
        style={{
          fontSize: 48,
          lineHeight: 1.05,
          letterSpacing: "-0.05em",
          marginBottom: 24,
        }}
      >
        You’re ready to start documenting.
      </h1>

      <p style={{ fontSize: 20, color: "#475569" }}>
        Your Leeward checkout is complete. Open the app below to sign in and
        begin your first project.
      </p>

      <p style={{ fontSize: 18, color: "#475569" }}>
        First-time users will be guided through creating a project, adding
        client info, documenting entries, and sending their first update.
      </p>

      <a
        href="https://buildproof-kappa.vercel.app"
        style={{
          display: "inline-block",
          marginTop: 32,
          background: "#0f172a",
          color: "white",
          padding: "16px 24px",
          borderRadius: 14,
          fontWeight: 700,
          textDecoration: "none",
        }}
      >
        Open Leeward
      </a>

      <p style={{ marginTop: 24, color: "#64748b", fontSize: 14 }}>
        Need help? Contact admin@linquelabs.com.
      </p>
    </main>
  );
}