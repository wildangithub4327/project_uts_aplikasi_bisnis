import React, { useState } from 'react';
import { BangBinLogo } from './BangBinLogo';
import { useAuth } from '../context/AuthContext';
import { 
  Menu, 
  X, 
  LogIn, 
  UserPlus, 
  LogOut, 
  ShieldCheck, 
  ChevronRight,
  Sparkles
} from 'lucide-react';

export type PageId = 
  | 'beranda' 
  | 'tentang' 
  | 'kegiatan' 
  | 'edukasi' 
  | 'kemitraan' 
  | 'kontak' 
  | 'login' 
  | 'register' 
  | 'portal';

interface NavbarProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const navItems: { id: PageId; label: string }[] = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'tentang', label: 'Tentang Kami' },
    { id: 'kegiatan', label: 'Kegiatan' },
    { id: 'edukasi', label: 'Edukasi Lingkungan' },
    { id: 'kemitraan', label: 'Program Kemitraan' },
    { id: 'kontak', label: 'Kontak' },
  ];

  const handleNavClick = (id: PageId) => {
    setCurrentPage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = async () => {
    try {
      await logout();
      setCurrentPage('beranda');
      setMobileMenuOpen(false);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      {/* Top micro banner */}
      <div className="bg-[#00635c] text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium text-[11px] sm:text-xs">
              Komunitas & Solusi Rantai Pasok Daur Ulang Sampah Plastik Indonesia
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-[11px] text-emerald-100">
            <span>Daur Ulang Bertanggung Jawab</span>
            <span>•</span>
            <span>Pemberdayaan Bank Sampah & Industri</span>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo brand */}
          <button
            onClick={() => handleNavClick('beranda')}
            className="flex items-center text-left focus:outline-none group cursor-pointer"
            aria-label="Kembali ke Beranda Bang Bin"
          >
            <BangBinLogo size="md" variant="full" />
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'text-[#00635c] bg-[#e6f4f2] shadow-xs'
                      : 'text-slate-600 hover:text-[#00635c] hover:bg-slate-100/70'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Auth Buttons (STRICTLY NO Akses WMS here) */}
          <div className="hidden lg:flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200/90 rounded-xl p-1.5 pl-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#00635c] text-white flex items-center justify-center font-bold text-xs uppercase shadow-xs">
                    {user.displayName ? user.displayName.charAt(0) : (user.email ? user.email.charAt(0) : 'U')}
                  </div>
                  <div className="text-left pr-2">
                    <p className="text-xs font-bold text-slate-800 truncate max-w-[120px]">
                      {user.displayName || user.email?.split('@')[0]}
                    </p>
                    <p className="text-[10px] text-emerald-700 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      Terautentikasi
                    </p>
                  </div>
                </div>

                {/* Button to go to the post-login dedicated portal */}
                <button
                  onClick={() => handleNavClick('portal')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                    currentPage === 'portal'
                      ? 'bg-[#00635c] text-white shadow-xs'
                      : 'bg-white text-[#00635c] border border-emerald-200 hover:bg-emerald-50'
                  }`}
                  title="Menuju Halaman Akun Anda"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Portal Akun</span>
                </button>

                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="px-2.5 py-1.5 rounded-lg text-xs font-semibold text-rose-600 hover:bg-rose-50 transition-colors flex items-center gap-1 cursor-pointer"
                  title="Keluar dari sesi"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span className="hidden xl:inline">Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleNavClick('login')}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                    currentPage === 'login'
                      ? 'bg-slate-100 text-[#00635c] font-bold'
                      : 'text-slate-700 hover:text-[#00635c] hover:bg-slate-50'
                  }`}
                >
                  <LogIn className="w-4 h-4 text-[#00635c]" />
                  <span>Masuk</span>
                </button>

                <button
                  onClick={() => handleNavClick('register')}
                  className="px-4 py-2 rounded-xl text-sm font-bold text-white bg-[#f15a24] hover:bg-[#d84b18] shadow-sm hover:shadow transition-all flex items-center gap-1.5 cursor-pointer transform hover:-translate-y-0.5"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Daftar Akun</span>
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            {user && (
              <button
                onClick={() => handleNavClick('portal')}
                className="p-2 rounded-lg bg-emerald-50 text-[#00635c] text-xs font-bold flex items-center gap-1"
                aria-label="Buka Portal Akun"
              >
                <ShieldCheck className="w-4 h-4" />
                <span className="hidden sm:inline">Portal</span>
              </button>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:text-[#00635c] hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Buka Menu Navigasi"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 animate-fadeIn shadow-xl">
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between ${
                    isActive
                      ? 'bg-[#e6f4f2] text-[#00635c] font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-100 space-y-2">
            {user ? (
              <div className="space-y-2 bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#00635c] text-white flex items-center justify-center font-bold text-sm">
                    {user.displayName ? user.displayName.charAt(0) : (user.email ? user.email.charAt(0) : 'U')}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">
                      {user.displayName || user.email?.split('@')[0]}
                    </p>
                    <p className="text-xs text-slate-500 truncate max-w-[200px]">
                      {user.email}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleNavClick('portal')}
                  className="w-full mt-2 py-2.5 px-4 rounded-xl bg-[#00635c] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Buka Halaman Khusus Setelah Login</span>
                </button>

                <button
                  onClick={handleLogout}
                  className="w-full py-2 px-4 rounded-xl text-rose-600 bg-rose-50 hover:bg-rose-100 font-semibold text-sm flex items-center justify-center gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Keluar (Logout)</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  onClick={() => handleNavClick('login')}
                  className="w-full py-2.5 px-4 rounded-xl border border-slate-300 text-slate-700 font-semibold text-sm flex items-center justify-center gap-1.5"
                >
                  <LogIn className="w-4 h-4 text-[#00635c]" />
                  <span>Masuk</span>
                </button>
                <button
                  onClick={() => handleNavClick('register')}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#f15a24] text-white font-bold text-sm flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Daftar</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
