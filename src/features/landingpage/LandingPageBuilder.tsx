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
  cover: "",
  theme: "green",
});

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {/* FORM EDITOR */}
      <div className="glass-panel p-6 min-h-[800px]">
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
              Upload Cover Banner
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
               cover: reader.result as string,
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

        {/* AUTO GENERATE COVER */}
        <button
          type="button"
          className="w-full mt-4 p-3 rounded-lg bg-yellow-500 text-black font-bold"
          onClick={() => {
            const title = data.title.toLowerCase();

            if (title.includes("maulid")) {
              setData({
                ...data,
                cover: "/landingpage/maulid.jpeg",
              });
            } else if (
              title.includes("yatim") ||
              title.includes("dhuafa")
            ) {
              setData({
                ...data,
                cover: "/landingpage/yatim.jpg",
              });
            } else if (title.includes("wakaf")) {
              setData({
                ...data,
                cover: "/landingpage/wakaf.jpg",
              });
            } else if (
              title.includes("masjid") ||
              title.includes("mushola")
            ) {
              setData({
                ...data,
                cover: "/landingpage/masjid.jpg",
              });
            } else if (
              title.includes("pengajian") ||
              title.includes("tabligh")
            ) {
              setData({
                ...data,
                cover: "/landingpage/pengajian.jpg",
              });
            } else {
              alert("Template cover belum ditemukan.");
            }
          }}
        >
          ✨ Auto Generate Cover
        </button>
      <div className="glass-panel p-6 pb-24 min-h-[75px]"></div>
      </div>

      {/* PREVIEW */}
      <LandingPagePreview data={data} />

    </div>
  );
}