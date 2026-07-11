import HomeScreen from "./features/dashboard/components/HomeScreen";
import HomeHeader from "./features/dashboard/components/HomeHeader";
import WalletPage from "./features/wallet/WalletPage";
import LoginPage from "./features/auth/LoginPage";
import ProfilePage from "./features/settings/ProfilePage";
import StudioPage from "./features/studio/StudioPage";
import { useState, useEffect, useRef, FormEvent } from "react";
import {
  Droplet,
  Landmark,
  HandHeart,
  BookOpen,
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  Compass,
  Waves,
  Sprout,
  Beef,
  Bike,
  ShieldAlert,
  CreditCard,
  MapPin,
  Bot,
  Activity,
  Search,
  Bell,
  Settings,
  UserCheck,
  Languages,
  Moon,
  Sun,
  Palette,
  Type,
  Send,
  Wifi,
  WifiOff,
  Database,
  RefreshCw,
  Fingerprint,
  ScanFace,
  Volume2,
  DollarSign,
  Plus,
  Trash2,
  CheckCircle,
  AlertTriangle,
  Play,
  FileText,
  Map,
  Mic,
  Camera,
  X,
  Eye,
  Clock,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  User as UserIcon,
  Shield,
  Sparkles,
  Smartphone,
  ShieldCheck,
  LayoutGrid,
  BarChart2,
  Cloud,
  Network,
  QrCode,
  Home
} from "lucide-react";

import LucideIcon from "./components/LucideIcon";
import RunningText from "./components/RunningText";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { MODULES_LIST, TRANSLATIONS, Language, Role, User, NotificationItem, AuditLog, ModuleItem } from "./types";

