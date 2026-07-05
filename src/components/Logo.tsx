export default function Logo() {
  return (
    <div style={{ textAlign: "center", marginBottom: 20 }}>
      <div
        style={{
          width: 60,
          height: 60,
          margin: "0 auto",
          borderRadius: 16,
          background: "linear-gradient(135deg,#14b8a6,#0ea5e9)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          color: "white",
          fontSize: 18,
        }}
      >
        CO
      </div>

      <h3 style={{ color: "white", marginTop: 10 }}>
        Creative One
      </h3>
    </div>
  );
}