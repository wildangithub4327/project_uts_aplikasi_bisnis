import React, { useState } from 'react';
import { PageId } from '../components/Navbar';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  ArrowRight, 
  Recycle, 
  Sparkles, 
  CheckCircle,
  Tag,
  Share2
} from 'lucide-react';

interface ActivitiesProps {
  setCurrentPage: (page: PageId) => void;
}

interface ActivityItem {
  id: string;
  category: 'edukasi' | 'pengumpulan' | 'kemitraan';
  categoryLabel: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  participants: string;
  impact: string;
  status: 'Mendatang' | 'Rutin' | 'Terlaksana';
}

export const Activities: React.FC<ActivitiesProps> = ({ setCurrentPage }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'edukasi' | 'pengumpulan' | 'kemitraan'>('all');

  const activitiesList: ActivityItem[] = [
    {
      id: 'act-1',
      category: 'edukasi',
      categoryLabel: 'Edukasi & Workshop',
      title: 'Workshop Pilah Plastik dari Sumber: Mengetahui Nilai Ekonomi Sampah',
      date: 'Sabtu, Pekan Depan (Placeholder Jadwal)',
      time: '09.00 - 12.00 WIB',
      location: 'Balai Komunitas Warga & Live Streaming (Placeholder Lokasi)',
      description: 'Pelatihan langsung membedakan kode polimer plastik (PET 1, HDPE 2, PP 5), teknik pembersihan wadah, dan cara memaksimalkan nilai jual ke bank sampah mitra.',
      participants: 'Masyarakat umum, pengurus RT/RW, dan pegiat lingkungan',
      impact: 'Target 50+ Kepala Keluarga terlatih memilah secara mandiri',
      status: 'Mendatang'
    },
    {
      id: 'act-2',
      category: 'pengumpulan',
      categoryLabel: 'Aksi Pengumpulan',
      title: 'Bang Bin Drop-Off Day: Aksi Setor Botol & Wadah Plastik Bersih',
      date: 'Minggu Ke-2 Setiap Bulan',
      time: '08.00 - 15.00 WIB',
      location: 'Titik Kumpul Drop-Point Bang Bin (Placeholder Lokasi)',
      description: 'Program pengumpulan terpusat sampah plastik pasca-konsumsi. Seluruh plastik ditimbang dengan timbangan digital transparan dan dicatat berdasarkan kategori polimer.',
      participants: 'Komunitas warga & nasabah bank sampah',
      impact: 'Rata-rata terkumpul 1,5 Ton botol dan cup plastik terpilah per acara',
      status: 'Rutin'
    },
    {
      id: 'act-3',
      category: 'kemitraan',
      categoryLabel: 'Pendampingan Mitra',
      title: 'Bimbingan Teknis Standarisasi Kualitas Bal & Cacahan Plastik',
      date: 'Jadwal Berkala Sesuai Permintaan Mitra',
      time: '10.00 - 14.30 WIB',
      location: 'Pusat Agregasi & Gudang Mitra Bank Sampah',
      description: 'Pendampingan teknis bagi operator bank sampah dalam teknik pembuangan label PVC perekat, pemilahan tutup botol (HDPE/PP), dan kompresi bal pres berstandar pabrik.',
      participants: 'Pengelola bank sampah & pengepul lokal binaan',
      impact: 'Meningkatkan grade harga jual bahan baku hingga 25%',
      status: 'Rutin'
    },
    {
      id: 'act-4',
      category: 'edukasi',
      categoryLabel: 'Edukasi & Workshop',
      title: 'Bang Bin Goes to School: Generasi Muda Peduli Daur Ulang',
      date: 'Agenda Kunjungan Sekolah',
      time: '08.00 - 11.00 WIB',
      location: 'Sekolah Dasar & Menengah Rekanan',
      description: 'Edukasi interaktif mengenalkan bahaya sampah plastik sekali pakai, games pilah botol, dan pameran produk daur ulang kreatif buatan pengrajin lokal.',
      participants: 'Siswa, guru, dan staf sekolah',
      impact: '300+ Siswa memahami prinsip 3R dan siklus ekonomi sirkular',
      status: 'Mendatang'
    },
    {
      id: 'act-5',
      category: 'kemitraan',
      categoryLabel: 'Kunjungan Industri',
      title: 'Kunjungan Lapangan Fasilitas Peletisasi & Daur Ulang Plastik',
      date: 'Agenda Triwulanan',
      time: '09.30 - 15.00 WIB',
      location: 'Fasilitas Pabrik Daur Ulang Rekanan Bang Bin',
      description: 'Melihat langsung perjalanan plastik cacah (flakes) yang dicuci dengan air panas, dilelehkan dalam ekstruder, dan dicetak menjadi pelet plastik daur ulang kualitas industri.',
      participants: 'Perwakilan pengurus bank sampah & komunitas mitra',
      impact: 'Memperkuat kepercayaan rantai pasok dan transparansi hilir',
      status: 'Terlaksana'
    }
  ];

  const filteredActivities = activeTab === 'all' 
    ? activitiesList 
    : activitiesList.filter(item => item.category === activeTab);

  return (
    <div className="space-y-16 pb-20">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#e6f4f2] to-white pt-12 pb-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-emerald-200 text-[#00635c] text-xs font-bold">
            <Recycle className="w-3.5 h-3.5 text-[#f15a24]" />
            <span>AKSI & PROGRAM NYATA</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Kegiatan <span className="text-[#00635c]">Bang Bin</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Dari sosialisasi di tingkat rukun warga hingga standarisasi teknis di bank sampah, kami aktif bergerak di lapangan untuk menjaga kesinambungan daur ulang.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[#00635c] text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Semua Kegiatan ({activitiesList.length})
          </button>
          <button
            onClick={() => setActiveTab('edukasi')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'edukasi'
                ? 'bg-[#00635c] text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Edukasi & Workshop
          </button>
          <button
            onClick={() => setActiveTab('pengumpulan')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'pengumpulan'
                ? 'bg-[#00635c] text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Aksi Drop-Off & Pengumpulan
          </button>
          <button
            onClick={() => setActiveTab('kemitraan')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'kemitraan'
                ? 'bg-[#00635c] text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Pendampingan Mitra & Industri
          </button>
        </div>

        {/* Activities Grid */}
        <div className="space-y-6">
          {filteredActivities.map((act) => (
            <div
              key={act.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs hover:shadow-md transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6"
            >
              <div className="space-y-3.5 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider ${
                    act.category === 'edukasi' 
                      ? 'bg-emerald-50 text-[#00635c] border border-emerald-200' 
                      : act.category === 'pengumpulan'
                      ? 'bg-orange-50 text-[#f15a24] border border-orange-200'
                      : 'bg-blue-50 text-blue-700 border border-blue-200'
                  }`}>
                    {act.categoryLabel}
                  </span>

                  <span className={`px-2 py-0.5 rounded-md text-[11px] font-semibold ${
                    act.status === 'Mendatang'
                      ? 'bg-amber-100 text-amber-800'
                      : act.status === 'Rutin'
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-slate-100 text-slate-700'
                  }`}>
                    Status: {act.status}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  {act.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {act.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-xs text-slate-500 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#f15a24]" />
                    <span className="font-semibold text-slate-700">{act.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span>{act.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#00635c]" />
                    <span>{act.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-slate-400" />
                    <span>Peserta: {act.participants}</span>
                  </div>
                </div>

                <div className="text-xs font-semibold text-emerald-700 bg-emerald-50/70 px-3 py-1.5 rounded-lg inline-block">
                  🌱 Capaian: {act.impact}
                </div>
              </div>

              {/* Action Button */}
              <div className="shrink-0 flex lg:flex-col gap-3 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                <button
                  onClick={() => setCurrentPage('kontak')}
                  className="w-full lg:w-44 py-3 px-4 rounded-xl bg-[#00635c] hover:bg-[#004d47] text-white font-bold text-xs shadow-xs transition-colors text-center cursor-pointer"
                >
                  Ikut / Kolaborasi
                </button>
                <button
                  onClick={() => setCurrentPage('kemitraan')}
                  className="w-full lg:w-44 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors text-center cursor-pointer"
                >
                  Ajukan di Wilayah Anda
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partnership in Activities Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f0fdf9] border border-emerald-200/80 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Ingin Mengadakan Program Bang Bin di Komunitas atau Sekolah Anda?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              Kami siap mengirimkan tim fasilitator edukasi pemilahan sampah plastik dan menyediakan wadah pemilahan terintegrasi.
            </p>
          </div>
          <button
            onClick={() => setCurrentPage('kontak')}
            className="px-6 py-3.5 rounded-xl bg-[#f15a24] hover:bg-[#d84b18] text-white font-bold text-sm shadow-sm transition-all shrink-0 cursor-pointer"
          >
            Hubungi Tim Edukasi
          </button>
        </div>
      </section>

    </div>
  );
};
