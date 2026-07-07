type Props = {
  title: string;
  content: string;
  logo: string;
};

export default function BusinessCardLayout({
  title,
  content,
  logo,
}: Props) {
  return (
    <div className="bg-gradient-to-r from-black via-slate-900 to-yellow-700 text-white rounded-2xl p-8 shadow-2xl">
      <div className="flex justify-between">

        <div>

          <p className="text-yellow-400 text-xs font-bold">
            PT KARANGSARI CREATIVE SOLUTION
          </p>

          <h1 className="text-3xl font-black mt-6">
            {title}
          </h1>

          <p className="text-yellow-300 mt-3">
            {content}
          </p>

        </div>

        {logo && (
          <img
            src={logo}
            className="w-24 h-24 rounded-full bg-white p-2"
          />
        )}

      </div>
    </div>
  );
}