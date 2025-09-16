import { useEffect } from 'react';

const MobileMenu = ({ isOpen, onClose, items }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      ></div>

      {/* Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-primary hover:text-secondary"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Logo */}
          <div className="mb-8 pt-4">
            <span className="text-2xl font-bold">
              <span className="text-secondary">#WEARE</span>
              <span className="text-primary">IFUPS</span>
            </span>
          </div>

          {/* Menu Items */}
          <nav className="space-y-4">
            {items.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-3 text-lg font-medium text-primary hover:text-secondary transition-colors"
                onClick={onClose}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Program Studi Informatika
              <br />
              Universitas Pancasakti Tegal
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;