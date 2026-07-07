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
    <div className="h-full w-full bg-gradient-to-r from-red-700 via-red-600 to-orange-500 text-white flex items-center justify-between px-16">

      <div className="max-w-3xl">

        <h1 className="text-7xl font-black">
          {title}
        </h1>

        <p className="text-3xl mt-6">
          {content}
        </p>

      </div>

      {logo && (
        <img
          src={logo}
          className="w-56 h-56 object-contain bg-white rounded-full p-4"
        />
      )}

    </div>
  );
}