export default function DonationPage() {
  return (
    <div className="min-h-screen bg-gray-50">

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

        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">
          Program Kegiatan
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-white p-6 rounded-xl shadow">
            📖 Pengajian Umum
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            ❤️ Santunan Anak Yatim
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            🤝 Santunan Dhuafa
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            👴 Santunan Lansia
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

    </div>
  );
}