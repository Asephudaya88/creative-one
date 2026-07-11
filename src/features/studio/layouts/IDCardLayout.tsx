type Props = {
  title: string;
  content: string;
  logo: string;
};

export default function IDCardLayout({
  title,
  content,
  logo,
}: Props) {
  return (
    <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 text-white p-8 flex rounded-3xl">

      {/* Ornamen Glow */}
      <div className="absolute top-0 right-0 w-56 h-56 bg-yellow-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl" />

      {/* Frame Gold */}
      <div className="absolute inset-3 border border-yellow-500/30 rounded-3xl"></div>

      {/* Foto */}
      <div className="w-1/3 flex items-center justify-center z-10">
        {logo ? (
          <img
            src={logo}
            alt="Foto"
            className="w-48 h-48 rounded-full object-cover border-4 border-yellow-400 shadow-2xl"
          />
        ) : (
          <div className="w-48 h-48 rounded-full bg-white/10 flex items-center justify-center text-6xl border-4 border-yellow-400">
            👤
          </div>
        )}
      </div>

      {/* Data */}
      <div className="flex-1 flex flex-col justify-center z-10">

        <p className="text-yellow-400 uppercase tracking-widest text-sm font-bold">
          CREATIVE ONE PREMIUM ID
        </p>

        <h1 className="text-4xl font-black mt-2">
          {title}
        </h1>
        <div className="w-40 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mt-3 mb-3"></div>
        <p className="text-base mt-4 whitespace-pre-line leading-8">
          {content}
        </p>

        <div className="mt-6 space-y-2 text-sm">
          <p>ID : CO-2026-0001</p>
          <p>Status : ACTIVE</p>
          <p>Member : PREMIUM</p>
        </div>

      </div>

      {/* Badge */}
      <div className="absolute top-6 right-6 bg-yellow-500 text-black px-4 py-2 rounded-full font-bold text-xs shadow-lg">
        PREMIUM
      </div>

      {/* Watermark */}
      <div className="absolute bottom-4 right-6 text-white/10 text-3xl font-black">
        CREATIVE ONE
      </div>

    </div>
  );
}