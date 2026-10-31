import React, { useState } from 'react';
import { PageId } from '../components/Navbar';
import { 
  HeartHandshake, 
  Building2, 
  Recycle, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  HelpCircle,
  Clock,
  Send,
  FileCheck2
} from 'lucide-react';

interface PartnershipProps {
  setCurrentPage: (page: PageId) => void;
}

export const Partnership: React.FC<PartnershipProps> = ({ setCurrentPage }) => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    category: 'Bank Sampah / Pengepul',
    email: '',
    phone: '',
    city: '',
    estimatedCapacity: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-20">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#e6f4f2] to-white pt-12 pb-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-emerald-200 text-[#00635c] text-xs font-bold">
            <HeartHandshake className="w-3.5 h-3.5 text-[#f15a24]" />
            <span>SINERGI RANTAI PASOK SIRKULAR</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Program Kemitraan <span className="text-[#00635c]">Bang Bin</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Bergabunglah bersama ratusan penggiat bank sampah, pengepul, komunitas, dan pelaku industri daur ulang dalam ekosistem pasok yang adil dan berkelanjutan.
          </p>
        </div>
      </section>

      {/* 3 Categories of Partnership */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#00635c] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Kategori Kolaborasi
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900">
            Pilih Skema Kemitraan yang Sesuai
          </h2>
          <p className="text-sm text-slate-600">
            Kami merancang kolaborasi yang disesuaikan dengan kapasitas dan peran masing-masing pemangku kepentingan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Category 1: Bank Sampah & Pengepul */}
          <div className="bg-white rounded-3xl p-8 border-2 border-emerald-500/30 shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#00635c] flex items-center justify-center font-bold">
                <Recycle className="w-7 h-7" />
              </div>
              <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded-md">
                Mitra Hulu & Agregasi
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                Bank Sampah & Pengepul
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Bagi pengelola bank sampah unit/induk dan lapak pengumpul yang ingin mendapatkan kepastian penyerapan rutin, harga wajar, dan pendampingan sortir.
              </p>

              <div className="pt-2 space-y-2">
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Jaminan off-take / penyerapan terjadwal</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Pelatihan standar bal & cacahan pabrik</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Timbangan digital transparan & pembayaran tepat waktu</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <a
                href="#form-kemitraan"
                className="w-full py-3 rounded-xl bg-[#00635c] hover:bg-[#004d47] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Daftar Kategori Ini</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Category 2: Industri & Pabrik Daur Ulang */}
          <div className="bg-white rounded-3xl p-8 border-2 border-orange-500/40 shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-orange-50 text-[#f15a24] flex items-center justify-center font-bold">
                <Building2 className="w-7 h-7" />
              </div>
              <span className="text-[11px] font-bold text-orange-700 uppercase tracking-wider bg-orange-50 px-2.5 py-1 rounded-md">
                Mitra Hilir & Pengolahan
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                Industri & Pabrik Daur Ulang
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Bagi pabrik daur ulang plastik, produsen pelet, dan manufaktur produk sirkular yang membutuhkan bahan baku terstandar dalam volume stabil.
              </p>

              <div className="pt-2 space-y-2">
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#f15a24] shrink-0 mt-0.5" />
                  <span>Pasokan plastik terpilah konsisten (PET, HDPE, PP)</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#f15a24] shrink-0 mt-0.5" />
                  <span>Kadar kontaminasi rendah sesuai spesifikasi</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#f15a24] shrink-0 mt-0.5" />
                  <span>Keterlacakan sumber pasok (traceability)</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <a
                href="#form-kemitraan"
                className="w-full py-3 rounded-xl bg-[#f15a24] hover:bg-[#d84b18] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Daftar Kategori Ini</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Category 3: Komunitas, Sekolah & Perusahaan (CSR) */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <span className="text-[11px] font-bold text-teal-800 uppercase tracking-wider bg-teal-50 px-2.5 py-1 rounded-md">
                Mitra Komunitas & CSR
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                Komunitas, Sekolah & CSR
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Bagi instansi pendidikan, perumahan, perkantoran, dan perusahaan yang ingin mengadakan instalasi drop-box dan program CSR lingkungan.
              </p>

              <div className="pt-2 space-y-2">
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Instalasi fasilitas pemilahan plastik Bang Bin</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Workshop edukasi untuk karyawan atau siswa</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Laporan dampak lingkungan (ESG Impact)</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <a
                href="#form-kemitraan"
                className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Daftar Kategori Ini</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 4 Steps to Join */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00635c] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Prosedur Sederhana
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900">
              4 Langkah Mudah Bergabung
            </h2>
            <p className="text-sm text-slate-600">
              Alur pendaftaran kemitraan yang terstruktur dan mudah diikuti.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-[#00635c] font-black text-lg mx-auto flex items-center justify-center">
                1
              </div>
              <h4 className="font-bold text-slate-900 text-base">Registrasi Akun</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Buat akun pengguna di website Bang Bin untuk verifikasi identitas dan email Anda.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-orange-50 text-[#f15a24] font-black text-lg mx-auto flex items-center justify-center">
                2
              </div>
              <h4 className="font-bold text-slate-900 text-base">Isi Formulir Minat</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Lengkapi profil organisasi, jenis plastik yang dikelola, serta estimasi kapasitas per bulan.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-[#00635c] font-black text-lg mx-auto flex items-center justify-center">
                3
              </div>
              <h4 className="font-bold text-slate-900 text-base">Verifikasi & Konsultasi</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Tim Bang Bin menghubungi Anda untuk koordinasi teknis, survei mutu, dan skema harga.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-orange-50 text-[#f15a24] font-black text-lg mx-auto flex items-center justify-center">
                4
              </div>
              <h4 className="font-bold text-slate-900 text-base">Mulai Beroperasi</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Penyerapan material perdana dimulai dan terhubung langsung ke ekosistem daur ulang.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Partnership Inquiry Form */}
      <section id="form-kemitraan" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-xl">
          <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00635c] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Formulir Minat
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Ajukan Minat Menjadi Mitra Bang Bin
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Kirimkan data awal organisasi Anda. Tim kemitraan kami akan segera menindaklanjuti dalam waktu 1x24 jam kerja.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                <FileCheck2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-emerald-900">Pengajuan Berhasil Dikirim!</h4>
              <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                Terima kasih <strong>{formData.name}</strong> dari <strong>{formData.organization || 'organisasi Anda'}</strong>. Tim Kemitraan Bang Bin akan segera menghubungi nomor telepon atau email yang Anda cantumkan.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-xl bg-[#00635c] text-white font-bold text-xs"
              >
                Kirim Pengajuan Baru
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Nama Narahubung / PIC *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Budi Santoso"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#00635c] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Nama Komunitas / Perusahaan / Bank Sampah *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Bank Sampah Berseri"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#00635c] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Kategori Kemitraan *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#00635c] focus:border-transparent bg-white"
                  >
                    <option value="Bank Sampah / Pengepul">Bank Sampah / Pengepul Lokal</option>
                    <option value="Industri / Pabrik Daur Ulang">Industri / Pabrik Daur Ulang</option>
                    <option value="Komunitas & Sekolah">Komunitas Lingkungan / Sekolah</option>
                    <option value="Perusahaan / Program CSR">Perusahaan / Inisiatif CSR</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Kota / Wilayah Operasional *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Surabaya / Sidoarjo"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#00635c] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Alamat Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email@organisasi.id"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#00635c] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Nomor WhatsApp / Telepon *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0812-XXXX-XXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#00635c] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Estimasi Kapasitas / Jenis Sampah Plastik yang Dikelola
                </label>
                <input
                  type="text"
                  placeholder="Contoh: ~500 kg botol PET dan cup PP per bulan"
                  value={formData.estimatedCapacity}
                  onChange={(e) => setFormData({ ...formData, estimatedCapacity: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#00635c] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Catatan atau Kebutuhan Tambahan
                </label>
                <textarea
                  rows={3}
                  placeholder="Ceritakan singkat tentang fasilitas pemilahan atau harapan Anda bermitra dengan Bang Bin..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#00635c] focus:border-transparent resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#f15a24] hover:bg-[#d84b18] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Formulir Pengajuan Kemitraan</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

    </div>
  );
};
