import { useState, useRef } from "react";
import html2canvas from "html2canvas";

type Props = {
  template: string;
};

export default function TemplateEditor({ template }: Props) {
  const [title, setTitle] = useState(template);
  const [content, setContent] = useState("");
  const [theme, setTheme] = useState("blue");
  const [logo, setLogo] = useState("");

  const previewRef = useRef<HTMLDivElement>(null);

  const downloadPNG = async () => {
  alert("DOWNLOAD DIKLIK");

  if (!previewRef.current) {
    alert("Preview tidak ditemukan");
    return;
  }

  const canvas = await html2canvas(previewRef.current);

  const link = document.createElement("a");
  link.download = `${title || "creative-design"}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();

  alert("PNG berhasil dibuat");
  
};

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 mt-6">
      <h2 className="text-3xl font-bold text-slate-800 mb-4">
        🎨 Editor {template}
      </h2>

      <div className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Judul Desain"
          className="w-full border border-slate-300 rounded-xl p-3 text-black"
        />

        <textarea
          rows={5}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Isi konten..."
          className="w-full border border-slate-300 rounded-xl p-3 text-black"
        />

        <input
           type="file"
            accept="image/*"
            onChange={(e) => {
           const file = e.target.files?.[0];
           if (!file) return;

          setLogo(URL.createObjectURL(file));
          }}
          className="w-full border border-slate-300 rounded-xl p-3"
        />

        <div>
          <label className="block mb-2 font-semibold text-slate-700">
            Warna Template
          </label>

          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="w-full border border-slate-300 rounded-xl p-3 text-black"
          >
            <option value="blue">🔵 Biru</option>
            <option value="green">🟢 Hijau</option>
            <option value="purple">🟣 Ungu</option>
            <option value="red">🔴 Merah</option>
            <option value="orange">🟠 Orange</option>
            <option value="dark">⚫ Hitam Elegan</option>
          </select>
        </div>

        <div className="flex gap-3">
          <button className="px-5 py-3 bg-blue-600 text-white rounded-xl font-bold">
            🤖 Generate AI
            
          </button>
          <button onClick={downloadPNG} className="px-5 py-3 bg-emerald-600 text-white rounded-xl font-bold">
              📥 Download PNG
           </button>
    
        </div>
      </div>

      <div className="mt-8 border-t pt-6">
        <h3 className="font-bold text-xl mb-3">
          Preview Desain
        </h3>

        <div
         ref={previewRef}
          className={`border rounded-xl p-8 text-white min-h-[300px] flex flex-col justify-center ${
            theme === "blue"
              ? "bg-gradient-to-br from-blue-600 to-indigo-800"
              : theme === "green"
              ? "bg-gradient-to-br from-green-600 to-emerald-800"
              : theme === "purple"
              ? "bg-gradient-to-br from-purple-600 to-fuchsia-800"
              : theme === "red"
              ? "bg-gradient-to-br from-red-600 to-rose-800"
              : theme === "orange"
              ? "bg-gradient-to-br from-orange-500 to-amber-700"
              : "bg-gradient-to-br from-slate-800 to-black"
          }`}
        >
         {logo && (
          <img
            src={logo}
            alt="Logo"
            className="w-28 h-28 object-contain mx-auto mb-6 rounded-full bg-white p-2"
          />
        )}

          <h1 className="text-4xl font-black mb-4 text-center">
            {title || "Judul Desain"}
          </h1>

          <p className="text-white/90 whitespace-pre-wrap text-center leading-relaxed">
            {content || "Isi desain akan muncul di sini..."}
          </p>
        </div>
      </div>
    </div>
  );
}