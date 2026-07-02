import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini client if API key is provided
let ai: GoogleGenAI | null = null;
const apiKey = process.env.GEMINI_API_KEY;

if (apiKey && apiKey !== "MY_GEMINI_API_KEY") {
  try {
    ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
    console.log("Gemini API initialized successfully.");
  } catch (err) {
    console.error("Error initializing Gemini API:", err);
  }
} else {
  console.log("No GEMINI_API_KEY provided. Operating in simulated intelligent responder mode.");
}

// REST API for Creative One Chat
app.post("/api/chat", async (req, res) => {
  const { message, history, moduleContext } = req.body;

  if (!message) {
    res.status(400).json({ error: "Message is required" });
    return;
  }

  // If Gemini API is available, use it!
  if (ai) {
    try {
      const systemInstruction = `You are Creative One AI, the smart super-assistant for Creative One super app, powered by PT Karangsari Creative Solution ("Membangun Teknologi, Menumbuhkan Manfaat").
Creative One is a massive digital ecosystem for Indonesia that integrates:
1. Creative Water (water utilities management, PDAM, meter records, e-billing)
2. Creative Village (administrasi desa, online documents, PBB, RT/RW, APBDes)
3. Creative Foundation (donations, proposals, activities management)
4. Creative Pesantren (santri, boarding school tracker, hafalan tracker, AI Tahfidz)
5. Creative School (teachers, CBT, parent portal, report card tracker, AI Tutor)
6. Creative Care (clinic, doctor booking, ambulance tracking, SOS)
7. Creative Mart (UMKM marketplace, POS Cashier, inventory)
8. Creative Tourism (tickets, homestays, digital guides)
9. Creative Marine (sea weather, high waves, ship tracking, fish prices, SOS Laut)
10. Creative Agriculture (planting calendar, drone mapping, pest alarms)
11. Creative Livestock (animal growth tracker, vaccines, digital Qurban)
12. Creative Ride (ojek online, courier, food & medicine delivery, wallet)
13. Creative Rescue (ambulances, firefighters, SAR, Police, Panic Button, SOS GPS)
14. Creative Pay (QRIS payment, e-wallet, transfers, bill pay)
15. Creative Tracker (live tracking for motors, cars, phones, geofences)
16. Creative AI (specialized tools like AI Vision, AI Coding, AI Business, AI Education)

The user email is: ${req.headers["x-user-email"] || "asepsaepulhudaya@gmail.com"}.
The current time is ${new Date().toLocaleString()}.
Be helpful, energetic, professional, and explain in a polite, highly informative Indonesian. Speak in a friendly tone ("Halo! Saya Creative One AI Assistant...").
Keep your replies structured, modern, and highlight useful features of the requested modules.
If the current module context is active (e.g. "${moduleContext || "none"}"), make sure to customize your response specifically to help the user with that part of the ecosystem!`;

      // Build chat contents including history if available, else just a single prompt.
      // Format history correctly: [{ role: "user", parts: [{ text: "..." }] }, { role: "model", parts: [{ text: "..." }] }]
      const contents: any[] = [];
      if (history && Array.isArray(history)) {
        history.forEach((h: any) => {
          contents.push({
            role: h.role === "user" ? "user" : "model",
            parts: [{ text: h.content }],
          });
        });
      }
      contents.push({
        role: "user",
        parts: [{ text: message }],
      });

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: contents,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        },
      });

      const replyText = response.text || "Mohon maaf, saya sedang kesulitan memproses respon saat ini.";
      res.json({ reply: replyText, simulated: false });
      return;
    } catch (err: any) {
      console.error("Gemini API call failed, falling back to simulated responder:", err);
      // Fallback below
    }
  }

  // Simulated AI responses tailored for Creative One Super App
  const cleanMsg = message.toLowerCase();
  let reply = "Halo! Saya Creative One AI Assistant. Saya siap membantu Anda mengelola seluruh modul dalam ekosistem Creative One!";

  if (cleanMsg.includes("air") || cleanMsg.includes("water") || cleanMsg.includes("meter")) {
    reply = `💧 **Creative Water Assistant**:
Halo! Saya mendeteksi Anda bertanya mengenai layanan air bersih. Di modul **Creative Water**, Anda dapat:
1. Membayar tagihan air PDAM secara online menggunakan **Creative Pay**.
2. Mencatat angka meter secara mandiri (Catat Meter Mandiri) dengan memotret meteran Anda.
3. Melaporkan kebocoran air dengan melampirkan foto koordinat GPS secara real-time.
4. Memantau laporan debit air dan kualitas air di peta jaringan kelistrikan dan pipa air.

Ada yang ingin saya bantu terkait tagihan atau pencatatan meter Anda hari ini?`;
  } else if (cleanMsg.includes("desa") || cleanMsg.includes("surat") || cleanMsg.includes("village") || cleanMsg.includes("pbb")) {
    reply = `🏛 **Creative Village (RT/RW Digital) Assistant**:
Halo! Terkait administrasi kependudukan di **Creative Village**, Anda bisa melakukan hal-hal berikut secara online tanpa perlu ke kantor balai desa:
1. Mengajukan surat pengantar (SKCK, Surat Keterangan Tidak Mampu, Domisili) dalam beberapa klik.
2. Membayar PBB (Pajak Bumi dan Bangunan) lewat dompet digital terenkripsi aman.
3. Melihat rincian APBDes (Anggaran Pendapatan & Belanja Desa) secara transparan.
4. Melaporkan aspirasi atau keluhan kepada Ketua RT/RW setempat melalui RT/RW Digital.

Silakan pilih menu 'Ajukan Dokumen' di modul Creative Village untuk memulai!`;
  } else if (cleanMsg.includes("sekolah") || cleanMsg.includes("school") || cleanMsg.includes("guru") || cleanMsg.includes("murid")) {
    reply = `🎓 **Creative School AI Tutor**:
Selamat datang di pusat edukasi digital! Sebagai **AI Tutor**, saya terintegrasi penuh untuk membantu proses belajar mengajar:
- **Untuk Guru**: Pembuatan bank soal otomatis, koreksi ujian CBT instan, dan penginputan rapor digital.
- **Untuk Murid**: Konsultasi pelajaran 24 jam, pendaftaran PPDB online, dan akses buku perpustakaan digital.
- **Untuk Orang Tua**: Notifikasi absensi kehadiran murid secara real-time dan statistik nilai berkala.

Silakan sebutkan materi pelajaran atau fitur Creative School yang ingin Anda eksplorasi!`;
  } else if (cleanMsg.includes("pesantren") || cleanMsg.includes("santri") || cleanMsg.includes("tahfidz") || cleanMsg.includes("hafalan")) {
    reply = `📖 **Creative Pesantren (AI Tahfidz) Assistant**:
Assalamualaikum! Modul **Creative Pesantren** mendukung transparansi dan kedekatan wali santri dengan pondok pesantren:
1. **AI Tahfidz**: Membantu santri melakukan setoran hafalan secara audio dengan koreksi tajwid berbasis AI.
2. **Absensi & Perizinan**: Wali santri dapat memantau kehadiran serta mengajukan perizinan keluar asrama langsung dari aplikasi.
3. **Pembayaran Syahriah**: Kemudahan pembayaran iuran bulanan santri melalui virtual account aman.

Ada yang bisa kami bantu dalam pemantauan hafalan atau administrasi asrama santri saat ini?`;
  } else if (cleanMsg.includes("klinik") || cleanMsg.includes("dokter") || cleanMsg.includes("bpjs") || cleanMsg.includes("care") || cleanMsg.includes("sakit") || cleanMsg.includes("medis")) {
    reply = `❤️ **Creative Care (Kesehatan Digital)**:
Halo, kesehatan Anda adalah prioritas kami. Di modul **Creative Care**, kami menyediakan solusi medis terpadu:
- **Booking Jadwal Dokter & Konsultasi Online**: Hubungi dokter spesialis terbaik kami untuk chat medis instan.
- **Rekam Medis Digital & BPJS**: Sinkronisasi data rekam medis terenkripsi dan pengecekan status iuran BPJS Anda.
- **PMI & Posyandu Tracker**: Jadwal posyandu anak, tumbuh kembang, serta info stok darah PMI terdekat.
- **Layanan Emergency**: Panggil ambulans darurat dengan satu klik di tombol darurat yang membagikan lokasi GPS Anda ke rumah sakit terdekat.

Tetap jaga kesehatan, silakan gunakan tombol Darurat di sudut kanan atas jika dalam kondisi kritis!`;
  } else if (cleanMsg.includes("bayar") || cleanMsg.includes("pay") || cleanMsg.includes("qris") || cleanMsg.includes("pulsa") || cleanMsg.includes("transfer")) {
    reply = `💳 **Creative Pay (E-Wallet & QRIS)**:
Sistem pembayaran aman terenkripsi militer! Dengan **Creative Pay**, transaksi harian Anda menjadi sangat praktis:
1. **Pindai QRIS**: Bayar di kasir UMKM mitra **Creative Mart** atau merchant QRIS mana pun di Indonesia.
2. **Pembayaran Tagihan**: Listrik PLN, Air PDAM, BPJS Kesehatan, Pajak PBB, hingga pembelian Pulsa & Paket Data sekejap mata.
3. **Transfer Instan & Top Up**: Transfer antar bank dengan biaya admin Rp0,- atau top up saldo e-wallet favorit Anda.
4. **Enkripsi Ganda**: Dilengkapi simulasi verifikasi biometrik Sidik Jari (Fingerprint) dan Pemindai Wajah (Face Login).`;
  } else if (cleanMsg.includes("tani") || cleanMsg.includes("agriculture") || cleanMsg.includes("hama") || cleanMsg.includes("pupuk") || cleanMsg.includes("panen")) {
    reply = `🌾 **Creative Agriculture (AI Petani Cerdas)**:
Halo petani hebat Indonesia! Melalui modul pertanian cerdas ini, Anda dapat mengoptimalkan hasil lahan Anda:
1. **Kalender Tanam Cerdas**: Analisis cuaca lokal harian untuk menentukan waktu terbaik menanam padi, jagung, atau palawija.
2. **Detektor Hama AI**: Ambil foto tanaman Anda untuk mendeteksi penyakit/hama dan dapatkan saran obat serta pupuk organik terbaik.
3. **Drone Mapping**: Simulasi pemetaan kondisi hara tanah menggunakan pencitraan drone aeromodelling.
4. **Pasar Hasil Tani**: Jual hasil panen Anda langsung ke pedagang besar atau konsumen di **Creative Mart** dengan harga terbaik.`;
  } else if (cleanMsg.includes("ternak") || cleanMsg.includes("livestock") || cleanMsg.includes("sapi") || cleanMsg.includes("kambing") || cleanMsg.includes("qurban")) {
    reply = `🐄 **Creative Livestock (AI Peternakan Terpadu)**:
Halo! Modul ini dirancang khusus untuk memodernisasi peternakan Anda:
- **Jadwal Pakan & Grafik Pertumbuhan**: Catat berat badan ternak secara berkala untuk memantau efisiensi pakan.
- **Kartu Vaksin & Vitamin Digital**: Notifikasi pengingat pemberian vaksin oleh dokter hewan terdekat.
- **Qurban Digital**: Pasarkan hewan ternak Anda menjelang Hari Raya Idul Adha dengan sistem transparansi timbangan.
- **Konsultasi Dokter Hewan**: Hubungi dokter hewan bersertifikat untuk penanganan cepat sapi atau domba sakit.`;
  } else if (cleanMsg.includes("ojek") || cleanMsg.includes("ride") || cleanMsg.includes("driver") || cleanMsg.includes("kurir") || cleanMsg.includes("makanan")) {
    reply = `🚖 **Creative Ride (Ojek Online & Logistik)**:
Siap meluncur! Di modul **Creative Ride**, Anda dapat memesan berbagai moda transportasi dan pengiriman barang:
- **Ride Bike / Ride Car**: Bepergian dengan aman menggunakan driver berlisensi resmi.
- **Creative Food & Medicine**: Antar makanan lezat dari UMKM atau obat-obatan penting langsung ke rumah Anda.
- **Live GPS Tracking**: Lacak lokasi driver secara real-time lengkap dengan estimasi waktu tiba (ETA) yang akurat.
- **Dompet Driver**: Dashboard khusus pengemudi untuk mengelola pendapatan harian dan rating pelayanan pelanggan.`;
  } else if (cleanMsg.includes("lacak") || cleanMsg.includes("tracker") || cleanMsg.includes("gps") || cleanMsg.includes("lokasi")) {
    reply = `📍 **Creative Tracker (Layanan GPS Live)**:
Keamanan aset Anda adalah prioritas tertinggi kami. Di modul **Creative Tracker**, Anda dapat:
1. Memantau posisi GPS real-time untuk Motor, Mobil, Handphone, bahkan Anak/Keluarga tercinta.
2. Mengonfigurasi **Geofence (Pagar Virtual)**: Terima notifikasi instan jika kendaraan melintasi batas wilayah aman.
3. Memutar ulang **Riwayat Lokasi** pergerakan kendaraan dalam 30 hari terakhir.
4. Tombol **SOS Darurat**: Matikan mesin kendaraan jarak jauh (remote engine cutoff) jika terjadi tindakan pencurian.`;
  } else if (cleanMsg.includes("umkm") || cleanMsg.includes("mart") || cleanMsg.includes("kasir") || cleanMsg.includes("toko") || cleanMsg.includes("stok")) {
    reply = `🛒 **Creative Mart (UMKM & POS Kasir)**:
Majukan bisnis lokal bersama **Creative Mart**! Kami menyediakan alat kasir (POS) gratis dan marketplace dalam satu genggaman:
- **Point of Sale (POS) Kasir**: Cetak struk belanja via Bluetooth Printer, kelola stok barang otomatis, dan catat hutang pelanggan.
- **Marketplace Terintegrasi**: Upload produk Anda agar dapat dibeli oleh warga sekitar atau dikirim menggunakan kurir **Creative Ride**.
- **AI Sales Prediction**: Analisis penjualan bulanan Anda untuk memprediksi stok barang terlaris di bulan depan.
- **QRIS Pembayaran**: Terima pembayaran digital dari seluruh e-wallet Indonesia tanpa kendala.`;
  } else if (cleanMsg.includes("wisata") || cleanMsg.includes("tourism") || cleanMsg.includes("tiket") || cleanMsg.includes("hotel")) {
    reply = `🌄 **Creative Tourism (Pesona Indonesia)**:
Mari jelajahi keindahan Indonesia bersama **Creative Tourism**! Fitur utama kami meliputi:
1. **Tiket Wisata & Homestay**: Pesan tiket masuk destinasi wisata lokal dan pesan homestay milik warga desa secara langsung.
2. **Kuliner & Event**: Informasi kuliner khas daerah dan jadwal kalender festival budaya terdekat.
3. **Peta Wisata Interaktif**: Pemandu arah digital yang dilengkapi review jujur dan foto galeri keindahan alam.
4. **Digital Tour Guide**: Dapatkan asisten wisata berbasis suara yang menceritakan sejarah tempat yang Anda kunjungi.`;
  } else if (cleanMsg.includes("laut") || cleanMsg.includes("marine") || cleanMsg.includes("kapal") || cleanMsg.includes("nelayan") || cleanMsg.includes("ombak")) {
    reply = `🌊 **Creative Marine (Sahabat Nelayan)**:
Halo Pelaut Indonesia! Modul maritim ini didesain khusus demi keselamatan dan kesejahteraan Anda di laut:
- **Kondisi Laut Real-Time**: Info tinggi gelombang, arah angin, pasang surut air laut, dan peta cuaca maritim BMKG.
- **Tracking Kapal & SOS Laut**: Kirim sinyal darurat (SOS) lengkap dengan koordinat satelit jika kapal mengalami kerusakan mesin di laut lepas.
- **Harga Ikan & Marketplace Hasil Laut**: Jual hasil tangkapan Anda langsung ke pelabuhan atau pasar ikan modern dengan harga transparan.
- **Subsidi Solar**: Klaim kuota solar subsidi nelayan di SPBU pelabuhan menggunakan QR Code aplikasi Anda.`;
  } else if (cleanMsg.includes("bantuan") || cleanMsg.includes("rescue") || cleanMsg.includes("darurat") || cleanMsg.includes("panic")) {
    reply = `🚑 **Creative Rescue (Sistem Penyelamatan Cepat)**:
⚠️ **SIAGA 24 JAM**! Modul ini menghubungkan Anda ke instansi kedaruratan terdekat:
1. **Panic Button**: Tekan selama 3 detik untuk membunyikan alarm dan menyebarkan koordinat darurat Anda ke Damkar, SAR, Polisi, dan Ambulans terdekat.
2. **Ambulans & Damkar Tracker**: Lacak rute perjalanan armada penyelamat menuju lokasi Anda secara live di peta GPS.
3. **Laporan Kejadian**: Laporkan kebakaran, kecelakaan jalan raya, atau bencana alam untuk tindakan evakuasi segera.`;
  } else if (cleanMsg.includes("yayasan") || cleanMsg.includes("foundation") || cleanMsg.includes("donasi")) {
    reply = `🕌 **Creative Foundation (Yayasan & Donasi)**:
Mari berbagi kebaikan! Melalui **Creative Foundation**, transparansi donasi dan kegiatan sosial terjamin:
- **Donasi Online**: Salurkan sedekah, infak, atau zakat Anda ke panti asuhan, masjid, atau korban bencana alam via QRIS.
- **Laporan Keuangan Terbuka**: Pantau penggunaan dana donasi secara real-time hingga rupiah terakhir demi akuntabilitas publik.
- **Manajemen Inventaris & Kegiatan**: Kelola proposal penggalangan dana dan inventaris aset yayasan dengan mudah.`;
  } else if (cleanMsg.includes("biometrik") || cleanMsg.includes("aman") || cleanMsg.includes("otp") || cleanMsg.includes("login") || cleanMsg.includes("keamanan")) {
    reply = `🔒 **Keamanan Tingkat Tinggi (Super Secure Engine)**:
Aplikasi **Creative One** dilindungi oleh protokol enkripsi data militer (AES-256) untuk memastikan privasi Anda:
1. **Face Login & Fingerprint**: Masuk ke dashboard premium tanpa sandi menggunakan biometrik wajah dan sidik jari yang cepat dan aman.
2. **OTP Terintegrasi**: Verifikasi transaksi finansial atau ganti perangkat melalui OTP WhatsApp/SMS Gateway.
3. **Audit Log Transparan**: Pantau histori login dan daftar perangkat aktif yang mengakses akun Anda untuk mencegah peretasan.`;
  }

  res.json({ reply, simulated: true });
});

// Vite middleware setup in development, static serve in production
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Creative One] Express Full-stack Server running on http://localhost:${PORT}`);
  });
}

startServer();
