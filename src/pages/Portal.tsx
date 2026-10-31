import React, { useEffect } from 'react';
import { PageId } from '../components/Navbar';
import { BangBinLogo } from '../components/BangBinLogo';
import { useAuth } from '../context/AuthContext';
import { 
  ExternalLink, 
  LogOut, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowLeft 
} from 'lucide-react';

interface PortalProps {
  setCurrentPage: (page: PageId) => void;
  setAuthNotice: (notice: string | null) => void;
}

export const Portal: React.FC<PortalProps> = ({ setCurrentPage, setAuthNotice }) => {
  const { user, loading, logout } = useAuth();

  // WMS External URL placeholder as requested in specification
  const WMS_EXTERNAL_URL = "https://url-wms-akan-diganti.com";

  // Enforce access control: only authenticated users can view this page
  useEffect(() => {
    if (!loading && !user) {
      setAuthNotice('Halaman ini khusus untuk pengguna terdaftar. Silakan masuk terlebih dahulu.');
      setCurrentPage('login');
    }
  }, [user, loading, setCurrentPage, setAuthNotice]);

  const handleLogout = async () => {
    try {
      await logout();
      setCurrentPage('beranda');
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  const handleAccessWMS = () => {
    // Open external WMS application
    window.open(WMS_EXTERNAL_URL, '_blank', 'noopener,noreferrer');
  };

  if (loading) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
        <div className="w-12 h-12 border-4 border-[#00635c] border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-slate-600 font-semibold text-sm">Memeriksa autentikasi Bang Bin...</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const userGreetingName = user.displayName || user.email?.split('@')[0] || 'Mitra Bang Bin';

  return (
    <div className="min-h-[calc(100vh-200px)] py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f0fdf9] via-white to-slate-50 flex items-center justify-center">
      <div className="w-full max-w-xl">
        
        {/* Main Card with strict minimal elements */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xl p-8 sm:p-12 text-center relative overflow-hidden">
          
          {/* Subtle top decoration */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#00635c] via-[#f15a24] to-[#00635c]"></div>

          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100">
              <BangBinLogo size="lg" variant="full" />
            </div>
          </div>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#00635c] text-xs font-bold mb-4">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Sesi Terautentikasi Berhasil</span>
          </div>

          {/* 1. Sapaan Sederhana */}
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
            Selamat datang di Bang Bin, <br />
            <span className="text-[#00635c]">{userGreetingName}</span>
          </h1>

          {/* 2. Informasi Singkat Berhasil Login */}
          <p className="text-sm text-slate-600 mb-8 max-w-md mx-auto leading-relaxed">
            Anda telah berhasil masuk ke sistem akun Bang Bin ({user.email}). Klik tombol utama di bawah ini untuk mengakses aplikasi Warehouse Management System (WMS) eksternal.
          </p>

          {/* 3. SATU TOMBOL UTAMA: "Akses WMS" */}
          <div className="space-y-4 max-w-md mx-auto">
            <button
              onClick={handleAccessWMS}
              className="w-full py-4 px-6 rounded-2xl bg-[#00635c] hover:bg-[#004d47] text-white font-extrabold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              title="Membuka Sistem WMS Eksternal"
            >
              <span>Akses WMS</span>
              <ExternalLink className="w-5 h-5" />
            </button>

            <p className="text-[11px] text-slate-400">
              Menghubungkan ke: <code className="text-slate-500 font-mono text-[10px]">{WMS_EXTERNAL_URL}</code>
            </p>
          </div>

          {/* Divider */}
          <div className="my-8 border-t border-slate-100 max-w-md mx-auto"></div>

          {/* 4. Tombol Logout & Navigasi Profil */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            {/* Tombol Logout */}
            <button
              onClick={handleLogout}
              className="w-full sm:w-auto flex-1 py-3 px-5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              <span>Keluar (Logout)</span>
            </button>

            {/* Kembali ke Website Company Profile */}
            <button
              onClick={() => setCurrentPage('beranda')}
              className="w-full sm:w-auto flex-1 py-3 px-5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Website</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
