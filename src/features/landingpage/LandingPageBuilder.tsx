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
<html lang="id">

<head>

<meta charset="UTF-8">

<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0"
/>

<title>${data.title}</title>

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
}

body{
font-family:Arial,sans-serif;
background:#f5f5f5;
color:#333;
}

.hero{
background:#16a34a;
color:white;
padding:80px 20px;
text-align:center;
}

.logo{
width:120px;
height:120px;
border-radius:50%;
background:white;
padding:10px;
margin-bottom:20px;
}

.title{
font-size:52px;
font-weight:bold;
}

.subtitle{
font-size:22px;
margin-top:10px;
}

.content{
max-width:1200px;
margin:auto;
padding:40px 20px;
}

.desc{
text-align:center;
margin-bottom:30px;
font-size:18px;
}

.grid{
display:grid;
grid-template-columns:1fr 1fr;
gap:20px;
margin-bottom:30px;
}

.card{
background:white;
padding:25px;
border-radius:20px;
box-shadow:0 8px 20px rgba(0,0,0,.08);
}

.rekening{
background:linear-gradient(135deg,#15803d,#10b981);
color:white;
text-align:center;
}

.rekening-number{
font-size:36px;
font-weight:bold;
margin-top:10px;
}

.qris{
text-align:center;
}

.qris img{
width:260px;
border-radius:15px;
border:4px solid #dcfce7;
}

.gallery{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:15px;
margin-top:20px;
}

.gallery img{
width:100%;
height:220px;
object-fit:cover;
border-radius:15px;
}

.btn{
display:inline-block;
background:#16a34a;
color:white;
padding:15px 30px;
border-radius:15px;
text-decoration:none;
font-weight:bold;
margin-top:25px;
}

.center{
text-align:center;
}

.footer{
background:#14532d;
color:white;
text-align:center;
padding:40px;
margin-top:50px;
}

.footer h2{
margin-bottom:10px;
}

@media(max-width:768px){

.grid{
grid-template-columns:1fr;
}

.gallery{
grid-template-columns:1fr;
}

.title{
font-size:34px;
}

}

</style>

</head>

<body>

<div class="hero">

${data.logo ? `
<img
  src="${data.logo}"
  class="logo"
/>
` : ""}

<h1 class="title">
${data.title}
</h1>

<p class="subtitle">
${data.subtitle}
</p>

</div>

<div class="content">

<p class="desc">
${data.description}
</p>

<div class="grid">

<div class="card rekening">

<h2>
Rekening Donasi
</h2>

<br>

<p>
${data.bank}
</p>

<p>
A/N ${data.atasNama}
</p>

<div class="rekening-number">
${data.rekening}
</div>

</div>

${data.qris ? `

<div class="card qris">

<h2>
📱 Scan QRIS Donasi
</h2>

<br>

<img src="${data.qris}" />

<p style="margin-top:15px">
Scan menggunakan aplikasi mobile banking atau e-wallet
</p>

</div>

` : ""}

</div>

<h2>
📸 Dokumentasi Kegiatan
</h2>

<div class="gallery">

${data.galeri1 ? `<img src="${data.galeri1}" />` : ""}
${data.galeri2 ? `<img src="${data.galeri2}" />` : ""}
${data.galeri3 ? `<img src="${data.galeri3}" />` : ""}

</div>

<div class="center">

<a
  class="btn"
  href="https://wa.me/${data.whatsapp}"
  target="_blank"
>
📱 Hubungi Kami
</a>

</div>

</div>

<div class="footer">

<h2>
Jazakumullahu Khairan Katsiran
</h2>

<p>
Semoga menjadi amal jariyah yang terus mengalir
</p>

<br>

<p>
📍 Desa Awassagara, Kec. Cikelet, Garut
</p>

<p>
📱 ${data.whatsapp}
</p>

<p>
🌐 Powered by Creative One
</p>

</div>

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

    link.download =
      "landing-page.html";

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