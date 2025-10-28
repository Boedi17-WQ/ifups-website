const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo dan Deskripsi */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold">
                <span className="text-secondary">#WEARE</span>
                <span className="ml-2">IFUPS</span>
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              Program Studi Informatika Universitas Pancasakti Tegal - 
              Menghasilkan lulusan yang kompeten di bidang teknologi informasi.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.48s.49-2.415 1.418-3.211c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.929.796 1.418 1.947 1.418 3.211s-.49 2.415-1.418 3.211c-.875.807-2.026 1.297-3.323 1.297zm8.062-5.234c0 .652-.052 1.246-.156 1.87h-.104c-1.037 0-1.996-.208-2.919-.625-.104-.052-.208-.104-.26-.104-.365.156-.73.365-1.141.521-.365.156-.73.26-1.141.26s-.781-.104-1.141-.26c-.365-.156-.73-.365-1.096-.521-.104 0-.208.052-.312.104-.923.417-1.882.625-2.919.625h-.104a11.52 11.52 0 0 1-.156-1.87v-1.35c0-.652.052-1.246.156-1.87h.104c1.037 0 1.996-.208 2.919-.625.104-.052.208-.104.312-.104.365.156.73.365 1.096.521.365.156.73.26 1.141.26s.781-.104 1.141-.26c.365-.156.73-.365 1.141-.521.104 0 .208.052.26.104.923.417 1.882.625 2.919.625h.104c.104.624.156 1.218.156 1.87v1.35z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <span className="sr-only">YouTube</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Link Cepat */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Link Cepat</h3>
            <ul className="space-y-2">
              <li><a href="https://pmb.upstegal.ac.id/" target="_blank" className="text-gray-300 hover:text-secondary transition-colors">PPKMB UPS</a></li>
              <li><a href="#tentang" className="text-gray-300 hover:text-secondary transition-colors">Tentang</a></li>
              <li><a href="#dosen" className="text-gray-300 hover:text-secondary transition-colors">Dosen</a></li>
              <li><a href="#berita" className="text-gray-300 hover:text-secondary transition-colors">Berita</a></li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <address className="not-italic text-gray-300">
              <p>Jl. Halmahera No.1</p>
              <p>Tegal, Jawa Tengah</p>
              <p className="mt-2">Email: info@ifups.tegal.ac.id</p>
              <p>Telp: (0283) 1234567</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Prodi Informatika UPS Tegal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;