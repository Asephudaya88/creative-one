import { LandingPageData } from "./types";

interface Props {
  data: LandingPageData;
}

export default function LandingPagePreview({ data }: Props) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-xl">

      <div className="bg-gradient-to-r from-green-600 to-emerald-500 text-white p-10 text-center">

        {data.logo && (
          <img
            src={data.logo}
            alt="Logo"
            className="w-24 h-24 mx-auto mb-4 object-contain"
          />
        )}

        <h1 className="text-4xl font-bold">
          {data.title}
        </h1>

        <p className="mt-3 opacity-90">
          {data.subtitle}
        </p>

      </div>

      <div className="p-8">

        <p className="mb-6">
          {data.description}
        </p>

        <a
          href={`https://wa.me/${data.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="inline-block px-6 py-3 bg-green-600 text-white rounded-xl"
        >
          Hubungi Kami
        </a>

      </div>

    </div>
  );
}