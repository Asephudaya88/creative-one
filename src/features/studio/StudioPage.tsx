import { useState } from "react";
import { Search } from "lucide-react";
import TemplateEditor from "./components/TemplateEditor";

export default function StudioPage() {
  const [search, setSearch] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState("");

  const templates = [

  // 🕌 Yayasan & Dakwah Premium
  "Santunan Yatim Premium",
  "Santunan Dhuafa Premium",
  "Wakaf Al-Quran Premium",
  "Pembangunan Masjid",
  "Donasi Renovasi Masjid",
  "Kajian Akbar Modern",
  "Tabligh Akbar Gold",
  "Zakat Fitrah",
  "Qurban Idul Adha",
  "Maulid Nabi",
  "Isra Miraj",
  "Nuzulul Quran",

  // 🎓 Sekolah & Pesantren
  "PPDB Sekolah Premium",
  "PPDB Pesantren",
  "Wisuda Tahfidz Premium",
  "Haflah Akhirussanah",
  "Pengumuman Sekolah",
  "Kenaikan Kelas",
  "Kelulusan Siswa",
  "Sertifikat Gold",
  "Piagam Penghargaan",
  "Kartu Santri",
  "Kartu Pelajar",

  // 🏛️ Desa & Pemerintahan
  "Musyawarah Desa",
  "Posyandu Modern",
  "Gotong Royong",
  "Karang Taruna",
  "BUMDes",
  "APBDes Infografis",
  "Pelayanan Desa",
  "Pengumuman Desa",
  "Smart Desa",
  "Tagihan Air",

  // 💧 SIMATA Air Barokah
  "Tagihan Air Bulanan",
  "Laporan Meter Air",
  "Pelanggan Baru",
  "Promo Sambungan Air",
  "Pemberitahuan Tunggakan",
  "Kartu Pelanggan Air",

  // 💳 Creative Pay
  "Promo Creative Pay",
  "Promo QRIS",
  "Cashback Creative Pay",
  "Top Up Bonus",
  "Transfer Gratis",
  "Merchant Partner",

  // 🛒 UMKM Premium
  "Promo Produk Premium",
  "Flash Sale Premium",
  "Kuliner Nusantara",
  "Marketplace Banner",
  "Promo Jasa",
  "Voucher Diskon",
  "Launching Produk",
  "Testimoni Pelanggan",
  "Promo Gratis Ongkir",
  "Paket Hemat",

  // 🏖️ Wisata & Event
  "Wisata Alam",
  "Festival Desa",
  "Camping Ground",
  "Open Trip",
  "Event Organizer",
  "Gathering Komunitas",

  // 📚 Buku & Media
  "Sampul Buku Premium",
  "Sampul Novel",
  "Buku Keislaman",
  "Modul Pengajian",
  "Buku Motivasi",
  "E-Book Cover",

  // 🖨️ Percetakan Premium
  "Poster Premium",
  "Banner Premium",
  "Spanduk Premium",
  "Baliho Premium",
  "Kalender Tahunan",
  "Undangan Digital",
  "Kartu Nama Premium",
  "Brosur Lipat Tiga",
  "Label Produk",
  "ID Card Profesional",
];

  const filtered = templates.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-black text-slate-800">
            🎨 Creative Studio
          </h1>

          <p className="text-slate-500">
            AI Design • Printing • Branding
          </p>
        </div>

        <button className="px-5 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700">
          + Desain Baru
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-3 text-slate-400 w-5 h-5" />

        <input
          type="text"
          placeholder="Cari template..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-xl pl-10 pr-4 py-3"
        />
      </div>

      {/* Grid Template */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {filtered.map((item) => (
          <div
            key={item}
            onClick={() => setSelectedTemplate(item)}
            className="bg-white rounded-2xl shadow border p-6 hover:shadow-xl transition cursor-pointer group"
          >
            <div className="text-5xl mb-4 group-hover:scale-110 transition">
              🎨
            </div>

            <h3 className="font-bold text-slate-800">
              {item}
            </h3>

            <p className="text-sm text-slate-500 mt-2">
              Klik untuk mulai desain
            </p>
          </div>
        ))}
      </div>

      {/* Editor */}
      {selectedTemplate && (
  <TemplateEditor
    key={selectedTemplate}
    template={selectedTemplate}
  />
     )}
    </div>
  );
}