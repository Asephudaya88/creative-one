import { useState } from "react";

type Props = {
  template: string;
};

export default function TemplateEditor({ template }: Props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 mt-6">
      <h2 className="text-3xl font-bold text-slate-800 mb-2">
        🎨 Editor {template}
      </h2>

      <p className="text-slate-500 mb-6">
        Buat desain profesional dengan bantuan AI Creative Studio.
      </p>

      <div className="space-y-4">
        <div>
          <label className="block mb-2 font-semibold text-slate-700">
            Judul Desain
          </label>

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Contoh: Open Donasi Pembangunan Masjid"
            className="w-full border border-slate-300 rounded-xl p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold text-slate-700">
            Isi Konten
          </label>

          <textarea
            rows={6}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Masukkan isi poster atau banner..."
            className="w-full border border-slate-300 rounded-xl p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold text-slate-700">
            Upload Gambar / Logo
          </label>

          <input
            type="file"
            className="w-full border border-slate-300 rounded-xl p-3"
          />
        </div>

        <div className="flex gap-3 pt-3">
          <button
            className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700"
          >
            🤖 Generate AI
          </button>

          <button
            className="px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700"
          >
            📥 Download PNG
          </button>
        </div>
      </div>

      <div className="mt-8 border-t pt-6">
        <h3 className="font-bold text-xl mb-3">
          Preview Desain
        </h3>

        <div className="border rounded-xl p-6 bg-slate-50 min-h-[250px]">
          <h1 className="text-3xl font-bold mb-3">
            {title || "Judul Desain"}
          </h1>

          <p className="text-slate-700 whitespace-pre-wrap">
            {content || "Isi desain akan muncul di sini..."}
          </p>
        </div>
      </div>
    </div>
  );
}