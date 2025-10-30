import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';
import Maintenance from './pages/Maintenance';
import BeritaIndex from './pages/berita/BeritaIndex';
import BeritaDetail from './pages/berita/BeritaDetail';
import DosenIndex from './pages/dosen/DosenIndex';

// --- VVV IMPOR AlumniIndex DIAKTIFKAN VVV ---
import AlumniIndex from './pages/alumni/AlumniIndex'; // <-- 1. AKTIFKAN IMPOR INI
// --- ^^^ AKHIR IMPOR AlumniIndex ^^^ ---

import { appSettings } from './config/settings';

// Komponen AppContent (mengelola layout)
const AppContent = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  // --- VVV TAMBAHKAN /alumni KE fullScreenPages VVV ---
  const fullScreenPages = ['/berita', '/dosen', '/alumni']; // <-- 2. TAMBAHKAN /alumni DI SINI
  // --- ^^^ AKHIR PERUBAHAN ^^^ ---

  const isFullScreen = fullScreenPages.some(path => location.pathname.startsWith(path));

  const handleCollapseToggle = (collapsed) => {
    setIsCollapsed(collapsed);
  };

  const mainMarginClass = isFullScreen ? '' : (isCollapsed ? 'lg:ml-20' : 'lg:ml-64');

  return (
    <div className="App bg-gray-50 min-h-screen">
      <ScrollToTop />

      {/* Tampilkan Navbar jika bukan halaman full-screen */}
      {!isFullScreen && (
        <Navbar onToggleCollapse={handleCollapseToggle} />
      )}

      {/* Konten utama */}
      <main className={`transition-all duration-300 ${mainMarginClass}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/berita" element={<BeritaIndex />} />
          <Route path="/berita/:id" element={<BeritaDetail />} />
          <Route path="/dosen" element={<DosenIndex />} />

          {/* --- VVV RUTE AlumniIndex DIAKTIFKAN VVV --- */}
          <Route path="/alumni" element={<AlumniIndex />} /> {/* <-- 3. AKTIFKAN RUTE INI */}
          {/* --- ^^^ AKHIR RUTE AlumniIndex ^^^ --- */}

        </Routes>
        <Footer />
      </main>
    </div>
  );
}

// Komponen App utama
function App() {
  const isMaintenance = import.meta.env.VITE_MAINTENANCE_MODE === 'true' || appSettings.maintenanceMode;

  return (
    <Router>
      {isMaintenance ? (
        <Routes>
          <Route path="*" element={<Maintenance />} />
        </Routes>
      ) : (
        <AppContent />
      )}
    </Router>
  );
}

export default App;

