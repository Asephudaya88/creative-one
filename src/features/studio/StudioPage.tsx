import { useState } from "react";
import { Search } from "lucide-react";
import TemplateEditor from "./components/TemplateEditor";

export default function StudioPage() {
  const [search, setSearch] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState("");

  const templates = [
    "Poster",
    "Banner",
    "Spanduk",
    "Baliho",
    "Kalender",
    "Sertifikat",
    "Piagam",
    "Undangan",
    "Kartu Nama",
    "Brosur",
    "Label Produk",
    "ID Card",
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
        <TemplateEditor template={selectedTemplate} />
      )}
    </div>
  );
}