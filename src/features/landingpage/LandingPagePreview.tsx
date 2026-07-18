import { LandingPageData } from "./types";

interface Props {
  data: LandingPageData;
}

export default function LandingPagePreview({ data }: Props) {
const isAIMode = data.aiMode;

const progress = Math.round(
  (Number(data.terkumpul || 0) /
    Number(data.targetDonasi || 1)) *
    100
);
const daysLeft = data.eventDate
  ? Math.max(
      0,
      Math.ceil(
        (new Date(data.eventDate).getTime() -
          new Date().getTime()) /
          (1000 * 60 * 60 * 24)
      )
    )
  : null;
return (
  <div className="bg-white rounded-2xl overflow-hidden shadow-xl">

    {/* HERO */}
    {isAIMode ? (

      <div className="relative h-[500px] overflow-hidden">

        <img
          src={`/templates/${data.template || "maulid"}.jpg`}
          alt="AI Template"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">

          {data.logo && (
            <img
              src={data.logo}
              alt="Logo"
              className="w-24 h-24 mb-4 rounded-full bg-white p-2 shadow-xl"
            />
          )}

          <p className="uppercase tracking-[5px] text-yellow-300 font-bold mb-3">
            Yayasan Pendidikan & Sosial
          </p>
         
         {daysLeft !== null && (
  <div className="inline-block bg-yellow-400 text-black font-bold px-5 py-2 rounded-full mb-4 shadow-lg">
    ⏳ {daysLeft} Hari Lagi
  </div>
)} 

          {data.quote && (
            <div className="mb-4 px-5 py-2 bg-yellow-400/90 text-black font-bold rounded-full shadow-lg">
              ✨ {data.quote}
            </div>
          )}
           
          <h1 className="text-5xl font-bold drop-shadow-2xl">
            {data.title}
          </h1>

          <div className="mt-4 px-5 py-2 bg-yellow-500 text-black font-bold rounded-full shadow-lg">
            🌙 PROGRAM DONASI ISLAMI
          </div>

          <p className="mt-4 text-lg">
            {data.subtitle}
          </p>

          <button className="mt-6 px-8 py-4 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold shadow-xl">
            {data.buttonText || "💝 Donasi Sekarang"}
          </button>

        </div>

      </div>

    ) : (

      <div className="bg-gradient-to-r from-green-600 to-emerald-500 text-white py-12 px-8 text-center">

        {data.logo && (
          <img
            src={data.logo}
            alt="Logo"
            className="w-24 h-24 mx-auto mb-4 bg-white rounded-full p-2"
          />
        )}

        <h1 className="text-4xl font-bold">
          {data.title}
        </h1>

        <p className="mt-3">
          {data.subtitle}
        </p>

      </div>

    )}

    {/* CONTENT SELALU TAMPIL */}

    <div className="p-8 bg-gradient-to-b from-white to-amber-50">

      <div className="text-center mb-8">

        <h2 className="text-3xl font-bold text-green-800">
          Berbagi Kebaikan, Menebar Kebahagiaan
        </h2>

        <div className="bg-white rounded-2xl p-6 shadow-lg mt-6">

          <h3 className="font-bold text-xl text-green-700">
            Kecilnya Donasi Anda,
            Besarnya Manfaat Bagi Mereka
          </h3>

        </div>

        <p className="mt-4 text-gray-700">
          {data.description}
        </p>

      </div>

      {/* Progress Donasi */}
<div className="mt-6 mb-8">

  <div className="flex justify-between text-sm mb-2 text-green-800 font-semibold">
    <span>📈 Progress Donasi</span>
     
  <span className="font-bold text-green-700">
    {progress}%
  </span>
</div>

  <div className="w-full h-6 bg-gray-200 rounded-full overflow-hidden shadow-inner">
    <div
      className="h-full bg-gradient-to-r from-green-500 to-emerald-600"
      style={{ width: `${progress}%` }}
    />
  </div>
<div className="text-center text-sm text-gray-600 mt-2">
  Rp {Number(data.terkumpul || 0).toLocaleString("id-ID")}
  {" "}dari{" "}
  Rp {Number(data.targetDonasi || 0).toLocaleString("id-ID")}
</div>
</div>

       {/* REKENING + QRIS */}

      <div className="
  p-6
  rounded-2xl
  bg-gradient-to-r
  from-green-700
  to-emerald-500
  text-white
  shadow-xl
  flex
  flex-col
  justify-center
">

  <img
    src="/payment/mandiri.png"
    alt="Bank Mandiri"
    className="h-30 w-auto mx-auto mb-4 bg-white p-2 rounded-xl"
  />

  <h3 className="font-bold mb-3 text-center">
    Rekening Donasi
  </h3>

  <p className="text-center">
    {data.bank}
  </p>

  <p className="text-center">
    A/N {data.atasNama}
  </p>

  <p className="text-2xl font-bold mt-2 text-center">
    {data.rekening}
  </p>
   <button
  onClick={() => {
    navigator.clipboard.writeText(data.rekening || "");
    alert("Nomor rekening berhasil disalin");
  }}
  className="mt-3 bg-white/20 px-4 py-2 rounded-lg"
>
  📋 Salin Rekening
</button>

</div>

       {data.qris && (

  <div className="bg-white rounded-3xl shadow-xl p-6 text-center">

    <h3 className="font-bold text-lg text-green-700 mb-4">
      📱 Scan QRIS Donasi
    </h3>

    <div className="bg-green-50 p-4 rounded-2xl">
  
     <a
  href={data.qris}
  target="_blank"
  rel="noreferrer"
>
  <img
    src={data.qris}
    alt="QRIS"
    className="w-56 mx-auto rounded-xl shadow-lg border-4 border-green-200 hover:scale-105 transition"
  />
</a>

    </div>

    <p className="text-xs text-gray-500 mt-3">
      Scan menggunakan aplikasi mobile banking atau e-wallet
    </p>

  </div>

)}
</div>
      {/* GALERI */}

      <div className="mb-8">

        <h3 className="font-bold mb-4 text-xl">
          📸 Dokumentasi Kegiatan
        </h3>

        <div className="grid md:grid-cols-3 gap-4">

          {data.galeri1 && (
            <img
              src={data.galeri1}
              alt=""
              className="rounded-2xl h-40 w-full object-cover shadow-lg"
            />
          )}

          {data.galeri2 && (
            <img
              src={data.galeri2}
              alt=""
              className="rounded-2xl h-40 w-full object-cover shadow-lg"
            />
          )}

          {data.galeri3 && (
            <img
              src={data.galeri3}
              alt=""
              className="rounded-2xl h-40 w-full object-cover shadow-lg"
            />
          )}

        </div>

      </div>

      {/* WHATSAPP */}

      <div className="text-center">

        <a
          href={`https://wa.me/${data.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="inline-block px-8 py-4 bg-green-600 text-white rounded-2xl font-bold shadow-lg"
        >
          📱 Hubungi Kami
        </a>

      </div>
      {/* FOOTER */}

      <div className="bg-green-900 text-white p-8 text-center rounded-2xl mt-10">

        <h3 className="text-2xl font-bold">
          Jazakumullahu Khairan Katsiran
        </h3>

        <p className="mt-2 opacity-100">
          Semoga menjadi amal jariyah yang terus mengalir
        </p>
        
        📍 Desa Awassagara, Kec. Cikelet, Garut
        📱 0853-1816-9106
        🌐 Powered by Creative One

      </div>

    </div>
);
}