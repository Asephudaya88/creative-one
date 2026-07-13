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
      <div className="p-8 pt-16">

        <p className="mb-6">
          {data.description}
        </p>

        <a
          className="inline-block mt-6 px-6 py-3 bg-green-600 text-white rounded-xl"
          target="_blank"
          rel="noreferrer"
        >
          Hubungi Kami
        </a>

      </div>

    </div>
  );
}