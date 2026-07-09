import DynamicQRCode from "../components/DynamicQRCode";
type Props = {
  title: string;
  content: string;
  logo: string;
  qrValue?: string;
};

export default function BannerLayout({
  title,
  content,
  logo,
  qrValue,
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

      <div className="w-72 flex flex-col items-center text-center mr-8">

     {logo ? (
     <img
      src={logo}
      alt="Logo"
      className="w-28 h-28 object-contain bg-white rounded-full p-2 shadow-xl"
    />
    ) : (
    <div className="w-28 h-28 bg-white/20 rounded-full flex items-center justify-center text-4xl">
      🎁
    </div>
    )}

    <p className="mt-3 text-sm font-semibold">
    Scan QR Donasi
    </p>

    {qrValue && (
    <div className="mt-3 bg-white p-2 rounded-xl shadow-lg">
      <DynamicQRCode value={qrValue} />
    </div>
  )}

    </div>
    </div>
  );
}