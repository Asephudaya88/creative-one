type Props = {
  title: string;
  content: string;
  logo: string;
};

export default function BannerLayout({
  title,
  content,
  logo,
}: Props) {
  return (
    <div className="h-full w-full bg-gradient-to-r from-green-700 via-emerald-600 to-green-500 text-white flex items-center justify-between px-20">

      <div className="max-w-4xl">

        <p className="uppercase tracking-widest text-green-100 mb-4 font-bold">
          YAYASAN CAHAYA INTAN SAGARA
        </p>

        <h1 className="text-8xl font-black leading-tight">
          {title}
        </h1>

        <p className="text-3xl mt-6 text-green-50">
          {content}
        </p>

        <div className="mt-10 flex gap-4">
          <button className="bg-white text-green-700 px-8 py-4 rounded-full font-bold">
            DONASI SEKARANG
          </button>

          <button className="border-2 border-white px-8 py-4 rounded-full font-bold">
            INFORMASI
          </button>
        </div>

      </div>

      <div className="flex flex-col items-center">

        {logo ? (
          <img
            src={logo}
            alt="Logo"
            className="w-72 h-72 object-contain bg-white rounded-full p-4 shadow-2xl"
          />
        ) : (
          <div className="w-72 h-72 bg-white/20 rounded-full flex items-center justify-center text-7xl">
            🎁
          </div>
        )}

        <p className="mt-6 text-xl font-semibold">
          Creative One Studio
        </p>

      </div>

    </div>
  );
}