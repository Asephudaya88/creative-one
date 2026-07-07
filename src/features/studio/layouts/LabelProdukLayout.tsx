type Props = {
  title: string;
  content: string;
  logo: string;
};

export default function LabelProdukLayout({
  title,
  content,
  logo,
}: Props) {
  return (
    <div className="w-full h-full rounded-2xl bg-gradient-to-br from-orange-500 to-amber-700 text-white flex flex-col items-center justify-center p-8">

      {logo && (
        <img
          src={logo}
          className="w-40 h-40 object-contain rounded-full bg-white p-3 mb-6"
        />
      )}

      <h1 className="text-4xl font-black text-center">
        {title}
      </h1>

      <p className="mt-4 text-center">
        {content}
      </p>

      <p className="mt-6 text-sm opacity-80">
        Netto 250 gr
      </p>

    </div>
  );
}