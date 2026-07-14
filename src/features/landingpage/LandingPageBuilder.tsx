import { useState } from "react";
import LandingPagePreview from "./LandingPagePreview";

export default function LandingPageBuilder() {

    const [data, setData] = useState({
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

  theme: "green",
});

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

        {/* EXPORT HTML */}
        <button
        
          type="button"
          className="w-full mt-3 p-3 rounded-lg bg-cyan-500 text-white font-bold"
          onClick={() => {
            console.log(data);
            const htmlContent = 
            `
<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${data.title}</title>

<style>
body{
font-family:Arial,sans-serif;
margin:0;
padding:0;
background:#f5f5f5;
}

.hero{
background:#16a34a;
color:white;
text-align:center;
padding:60px 20px;
}

.hero img{
max-width:120px;
margin-bottom:20px;
}

.cover{
width:100%;
height:350px;
object-fit:cover;
}

.content{
max-width:900px;
margin:auto;
padding:30px;
background:white;
}

.btn{
display:inline-block;
background:#16a34a;
color:white;
padding:12px 24px;
border-radius:8px;
text-decoration:none;
}
.progress{
background:#e5e7eb;
height:20px;
border-radius:999px;
overflow:hidden;
margin-bottom:20px;
}

.progress-bar{
background:#16a34a;
height:100%;
width:25%;
}

.card{
background:#f3f4f6;
padding:20px;
border-radius:12px;
margin-bottom:20px;
}

.gallery{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:15px;
margin-top:20px;
}

.gallery img{
width:100%;
border-radius:12px;
}
</style>
</head>

<body>

${data.cover ? `<img class="cover" src="${data.cover}" />` : ""}

<div class="hero">

${data.logo ? `<img src="${data.logo}" />` : ""}

<h1>${data.title}</h1>
<p>${data.subtitle}</p>

</div>

<div class="content">

<p>${data.description}</p>

<h2>Progress Donasi</h2>

<div class="progress">
<div class="progress-bar"></div>
</div>

<p>
Rp ${data.terkumpul}
dari
Rp ${data.targetDonasi}
</p>

<div class="card">
<h3>Rekening Donasi</h3>

<p>${data.bank}</p>

<b>${data.rekening}</b>
</div>

${data.qris ? `
<div class="card">
<h3>Scan QRIS</h3>

<img
src="${data.qris}"
style="width:250px"
>
</div>
` : ""}

<div class="gallery">

${data.galeri1 ? `<img src="${data.galeri1}" />` : ""}
${data.galeri2 ? `<img src="${data.galeri2}" />` : ""}
${data.galeri3 ? `<img src="${data.galeri3}" />` : ""}

</div>

<br><br>

<a
class="btn"
href="https://wa.me/${data.whatsapp}"
target="_blank"
>
Hubungi Kami
</a>

</div>

</div>
<footer
style="
background:#0f172a;
color:white;
padding:30px;
text-align:center;
margin-top:40px;
"
>

<h3>Yayasan Cahaya Intan Sagara</h3>

<p>
WhatsApp:
${data.whatsapp}
</p>

</footer>
</body>
</html>
`;

            const blob = new Blob(
              [htmlContent],
              { type: "text/html" }
            );

            const url = URL.createObjectURL(blob);

            const link =
              document.createElement("a");

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