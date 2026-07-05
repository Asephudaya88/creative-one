export default function Logo() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 30,
      }}
    >
      <div
        style={{
          width: 80,
          height: 80,
          borderRadius: 20,
          background: "linear-gradient(135deg,#14b8a6,#0f766e)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: 34,
          fontWeight: "bold",
          boxShadow: "0 15px 40px rgba(20,184,166,.35)",
        }}
      >
        C
      </div>

      <h1
        style={{
          marginTop: 18,
          marginBottom: 5,
          color: "white",
          fontSize: 32,
          fontWeight: 700,
        }}
      >
        Creative One
      </h1>

      <p
        style={{
          color: "#94A3B8",
          fontSize: 15,
        }}
      >
        Smart Ecosystem Platform
      </p>
    </div>
  );
}