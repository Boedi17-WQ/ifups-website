import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react"; // Pastikan Lucide diimpor jika belum
// --- VVV IMPORT LINK DITAMBAHKAN VVV ---
import { Link } from "react-router-dom";
// --- ^^^ AKHIR IMPORT ^^^ ---

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [direction, setDirection] = useState(1); // 1 = maju, -1 = mundur

  const images = ["/gedungUps1.jpg", "/gedungUps2.jpg", "/gedungUps3.jpg"];

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setCurrentImage((prev) => {
        if (prev === images.length - 1) {
          setDirection(-1);
          return prev - 1;
        } else if (prev === 0) {
          setDirection(1);
          return prev + 1;
        } else {
          return prev + direction;
        }
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [direction, images.length]);

  // --- VVV FUNGSI scrollToSection DIHAPUS KARENA DIGANTI <Link> VVV ---
  // const scrollToSection = (sectionId) => {
  //   // Hapus tanda '#' jika ada
  //   const id = sectionId.startsWith('#') ? sectionId.substring(1) : sectionId;
  //   const sectionElement = document.getElementById(id);
  //   if (sectionElement) {
  //     sectionElement.scrollIntoView({ behavior: 'smooth' });
  //     // Update URL hash jika diperlukan (opsional)
  //     window.history.pushState(null, '', sectionId); 
  //   } else {
  //     console.warn(`Section with ID "${id}" not found.`);
  //   }
  // };
  // --- ^^^ AKHIR FUNGSI SCROLL ^^^ ---

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Wrapper untuk slider */}
      <div
        className="flex h-full w-full transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentImage * 100}%)`,
        }}
      >
        {images.map((src, index) => (
          <div key={index} className="flex-shrink-0 w-full h-full">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/1920x1080/003D8D/FFFFFF?text=Gedung+UPS+${index+1}`; }} // Fallback
            />
          </div>
        ))}
      </div>

      {/* Lapisan gradasi biru */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 via-indigo-600/40 to-blue-900/60 bg-[size:200%_auto] animate-gradient-pan"></div>
      
      {/* Overlay hitam transparan agar teks kontras */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Teks hero */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-10">
        <h1
          className={`text-4xl md:text-6xl font-bold leading-tight mb-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Selamat Datang di <br />
          <span className="text-yellow-400">Program Studi Informatika</span>
        </h1>

        <div
          className={`w-24 h-1 bg-yellow-400 mx-auto my-6 transform transition-transform duration-1000 delay-300 ${
            isVisible ? "scale-x-100" : "scale-x-0"
          }`}
        ></div>

        <h2
          className={`text-2xl md:text-3xl font-semibold transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          UNIVERSITAS PANCASAKTI TEGAL
        </h2>

        {/* Tombol CTA */}
        <div
          className={`mt-12 flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          
            <a
              href="https://pmb.upstegal.ac.id/"
              target="_blank" // Buka di tab baru
              rel="noopener noreferrer" // Keamanan untuk target blank
              // Semua kelas styling diterapkan di sini
              className="bg-yellow-400 text-primary font-bold px-8 py-4 rounded-ifups hover:bg-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-lg animate-pulse-slow inline-block"
            >
              Daftar Sekarang
            </a>
          
          {/* --- VVV <button> DIUBAH MENJADI <Link> VVV --- */}
          <Link 
            to="/about" // Mengarah ke halaman /about (AboutIndex)
            className="border-2 border-white text-white font-bold px-8 py-4 rounded-ifups hover:bg-white hover:text-primary transform hover:scale-105 transition-all duration-300"
          >
            Pelajari Lebih Lanjut
          </Link>
          {/* --- ^^^ AKHIR PERUBAHAN TOMBOL ^^^ --- */}
        </div>

        {/* Indikator Scroll */}
        <div
          className={`absolute bottom-6 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-[1200ms] ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* --- VVV <button> diubah menjadi <Link> VVV --- */}
          <Link
            to="/about" // Arahkan ke halaman /about
            aria-label="Pelajari Lebih Lanjut"
            className="text-white animate-bounce-slow"
          >
            <ChevronDown size={40} />
          </Link>
          {/* --- ^^^ AKHIR PERUBAHAN LINK ^^^ --- */}
        </div>
        
      </div>
    </section>
  );
};

export default Hero;

