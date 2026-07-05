import { useState } from "react";
import Logo from "../../components/Logo";

type LoginPageProps = {
  onLogin: () => void;
};

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    console.log("=== LOGIN DIKLIK ===");

    if (!email || !password) {
      alert("Silakan isi email dan password.");
      return;
    }

    setLoading(true);

    try {
      console.log("Mengirim request ke Laravel...");

      const response = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      console.log("Status:", response.status);

      const data = await response.json();

      console.log("Response:", data);

      if (!response.ok) {
        alert(data.message);
        return;
      }

      alert("Login berhasil!");

      const user = {
        id: data.user.id,
        name: data.user.name,
        email: data.user.email,
        role: "Warga/Umum",
        avatar:
         "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80",
         organization: "PT Karangsari Creative Solution",
         balance: 0,
        };

      localStorage.setItem("user", JSON.stringify(user));

      onLogin();
    } catch (error) {
      console.error("ERROR:", error);
      alert("Tidak dapat terhubung ke server Laravel.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#020617,#0f172a,#111827)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 430,
          background: "#0f172a",
          borderRadius: 24,
          padding: 40,
          border: "1px solid rgba(255,255,255,.08)",
          boxShadow: "0 30px 60px rgba(0,0,0,.4)",
        }}
      >
        <Logo />

        <h2
          style={{
            color: "white",
            textAlign: "center",
            marginBottom: 30,
          }}
        >
          Selamat Datang
        </h2>

        <div style={{ marginBottom: 18 }}>
          <label
            style={{
              color: "#94A3B8",
              fontSize: 14,
            }}
          >
            Email
          </label>

          <input
            type="email"
            placeholder="Masukkan email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              marginTop: 8,
              padding: 14,
              borderRadius: 12,
              border: "1px solid #334155",
              background: "#020617",
              color: "white",
              fontSize: 15,
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div style={{ marginBottom: 24 }}>
          <label
            style={{
              color: "#94A3B8",
              fontSize: 14,
            }}
          >
            Password
          </label>

          <input
            type="password"
            placeholder="Masukkan password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              marginTop: 8,
              padding: 14,
              borderRadius: 12,
              border: "1px solid #334155",
              background: "#020617",
              color: "white",
              fontSize: 15,
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>

        <button
          onClick={handleLogin}
          disabled={loading}
          style={{
            width: "100%",
            padding: 15,
            borderRadius: 12,
            border: "none",
            background: "#14b8a6",
            color: "white",
            fontWeight: "bold",
            fontSize: 16,
            cursor: loading ? "not-allowed" : "pointer",
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? "Sedang Masuk..." : "MASUK KE CREATIVE ONE"}
        </button>

        <p
          style={{
            marginTop: 20,
            color: "#64748B",
            textAlign: "center",
            fontSize: 14,
          }}
        >
          © 2026 PT Karangsari Creative Solution
        </p>
      </div>
    </div>
  );
}