import React from 'react';
import { PageId } from '../components/Navbar';
import { BangBinLogo } from '../components/BangBinLogo';
import { 
  Recycle, 
  Leaf, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  Building2, 
  TrendingUp, 
  Sparkles,
  CheckCircle2,
  Layers,
  ArrowUpRight,
  BookOpen,
  HelpCircle
} from 'lucide-react';

interface HomeProps {
  setCurrentPage: (page: PageId) => void;
}

export const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
  const logoSrc = "/assets/aistudio/IMG_20261017_123444_283.jpg_35be5faf.jpeg";

  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f0fdf9] via-white to-slate-50 pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-slate-100">
        {/* Decorative background blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-100/40 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-orange-100/50 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#00635c] text-xs font-bold tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-[#f15a24]" />
                <span>KOMUNITAS PEDULI LINGKUNGAN & RANTAI PASOK DAUR ULANG</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Solusi Terpadu <br />
                <span className="text-[#00635c]">Rantai Pasok Daur Ulang</span> <br />
                <span className="text-[#f15a24]">Sampah Plastik</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Bang Bin adalah komunitas dan inisiatif penggerak yang menghubungkan masyarakat pemilah, bank sampah, pengepul, serta industri daur ulang dalam satu ekosistem rantai pasok plastik yang transparan, adil, dan berkelanjutan.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-3 sm:gap-4">
                <button
                  onClick={() => setCurrentPage('kemitraan')}
                  className="px-6 py-3.5 rounded-xl bg-[#f15a24] hover:bg-[#d84b18] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
                >
                  <span>Program Kemitraan</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setCurrentPage('tentang')}
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#00635c] font-bold text-sm border-2 border-[#00635c] transition-all flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Tentang Bang Bin</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setCurrentPage('edukasi')}
                  className="px-5 py-3.5 rounded-xl bg-emerald-50/80 hover:bg-emerald-100 text-[#00635c] font-semibold text-sm transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <BookOpen className="w-4 h-4 text-emerald-600" />
                  <span>Panduan 7 Jenis Plastik</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4">
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-[#00635c]">100%</p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Fokus Daur Ulang Plastik</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-[#f15a24]">7 Tipe</p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Standar Pemilahan Polimer</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-slate-800">Kolaboratif</p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Mitra Hulu ke Hilir</p>
                </div>
              </div>
            </div>

            {/* Right Card / Logo Showcase */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Glow ring */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00635c]/20 to-[#f15a24]/20 rounded-3xl blur-2xl transform -rotate-3 scale-105"></div>
                
                {/* Card container */}
                <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100 flex flex-col items-center text-center">
                  <div className="w-44 h-44 sm:w-52 sm:h-52 bg-gradient-to-b from-emerald-50/60 to-orange-50/50 rounded-2xl p-4 flex items-center justify-center border border-slate-100 shadow-inner mb-6">
                    <img 
                      src={logoSrc} 
                      alt="Logo Utama Bang Bin" 
                      className="w-full h-full object-contain mix-blend-multiply"
                    />
                  </div>

                  <h3 className="text-xl font-black text-slate-900 tracking-tight">
                    Bang Bin — Plastic Recycling Solutions
                  </h3>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                    Identitas resmi penggerak rantai pasok plastik sirkular. Memastikan setiap botol dan plastik terkelola bertanggung jawab.
                  </p>

                  <div className="w-full mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-600">
                    <span className="flex items-center gap-1.5 text-[#00635c]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      Terkurasi Standar Industri
                    </span>
                    <span className="flex items-center gap-1.5 text-[#f15a24]">
                      <CheckCircle2 className="w-4 h-4 text-orange-500" />
                      Pemberdayaan Komunitas
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THREE PILLARS OF BANG BIN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#00635c] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Peran Utama Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Menghubungkan Setiap Titik Rantai Pasok Plastik
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Permasalahan sampah plastik bukan hanya pemilahan di awal, namun juga kepastian serapan material oleh industri daur ulang. Bang Bin hadir sebagai jembatan terpadu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1 */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-xs hover:shadow-md transition-all group flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#00635c] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">1. Edukasi & Pengumpulan Sumber</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Membangun kesadaran masyarakat, sekolah, perumahan, dan kantor untuk memilah plastik sesuai tipe sejak dari sumber. Menghindari kontaminasi sampah organik.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center text-xs font-bold text-[#00635c] gap-1 group-hover:translate-x-1 transition-transform">
              <span>Baca Panduan Edukasi</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-xs hover:shadow-md transition-all group flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-bl-full -mr-4 -mt-4 -z-0"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-orange-50 text-[#f15a24] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Layers className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">2. Standarisasi & Agregasi</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Bermitra dengan bank sampah dan pengepul lokal untuk standarisasi sortir, pembersihan, pengepresan, hingga pencacahan agar memenuhi spesifikasi pabrik.
              </p>
            </div>
            <div className="relative z-10 pt-6 mt-6 border-t border-slate-100 flex items-center text-xs font-bold text-[#f15a24] gap-1 group-hover:translate-x-1 transition-transform">
              <span>Program Kemitraan</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-xs hover:shadow-md transition-all group flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#00635c] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Building2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">3. Penyaluran Industri Daur Ulang</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Menjamin kepastian off-taker (pabrik daur ulang & pelet plastik) dengan harga wajar, timbangan presisi, dan kontinuitas pasokan bahan baku daur ulang.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center text-xs font-bold text-[#00635c] gap-1 group-hover:translate-x-1 transition-transform">
              <span>Alur Rantai Pasok</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. SUPPLY CHAIN VISUAL JOURNEY */}
      <section className="bg-slate-900 text-white py-16 rounded-3xl mx-4 sm:mx-6 lg:mx-8 px-6 sm:px-10 lg:px-12 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
          <Recycle className="w-96 h-96 -mr-20 -mb-20 text-white" />
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f15a24] bg-white/10 px-3.5 py-1 rounded-full">
            Alur Sirkularitas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Bagaimana Bang Bin Menggerakkan Plastik Daur Ulang
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Dari kemasan pasca-konsumsi hingga siap menjadi produk bermanfaat kembali tanpa mencemari laut dan lingkungan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Step 1 */}
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 relative">
            <span className="text-3xl font-black text-[#f15a24] block mb-2">01</span>
            <h4 className="font-bold text-white text-base mb-1">Pilah di Rumah / Usaha</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Masyarakat memilah botol PET, cup PP, dan wadah HDPE dalam keadaan kering dan bersih.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 relative">
            <span className="text-3xl font-black text-emerald-400 block mb-2">02</span>
            <h4 className="font-bold text-white text-base mb-1">Drop Point & Bank Sampah</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Material dikumpulkan di titik agregasi Bang Bin atau jaringan bank sampah binaan.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 relative">
            <span className="text-3xl font-black text-[#f15a24] block mb-2">03</span>
            <h4 className="font-bold text-white text-base mb-1">Penyortiran & Bal Pres</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Klasifikasi warna dan jenis polimer, pembuangan label perekat, dan pengepresan kompak.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 relative">
            <span className="text-3xl font-black text-emerald-400 block mb-2">04</span>
            <h4 className="font-bold text-white text-base mb-1">Pabrik & Peletisasi</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Pencacahan menjadi flakes, pencucian higienis, dan pelelehan menjadi biji plastik daur ulang (rPET/rPP).
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => setCurrentPage('edukasi')}
            className="px-6 py-3 rounded-xl bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 transition-colors inline-flex items-center gap-2"
          >
            <span>Pelajari Detail Edukasi Daur Ulang</span>
            <ArrowRight className="w-4 h-4 text-[#f15a24]" />
          </button>
        </div>
      </section>

      {/* 4. ACTIVITY HIGHLIGHT PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#00635c] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Aktivitas Terkini
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
              Kegiatan Komunitas Bang Bin
            </h2>
          </div>
          <button
            onClick={() => setCurrentPage('kegiatan')}
            className="text-sm font-bold text-[#00635c] hover:text-[#004d47] flex items-center gap-1.5 self-start"
          >
            <span>Lihat Semua Kegiatan</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all">
            <div className="h-44 bg-gradient-to-tr from-emerald-700 to-teal-500 p-6 flex flex-col justify-end text-white relative">
              <span className="text-[11px] font-bold uppercase bg-black/30 backdrop-blur-xs px-2.5 py-1 rounded-md self-start">
                Workshop & Edukasi
              </span>
            </div>
            <div className="p-6">
              <span className="text-xs text-slate-400 font-medium">Agenda Rutin Bulanan</span>
              <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2">
                Workshop Pemilahan Plastik & Pengenalan Kode Daur Ulang
              </h3>
              <p className="text-xs text-slate-600 line-clamp-2">
                Pelatihan langsung bagi ibu rumah tangga dan relawan pemuda cara membedakan PET, HDPE, dan PP agar bernilai jual tinggi.
              </p>
              <button
                onClick={() => setCurrentPage('kegiatan')}
                className="mt-4 text-xs font-bold text-[#00635c] hover:underline flex items-center gap-1"
              >
                <span>Baca Rincian</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all">
            <div className="h-44 bg-gradient-to-tr from-[#f15a24] to-amber-500 p-6 flex flex-col justify-end text-white relative">
              <span className="text-[11px] font-bold uppercase bg-black/30 backdrop-blur-xs px-2.5 py-1 rounded-md self-start">
                Pengumpulan Lapangan
              </span>
            </div>
            <div className="p-6">
              <span className="text-xs text-slate-400 font-medium">Aksi Komunitas</span>
              <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2">
                Bang Bin Drop-Off Day: Tukar Plastik Bersih Terpilah
              </h3>
              <p className="text-xs text-slate-600 line-clamp-2">
                Pengumpulan sampah botol dan wadah plastik serentak bersama mitra bank sampah lokal dengan sistem penimbangan transparan.
              </p>
              <button
                onClick={() => setCurrentPage('kegiatan')}
                className="mt-4 text-xs font-bold text-[#f15a24] hover:underline flex items-center gap-1"
              >
                <span>Baca Rincian</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all">
            <div className="h-44 bg-gradient-to-tr from-slate-800 to-teal-800 p-6 flex flex-col justify-end text-white relative">
              <span className="text-[11px] font-bold uppercase bg-black/30 backdrop-blur-xs px-2.5 py-1 rounded-md self-start">
                Kunjungan Industri
              </span>
            </div>
            <div className="p-6">
              <span className="text-xs text-slate-400 font-medium">Kemitraan Pabrik</span>
              <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2">
                Benchmarking Proses Pencacahan & Daur Ulang Plastik
              </h3>
              <p className="text-xs text-slate-600 line-clamp-2">
                Kunjungan edukatif ke fasilitas daur ulang rekanan untuk memahami standar kebersihan bahan baku daur ulang tingkat lanjut.
              </p>
              <button
                onClick={() => setCurrentPage('kegiatan')}
                className="mt-4 text-xs font-bold text-[#00635c] hover:underline flex items-center gap-1"
              >
                <span>Baca Rincian</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION FOR PARTNERSHIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#00635c] via-[#004d47] to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl text-left">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-emerald-300 border border-emerald-400/30">
              TERBUKA UNTUK MITRA BARU
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              Ingin Bergabung dalam Rantai Pasok Daur Ulang Bang Bin?
            </h2>
            <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed">
              Apakah Anda pengelola bank sampah, pengepul, komunitas lingkungan, atau pelaku industri daur ulang? Mari berkolaborasi menciptakan rantai pasok plastik yang berkelanjutan dan berkeadilan.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={() => setCurrentPage('kemitraan')}
              className="px-7 py-4 rounded-xl bg-[#f15a24] hover:bg-[#d84b18] text-white font-bold text-sm shadow-lg transition-all text-center cursor-pointer"
            >
              Daftar Jadi Mitra
            </button>
            <button
              onClick={() => setCurrentPage('kontak')}
              className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all text-center cursor-pointer"
            >
              Hubungi Tim Kami
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
