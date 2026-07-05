import ModuleCard from "../components/ui/ModuleCard";
import StatisticCard from "../components/ui/StatisticCard";

export default function DashboardPage() {
  return (
    <div style={{ padding: 30 }}>
      <h1>🚀 Creative One Dashboard</h1>

      <p>Satu Platform • Ribuan Manfaat</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: 20,
          marginTop: 30,
          marginBottom: 40,
        }}
      >
        <StatisticCard
          icon="👥"
          title="Total Pengguna"
          value="12.540"
        />

        <StatisticCard
          icon="🏘️"
          title="Layanan Desa"
          value="352"
        />

        <StatisticCard
          icon="🎨"
          title="Desain Dibuat"
          value="1.240"
        />

        <StatisticCard
          icon="🤖"
          title="AI Request"
          value="9.530"
        />
      </div>

      <h2>Modul Creative One</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: 20,
          marginTop: 20,
        }}
      >
        <ModuleCard
          icon="🎨"
          title="Creative Studio"
          description="Poster, Banner, Kalender dan Sertifikat."
        />

        <ModuleCard
          icon="⚖️"
          title="Creative Faraidh"
          description="Kalkulator Waris Syariah."
        />

        <ModuleCard
          icon="🏘️"
          title="Creative Village"
          description="Administrasi Desa Digital."
        />

        <ModuleCard
          icon="💧"
          title="Creative Water"
          description="Manajemen Pelanggan Air."
        />

        <ModuleCard
          icon="🌾"
          title="Creative Agriculture"
          description="Smart Farming & AI."
        />

        <ModuleCard
          icon="🐄"
          title="Creative Livestock"
          description="Peternakan Modern."
        />

        <ModuleCard
          icon="🐟"
          title="Creative Marine"
          description="Manajemen Nelayan."
        />

        <ModuleCard
          icon="🕌"
          title="Creative Foundation"
          description="Yayasan & Pesantren."
        />
      </div>
    </div>
  );
}