export default function App() {
  // Theme & Language States
  const [lang, setLang] = useState<Language>("id");
  const [offlineMode, setOfflineMode] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"home" | "aktivitas" | "qris" | "notifications" | "akun" | "ai-chat">("home");
  
  // Custom Appearance Settings
  const [themeColor, setThemeColor] = useState<"blue" | "emerald" | "orange" | "rose" | "purple" | "slate">("blue");
  const [themeMode, setThemeMode] = useState<"light" | "sepia" | "dark">("light");
  const [fontSize, setFontSize] = useState<"sm" | "base" | "lg">("base");
  const [fontFamily, setFontFamily] = useState<"inter" | "space-grotesk" | "jetbrains-mono" | "playfair">("inter");
  const [enableTransitions, setEnableTransitions] = useState<boolean>(true);
  
  // Authentication (sementara)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const t = TRANSLATIONS[lang];

  // System Date / Time State
  const [timeStr, setTimeStr] = useState<string>("");
  const [dateStr, setDateStr] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
      setDateStr(now.toLocaleDateString(lang === "id" ? "id-ID" : "en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [lang]);

  // Active user / simulation state
  const [user, setUser] = useState<User>(() => {
  const savedUser = localStorage.getItem("user");

  if (savedUser) {
    return JSON.parse(savedUser);
  }

  return {
    id: "U-8821",
    name: "Guest",
    email: "",
    role: "Warga/Umum",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80",
    organization: "PT Karangsari Creative Solution",
    balance: 0,
  };
});

  // Notifications state
  const [notifications, setNotifications] = useState<NotificationItem[]>([
    {
      id: "N1",
      title: "Tagihan Air Creative Water Terbit",
      body: "Tagihan periode Juni 2026 sebesar Rp 45.000,- siap dibayar via Creative Pay.",
      time: "10m yang lalu",
      read: false,
      type: "warning"
    },
    {
      id: "N2",
      title: "Surat Selesai Diverifikasi",
      body: "Pengajuan SK Keterangan Domisili di Creative Village telah disetujui Kepala Desa.",
      time: "1 jam yang lalu",
      read: false,
      type: "success"
    },
    {
      id: "N3",
      title: "Peringatan Gelombang Tinggi",
      body: "Creative Marine mendeteksi gelombang > 2.5m di wilayah perairan Selatan Jawa.",
      time: "3 jam yang lalu",
      read: true,
      type: "danger"
    },
    {
      id: "N4",
      title: "Vaksinasi Ternak Terjadwal",
      body: "Sapi ID #S-209 dijadwalkan menerima vaksin PMK besok pagi.",
      time: "5 jam yang lalu",
      read: true,
      type: "info"
    }
  ]);

  const [showNotifications, setShowNotifications] = useState<boolean>(false);

  // Security Audit Logs State
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>([
    { timestamp: "10:45:21", user: "SYSTEM", role: "SYS", action: "AES-256 Database Sync Complete", status: "SUCCESS" },
    { timestamp: "10:42:15", user: "Asep Saepul", role: "Warga", action: "Face Login Authorized", status: "SUCCESS" },
    { timestamp: "09:12:04", user: "Asep Saepul", role: "Warga", action: "Creative Pay QRIS Transaction #8812", status: "SUCCESS" }
  ]);

  const addAuditLog = (action: string, status: "SUCCESS" | "FAILED" = "SUCCESS") => {
    const now = new Date();
    const time = now.toLocaleTimeString("id-ID");
    setAuditLogs(prev => [
      { timestamp: time, user: user.name, role: (user.role || "WARGA").split("/")[0], action, status },
      ...prev.slice(0, 8)
    ]);
  };

  // Search filter
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  // Selected Active Module Modal
  const [activeModule, setActiveModule] = useState<ModuleItem | null>(null);

  // Chat AI State
  const [chatMessage, setChatMessage] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<{ role: "user" | "model"; content: string }[]>([
    {
      role: "model",
      content: "Halo! Saya **Creative One AI Assistant**, siap mendampingi Anda di platform super ini. Ajukan pertanyaan seputar layanan air, administrasi desa, pos kasir, cuaca laut, pertanian cerdas, atau bantuan penyelamatan darurat!"
    }
  ]);
  const [chatLoading, setChatLoading] = useState<boolean>(false);
  const [isChatFloatingOpen, setIsChatFloatingOpen] = useState<boolean>(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  // Scroll chat history to bottom
  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  // Scroll chat history when floating assistant opens
  useEffect(() => {
    if (isChatFloatingOpen) {
      setTimeout(() => {
        chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [isChatFloatingOpen]);

  // Safeguard: on large laptop/desktop screens, AI chat is floating, so we redirect the tab from 'ai-chat' to 'home' and open floating chat
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && activeTab === "ai-chat") {
        setActiveTab("home");
        setIsChatFloatingOpen(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeTab]);

  // AI Assistant trigger
  const handleSendChat = async (presetText?: string) => {
    const textToSend = presetText || chatMessage;
    if (!textToSend.trim() || chatLoading) return;

    const updatedHistory = [...chatHistory, { role: "user" as const, content: textToSend }];
    setChatHistory(updatedHistory);
    setChatMessage("");
    setChatLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-User-Email": user.email
        },
        body: JSON.stringify({
          message: textToSend,
          history: updatedHistory.slice(-6), // Send last 3 rounds
          moduleContext: activeModule ? activeModule.name : "dashboard"
        })
      });

      if (!res.ok) throw new Error("Server error");
      const data = await res.json();
      setChatHistory(prev => [...prev, { role: "model" as const, content: data.reply }]);
      addAuditLog(`AI Consult: "${textToSend.substring(0, 20)}..."`);
    } catch (err) {
      console.error(err);
      // Client-side local smart response fallback if backend fails or offline
      setChatHistory(prev => [...prev, {
        role: "model" as const,
        content: `⚠️ (Simulasi Cerdas) Koneksi dibatasi. Terkait "${textToSend}", tim PT Karangsari Creative Solution memastikan sistem cerdas tetap melayani Anda dalam mode sinkronisasi lokal. Silakan gunakan menu transaksi utama.`
      }]);
    } finally {
      setChatLoading(false);
    }
  };

  // Quick Action: Emergency Panic Button Activation
  const [emergencyActive, setEmergencyActive] = useState<boolean>(false);
  const triggerEmergency = () => {
    setEmergencyActive(true);
    addAuditLog("PANIC BUTTON TRIGGERED - Broadcast GPS coordinates", "SUCCESS");
    setTimeout(() => {
      alert(t.emergencyAlert);
      setEmergencyActive(false);
    }, 1500);
  };

  // Module Specific Interactive Simulator States
  // 1. Creative Water
  const [waterBillPaid, setWaterBillPaid] = useState<boolean>(false);
  const [waterMeterInput, setWaterMeterInput] = useState<string>("");
  const [waterComplaints, setWaterComplaints] = useState<Array<{ id: string; msg: string; status: string }>>([
    { id: "W1", msg: "Pipa bocor di perempatan Jl. Merpati RT 02", status: "Sedang Diproses" }
  ]);
  const [waterComplaintInput, setWaterComplaintInput] = useState<string>("");

  const handlePayWaterBill = () => {
    if (user.balance < 45000) {
      alert("Saldo tidak cukup! Silakan top up di Creative Pay.");
      return;
    }
    setUser(prev => ({ ...prev, balance: prev.balance - 45000 }));
    setWaterBillPaid(true);
    addAuditLog("Creative Water: Paid Invoice June 2026 (Rp 45,000)");
    setNotifications(prev => prev.map(n => n.id === "N1" ? { ...n, read: true } : n));
  };

  const handleMeterSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!waterMeterInput) return;
    alert(`Sukses mencatat angka meter mandiri: ${waterMeterInput} m³. Terima kasih sudah membantu tertib administrasi.`);
    setWaterMeterInput("");
    addAuditLog(`Creative Water: Meter record submitted (${waterMeterInput} m³)`);
  };

  // 2. Creative Village
  const [villageLetters, setVillageLetters] = useState<Array<{ id: string; type: string; status: string }>>([
    { id: "L1", type: "Surat Keterangan Domisili", status: "Selesai" }
  ]);
  const [letterType, setLetterType] = useState<string>("Surat Keterangan Usaha");
  const [villageAduan, setVillageAduan] = useState<string>("");

  const handleApplyLetter = (e: FormEvent) => {
    e.preventDefault();
    const newLetter = { id: `L${Date.now()}`, type: letterType, status: "Menunggu RT/RW" };
    setVillageLetters([newLetter, ...villageLetters]);
    addAuditLog(`Creative Village: Applied for ${letterType}`);
    alert(`Sukses mengajukan ${letterType} secara digital! Status dapat dipantau di portal RT/RW.`);
  };

  // 3. Creative School
  const [schoolExamScore, setSchoolExamScore] = useState<number | null>(null);
  const [examActive, setExamActive] = useState<boolean>(false);
  const [examAns, setExamAns] = useState<string>("");

  const handleStartExam = () => {
    setExamActive(true);
    setSchoolExamScore(null);
  };

  const handleFinishExam = () => {
    setExamActive(false);
    const score = examAns.toLowerCase().includes("manfaat") || examAns.toLowerCase().includes("karangsari") ? 100 : 85;
    setSchoolExamScore(score);
    addAuditLog(`Creative School: Completed CBT Exam (Score: ${score})`);
  };

  // 4. Creative Pay
  const [payAmount, setPayAmount] = useState<string>("");
  const [payReceiver, setPayReceiver] = useState<string>("");
  const [paySuccess, setPaySuccess] = useState<boolean>(false);
  const [qrisScanSim, setQrisScanSim] = useState<boolean>(false);

  const handleTransfer = (e: FormEvent) => {
    e.preventDefault();
    const amount = parseFloat(payAmount);
    if (!payReceiver || isNaN(amount) || amount <= 0) return;
    if (user.balance < amount) {
      alert("Saldo tidak cukup!");
      return;
    }
    setUser(prev => ({ ...prev, balance: prev.balance - amount }));
    setPaySuccess(true);
    addAuditLog(`Creative Pay: Transferred Rp ${amount.toLocaleString()} to ${payReceiver}`);
    setTimeout(() => {
      setPaySuccess(false);
      setPayAmount("");
      setPayReceiver("");
    }, 3000);
  };

  const handleQrisSimulate = () => {
    setQrisScanSim(true);
    setTimeout(() => {
      setUser(prev => ({ ...prev, balance: prev.balance - 25000 }));
      setQrisScanSim(false);
      addAuditLog("Creative Pay: Scanned QRIS UMKM Mart (Rp 25,000)");
      alert("Pembayaran QRIS senilai Rp 25.000 sukses! Saldo terpotong otomatis via secure ledger.");
    }, 1800);
  };

  // 5. Creative Rescue
  const [rescueStatus, setRescueStatus] = useState<string>("Siaga");
  const [dispatchedUnit, setDispatchedUnit] = useState<string>("");

  const dispatchRescue = (unit: string) => {
    setRescueStatus("Penyelamatan Aktif");
    setDispatchedUnit(unit);
    addAuditLog(`Rescue Dispatch: Sent ${unit} with live satellite tracker`);
    setTimeout(() => {
      setRescueStatus("Siaga");
      setDispatchedUnit("");
      alert(`${unit} telah menyelesaikan misi penyelamatan.`);
    }, 8000);
  };

  // 6. Creative Mart
  const [posCart, setPosCart] = useState<Array<{ id: string; name: string; price: number; qty: number }>>([]);
  const [posProducts] = useState([
    { id: "P1", name: "Beras Cianjur Organik 5kg", price: 68000, stock: 45 },
    { id: "P2", name: "Kopi Arabika Karangsari 250g", price: 35000, stock: 120 },
    { id: "P3", name: "Minyak Goreng Sawit Lestari 1L", price: 18500, stock: 60 }
  ]);

  const addToCart = (prod: any) => {
    setPosCart(prev => {
      const exist = prev.find(item => item.id === prod.id);
      if (exist) {
        return prev.map(item => item.id === prod.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { ...prod, qty: 1 }];
    });
  };

  const clearCart = () => setPosCart([]);
  const handleCheckoutPOS = () => {
    const total = posCart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    if (total === 0) return;
    if (user.balance < total) {
      alert("Saldo pembayaran digital tidak mencukupi untuk simulasi POS.");
      return;
    }
    setUser(prev => ({ ...prev, balance: prev.balance - total }));
    addAuditLog(`Creative Mart POS: Checkout Rp ${total.toLocaleString()}`);
    alert(`Transaksi Kasir POS Berhasil!\nTotal: Rp ${total.toLocaleString()}\nStruk belanja dicetak otomatis via Bluetooth Printer.`);
    setPosCart([]);
  };

  // 7. Creative Ride
  const [rideType, setRideType] = useState<"bike" | "car" | "food">("bike");
  const [rideStep, setRideStep] = useState<"idle" | "booking" | "onway" | "arrived">("idle");
  const [rideProgress, setRideProgress] = useState<number>(0);

  const startRideSim = () => {
    setRideStep("booking");
    addAuditLog(`Creative Ride: Booking ${rideType}`);
    setTimeout(() => {
      setRideStep("onway");
      let prog = 0;
      const interval = setInterval(() => {
        prog += 20;
        setRideProgress(prog);
        if (prog >= 100) {
          clearInterval(interval);
          setRideStep("arrived");
          addAuditLog(`Creative Ride: Driver arrived at destination`);
          setTimeout(() => {
            setRideStep("idle");
            setRideProgress(0);
          }, 3000);
        }
      }, 800);
    }, 1500);
  };

  // 8. Creative Agriculture & Marine
  const [droneScanned, setDroneScanned] = useState<boolean>(false);
  const [currentSoilQuality, setCurrentSoilQuality] = useState<string>("Belum Dianalisis");

  const runDroneMapping = () => {
    setDroneScanned(true);
    setCurrentSoilQuality("Menganalisis hara...");
    setTimeout(() => {
      setCurrentSoilQuality("Sangat Subur - Nitrogen Tinggi, pH 6.5. Cocok untuk Padi/Palawija.");
      addAuditLog("Agriculture: Completed Drone Mapping on Lahan 1A");
    }, 2000);
  };

  // 9. Creative Pesantren (AI Tahfidz)
  const [isRecordingTahfidz, setIsRecordingTahfidz] = useState<boolean>(false);
  const [tahfidzFeedback, setTahfidzFeedback] = useState<string>("");

  const startTahfidzRec = () => {
    setIsRecordingTahfidz(true);
    setTahfidzFeedback("");
    setTimeout(() => {
      setIsRecordingTahfidz(false);
      setTahfidzFeedback("✅ Hasil Koreksi AI Tahfidz: Kelancaran 95%, Makhraj 92%, Tajwid (Ikhfa) tepat. Rekomendasi: Lanjutkan ke ayat berikutnya!");
      addAuditLog("AI Tahfidz: Evaluated Surah Al-Mulk ayat 1-5");
    }, 3000);
  };

  // 10. Creative Tracker
  const [trackerMapPin, setTrackerMapPin] = useState<{ x: number; y: number }>({ x: 45, y: 55 });
  const [geofenceActive, setGeofenceActive] = useState<boolean>(true);

  // 11. Creative Foundation
  const [donationAmount, setDonationAmount] = useState<string>("");
  const [donationProgram, setDonationProgram] = useState<string>("Sponsorship Anak Yatim");
  const [recentDonations, setRecentDonations] = useState<Array<{program: string, amount: number, time: string}>>([
    { program: "Pembangunan Masjid", amount: 150000, time: "Hari ini, 08:30" }
  ]);

  const handleDonate = (e: FormEvent) => {
    e.preventDefault();
    const amount = parseFloat(donationAmount);
    if (isNaN(amount) || amount <= 0) return;
    if (user.balance < amount) {
      alert("Saldo Creative Pay tidak cukup untuk donasi ini.");
      return;
    }
    setUser(prev => ({ ...prev, balance: prev.balance - amount }));
    const now = new Date();
    const newDonation = { program: donationProgram, amount, time: `Hari ini, ${now.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })}` };
    setRecentDonations([newDonation, ...recentDonations]);
    addAuditLog(`Foundation: Donated Rp ${amount.toLocaleString()} to ${donationProgram}`);
    alert(`Terima kasih! Donasi Rp ${amount.toLocaleString()} untuk ${donationProgram} berhasil dikirim.`);
    setDonationAmount("");
  };

  // 12. Creative Care
  const [bpjsNumber, setBpjsNumber] = useState<string>("");
  const [bpjsStatus, setBpjsStatus] = useState<string | null>(null);
  const [careDoctor, setCareDoctor] = useState<string>("dr. Andi (Spesialis Umum)");
  const [careBooked, setCareBooked] = useState<boolean>(false);

  const handleCheckBpjs = (e: FormEvent) => {
    e.preventDefault();
    if (!bpjsNumber) return;
    setBpjsStatus("Mengecek...");
    setTimeout(() => {
      setBpjsStatus(`AKTIF • Kelas 1 BPJS Kesehatan (Iuran Terbayar Lunas s/d Juni 2026)`);
      addAuditLog(`Care: Checked BPJS Status for ID ${bpjsNumber}`);
    }, 1000);
  };

  const handleBookDoctor = () => {
    setCareBooked(true);
    addAuditLog(`Care: Booked consultation with ${careDoctor}`);
    alert(`Sukses menjadwalkan konsultasi dengan ${careDoctor}! Tautan konsultasi dikirim ke WhatsApp.`);
    setTimeout(() => {
      setCareBooked(false);
    }, 5000);
  };

  // 13. Creative Tourism
  const [tourismSpot, setTourismSpot] = useState<string>("Candi Karangsari");
  const [tourismQty, setTourismQty] = useState<number>(1);
  const [tourismTicket, setTourismTicket] = useState<{ spot: string, qty: number, total: number, code: string } | null>(null);
  const [audioPlaying, setAudioPlaying] = useState<boolean>(false);
  const [audioProgress, setAudioProgress] = useState<number>(0);

  const handleBookTicket = () => {
    const prices: { [key: string]: number } = {
      "Candi Karangsari": 15000,
      "Curug Intan": 10000,
      "Pemandian Air Barokah": 5000
    };
    const price = prices[tourismSpot] || 10000;
    const total = price * tourismQty;
    if (user.balance < total) {
      alert("Saldo tidak cukup! Silakan top-up terlebih dahulu.");
      return;
    }
    setUser(prev => ({ ...prev, balance: prev.balance - total }));
    const code = `TIC-${Math.floor(100000 + Math.random() * 900000)}`;
    setTourismTicket({ spot: tourismSpot, qty: tourismQty, total, code });
    addAuditLog(`Tourism: Purchased ${tourismQty}x ticket to ${tourismSpot} (Rp ${total.toLocaleString()})`);
    alert(`Tiket berhasil dibeli!\nKode Tiket: ${code}\nSaldo Anda terpotong Rp ${total.toLocaleString()}.`);
  };

  const toggleAudioGuide = () => {
    setAudioPlaying(!audioPlaying);
    if (!audioPlaying) {
      setAudioProgress(15);
      addAuditLog("Tourism: Started digital audio tour guide");
    } else {
      addAuditLog("Tourism: Paused digital audio tour guide");
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (audioPlaying) {
      interval = setInterval(() => {
        setAudioProgress(prev => {
          if (prev >= 100) {
            setAudioPlaying(false);
            return 0;
          }
          return prev + 5;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [audioPlaying]);

  // 14. Creative Marine
  const [selectedVessel, setSelectedVessel] = useState<string>("KM Berkah Laut");
  const [marineSosSent, setMarineSosSent] = useState<boolean>(false);
  const [marineWaveHeight, setMarineWaveHeight] = useState<string>("1.8 meter (Tenang-Waspada)");

  const triggerMarineSos = () => {
    setMarineSosSent(true);
    addAuditLog("MARINE SOS: Emergency alert from Vessel KM Berkah Laut transmitted", "SUCCESS");
    alert("Sinyal SOS Laut Terkirim! Koordinat Anda dibagikan ke Syahbandar & Pos SAR Air terdekat.");
    setTimeout(() => {
      setMarineSosSent(false);
    }, 4000);
  };

  // 15. Creative Livestock
  const [livestockId, setLivestockId] = useState<string>("Sapi Limousin #S-209");
  const [livestockAction, setLivestockAction] = useState<string>("Log Pakan Sore");
  const [livestockLogs, setLivestockLogs] = useState<Array<{time: string, animal: string, action: string}>>([
    { time: "08:30", animal: "Sapi Limousin #S-209", action: "Vaksin PMK Dosis 2" },
    { time: "Yesterday", animal: "Kambing Etawa #K-81", action: "Pemberian Vitamin B Kompleks" }
  ]);

  const handleAddLivestockLog = () => {
    const now = new Date();
    const timeStr = now.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });
    const newLog = { time: timeStr, animal: livestockId, action: livestockAction };
    setLivestockLogs([newLog, ...livestockLogs]);
    addAuditLog(`Livestock: Logged ${livestockAction} for ${livestockId}`);
    alert(`Catatan kesehatan berhasil disimpan untuk ${livestockId}!`);
  };

  // 16. Creative AI
  const [aiTool, setAiTool] = useState<string>("translator");
  const [aiInputText, setAiInputText] = useState<string>("");
  const [aiOutputResult, setAiOutputResult] = useState<string>("");
  const [aiProcessing, setAiProcessing] = useState<boolean>(false);

  const handleRunAiTool = () => {
    if (!aiInputText.trim()) return;
    setAiProcessing(true);
    setAiOutputResult("");
    setTimeout(() => {
      setAiProcessing(false);
      let result = "";
      if (aiTool === "translator") {
        result = `[Hasil Terjemahan Bahasa Sunda Alus/Lemes]\n\n"${aiInputText}" ➔ "Hatur nuhun, kumaha daramang? Mugia urang sadaya salawasna aya dina panangtayungan Gusti Nu Maha Suci."`;
      } else if (aiTool === "vision") {
        result = `[Hasil Analisis AI Vision - Deteksi Hama]\n\nObjek: Daun Tanaman Padi\nHama Terdeteksi: Wereng Coklat (Nilaparvata lugens)\nTingkat Keparahan: Sedang (35%)\nSolusi Rekomendasi: Semprotkan biopestisida ekstrak daun mimba atau tingkatkan sirkulasi air pada petakan sawah.`;
      } else {
        result = `[Hasil Sentimen Analisis Keuangan Desa]\n\nInput: "${aiInputText}"\nKlasifikasi Sentimen: 🟢 POSITIF (Skor Akurasi: 98%)\nAnalisis Semantik: Warga merasa puas dengan transparansi APBDes dan alokasi dana untuk pembangunan Creative Super App.`;
      }
      setAiOutputResult(result);
      addAuditLog(`Creative AI: Ran ${aiTool} on input`);
    }, 1500);
  };

  useEffect(() => {
    if (activeModule?.id === "tracker") {
      const interval = setInterval(() => {
        setTrackerMapPin(prev => ({
          x: prev.x + (Math.random() - 0.5) * 4,
          y: prev.y + (Math.random() - 0.5) * 4
        }));
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [activeModule]);

  // General simulations
  const simulateBackup = () => {
    addAuditLog("CLOUD SYSTEM - Full encrypted snapshot backup done");
    alert(t.backupSuccess);
  };

  const simulateRestore = () => {
    addAuditLog("CLOUD SYSTEM - AES-256 database snapshot restored");
    alert(t.restoreSuccess);
  };

  const simulateBiometric = (type: "face" | "finger") => {
    addAuditLog(`Security: Authorized user via ${type === "face" ? "Face Recognition" : "Fingerprint Scanner"}`);
    alert(type === "face" ? t.faceLoginSim : t.fingerprintLoginSim);
  };

  // Filter modules based on query and categories
  const filteredModules = MODULES_LIST.filter(mod => {
    const nameMatch = mod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                     (lang === "id" ? mod.descriptionId : mod.descriptionEn).toLowerCase().includes(searchQuery.toLowerCase());
    
    if (categoryFilter === "all") return nameMatch;
    return mod.category === categoryFilter && nameMatch;
  });

  const renderChatArea = (isSidebar: boolean = false) => {
    return (
      <div className={`flex flex-col h-full bg-slate-50 ${isSidebar ? "" : "flex-1"}`}>
        {/* Chat Header */}
        <div className="p-4 bg-white border-b border-slate-200/80 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
              <Bot className="w-4.5 h-4.5 text-[#0c469b] animate-pulse" />
            </div>
            <div>
              <h4 className="text-xs font-black text-slate-800 leading-none">Creative AI Assistant</h4>
              <p className="text-[9px] text-slate-400 font-medium mt-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full inline-block animate-ping"></span>
                Ditenagai Gemini AI
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            {offlineMode && (
              <span className="text-[8px] bg-amber-50 text-amber-700 border border-amber-200 px-1.5 py-0.5 rounded font-mono font-bold">LOCAL</span>
            )}
            {/* Close button for floating view */}
            {isChatFloatingOpen && (
              <button 
                onClick={() => setIsChatFloatingOpen(false)}
                className="w-7 h-7 hover:bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-600 transition cursor-pointer"
                type="button"
                title="Tutup Chat"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Chat History Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3.5 no-scrollbar min-h-0">
          {chatHistory.map((msg, idx) => {
            const isUser = msg.role === "user";
            return (
              <div 
                key={idx} 
                className={`flex flex-col max-w-[85%] ${isUser ? "ml-auto items-end" : "mr-auto items-start"}`}
              >
                <div className={`p-3 rounded-2xl text-[11px] leading-relaxed font-medium ${
                  isUser 
                    ? "bg-[#0c469b] text-white rounded-tr-xs shadow-3xs text-left" 
                    : "bg-white text-slate-800 border border-slate-200/70 rounded-tl-xs shadow-3xs text-left"
                }`}>
                  {msg.content}
                </div>
                <span className="text-[8px] text-slate-400 mt-1 font-mono">
                  {isUser ? user.name.split(" ")[0] : "AI"}
                </span>
              </div>
            );
          })}
          {chatLoading && (
            <div className="flex items-center gap-2 mr-auto bg-white border border-slate-200/75 p-3 rounded-2xl rounded-tl-xs shadow-3xs max-w-[85%]">
              <span className="w-1.5 h-1.5 bg-[#0c469b] rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-[#0c469b] rounded-full animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-1.5 h-1.5 bg-[#0c469b] rounded-full animate-bounce [animation-delay:0.4s]"></span>
            </div>
          )}
          <div ref={chatBottomRef} />
        </div>

        {/* Preset Prompt suggestion pills */}
        <div className="px-4 py-2 bg-slate-50 border-t border-slate-100 flex gap-2 overflow-x-auto no-scrollbar shrink-0">
          {[
            { label: "Cek Tagihan Air", prompt: "Tampilkan ringkasan tagihan saya hari ini" },
            { label: "Rekomendasi Wisata", prompt: "Rekomendasikan wisata Curug terbaik di desa Karangsari" },
            { label: "Jadwal Pesantren", prompt: "Bagaimana info kegiatan belajar mengajar pesantren hari ini?" }
          ].map((pill, idx) => (
            <button
              key={idx}
              onClick={() => handleSendChat(pill.prompt)}
              className="text-[9px] bg-white hover:bg-blue-50 text-slate-600 hover:text-[#0c469b] border border-slate-200 hover:border-blue-300 rounded-full px-2.5 py-1 font-bold whitespace-nowrap transition cursor-pointer shrink-0 active:scale-95"
            >
              {pill.label}
            </button>
          ))}
        </div>

        {/* Chat input box form */}
        <form 
          onSubmit={(e) => { e.preventDefault(); handleSendChat(); }}
          className="p-3 bg-white border-t border-slate-200/80 flex gap-2 shrink-0 items-center"
        >
          <input
            type="text"
            value={chatMessage}
            onChange={(e) => setChatMessage(e.target.value)}
            placeholder="Tanyakan sesuatu pada Creative AI..."
            className="flex-1 bg-slate-50 border border-slate-200/85 rounded-xl px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-blue-500 font-medium"
            disabled={chatLoading}
          />
          <button
            type="submit"
            disabled={chatLoading || !chatMessage.trim()}
            className="w-8.5 h-8.5 bg-[#0c469b] hover:bg-blue-800 disabled:bg-slate-200 text-white disabled:text-slate-400 rounded-xl flex items-center justify-center shadow-xs transition cursor-pointer shrink-0 active:scale-95"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    );
  };

  const THEME_COLORS_MAP = {
    blue: {
      name: "Biru Kreatif",
      hex: "#0c469b",
      hoverHex: "#073270",
      gradientStart: "#3b82f6",
      gradientEnd: "#0c469b",
      lightBg: "#eff6ff",
      lightBgHover: "#dbeafe",
      rgb: "12, 70, 155",
      rgbText: "12, 70, 155"
    },
    emerald: {
      name: "Hijau Lestari",
      hex: "#059669",
      hoverHex: "#047857",
      gradientStart: "#10b981",
      gradientEnd: "#059669",
      lightBg: "#ecfdf5",
      lightBgHover: "#d1fae5",
      rgb: "5, 150, 105",
      rgbText: "5, 150, 105"
    },
    orange: {
      name: "Sore Hangat",
      hex: "#ea580c",
      hoverHex: "#c2410c",
      gradientStart: "#f97316",
      gradientEnd: "#ea580c",
      lightBg: "#fff7ed",
      lightBgHover: "#ffedd5",
      rgb: "234, 88, 12",
      rgbText: "234, 88, 12"
    },
    rose: {
      name: "Merah Berani",
      hex: "#e11d48",
      hoverHex: "#be123c",
      gradientStart: "#f43f5e",
      gradientEnd: "#e11d48",
      lightBg: "#fff1f2",
      lightBgHover: "#ffe4e6",
      rgb: "225, 29, 72",
      rgbText: "225, 29, 72"
    },
    purple: {
      name: "Misteri Ungu",
      hex: "#7c3aed",
      hoverHex: "#6d28d9",
      gradientStart: "#a78bfa",
      gradientEnd: "#7c3aed",
      lightBg: "#f5f3ff",
      lightBgHover: "#ede9fe",
      rgb: "124, 58, 237",
      rgbText: "124, 58, 237"
    },
    slate: {
      name: "Abu Klasik",
      hex: "#475569",
      hoverHex: "#334155",
      gradientStart: "#64748b",
      gradientEnd: "#475569",
      lightBg: "#f8fafc",
      lightBgHover: "#f1f5f9",
      rgb: "71, 85, 105",
      rgbText: "71, 85, 105"
    }
  };

  const currentTheme = THEME_COLORS_MAP[themeColor] || THEME_COLORS_MAP.blue;
  const sizeMultiplier = fontSize === "sm" ? 0.88 : fontSize === "lg" ? 1.12 : 1.0;
  
  const fontStyleCss = 
    fontFamily === 'space-grotesk' ? '"Space Grotesk", sans-serif' : 
    fontFamily === 'jetbrains-mono' ? '"JetBrains Mono", monospace' : 
    fontFamily === 'playfair' ? '"Playfair Display", serif' : 
    '"Inter", sans-serif';

  return (
    <div id="creative-one-root" className="w-screen h-screen bg-white text-slate-800 font-sans selection:bg-[#0c469b] selection:text-white flex items-center justify-center overflow-hidden">
      
      {/* Dynamic Styling Injections */}
      <style>{`
        :root {
          --primary-color: ${currentTheme.hex};
          --primary-hover: ${currentTheme.hoverHex};
          --primary-gradient-start: ${currentTheme.gradientStart};
          --primary-gradient-end: ${currentTheme.gradientEnd};
          --primary-light-bg: ${currentTheme.lightBg};
          --primary-light-bg-hover: ${currentTheme.lightBgHover};
        }
        
        #creative-one-root, #creative-one-root * {
          font-family: ${fontStyleCss} !important;
        }
        
        #creative-one-root {
          font-size: ${14 * sizeMultiplier}px !important;
        }
        
        /* Overriding exact colors of standard classes to be themed dynamically */
        .text-\[\#0c469b\] { color: var(--primary-color) !important; }
        .bg-\[\#0c469b\] { background-color: var(--primary-color) !important; }
        .border-\[\#0c469b\] { border-color: var(--primary-color) !important; }
        .hover\:text-\[\#0c469b\]:hover { color: var(--primary-color) !important; }
        .hover\:bg-\[\#0c469b\]:hover { background-color: var(--primary-color) !important; }
        .hover\:border-\[\#0c469b\]:hover { border-color: var(--primary-color) !important; }
        
        .bg-gradient-to-r.from-blue-500.to-\[\#0c469b\] {
          background-image: linear-gradient(to right, var(--primary-gradient-start), var(--primary-gradient-end)) !important;
        }
        .hover\:from-blue-600.hover\:to-\[\#082a6b\]:hover {
          background-image: linear-gradient(to right, var(--primary-gradient-start), var(--primary-hover)) !important;
        }
        .bg-gradient-to-br.from-\[\#0c469b\].via-\[\#09357a\].to-\[\#041d4c\] {
          background-image: linear-gradient(to bottom right, var(--primary-color), var(--primary-hover), #020d22) !important;
        }
        .bg-gradient-to-r.from-\[\#0c469b\].via-\[\#082a6b\].to-\[\#041d4c\] {
          background-image: linear-gradient(to right, var(--primary-color), var(--primary-hover), #020d22) !important;
        }
        .bg-blue-50 { background-color: var(--primary-light-bg) !important; }
        .hover\:bg-blue-50:hover { background-color: var(--primary-light-bg) !important; }
        .hover\:bg-blue-100:hover { background-color: var(--primary-light-bg-hover) !important; }
        .bg-blue-50\/70 { background-color: rgba(${currentTheme.rgb}, 0.08) !important; }
        .border-blue-200\/80 { border-color: rgba(${currentTheme.rgb}, 0.25) !important; }
        .border-blue-200 { border-color: rgba(${currentTheme.rgb}, 0.25) !important; }
        .border-blue-300 { border-color: rgba(${currentTheme.rgb}, 0.4) !important; }
        .text-blue-100 { color: rgba(${currentTheme.rgbText}, 0.9) !important; }
        
        #creative-one-root ::selection { background-color: var(--primary-color) !important; color: white !important; }
        
        /* App theme modes (sepia / dark) overrides */
        ${themeMode === 'sepia' ? `
          #creative-one-root, 
          #creative-one-root .bg-white, 
          #creative-one-root .bg-slate-50, 
          #creative-one-root .bg-slate-100, 
          #creative-one-root .bg-slate-50\/80,
          #creative-one-root .bg-white\/95 {
            background-color: #fbf0e3 !important;
          }
          #creative-one-root .text-slate-800, 
          #creative-one-root .text-slate-900, 
          #creative-one-root .text-slate-700 {
            color: #433422 !important;
          }
          #creative-one-root .text-slate-600, 
          #creative-one-root .text-slate-500,
          #creative-one-root .text-slate-400 {
            color: #6e5e49 !important;
          }
          #creative-one-root .border-slate-200, 
          #creative-one-root .border-slate-200\/80, 
          #creative-one-root .border-slate-200\/60,
          #creative-one-root .border-slate-100 {
            border-color: rgba(110, 94, 73, 0.2) !important;
          }
          #creative-one-root .bg-slate-50 {
            background-color: #f4e6d4 !important;
          }
          #creative-one-root input, 
          #creative-one-root select, 
          #creative-one-root textarea {
            background-color: #fcfcfc !important;
            color: #433422 !important;
            border-color: rgba(110, 94, 73, 0.25) !important;
          }
        ` : themeMode === 'dark' ? `
          #creative-one-root, 
          #creative-one-root .bg-white, 
          #creative-one-root .bg-slate-50, 
          #creative-one-root .bg-slate-100,
          #creative-one-root .bg-slate-50\/80,
          #creative-one-root .bg-white\/95 {
            background-color: #0b1329 !important;
          }
          #creative-one-root .text-slate-800, 
          #creative-one-root .text-slate-900, 
          #creative-one-root .text-slate-700 {
            color: #f1f5f9 !important;
          }
          #creative-one-root .text-slate-600, 
          #creative-one-root .text-slate-500,
          #creative-one-root .text-slate-400 {
            color: #94a3b8 !important;
          }
          #creative-one-root .border-slate-200, 
          #creative-one-root .border-slate-200\/80, 
          #creative-one-root .border-slate-200\/60,
          #creative-one-root .border-slate-100 {
            border-color: rgba(255, 255, 255, 0.1) !important;
          }
          #creative-one-root .bg-slate-50 {
            background-color: #080d1a !important;
          }
          #creative-one-root input, 
          #creative-one-root select, 
          #creative-one-root textarea {
            background-color: #0d1933 !important;
            color: #f1f5f9 !important;
            border-color: rgba(255, 255, 255, 0.15) !important;
          }
        ` : ''}
        
        /* Transition settings */
        ${!enableTransitions ? `
          * {
            transition-property: none !important;
            transform: none !important;
            animation: none !important;
          }
        ` : ''}
      `}</style>
      
      {/* Dynamic Super App Container: full-screen view for both mobile and widescreen desktop dashboard */}
      <div className="relative w-full h-full bg-white flex flex-col md:flex-row overflow-hidden select-none">
        
        {/* ==========================================
            DESKTOP ONLY: Left Sidebar Navigation
           ========================================== */}
        <aside id="desktop-sidebar-left" className="hidden md:flex flex-col w-60 bg-slate-50 border-r border-slate-200/60 shrink-0 p-5 justify-between">
          <div className="flex flex-col h-full overflow-hidden w-full">
            {/* Brand Header */}
            <div className="flex items-center gap-1 mb-4 shrink-0">
              <span className="font-sans font-black text-lg text-[#0c469b] tracking-tight">Creative</span>
              <span className="font-sans font-black text-lg bg-gradient-to-r from-orange-500 via-emerald-500 to-blue-500 bg-clip-text text-transparent leading-none">one</span>
            </div>
            
            {/* Slogan & Brief info */}
            <div className="mb-4 border-b border-slate-200/50 pb-3 shrink-0">
              <span className="text-[9px] font-black tracking-widest text-[#0c469b]/80 uppercase block mb-1 font-mono">
                "Satu Platform • Ribuan Manfaat"
              </span>
              <p className="text-[10px] text-slate-400 font-medium leading-relaxed">
                Platform terpadu kependudukan, utilitas, & kemakmuran digital warga.
              </p>
            </div>

            {/* Scrollable menu and services area */}
            <div className="flex-1 overflow-y-auto no-scrollbar space-y-4 pr-1 mb-4">
              {/* Menu Utama Section */}
              <div>
                <span className="text-[8.5px] uppercase tracking-widest text-slate-400 font-bold font-mono block mb-2">MENU UTAMA</span>
                <nav className="space-y-1">
                  {[
                    { id: "home", label: "Beranda", icon: Home },
                    { id: "aktivitas", label: "Aktivitas & Logs", icon: Activity },
                    { id: "qris", label: "Pindai QRIS", icon: QrCode },
                    { id: "notifications", label: "Notifikasi", icon: Bell, badge: true },
                    { id: "akun", label: "Akun & Pengaturan", icon: UserIcon }
                  ].map((tab) => {
                    const IconComp = tab.icon;
                    const isActive = activeTab === tab.id && !activeModule;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => { setActiveTab(tab.id as any); setActiveModule(null); }}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-bold font-sans transition-all cursor-pointer ${
                          isActive 
                            ? "bg-blue-50 text-[#0c469b] border-l-4 border-[#0c469b]" 
                            : "text-slate-500 hover:bg-slate-100 hover:text-slate-800"
                        }`}
                      >
                        <div className="relative shrink-0 flex items-center">
                          <IconComp className="w-4 h-4" />
                          {tab.badge && (
                            <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-rose-500 rounded-full"></span>
                          )}
                        </div>
                        <span className="truncate">{tab.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* User profile card at bottom of sidebar */}
            <div className="pt-3 border-t border-slate-200/80 flex items-center gap-2.5 shrink-0 font-sans w-full">
              <div className="w-9 h-9 rounded-full border border-blue-200 p-0.5 bg-white overflow-hidden shrink-0">
                <img src={user.avatar} className="w-full h-full rounded-full object-cover" alt="Avatar" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-xs font-black text-slate-800 truncate leading-none mb-1">{user.name}</h4>
                <p className="text-[9px] text-[#0c469b] font-mono uppercase font-extrabold">{(user.role || "WARGA").split("/")[0]}</p>
              </div>
            </div>
          </div>
        </aside>

        {/* ==========================================
            CORE VIEWPORT (Fills screen on mobile, center content pane on desktop)
           ========================================== */}
        <div className="flex-1 bg-slate-50 overflow-hidden flex flex-col relative z-20 h-full">
          
          {/* React Portal mounting container for running selected modules */}
          <div id="phone-active-module-portal" className={`absolute inset-0 z-30 overflow-hidden ${activeModule ? "pointer-events-auto" : "pointer-events-none"}`}></div>

          {/* Home, Notif, QRIS, Aktivitas, Akun Screen views */}
          {activeTab === "home" && (
                <div className="flex-1 flex flex-col overflow-y-auto bg-[#f8fafc]">
                  
                  {/* Phone App Inner Header */}
                  <div className="px-4 py-3 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-10 shrink-0 border-b border-slate-100">
                    <div className="flex items-center gap-1">
                      <span className="font-sans font-black text-base text-[#0c469b] tracking-tight">Creative</span>
                      <span className="font-sans font-black text-base bg-gradient-to-r from-orange-500 via-emerald-500 to-blue-500 bg-clip-text text-transparent leading-none">one</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {/* Notifications bell */}
                      <button 
                        onClick={() => setActiveTab("notifications")}
                        className="p-1.5 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-600 transition shrink-0 relative"
                      >
                        <Bell className="w-4 h-4" />
                        <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-rose-500"></span>
                      </button>
                      
                      {/* User Account click */}
                      <button 
                        onClick={() => setActiveTab("akun")}
                        className="w-7 h-7 rounded-full border border-blue-200 p-0.5 bg-white overflow-hidden shrink-0"
                      >
                        <img src={user.avatar} className="w-full h-full rounded-full object-cover" alt="Avatar" />
                      </button>
                    </div>
                  </div>

                  {/* Greeting & Quick Dashboard Card inside phone (Widescreen optimized with flex layouts) */}
                  <div className="mx-3.5 md:mx-6 mt-3 md:mt-6 bg-gradient-to-br from-[#0c469b] via-[#09357a] to-[#041d4c] text-white p-4.5 md:p-6 rounded-2xl md:rounded-3xl shadow-md shadow-blue-900/15 relative overflow-hidden shrink-0 flex flex-col md:flex-row gap-4 justify-between">
                    {/* Glowing ambient light */}
                    <div className="absolute -top-12 -right-12 w-28 h-28 bg-blue-400/20 blur-[30px] rounded-full"></div>
                    
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[9px] md:text-[10px] text-blue-200/80 font-mono tracking-wider font-semibold uppercase">Mitra Creative One</span>
                        <h3 className="text-base md:text-xl font-bold text-white tracking-wide mt-0.5">Assalamu'alaikum, {user.name.split(" ")[0]}!</h3>
                        <p className="text-[11px] md:text-xs text-blue-100 font-medium mt-1">Selamat pagi 🌤️ Ada beberapa informasi penting hari ini:</p>
                      </div>
                      
                      {/* Bottom glassmorphic AI pill */}
                      <div 
                        onClick={() => {
                          if (window.innerWidth >= 768) {
                            setIsChatFloatingOpen(true);
                          } else {
                            setActiveTab("ai-chat");
                          }
                          handleSendChat("Tampilkan ringkasan tagihan saya hari ini");
                        }}
                        className="mt-4 bg-white/10 border border-white/15 hover:bg-white/20 p-2 rounded-xl flex items-center justify-between text-[10px] text-blue-100 hover:text-white cursor-pointer transition-all font-semibold max-w-xs"
                      >
                        <span className="flex items-center gap-1.5">
                          <Bot className="w-3.5 h-3.5 text-amber-400" />
                          AI Assistant siap membantu Anda
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-blue-200" />
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col justify-center min-w-[280px]">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[9px] text-blue-200 font-mono uppercase tracking-wider">Status Informasi</span>
                        <span className="text-[9px] bg-white/10 px-2 py-0.5 border border-white/10 rounded-full font-bold font-mono text-amber-400">
                          {(user.role || "WARGA").split("/")[0]}
                        </span>
                      </div>
                      <div className="space-y-2 text-[10px]">
                        <div 
                          onClick={() => { const m = MODULES_LIST.find(x => x.id === "water"); if(m) setActiveModule(m); }}
                          className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded-lg p-1.5 transition cursor-pointer text-blue-100 hover:text-white"
                        >
                          <Droplet className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                          <span className="truncate">Tagihan air Jatuh Tempo 5 hari lagi.</span>
                          <ChevronRight className="w-3 h-3 text-white/50 ml-auto shrink-0" />
                        </div>
                        <div 
                          onClick={() => { const m = MODULES_LIST.find(x => x.id === "tourism"); if(m) setActiveModule(m); }}
                          className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded-lg p-1.5 transition cursor-pointer text-blue-100 hover:text-white"
                        >
                          <Compass className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span className="truncate">Wisata Curug sedang ramai, 245 pengunjung.</span>
                          <ChevronRight className="w-3 h-3 text-white/50 ml-auto shrink-0" />
                        </div>
                        <div 
                          onClick={() => { const m = MODULES_LIST.find(x => x.id === "rescue"); if(m) setActiveModule(m); }}
                          className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded-lg p-1.5 transition cursor-pointer text-blue-100 hover:text-white"
                        >
                          <HeartPulse className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                          <span className="truncate">Ambulans desa dalam status siap siaga.</span>
                          <ChevronRight className="w-3 h-3 text-white/50 ml-auto shrink-0" />
                        </div>
                        <div className="flex items-center gap-2 bg-white/5 border border-white/5 rounded-lg p-1.5 text-blue-100/90">
                          <Cloud className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span className="truncate">Cuaca diperkirakan hujan pada pukul 14.00.</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Search and Category Filters */}
                  <div className="px-3.5 md:px-6 mt-4 md:mt-6">
                    <div className="relative">
                      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Cari layanan di Creative One (e.g., Water, Ride, School...)"
                        className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 font-medium"
                      />
                      {searchQuery && (
                        <button 
                          onClick={() => setSearchQuery("")}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 font-bold hover:text-slate-600 cursor-pointer"
                        >
                          BATAL
                        </button>
                      )}
                    </div>

                    {/* Category tabs */}
                    <div className="flex gap-1.5 mt-3 overflow-x-auto no-scrollbar pb-1">
                      {[
                        { id: "all", label: "Semua Kategori" },
                        { id: "utility", label: "Utilitas" },
                        { id: "social", label: "Sosial" },
                        { id: "education", label: "Edukasi" },
                        { id: "commerce", label: "Niaga" },
                        { id: "logistics", label: "Logistik" },
                        { id: "ai", label: "AI Hub" }
                      ].map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => setCategoryFilter(cat.id)}
                          className={`px-3 py-1.5 rounded-lg text-[9.5px] font-bold transition whitespace-nowrap cursor-pointer ${
                            categoryFilter === cat.id
                              ? "bg-[#0c469b] text-white"
                              : "bg-white text-slate-500 border border-slate-200/85 hover:bg-slate-50"
                          }`}
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* "Semua Layanan" heading */}
                  <div className="px-4 md:px-6 mt-4 md:mt-6 mb-2 flex items-center justify-between">
                    <h3 className="text-xs font-black uppercase text-slate-800 tracking-wider font-sans">Ecosystem Modules</h3>
                    <span className="text-[10px] text-[#0c469b] font-bold font-mono">{filteredModules.length} MODUL</span>
                  </div>

                  {/* grid of service buttons based on dynamic filters */}
                  <div className="px-3.5 md:px-6 grid grid-cols-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 md:gap-4">
                    {filteredModules.length === 0 ? (
                      <div className="col-span-full py-8 text-center text-slate-400 text-xs font-medium font-sans bg-white rounded-2xl border border-slate-100">
                        {t.noResults}
                      </div>
                    ) : (
                      filteredModules.map((mod) => {
                        const colorMap: { [key: string]: string } = {
                          water: "bg-sky-500",
                          village: "bg-emerald-500",
                          ride: "bg-orange-500",
                          mart: "bg-purple-500",
                          pay: "bg-teal-500",
                          care: "bg-rose-500",
                          tourism: "bg-emerald-600",
                          pesantren: "bg-green-600",
                          school: "bg-blue-500",
                          foundation: "bg-teal-600",
                          tracker: "bg-indigo-500",
                          ai: "bg-sky-600",
                          marine: "bg-blue-600",
                          agriculture: "bg-amber-500",
                          livestock: "bg-orange-600",
                          rescue: "bg-red-600"
                        };
                        const iconMap: { [key: string]: any } = {
                          water: Droplet,
                          village: Landmark,
                          ride: Bike,
                          mart: ShoppingBag,
                          pay: CreditCard,
                          care: HeartPulse,
                          tourism: Compass,
                          pesantren: BookOpen,
                          school: GraduationCap,
                          foundation: Landmark,
                          tracker: MapPin,
                          ai: Bot,
                          marine: Waves,
                          agriculture: Sprout,
                          livestock: Beef,
                          rescue: ShieldAlert
                        };
                        
                        const colorClass = colorMap[mod.id] || "bg-slate-500";
                        const IconComp = iconMap[mod.id] || ChevronRight;
                        
                        return (
                          <button 
                            key={mod.id}
                            onClick={() => {
                              if (mod.id === "ai") {
                                if (window.innerWidth >= 768) {
                                  setIsChatFloatingOpen(true);
                                } else {
                                  setActiveTab("ai-chat");
                                }
                              } else {
                                setActiveModule(mod);
                                addAuditLog(`Opened module: ${mod.name}`);
                              }
                            }}
                            className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-3.5 p-2 md:p-3.5 rounded-xl md:rounded-2xl bg-white border border-slate-200/70 hover:border-blue-500 hover:shadow-md transition-all duration-200 cursor-pointer active:scale-95 text-center md:text-left shadow-3xs group shrink-0"
                          >
                            <div className={`w-9 h-9 md:w-11 md:h-11 rounded-xl md:rounded-xl shrink-0 ${colorClass} text-white flex items-center justify-center mb-1.5 md:mb-0 transition-transform group-hover:scale-105 shadow-sm`}>
                              <IconComp className="w-4.5 h-4.5 md:w-5.5 md:h-5.5" />
                            </div>
                            <div className="flex-1 min-w-0 text-center md:text-left">
                              <span className="text-[8.5px] md:text-[11.5px] font-bold md:font-extrabold text-slate-700 font-sans tracking-tight block truncate w-full">{mod.name}</span>
                              <span className="hidden md:block text-[9.5px] text-slate-400 mt-0.5 font-medium line-clamp-1 w-full leading-tight">
                                {lang === "id" ? mod.descriptionId : mod.descriptionEn}
                              </span>
                            </div>
                          </button>
                        );
                      })
                    )}
                  </div>

                  {/* Interactive Wallet & Quick Actions Panel */}
                  <div className="mx-3.5 md:mx-6 mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Creative Pay Balance Card */}
                    <div className="bg-white border border-slate-200/80 p-4.5 rounded-2xl shadow-3xs flex flex-col justify-between">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold font-mono">Creative Pay Balance</span>
                          <h4 className="text-xl md:text-2xl font-mono font-black text-slate-800 mt-1">
                            Rp {Number(user.balance || 0).toLocaleString("id-ID")}
                          </h4>
                        </div>
                        <span className="text-[8.5px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-1.5 py-0.5 rounded-full font-bold font-mono">AKTIF</span>
                      </div>
                      
                      <p className="text-[10px] text-slate-400 leading-normal mb-4 font-medium">Top up instan dengan simulasi bank transfer atau gunakan QRIS.</p>
                      
                      <div className="grid grid-cols-2 gap-2">
                        <button 
                          onClick={() => {
                            setUser(prev => ({ ...prev, balance: prev.balance + 100000 }));
                            addAuditLog("Top Up: Rp 100.000 via VA Bank Transfer", "SUCCESS");
                            alert("Top Up Sukses! Rp 100.000 berhasil ditambahkan ke saldo Creative Pay Anda.");
                          }}
                          className="py-2.5 bg-blue-50 hover:bg-blue-100 text-[#0c469b] rounded-xl text-[10.5px] font-black uppercase tracking-wider flex items-center justify-center gap-1.5 transition active:scale-95 cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          TOP UP 100K
                        </button>
                        <button 
                          onClick={() => {
                            setActiveTab("qris");
                          }}
                          className="py-2.5 bg-gradient-to-r from-blue-500 to-[#0c469b] text-white hover:opacity-95 rounded-xl text-[10.5px] font-black uppercase tracking-wider flex items-center justify-center gap-1.5 transition active:scale-95 cursor-pointer"
                        >
                          <QrCode className="w-3.5 h-3.5" />
                          PINDAI QRIS
                        </button>
                      </div>
                    </div>

                    {/* Quick Transfer Form */}
                    <div className="bg-white border border-slate-200/80 p-4.5 rounded-2xl shadow-3xs">
                      <h4 className="text-[10px] uppercase tracking-wider text-slate-800 font-black font-sans mb-1.5">Transfer Cepat</h4>
                      <p className="text-[9.5px] text-slate-400 mb-3">Kirim dana aman instan ke warga / mitra Creative One</p>
                      
                      <form onSubmit={handleTransfer} className="space-y-2.5">
                        <div className="grid grid-cols-2 gap-2">
                          <input
                            type="text"
                            value={payReceiver}
                            onChange={(e) => setPayReceiver(e.target.value)}
                            placeholder="Rekening / No HP"
                            className="bg-slate-50 border border-slate-200/85 rounded-xl px-2.5 py-1.5 text-[11px] text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-blue-500 font-medium"
                          />
                          <input
                            type="number"
                            value={payAmount}
                            onChange={(e) => setPayAmount(e.target.value)}
                            placeholder="Jumlah Rp"
                            className="bg-slate-50 border border-slate-200/85 rounded-xl px-2.5 py-1.5 text-[11px] text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-blue-500 font-medium"
                          />
                        </div>
                        <button 
                          type="submit" 
                          className="w-full py-2.5 bg-[#0c469b] hover:bg-blue-800 text-white font-bold text-[10px] uppercase tracking-widest rounded-xl transition active:scale-95 cursor-pointer"
                        >
                          KIRIM SEKARANG ⚡
                        </button>
                      </form>
                      {paySuccess && (
                        <p className="text-[9.5px] text-emerald-600 text-center mt-1.5 font-mono font-bold animate-pulse">✓ Transfer berhasil! Saldo ditarik aman.</p>
                      )}
                    </div>
                  </div>

                  {/* Quick Verification & Emergency Panels */}
                  <div className="mx-3.5 md:mx-6 mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Emergency Panic button widget */}
                    <div className="bg-rose-50 border border-rose-100 p-4.5 rounded-2xl shadow-3xs flex flex-col justify-between relative overflow-hidden">
                      <div className="absolute -top-12 -right-12 w-24 h-24 bg-rose-200/30 blur-[30px] rounded-full"></div>
                      <div>
                        <div className="flex justify-between items-center mb-1.5">
                          <h4 className="text-[10px] uppercase tracking-wider text-rose-850 font-black font-sans">Emergency Panic Button</h4>
                          <span className={`text-[8px] font-mono font-bold px-1.5 py-0.5 rounded ${rescueStatus === "Siaga" ? "bg-teal-100 text-teal-800" : "bg-amber-100 text-amber-800 animate-pulse"}`}>
                            {rescueStatus.toUpperCase()}
                          </span>
                        </div>
                        <p className="text-[10px] text-rose-700/80 mb-3.5 font-medium leading-normal">Aktifkan alarm darurat untuk membagikan koordinat satelit GPS ke instansi darurat dalam 3 detik.</p>
                      </div>
                      
                      <div className="space-y-2">
                        <button 
                          onClick={triggerEmergency}
                          disabled={emergencyActive}
                          className="w-full py-2.5 bg-rose-600 hover:bg-rose-500 disabled:bg-rose-400 text-white font-extrabold text-[10.5px] uppercase tracking-wider rounded-xl transition shadow-sm active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                        >
                          <ShieldAlert className="w-4 h-4 text-white" />
                          {emergencyActive ? "MENGIRIM GPS..." : "TEKAN PANIC BUTTON 🚨"}
                        </button>
                        
                        <div className="grid grid-cols-3 gap-1.5">
                          <button onClick={() => dispatchRescue("Ambulans")} className="py-1.5 bg-white hover:bg-rose-100/50 border border-rose-200 text-rose-800 rounded-lg text-[9px] font-bold transition cursor-pointer">
                            AMBULANS
                          </button>
                          <button onClick={() => dispatchRescue("Pemadam")} className="py-1.5 bg-white hover:bg-rose-100/50 border border-rose-200 text-rose-800 rounded-lg text-[9px] font-bold transition cursor-pointer">
                            DAMKAR
                          </button>
                          <button onClick={() => dispatchRescue("Tim SAR")} className="py-1.5 bg-white hover:bg-rose-100/50 border border-rose-200 text-rose-800 rounded-lg text-[9px] font-bold transition cursor-pointer">
                            TIM SAR
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Biometric Enkripsi Verification Simulator */}
                    <div className="bg-slate-50 border border-slate-200 p-4.5 rounded-2xl shadow-3xs flex flex-col justify-between">
                      <div>
                        <h4 className="text-[10px] uppercase tracking-wider text-slate-800 font-black font-sans mb-1">Otentikasi Biometrik Ledger</h4>
                        <p className="text-[10px] text-slate-400 mb-4 font-medium leading-normal">Simulasikan verifikasi keamanan biometrik ganda untuk mengakses audit log dan ledger keuangan desa.</p>
                      </div>

                      <div className="grid grid-cols-2 gap-2.5">
                        <button 
                          onClick={() => simulateBiometric("face")}
                          className="p-3 bg-white hover:bg-blue-50 border border-slate-200 rounded-xl flex flex-col items-center justify-center text-center gap-1.5 transition-all cursor-pointer group active:scale-95"
                        >
                          <ScanFace className="w-6 h-6 text-[#0c469b] group-hover:scale-110 transition" />
                          <span className="text-[9.5px] font-bold text-slate-700">FACE RECOGNITION</span>
                        </button>
                        <button 
                          onClick={() => simulateBiometric("finger")}
                          className="p-3 bg-white hover:bg-blue-50 border border-slate-200 rounded-xl flex flex-col items-center justify-center text-center gap-1.5 transition-all cursor-pointer group active:scale-95"
                        >
                          <Fingerprint className="w-6 h-6 text-[#0c469b] group-hover:scale-110 transition" />
                          <span className="text-[9.5px] font-bold text-slate-700">FINGERPRINT CHECK</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Scenic Promo Card at Bottom inside phone (responsive width/padding) */}
                  <div 
                    onClick={() => { const m = MODULES_LIST.find(x => x.id === "tourism"); if(m) setActiveModule(m); }}
                    className="mx-3.5 md:mx-6 mt-4 md:mt-6 mb-6 rounded-2xl overflow-hidden relative h-36 md:h-44 border border-slate-200 shadow-md shadow-slate-200/50 cursor-pointer group shrink-0 flex flex-col justify-end p-4 md:p-6 text-white"
                  >
                    <div className="absolute inset-0 bg-cover bg-center bg-no-referrer" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80')" }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/40 to-transparent"></div>
                    
                    <div className="relative z-10">
                      <span className="text-[8px] bg-emerald-500 text-white font-black uppercase tracking-widest px-2 py-0.5 rounded-full font-mono mb-1.5 inline-block">PROMO WISATA</span>
                      <h4 className="text-[12.5px] md:text-sm font-black tracking-tight text-white group-hover:text-amber-300 transition-colors">Jelajahi Keindahan Negeri</h4>
                      <p className="text-[9px] md:text-xs text-white/80 leading-normal mt-0.5 line-clamp-2 font-medium">Pesan tiket, homestay, & guide wisata di Creative Tourism.</p>
                    </div>
                  </div>

                </div>
              )}

              {activeTab === "aktivitas" && (
                <div className="flex-1 flex flex-col overflow-y-auto bg-slate-50 p-4">
                  <div className="flex justify-between items-end mb-3 shrink-0">
                    <div>
                      <h3 className="text-xs font-black uppercase tracking-wider text-[#0c469b] font-sans">Aktivitas & Logs</h3>
                      <p className="text-[9px] text-slate-400">Data audit ledger terenkripsi</p>
                    </div>
                    <span className="text-[8px] text-blue-700 font-mono bg-blue-50 border border-blue-200 px-1.5 py-0.5 rounded font-bold">AES-256</span>
                  </div>

                  {/* Moving system charts inside phone view */}
                  <div className="flex items-end gap-1.5 h-12 mb-3.5 bg-slate-100 p-2 rounded-xl border border-slate-200/60 shrink-0">
                    <div className="flex-1 bg-[#0c469b]/25 h-[40%] rounded-xs animate-pulse"></div>
                    <div className="flex-1 bg-blue-500/35 h-[85%] rounded-xs animate-pulse"></div>
                    <div className="flex-1 bg-blue-600/25 h-[65%] rounded-xs"></div>
                    <div className="flex-1 bg-blue-500/45 h-[90%] rounded-xs animate-pulse"></div>
                    <div className="flex-1 bg-[#0c469b]/35 h-[30%] rounded-xs"></div>
                    <div className="flex-1 bg-indigo-500/25 h-[75%] rounded-xs animate-pulse"></div>
                    <div className="flex-1 bg-blue-500/25 h-[50%] rounded-xs"></div>
                  </div>

                  {/* Secured logs */}
                  <div className="flex-1 overflow-y-auto space-y-2 pr-1 no-scrollbar">
                    {auditLogs.map((log, idx) => (
                      <div key={idx} className="bg-white border border-slate-200 p-2.5 rounded-xl text-[9px] font-mono shadow-3xs">
                        <div className="flex justify-between items-start mb-1">
                          <span className="text-slate-800 font-bold leading-tight">{log.action}</span>
                          <span className={`text-[7px] font-sans font-bold px-1 py-0.5 rounded ${log.status === "SUCCESS" ? "text-emerald-700 bg-emerald-50 border border-emerald-200" : "text-rose-700 bg-rose-50 border border-rose-200"}`}>
                            {log.status}
                          </span>
                        </div>
                        <div className="text-slate-400 text-[8px] flex justify-between">
                          <span>{log.user} • {log.role.split("/")[0]}</span>
                          <span>{log.timestamp.split(" ")[1] || log.timestamp}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "qris" && (
                <div className="flex-1 flex flex-col justify-between bg-slate-900 p-4 text-white">
                  <div className="text-center mt-2">
                    <h3 className="text-sm font-black uppercase text-amber-400 font-mono tracking-wider">CREATIVE PAY QRIS</h3>
                    <p className="text-[10px] text-slate-300 leading-normal mt-1">Pindai QR Code pedagang atau tunjukkan kode bayar Anda</p>
                  </div>

                  {/* QRIS scanner simulation box */}
                  <div className="w-56 h-56 mx-auto bg-slate-950/80 border-2 border-dashed border-blue-400 rounded-2xl flex items-center justify-center relative overflow-hidden my-4 shadow-xl">
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-400"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-blue-400"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-blue-400"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-blue-400"></div>
                    
                    {/* Animated scanning bar */}
                    <div className="w-full h-0.5 bg-blue-400 opacity-60 absolute top-0 left-0 animate-[bounce_3s_infinite]"></div>

                    <div className="text-center px-4">
                      <Camera className="w-10 h-10 mx-auto text-blue-300 opacity-60 animate-pulse mb-2" />
                      <span className="text-[10px] text-slate-400 font-mono">Kamera Siaga</span>
                    </div>
                  </div>

                  <div className="text-center space-y-3.5 mb-2">
                    <button 
                      onClick={() => {
                        if (user.balance < 25000) {
                          alert("Saldo Creative Pay Anda tidak mencukupi untuk pembayaran ini!");
                          return;
                        }
                        setUser(prev => ({ ...prev, balance: prev.balance - 25000 }));
                        addAuditLog("QRIS Payment: Sukses membayar Rp 25.000 ke Creative Mart", "SUCCESS");
                        alert("Pembayaran QRIS Sukses! Rp 25.000 berhasil dikurangkan dari saldo Creative Pay.");
                      }}
                      className="w-full py-2.5 bg-gradient-to-r from-blue-500 to-[#0c469b] hover:from-blue-600 hover:to-[#082a6b] text-white text-xs font-black uppercase tracking-widest rounded-xl transition shadow-md active:scale-95 cursor-pointer"
                    >
                      SIMULASI BAYAR Rp 25.000
                    </button>
                    <p className="text-[9.5px] text-slate-400 font-mono">
                     Sisa Saldo: Rp {Number(user.balance || 0).toLocaleString("id-ID")}
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "notifications" && (
                <div className="flex-1 flex flex-col bg-slate-50 p-4">
                  <div className="flex justify-between items-center mb-3 shrink-0">
                    <h3 className="text-xs font-black uppercase tracking-wider text-[#0c469b] font-sans">Notifikasi Real-time</h3>
                    <button 
                      onClick={() => {
                        setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
                        addAuditLog("Marked all notifications as read");
                      }}
                      className="text-[9.5px] text-blue-700 font-bold hover:underline"
                    >
                      Tandai Dibaca Semua
                    </button>
                  </div>

                  <div className="flex-1 overflow-y-auto space-y-2 pr-1 no-scrollbar">
                    {notifications.map((notif) => (
                      <div 
                        key={notif.id}
                        onClick={() => {
                          setNotifications(prev => prev.map(n => n.id === notif.id ? { ...n, unread: false } : n));
                          addAuditLog(`Read notification ID: ${notif.id}`);
                        }}
                        className={`p-3 rounded-xl border transition cursor-pointer relative ${
                          notif.unread 
                            ? "bg-blue-50/70 border-blue-200/80" 
                            : "bg-white border-slate-200"
                        }`}
                      >
                        {notif.unread && (
                          <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-blue-600"></span>
                        )}
                        <h4 className="text-[11px] font-bold text-slate-800 leading-tight mb-0.5">{notif.title}</h4>
                        <p className="text-[10px] text-slate-500 leading-normal mb-1.5">{notif.body}</p>
                        <span className="text-[8px] text-slate-400 font-mono">{notif.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "akun" && (
              <ProfilePage user={user} />
              )}

              {activeTab === "ai-chat" && renderChatArea(false)}

            {/* App Bottom Navigation Bar (hidden on desktop screens) */}
            <div className="h-14 bg-white/95 backdrop-blur-md border-t border-slate-200/80 flex md:hidden items-center justify-around px-2 relative z-40 select-none shrink-0">
              <button 
                onClick={() => { setActiveTab("home"); setActiveModule(null); }}
                className={`flex flex-col items-center justify-center gap-1 cursor-pointer transition-colors ${activeTab === "home" ? "text-[#0c469b]" : "text-slate-400 hover:text-slate-600"}`}
              >
                <Home className="w-4.5 h-4.5" />
                <span className="text-[8px] font-bold font-sans">Beranda</span>
              </button>
              
              <button 
                onClick={() => { setActiveTab("aktivitas"); setActiveModule(null); }}
                className={`flex flex-col items-center justify-center gap-1 cursor-pointer transition-colors ${activeTab === "aktivitas" ? "text-[#0c469b]" : "text-slate-400 hover:text-slate-600"}`}
              >
                <Activity className="w-4.5 h-4.5" />
                <span className="text-[8px] font-bold font-sans">Aktivitas</span>
              </button>

              {/* QRIS quick button popped out */}
              <button 
                onClick={() => { setActiveTab("qris"); setActiveModule(null); }}
                className="w-11 h-11 bg-gradient-to-r from-blue-500 to-[#0c469b] hover:from-blue-600 hover:to-[#082a6b] text-white rounded-full flex items-center justify-center shadow-md shadow-blue-500/25 cursor-pointer relative -top-3 shrink-0 active:scale-95 transition-all"
                title="Pindai QRIS"
              >
                <QrCode className="w-5 h-5" />
              </button>

              <button 
                onClick={() => { setActiveTab("notifications"); setActiveModule(null); }}
                className={`flex flex-col items-center justify-center gap-1 cursor-pointer transition-colors ${activeTab === "notifications" ? "text-[#0c469b]" : "text-slate-400 hover:text-slate-600"}`}
              >
                <div className="relative">
                  <Bell className="w-4.5 h-4.5" />
                  <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-rose-500 rounded-full"></span>
                </div>
                <span className="text-[8px] font-bold font-sans">Notifikasi</span>
              </button>

              <button 
                onClick={() => { setActiveTab("akun"); setActiveModule(null); }}
                className={`flex flex-col items-center justify-center gap-1 cursor-pointer transition-colors ${activeTab === "akun" ? "text-[#0c469b]" : "text-slate-400 hover:text-slate-600"}`}
              >
                <UserIcon className="w-4.5 h-4.5" />
                <span className="text-[8px] font-bold font-sans">Akun</span>
              </button>
            </div>

            {/* Dynamic continuous running marquee footer text inside the app shell */}
            <div className="shrink-0 relative z-40 border-t border-slate-100 bg-slate-50">
              <RunningText lang={lang} />
            </div>

            {/* ==========================================================
                DYNAMIC FLOATING AI ASSISTANT (FAB + Popup panel)
                ========================================================== */}
            <AnimatePresence>
              {/* Floating Action Button (Only show if not currently on mobile full-screen chat tab) */}
              {activeTab !== "ai-chat" && (
                <motion.div
                  className="absolute bottom-20 md:bottom-6 right-4 md:right-6 z-45"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <button
                    onClick={() => {
                      if (window.innerWidth >= 768) {
                        setIsChatFloatingOpen(prev => !prev);
                      } else {
                        setActiveTab("ai-chat");
                        setActiveModule(null);
                      }
                    }}
                    className="w-12 h-12 md:w-14 md:h-14 bg-[#0c469b] hover:bg-blue-800 text-white rounded-full flex items-center justify-center shadow-lg shadow-blue-900/30 transition-all cursor-pointer relative active:scale-95 group border border-blue-400/25"
                    title="Creative AI Assistant"
                    type="button"
                  >
                    {/* Glowing outer ring animation */}
                    <span className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping opacity-75"></span>
                    
                    {isChatFloatingOpen ? (
                      <X className="w-5.5 h-5.5 md:w-6 md:h-6" />
                    ) : (
                      <div className="relative">
                        <Bot className="w-5.5 h-5.5 md:w-6 md:h-6" />
                        <span className="absolute -top-1 -right-1 flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                      </div>
                    )}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {/* Floating chat card window */}
              {isChatFloatingOpen && activeTab !== "ai-chat" && (
                <motion.div
                  className="absolute bottom-34 md:bottom-22 right-4 md:right-6 z-45 w-[330px] md:w-[380px] h-[500px] bg-white rounded-2xl shadow-2xl border border-slate-200/80 overflow-hidden flex flex-col"
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 50, scale: 0.9 }}
                  transition={{ type: "spring", damping: 25, stiffness: 350 }}
                >
                  {renderChatArea(true)}
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

          {/* Active Module Panel Overlay (Smooth Expandable Area) */}
          {activeModule && typeof document !== 'undefined' && createPortal(
            <div id="module-detail-modal" className="absolute inset-0 bg-[#0a1e3f] flex flex-col text-white animate-in slide-in-from-bottom duration-300 z-40 overflow-y-auto p-4 no-scrollbar">
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-500/10 blur-[60px] rounded-full"></div>
              
              {/* Header inside overlay modal */}
              <div className="flex justify-between items-start border-b border-white/10 pb-4 mb-4 relative z-10">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 bg-white/10 border border-white/10 rounded-xl flex items-center justify-center">
                    <LucideIcon name={activeModule.iconName} className="w-6.5 h-6.5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-wide">{activeModule.name}</h3>
                    <p className="text-xs text-blue-200/60">{lang === "id" ? activeModule.descriptionId : activeModule.descriptionEn}</p>
                  </div>
                </div>
                <button 
                  onClick={() => {
                    setActiveModule(null);
                    addAuditLog("Closed active module panel");
                  }}
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 hover:text-white text-white/60 flex items-center justify-center transition cursor-pointer"
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>

              {/* Dynamic Interactive Panel Body for each specific module */}
              <div className="min-h-[220px] relative z-10">
                
                {/* 1. Creative Water */}
                {activeModule.id === "water" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/5 border border-white/5 p-4.5 rounded-xl flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono mb-2">Pusat Tagihan Air PDAM</h4>
                        <p className="text-xs text-white/70 mb-4">Membayar tagihan air Anda dengan saldo Creative Pay aman terenkripsi.</p>
                      </div>
                      <div className="bg-black/35 p-4 rounded-lg border border-white/5 flex justify-between items-center">
                        <div>
                          <p className="text-[10px] text-white/40">TAGIHAN JUNI 2026</p>
                          <p className="text-lg font-mono text-white font-bold">{waterBillPaid ? "Rp 0" : "Rp 45.000"}</p>
                        </div>
                        <button
                          onClick={handlePayWaterBill}
                          disabled={waterBillPaid}
                          className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition ${
                            waterBillPaid 
                              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 cursor-not-allowed" 
                              : "bg-teal-500 text-black hover:bg-teal-400"
                          }`}
                        >
                          {waterBillPaid ? "LUNAS ✓" : "BAYAR TAGIHAN"}
                        </button>
                      </div>
                    </div>

                    <div className="bg-white/5 border border-white/5 p-4.5 rounded-xl">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono mb-2">Catat Meter Air Mandiri</h4>
                      <form onSubmit={handleMeterSubmit} className="space-y-3">
                        <p className="text-[10.5px] text-white/50">Unggah angka meter meteran Anda secara transparan untuk menghindari selisih tagihan:</p>
                        <div className="flex gap-2">
                          <input
                            type="number"
                            value={waterMeterInput}
                            onChange={(e) => setWaterMeterInput(e.target.value)}
                            placeholder="Contoh: 1245 m³"
                            className="flex-1 bg-black/40 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white"
                          />
                          <button type="submit" className="px-4 py-1.5 bg-white/10 hover:bg-white/15 rounded-lg text-xs font-bold font-mono">
                            KIRIM DATA
                          </button>
                        </div>
                        <div className="flex items-center gap-2 text-[10px] text-white/40 border-t border-white/5 pt-2.5 mt-2">
                          <Camera className="w-3.5 h-3.5 text-teal-400" />
                          <span>Simulasi Kamera: Melampirkan foto meteran fisik (Terenkripsi GPS)</span>
                        </div>
                      </form>
                    </div>
                  </div>
                )}

                {/* 2. Creative Village */}
                {activeModule.id === "village" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/5 border border-white/5 p-4.5 rounded-xl">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono mb-2">Pengajuan Surat Online</h4>
                      <form onSubmit={handleApplyLetter} className="space-y-3">
                        <div>
                          <label className="text-[10px] uppercase text-white/40 block mb-1">Pilih Jenis Dokumen</label>
                          <select 
                            value={letterType} 
                            onChange={(e) => setLetterType(e.target.value)}
                            className="w-full bg-black/40 border border-white/10 rounded-lg p-1.5 text-xs text-white"
                          >
                            <option value="Surat Keterangan Usaha">Surat Keterangan Usaha (SKU)</option>
                            <option value="Surat Keterangan Domisili">Surat Keterangan Domisili (SKD)</option>
                            <option value="Surat Pengantar SKCK">Surat Pengantar SKCK</option>
                            <option value="Surat Keterangan Tidak Mampu">Surat Keterangan Tidak Mampu (SKTM)</option>
                          </select>
                        </div>
                        <button type="submit" className="w-full py-2 bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 font-bold text-xs uppercase tracking-widest rounded-lg transition">
                          AJUKAN SEKARANG
                        </button>
                      </form>
                    </div>

                    <div className="bg-white/5 border border-white/5 p-4.5 rounded-xl flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono mb-2">Riwayat Pengajuan & PBB</h4>
                        <div className="space-y-2 max-h-[100px] overflow-y-auto">
                          {villageLetters.map((l, i) => (
                            <div key={i} className="flex justify-between items-center text-xs bg-black/20 p-2 rounded-lg border border-white/5">
                              <span>{l.type}</span>
                              <span className={`text-[9px] px-1.5 py-0.5 rounded ${l.status === "Selesai" ? "text-emerald-400 bg-emerald-400/10" : "text-amber-400 bg-amber-400/10"}`}>
                                {l.status}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="text-[10px] text-white/40 border-t border-white/5 pt-2.5">
                        <span>PBB Terutang Anda (2026): <strong>Lunas</strong> • APBDes Transparan dapat diunduh di tab Dokumen.</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. Creative School */}
                {activeModule.id === "school" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/5 border border-white/5 p-4.5 rounded-xl flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono mb-2">CBT (Computer Based Test)</h4>
                        <p className="text-xs text-white/70 mb-4">Simulasikan ujian CBT sekolah terintegrasi dengan asisten koreksi otomatis.</p>
                      </div>
                      {examActive ? (
                        <div className="space-y-2">
                          <label className="text-[10px] text-teal-300">Soal: Apa visi PT Karangsari Creative Solution?</label>
                          <input
                            type="text"
                            value={examAns}
                            onChange={(e) => setExamAns(e.target.value)}
                            placeholder="Ketik jawaban Anda..."
                            className="w-full bg-black/40 border border-white/10 rounded-lg p-2 text-xs text-white"
                          />
                          <button onClick={handleFinishExam} className="w-full py-1.5 bg-emerald-500 text-black text-xs font-bold rounded-lg uppercase">
                            SELESAI & KOREKSI
                          </button>
                        </div>
                      ) : (
                        <div className="flex justify-between items-center">
                          <span>{schoolExamScore !== null ? `Nilai Terakhir: ${schoolExamScore}/100` : "Belum Memulai Ujian"}</span>
                          <button onClick={handleStartExam} className="px-4 py-2 bg-teal-500 text-black font-bold text-xs rounded-lg uppercase">
                            MULAI CBT SIM
                          </button>
                        </div>
                      )}
                    </div>

                    <div className="bg-white/5 border border-white/5 p-4.5 rounded-xl">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono mb-2">Hub Pembelajaran AI Tutor</h4>
                      <p className="text-xs text-white/60 mb-3">Tanyakan apa saja langsung mengenai rumus matematika, fisika, sejarah daerah kepada asisten AI Sekolah.</p>
                      <button 
                        onClick={() => handleSendChat("Tolong jelaskan materi matematika kalkulus atau beri soal latihan")}
                        className="w-full py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-[10px] font-bold text-white/80 rounded-lg uppercase tracking-wider flex items-center justify-center gap-1.5"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                        HUBUNGKAN AI TUTOR
                      </button>
                    </div>
                  </div>
                )}

                {/* 4. Creative Pay */}
                {activeModule.id === "pay" && (
                   <WalletPage />
                )}

                {/* 5. Creative Rescue */}
                {activeModule.id === "rescue" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-rose-950/20 border border-rose-500/20 p-5 rounded-2xl flex flex-col justify-between relative overflow-hidden">
                      <div className="absolute -top-16 -right-16 w-32 h-32 bg-rose-500/10 blur-[40px] rounded-full"></div>
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400 font-mono mb-1">DARURAT: Panic Button</h4>
                        <p className="text-[11px] text-rose-300/80 mb-4">Membagikan lokasi satelit GPS secara langsung ke pusat bantuan dalam 3 detik.</p>
                      </div>
                      <button 
                        onClick={triggerEmergency}
                        className="w-full py-3 bg-rose-600 hover:bg-rose-500 text-white font-extrabold text-xs uppercase tracking-widest rounded-xl transition shadow-lg shadow-rose-950/50"
                      >
                        TEKAN PANIC BUTTON 🚨
                      </button>
                    </div>

                    <div className="bg-white/5 border border-white/5 p-4.5 rounded-xl flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono mb-2">Kirim Armada Darurat</h4>
                        <p className="text-[10.5px] text-white/50 mb-3">Simulasikan peluncuran armada penyelamat terdekat:</p>
                        <div className="grid grid-cols-3 gap-2">
                          <button onClick={() => dispatchRescue("Ambulans")} className="py-2 bg-black/40 hover:bg-white/10 border border-white/10 rounded-lg text-[10px] text-white/80 transition uppercase">
                            Ambulans
                          </button>
                          <button onClick={() => dispatchRescue("Pemadam Kebakaran")} className="py-2 bg-black/40 hover:bg-white/10 border border-white/10 rounded-lg text-[10px] text-white/80 transition uppercase">
                            Damkar
                          </button>
                          <button onClick={() => dispatchRescue("Tim SAR")} className="py-2 bg-black/40 hover:bg-white/10 border border-white/10 rounded-lg text-[10px] text-white/80 transition uppercase">
                            SAR
                          </button>
                        </div>
                      </div>
                      <div className="bg-black/30 p-2.5 rounded-lg border border-white/5 mt-3 text-xs flex justify-between items-center">
                        <span className="font-mono text-[10px] uppercase">Status Rescue:</span>
                        <span className={`text-[10px] font-mono font-bold ${rescueStatus === "Siaga" ? "text-teal-400" : "text-amber-400 animate-pulse"}`}>
                          {rescueStatus} {dispatchedUnit && `(${dispatchedUnit})`}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 6. Creative Mart */}
                {activeModule.id === "mart" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/5 border border-white/5 p-4.5 rounded-xl">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono mb-2">POS Kasir UMKM Terintegrasi</h4>
                      <div className="space-y-2">
                        {posProducts.map((p, idx) => (
                          <div key={idx} className="flex justify-between items-center text-xs bg-black/30 p-2 rounded-lg border border-white/5">
                            <div>
                              <p className="font-semibold text-white">{p.name}</p>
                              <p className="text-[9px] text-white/40">Rp {p.price.toLocaleString()} • Stok: {p.stock}</p>
                            </div>
                            <button 
                              onClick={() => addToCart(p)}
                              className="px-2 py-1 bg-teal-500/20 hover:bg-teal-500 text-teal-300 hover:text-black rounded text-[10px] font-bold"
                            >
                              + TAMBAH
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white/5 border border-white/5 p-4.5 rounded-xl flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono">Keranjang POS Belanja</h4>
                          <button onClick={clearCart} className="text-[10px] text-white/40 hover:text-white">RESET</button>
                        </div>
                        <div className="space-y-1.5 max-h-[100px] overflow-y-auto mb-3">
                          {posCart.map((item, idx) => (
                            <div key={idx} className="flex justify-between items-center text-xs bg-black/20 p-1.5 px-2.5 rounded border border-white/5">
                              <span>{item.name} (x{item.qty})</span>
                              <span>Rp {(item.price * item.qty).toLocaleString()}</span>
                            </div>
                          ))}
                          {posCart.length === 0 && (
                            <p className="text-[10px] text-white/30 text-center py-4">Keranjang kosong</p>
                          )}
                        </div>
                      </div>
                      <div className="border-t border-white/5 pt-3">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs text-white/40">TOTAL TRANSAKSI</span>
                          <span className="text-sm font-mono font-bold text-white">
                            Rp {posCart.reduce((sum, item) => sum + (item.price * item.qty), 0).toLocaleString()}
                          </span>
                        </div>
                        <button 
                          onClick={handleCheckoutPOS}
                          disabled={posCart.length === 0}
                          className="w-full py-2 bg-teal-500 text-black font-bold text-xs uppercase tracking-wider rounded-lg disabled:opacity-50"
                        >
                          PROSES BAYAR & CETAK STRUK
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* 7. Creative Ride */}
                {activeModule.id === "ride" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/5 border border-white/5 p-4.5 rounded-xl flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono mb-2">Pemesanan Ojek Online & Kurir</h4>
                        <div className="flex gap-2 mb-4">
                          {["bike", "car", "food"].map(type => (
                            <button
                              key={type}
                              onClick={() => setRideType(type as any)}
                              className={`flex-1 py-1.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                                rideType === type ? "bg-teal-500/25 text-teal-300 border border-teal-500/30" : "bg-black/30 border border-white/5 text-white/60"
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>
                      <button 
                        onClick={startRideSim}
                        disabled={rideStep !== "idle"}
                        className="w-full py-2.5 bg-teal-500 text-black font-extrabold text-xs uppercase tracking-widest rounded-lg transition disabled:opacity-40"
                      >
                        {rideStep === "idle" ? `PESAN ${rideType.toUpperCase()} SEKARANG` : "PESANAN SEDANG DIPROSES"}
                      </button>
                    </div>

                    <div className="bg-white/5 border border-white/5 p-4.5 rounded-xl flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono mb-2">Pelacakan Live GPS Driver</h4>
                        <div className="bg-black/40 h-28 rounded-lg border border-white/5 relative overflow-hidden flex items-center justify-center">
                          {/* Simulated map layout */}
                          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#2dd4bf_1px,transparent_1px)] [background-size:16px_16px]"></div>
                          <div className="absolute w-2 h-2 bg-teal-400 rounded-full animate-ping" style={{ left: "30%", top: "40%" }}></div>
                          <div className="absolute w-2 h-2 bg-rose-400 rounded-full" style={{ left: "70%", top: "50%" }}></div>

                          {/* Live simulated moving driver icon */}
                          {rideStep === "onway" && (
                            <div 
                              className="absolute bg-teal-500 text-black p-1 rounded-full text-[10px] font-mono shadow-lg transition-all duration-500"
                              style={{ left: `${30 + (rideProgress * 0.4)}%`, top: `${40 + (rideProgress * 0.1)}%` }}
                            >
                              🏍️
                            </div>
                          )}

                          <span className="text-[10px] font-mono text-white/50 z-10 uppercase tracking-widest">
                            {rideStep === "idle" && "Menunggu Pesanan..."}
                            {rideStep === "booking" && "Mencari Driver Terdekat..."}
                            {rideStep === "onway" && `Driver Sedang Di Jalan (${rideProgress}%)`}
                            {rideStep === "arrived" && "✓ Driver Tiba di Lokasi Anda!"}
                          </span>
                        </div>
                      </div>
                      <div className="w-full bg-black/45 h-1.5 rounded-full overflow-hidden mt-3">
                        <div className="bg-teal-400 h-full transition-all duration-300" style={{ width: `${rideProgress}%` }}></div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 8. Creative Agriculture */}
                {activeModule.id === "agriculture" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/5 border border-white/5 p-4.5 rounded-xl">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono mb-2">Drone Mapping & Analisis Hara Lahan</h4>
                      <p className="text-[11px] text-white/60 mb-3">Simulasikan penerbangan drone aeromodelling di lahan pertanian Anda untuk menganalisis kandungan unsur hara tanah harian:</p>
                      <div className="bg-black/35 p-3 rounded-lg border border-white/5 mb-3">
                        <p className="text-[9px] text-white/40">KONDISI TANAH:</p>
                        <p className="text-xs font-mono text-teal-300 mt-0.5">{currentSoilQuality}</p>
                      </div>
                      <button 
                        onClick={runDroneMapping}
                        disabled={droneScanned && currentSoilQuality.includes("hara")}
                        className="w-full py-2 bg-teal-500 text-black font-bold text-xs uppercase tracking-wider rounded-lg"
                      >
                        TERBANGKAN DRONE MAPPING 🛸
                      </button>
                    </div>

                    <div className="bg-white/5 border border-white/5 p-4.5 rounded-xl flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono mb-2">Deteksi Hama AI & Kalender Tanam</h4>
                        <div className="space-y-2 text-xs">
                          <div className="flex justify-between items-center border-b border-white/5 pb-2">
                            <span>Estimasi Cuaca Pertanian:</span>
                            <span className="text-teal-400">Cerah Berawan (Ideal)</span>
                          </div>
                          <div className="flex justify-between items-center border-b border-white/5 pb-2">
                            <span>Saran Kalender Tanam:</span>
                            <span className="text-teal-400">Fase Vegetatif Padi</span>
                          </div>
                          <div className="flex justify-between items-center pb-1">
                            <span>Pestisida Rekomendasi:</span>
                            <span>Organik Cair Neem</span>
                          </div>
                        </div>
                      </div>
                      <button 
                        onClick={() => handleSendChat("Tolong rekomendasikan jenis pupuk dan penanganan hama wereng coklat")}
                        className="w-full py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-[10px] font-bold text-white/85 rounded-lg uppercase tracking-wider flex items-center justify-center gap-1.5"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                        TANYA AI HAMA TANAMAN
                      </button>
                    </div>
                  </div>
                )}

                {/* 9. Creative Pesantren */}
                {activeModule.id === "pesantren" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/5 border border-white/5 p-4.5 rounded-xl">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono mb-2">Simulasi AI Tahfidz - Koreksi Setoran</h4>
                      <p className="text-[11px] text-white/60 mb-3">Santri dapat mensimulasikan penyetoran hafalan Al-Qur'an secara suara. AI akan menilai pelafalan dan tajwid secara real-time:</p>
                      
                      {tahfidzFeedback && (
                        <div className="bg-black/40 p-3 rounded-lg border border-teal-500/20 mb-3 text-xs text-white/95 leading-relaxed">
                          {tahfidzFeedback}
                        </div>
                      )}

                      <button 
                        onClick={startTahfidzRec}
                        disabled={isRecordingTahfidz}
                        className={`w-full py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition flex items-center justify-center gap-2 ${
                          isRecordingTahfidz 
                            ? "bg-rose-600 animate-pulse text-white" 
                            : "bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 border border-teal-500/40"
                        }`}
                      >
                        <Mic className="w-4 h-4" />
                        {isRecordingTahfidz ? "MENDENGARKAN SETORAN & ANALISIS..." : "SIMULASI RECORD SUARA SANTRI"}
                      </button>
                    </div>

                    <div className="bg-white/5 border border-white/5 p-4.5 rounded-xl flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono mb-2">Status Wali Santri & Asrama</h4>
                        <div className="space-y-2 text-xs">
                          <div className="flex justify-between items-center border-b border-white/5 pb-2">
                            <span>Nama Santri:</span>
                            <span className="font-semibold text-white">M. Fatih Rabbani</span>
                          </div>
                          <div className="flex justify-between items-center border-b border-white/5 pb-2">
                            <span>Status Asrama:</span>
                            <span className="text-emerald-400">Kamar Umar bin Khattab (Hadir)</span>
                          </div>
                          <div className="flex justify-between items-center pb-1">
                            <span>Hafalan Kumulatif:</span>
                            <span className="text-teal-400 font-mono">14 Juz</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-[10px] text-white/40 border-t border-white/5 pt-2 mt-3 text-center">
                        Wali santri dapat melihat grafik absensi & histori tagihan syahriah.
                      </div>
                    </div>
                  </div>
                )}

                {/* 10. Creative Tracker */}
                {activeModule.id === "tracker" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/5 border border-white/5 p-4.5 rounded-xl">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono mb-2">Live GPS Tracking & Geofencing</h4>
                      <div className="bg-black/50 h-36 rounded-lg border border-white/10 relative overflow-hidden flex items-center justify-center">
                        {/* Dynamic coordinate simulation */}
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#14b8a6_1.5px,transparent_1.5px)] [background-size:20px_20px]"></div>
                        
                        {/* Circle of safe geofence */}
                        {geofenceActive && (
                          <div className="absolute w-24 h-24 border-2 border-dashed border-teal-500/30 rounded-full animate-pulse flex items-center justify-center bg-teal-500/5">
                            <span className="text-[8px] text-teal-400/50 font-mono uppercase tracking-widest">GEOFENCE AMAN</span>
                          </div>
                        )}

                        <div 
                          className="absolute bg-teal-400 text-black px-2 py-0.5 rounded-md text-[9px] font-bold font-mono shadow-md flex items-center gap-1 transition-all duration-1000"
                          style={{ left: `${trackerMapPin.x}%`, top: `${trackerMapPin.y}%` }}
                        >
                          <MapPin className="w-2.5 h-2.5" />
                          <span>MOTOR_KU</span>
                        </div>
                        <span className="absolute bottom-2 left-2 text-[8px] font-mono text-white/40 uppercase">GPS LIVE UPDATING</span>
                      </div>
                    </div>

                    <div className="bg-white/5 border border-white/5 p-4.5 rounded-xl flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono mb-2">Pengaturan Alarm & Keamanan</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-xs">Aktifkan Geofence (Radius 500m)</span>
                            <button 
                              onClick={() => {
                                setGeofenceActive(!geofenceActive);
                                addAuditLog(`Tracker: Geofence turned ${!geofenceActive ? "ON" : "OFF"}`);
                              }}
                              className={`px-3 py-1 rounded text-[10px] font-mono font-bold uppercase ${geofenceActive ? "bg-teal-500/20 text-teal-300 border border-teal-500/30" : "bg-black text-white/40 border border-white/10"}`}
                            >
                              {geofenceActive ? "AKTIF" : "NONAKTIF"}
                            </button>
                          </div>
                          <button 
                            onClick={() => {
                              addAuditLog("Tracker: Triggered Remote Cutoff", "SUCCESS");
                              alert("Sinyal Remote Engine Cutoff terkirim! Mesin motor dimatikan paksa demi keamanan.");
                            }}
                            className="w-full py-2 bg-rose-600/20 hover:bg-rose-600 border border-rose-500/30 text-rose-300 hover:text-white rounded-lg text-xs font-bold uppercase tracking-wider transition"
                          >
                            MATIKAN MESIN KENDARAAN (SOS CUTOFF)
                          </button>
                        </div>
                      </div>
                      <div className="text-[10px] text-white/30 text-center mt-4">
                        Histori perjalanan 30 hari tersimpan dengan enkripsi data terpusat.
                      </div>
                    </div>
                  </div>
                )}

                {/* 11. Creative Foundation */}
                {activeModule.id === "foundation" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/5 border border-white/5 p-4.5 rounded-xl">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono mb-2">Portal Donasi Yayasan Transparan</h4>
                      <form onSubmit={handleDonate} className="space-y-3">
                        <div>
                          <label className="text-[10px] uppercase text-white/40 block mb-1">Pilih Program Sosial</label>
                          <select 
                            value={donationProgram} 
                            onChange={(e) => setDonationProgram(e.target.value)}
                            className="w-full bg-black/40 border border-white/10 rounded-lg p-1.5 text-xs text-white"
                          >
                            <option value="Sponsorship Anak Yatim">Sponsorship Anak Yatim & Dhuafa</option>
                            <option value="Pembangunan Masjid Al-Ikhlas">Pembangunan Masjid Al-Ikhlas Karangsari</option>
                            <option value="Beasiswa Santri Berprestasi">Beasiswa Santri Penghafal Qur'an</option>
                            <option value="Maulid Nabi 1448 H">Open Donasi Maulid Nabi 1448 H</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-[10px] uppercase text-white/40 block mb-1">Jumlah Donasi (Rp)</label>
                          <input
                            type="number"
                            value={donationAmount}
                            onChange={(e) => setDonationAmount(e.target.value)}
                            placeholder="Contoh: 50000"
                            className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white"
                          />
                        </div>
                        <button type="submit" className="w-full py-2 bg-teal-500 text-black font-bold text-xs uppercase tracking-widest rounded-lg transition hover:bg-teal-400 cursor-pointer">
                          KIRIM DONASI SEKARANG
                        </button>
                      </form>
                    </div>

                    <div className="bg-white/5 border border-white/5 p-4.5 rounded-xl flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono mb-2">Aktivitas & Transparansi Kas</h4>
                        <div className="space-y-2 max-h-[110px] overflow-y-auto mb-2">
                          {recentDonations.map((don, idx) => (
                            <div key={idx} className="flex justify-between items-center text-xs bg-black/20 p-2 rounded-lg border border-white/5">
                              <div className="text-left">
                                <p className="font-semibold text-white/95">{don.program}</p>
                                <p className="text-[9px] text-white/40">{don.time}</p>
                              </div>
                              <span className="font-mono text-emerald-400 font-semibold">+Rp {don.amount.toLocaleString()}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="text-[10px] text-white/40 border-t border-white/5 pt-2 flex justify-between items-center">
                        <span>Laporan Keuangan Audit: <strong>WTP (Wajar Tanpa Pengecualian)</strong></span>
                        <a href="#download" className="text-teal-400 hover:underline">Unduh PDF</a>
                      </div>
                    </div>
                  </div>
                )}

                {/* 12. Creative Care */}
                {activeModule.id === "care" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/5 border border-white/5 p-4.5 rounded-xl">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono mb-2">Cek Status BPJS & Rekam Medis</h4>
                      <form onSubmit={handleCheckBpjs} className="space-y-3">
                        <p className="text-[10.5px] text-white/50">Masukkan nomor kartu BPJS Kesehatan Anda untuk melacak status rujukan aktif:</p>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={bpjsNumber}
                            onChange={(e) => setBpjsNumber(e.target.value)}
                            placeholder="Contoh: 000123456789"
                            className="flex-1 bg-black/40 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white"
                          />
                          <button type="submit" className="px-4 py-1.5 bg-white/10 hover:bg-white/15 rounded-lg text-xs font-bold font-mono cursor-pointer">
                            CEK KARTU
                          </button>
                        </div>
                        {bpjsStatus && (
                          <div className="bg-black/30 p-2.5 rounded-lg border border-teal-500/15 text-[11px] text-teal-300 font-mono leading-relaxed">
                            {bpjsStatus}
                          </div>
                        )}
                      </form>
                    </div>

                    <div className="bg-white/5 border border-white/5 p-4.5 rounded-xl flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono mb-2">Konsultasi Medis Online (Telemedicine)</h4>
                        <p className="text-xs text-white/70 mb-3">Jadwalkan konsultasi video atau chat langsung dengan tim dokter siaga pedesaan:</p>
                        <select 
                          value={careDoctor} 
                          onChange={(e) => setCareDoctor(e.target.value)}
                          className="w-full bg-black/40 border border-white/10 rounded-lg p-1.5 text-xs text-white mb-3"
                        >
                          <option value="dr. Andi (Spesialis Umum)">dr. Andi (Spesialis Umum) - Online</option>
                          <option value="dr. Siti (Spesialis Anak)">dr. Siti (Spesialis Anak) - Sibuk</option>
                          <option value="dr. Budi (Spesialis Dalam)">dr. Budi (Spesialis Dalam) - Online</option>
                        </select>
                        <button 
                          onClick={handleBookDoctor} 
                          className="w-full py-2 bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 font-bold text-xs uppercase tracking-wider rounded-lg transition cursor-pointer"
                        >
                          PANGGIL & HUBUNGKAN DOKTER
                        </button>
                      </div>
                      <div className="text-[10px] text-white/40 border-t border-white/5 pt-2 mt-2">
                        Puskesmas Pembantu Karangsari Terbuka 24 Jam Nonstop.
                      </div>
                    </div>
                  </div>
                )}

                {/* 13. Creative Tourism */}
                {activeModule.id === "tourism" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/5 border border-white/5 p-4.5 rounded-xl">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono mb-2">Pemesanan Tiket Wisata & Homestay</h4>
                      <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="text-[9px] uppercase text-white/40 block mb-1">Destinasi Wisata</label>
                            <select 
                              value={tourismSpot} 
                              onChange={(e) => setTourismSpot(e.target.value)}
                              className="w-full bg-black/40 border border-white/10 rounded-lg p-1.5 text-xs text-white"
                            >
                              <option value="Candi Karangsari">Candi Karangsari (Rp 15k)</option>
                              <option value="Curug Intan">Curug Intan (Rp 10k)</option>
                              <option value="Pemandian Air Barokah">Pemandian Air Barokah (Rp 5k)</option>
                            </select>
                          </div>
                          <div>
                            <label className="text-[9px] uppercase text-white/40 block mb-1">Jumlah Tiket</label>
                            <input
                              type="number"
                              min="1"
                              max="10"
                              value={tourismQty}
                              onChange={(e) => setTourismQty(parseInt(e.target.value) || 1)}
                              className="w-full bg-black/40 border border-white/10 rounded-lg p-1 text-xs text-white"
                            />
                          </div>
                        </div>
                        <button 
                          onClick={handleBookTicket} 
                          className="w-full py-2 bg-teal-500 text-black font-bold text-xs uppercase tracking-wider rounded-lg transition hover:bg-teal-400 cursor-pointer"
                        >
                          BELI TIKET ONLINE
                        </button>
                        {tourismTicket && (
                          <div className="bg-black/40 p-2 rounded border border-emerald-500/20 text-[10px] font-mono text-emerald-400 flex justify-between items-center">
                            <div>
                              <p className="font-bold">E-TIKET: {tourismTicket.code}</p>
                              <p>{tourismTicket.spot} (x{tourismTicket.qty})</p>
                            </div>
                            <span className="text-[14px]">🎫</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="bg-white/5 border border-white/5 p-4.5 rounded-xl flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono mb-2">Digital Audio Tour Guide (AI Guide)</h4>
                        <p className="text-xs text-white/60 mb-4">Dengarkan sejarah, mitos, dan ulasan arsitektur Candi Karangsari langsung lewat audio pemandu digital:</p>
                        
                        <div className="bg-black/35 p-3 rounded-lg border border-white/5 mb-3 flex items-center gap-3">
                          <button 
                            onClick={toggleAudioGuide}
                            className="w-10 h-10 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 hover:bg-teal-500 hover:text-black transition cursor-pointer"
                          >
                            {audioPlaying ? <span className="text-xs">⏸</span> : <Play className="w-4 h-4" />}
                          </button>
                          <div className="flex-1">
                            <p className="text-[10px] uppercase font-mono text-white/50">Audio Guide - Bagian I</p>
                            <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden mt-1.5">
                              <div className="bg-teal-400 h-full transition-all duration-300" style={{ width: `${audioProgress}%` }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-[10px] text-white/30 text-center">
                        Tersedia audio guide dalam Bahasa Jawa, Indonesia, Inggris, dan Sunda.
                      </div>
                    </div>
                  </div>
                )}

                {/* 14. Creative Marine */}
                {activeModule.id === "marine" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/5 border border-white/5 p-4.5 rounded-xl">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono mb-2">Lacak Posisi Kapal & Cuaca Nelayan</h4>
                      <div className="space-y-3">
                        <div>
                          <label className="text-[9px] uppercase text-white/40 block mb-1">Pilih Kapal Terdaftar</label>
                          <select 
                            value={selectedVessel} 
                            onChange={(e) => setSelectedVessel(e.target.value)}
                            className="w-full bg-black/40 border border-white/10 rounded-lg p-1.5 text-xs text-white"
                          >
                            <option value="KM Berkah Laut">KM Berkah Laut (Koordinat: -8.21, 110.45)</option>
                            <option value="KM Sinar Jaya">KM Sinar Jaya (Koordinat: -8.34, 110.60)</option>
                            <option value="KM Bahari Abadi">KM Bahari Abadi (Koordinat: -8.11, 110.33)</option>
                          </select>
                        </div>
                        <div className="bg-black/35 p-3 rounded-lg border border-white/5 flex justify-between text-xs font-mono">
                          <div>
                            <p className="text-[9px] text-white/40">PRAKIRAAN OMBAK SELATAN:</p>
                            <p className="text-amber-400 font-semibold">{marineWaveHeight}</p>
                          </div>
                          <button 
                            onClick={() => {
                              setMarineWaveHeight("2.5 meter (Gelombang Tinggi - Harap Waspada)");
                              addAuditLog("Marine: Refreshed wave height sensor data");
                            }}
                            className="text-[9px] bg-white/5 px-2 rounded hover:bg-white/10 cursor-pointer"
                          >
                            REFRESH
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/5 border border-white/5 p-4.5 rounded-xl flex flex-col justify-between relative overflow-hidden">
                      {marineSosSent && (
                        <div className="absolute inset-0 bg-rose-950/95 z-20 flex flex-col items-center justify-center text-center p-4 animate-in fade-in duration-250">
                          <span className="text-3xl animate-ping mb-3">🚨</span>
                          <h4 className="font-bold text-rose-200">SOS AKTIF - SATELLITE BROADCAST</h4>
                          <p className="text-xs text-rose-300 mt-1">Mengirimkan sinyal marabahaya GPS ke Kantor SAR terdekat...</p>
                        </div>
                      )}
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400 font-mono mb-1">SOS Laut - Marine Panic Button</h4>
                        <p className="text-xs text-white/60 mb-4">Khusus nelayan yang menghadapi bahaya badai, kerusakan mesin, atau mati navigasi di tengah laut:</p>
                        <button 
                          onClick={triggerMarineSos} 
                          className="w-full py-3 bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition shadow-md shadow-rose-950/20 cursor-pointer"
                        >
                          KIRIM SOS MARITIM ⚓
                        </button>
                      </div>
                      <div className="text-[10px] text-white/30 text-center mt-3">
                        Terintegrasi GPS AIS (Automatic Identification System).
                      </div>
                    </div>
                  </div>
                )}

                {/* 15. Creative Livestock */}
                {activeModule.id === "livestock" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/5 border border-white/5 p-4.5 rounded-xl">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono mb-2">Pencatatan Kesehatan Hewan Ternak</h4>
                      <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="text-[9px] uppercase text-white/40 block mb-1">Pilih Hewan Ternak</label>
                            <select 
                              value={livestockId} 
                              onChange={(e) => setLivestockId(e.target.value)}
                              className="w-full bg-black/40 border border-white/10 rounded-lg p-1.5 text-xs text-white"
                            >
                              <option value="Sapi Limousin #S-209">Sapi Limousin #S-209</option>
                              <option value="Kambing Etawa #K-81">Kambing Etawa #K-81</option>
                              <option value="Kerbau Jawa #KB-04">Kerbau Jawa #KB-04</option>
                            </select>
                          </div>
                          <div>
                            <label className="text-[9px] uppercase text-white/40 block mb-1">Jenis Aktivitas</label>
                            <select 
                              value={livestockAction} 
                              onChange={(e) => setLivestockAction(e.target.value)}
                              className="w-full bg-black/40 border border-white/10 rounded-lg p-1.5 text-xs text-white"
                            >
                              <option value="Log Pakan Sore">Log Pakan Sore</option>
                              <option value="Suhu Tubuh Normal (38.5C)">Suhu Tubuh Normal (38.5C)</option>
                              <option value="Pemberian Vitamin B">Pemberian Vitamin B</option>
                              <option value="Cek Kartu Vaksin PMK">Cek Kartu Vaksin PMK</option>
                            </select>
                          </div>
                        </div>
                        <button 
                          onClick={handleAddLivestockLog} 
                          className="w-full py-2 bg-teal-500 text-black font-bold text-xs uppercase tracking-wider rounded-lg transition hover:bg-teal-400 cursor-pointer"
                        >
                          SIMPAN CATATAN KESEHATAN
                        </button>
                      </div>
                    </div>

                    <div className="bg-white/5 border border-white/5 p-4.5 rounded-xl flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono mb-2">Riwayat Log Ternak & Qurban</h4>
                        <div className="space-y-2 max-h-[100px] overflow-y-auto mb-2">
                          {livestockLogs.map((log, idx) => (
                            <div key={idx} className="flex justify-between items-center text-[11px] bg-black/20 p-2 rounded border border-white/5">
                              <div className="text-left">
                                <p className="font-semibold text-white/95">{log.animal}</p>
                                <p className="text-[9px] text-white/40">{log.action}</p>
                              </div>
                              <span className="text-[9px] text-teal-400 font-mono font-bold uppercase">{log.time}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="text-[10px] text-white/40 border-t border-white/5 pt-2 flex justify-between items-center">
                        <span>Pendaftaran Qurban Digital 1447H:</span>
                        <span className="text-emerald-400 font-bold uppercase">TERBUKA</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Creative Studio */}
                {activeModule.id === "studio" && (
                   <StudioPage />
                   )}
                   
                {/* 16. Creative AI */}
                {activeModule.id === "ai" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/5 border border-white/5 p-4.5 rounded-xl">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono mb-2">Sandbox AI Playground</h4>
                      <div className="space-y-3">
                        <div>
                          <label className="text-[9px] uppercase text-white/40 block mb-1">Pilih Engine AI</label>
                          <select 
                            value={aiTool} 
                            onChange={(e) => setAiTool(e.target.value)}
                            className="w-full bg-black/40 border border-white/10 rounded-lg p-1.5 text-xs text-white"
                          >
                            <option value="translator">AI Translator (Bahasa Sunda Alus)</option>
                            <option value="vision">AI Vision (Pest & Crop Detector)</option>
                            <option value="sentiment">AI Sentiment (Opini Kas Keuangan Desa)</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-[9px] uppercase text-white/40 block mb-1">Input Teks / Perintah</label>
                          <textarea
                            value={aiInputText}
                            onChange={(e) => setAiInputText(e.target.value)}
                            rows={2}
                            placeholder={aiTool === "translator" ? "Ketik kalimat yang ingin diterjemahkan..." : "Ketik deskripsi gambar hama atau paragraf laporan keuangan..."}
                            className="w-full bg-black/40 border border-white/10 rounded-lg px-2.5 py-1 text-xs text-white focus:outline-hidden focus:border-teal-500"
                          />
                        </div>
                        <button 
                          onClick={handleRunAiTool} 
                          disabled={aiProcessing}
                          className="w-full py-2 bg-gradient-to-r from-[#0c469b] to-[#041d4c] text-white border border-blue-500/20 font-bold text-xs uppercase tracking-widest rounded-lg transition hover:brightness-110 flex items-center justify-center gap-2 cursor-pointer"
                        >
                          {aiProcessing ? (
                            <>
                              <RefreshCw className="w-3.5 h-3.5 animate-spin text-amber-400" />
                              MEMPROSES DATA...
                            </>
                          ) : (
                            <>
                              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                              JALANKAN ENGINE AI
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="bg-white/5 border border-white/5 p-4.5 rounded-xl flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 font-mono mb-2">Output AI Smart Node</h4>
                        <div className="bg-black/45 p-3 rounded-lg border border-white/10 min-h-[110px] flex items-center justify-center">
                          {aiOutputResult ? (
                            <pre className="text-[10px] text-teal-300 font-mono whitespace-pre-wrap text-left w-full leading-relaxed">{aiOutputResult}</pre>
                          ) : (
                            <p className="text-[10px] text-white/40 text-center font-mono">
                              {aiProcessing ? "Kecerdasan Buatan sedang mengomparasikan data..." : "Hasil analisis AI akan muncul di sini..."}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="text-[10px] text-white/30 text-center mt-2 font-mono">
                        Ditenagai oleh Gemini AI Super-Core Engine.
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>,
            document.getElementById("phone-active-module-portal") || document.body
          )}
      
    </div>
  );
}
