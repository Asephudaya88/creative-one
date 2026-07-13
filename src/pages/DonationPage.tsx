import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
const galeriKegiatan = [
  "/galeri/kegiatan/1.jpeg",
  "/galeri/kegiatan/2.jpeg",
  "/galeri/kegiatan/3.jpeg",
];

const dokumentasiKegiatan = [
  {
    foto: "/galeri/dokumentasi/1.jpg",
    judul: "Santunan Anak Yatim",
    deskripsi: "Kegiatan santunan dan berbagi kebahagiaan.",
  },

  {
    foto: "/galeri/dokumentasi/2.jpg",
    judul: "Pengajian Umum",
    deskripsi: "Kajian dan tausiyah untuk masyarakat.",
  },

  {
    foto: "/galeri/dokumentasi/3.jpg",
    judul: "Maulid Nabi",
    deskripsi: "Memperingati kelahiran Nabi Muhammad ﷺ.",
  },
];
export default function DonationPage() {
    const [preview, setPreview] = useState<string | null>(null);
    const [nominal, setNominal] = useState("");
    const topDonatur = [
  {
    nama: "Asep Saepul Hudaya",
    nominal: "Rp 1.000.000",
  },
  {
    nama: "Hamba Allah",
    nominal: "Rp 500.000",
  },
  {
    nama: "Yayasan Peduli Umat",
    nominal: "Rp 250.000",
  },
  {
    nama: "Keluarga Ahmad",
    nominal: "Rp 200.000",
  },
  {
    nama: "Hamba Allah",
    nominal: "Rp 100.000",
  },
];
    const donaturLive = [
  "❤️ Hamba Allah berdonasi Rp 100.000",
  "❤️ Asep Saepul Hudaya berdonasi Rp 250.000",
  "❤️ Yayasan Peduli Umat berdonasi Rp 1.000.000",
  "❤️ Keluarga Ahmad berdonasi Rp 500.000",
  "❤️ Hamba Allah berdonasi Rp 50.000",
];

const dokumentasiKegiatan = [
  "/galeri/dokumentasi/1.jpeg",
  "/galeri/dokumentasi/2.jpeg",
  "/galeri/dokumentasi/3.jpeg",
  "/galeri/dokumentasi/4.jpeg",
  "/galeri/dokumentasi/5.jpeg",
  "/galeri/dokumentasi/6.jpeg",
];

  return (
    <div className="min-h-screen bg-gray-50">
        <section className="bg-green-600 text-white py-3 overflow-hidden">
      <div className="whitespace-nowrap animate-marquee">
    {donaturLive.join(" • • • ")}
     </div>
     </section>

      <section className="bg-gradient-to-r from-green-800 via-green-700 to-emerald-600 text-white pt-6 pb-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

 <div className="mb-8">

  <div className="flex justify-center items-center gap-8 mb-6">

    <img
      src="/logo/yayasan.png"
      alt="Yayasan Cahaya Intan Sagara"
      className="h-28 w-28 object-contain bg-white rounded-full p-2 shadow-lg"
    />

    <div className="text-6xl">
      🤝
    </div>

    <img
      src="/logo/alhilal.png"
      alt="Komunitas Sahabat Al-Hilal Garut 2.0"
      className="h-28 w-28 object-contain bg-white rounded-full p-2 shadow-lg"
    />

  </div>

  <div className="text-center">

    <h3 className="font-bold text-2xl text-yellow-300">
      YAYASAN CAHAYA INTAN SAGARA
    </h3>

    <p className="text-white text-lg mt-2">
      BERSAMA KOMUNITAS SAHABAT AL-HILAL GARUT 2.0
    </p>

  </div>

</div>
    
          <h1 className="text-5xl font-bold mb-6">
            Open Donasi Maulid Nabi Muhammad ﷺ
          </h1>

          <p className="text-xl max-w-3xl mx-auto mb-8">
            Mari bersama berbagi kebahagiaan untuk Anak Yatim,
            Dhuafa dan Lansia dalam rangka memperingati
            Maulid Nabi Muhammad ﷺ.
          </p>
            <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/20">

  <h3 className="text-2xl font-bold text-yellow-300 mb-4">
    Allah SWT Berfirman : 
  </h3>

  <blockquote className="border-l-4 border-yellow-300 pl-4 italic text-white text-left">
    Perumpamaan orang yang menginfakkan hartanya di jalan Allah
    seperti sebutir benih yang menumbuhkan tujuh bulir...
    (QS. Al-Baqarah: 261)
  </blockquote>

  <div className="mt-5 bg-white/10 p-4 rounded-xl text-left">

    <h4 className="font-bold text-yellow-300 mb-2">
      Sabda Nabi Muhammad SAW :
    </h4>

    <p className="italic">
      "Aku dan orang yang menanggung anak yatim akan berada di surga seperti ini."
    </p>

    <p className="mt-2 text-yellow-300 font-semibold">
      (HR. Bukhari)
    </p>

  </div>

</div>
          <a
            href="https://wa.me/6285318169106"
            target="_blank"
            rel="noreferrer"
            className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold animate-pulse"
            >
            💝 Donasi Sekarang
            </a>
            <a
            href="https://wa.me/?text=Ayo%20dukung%20Program%20Maulid%20Nabi"
            target="_blank"
            rel="noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold inline-block ml-4 animate-pulse"
            >
            📲 Bagikan WhatsApp
           </a>
           </div>
           <div className="flex justify-center gap-3 mt-6 flex-wrap">

            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">
           ✅ Rekening Resmi Yayasan
            </span>

            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">
            ✅ QRIS Resmi
            </span>

            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">
           🤝 Amanah & Transparan
            </span>
            </div>
           </section>
        
        {/* Countdown Maulid */}
          <section className="max-w-6xl mx-auto px-6 py-8">

        <div className="bg-white rounded-2xl shadow-xl p-6 text-center">

        <p className="text-sm uppercase tracking-widest text-green-600 mb-2">
        Menuju Acara Maulid
    </p>

    <h2 className="text-2xl font-bold text-green-700 mb-8">
      45 Hari Lagi
    </h2>

    {/* Statistik */}
    <div className="grid md:grid-cols-3 gap-6 mb-8">

      <div className="bg-gray-50 rounded-xl shadow p-6 text-center">
        <p className="text-gray-500">Target Donasi</p>
        <h3 className="text-2xl font-bold text-green-600">
          Rp 50.000.000
        </h3>
      </div>

      <div className="bg-gray-50 rounded-xl shadow p-6 text-center">
        <p className="text-gray-500">Terkumpul</p>
        <h3 className="text-2xl font-bold text-blue-600">
          Rp 12.500.000
        </h3>
      </div>

      <div className="bg-gray-50 rounded-xl shadow p-6 text-center">
        <p className="text-gray-500">Jumlah Donatur</p>
        <h3 className="text-2xl font-bold text-pink-600">
          125 Orang
        </h3>
      </div>

    </div>

    {/* Progress Donasi */}
    <div className="bg-gray-50 rounded-xl shadow p-6 mb-8">

      <div className="flex justify-between items-center mb-3">
        <span className="font-semibold text-green-700">
          Progress Donasi
        </span>

        <span className="font-bold text-green-700">
          25%
        </span>
      </div>

      <div className="bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          className="bg-green-600 h-4 rounded-full"
          style={{ width: "25%" }}
        />
      </div>

    </div>

    {/* Top Donatur */}
    <div className="bg-white rounded-2xl shadow-lg p-5">

      <h2 className="text-2xl font-bold text-center mb-8">
        🏆 Top Donatur
      </h2>

      <div className="space-y-4">

        {topDonatur.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-gray-50 rounded-xl px-4 py-3 border"
          >
            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                {index + 1}
              </div>

              <div>
                <p className="font-semibold">
                  {item.nama}
                </p>

                <p className="text-sm text-gray-500">
                  Donatur
                </p>
              </div>

            </div>

            <div className="font-bold text-green-600">
              {item.nominal}
            </div>

          </div>
        ))}

      </div>

    </div>

  </div>

