import { detectTemplate } from "./aiGenerator";
import { useState } from "react";
import { LandingPageData } from "./types";
import LandingPagePreview from "./LandingPagePreview";
const aiTemplates = {
  maulid: {
    quote:
      "Menebar Cinta Rasulullah SAW, Menguatkan Ukhuwah Islamiyah",
    theme: "green",
    template: "maulid",
  },

  yatim: {
    quote:
      "Kecilnya Donasi Anda, Besarnya Manfaat Bagi Mereka",
    theme: "blue",
    template: "yatim",
  },

  wakaf: {
    quote:
      "Wakaf Hari Ini, Pahala Mengalir Selamanya",
    theme: "purple",
    template: "wakaf",
  },

  masjid: {
    quote:
      "Mari Menjadi Bagian Dari Pembangunan Rumah Allah",
    theme: "emerald",
    template: "masjid",
  },
};


export default function LandingPageBuilder() {

  const [data, setData] = useState<LandingPageData>({
  title: "Open Donasi Maulid Nabi",
  subtitle: "Yayasan Cahaya Intan Sagara",
  description: "Mari bersama-sama membantu kegiatan sosial dan dakwah.",
  whatsapp: "6285318169106",

  logo: "",
  cover: "",

  targetDonasi: "10000000",
  terkumpul: "2500000",

  bank: "Bank Mandiri",
  rekening: "1770025733152",
  atasNama: "Yayasan Cahaya Intan Sagara",

  qris: "",

  galeri1: "",
  galeri2: "",
  galeri3: "",
  
  buttonText: "Hubungi Kami",

  theme: "green",
});

const generateAIPage = () => {
  const title = data.title.toLowerCase();

  let template = "pengajian";
  let quote = "Menuntut Ilmu, Menjemput Berkah";
  let theme = "red";

  if (title.includes("maulid")) {
    template = "maulid";
    quote =
      "Menebar Cinta Rasulullah SAW, Menguatkan Ukhuwah Islamiyah";
    theme = "green";
  }

  else if (
    title.includes("yatim") ||
    title.includes("dhuafa")
  ) {
    template = "yatim";
    quote =
      "Senyum Mereka Adalah Kebahagiaan Kita";
    theme = "blue";
  }

  else if (
    title.includes("wakaf")
  ) {
    template = "wakaf";
    quote =
      "Satu Huruf Dibaca, Pahala Mengalir Selamanya";
    theme = "purple";
  }

  else if (
    title.includes("masjid") ||
    title.includes("mushola")
  ) {
    template = "masjid";
    quote =
      "Bangun Rumah Allah, Bangun Peradaban";
    theme = "gold";
  }

 setData({
  ...data,

  aiMode: true,

  template,
  quote,
  theme,

  cover: `/templates/${template}.jpg`,
});
};
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {/* FORM EDITOR */}
     <div className="glass-panel p-6 pb-40">
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
             
            <label className="block text-sm mb-2 mt-4">
  Upload QRIS
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
        qris: reader.result as string,
      });
    };
    reader.readAsDataURL(file);
  }}
/>
<label className="block text-sm mb-2 mt-4">
  Galeri Kegiatan 1
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
        galeri1: reader.result as string,
      });
    };

    reader.readAsDataURL(file);
  }}
/>
<label className="block text-sm mb-2 mt-4">
  Galeri Kegiatan 2
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
        galeri2: reader.result as string,
      });
    };

    reader.readAsDataURL(file);
  }}
/>

<label className="block text-sm mb-2 mt-4">
  Galeri Kegiatan 3
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
        galeri3: reader.result as string,
      });
    };

    reader.readAsDataURL(file);
  }}
/>
           <div className="grid grid-cols-2 gap-2 mt-4">

           <button
           type="button"
           className="p-2 rounded-lg bg-green-600 text-white"
           onClick={() =>
           setData({
          ...data,
          cover: "/landingpage/maulid.jpeg",
          })
         }
         >
         🕌 Maulid
         </button>

         <button
         type="button"
         className="p-2 rounded-lg bg-blue-600 text-white"
         onClick={() =>
         setData({
         ...data,
         cover: "/landingpage/yatim.jpg",
         })
         }
          >
         👶 Yatim
         </button>

         <button
         type="button"
         className="p-2 rounded-lg bg-purple-600 text-white"
          onClick={() =>
           setData({
          ...data,
          cover: "/landingpage/wakaf.jpg",
          })
           }
           >
          📖 Wakaf
         </button>

         <button
          type="button"
          className="p-2 rounded-lg bg-orange-600 text-white"
          onClick={() =>
          setData({
          ...data,
          cover: "/landingpage/masjid.jpg",
          })
           }
           >
          🏗 Masjid
          </button>

                    <button
            type="button"
            className="p-2 rounded-lg bg-red-600 text-white col-span-2"
            onClick={() =>
              setData({
                ...data,
                cover: "/landingpage/pengajian.jpg",
              })
            }
          >
            🎤 Pengajian
          </button>

        </div>

<button
  className="w-full mt-4 bg-purple-600 text-white p-3 rounded-xl font-bold"
  onClick={generateAIPage}
>
  ✨ Generate Landing Page AI
</button>

        <button
  className="w-full mt-4 bg-cyan-500 text-white p-3 rounded-xl font-bold"
  onClick={() => {

    const htmlContent = `
<!DOCTYPE html>
<html>
<body>
<h1>${data.title}</h1>
</body>
</html>
`;

    const blob = new Blob(
      [htmlContent],
      { type: "text/html" }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "landing-page.html";

    link.click();

    URL.revokeObjectURL(url);

  }}
>
  📥 Export HTML
</button>

      </div>

      {/* PREVIEW */}
      <LandingPagePreview data={data} />

    </div>
  );
}