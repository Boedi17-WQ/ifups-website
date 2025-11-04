// --- VVV Impor hook untuk animasi VVV ---
import React, { useState, useEffect, useRef } from 'react';
// --- VVV Impor Link (menggantikan handleScrollTo) VVV ---
import { Link } from 'react-router-dom';
// --- ^^^ Akhir impor hook ^^^ ---

const About = () => {
  // --- VVV State & Ref untuk animasi fade-in VVV ---
  const [textVisible, setTextVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === textRef.current) {
              setTextVisible(true);
            } else if (entry.target === imageRef.current) {
              setImageVisible(true);
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // --- VVV PERBAIKAN STABILITAS useEffect VVV ---
    // Simpan referensi saat ini ke variabel lokal
    const currentTextRef = textRef.current;
    const currentImageRef = imageRef.current;

    if (currentTextRef) observer.observe(currentTextRef);
    if (currentImageRef) observer.observe(currentImageRef);

    return () => {
      // Gunakan variabel lokal di dalam cleanup
      if (currentTextRef) observer.unobserve(currentTextRef);
      if (currentImageRef) observer.unobserve(currentImageRef);
    };
    // --- ^^^ AKHIR PERBAIKAN ^^^ ---
  }, []);
 

  return (
    // --- Latar belakang diubah ke PUTIH untuk tampilan lebih bersih ---
    <section id="tentang" className="py-24 bg-gray-50 overflow-hidden"> 
      <div className="container mx-auto px-6 md:px-12">
        {/* Judul Section (Tetap sama) */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Tentang Kami
          </h2>
          <p className="text-xl text-gray-600">Program Studi Informatika</p>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
        </div>

        {/* --- VVV Grid Dua Kolom (TANPA CARD) VVV --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* --- Kolom Kiri - Gambar (Lebih bersih) --- */}
          <div
            ref={imageRef}
            className={`relative transition-all duration-700 ease-out ${
              imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
            }`}
          >
            {/* Menghapus bg-primary, hanya gambar dengan shadow */}
            <img
              src="/gedungUps2.jpg" 
              alt="Mahasiswa Informatika UPS Tegal"
              className="object-cover w-full h-full  shadow-2xl aspect-[4/3]" // Shadow lebih tebal
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x450/cccccc/ffffff?text=Gedung+UPS"; }}
            />
            {/* Menghapus elemen dekoratif kuning -z-10 */}
          </div>

          {/* --- Kolom Kanan - Teks (TANPA CARD) --- */}
          <div
            ref={textRef}
            className={`transition-all duration-700 ease-out delay-200 ${
              textVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
            }`}
          >
            {/* Menghapus bg-white card */}
            <h3 className="text-3xl font-bold text-primary mb-4">
              Selamat Datang di Prodi Informatika
            </h3>
            
            {/* Menggunakan aksen border kuning (secondary) */}
            <div className="border-l-4 border-secondary pl-6 space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                Program Studi Informatika Universitas Pancasakti Tegal merupakan salah satu program studi 
                unggulan yang berfokus pada pengembangan kompetensi di bidang teknologi informasi. 
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Kami menyediakan pendidikan berkualitas dengan kurikulum yang selalu diperbarui mengikuti 
                perkembangan industri dan kebutuhan dunia kerja.
              </p>
            </div>
            
            {/* --- VVV Tombol diubah menjadi <Link> VVV --- */}
            <Link 
              to="/about" // Mengarah ke halaman /about
              className="inline-block bg-secondary text-primary font-semibold px-8 py-3 rounded-ifups hover:bg-yellow-400 transition-colors mt-8"
            >
              Selengkapnya
            </Link>
            {/* --- ^^^ AKHIR PERUBAHAN TOMBOL ^^^ --- */}
          </div>
          
        </div>
        {/* --- ^^^ AKHIR GRID TANPA CARD ^^^ --- */}
        
      </div>
    </section>
  );
};

export default About;

