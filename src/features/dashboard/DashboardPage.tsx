export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-10 text-center">
      <h1 className="text-3xl font-black text-[#0c469b]">
        🚀 Creative One Dashboard
      </h1>

      <p className="mt-4 text-slate-600 max-w-xl">
        Dashboard utama Creative One saat ini masih berjalan melalui
        <strong> App.tsx</strong>.
      </p>

      <p className="mt-2 text-slate-500">
        Setelah seluruh fitur selesai, halaman ini akan menjadi Dashboard utama
        yang lebih modular dan profesional.
      </p>

      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-6 w-full max-w-lg">
        <h2 className="font-bold text-[#0c469b] mb-3">
          Roadmap Dashboard
        </h2>

        <ul className="text-left text-sm text-slate-600 space-y-2">
          <li>✅ Creative Water</li>
          <li>✅ Creative Village</li>
          <li>✅ Creative Pay</li>
          <li>✅ Creative QRIS</li>
          <li>🔄 Creative Ride</li>
          <li>🔄 Creative Mart</li>
          <li>🔄 AI Center</li>
          <li>🔄 Live GPS Tracker</li>
        </ul>
      </div>
    </div>
  );
}