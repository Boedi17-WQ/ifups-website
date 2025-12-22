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
import DosenDetail from './pages/dosen/DosenDetail';

import AlumniIndex from './pages/alumni/AlumniIndex';
import AlumniDetail from './pages/alumni/AlumniDetail';

import GaleriIndex from './pages/galeri/GaleriIndex';


import AboutIndex from './pages/about/AboutIndex';
import { appSettings } from './config/settings';

const AppContent = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  // Daftar halaman yang tampil full-screen (tanpa sidebar)
  const fullScreenPages = ['/berita', '/dosen', '/alumni', '/about', '/galeri'];
  
  const isFullScreen = fullScreenPages.some(path => location.pathname.startsWith(path));

  const handleCollapseToggle = (collapsed) => {
    setIsCollapsed(collapsed);
  };
  
  const mainMarginClass = isFullScreen ? '' : (isCollapsed ? 'lg:ml-20' : 'lg:ml-64');

  return (
    <div className="App bg-gray-50 min-h-screen"> 
      <ScrollToTop />
      
      {!isFullScreen && (
        <Navbar onToggleCollapse={handleCollapseToggle} /> 
      )}
      
      <main className={`transition-all duration-300 ${mainMarginClass}`}> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/maintenance" element={<Maintenance />} />
          
          {/* Rute Berita */}
          <Route path="/berita" element={<BeritaIndex />} />
          <Route path="/berita/:id" element={<BeritaDetail />} /> 
          
          {/* Rute Dosen */}
          <Route path="/dosen" element={<DosenIndex />} />
          <Route path="/dosen/:id" element={<DosenDetail />} />

          {/* Rute Alumni */}
          <Route path="/alumni" element={<AlumniIndex />} />
          <Route path="/alumni/:id" element={<AlumniDetail />} />
          
          {/* Rute Galeri */}
          <Route path="/galeri" element={<GaleriIndex />} />
          
          
          {/* Rute Tentang Kami */}
          <Route path="/about" element={<AboutIndex />} />
          
          <Route path="*" element={<div className="p-10 text-center">Halaman tidak ditemukan</div>} />
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
      {isMaintenance ? <Routes><Route path="*" element={<Maintenance />} /></Routes> : <AppContent />}
    </Router>
  );
}

export default App;