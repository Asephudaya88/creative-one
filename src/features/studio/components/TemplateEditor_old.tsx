import { useState } from "react";

type Props = {
  template: string;
};

export default function TemplateEditor({ template }: Props) {
  const defaultContent: Record<string, {
  title: string;
  content: string;
}> = {
  "Santunan Yatim": {
    title: "OPEN DONASI SANTUNAN YATIM",
    content:
      "Mari berbagi kebahagiaan bersama anak-anak yatim.\nSalurkan donasi terbaik Anda untuk masa depan mereka.",
  },

  "Pembangunan Masjid": {
    title: "OPEN DONASI PEMBANGUNAN MASJID",
    content:
      "Mari bersama membangun rumah Allah.\nSemoga menjadi amal jariyah yang terus mengalir.",
  },

  "Wakaf Al-Quran": {
    title: "PROGRAM WAKAF AL-QURAN",
    content:
      "Salurkan wakaf Al-Quran untuk santri dan masyarakat yang membutuhkan.",
  },

  "Promo Produk": {
    title: "PROMO SPESIAL HARI INI",
    content:
      "Diskon hingga 50%.\nPesan sekarang sebelum kehabisan.",
  },

  "Kuliner": {
    title: "PROMO MENU TERBARU",
    content:
      "Nikmati cita rasa terbaik dengan harga spesial.",
  },

  "Sampul Buku": {
    title: "JUDUL BUKU",
    content:
      "Nama Penulis",
  },

  "Sampul Novel": {
    title: "JUDUL NOVEL",
    content:
      "Sebuah karya inspiratif.",
  },

  "Buku Keislaman": {
    title: "BUKU KEISLAMAN",
    content:
      "Menyebarkan ilmu dan manfaat untuk umat.",
  },
};

const [title, setTitle] = useState(
  defaultContent[template]?.title || ""
);

const [content, setContent] = useState(
  defaultContent[template]?.content || ""
);

  const [logo, setLogo] = useState("");

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
            className="w-full border border-slate-300 rounded-xl p-3 text-black"
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
            className="w-full border border-slate-300 rounded-xl p-3 text-black"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold text-slate-700">
            Upload Gambar / Logo
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
            const file = e.target.files?.[0];

            if (file) {
          setLogo(URL.createObjectURL(file));
         }
         }}
         className="w-full border border-slate-300 rounded-xl p-3"
         />
         
        </div>

        <div className="flex gap-3 pt-3">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold">
            🤖 Generate AI
          </button>

          <button className="px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold">
            📥 Download PNG
          </button>
        </div>
      </div>

      <div className="mt-8 border-t pt-6">
        <h3 className="font-bold text-xl mb-3">
          Preview Desain
        </h3>

        <div className="border rounded-xl p-8 bg-gradient-to-br from-blue-600 to-indigo-800 text-white min-h-[300px] flex flex-col justify-center">
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