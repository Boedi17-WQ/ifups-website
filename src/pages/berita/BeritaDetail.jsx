import { useParams, Link } from "react-router-dom";
import { ArrowLeftCircle, Calendar, Tag } from "lucide-react"; // Ganti ikon Undo2 jadi ArrowLeftCircle
import React, { useState, useEffect } from "react";
import { allNews } from "../../data/beritaData";

const BeritaDetail = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const { id } = useParams();
  const articleIdToUse = id ? parseInt(id) : undefined;
  const article =
    allNews && articleIdToUse !== undefined
      ? allNews.find((item) => item.id === articleIdToUse)
      : undefined;

  if (!article) {
    return (
      <div className="py-24 bg-gradient-to-br from-gray-50 to-gray-200 min-h-screen flex flex-col items-center justify-center text-center px-6 relative">
        <Link
          to="/berita"
          aria-label="Kembali ke Daftar Berita"
          className="absolute top-10 left-10 flex items-center gap-2 text-primary bg-white border border-gray-200 px-4 py-2 rounded-full shadow hover:bg-gray-100 transition-all"
        >
          <ArrowLeftCircle size={22} />
          <span className="font-medium hidden sm:inline">Kembali</span>
        </Link>
        <h1 className="text-5xl font-bold text-primary mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-2">Berita tidak ditemukan.</p>
        <p className="text-sm text-gray-400">ID yang dicari: {id || "Tidak ada"}</p>
        <Link
          to="/berita"
          className="mt-6 px-6 py-2 bg-primary text-white rounded-full hover:bg-blue-800 transition-colors"
        >
          Kembali ke Semua Berita
        </Link>
      </div>
    );
  }

  return (
    <div className="py-24 bg-gradient-to-b from-gray-100 via-white to-gray-50 min-h-screen relative overflow-hidden">
      {/* Tombol Kembali */}
      <Link
        to="/berita"
        aria-label="Kembali ke Daftar Berita"
        className="fixed top-8 left-8 z-30 flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-md hover:shadow-lg hover:bg-gray-100 text-primary transition-all duration-300"
      >
        <ArrowLeftCircle size={22} className="text-secondary" />
        <span className="hidden sm:inline font-medium">Kembali</span>
      </Link>

      {/* Header Judul dan Metadata */}
      <div
        className={`container mx-auto px-4 max-w-4xl text-center mb-12 transition-all duration-700 ease-out ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
          {article.title}
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-gray-600">
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

      {/* Gambar Utama */}
      <div
        className={`container mx-auto max-w-5xl mb-12 transition-all duration-700 ease-out delay-100 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-[480px] object-cover transition-transform duration-700 hover:scale-105"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/1200x675/cccccc/ffffff?text=Gambar+Tidak+Ditemukan";
            }}
          />
        </div>
      </div>

      {/* Konten Artikel */}
      <article
        className={`container mx-auto px-6 md:px-12 max-w-4xl bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-700 ease-out delay-200 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div
          className="prose prose-lg max-w-none text-gray-800 leading-relaxed p-6 md:p-10 prose-headings:text-primary prose-a:text-blue-600 hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>

      {/* Footer Navigasi */}
      <div
        className={`container mx-auto mt-12 max-w-4xl flex justify-between items-center text-sm text-gray-500 px-6 md:px-0 transition-all duration-700 ease-out delay-300 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <span>© {new Date().getFullYear()} IF-UPS News Portal</span>
        <Link
          to="/berita"
          className="flex items-center gap-1 hover:text-secondary transition-colors"
        >
          <ArrowLeftCircle size={16} />
          Kembali ke Berita
        </Link>
      </div>
    </div>
  );
};

export default BeritaDetail;
