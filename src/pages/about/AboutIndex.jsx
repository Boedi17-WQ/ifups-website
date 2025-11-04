import { Link } from "react-router-dom";
// --- VVV IMPOR IKON DIPERBARUI VVV ---
import { ArrowLeftCircle, Cpu, ShieldCheck, GraduationCap } from "lucide-react";
// --- ^^^ AKHIR IMPOR IKON ^^^ ---
import React, { useState, useEffect, useRef } from 'react';

// --- VVV KOMPONEN HELPER DIPERBARUI VVV ---
// Komponen ini sekarang 'bodoh' (dumb component)
// Animasinya dikontrol oleh prop 'isVisible' dari induk
const FeaturePoint = ({ icon, title, delay, isVisible }) => {
  return (
    <div 
      className={`flex items-start gap-4 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex-shrink-0 w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h4 className="text-xl font-semibold text-primary mb-1">{title}</h4>
        <p className="text-gray-600">Deskripsi singkat tentang poin keunggulan ini untuk meyakinkan pengunjung.</p>
      </div>
    </div>
  );
};
// --- ^^^ AKHIR KOMPONEN HELPER ^^^ ---

// --- VVV DATA KEUNGGULAN (dari file Anda) VVV ---
const keyFeatures = [
  { icon: Cpu, title: "Fokus Kurikulum AI & IoT", delay: 300 },
  { icon: ShieldCheck, title: "Akreditasi", delay: 450 },
  { icon: GraduationCap, title: "Profil Lulusan Siap Kerja", delay: 600 },
];
// --- ^^^ AKHIR DATA KEUNGGULAN ^^^ ---


const AboutIndex = () => {
  // --- VVV LOGIKA ANIMASI DIPINDANHKAN KE INDUK VVV ---
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    // Pola cleanup useEffect yang aman
    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  // --- ^^^ AKHIR LOGIKA ANIMASI ^^^ ---

  return (
    // 'ref' ditambahkan di sini untuk mengamati seluruh section
    <div ref={sectionRef} className="py-24 bg-white min-h-screen relative overflow-hidden">
      
      {/* --- VVV TOMBOL KEMBALI DIGANTI SESUAI PERMINTAAN VVV --- */}
      <Link
        to="/"
        aria-label="Kembali ke Halaman Utama"
        className="absolute top-12 left-10 md:left-12 z-20 flex items-center gap-2 text-primary bg-white shadow-md px-4 py-2 rounded-full hover:bg-gray-100 hover:shadow-lg hover:text-secondary transition-all"
      >
        <ArrowLeftCircle size={24} className="text-secondary" />
        <span className="hidden sm:inline font-medium">Kembali</span>
      </Link>
      {/* --- ^^^ AKHIR PERUBAHAN TOMBOL ^^^ --- */}

      <div className="container mx-auto max-w-5xl px-4">
        
        {/* --- Header (Animasi ditambahkan) --- */}
        <div className={`text-center mb-12 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Tentang Informatika UPS
          </h1>
          <p className="text-xl text-gray-600">
            Unggul, Inovatif, dan Berwawasan Global di Bidang AI & IoT.
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
        </div>

        {/* --- Gambar Utama (Animasi ditambahkan, rounded dihapus) --- */}
        <div 
          className={`overflow-hidden shadow-xl mb-12 transition-all duration-700 ease-out delay-100 ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-5 scale-95'
          }`}
        >
          <img
            src="/gedungUps2.jpg" 
            alt="Kampus Universitas Pancasakti Tegal"
            className="w-full h-auto aspect-video object-cover" // rounded-2xl dihapus
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/1200x675/cccccc/ffffff?text=Gedung+UPS"; }}
          />
        </div>

        {/* --- Konten Artikel (Animasi ditambahkan) --- */}
        <article 
          className={`prose prose-lg max-w-none text-gray-800 leading-relaxed prose-headings:text-primary prose-a:text-blue-600 hover:prose-a:underline transition-all duration-700 ease-out delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          
          <h2>Sejarah Singkat & Komitmen</h2>
          <p>
            Program Studi Informatika di Universitas Pancasakti Tegal (UPS) didirikan untuk menjawab tantangan era digital dan kebutuhan industri akan talenta teknologi yang kompeten. Sejak awal berdirinya, kami berkomitmen untuk menyediakan pendidikan berkualitas tinggi yang tidak hanya fokus pada teori, tetapi juga pada penerapan praktis di dunia nyata.
          </p>
          <p>
            Dengan Visi kami untuk menjadi program studi unggul di bidang <strong>AI (Artificial Intelligence) dan IoT (Internet of Things)</strong> pada tahun 2028, kami terus memperbarui kurikulum, meningkatkan fasilitas, dan membangun kemitraan strategis.
          </p>

          <h2 className="mt-12">Keunggulan Kami</h2>
          <p>
            Kami merancang program kami untuk memastikan lulusan siap bersaing dan menjadi pemimpin di industri teknologi.
          </p>
        </article>
        
        {/* --- Poin Keunggulan (Animasi di-pass dari induk) --- */}
        <div className="max-w-none space-y-8 my-10">
          {keyFeatures.map((feature) => (
            <FeaturePoint 
              key={feature.title}
              icon={<feature.icon size={24} className="text-primary" />} 
              title={feature.title}
              delay={feature.delay}
              isVisible={isVisible} // <-- Prop 'isVisible' di-pass
            />
          ))}
        </div>

         <article 
           className={`prose prose-lg max-w-none text-gray-800 leading-relaxed prose-headings:text-primary prose-a:text-blue-600 hover:prose-a:underline transition-all duration-700 ease-out ${
             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
           }`}
           style={{ transitionDelay: `${keyFeatures[keyFeatures.length - 1].delay + 150}ms` }} // Delay setelah item terakhir
         >
           <h2>Bergabunglah Dengan Kami</h2>
           <p>
             Kami mengundang Anda untuk menjadi bagian dari komunitas pembelajar yang dinamis dan inovatif. Jelajahi bagaimana Program Studi Informatika UPS Tegal dapat menjadi langkah awal kesuksesan karir Anda di dunia teknologi.
           </p>
         </article>
      </div>
    </div>
  );
};

export default AboutIndex;

