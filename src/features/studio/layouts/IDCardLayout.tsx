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
    <div className="w-full h-full bg-gradient-to-br from-slate-900 to-blue-900 text-white p-8 flex">

      <div className="w-1/3 flex items-center justify-center">
        {logo ? (
          <img
            src={logo}
            alt="Foto"
            className="w-48 h-48 rounded-full object-cover border-4 border-white"
          />
        ) : (
          <div className="w-48 h-48 rounded-full bg-white/20 flex items-center justify-center text-6xl">
            👤
          </div>
        )}
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <p className="text-blue-300 uppercase text-sm">
          Creative One ID
        </p>

        <h1 className="text-4xl font-black mt-2">
          {title}
        </h1>

        <p className="text-xl mt-3">
          {content}
        </p>

        <div className="mt-6 text-sm text-slate-300">
          ID : CO-2026-0001
        </div>
      </div>

    </div>
  );
}