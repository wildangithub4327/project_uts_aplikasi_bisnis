import React, { useState } from 'react';
import { PageId } from '../components/Navbar';
import { 
  BookOpen, 
  Recycle, 
  CheckCircle2, 
  AlertTriangle, 
  Droplet, 
  Sparkles, 
  HelpCircle, 
  ArrowRight,
  Info,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface EducationProps {
  setCurrentPage: (page: PageId) => void;
}

interface PlasticType {
  code: number;
  name: string;
  chemicalName: string;
  color: string;
  textColor: string;
  borderColor: string;
  bgLight: string;
  recyclability: 'Sangat Mudah & Nilai Tinggi' | 'Mudah Didaur Ulang' | 'Sulit / Khusus' | 'Sangat Sulit';
  recyclabilityGrade: 'A+' | 'A' | 'B' | 'C' | 'D';
  commonItems: string[];
  safeForFood: boolean;
  characteristics: string;
  handlingTips: string;
}

export const Education: React.FC<EducationProps> = ({ setCurrentPage }) => {
  const [selectedCode, setSelectedCode] = useState<number>(1);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const plasticTypes: PlasticType[] = [
    {
      code: 1,
      name: 'PET / PETE',
      chemicalName: 'Polyethylene Terephthalate',
      color: 'bg-emerald-600',
      textColor: 'text-emerald-700',
      borderColor: 'border-emerald-300',
      bgLight: 'bg-emerald-50',
      recyclability: 'Sangat Mudah & Nilai Tinggi',
      recyclabilityGrade: 'A+',
      commonItems: ['Botol air mineral', 'Botol minuman soda', 'Botol minyak goreng jernih', 'Wadah selai kacang'],
      safeForFood: true,
      characteristics: 'Jernih, tembus pandang, kuat, kedap gas dan air. Sekali pakai, tidak direkomendasikan diisi ulang air panas.',
      handlingTips: 'Kosongkan sisa cairan, bilas dengan sedikit air, lepaskan label perekat PVC jika memungkinkan, dan remas botol untuk menghemat ruang penyimpanan.'
    },
    {
      code: 2,
      name: 'HDPE',
      chemicalName: 'High-Density Polyethylene',
      color: 'bg-teal-600',
      textColor: 'text-teal-700',
      borderColor: 'border-teal-300',
      bgLight: 'bg-teal-50',
      recyclability: 'Sangat Mudah & Nilai Tinggi',
      recyclabilityGrade: 'A+',
      commonItems: ['Botol sampo & sabun cair', 'Jerigen minyak/deterjen', 'Botol susu cair', 'Tutup botol air mineral'],
      safeForFood: true,
      characteristics: 'Lebih tebal, kaku, tahan suhu tinggi, tahan bahan kimia, tidak mudah retak. Memiliki nilai daur ulang sangat stabil di industri.',
      handlingTips: 'Bilas bersih sisa sabun/deterjen agar tidak mencemari mesin pencacah. Pisahkan tutup jika warnanya berbeda.'
    },
    {
      code: 3,
      name: 'PVC',
      chemicalName: 'Polyvinyl Chloride',
      color: 'bg-amber-600',
      textColor: 'text-amber-700',
      borderColor: 'border-amber-300',
      bgLight: 'bg-amber-50',
      recyclability: 'Sulit / Khusus',
      recyclabilityGrade: 'C',
      commonItems: ['Pipa air / paralon', 'Kabel listrik', 'Tirai mandi plastik', 'Bahan kulit sintetis'],
      safeForFood: false,
      characteristics: 'Keras, lentur jika dicampur plasticizer, tahan cuaca. Mengandung klorin yang berbahaya jika dibakar sembarangan.',
      handlingTips: 'Jangan dibakar! Kumpulkan terpisah dari botol minuman karena klorin PVC dapat merusak seluruh batch daur ulang PET/PP.'
    },
    {
      code: 4,
      name: 'LDPE',
      chemicalName: 'Low-Density Polyethylene',
      color: 'bg-sky-600',
      textColor: 'text-sky-700',
      borderColor: 'border-sky-300',
      bgLight: 'bg-sky-50',
      recyclability: 'Mudah Didaur Ulang',
      recyclabilityGrade: 'B',
      commonItems: ['Kantong kresek belanja', 'Plastik pembungkus roti', 'Bubble wrap paket', 'Plastik cor / terpal tipis'],
      safeForFood: true,
      characteristics: 'Lentur, fleksibel, tahan air, relatif transparan dan tidak mudah robek saat ditarik.',
      handlingTips: 'Pastikan kantong kering dan bebas sisa minyak atau makanan. Satukan kantong-kantong kresek ke dalam satu kantong besar (bag-in-bag).'
    },
    {
      code: 5,
      name: 'PP',
      chemicalName: 'Polypropylene',
      color: 'bg-[#f15a24]',
      textColor: 'text-[#f15a24]',
      borderColor: 'border-orange-300',
      bgLight: 'bg-orange-50',
      recyclability: 'Sangat Mudah & Nilai Tinggi',
      recyclabilityGrade: 'A',
      commonItems: ['Cup minuman kopi/boba', 'Wadah makanan microwave (thinwall)', 'Sedotan minuman', 'Tutup botol galon'],
      safeForFood: true,
      characteristics: 'Kuat, tahan panas hingga 100°C+, ringan, permukaan licin. Salah satu jenis plastik paling dicari pabrik daur ulang saat ini.',
      handlingTips: 'Bilas bekas kopi atau teh, lepaskan segel lid plastik atau selotip perekat, dan tumpuk rapi cup agar tidak memakan tempat.'
    },
    {
      code: 6,
      name: 'PS',
      chemicalName: 'Polystyrene',
      color: 'bg-rose-600',
      textColor: 'text-rose-700',
      borderColor: 'border-rose-300',
      bgLight: 'bg-rose-50',
      recyclability: 'Sangat Sulit',
      recyclabilityGrade: 'D',
      commonItems: ['Styrofoam kotak makanan', 'Sendok garpu plastik putih kaku', 'Gelas kopi busa sekali pakai', 'Cangkang kaset CD'],
      safeForFood: false,
      characteristics: 'Kaku, getas, mudah patah, berbobot sangat ringan jika dalam bentuk busa (styrofoam). Kurang ekonomis untuk transport karena makan ruang.',
      handlingTips: 'Prioritaskan untuk DITOLAK atau DIHINDARI (Refuse). Jika terpaksa, cari fasilitas pemadatan densifier khusus.'
    },
    {
      code: 7,
      name: 'OTHER / LAINNYA',
      chemicalName: 'Multilayer / Polycarbonate / Bioplastik',
      color: 'bg-purple-600',
      textColor: 'text-purple-700',
      borderColor: 'border-purple-300',
      bgLight: 'bg-purple-50',
      recyclability: 'Sulit / Khusus',
      recyclabilityGrade: 'C',
      commonItems: ['Kemasan sachet multilayer (kopi/snack)', 'Galon air polikarbonat (PC)', 'Kacamata lensa resin', 'Bahan komposit plastik'],
      safeForFood: false,
      characteristics: 'Campuran lebih dari satu jenis polimer (misal lapisan plastik + aluminium foil) sehingga sulit dipisahkan secara mekanis biasa.',
      handlingTips: 'Untuk sachet multilayer, bersihkan dan dapat dialihkan ke program pembuatan Refuse Derived Fuel (RDF) atau ecobrick komunitas.'
    }
  ];

  const currentPlastic = plasticTypes.find(p => p.code === selectedCode) || plasticTypes[0];

  const faqs = [
    {
      q: 'Mengapa botol plastik harus dicuci dan dikeringkan sebelum disetor?',
      a: 'Sisa cairan bergula atau minyak dapat menimbulkan bau busuk, jamur, serta memancing serangga di tempat penyimpanan bank sampah. Selain itu, kontaminan organik dapat menurunkan mutu cacahan plastik saat dilelehkan di pabrik daur ulang.'
    },
    {
      q: 'Apakah label plastik pada botol air harus selalu dilepas?',
      a: 'Sangat dianjurkan! Botol biasanya berbahan PET (Kode 1), sedangkan labelnya seringkali berbahan PVC atau shrink film berbeda. Jika label tercampur dalam jumlah banyak, hal itu dapat mencemari batch pencacahan PET.'
    },
    {
      q: 'Apa perbedaan mendasar antara plastik PET (1) dan PP (5)?',
      a: 'PET biasanya digunakan untuk botol air jernih dan tidak tahan panas tinggi. Sementara PP lebih elastis, tahan panas (sering dipakai wadah microwave dan cup kopi panas), serta berbobot lebih ringan.'
    },
    {
      q: 'Bagaimana peran Bang Bin dalam rantai pasok ini?',
      a: 'Bang Bin mendampingi pemilah dan bank sampah agar material yang dikumpulkan sudah bersih dan terkategori sesuai kebutuhan industri, sehingga harga jual material lebih adil dan pasti terserap oleh pabrik daur ulang mitra.'
    }
  ];

  return (
    <div className="space-y-16 pb-20">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#e6f4f2] to-white pt-12 pb-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-emerald-200 text-[#00635c] text-xs font-bold">
            <BookOpen className="w-3.5 h-3.5 text-[#f15a24]" />
            <span>ENSIKLOPEDIA & PANDUAN PRAKTIS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Edukasi <span className="text-[#00635c]">Lingkungan & Plastik</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Pahami kode jenis plastik, alur rantai daur ulang, serta langkah mudah memilah sampah dari rumah untuk menyelamatkan lingkungan.
          </p>
        </div>
      </section>

      {/* Interactive 7 Plastic Types Guide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#00635c] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Standar Internasional SPI
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900">
            Panduan 7 Kode Daur Ulang Plastik
          </h2>
          <p className="text-sm text-slate-600">
            Klik nomor kode plastik di bawah ini untuk melihat karakteristik dan cara penanganannya.
          </p>
        </div>

        {/* Number Selector Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {plasticTypes.map((p) => {
            const isSelected = p.code === selectedCode;
            return (
              <button
                key={p.code}
                onClick={() => setSelectedCode(p.code)}
                className={`flex items-center gap-2 px-4 py-3 rounded-2xl font-bold text-sm transition-all cursor-pointer border ${
                  isSelected
                    ? `${p.color} text-white shadow-md scale-105 border-transparent`
                    : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
                }`}
              >
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-black">
                  {p.code}
                </span>
                <span>{p.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Plastic Details Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Big Badge & Rating */}
            <div className="lg:col-span-4 flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl border border-slate-200/80">
              <div className="w-24 h-24 rounded-3xl bg-[#00635c] text-white flex flex-col items-center justify-center font-black shadow-md mb-4 relative">
                <Recycle className="w-10 h-10 mb-0.5 opacity-90" />
                <span className="text-2xl leading-none">{currentPlastic.code}</span>
              </div>

              <h3 className="text-2xl font-black text-slate-900">{currentPlastic.name}</h3>
              <p className="text-xs text-slate-500 font-medium mt-0.5">{currentPlastic.chemicalName}</p>

              <div className="w-full mt-6 pt-5 border-t border-slate-200 space-y-3 text-left text-xs">
                <div>
                  <span className="text-slate-400 block mb-0.5 font-medium">Tingkat Daur Ulang:</span>
                  <span className={`inline-block px-2.5 py-1 rounded-md font-bold text-xs ${currentPlastic.bgLight} ${currentPlastic.textColor} border ${currentPlastic.borderColor}`}>
                    Grade {currentPlastic.recyclabilityGrade} — {currentPlastic.recyclability}
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 block mb-0.5 font-medium">Keamanan Makanan (Food Grade):</span>
                  <span className={`font-bold ${currentPlastic.safeForFood ? 'text-emerald-700' : 'text-amber-700'}`}>
                    {currentPlastic.safeForFood ? '✓ Umumnya Aman untuk Pangan' : '⚠ Perlu Perhatian / Khusus'}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Detailed Description & Tips */}
            <div className="lg:col-span-8 space-y-6 text-left">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Karakteristik Material
                </h4>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed bg-slate-50/60 p-4 rounded-xl border border-slate-100">
                  {currentPlastic.characteristics}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Contoh Produk Sehari-hari
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentPlastic.commonItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-xs font-semibold text-slate-800">
                      <span className="w-2 h-2 rounded-full bg-[#00635c]"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-[#f15a24] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-slate-900 text-xs sm:text-sm">
                      Tips Penanganan Bang Bin untuk Hasil Maksimal
                    </h5>
                    <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                      {currentPlastic.handlingTips}
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 5-Step Recycling Lifecycle */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#f15a24] bg-white/10 px-3.5 py-1 rounded-full">
              Siklus Tertutup
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight">
              Alur Perjalanan Plastik Daur Ulang
            </h2>
            <p className="text-slate-300 text-sm">
              Bagaimana sampah plastik bertransformasi kembali menjadi bahan baku bernilai ekonomis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="bg-slate-800/90 p-5 rounded-2xl border border-slate-700">
              <span className="text-2xl font-black text-[#f15a24]">01</span>
              <h4 className="font-bold text-white text-sm mt-1 mb-2">Pemilahan Sumber</h4>
              <p className="text-xs text-slate-300">
                Masyarakat memisahkan sampah organik basah dan wadah plastik kering.
              </p>
            </div>

            <div className="bg-slate-800/90 p-5 rounded-2xl border border-slate-700">
              <span className="text-2xl font-black text-emerald-400">02</span>
              <h4 className="font-bold text-white text-sm mt-1 mb-2">Penimbangan & Bal</h4>
              <p className="text-xs text-slate-300">
                Bank sampah mengelompokkan berdasarkan warna dan mengepres menjadi bal padat.
              </p>
            </div>

            <div className="bg-slate-800/90 p-5 rounded-2xl border border-slate-700">
              <span className="text-2xl font-black text-[#f15a24]">03</span>
              <h4 className="font-bold text-white text-sm mt-1 mb-2">Pencacahan (Flakes)</h4>
              <p className="text-xs text-slate-300">
                Mesin shredder memotong botol menjadi serpihan kecil (flakes) seragam.
              </p>
            </div>

            <div className="bg-slate-800/90 p-5 rounded-2xl border border-slate-700">
              <span className="text-2xl font-black text-emerald-400">04</span>
              <h4 className="font-bold text-white text-sm mt-1 mb-2">Pencucian Panas</h4>
              <p className="text-xs text-slate-300">
                Pembersihan residu lem, minyak, dan sterilisasi suhu tinggi.
              </p>
            </div>

            <div className="bg-slate-800/90 p-5 rounded-2xl border border-slate-700">
              <span className="text-2xl font-black text-emerald-400">05</span>
              <h4 className="font-bold text-white text-sm mt-1 mb-2">Peletisasi (Pellets)</h4>
              <p className="text-xs text-slate-300">
                Pelelehan dan ekstrusi menjadi biji plastik siap cetak produk baru.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Accordion */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#00635c] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Tanya Jawab Edukatif
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Pertanyaan Umum Seputar Daur Ulang
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-800 hover:text-[#00635c] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#f15a24] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Call to action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#e6f4f2] rounded-3xl p-8 sm:p-10 border border-emerald-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-left">
            <h3 className="text-xl font-bold text-slate-900">Sudah Mulai Memilah Sampah Plastik Anda?</h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Salurkan hasil pilahan Anda ke bank sampah mitra terdekat atau jadilah mitra Bang Bin hari ini.
            </p>
          </div>
          <button
            onClick={() => setCurrentPage('kemitraan')}
            className="px-6 py-3 rounded-xl bg-[#00635c] hover:bg-[#004d47] text-white font-bold text-sm shadow-xs transition-colors shrink-0"
          >
            Pelajari Program Kemitraan
          </button>
        </div>
      </section>

    </div>
  );
};
