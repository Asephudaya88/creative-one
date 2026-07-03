import ModuleCard from "../../components/ui/ModuleCard";

export default function Dashboard() {
  const modules = [
    {
      icon: "🎨",
      title: "Creative Studio",
      description: "Poster, Banner, Kalender, Sertifikat",
    },
    {
      icon: "⚖️",
      title: "Creative Faraidh",
      description: "Kalkulator Waris Syariah",
    },
    {
      icon: "🏘️",
      title: "Creative Village",
      description: "Administrasi Desa Digital",
    },
    {
      icon: "💧",
      title: "Creative Water",
      description: "Manajemen Pelanggan Air",
    },
    {
      icon: "🏫",
      title: "Creative School",
      description: "Sistem Informasi Sekolah",
    },
    {
      icon: "🕌",
      title: "Creative Foundation",
      description: "Yayasan & Pesantren",
    },
    {
      icon: "🤖",
      title: "AI Center",
      description: "Asisten Cerdas Creative One",
    },
  ];

  return (
    <div style={{ padding: "30px" }}>
      <h1>🚀 Creative One Dashboard</h1>

      <p>
        <b>Satu Platform • Ribuan Manfaat</b>
      </p>

      <hr />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))",
          gap: 20,
          marginTop: 30,
        }}
      >
        {modules.map((module) => (
          <ModuleCard
            key={module.title}
            icon={module.icon}
            title={module.title}
            description={module.description}
          />
        ))}
      </div>
    </div>
  );
}