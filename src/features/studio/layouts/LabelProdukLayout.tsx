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
    <div className="w-full h-full bg-gradient-to-br from-orange-500 to-amber-700 text-white p-10 flex flex-col items-center justify-center">

      {logo && (
        <img
          src={logo}
          alt="Produk"
          className="w-40 h-40 object-cover rounded-full bg-white p-2 mb-6"
        />
      )}

      <h1 className="text-5xl font-black text-center">
        {title}
      </h1>

      <p className="text-xl mt-4 text-center">
        {content}
      </p>

      <div className="mt-6 text-sm">
        Produk UMKM Creative One
      </div>

    </div>
  );
}