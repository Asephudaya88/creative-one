type Props = {
  title: string;
  content: string;
  logo: string;

  photo?: string;

  nama?: string;
  ttl?: string;
  alamat?: string;
  jabatan?: string;
};

export default function PortraitIDCardLayout({
  title,
  content,
  logo,
  photo,
  nama,
  ttl,
  alamat,
  jabatan,
}: Props) {
  return (
    <div className="w-full h-full bg-slate-900 relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-800 to-slate-900" />

      {/* Ornamen kiri atas */}
      <div className="absolute top-0 left-0 w-48 h-48 border-l-8 border-t-8 border-white/30" />

      {/* Ornamen kanan bawah */}
      <div className="absolute bottom-0 right-0 w-48 h-48 border-r-8 border-b-8 border-white/30" />

      {/* Logo */}
      <div className="absolute top-30 left-1/2 -translate-x-1/2">
        {logo && (
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 object-contain"
          />
        )}
          <p className="text-yellow-400 text-sm font-bold mt-2">
             PT KARANGSARI CREATIVE SOLUTION
           </p>
          </div>

      {/* Jabatan Vertikal */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 rotate-180">
        <span
          className="text-6xl font-black text-white/90"
          style={{ writingMode: "vertical-rl" }}
        >
          KOMISARIS
        </span>
      </div>

      {/* Foto */}
      <div className="absolute top-65 left-50">
         <div className="w-45 h-60 bg-white p-3 shadow-2xl">
          {logo ? (
            <img
              src={photo}
              alt="Foto"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-slate-300 flex items-center justify-center text-7xl">
              👤
            </div>
          )}
        </div>
      </div>

      {/* Nama */}
      <div className="absolute top-[520px] left-30">
        <h1 className="text-2xl font-bold text-white uppercase leading-tight">
        {nama}
        </h1>

        <div className="mt-4 space-y-2 text-white text-base">
        <p>
        <span className="font-bold">TTL :</span> {ttl}
        </p>

        <p>
        <span className="font-bold">ALAMAT :</span> {alamat}
        </p>

        <p>
        <span className="font-bold">JABATAN :</span> {jabatan}
        </p>
        </div>
       </div>

    </div>
  );
}