</section>

   {/* Rekening Donasi */}
<section className="max-w-6xl mx-auto px-6 py-10">

  <div className="bg-white rounded-2xl shadow-xl p-8">

    <h2 className="text-3xl font-bold mb-6 text-center">
      Rekening Donasi
    </h2>

    <div className="grid md:grid-cols-2 gap-6">

      {/* Rekening Bank */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 flex flex-col items-center text-center">

        <img
          src="/payment/mandiri.png"
          alt="Bank Mandiri"
          className="h-24 object-contain mb-4"
        />

        <h3 className="font-bold text-green-700 mb-2">
          Bank Mandiri
        </h3>

        <p className="text-2xl font-bold">
          1770025733152
        </p>

        <button
          onClick={() => {
            navigator.clipboard.writeText("1770025733152");
            alert("Nomor rekening berhasil disalin");
          }}
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          📋 Salin Rekening
        </button>

        <p className="text-gray-600 mt-3">
          a.n Yayasan Cahaya Intan Sagara
        </p>

      </div>

      {/* QRIS */}
      <div className="bg-white border rounded-xl p-6 flex flex-col items-center relative">

        <div className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">
          QRIS Resmi
        </div>

        <h3 className="text-lg font-bold text-center mt-6">
          Scan QRIS
        </h3>

        <p className="text-sm text-gray-500 mb-4 text-center">
          Donasi Instan melalui semua E-Wallet & Mobile Banking
        </p>

        <img
          src="/images/qris-donasi.jpg.jpeg"
          alt="QRIS Donasi"
          className="w-56 rounded-xl shadow-lg border"
        />

        <p className="text-center text-sm text-gray-500 mt-3">
          Scan QRIS untuk berdonasi
        </p>

        <a
          href="/images/qris-donasi.jpg.jpeg"
          download
          className="mt-4 bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700"
        >
          📥 Download QRIS
        </a>

      </div>

    </div>

  </div>

</section>

{/* Konfirmasi Donasi */}
<section className="max-w-5xl mx-auto px-6 py-12">

  <h2 className="text-3xl font-bold text-center mb-6">
    Konfirmasi Donasi
  </h2>

  <div className="bg-white rounded-2xl shadow-xl p-8">

    <form className="space-y-5">

      <input
        type="text"
        placeholder="Nama Donatur"
        className="w-full border rounded-xl p-3"
      />

      <input
        type="number"
        value={nominal}
        onChange={(e) => setNominal(e.target.value)}
        placeholder="Nominal Donasi"
        className="w-full border rounded-xl p-4"
      />

      <div className="grid grid-cols-3 gap-2">

        <button
          type="button"
          onClick={() => setNominal("25000")}
          className="bg-green-100 hover:bg-green-200 rounded-lg py-2 font-semibold"
        >
          Rp 25rb
        </button>

        <button
          type="button"
          onClick={() => setNominal("50000")}
          className="bg-green-100 hover:bg-green-200 rounded-lg py-2 font-semibold"
        >
          Rp 50rb
        </button>

        <button
          type="button"
          onClick={() => setNominal("100000")}
          className="bg-green-100 hover:bg-green-200 rounded-lg py-2 font-semibold"
        >
          Rp 100rb
        </button>

        <button
          type="button"
          onClick={() => setNominal("250000")}
          className="bg-green-100 hover:bg-green-200 rounded-lg py-2 font-semibold"
        >
          Rp 250rb
        </button>

        <button
          type="button"
          onClick={() => setNominal("500000")}
          className="bg-green-100 hover:bg-green-200 rounded-lg py-2 font-semibold"
        >
          Rp 500rb
        </button>

        <button
          type="button"
          onClick={() => setNominal("1000000")}
          className="bg-green-600 text-white hover:bg-green-700 rounded-lg py-2 font-bold"
        >
          Rp 1 Juta
        </button>

      </div>

 <select
  className="w-full border rounded-xl p-3"
>
  <option>Transfer Bank</option>
  <option>QRIS</option>
  <option>DANA</option>
  <option>GoPay</option>
  <option>OVO</option>
  <option>ShopeePay</option>
</select>

<input
  type="date"
  className="w-full border rounded-xl p-3"
/>

<textarea
  rows={4}
  placeholder="Doa atau Pesan untuk Anak Yatim dan Dhuafa"
  className="w-full border rounded-xl p-3"
/>

<input
  type="file"
  accept="image/*"
  className="w-full border rounded-xl p-4"
  onChange={(e) => {
    const file = e.target.files?.[0];

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  }}
/>

{preview && (
  <div className="bg-gray-50 p-4 rounded-xl border mt-4">

    <p className="font-semibold mb-3 text-center">
      Preview Bukti Transfer
    </p>

    <img
      src={preview}
      alt="Bukti Transfer"
      className="w-48 h-auto mx-auto rounded-xl shadow-lg border"
    />

  </div>
)}

<button
  type="submit"
  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold transition-all duration-300"
>
  💝 Kirim Konfirmasi Donasi
</button>

</form>

</div>

</section>

      <section className="max-w-6xl mx-auto px-6 py-10">

  <h2 className="text-3xl font-bold text-center mb-8">
    Penggunaan Donasi
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
      <div className="text-4xl mb-3">🍱</div>
      <h3 className="font-bold">Konsumsi Jamaah</h3>
      <p className="text-gray-500 text-sm">
        Paket makanan dan minuman peserta
      </p>
    </div>

    <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
      <div className="text-4xl mb-3">🎁</div>
      <h3 className="font-bold">Santunan Yatim</h3>
      <p className="text-gray-500 text-sm">
        Santunan untuk anak yatim
      </p>
    </div>

    <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
      <div className="text-4xl mb-3">👴</div>
      <h3 className="font-bold">Santunan Lansia</h3>
      <p className="text-gray-500 text-sm">
        Bantuan untuk kaum lansia
         </p>
        </div>

      </div>

    </section>

{/* Dokumentasi Kegiatan */}
<section className="max-w-7xl mx-auto px-6 py-16">

  <h2 className="text-3xl font-bold text-center mb-10">
    📸 Dokumentasi Kegiatan
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    {dokumentasiKegiatan.map((foto, index) => (
      <div
        key={index}
        className="overflow-hidden rounded-2xl shadow-lg"
      >
        <img
          src={foto}
          alt={`Dokumentasi ${index + 1}`}
          className="w-full h-72 object-cover hover:scale-105 transition-all duration-500"
        />
      </div>
    ))}

  </div>

</section>


       {/* Statistik */}
       <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10">

       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

       <div className="bg-white rounded-2xl shadow-lg p-5 text-center">
       <div className="text-3xl mb-2">👦</div>
       <h3 className="font-bold text-green-700">50</h3>
       <p className="text-sm text-gray-600">Anak Yatim</p>
       </div>

       <div className="bg-white rounded-2xl shadow-lg p-5 text-center">
       <div className="text-3xl mb-2">🤝</div>
       <h3 className="font-bold text-green-700">100</h3>
       <p className="text-sm text-gray-600">Dhuafa</p>
       </div>

       <div className="bg-white rounded-2xl shadow-lg p-5 text-center">
       <div className="text-3xl mb-2">👴</div>
       <h3 className="font-bold text-green-700">30</h3>
       <p className="text-sm text-gray-600">Lansia</p>
       </div>

      <div className="bg-white rounded-2xl shadow-lg p-5 text-center">
      <div className="text-3xl mb-2">💝</div>
      <h3 className="font-bold text-green-700">Rp 25 Jt</h3>
      <p className="text-sm text-gray-600">Target Donasi</p>
      </div>

      </div>
      </section>

{/* Progress Donasi */}
<section className="max-w-6xl mx-auto px-6 py-12">
  <div className="bg-white rounded-2xl shadow-xl p-8">

    <h2 className="text-2xl font-bold mb-4 text-center">
      Progress Donasi
    </h2>

    <div className="flex justify-between mb-2">
      <span>Target</span>
      <span className="font-bold">Rp 25.000.000</span>
    </div>

    <div className="flex justify-between mb-4">
      <span>Terkumpul</span>
      <span className="font-bold text-green-600">
        Rp 8.500.000
      </span>
    </div>

    <div className="w-full bg-gray-200 rounded-full h-5">
      <div
        className="bg-green-600 h-5 rounded-full"
        style={{ width: "34%" }}
      />
    </div>

    <p className="text-center mt-3 font-bold text-green-700">
      34% Tercapai
    </p>

  </div>
</section>

       {/* Donatur Terbaru */}
<section className="max-w-6xl mx-auto px-6 py-12">

  <div className="bg-white rounded-2xl shadow-xl p-8">

    <h2 className="text-3xl font-bold text-center mb-8">
      💝 Donatur Terbaru
    </h2>

    <div className="space-y-4">

      <div className="flex items-center gap-2">
      <span>💝</span>
      <span>Hamba Allah</span>
      </div>

      <div className="flex justify-between items-center border-b pb-3">
        <span>Asep Saepul Hudaya</span>
        <span className="font-bold text-green-600">
          Rp 250.000
        </span>
      </div>

      <div className="flex justify-between items-center border-b pb-3">
        <span>Keluarga Bpk Ahmad</span>
        <span className="font-bold text-green-600">
          Rp 500.000
        </span>
      </div>

      <div className="flex justify-between items-center border-b pb-3">
        <span>Hamba Allah</span>
        <span className="font-bold text-green-600">
          Rp 50.000
        </span>
      </div>

      <div className="flex justify-between items-center">
        <span>Yayasan Peduli Umat</span>
        <span className="font-bold text-green-600">
          Rp 1.000.000
        </span>
      </div>

    </div>

  </div>

</section>
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-6">
            Dalil Keutamaan Sedekah
          </h2>

          <blockquote className="border-l-4 border-green-600 pl-4 italic">
            Perumpamaan orang yang menginfakkan hartanya di jalan Allah
            seperti sebutir benih yang menumbuhkan tujuh bulir...
            (QS. Al-Baqarah: 261)
          </blockquote>
          <div className="mt-6 bg-amber-50 border-l-4 border-amber-500 p-5 rounded-xl">
          <h3 className="font-bold text-amber-700 mb-2">
          Keutamaan Menyantuni Anak Yatim
          </h3>

          <p className="italic text-gray-700">
          "Aku dan orang yang menanggung anak yatim akan berada di surga seperti ini."
          </p>

          <p className="mt-2 font-semibold text-amber-700">
          (HR. Bukhari)
          </p>
          </div>
          
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">
          Lokasi Kegiatan
        </h2>

        <p>
          Masjid Jami Miftahul Falah
        </p>

        <p>
          Kp. Cikanyere II RT 002 RW 005,
          Desa Awassagara,
          Kecamatan Cikelet,
          Kabupaten Garut
        </p>
      </section>

      <section className="bg-green-800 text-white py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Mari Menjadi Bagian Dari Kebaikan
        </h2>

        <a
          href="https://wa.me/6285318169106"
          target="_blank"
          rel="noreferrer"
          className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold inline-block mt-4"
        >
          Hubungi Panitia
        </a>
       <div className="flex justify-center gap-6 mt-6">
       
  <a
    href="https://wa.me/6285318169106"
    target="_blank"
    rel="noreferrer"
  >
    <img
      src="/logo/wa.png"
      alt="WhatsApp"
      className="w-12 h-12 hover:scale-110 animate-pulse transition-all duration-300"
    />
  </a>

  <a
    href="mailto:yayasancahayaintansagara@gmail.com"
  >
    <img
      src="/logo/email.png"
      alt="Email"
       className="w-12 h-12 hover:scale-110 animate-pulse transition-all duration-300"
    />
  </a>

</div>
    
      </section>

 <a
  href="https://wa.me/6285318169106"
  target="_blank"
  rel="noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl z-50 hover:scale-110 transition-all duration-300"
>
  <MessageCircle size={32} />
</a>

 <footer className="bg-green-900 text-white mt-10">

  <div className="max-w-6xl mx-auto px-6 py-12">

    <div className="grid md:grid-cols-3 gap-12 items-start">

      {/* Yayasan */}
      <div>
        <h3 className="font-bold text-2xl mb-4 text-yellow-300">
          Yayasan Cahaya Intan Sagara
        </h3>

        <p className="text-green-100 leading-relaxed">
          Bersama Komunitas Sahabat Al-Hilal Garut 2.0
        </p>

        <p className="text-green-200 mt-3 text-sm">
          Open Donasi Maulid Nabi Muhammad ﷺ
        </p>
      </div>

      {/* Kontak */}
      <div>
        <h3 className="font-bold text-2xl mb-4 text-yellow-300">
          Kontak
        </h3>

        <div className="space-y-3 text-green-100">

          <p>
            📞 0853-1816-9106
          </p>

          <p>
            📍 Garut, Jawa Barat
          </p>

          <p>
            ✉️ yayasancahayaintansagara26@gmail.com
          </p>

        </div>
      </div>

      {/* Creative One */}
      <div>
        <h3 className="font-bold text-2xl mb-4 text-yellow-300">
          Creative One
        </h3>

        <p className="text-green-100">
          Satu Platform • Ribuan Manfaat
        </p>

        <p className="text-green-100 mt-2">
          Powered by PT Karangsari Creative Solution
        </p>

        <div className="mt-4 inline-block bg-green-800 px-4 py-2 rounded-full text-sm">
          V11 Donation Landing Page
        </div>

      </div>

    </div>

    <div className="border-t border-green-700 mt-10 pt-6 text-center">

      <p className="text-green-300">
        © 2026 Yayasan Cahaya Intan Sagara
      </p>

      <p className="text-green-400 text-sm mt-2">
        Open Donasi Maulid Nabi Muhammad ﷺ
      </p>

    </div>

  </div>

</footer>
</div>

);
}