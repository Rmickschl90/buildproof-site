export default function CancelPage() {
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
        BuildProof
      </p>

      <h1
        style={{
          fontSize: 48,
          lineHeight: 1.05,
          letterSpacing: "-0.05em",
          marginBottom: 24,
        }}
      >
        Checkout canceled.
      </h1>

      <p style={{ fontSize: 20, color: "#475569" }}>
        No payment was completed. You can return to the BuildProof site anytime.
      </p>

      <a
        href="/"
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
        Back to BuildProof
      </a>

      <p style={{ marginTop: 24, color: "#64748b", fontSize: 14 }}>
        Questions? Contact admin@linquelabs.com.
      </p>
    </main>
  );
}