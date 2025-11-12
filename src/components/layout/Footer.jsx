// src/components/layout/Footer.jsx

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="md:col-span-2">
            
            
            <div className="flex items-center space-x-3 mb-4"> 
              {/* Logo IFUPS */}
              <img 
                src="/Logo IFUPS.png" 
                alt="Logo IFUPS" 
                className="h-10 object-contain" 
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/40x40/003D8D/FECE00?text=IF"; }} 
              />
              
              <img 
                src="/WeAreIFUPS.svg" 
                alt="#WEARE IFUPS Logo" 
                className="h-10 object-contain" 
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/120x40/003D8D/FECE00?text=UPS"; }} 
              />
            </div>
            
            
            <p className="text-gray-300 mb-4 text-sm leading-relaxed"> 
              Program Studi Informatika Universitas Pancasakti Tegal - 
              Menghasilkan lulusan yang kompeten di bidang teknologi informasi.
            </p>
            <div className="flex space-x-4">
              {/* Facebook Icon */}
              <a href="https://www.facebook.com/share/1M51TP8HXT/" aria-label="Facebook" target="_blank" className="text-gray-300 hover:text-secondary transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* Instagram Icon */}
              <a href="https://www.instagram.com/ftikpancasakti?igsh=MW96emNrem01Yjd6Nw==" target="_blank" aria-label="Instagram" className="text-gray-300 hover:text-secondary transition-colors">
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.053 1.905.24 2.512.487.697.29 1.258.694 1.817 1.253.56.56.962 1.12 1.253 1.817.247.607.434 1.342.487 2.512.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.053 1.17-.24 1.905-.487 2.512a4.896 4.896 0 01-1.253 1.817 4.93 4.93 0 01-1.817 1.253c-.607.247-1.342.434-2.512.487-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.053-1.905-.24-2.512-.487a4.896 4.896 0 01-1.817-1.253 4.93 4.93 0 01-1.253-1.817c-.247-.607-.434-1.342-.487-2.512C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.053-1.17.24-1.905.487-2.512A4.896 4.896 0 014.537 3.38a4.93 4.93 0 011.817-1.253c.607-.247 1.342-.434 2.512-.487C9.916 2.175 10.296 2.163 12 2.163zm0 1.626c-3.142 0-3.488.013-4.717.068-1.077.049-1.68.226-2.146.417a3.27 3.27 0 00-1.218.81 3.27 3.27 0 00-.81 1.218c-.19.466-.368 1.07-.417 2.146-.054 1.23-.068 1.575-.068 4.717s.013 3.488.068 4.717c.049 1.077.226 1.68.417 2.146a3.27 3.27 0 00.81 1.218 3.27 3.27 0 001.218.81c.466.19 1.07.368 2.146.417 1.23.054 1.575.068 4.717.068s3.488-.013 4.717-.068c1.077-.049 1.68-.226 2.146-.417a3.27 3.27 0 001.218-.81 3.27 3.27 0 00.81-1.218c.19-.466.368-1.07.417-2.146.054-1.23.068-1.575.068-4.717s-.013-3.488-.068-4.717c-.049-1.077-.226-1.68-.417-2.146a3.27 3.27 0 00-.81-1.218 3.27 3.27 0 00-1.218-.81c-.466-.19-1.07-.368-2.146-.417C15.488 3.799 15.142 3.786 12 3.786zM12 7.188a4.812 4.812 0 100 9.624 4.812 4.812 0 000-9.624zm0 7.998a3.186 3.186 0 110-6.372 3.186 3.186 0 010 6.372zm5.003-7.872a1.146 1.146 0 100 2.292 1.146 1.146 0 000-2.292z"/>
                 </svg>
              </a>
              {/* YouTube Icon */}
              <a href="https://www.youtube.com/@ftikpancasakti3480" target="_blank" aria-label="YouTube" className="text-gray-300 hover:text-secondary transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Link Cepat */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Info Selanjutnya</h3>
            <ul className="space-y-2 text-sm"> 
              <li><a href="https://pmb.upstegal.ac.id/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-secondary transition-colors">PMB-UPS</a></li>
              <li><a href="https://upstegal.ac.id/"
              target="_blank" className="text-gray-300 hover:text-secondary transition-colors">UPS-Tegal</a></li>
              <li><a href="https://pmb.upstegal.ac.id/prodi"
              target="_blank" className="text-gray-300 hover:text-secondary transition-colors">Program Studi</a></li>
              <li><a href="https://lib.upstegal.ac.id/"
              target="_blank" className="text-gray-300 hover:text-secondary transition-colors">Perpustakan</a></li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <address className="not-italic text-gray-300 text-sm space-y-1"> 
              <p>Jl. Halmahera No.1</p>
              <p>Tegal, Jawa Tengah</p>
              <p className="mt-2">Email: <a href="mailto:info@ifups.tegal.ac.id" className="hover:text-secondary">info@ifups.tegal.ac.id</a></p>
              <p>Telp: <a href="tel:02831234567" className="hover:text-secondary">(0283) 1234567</a></p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400"> 
          <p>&copy; {new Date().getFullYear()} Prodi Informatika UPS Tegal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

