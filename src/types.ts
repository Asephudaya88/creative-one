/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = "id" | "en";

export type Role = "Warga/Umum" | "Petugas PDAM" | "Kepala Desa" | "Santri/Wali" | "Guru/Siswa" | "Petani/Nelayan" | "Driver" | "Admin Sistem";

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar: string;
  organization: string; // Multi-organisation selection (e.g. "Desa Karangsari", "Sekolah Creative Cerdas")
  balance: number;
}

export interface NotificationItem {
  id: string;
  title: string;
  body: string;
  time: string;
  read: boolean;
  type: "info" | "success" | "warning" | "danger" | "message";
}

export interface AuditLog {
  timestamp: string;
  user: string;
  role: string;
  action: string;
  status: "SUCCESS" | "FAILED";
}

export interface ModuleItem {
  id: string;
  name: string;
  iconName: string;
  category: "utility" | "social" | "education" | "commerce" | "logistics" | "ai";
  descriptionId: string;
  descriptionEn: string;
}

export const MODULES_LIST: ModuleItem[] = [
  { id: "water", name: "Creative Water", iconName: "Droplet", category: "utility", descriptionId: "Manajemen PDAM, tagihan air online, catat meter, & aduan pipa bocor.", descriptionEn: "PDAM management, water billing, meter recording & pipeline complaints." },
  { id: "village", name: "Creative Village", iconName: "Landmark", category: "social", descriptionId: "Administrasi desa digital, surat online, PBB, & RT/RW digital.", descriptionEn: "Digital village administration, online letters, land taxes & RT/RW portal." },
  { id: "foundation", name: "Creative Foundation", iconName: "HandHeart", category: "social", descriptionId: "Portal donasi yayasan, proposal kegiatan, keuangan transparan.", descriptionEn: "Foundation donations, social activity proposals & transparent finance." },
  { id: "pesantren", name: "Creative Pesantren", iconName: "BookOpen", category: "education", descriptionId: "Manajemen santri, asrama, jadwal, setoran hafalan AI Tahfidz.", descriptionEn: "Santri tracking, dorms, schedules & AI Tahfidz memorization corrector." },
  { id: "school", name: "Creative School", iconName: "GraduationCap", category: "education", descriptionId: "CBT ujian, absensi, e-rapor, PPDB, & asisten belajar AI Tutor.", descriptionEn: "Online exams, attendance, digital report cards & AI study helper." },
  { id: "care", name: "Creative Care", iconName: "HeartPulse", category: "utility", descriptionId: "Konsultasi medis online, jadwal dokter, rekam medis, & BPJS tracker.", descriptionEn: "Online medical consulting, doctor schedules, health records & BPJS tracker." },
  { id: "mart", name: "Creative Mart", iconName: "ShoppingBag", category: "commerce", descriptionId: "Marketplace UMKM, POS kasir cetak struk Bluetooth, & AI penjualan.", descriptionEn: "MSME marketplace, bluetooth-ready POS cashier, & AI sales prediction." },
  { id: "tourism", name: "Creative Tourism", iconName: "Compass", category: "commerce", descriptionId: "Pemesanan tiket wisata daerah, homestay, & digital audio tour guide.", descriptionEn: "Book regional tourism tickets, local homestays & digital guide." },
  { id: "marine", name: "Creative Marine", iconName: "Waves", category: "utility", descriptionId: "Lacak kapal, cuaca maritim, tinggi ombak, SOS laut, & AI Nelayan.", descriptionEn: "Ship tracking, maritime weather, wave heights, sea SOS & AI Fisherman." },
  { id: "agriculture", name: "Creative Agriculture", iconName: "Sprout", category: "utility", descriptionId: "Analisis cuaca lokal, drone mapping hara tanah, & AI detektor hama.", descriptionEn: "Local weather index, soil drone mapping & AI pest visual detector." },
  { id: "livestock", name: "Creative Livestock", iconName: "Beef", category: "utility", descriptionId: "Pantau kesehatan hewan, jadwal pakan, kartu vaksin, & Qurban digital.", descriptionEn: "Animal health tracker, feeding log, vaccine charts & digital Qurban." },
  { id: "ride", name: "Creative Ride", iconName: "Bike", category: "logistics", descriptionId: "Ojek online, mobil, kurir barang, antar makanan, & pelacakan driver.", descriptionEn: "Bike & car hailing, express logistics, food delivery & live tracking." },
  { id: "rescue", name: "Creative Rescue", iconName: "ShieldAlert", category: "logistics", descriptionId: "Tombol panik darurat, panggil Damkar, SAR, Polisi, & GPS live.", descriptionEn: "Emergency panic button, dispatch Fire, Police or SAR with live GPS." },
  { id: "pay", name: "Creative Pay", iconName: "CreditCard", category: "commerce", descriptionId: "Dompet QRIS, transfer gratis, pulsa, PLN, PDAM, & pajak desa.", descriptionEn: "QRIS scanner, free bank transfers, utility bills, taxes & top-ups." },
  { id: "tracker", name: "Creative Tracker", iconName: "MapPin", category: "logistics", descriptionId: "GPS pelacak motor, mobil, HP, anggota keluarga, & geofencing live.", descriptionEn: "Live tracking for motors, cars, phones, family & geofencing." },
  { id: "ai", name: "Creative AI", iconName: "Bot", category: "ai", descriptionId: "Pusat alat kecerdasan buatan: AI Vision, Translator, Analytic, dll.", descriptionEn: "AI toolbox hub: AI Vision, Translator, Analytic, Coding, & Business." }
];

