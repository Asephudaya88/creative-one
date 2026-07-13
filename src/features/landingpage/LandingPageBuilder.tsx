import { useState } from "react";
import LandingPagePreview from "./LandingPagePreview";

export default function LandingPageBuilder() {
  const [data, setData] = useState({
    title: "Open Donasi Maulid Nabi",
    subtitle: "Yayasan Cahaya Intan Sagara",
    description:
      "Mari bersama-sama membantu kegiatan sosial dan dakwah.",
    whatsapp: "6285318169106",
    logo: "",
    theme: "green",
  });

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {/* FORM EDITOR */}
      <div className="glass-panel p-6 min-h-[700px]">
        <h2 className="text-xl font-bold mb-6">
          Landing Page Builder
        </h2>

        <label className="block text-sm mb-2">
          Judul
        </label>

        <input
          value={data.title}
          onChange={(e) =>
            setData({
              ...data,
              title: e.target.value,
            })
          }
          className="w-full p-3 rounded-xl mb-4 bg-white text-black border"
          placeholder="Judul"
        />

        <label className="block text-sm mb-2">
          Sub Judul
        </label>

        <input
          value={data.subtitle}
          onChange={(e) =>
            setData({
              ...data,
              subtitle: e.target.value,
            })
          }
          className="w-full p-3 rounded-xl mb-4 bg-white text-black border"
          placeholder="Sub Judul"
        />

        <label className="block text-sm mb-2">
          Deskripsi
        </label>

        <textarea
          value={data.description}
          onChange={(e) =>
            setData({
              ...data,
              description: e.target.value,
            })
          }
          className="w-full p-3 rounded-xl mb-4 bg-white text-black border"
          rows={6}
        />

        <label className="block text-sm mb-2">
          Nomor WhatsApp
        </label>

        <input
          value={data.whatsapp}
          onChange={(e) =>
            setData({
              ...data,
              whatsapp: e.target.value,
            })
          }
          className="w-full p-3 rounded-xl mb-4 bg-white text-black border"
          placeholder="628xxxxxxxxxx"
        />

        <label className="block text-sm mb-2">
          Upload Logo
        </label>

        <input
          type="file"
          accept="image/*"
          className="w-full p-2 rounded-xl bg-white text-black border"
          onChange={(e) => {
            const file = e.target.files?.[0];

            if (!file) return;

            const reader = new FileReader();

            reader.onload = () => {
              setData({
                ...data,
                logo: reader.result as string,
              });
            };

            reader.readAsDataURL(file);
          }}
        />
      </div>

      {/* PREVIEW */}
      <LandingPagePreview data={data} />
    </div>
  );
}