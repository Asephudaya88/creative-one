import { useState } from "react";

type Props = {
  template: string;
};

export default function TemplateEditor({ template }: Props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [logo, setLogo] = useState<string | null>(null);

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 mt-8">
      <h2 className="text-4xl font-black text-slate-800 mb-2">
        🎨 Editor {template}
      </h2>

      <p className="text-slate-500 mb-8">
        Buat desain profesional dengan bantuan AI Creative Studio.
      </p>

      <div className="space-y-5">
        <div>
          <label className="block mb-2 font-bold text-slate-700">
            Judul Desain
          </label>

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Contoh : Open Donasi Pembangunan Masjid"
            className="w-full border-2 border-slate-300 rounded-xl p-4 text-black bg-white"
          />
        </div>

        <div>
          <label className="block mb-2 font-bold text-slate-700">
            Isi Konten
          </label>

          <textarea
            rows={6}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Masukkan isi poster atau banner..."
            className="w-full border-2 border-slate-300 rounded-xl p-4 text-black bg-white"
          />
        </div>

        <div>
          <label className="block mb-2 font-bold text-slate-700">
            Upload Logo / Gambar
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];

              if (file) {
                const reader = new FileReader();

                reader.onloadend = () => {
                  setLogo(reader.result as string);
                };

                reader.readAsDataURL(file);
              }
            }}
            className="w-full border-2 border-slate-300 rounded-xl p-3 bg-white text-black"
          />
        </div>

        <div className="flex gap-4 pt-2">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition">
            🤖 Generate AI
          </button>

          <button className="px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition">
            📥 Download PNG
          </button>
        </div>
      </div>

      {/* PREVIEW */}
      <div className="mt-10">
        <h3 className="text-2xl font-bold mb-4 text-slate-800">
          Preview Desain
        </h3>

        <div
          className="
          relative
          overflow-hidden
          rounded-3xl
          p-12
          min-h-[500px]
          text-white
          flex
          flex-col
          justify-center
          items-center
          bg-gradient-to-br
          from-blue-700
          via-indigo-700
          to-purple-800
        "
        >
          {/* ORNAMEN */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

          <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl"></div>

          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

          {/* LOGO */}
          {logo && (
            <img
              src={logo}
              alt="Logo"
              className="w-36 h-36 object-contain bg-white rounded-full p-3 shadow-2xl mb-8 z-10"
            />
          )}

          {/* JUDUL */}
          <h1 className="text-5xl md:text-6xl font-black text-center mb-6 z-10">
            {title || "Judul Desain"}
          </h1>

          {/* GARIS */}
          <div className="w-40 h-1 bg-white rounded-full mb-8 z-10"></div>

          {/* KONTEN */}
          <p className="max-w-3xl text-center text-xl leading-relaxed text-white/95 z-10 whitespace-pre-wrap">
            {content || "Isi desain akan muncul di sini..."}
          </p>

          {/* FOOTER */}
          <div className="absolute bottom-6 text-sm text-white/70">
            Powered by Creative Studio • Creative One
          </div>
        </div>
      </div>
    </div>
  );
}