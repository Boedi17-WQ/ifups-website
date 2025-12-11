import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';

// --- Impor Halaman ---
import Home from './pages/Home';
import Maintenance from './pages/Maintenance';

// Berita
import BeritaIndex from './pages/berita/BeritaIndex';
import BeritaDetail from './pages/berita/BeritaDetail';

// Dosen
import DosenIndex from './pages/dosen/DosenIndex';
import DosenDetail from './pages/dosen/DosenDetail'; // <-- Pastikan file ini ada

// Alumni
import AlumniIndex from './pages/alumni/AlumniIndex';
import AlumniDetail from './pages/alumni/AlumniDetail';

// About
import AboutIndex from './pages/about/AboutIndex';

import { appSettings } from './config/settings';

// Komponen AppContent (mengelola layout & logika full-screen)
const AppContent = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  // Daftar halaman yang tampil full-screen (tanpa sidebar)
  // Logika startsWith akan menangani sub-rute seperti /berita/1, /dosen/2, dll.
  const fullScreenPages = ['/berita', '/dosen', '/alumni', '/about'];
  
  const isFullScreen = fullScreenPages.some(path => location.pathname.startsWith(path));

  const handleCollapseToggle = (collapsed) => {
    setIsCollapsed(collapsed);
  };
  
  // Jika full-screen, margin Class = '', jika tidak, gunakan logika sidebar
  const mainMarginClass = isFullScreen ? '' : (isCollapsed ? 'lg:ml-20' : 'lg:ml-64');

  return (
    <div className="App bg-gray-50 min-h-screen"> 
      <ScrollToTop />
      
      {/* Tampilkan Navbar (Sidebar) HANYA jika bukan halaman full-screen */}
      {!isFullScreen && (
        <Navbar onToggleCollapse={handleCollapseToggle} /> 
      )}
      
      <main className={`transition-all duration-300 ${mainMarginClass}`}> 
        <Routes>
          {/* --- Halaman Utama --- */}
          <Route path="/" element={<Home />} />
          
          {/* --- Maintenance --- */}
          <Route path="/maintenance" element={<Maintenance />} />
          
          {/* --- Modul Berita --- */}
          <Route path="/berita" element={<BeritaIndex />} />
          <Route path="/berita/:id" element={<BeritaDetail />} /> 
          
          {/* --- Modul Dosen --- */}
          <Route path="/dosen" element={<DosenIndex />} />
          <Route path="/dosen/:id" element={<DosenDetail />} />

          {/* --- Modul Alumni --- */}
          <Route path="/alumni" element={<AlumniIndex />} />
          <Route path="/alumni/:id" element={<AlumniDetail />} />
          
          {/* --- Modul Tentang Kami --- */}
          <Route path="/about" element={<AboutIndex />} />

          {/* Fallback untuk 404 (Opsional) */}
          <Route path="*" element={<div className="p-10 text-center">Halaman tidak ditemukan</div>} />

        </Routes>
        
        {/* Footer selalu tampil di bagian bawah konten */}
        <Footer />
      </main>
    </div>
  );
}

function App() {
  // Cek mode maintenance dari .env atau settings
  const isMaintenance = import.meta.env.VITE_MAINTENANCE_MODE === 'true' || appSettings.maintenanceMode;

  return (
    <Router>
      {isMaintenance ? (
        // Jika maintenance aktif, hanya tampilkan halaman Maintenance
        <Routes>
          <Route path="*" element={<Maintenance />} />
        </Routes>
      ) : (
        // Jika tidak, tampilkan konten aplikasi normal
        <AppContent />
      )}
    </Router>
  );
}

export default App;