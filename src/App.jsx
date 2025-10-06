import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';
import Maintenance from './pages/Maintenance';
import { appSettings } from './config/settings';

function App() {
  // Cek maintenance mode dari environment atau config
  const isMaintenance = import.meta.env.VITE_MAINTENANCE_MODE === 'true' || appSettings.maintenanceMode;

  if (isMaintenance) {
    return (
      <Router>
        <Maintenance />
      </Router>
    );
  }

  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/maintenance" element={<Maintenance />} />
          {/* Tambahkan route lainnya di sini */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;