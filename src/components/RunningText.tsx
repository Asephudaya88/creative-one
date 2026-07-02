import { useEffect, useState } from "react";
import { Megaphone, Award, HelpCircle, Activity } from "lucide-react";

interface RunningTextProps {
  lang: "id" | "en";
}

export default function RunningText({ lang }: RunningTextProps) {
  const slogans = {
    id: [
      "PT Karangsari Creative Solution — Membangun Teknologi, Menumbuhkan Manfaat.",
      "Creative One — Satu Platform • Ribuan Manfaat.",
      "Teknologi yang Dekat dengan Masyarakat.",
      "Dari Desa, Untuk Indonesia.",
      "Keamanan Transaksi Terjamin dengan Enkripsi AES-256 Ganda.",
      "Sinkronisasi Cloud Aktif • Seluruh Layanan Beroperasi Normal."
    ],
    en: [
      "PT Karangsari Creative Solution — Building Technology, Growing Benefits.",
      "Creative One — One Platform • Thousands of Benefits.",
      "Technology Closer to the Community.",
      "From Villages, For Indonesia.",
      "Transaction Security Guaranteed with AES-256 Dual Encryption.",
      "Cloud Sync Active • All Systems Operational."
    ]
  };

  const list = slogans[lang] || slogans.id;
  const combinedText = list.join("   •   ");

  return (
    <div id="running-text-container" className="relative w-full bg-gradient-to-r from-[#0c469b] via-[#082a6b] to-[#041d4c] border-y border-blue-600/50 py-2.5 px-4 overflow-hidden shadow-inner flex items-center gap-2">
      <div className="flex items-center gap-1.5 bg-amber-500 text-slate-950 px-2.5 py-0.5 rounded-full text-xs font-mono animate-pulse whitespace-nowrap z-10 shrink-0 shadow-sm">
        <Activity className="w-3.5 h-3.5" />
        <span className="text-[10px] tracking-widest font-extrabold">INFO UTAMA</span>
      </div>
      <div className="relative w-full overflow-hidden flex items-center">
        <div 
          className="animate-[marquee_25s_linear_infinite] whitespace-nowrap text-xs md:text-sm font-bold font-sans text-white/95 tracking-wide flex items-center gap-8 py-0.5"
          style={{
            animation: "marquee 45s linear infinite"
          }}
        >
          <span>{combinedText}</span>
          <span>{combinedText}</span> {/* Duplicated for continuous flow */}
        </div>
      </div>
    </div>
  );
}
