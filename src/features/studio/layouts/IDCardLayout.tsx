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
    <div className="w-full h-full rounded-2xl bg-gradient-to-b from-blue-700 to-slate-900 text-white flex flex-col items-center justify-center p-8">

      {logo && (
        <img
          src={logo}
          className="w-32 h-32 rounded-full bg-white p-2 object-contain mb-6"
        />
      )}

      <h1 className="text-3xl font-black text-center">
        {title}
      </h1>

      <p className="text-center mt-3">
        {content}
      </p>

    </div>
  );
}