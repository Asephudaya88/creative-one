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
      <div className="h-full w-full relative overflow-hidden bg-gradient-to-br from-slate-950 via-emerald-950 to-green-900 text-white flex items-center justify-between px-20">
      
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />

      <div className="absolute top-10 right-20 w-64 h-64 border border-yellow-400/10 rounded-full" />

      <div className="absolute top-20 right-30 w-48 h-48 border border-yellow-400/10 rounded-full" />

      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl" />  
     
      <div className="max-w-4xl">

        <p className="uppercase tracking-widest text-green-100 mb-4 font-bold">
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mb-6"></div>
          YAYASAN CAHAYA INTAN SAGARA
          <div className="absolute bottom-6 left-8 text-white/10 text-5xl font-black">
          CREATIVE ONE
        </div>
        </p>

        <h1 className="text-8xl font-black leading-tight text-white drop-shadow-2xl">
          {title}
        </h1>

        <p className="text-3xl mt-6 text-green-50">
          {content}
        </p>

        <div className="mt-10 flex gap-4">

        <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-full font-bold shadow-xl">
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