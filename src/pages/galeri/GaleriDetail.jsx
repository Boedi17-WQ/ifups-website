import { useParams, Link } from "react-router-dom";
import { ArrowLeftCircle, Calendar, Tag, Share2 } from "lucide-react";
import { allGallery } from "../../data/galeriData";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const GaleriDetail = () => {
  const { id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Efek transisi saat ID berubah
  useEffect(() => {
    setIsLoaded(false);
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, [id]);

  const item = allGallery.find((g) => g.id === parseInt(id));

  // Ambil 6 foto lain untuk "Galeri Lainnya" (kecuali foto saat ini)
  const otherGalleryItems = allGallery.filter(g => g.id !== parseInt(id)).slice(0, 6);

  if (!item) {
    return (
      <div className="py-24 bg-white min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold text-primary mb-4">Foto Tidak Ditemukan</h1>
        <Link to="/galeri" className="text-secondary underline">Kembali ke Galeri</Link>
      </div>
    );
  }

  return (
    <div className="py-24 bg-white min-h-screen relative overflow-hidden"> 
      
      {/* Tombol Kembali (Fixed, Style Modern) */}
      <Link
        to="/galeri"
        className="fixed top-8 left-8 z-30 flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md border border-gray-200 rounded-full shadow-lg hover:shadow-xl hover:bg-white text-primary transition-all duration-300 group"
      >
        <ArrowLeftCircle size={24} className="group-hover:-translate-x-1 transition-transform" />
        <span className="hidden sm:inline font-medium">Kembali</span>
      </Link>

      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-10"
        >
          
          {/* --- FOTO UTAMA (FULL WIDTH, CLEAN) --- */}
          <div className="w-full aspect-video md:aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl bg-gray-100 relative group">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
              onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/1200x800/eeeeee/999999?text=Foto+${item.id}`; }}
            />
            {/* Overlay Gradasi Halus di Bawah (Opsional, untuk estetika) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60"></div>
          </div>

          {/* --- AREA KONTEN (JUDUL & DESKRIPSI) --- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Kolom Kiri: Judul Besar & Metadata */}
            <div className="lg:col-span-8 space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold text-primary leading-tight">
                {item.title}
              </h1>
              
              {/* Metadata Bar (Clean) */}
              <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm border-b border-gray-200 pb-6">
                <div className="flex items-center gap-2">
                  <Tag size={18} className="text-secondary" />
                  <span className="font-semibold text-gray-700 uppercase tracking-wider">{item.category}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-secondary" />
                  <span>{item.date}</span>
                </div>
              </div>

              {/* Deskripsi Artikel */}
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p>{item.description || "Tidak ada deskripsi untuk foto ini."}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>

            {/* Kolom Kanan: Sidebar Info / Share (Sticky) */}
            <div className="lg:col-span-4 space-y-8">
              {/* Box Info */}
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 sticky top-24">
                <h3 className="text-lg font-bold text-primary mb-4">Tentang Kegiatan</h3>
                <p className="text-sm text-gray-600 mb-6">
                  Dokumentasi kegiatan ini merupakan bagian dari arsip digital Program Studi Informatika Universitas Pancasakti Tegal.
                </p>
                
                <button className="w-full flex items-center justify-center gap-2 bg-primary text-white font-semibold py-3 rounded-xl hover:bg-blue-900 transition-colors shadow-md hover:shadow-lg transform active:scale-95 duration-200">
                  <Share2 size={18} />
                  Bagikan Momen Ini
                </button>
              </div>
            </div>

          </div>

          {/* --- BAGIAN GALERI LAINNYA (Grid Modern) --- */}
          <div className="pt-12 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-primary mb-8">Jelajahi Galeri Lainnya</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {otherGalleryItems.map((galleryItem) => (
                <Link 
                  to={`/galeri/${galleryItem.id}`} 
                  key={galleryItem.id}
                  className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer bg-gray-200"
                >
                  <img
                    src={galleryItem.image}
                    alt={galleryItem.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/400x400/eeeeee/999999?text=Foto`; }}
                  />
                  {/* Overlay Hover */}
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 text-center">
                    <p className="text-sm text-white font-semibold line-clamp-2">
                      {galleryItem.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          {/* --- ^^^ AKHIR BAGIAN GALERI LAINNYA ^^^ --- */}

        </motion.div>
      </div>
    </div>
  );
};

export default GaleriDetail;