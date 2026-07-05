export default function WalletPage() {
  return (
    <div className="flex-1 overflow-y-auto bg-slate-50 p-4 space-y-4">

      {/* Wallet Card */}
      <div className="rounded-3xl p-6 bg-gradient-to-br from-[#0c469b] via-[#114fa9] to-[#082b6b] text-white shadow-xl">

        <p className="text-xs uppercase tracking-widest text-blue-200">
          Creative Pay
        </p>

        <h2 className="text-3xl font-black mt-3">
          Rp 1.250.000
        </h2>

        <p className="text-blue-200 text-sm mt-1">
          Saldo tersedia
        </p>

        <div className="grid grid-cols-3 gap-3 mt-6">

          <button className="rounded-xl bg-white/15 py-3 font-bold hover:bg-white/25 transition">
            Top Up
          </button>

          <button className="rounded-xl bg-white/15 py-3 font-bold hover:bg-white/25 transition">
            Transfer
          </button>

          <button className="rounded-xl bg-white/15 py-3 font-bold hover:bg-white/25 transition">
            QRIS
          </button>

        </div>

      </div>

      {/* Riwayat */}
      <div className="bg-white rounded-2xl p-5 shadow">

        <h3 className="font-bold text-lg mb-4">
          Riwayat Transaksi
        </h3>

        <div className="space-y-3">

          <div className="flex justify-between">
            <div>
              <p className="font-semibold">
                Top Up
              </p>

              <p className="text-sm text-gray-500">
                Hari ini
              </p>
            </div>

            <span className="text-green-600 font-bold">
              +100.000
            </span>
          </div>

          <hr/>

          <div className="flex justify-between">
            <div>
              <p className="font-semibold">
                Bayar PDAM
              </p>

              <p className="text-sm text-gray-500">
                Kemarin
              </p>
            </div>

            <span className="text-red-500 font-bold">
              -85.000
            </span>
          </div>

          <hr/>

          <div className="flex justify-between">
            <div>
              <p className="font-semibold">
                Creative Mart
              </p>

              <p className="text-sm text-gray-500">
                2 hari lalu
              </p>
            </div>

            <span className="text-red-500 font-bold">
              -45.000
            </span>
          </div>

        </div>

      </div>

    </div>
  );
}