export const TRANSLATIONS = {
  id: {
    welcomeBack: "Selamat Datang,",
    slogan: "Satu Platform • Ribuan Manfaat",
    poweredBy: "Didukung oleh PT Karangsari Creative Solution",
    moto: "Membangun Teknologi, Menumbuhkan Manfaat.",
    smartSearch: "Cari layanan di Creative One...",
    quickMenu: "Menu Cepat",
    emergencyButton: "Darurat",
    newsLocal: "Kabar Daerah",
    weatherForecast: "Prakiraan Cuaca",
    favorites: "Layanan Favorit",
    notifications: "Notifikasi",
    settings: "Pengaturan",
    profile: "Profil Pengguna",
    runningTextTitle: "WARTA HARI INI:",
    userRole: "Hak Akses:",
    orgSelect: "Organisasi / Wilayah:",
    darkTheme: "Mode Gelap",
    lightTheme: "Mode Terang",
    language: "Bahasa",
    balance: "Saldo Dompet",
    notifEmpty: "Tidak ada notifikasi baru",
    noResults: "Layanan tidak ditemukan",
    backToDashboard: "Kembali ke Beranda",
    emergencyDesc: "AKTIFKAN SINYAL PANIC BUTTON",
    emergencyAlert: "Sinyal Panic Button Aktif! Lokasi GPS dikirimkan ke Ambulans, SAR, dan Polisi terdekat.",
    faceLoginSim: "Simulasi Face Login berhasil diproses via enkripsi biometrik.",
    fingerprintLoginSim: "Verifikasi sidik jari sukses.",
    otpVerify: "Masukkan kode OTP WhatsApp yang dikirimkan ke nomor Anda.",
    auditLogs: "Histori Enkripsi & Log Audit Keamanan",
    activeModules: "Ekosistem Modul",
    allRoles: "Semua Peran",
    allCategories: "Semua Kategori",
    searchModule: "Cari modul...",
    onlineStatus: "TERKONEKSI (CLOUD SYNC)",
    offlineStatus: "MODE OFFLINE AKTIF",
    backupSuccess: "Pencadangan database awan (Cloud Backup) berhasil dienkripsi!",
    restoreSuccess: "Data berhasil dipulihkan dari snapshot enkripsi AES-256.",
    saveSettings: "Simpan Pengaturan",
    chatAiPlaceHolder: "Tanyakan apa saja kepada Creative One AI..."
  },
  en: {
    welcomeBack: "Welcome Back,",
    slogan: "One Platform • Thousands of Benefits",
    poweredBy: "Powered by PT Karangsari Creative Solution",
    moto: "Building Technology, Growing Benefits.",
    smartSearch: "Search service in Creative One...",
    quickMenu: "Quick Menu",
    emergencyButton: "Emergency",
    newsLocal: "Regional News",
    weatherForecast: "Weather Forecast",
    favorites: "Favorite Services",
    notifications: "Notifications",
    settings: "Settings",
    profile: "User Profile",
    runningTextTitle: "TODAY'S FLASH:",
    userRole: "Access Role:",
    orgSelect: "Org / Region:",
    darkTheme: "Dark Theme",
    lightTheme: "Light Theme",
    language: "Language",
    balance: "Wallet Balance",
    notifEmpty: "No new notifications",
    noResults: "No services found",
    backToDashboard: "Back to Dashboard",
    emergencyDesc: "ACTIVATE PANIC BUTTON SIGNAL",
    emergencyAlert: "Panic Button Activated! GPS Location transmitted to nearest Ambulance, SAR, and Police.",
    faceLoginSim: "Face Login simulation processed successfully via biometric encryption.",
    fingerprintLoginSim: "Fingerprint verification successful.",
    otpVerify: "Enter the WhatsApp OTP code sent to your registered number.",
    auditLogs: "Security Audit Logs & Cryptography",
    activeModules: "Ecosystem Modules",
    allRoles: "All Roles",
    allCategories: "All Categories",
    searchModule: "Search modules...",
    onlineStatus: "CONNECTED (CLOUD SYNC)",
    offlineStatus: "OFFLINE MODE ACTIVE",
    backupSuccess: "Cloud database backup successfully encrypted!",
    restoreSuccess: "Data restored successfully from AES-256 encrypted snapshot.",
    saveSettings: "Save Settings",
    chatAiPlaceHolder: "Ask anything to Creative One AI..."
  }
};
