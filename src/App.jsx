import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';
import Maintenance from './pages/Maintenance';

// Impor Halaman Berita
import BeritaIndex from './pages/berita/BeritaIndex';
import BeritaDetail from './pages/berita/BeritaDetail';

// Impor Halaman Dosen
import DosenIndex from './pages/dosen/DosenIndex';

// Impor Halaman Alumni
import AlumniIndex from './pages/alumni/AlumniIndex';
import AlumniDetail from './pages/alumni/AlumniDetail';

// Impor Halaman Tentang Kami
import AboutIndex from './pages/about/AboutIndex';

import { appSettings } from './config/settings';

// Komponen AppContent (mengelola layout)
const AppContent = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  // Daftar halaman full-screen (tanpa sidebar)
  const fullScreenPages = ['/berita', '/dosen', '/alumni', '/about'];
  
  // Cek apakah URL saat ini dimulai dengan salah satu path di atas
  const isFullScreen = fullScreenPages.some(path => location.pathname.startsWith(path));

  const handleCollapseToggle = (collapsed) => {
    setIsCollapsed(collapsed);
  };
  
  // Jika full-screen, margin Class = '', jika tidak, gunakan logika sidebar
  const mainMarginClass = isFullScreen ? '' : (isCollapsed ? 'lg:ml-20' : 'lg:ml-64');

  return (
    <div className="App bg-gray-50 min-h-screen"> 
      <ScrollToTop />
      
      {/* Tampilkan Navbar jika bukan halaman full-screen */}
      {!isFullScreen && (
        <Navbar onToggleCollapse={handleCollapseToggle} /> 
      )}
      
      <main className={`transition-all duration-300 ${mainMarginClass}`}> 
        <Routes>
          {/* Halaman Utama */}
          <Route path="/" element={<Home />} />
          
          {/* Halaman Maintenance */}
          <Route path="/maintenance" element={<Maintenance />} />
          
          {/* Rute Berita */}
          <Route path="/berita" element={<BeritaIndex />} />
          <Route path="/berita/:id" element={<BeritaDetail />} /> 
          
          {/* Rute Dosen */}
          <Route path="/dosen" element={<DosenIndex />} />

          {/* Rute Alumni */}
          <Route path="/alumni" element={<AlumniIndex />} />
          <Route path="/alumni/:id" element={<AlumniDetail />} />
          
          {/* Rute Tentang Kami */}
          <Route path="/about" element={<AboutIndex />} />

        </Routes>
        <Footer />
      </main>
    </div>
  );
}

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