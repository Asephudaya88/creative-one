import { LandingPageData } from "./types";

interface Props {
  data: LandingPageData;
}

export default function LandingPagePreview({ data }: Props) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-xl">

      {/* COVER BANNER */}
      {data.cover && (
        <img
          src={data.cover}
          alt="Cover Banner"
          className="w-full h-80 object-cover"
        />
      )}

      {/* HEADER */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-500 text-white py-8 px-10 text-center">

        {data.logo && (
          <img
            src={data.logo}
            alt="Logo"
            className="w-20 h-20 mx-auto mb-4 object-contain bg-white rounded-xl p-2 shadow-lg"
          />
        )}

        <h1 className="text-4xl font-bold">
          {data.title}
        </h1>

        <p className="mt-3 opacity-90">
          {data.subtitle}
        </p>

      </div>

      {/* CONTENT */}
<div className="p-8 pt-10">

  <p className="mb-6 text-gray-700">
    {data.description}
  </p>

  {/* PROGRESS DONASI */}
  <div className="mb-8">

    <h3 className="font-bold mb-2">
      Progress Donasi
    </h3>

    <div className="w-full bg-gray-200 h-4 rounded-full">
      <div
        className="bg-green-600 h-4 rounded-full"
        style={{ width: "25%" }}
      />
    </div>

    <p className="mt-2 text-sm">
      Rp {data.terkumpul} / Rp {data.targetDonasi}
    </p>

  </div>

  {/* REKENING */}
  <div className="mb-8 p-4 bg-gray-100 rounded-xl text-black">

   <h3 className="font-bold mb-2">
  Rekening Donasi
</h3>

<p className="text-gray-700">
  {data.bank}
</p>

<p className="text-gray-700">
  A/N {data.atasNama}
</p>

<p className="font-bold text-xl">
  {data.rekening}
</p>

  </div>

  {/* QRIS */}
{data.qris && (
  <div className="mb-8 text-center">

    <h3 className="font-bold mb-3">
      Scan QRIS
    </h3>

    <img
      src={data.qris}
      alt="QRIS"
      className="w-64 mx-auto rounded-xl shadow-lg"
    />

  </div>
)}

{/* GALERI KEGIATAN */}
<div className="mb-8">

  <h3 className="font-bold mb-4">
    Galeri Kegiatan
  </h3>

  <div className="grid grid-cols-3 gap-3">

    {data.galeri1 && (
      <img
        src={data.galeri1}
        alt="Galeri 1"
        className="rounded-xl h-32 w-full object-cover"
      />
    )}

    {data.galeri2 && (
      <img
        src={data.galeri2}
        alt="Galeri 2"
        className="rounded-xl h-32 w-full object-cover"
      />
    )}

    {data.galeri3 && (
      <img
        src={data.galeri3}
        alt="Galeri 3"
        className="rounded-xl h-32 w-full object-cover"
      />
    )}

  </div>

</div>

{/* WA */}
<a
  href={`https://wa.me/${data.whatsapp}`}
  className="inline-block px-6 py-3 bg-green-600 text-white rounded-xl"
  target="_blank"
  rel="noreferrer"
>
  Hubungi Kami
</a>

</div>

    </div>
  );
}