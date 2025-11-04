import { useParams, Link } from "react-router-dom";
// --- VVV Ikon ArrowRight ditambahkan untuk "Berita Terkait" VVV ---
import { ArrowLeftCircle, Calendar, Tag, ArrowRight } from "lucide-react"; 
import React, { useState, useEffect } from "react";
import { allNews } from "../../data/beritaData";

const BeritaDetail = () => {
  // --- VVV 'id' dipindahkan ke atas untuk digunakan di useEffect VVV ---
  const { id } = useParams();
  
  const [isLoaded, setIsLoaded] = useState(false);

  // --- VVV PERBAIKAN BUG ANIMASI VVV ---
  useEffect(() => {
    // 1. Reset 'isLoaded' setiap kali ID berubah (agar animasi bisa berjalan lagi)
    setIsLoaded(false); 
    // 2. Set timer baru
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, [id]); // <-- 3. 'id' ditambahkan sebagai dependency
  // --- ^^^ AKHIR PERBAIKAN ANIMASI ^^^ ---

  const articleIdToUse = id ? parseInt(id) : undefined;
  const article =
    allNews && articleIdToUse !== undefined
      ? allNews.find((item) => item.id === articleIdToUse)
      : undefined;

  // --- VVV Data untuk "Berita Terkait" VVV ---
  const relatedNews = allNews 
    ? allNews.filter(item => item.id !== articleIdToUse).slice(0, 3) // Ambil 3 berita lain
    : [];
  // --- ^^^ Akhir Data Terkait ^^^ ---

  if (!article) {
    // ... (Halaman 404 Anda tetap sama, saya singkat di sini)
    return (
      <div className="py-24 bg-gradient-to-br from-gray-50 to-gray-200 min-h-screen flex flex-col items-center justify-center text-center px-6 relative">
        <Link
          to="/berita"
          aria-label="Kembali ke Daftar Berita"
          className="absolute top-10 left-10 flex items-center gap-2 text-primary bg-white border border-gray-200 px-4 py-2  shadow hover:bg-gray-100 transition-all"
        >
          <ArrowLeftCircle size={22} />
          <span className="font-medium hidden sm:inline">Kembali</span>
        </Link>
        <h1 className="text-5xl font-bold text-primary mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-2">Berita tidak ditemukan.</p>
        <p className="text-sm text-gray-400">ID yang dicari: {id || "Tidak ada"}</p>
        <Link
          to="/berita"
          className="mt-6 px-6 py-2 bg-primary text-white hover:bg-blue-800 transition-colors"
        >
          Kembali ke Semua Berita
        </Link>
      </div>
    );
  }

  return (
    // --- VVV Latar belakang diubah menjadi 'bg-white' VVV ---
    <div className="py-24 bg-white min-h-screen relative overflow-hidden">
      {/* Tombol Kembali (Tetap floating) */}
      <Link
        to="/berita"
        aria-label="Kembali ke Daftar Berita"
        className="fixed top-8 left-8 z-30 flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-md hover:shadow-lg hover:bg-gray-100 text-primary transition-all duration-300"
      >
        <ArrowLeftCircle size={22} className="text-secondary" />
        <span className="hidden sm:inline font-medium">Kembali</span>
      </Link>

      {/* --- VVV LAYOUT DIUBAH MENJADI 2 KOLOM (KONTEN + SIDEBAR) VVV --- */}
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* --- 1. KOLOM KIRI (KONTEN UTAMA) --- */}
          <div className="lg:col-span-8">
            {/* Header Judul dan Metadata */}
            <div
              className={`text-center lg:text-left mb-8 transition-all duration-700 ease-out ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                {article.title}
              </h1>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-x-6 gap-y-3 text-gray-600">
                <div className="flex items-center gap-2">
                  <Tag size={18} className="text-secondary" />
                  <span className="font-medium">{article.category}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-secondary" />
                  <time>{article.date}</time>
                </div>
              </div>
            </div>

            {/* Gambar Utama (Tanpa Card) */}
            <div
              className={`mb-8 transition-all duration-700 ease-out delay-100 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="overflow-hidden  shadow-lg">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-auto aspect-video object-cover" // h-[480px] diubah
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/1200x675/cccccc/ffffff?text=Gambar+Tidak+Ditemukan";
                  }}
                />
              </div>
            </div>

            {/* Konten Artikel (Tanpa Card) */}
            <article
              className={`transition-all duration-700 ease-out delay-200 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div
                className="prose prose-lg max-w-none text-gray-800 leading-relaxed prose-headings:text-primary prose-a:text-blue-600 hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </article>
          </div>
          {/* --- AKHIR KOLOM KIRI --- */}


          {/* --- 2. KOLOM KANAN (SIDEBAR BERITA TERKAIT) --- */}
          <div 
            className={`lg:col-span-4 relative transition-all duration-700 ease-out delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {/* Dibuat sticky agar tetap terlihat saat scroll */}
            <div className="sticky top-24"> 
              <h2 className="text-2xl font-bold text-primary mb-6">Berita Terkait</h2>
              <div className="space-y-6">
                {relatedNews.map((related) => (
                  <Link 
                    to={`/berita/${related.id}`} 
                    key={related.id}
                    className="flex items-center gap-4 group bg-gray-50/50 p-3  hover:bg-gray-100 transition-colors"
                  >
                    <img
                      src={related.image}
                      alt={related.title}
                      className="w-20 h-20 object-cover  flex-shrink-0"
                      onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/80x80/cccccc/ffffff?text=Img"; }}
                    />
                    <div>
                      <span className="text-xs text-gray-500">{related.date}</span>
                      <h3 className="font-semibold text-primary mt-1 leading-tight line-clamp-3 group-hover:text-secondary transition-colors">
                        {related.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* --- AKHIR KOLOM KANAN --- */}

        </div>
      </div>
      {/* --- ^^^ AKHIR LAYOUT 2 KOLOM ^^^ --- */}
      

      {/* Footer Navigasi (Dihapus, karena tombol Kembali sudah ada di atas) */}
      
    </div>
  );
};

export default BeritaDetail;

