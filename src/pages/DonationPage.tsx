import { useState } from "react";
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
<section className="max-w-6xl mx-auto px-1000 mb-1000">
  <div className="bg-white rounded-2xl shadow-lg p-2000">
    <h2 className="text-xl font-bold text-center mb-1000">
      🕒 Donasi Terbaru
    </h2>

    <div className="space-y-2">
      {donaturLive.map((item, index) => (
        <div
          key={index}
          className="bg-gray-50 rounded-lg px-4 py-3 border"
        >
          {item}
        </div>
      ))}
    </div>
  </div>
</section>
      const galeriKegiatan = [
     "/galeri1.jpg",
     "/galeri2.jpg",
     "/galeri3.jpg",
     "/galeri4.jpg",
     "/galeri5.jpg",
     "/galeri6.jpg",
   ];

  return (
    <div className="min-h-screen bg-gray-50">
        <section className="bg-green-600 text-white py-3 overflow-hidden">
      <div className="whitespace-nowrap animate-marquee">
    {donaturLive.join(" • • • ")}
     </div>
     </section>

      <section className="bg-gradient-to-r from-green-800 via-green-700 to-emerald-600 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="uppercase tracking-widest text-yellow-300 mb-3">
            Yayasan Cahaya Intan Sagara
          </p>

          <h1 className="text-5xl font-bold mb-6">
            Open Donasi Maulid Nabi Muhammad ﷺ
          </h1>

          <p className="text-xl max-w-3xl mx-auto mb-8">
            Mari bersama berbagi kebahagiaan untuk Anak Yatim,
            Dhuafa dan Lansia dalam rangka memperingati
            Maulid Nabi Muhammad ﷺ.
          </p>

          <a
            href="https://wa.me/6285318169106"
            target="_blank"
            rel="noreferrer"
            className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold inline-block"
          >
            💝 Donasi Sekarang
          </a>
          <a
          href="https://wa.me/?text=Ayo%20dukung%20Program%20Maulid%20Nabi"
          target="_blank"
          rel="noreferrer"
           className="inline-block mt-4 text-white underline"
           >
          📲 Bagikan ke WhatsApp
           </a>
           </div>
           </section>
       
        {/* Countdown Maulid */}
       <section className="max-w-6xl mx-auto px-6 py-8">

      <div className="bg-white rounded-2xl shadow-xl p-6 text-center">

      <p className="text-sm uppercase tracking-widest text-green-600 mb-2">
      Menuju Acara Maulid
      </p>

      <h2 className="text-2xl font-bold text-green-700">
      45 Hari Lagi
      <section className="max-w-6xl mx-auto px-6 mt-6 mb-2">
      <div className="grid md:grid-cols-3 gap-6">

    <div className="bg-white rounded-1xl shadow-lg p-6 text-center">
      <p className="text-gray-500">Target Donasi</p>
      <h3 className="text-2xl font-bold text-green-600">
        Rp 50.000.000
      </h3>
      </div>

      <div className="bg-white rounded-1xl shadow-lg p-6 text-center">
      <p className="text-gray-500">Terkumpul</p>
      <h3 className="text-2xl font-bold text-blue-600">
        Rp 12.500.000
      </h3>
      </div>

      <div className="bg-white rounded-1xl shadow-lg p-6 text-center">
      <p className="text-gray-500">Jumlah Donatur</p>
      <h3 className="text-2xl font-bold text-pink-600">
        125 Orang
      </h3>
      </div>

     </div>
     </section>

     <div className="bg-white rounded-2xl shadow-lg p-3 mt-0">

      <div className="flex justify-between items-center mb-3 px-4">
      <span className="font-semibold text-2xl text-green-700">
    Progress Donasi
  </span>

      <span className="font-bold text-green-1000 text-2xl">
    25%
  </span>
</div>
   <div className="ml-6 mr-4 bg-gray-200 rounded-full h-4 overflow-hidden">
  <div
    className="bg-green-600 h-4 rounded-full transition-all duration-1000"
    style={{ width: "25%" }}
  ></div>
</div>

    <section className="max-w-6xl mx-auto px-6 mb-10">

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
              <p className="font-semibold text-base">
                {item.nama}
              </p>

              <p className="text-sm text-gray-500">
                Donatur
              </p>
            </div>

          </div>

          <div className="font-bold text-base text-green-600">
            {item.nominal}
          </div>

        </div>
      ))}

    </div>

  </div>

</section>

  <div className="w-full bg-gray-200 rounded-full h-5">
    <div
      className="bg-green-600 h-5 rounded-full"
      style={{ width: "25%" }}
    ></div>
  </div>

