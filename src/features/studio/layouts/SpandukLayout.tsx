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
    <div className="h-full w-full bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-800 text-white flex items-center justify-between px-20">

      <div>
        <p className="uppercase tracking-[6px] text-blue-200 mb-4">
          EVENT SPESIAL
        </p>

        <h1 className="text-7xl font-black">
          {title}
        </h1>

        <p className="text-3xl mt-5">
          {content}
        </p>
      </div>

      {logo && (
        <img
          src={logo}
          alt="Logo"
          className="w-64 h-64 object-contain bg-white rounded-3xl p-4"
        />
      )}
    </div>
  );
}