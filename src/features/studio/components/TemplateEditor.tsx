import { useState, useRef, useEffect } from "react";
import { toPng } from "html-to-image";
import { QRCodeCanvas } from "qrcode.react";

import { templateConfig } from "../config/templateConfig";
import { sizePresets } from "../config/sizePresets";
import { themes } from "../config/themes";
import { layoutRegistry } from "../layouts/layoutRegistry";

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
const [canvasSize, setCanvasSize] = useState("business-card");

  const previewRef = useRef<HTMLDivElement>(null);
  const config =
  templateConfig[template as keyof typeof templateConfig];
  if (!config) {
  return (
    <div className="bg-red-100 p-6 rounded-xl">
      <h2 className="font-bold text-red-700">
        Template belum dikonfigurasi:
      </h2>

      <p>{template}</p>
    </div>
  );
}

  const currentSize =
  sizePresets[config.size as keyof typeof sizePresets];

  const currentTheme =
  themes[config.theme as keyof typeof themes];

  const Layout =
  layoutRegistry[config.layout as keyof typeof layoutRegistry];
  useEffect(() => {
    console.log("TEMPLATE:", template);

    switch (template) {
    case "Kartu Nama Premium":
      setCanvasSize("business-card");
      break;

    case "ID Card Profesional":
      setCanvasSize("id-card");
      break;

    case "Label Produk":
      setCanvasSize("label-product");
      break;

    case "Spanduk Premium":
      setCanvasSize("banner-pengajian");
      break;

    case "Banner Premium":
      setCanvasSize("banner-musyawarah");
      break;

    default:
      setCanvasSize("business-card");
  }
  }, [template]);
  
  const downloadPNG = async () => {
  if (!previewRef.current) {
    alert("Preview tidak ditemukan");
    return;
  }

  try {
    const dataUrl = await toPng(
      previewRef.current,
      {
        pixelRatio: 4,
        cacheBust: true,
      }
    );

    const link = document.createElement("a");

    link.download = `creative-one-${Date.now()}.png`;
    link.href = dataUrl;

    link.click();

    alert("PNG HD berhasil dibuat");
  } catch (err) {
    console.error("ERROR EXPORT:", err);
    alert(String(err));
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
          
          <div>
       <label className="block mb-2 font-semibold text-slate-700">
         Ukuran Template
       </label>

       <select
         value={canvasSize}
         onChange={(e) => setCanvasSize(e.target.value)}
         className="w-full border border-slate-300 rounded-xl p-3 text-black"
       >
         {Object.entries(sizePresets).map(([key, size]) => (
           <option key={key} value={key}>
          {size.name}
          </option>
         ))}
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
         style={{
         width: `${currentSize.width}px`,
         height: `${currentSize.height}px`,
         overflow: "hidden",
         }}
        >
         <Layout
           title={title}
           content={content}
           logo={logo}
           theme={currentTheme}
          />
        </div>
      </div>
  </div>
);
}