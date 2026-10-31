import React from 'react';
import { PageId } from '../components/Navbar';
import { BangBinLogo } from '../components/BangBinLogo';
import { 
  Target, 
  Compass, 
  ShieldCheck, 
  Sparkles, 
  Heart, 
  Recycle, 
  Users, 
  CheckCircle2, 
  HelpCircle,
  Award,
  Layers,
  ArrowRight
} from 'lucide-react';

interface AboutProps {
  setCurrentPage: (page: PageId) => void;
}

export const About: React.FC<AboutProps> = ({ setCurrentPage }) => {
  const logoSrc = "/assets/aistudio/IMG_20261017_123444_283.jpg_35be5faf.jpeg";

  return (
    <div className="space-y-16 pb-20">
      
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-[#e6f4f2] to-white pt-12 pb-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-emerald-200 text-[#00635c] text-xs font-bold">
            <Recycle className="w-3.5 h-3.5 text-[#f15a24]" />
            <span>PROFIL RESMI BANG BIN</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Tentang <span className="text-[#00635c]">Bang Bin</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Membangun ekosistem sirkularitas sampah plastik yang terintegrasi, transparan, dan memberdayakan komunitas dari hulu hingga hilir.
          </p>
        </div>
      </section>

      {/* 2. Latar Belakang & Cerita Bang Bin */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-5 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00635c] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Latar Belakang & Identitas
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 leading-snug">
              Menjawab Tantangan Terbesar Rantai Pasok Sampah Plastik
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Indonesia menghadapi tantangan jutaan ton sampah plastik setiap tahunnya. Meskipun banyak masyarakat ingin memilah dan mendaur ulang, rantai pasok seringkali terputus: material tercampur kotor, bank sampah kesulitan mencari pembeli tetap (off-taker), dan pabrik daur ulang kekurangan bahan baku bersih berkualitas.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              <strong>Bang Bin</strong> didirikan sebagai komunitas dan motor penggerak solusi terpadu rantai pasok plastik (*Plastic Recycling Solutions*). Kami bergerak dari edukasi pemilahan tipe polimer di tingkat rumah tangga, standarisasi agregasi di bank sampah mitra, hingga memastikan penyaluran aman dan terjadwal ke pabrik daur ulang.
            </p>

            <div className="pt-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100">
                  <h4 className="font-bold text-[#00635c] text-sm">Fokus Spesifik</h4>
                  <p className="text-xs text-slate-600 mt-1">Mengkhususkan diri pada daur ulang polimer plastik bermutu.</p>
                </div>
                <div className="p-4 rounded-xl bg-orange-50/60 border border-orange-100">
                  <h4 className="font-bold text-[#f15a24] text-sm">Ekosistem Sirkular</h4>
                  <p className="text-xs text-slate-600 mt-1">Mendorong ekonomi sirkular yang adil bagi seluruh mitra.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Logo Showcase with Meaning */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-lg text-center relative overflow-hidden">
              <div className="w-48 h-48 mx-auto bg-gradient-to-b from-[#f0fdf9] to-[#fff7ed] rounded-2xl p-4 flex items-center justify-center border border-slate-100 shadow-inner mb-6">
                <img 
                  src={logoSrc} 
                  alt="Logo Bang Bin" 
                  className="w-full h-full object-contain mix-blend-multiply" 
                />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Filosofi Identitas Logo Bang Bin
              </h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto mb-6">
                Simbol visual kami merepresentasikan keramahan, teknologi, dan keselarasan alam dalam daur ulang plastik.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/70">
                  <p className="text-xs font-bold text-[#f15a24]">Maskot Oranye</p>
                  <p className="text-[11px] text-slate-600 mt-1">Karakter botol-tempat sampah ramah yang melambangkan semangat, aksi nyata, dan edukasi bersahabat.</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/70">
                  <p className="text-xs font-bold text-[#00635c]">Warna Hijau Teal</p>
                  <p className="text-[11px] text-slate-600 mt-1">Komitmen kelestarian alam, bumi yang lebih bersih, dan profesionalitas rantai pasok industri.</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/70">
                  <p className="text-xs font-bold text-slate-700">Warna Putih</p>
                  <p className="text-[11px] text-slate-600 mt-1">Transparansi, kejujuran timbangan, dan kebersihan proses daur ulang.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Visi & Misi */}
      <section className="bg-slate-50 py-16 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Visi */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#00635c] flex items-center justify-center font-bold">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Visi Kami</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Menjadi katalisator utama dan ekosistem terpercaya dalam rantai pasok daur ulang sampah plastik di Indonesia yang mengintegrasikan kepedulian lingkungan, kemandirian bank sampah komunitas, serta kepastian industri daur ulang berkelanjutan.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#00635c]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Menciptakan Indonesia Bebas Kebocoran Sampah Plastik</span>
              </div>
            </div>

            {/* Misi */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#f15a24] flex items-center justify-center font-bold">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Misi Kami</h3>
                <ul className="space-y-3 text-slate-600 text-sm leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-50 text-[#00635c] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <span>Mengedukasi masyarakat secara masif tentang pemilahan jenis plastik pasca-konsumsi dari sumbernya.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-50 text-[#00635c] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <span>Mendampingi dan memberdayakan bank sampah lokal dengan standarisasi pemilahan dan pencacahan yang sesuai kebutuhan industri.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-50 text-[#00635c] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <span>Membangun rantai pasok yang transparan, efisien, dan saling menguntungkan antara pengumpul dan pabrik daur ulang.</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#f15a24]">
                <CheckCircle2 className="w-4 h-4 text-orange-500" />
                <span>Kolaborasi Hulu ke Hilir Berkelanjutan</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Nilai-Nilai Utama (Core Values) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#00635c] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Nilai Perjuangan
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900">Nilai-Nilai Inti Bang Bin</h2>
          <p className="text-sm text-slate-600">
            Prinsip yang menjadi pedoman dalam setiap inisiatif dan kemitraan yang kami jalankan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#00635c] flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 text-base mb-2">Transparansi</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Menjunjung keterbukaan dalam timbangan, klasifikasi jenis material, dan kepastian komitmen bagi seluruh mitra.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#f15a24] flex items-center justify-center mb-4">
              <Heart className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 text-base mb-2">Pemberdayaan</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Meningkatkan kapasitas dan kesejahteraan penggiat bank sampah, pengepul lokal, dan pejuang lingkungan di akar rumput.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#00635c] flex items-center justify-center mb-4">
              <Recycle className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 text-base mb-2">Keberlanjutan</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Berkomitmen memastikan plastik daur ulang tidak kembali ke TPA atau alam, melainkan masuk ke siklus ekonomi sirkular.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#f15a24] flex items-center justify-center mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 text-base mb-2">Kolaborasi</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Masalah lingkungan tidak dapat diselesaikan sendiri; sinergi multisektor adalah kunci keberhasilan jangka panjang.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Struktur Penggerak Komunitas (Placeholder yang Rapi & Mudah Diedit) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100/70 rounded-3xl p-8 sm:p-10 border border-slate-200 text-center space-y-6">
          <div className="max-w-xl mx-auto space-y-2">
            <h3 className="text-2xl font-bold text-slate-900">Tim & Inisiator Komunitas Bang Bin</h3>
            <p className="text-xs sm:text-sm text-slate-600">
              [Bagian informasi placeholder untuk susunan pengurus, dewan penasihat, dan perwakilan koordinator wilayah Bang Bin yang dapat diperbarui sesuai kebutuhan resmi]
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#00635c] mx-auto flex items-center justify-center font-bold text-lg mb-4">
                BB
              </div>
              <h4 className="font-bold text-slate-900 text-sm">[Placeholder Nama Koordinator]</h4>
              <p className="text-xs text-[#00635c] font-semibold mt-0.5">Ketua Komunitas Bang Bin</p>
              <p className="text-[11px] text-slate-500 mt-2">Mengoordinasikan visi strategis dan kemitraan industri.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs">
              <div className="w-16 h-16 rounded-full bg-orange-100 text-[#f15a24] mx-auto flex items-center justify-center font-bold text-lg mb-4">
                ML
              </div>
              <h4 className="font-bold text-slate-900 text-sm">[Placeholder Bidang Kemitraan]</h4>
              <p className="text-xs text-[#f15a24] font-semibold mt-0.5">Kepala Hubungan Mitra & Pasok</p>
              <p className="text-[11px] text-slate-500 mt-2">Mendampingi bank sampah dan penyerapan material plastik.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#00635c] mx-auto flex items-center justify-center font-bold text-lg mb-4">
                ED
              </div>
              <h4 className="font-bold text-slate-900 text-sm">[Placeholder Bidang Edukasi]</h4>
              <p className="text-xs text-[#00635c] font-semibold mt-0.5">Kepala Edukasi & Komunitas</p>
              <p className="text-[11px] text-slate-500 mt-2">Menyelenggarakan lokakarya pilah plastik dan aktivasi publik.</p>
            </div>
          </div>

          <div className="pt-4">
            <button
              onClick={() => setCurrentPage('kemitraan')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00635c] hover:bg-[#004d47] text-white font-bold text-sm shadow-xs transition-colors"
            >
              <span>Bergabung Bersama Kami</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
