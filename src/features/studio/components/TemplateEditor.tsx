import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import { QRCodeCanvas } from "qrcode.react";

type Props = {
  template: string;
};

export default function TemplateEditor({ template }: Props) {

  const templateDefaults: Record<string, { title: string; content: string }> = {
    "Kartu Nama Premium": {
      title: "ASEP SAEPUL HUDAYA",
      content: "Direktur PT Karangsari Creative Solution"
    },

    "Santunan Yatim Premium": {
      title: "SANTUNAN YATIM & DHUAFA",
      content: "Mari berbagi kebahagiaan bersama anak-anak yatim dan dhuafa."
    },

  "Wakaf Al-Quran Premium": {
    title: "GERAKAN WAKAF AL-QURAN",
    content: "Salurkan wakaf terbaik Anda untuk generasi Qurani."
  },

  "PPDB Sekolah Premium": {
    title: "PENERIMAAN PESERTA DIDIK BARU",
    content: "Pendaftaran siswa baru telah dibuka."
  },

  "Label Produk": {
    title: "MORING PAKIDULAN",
    content: "Kriuk dan Gurih"
  },

  "Banner Premium": {
    title: "CREATIVE ONE",
    content: "Satu Platform • Ribuan Manfaat"
  }
};

  const [title, setTitle] = useState(
    templateDefaults[template]?.title || template
);

  const [content, setContent] = useState(
    templateDefaults[template]?.content || ""
);

const [theme, setTheme] = useState("blue");
const [logo, setLogo] = useState("");

  const previewRef = useRef<HTMLDivElement>(null);

  const downloadPNG = async () => {
  alert("DOWNLOAD DIKLIK");
  console.log("STEP 1");

  if (!previewRef.current) {
    alert("Preview tidak ditemukan");
    return;
  }

  try {
    const canvas = await html2canvas(previewRef.current);

    alert(`Canvas: ${canvas.width} x ${canvas.height}`);

    const image = canvas.toDataURL("image/png");

    const newTab = window.open();

    if (newTab) {
      newTab.document.write(
        `<img src="${image}" style="max-width:100%">`
      );
    }

    alert("PNG berhasil dibuat");
  } catch (err) {
    console.error(err);
    alert("ERROR HTML2CANVAS");
  }
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
          {template === "Kartu Nama Premium" && (
      <div
       ref={previewRef}
      className="bg-gradient-to-r from-black via-slate-900 to-yellow-700 text-white rounded-2xl p-8 shadow-2xl min-h-[240px]"
  >
    <div className="flex justify-between items-start">
      <div>
        <p className="text-yellow-400 font-bold tracking-widest text-xs uppercase">
          PT KARANGSARI CREATIVE SOLUTION
        </p>

        <h1 className="text-3xl font-black mt-6">
          {title}
        </h1>

        <p className="text-yellow-300 font-semibold mt-2">
          {content}
        </p>

        <div className="mt-6 space-y-1 text-sm">
          <p>📞 0812-3456-7890</p>
          <p>✉ info@creativeone.id</p>
          <p>🌐 creativeone.id</p>
        </div>
      </div>

      <div className="text-center">
        {logo && (
          <img
            src={logo}
            alt="Logo"
            className="w-24 h-24 rounded-full bg-white p-2 object-contain"
          />
        )}

        <div className="mt-4 bg-white p-2 rounded-lg">
          <QRCodeCanvas
            value="https://creativeone.id"
            size={80}
          />
        </div>
      </div>
    </div>
  </div>
)}

{template !== "Kartu Nama Premium" && (
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
)}

      </div>
    </div>
  );
}