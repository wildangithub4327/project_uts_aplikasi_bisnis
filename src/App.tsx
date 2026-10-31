import React, { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Navbar, PageId } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Activities } from './pages/Activities';
import { Education } from './pages/Education';
import { Partnership } from './pages/Partnership';
import { Contact } from './pages/Contact';
import { Auth } from './pages/Auth';
import { Portal } from './pages/Portal';
import { doc, getDocFromServer } from 'firebase/firestore';
import { db } from './firebase';

const AppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageId>('beranda');
  const [authNotice, setAuthNotice] = useState<string | null>(null);
  const { user } = useAuth();

  // Test Firestore connection on boot as required by skill
  useEffect(() => {
    async function testConnection() {
      try {
        await getDocFromServer(doc(db, 'test', 'connection'));
      } catch (error) {
        if (error instanceof Error && error.message.includes('the client is offline')) {
          console.warn('Firebase connection check: offline status notice');
        }
      }
    }
    testConnection();
  }, []);

  // Sync hash routing so users can refresh or share links like #kegiatan or #portal
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'beranda', 
        'tentang', 
        'kegiatan', 
        'edukasi', 
        'kemitraan', 
        'kontak', 
        'login', 
        'register', 
        'portal'
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update hash when page changes
  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-[#00635c]/20 selection:text-[#00635c]">
      {/* Global Navbar */}
      <Navbar currentPage={currentPage} setCurrentPage={navigateTo} />

      {/* Main Content View */}
      <main className="flex-1">
        {currentPage === 'beranda' && <Home setCurrentPage={navigateTo} />}
        {currentPage === 'tentang' && <About setCurrentPage={navigateTo} />}
        {currentPage === 'kegiatan' && <Activities setCurrentPage={navigateTo} />}
        {currentPage === 'edukasi' && <Education setCurrentPage={navigateTo} />}
        {currentPage === 'kemitraan' && <Partnership setCurrentPage={navigateTo} />}
        {currentPage === 'kontak' && <Contact setCurrentPage={navigateTo} />}
        {currentPage === 'login' && (
          <Auth 
            initialMode="login" 
            setCurrentPage={navigateTo} 
            authNotice={authNotice} 
          />
        )}
        {currentPage === 'register' && (
          <Auth 
            initialMode="register" 
            setCurrentPage={navigateTo} 
            authNotice={authNotice} 
          />
        )}
        {currentPage === 'portal' && (
          <Portal 
            setCurrentPage={navigateTo} 
            setAuthNotice={setAuthNotice} 
          />
        )}
      </main>

      {/* Global Footer (shown on all public pages, can also be shown on portal) */}
      <Footer setCurrentPage={navigateTo} />
    </div>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
