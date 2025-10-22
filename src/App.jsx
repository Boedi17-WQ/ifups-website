import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/layout/Navbar'; 
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';
import Maintenance from './pages/Maintenance';
import { appSettings } from './config/settings';

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  // Cek maintenance mode
  const isMaintenance = import.meta.env.VITE_MAINTENANCE_MODE === 'true' || appSettings.maintenanceMode;

  const handleCollapseToggle = (collapsed) => {
    setIsCollapsed(collapsed);
  };
  
  const mainMarginClass = isCollapsed ? 'lg:ml-20' : 'lg:ml-64';

  if (isMaintenance) {
    return (
      <Router>
        <Maintenance />
      </Router>
    );
  }

  return (
    <Router>
      <div className="App bg-gray-50 min-h-screen"> 
        {/* Scroll otomatis ke atas saat pindah halaman */}
        <ScrollToTop />
        
        {/* Sidebar tetap & bisa collapse */}
        <Navbar onToggleCollapse={handleCollapseToggle} /> 
        
        {/* Konten utama */}
        {/* 🧩 Dihapus pt-4 agar celah putih di atas hilang */}
        <main className={`transition-all duration-300 ${mainMarginClass}`}> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/maintenance" element={<Maintenance />} />
          </Routes>

          {/* Footer */}
          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;
