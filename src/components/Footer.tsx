import React from 'react';
import { BangBinLogo } from './BangBinLogo';
import { PageId } from './Navbar';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Globe,
  ArrowUpRight,
  HeartHandshake,
  Recycle
} from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const handleNav = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-block bg-white p-2.5 rounded-2xl shadow-sm">
              <BangBinLogo size="md" variant="full" />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Komunitas penggerak kepedulian lingkungan dan solusi terpadu rantai pasok daur ulang sampah plastik di Indonesia. Menghubungkan pemilahan sumber, bank sampah, dan industri daur ulang.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#00635c]/30 text-emerald-300 border border-emerald-500/30">
                <Recycle className="w-3.5 h-3.5 text-emerald-400" />
                Circular Economy
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#f15a24]/20 text-orange-300 border border-orange-500/30">
                <HeartHandshake className="w-3.5 h-3.5 text-orange-400" />
                Pemberdayaan Mitra
              </span>
            </div>

            {/* Social media icons */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href="#social"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-[#00635c] text-slate-400 hover:text-white flex items-center justify-center transition-colors border border-slate-700"
                aria-label="Instagram Bang Bin"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#social"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-[#00635c] text-slate-400 hover:text-white flex items-center justify-center transition-colors border border-slate-700"
                aria-label="LinkedIn Bang Bin"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#social"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-[#00635c] text-slate-400 hover:text-white flex items-center justify-center transition-colors border border-slate-700"
                aria-label="YouTube Bang Bin"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#social"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-[#00635c] text-slate-400 hover:text-white flex items-center justify-center transition-colors border border-slate-700"
                aria-label="Situs Bang Bin"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Halaman Profil</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('beranda')}
                  className="text-slate-400 hover:text-[#f15a24] transition-colors flex items-center gap-1.5"
                >
                  <ArrowUpRight className="w-3 h-3 text-slate-600" />
                  <span>Beranda</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('tentang')}
                  className="text-slate-400 hover:text-[#f15a24] transition-colors flex items-center gap-1.5"
                >
                  <ArrowUpRight className="w-3 h-3 text-slate-600" />
                  <span>Tentang Kami</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('kegiatan')}
                  className="text-slate-400 hover:text-[#f15a24] transition-colors flex items-center gap-1.5"
                >
                  <ArrowUpRight className="w-3 h-3 text-slate-600" />
                  <span>Kegiatan Komunitas</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('edukasi')}
                  className="text-slate-400 hover:text-[#f15a24] transition-colors flex items-center gap-1.5"
                >
                  <ArrowUpRight className="w-3 h-3 text-slate-600" />
                  <span>Edukasi Lingkungan</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('kemitraan')}
                  className="text-slate-400 hover:text-[#f15a24] transition-colors flex items-center gap-1.5"
                >
                  <ArrowUpRight className="w-3 h-3 text-slate-600" />
                  <span>Program Kemitraan</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('kontak')}
                  className="text-slate-400 hover:text-[#f15a24] transition-colors flex items-center gap-1.5"
                >
                  <ArrowUpRight className="w-3 h-3 text-slate-600" />
                  <span>Hubungi Kami</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Program & Edukasi Highlights */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Fokus Program</h4>
            <div className="space-y-3 text-sm">
              <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
                <p className="font-semibold text-white text-xs">Pilah 7 Kategori Plastik</p>
                <p className="text-xs text-slate-400 mt-1">Edukasi pemilahan PET, HDPE, PP, hingga plastik bernilai rendah.</p>
              </div>
              <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
                <p className="font-semibold text-white text-xs">Kemitraan Bank Sampah</p>
                <p className="text-xs text-slate-400 mt-1">Kepastian penyerapan material plastik dengan standar industri.</p>
              </div>
              <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
                <p className="font-semibold text-white text-xs">Koneksi Pabrik Daur Ulang</p>
                <p className="text-xs text-slate-400 mt-1">Menjamin material terolah kembali menjadi produk bernilai tinggi.</p>
              </div>
            </div>
          </div>

          {/* Column 4: Kontak Placeholder */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Informasi Kontak</h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#f15a24] shrink-0 mt-0.5" />
                <span>
                  [Placeholder Alamat Kantor / Sekretariat Bang Bin] <br />
                  Kawasan Pengelolaan Lingkungan Terpadu, Indonesia
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00635c] text-emerald-400 shrink-0" />
                <span>[Placeholder Telepon / WhatsApp]: +62 812-XXXX-XXXX</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#00635c] text-emerald-400 shrink-0" />
                <span>[Placeholder Email]: info@bangbin.id</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                <span>Senin - Jumat: 08.30 - 17.00 WIB</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => handleNav('kontak')}
                className="w-full py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Buka Formulir Kontak</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {new Date().getFullYear()} Bang Bin — Plastic Recycling Solutions. Hak Cipta Dilindungi.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <span className="text-slate-400 font-medium">Prototype V1</span>
            <span>•</span>
            <span className="text-slate-500">Komunitas Pengelolaan Sampah Plastik</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