</div>
      </h2>

      <p className="text-gray-500 mt-2">
      Sabtu, 16 Rabiul Awal 1448 H
      </p>

      </div>

      </section>
      {/* Rekening Donasi */}
      <section className="max-w-6xl mx-auto px-6 py-10">

      <div className="bg-white rounded-2xl shadow-xl p-8">

      <h2 className="text-3xl font-bold mb-6 text-center">
      Rekening Donasi
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

      <div className="bg-green-50 border border-green-200 rounded-xl p-6 flex flex-col items-center text-center pt-25">
        <img
        src="/payment/mandiri.png"
        alt="Bank Mandiri"
        className="h-25 object-contain"
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

        <p className="text-gray-600 mt-2">
          a.n Yayasan Cahaya Intan Sagara
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-6 relative flex flex-col items-center">

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
       className="w-50 rounded-xl shadow-lg border"
      />

      <p className="text-center text-sm text-gray-500 mt-3">
      Scan QRIS untuk berdonasi
      </p>

      <a
      href="/images/qris-donasi.jpg"
      download
       className="mt-3 block text-center bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700"
      >
      📥 Download QRIS
      </a>
      
      </div>

      </div>

      </div>
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
        className="w-full border rounded-xl p-4"
      />
        <div className="grid grid-cols-3 gap-2 mt-3">

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
       placeholder="Doa atau Pesan"
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
      <p className="font-semibold mb-2 text-center">
      Preview Bukti Transfer
      </p>

      <img
      src={preview}
      alt="Bukti Transfer"
      className="w-35 h-72 object-cover mx-auto rounded-xl shadow-lg border"
       />
       </div>
       )}

       <button
       className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold"
       >

       Kirim Konfirmasi Donasi

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
    {/* Galeri Kegiatan */}
<section className="max-w-6xl mx-auto px-6 py-16">

  <h2 className="text-3xl font-bold text-center mb-10">
    Dokumentasi Kegiatan
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
      <img
        src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846"
        alt="Santunan Yatim"
        className="w-full h-56 object-cover hover:scale-110 transition-all duration-500"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg">
          Santunan Anak Yatim
        </h3>
        <p className="text-sm text-gray-600">
          Kegiatan santunan dan berbagi kebahagiaan.
        </p>
      </div>
    </div>

    <div className="bg-white rounded-2xl shadow-lg overflow-hidden relative hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
      <img
        src="https://images.unsplash.com/photo-1507692049790-de58290a4334"
        alt="Pengajian"
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg">
          Pengajian Umum
        </h3>
        <p className="text-sm text-gray-600">
          Kajian dan tausiyah untuk masyarakat.
        </p>
      </div>
    </div>

    <div className="bg-white rounded-2xl shadow-lg overflow-hidden relative hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
         <div className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded-full z-10">
         Maulid 1448 H
        </div>
      <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
        alt="Maulid"
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg">
          Maulid Nabi
        </h3>
        <p className="text-sm text-gray-600">
          Memperingati kelahiran Nabi Muhammad ﷺ.
        </p>
      </div>
    </div>

  </div>

</section>

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

    <section className="max-w-6xl mx-auto px-10 pt-0 pb-8">

   <h2 className="text-3xl font-bold text-center mb-4">
    📸 Galeri Kegiatan
  </h2>

  <div className="grid md:grid-cols-3 gap-4">
    
    {galeriKegiatan.map((foto, index) => (
      <div
        key={index}
        className="overflow-hidden rounded-2xl shadow-lg bg-white"
      >
        <img
          src={foto}
          alt={`Galeri ${index + 1}`}
          className="w-full h-64 object-cover hover:scale-110 transition-all duration-700"
        />
      </div>
    ))}

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
      </section>
        <a
       href="https://wa.me/6285318169106"
       target="_blank"
       rel="noreferrer"
       className="
       fixed
       bottom-6
       right-6
       bg-green-500
       text-white
       w-16
       h-16
       rounded-full
       shadow-2xl
       flex
       items-center
       justify-center
       text-3xl
       hover:scale-110
       transition-all
       duration-300
      "
    >
    💬
    </a>
    <footer className="bg-slate-900 text-white py-12 mt-20">
  <div className="max-w-6xl mx-auto px-6 text-center">

    <h3 className="text-2xl font-bold">
      Yayasan Cahaya Intan Sagara
    </h3>

    <p className="mt-3 text-slate-300">
      Desa Awassagara, Kecamatan Cikelet,
      Kabupaten Garut
    </p>

    <p className="mt-2">
      📞 0853-1816-9106
    </p>

    <p className="mt-6 text-slate-500 text-sm">
      © 2026 Creative One • Donation Landing Page Premium
    </p>

  </div>
</footer>
    </div>
    
   );
}