import React, { useState } from 'react';
import { PageId } from '../components/Navbar';
import { BangBinLogo } from '../components/BangBinLogo';
import { useAuth } from '../context/AuthContext';
import { 
  LogIn, 
  UserPlus, 
  Mail, 
  Lock, 
  User, 
  Building2, 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Eye,
  EyeOff
} from 'lucide-react';

interface AuthProps {
  initialMode?: 'login' | 'register';
  setCurrentPage: (page: PageId) => void;
  authNotice?: string | null;
}

export const Auth: React.FC<AuthProps> = ({ 
  initialMode = 'login', 
  setCurrentPage,
  authNotice = null
}) => {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const { loginWithEmail, registerWithEmail, loginWithGoogle } = useAuth();

  // Form states
  const [displayName, setDisplayName] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Status states
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const formatFirebaseError = (err: any): string => {
    const code = err?.code || '';
    if (code === 'auth/invalid-credential' || code === 'auth/wrong-password' || code === 'auth/user-not-found') {
      return 'Email atau kata sandi tidak cocok. Silakan periksa kembali.';
    }
    if (code === 'auth/email-already-in-use') {
      return 'Alamat email ini sudah terdaftar. Silakan beralih ke halaman Masuk.';
    }
    if (code === 'auth/weak-password') {
      return 'Kata sandi terlalu pendek. Gunakan minimal 6 karakter.';
    }
    if (code === 'auth/invalid-email') {
      return 'Format alamat email tidak valid.';
    }
    if (code === 'auth/popup-closed-by-user') {
      return 'Jendela masuk Google ditutup sebelum selesai.';
    }
    if (code === 'auth/too-many-requests') {
      return 'Terlalu banyak percobaan gagal. Silakan tunggu beberapa saat lagi.';
    }
    return err?.message || 'Terjadi kesalahan sistem saat menghubungi Firebase Authentication.';
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);
    setLoading(true);

    try {
      await loginWithEmail(email, password);
      // Immediately navigate to dedicated post-login portal
      setCurrentPage('portal');
    } catch (err: any) {
      setErrorMessage(formatFirebaseError(err));
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (password.length < 6) {
      setErrorMessage('Kata sandi minimal harus 6 karakter.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Konfirmasi kata sandi tidak cocok.');
      return;
    }

    setLoading(true);

    try {
      await registerWithEmail(email, password, displayName, organization);
      setSuccessMessage('Registrasi berhasil! Mengalihkan ke halaman akun...');
      // Brief timeout to let the user see success feedback, then go to portal
      setTimeout(() => {
        setCurrentPage('portal');
      }, 700);
    } catch (err: any) {
      setErrorMessage(formatFirebaseError(err));
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setErrorMessage(null);
    setLoading(true);
    try {
      await loginWithGoogle();
      setCurrentPage('portal');
    } catch (err: any) {
      setErrorMessage(formatFirebaseError(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-160px)] py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-white to-slate-100 flex items-center justify-center">
      <div className="w-full max-w-md">
        
        {/* Logo and Brand Title */}
        <div className="text-center mb-8 space-y-2">
          <div className="inline-block bg-white p-2 rounded-2xl shadow-sm border border-slate-100">
            <BangBinLogo size="md" variant="full" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {mode === 'login' ? 'Masuk ke Akun Bang Bin' : 'Daftar Akun Mitra Baru'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            {mode === 'login'
              ? 'Gunakan email dan password terdaftar Anda'
              : 'Bergabung dalam ekosistem rantai pasok daur ulang plastik'}
          </p>
        </div>

        {/* Global Notice if redirected from protected route */}
        {authNotice && (
          <div className="mb-6 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800 text-xs sm:text-sm flex items-start gap-2.5 animate-fadeIn">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>{authNotice}</span>
          </div>
        )}

        {/* Main Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl p-7 sm:p-9 relative">
          
          {/* Mode Switch Tabs */}
          <div className="flex bg-slate-100 p-1 rounded-2xl mb-6">
            <button
              type="button"
              onClick={() => {
                setMode('login');
                setErrorMessage(null);
                setSuccessMessage(null);
              }}
              className={`flex-1 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
                mode === 'login'
                  ? 'bg-white text-[#00635c] shadow-xs'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Masuk (Login)
            </button>
            <button
              type="button"
              onClick={() => {
                setMode('register');
                setErrorMessage(null);
                setSuccessMessage(null);
              }}
              className={`flex-1 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
                mode === 'register'
                  ? 'bg-white text-[#f15a24] shadow-xs'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Daftar Akun
            </button>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="mb-5 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
              <span className="leading-relaxed">{errorMessage}</span>
            </div>
          )}

          {/* Success Message */}
          {successMessage && (
            <div className="mb-5 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
              <span className="leading-relaxed">{successMessage}</span>
            </div>
          )}

          {/* LOGIN FORM */}
          {mode === 'login' ? (
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Alamat Email *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    required
                    placeholder="nama@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#00635c] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-bold text-slate-700">
                    Kata Sandi (Password) *
                  </label>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="Minimal 6 karakter"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-10 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#00635c] focus:border-transparent"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-[#00635c] hover:bg-[#004d47] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {loading ? (
                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    <>
                      <LogIn className="w-4 h-4" />
                      <span>Masuk Sekarang</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          ) : (
            /* REGISTER FORM */
            <form onSubmit={handleRegisterSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nama Lengkap *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Nama Anda"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#f15a24] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nama Organisasi / Komunitas / Bank Sampah (Opsional)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    placeholder="Contoh: Bank Sampah Melati Indah"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#f15a24] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Alamat Email *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    required
                    placeholder="email@anda.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#f15a24] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Kata Sandi (Minimal 6 Karakter) *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    minLength={6}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-10 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#f15a24] focus:border-transparent"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Ulangi Kata Sandi *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    minLength={6}
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#f15a24] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-[#f15a24] hover:bg-[#d84b18] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {loading ? (
                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    <>
                      <UserPlus className="w-4 h-4" />
                      <span>Daftar Akun Sekarang</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-3 text-slate-400 font-semibold">Atau</span>
            </div>
          </div>

          {/* Google Sign In option */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="w-full py-3 px-4 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>Lanjutkan dengan Google</span>
          </button>

          {/* Back to Home Link */}
          <div className="mt-6 text-center">
            <button
              onClick={() => setCurrentPage('beranda')}
              className="text-xs text-slate-500 hover:text-[#00635c] font-medium"
            >
              ← Kembali ke Beranda Company Profile
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
