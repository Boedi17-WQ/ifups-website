import { useState, useEffect } from 'react';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Tentang', href: '#tentang' },
    { name: 'Organisasi', href: '#organisasi' },
    { name: 'Dosen', href: '#dosen' },
    { name: 'Alumni', href: '#alumni' },
    { name: 'Berita', href: '#berita' },
    { name: 'Galeri', href: '#galeri' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold">
                <span className="text-secondary">#WEARE</span>
                <span className="text-primary">IFUPS</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-colors ${
                    isScrolled
                      ? 'text-primary hover:text-secondary'
                      : 'text-white hover:text-secondary'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${
                  isScrolled ? 'bg-primary' : 'bg-white'
                } ${isMobileMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-current transition-opacity duration-300 ${
                  isScrolled ? 'bg-primary' : 'bg-white'
                } ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${
                  isScrolled ? 'bg-primary' : 'bg-white'
                } ${isMobileMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)}
        items={navItems}
      />
    </>
  );
};

export default Navbar;