import React, { useState } from 'react';
import { PageId } from '../components/Navbar';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Globe,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

interface ContactProps {
  setCurrentPage: (page: PageId) => void;
}

export const Contact: React.FC<ContactProps> = ({ setCurrentPage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="space-y-16 pb-20">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#e6f4f2] to-white pt-12 pb-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-emerald-200 text-[#00635c] text-xs font-bold">
            <Mail className="w-3.5 h-3.5 text-[#f15a24]" />
            <span>KOMUNIKASI & LAYANAN INFORMASI</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Hubungi <span className="text-[#00635c]">Bang Bin</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Punya pertanyaan mengenai program edukasi, daur ulang plastik, atau ingin menyapa tim kami? Kami siap membantu Anda.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#00635c] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Informasi Resmi
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Saluran Komunikasi
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Gunakan kanal di bawah ini untuk menghubungi tim Bang Bin.
              </p>
            </div>

            <div className="space-y-4">
              {/* Address card */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-orange-50 text-[#f15a24] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Alamat Sekretariat / Drop Point</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    [Placeholder Alamat Kantor Bang Bin] <br />
                    Kawasan Sentra Pengelolaan Lingkungan & Daur Ulang Terpadu, Indonesia
                  </p>
                </div>
              </div>

              {/* Email card */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-[#00635c] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Surat Elektronik (Email)</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Umum: <span className="font-semibold text-slate-800">[Placeholder]: info@bangbin.id</span> <br />
                    Kemitraan: <span className="font-semibold text-slate-800">[Placeholder]: mitra@bangbin.id</span>
                  </p>
                </div>
              </div>

              {/* Phone / WA card */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-[#00635c] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Hotline WhatsApp / Telepon</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    [Placeholder Hotline Resmi]: <span className="font-semibold text-slate-800">+62 812-XXXX-XXXX</span>
                  </p>
                </div>
              </div>

              {/* Hours card */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Jam Layanan & Operasional</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Senin – Jumat: 08.30 – 17.00 WIB <br />
                    Sabtu (Program Lapangan): 09.00 – 14.00 WIB
                  </p>
                </div>
              </div>
            </div>

            {/* Social media connections */}
            <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Ikuti Media Sosial Bang Bin
              </h4>
              <p className="text-xs text-slate-300">
                Dapatkan pembaruan tips daur ulang, liputan kegiatan, dan kabar kemitraan terbaru:
              </p>
              <div className="flex items-center gap-3 pt-1">
                <a
                  href="#instagram"
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-[#f15a24] transition-colors text-white"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#linkedin"
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-[#00635c] transition-colors text-white"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#youtube"
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-rose-600 transition-colors text-white"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="#website"
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-[#00635c] transition-colors text-white"
                  aria-label="Website"
                >
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-lg">
              <div className="mb-6 space-y-1">
                <h3 className="text-2xl font-bold text-slate-900">Kirim Pesan ke Tim Kami</h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Silakan isi pesan, saran, atau pertanyaan Anda pada formulir berikut.
                </p>
              </div>

              {sent ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-900">Pesan Anda Telah Terkirim!</h4>
                  <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                    Terima kasih telah menghubungi Bang Bin. Tim kami akan membaca pesan Anda dan membalasnya sesegera mungkin.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-4 px-5 py-2 rounded-xl bg-[#00635c] text-white font-bold text-xs"
                  >
                    Kirim Pesan Lainnya
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Nama Anda"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#00635c]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Alamat Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="email@anda.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#00635c]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Nomor Telepon / WA
                      </label>
                      <input
                        type="tel"
                        placeholder="0812-XXXX-XXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#00635c]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Perihal / Topik *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Konsultasi Daur Ulang Botol PET"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#00635c]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Pesan Anda *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tuliskan pesan lengkap Anda di sini..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#00635c] resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#00635c] hover:bg-[#004d47] text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirim Pesan Sekarang</span>
                  </button>
                </form>
              )}
            </div>

            {/* Map Placeholder Card */}
            <div className="mt-6 p-6 rounded-3xl bg-slate-100 border border-slate-200 text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-[#00635c] mx-auto flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-800">Peta Lokasi Drop Point & Kantor</h4>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                [Placeholder Koordinat Peta: Jl. Lingkungan Daur Ulang No. 88, Sentra Daur Ulang Plastik Terpadu]
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
