type Props = {
  title: string;
  content: string;
  logo: string;
};

export default function SpandukLayout({
  title,
  content,
  logo,
}: Props) {
  return (
    <div className="h-full w-full bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 text-white flex items-center justify-between px-16">

      <div className="max-w-4xl">

        <h1 className="text-6xl font-black">
          {title}
        </h1>

        <p className="text-2xl mt-5">
          {content}
        </p>

      </div>

      {logo && (
        <img
          src={logo}
          className="w-52 h-52 bg-white rounded-full p-3 object-contain"
        />
      )}

    </div>
  );
}