import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';
import Maintenance from './pages/Maintenance';
import BeritaIndex from './pages/berita/BeritaIndex';
// --- VVV IMPOR BERITA DETAIL DIAKTIFKAN VVV ---
import BeritaDetail from './pages/berita/BeritaDetail'; // <-- 1. AKTIFKAN IMPOR INI
// import DosenIndex from './pages/dosen/DosenIndex';

import { appSettings } from './config/settings';

// Komponen AppContent (mengelola layout)
const AppContent = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  // Daftar halaman full-screen
  const fullScreenPages = ['/berita', '/dosen'];
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
          {/* --- VVV RUTE BERITA DETAIL DIAKTIFKAN VVV --- */}
          <Route path="/berita/:id" element={<BeritaDetail />} /> {/* <-- 2. AKTIFKAN RUTE INI */}
          {/* <Route path="/dosen" element={<DosenIndex />} /> */}
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

