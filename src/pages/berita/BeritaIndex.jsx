import { Link } from "react-router-dom";
import { Undo2, Search } from "lucide-react";
import { useState } from "react";
// Impor data dari file terpisah
import { allNews } from "../../data/beritaData";

// Ambil Kategori Unik
const categories = ["Semua", ...new Set(allNews.map(item => item.category))];

const BeritaIndex = () => {
  // State untuk filter
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");

  // Logika untuk memfilter berita
  const filteredNews = allNews.filter(item => {
    const matchesCategory = activeCategory === "Semua" || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-24 bg-white min-h-screen relative">

      {/* Tombol Kembali ke Halaman Utama */}
      <Link
        to="/"
        aria-label="Kembali ke Halaman Utama"
        className="absolute top-12 left-10 md:left-12 z-20 p-2 rounded-full text-primary bg-white shadow-md hover:bg-gray-100 hover:shadow-lg hover:text-secondary transition-all"
      >
        <Undo2 size={28} />
      </Link>

      <div className="container mx-auto px-4">

        {/* Blok Judul Halaman */}
        <div className="flex justify-center items-center mb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Semua Berita</h1>
            <p className="text-xl text-gray-600">Prodi Informatika Universitas Pancasakti Tegal</p>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
          </div>
        </div>

        {/* SEARCH & FILTER */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 mx-auto">
          {/* Search Bar */}
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Cari berita..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-ifups bg-gray-50 border-transparent focus:border-primary focus:ring-primary focus:ring-opacity-50 transition"
            />
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          {/* Filter Kategori */}
          <div className="flex flex-shrink-0 flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-3 rounded-full font-medium transition-all text-sm ${
                  activeCategory === category
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* DAFTAR BERITA */}
        <div className="flex flex-col gap-10 mx-auto">

          {filteredNews.length > 0 ? (
            filteredNews.map((item, index) => (

              // Struktur item berita (Gambar kiri + Kartu teks kanan)
              <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">

                {/* Kolom Gambar */}
                <div className="md:col-span-5">
                   <img
                    src={item.image}
                    alt={item.title}
                    className="w-full aspect-video md:aspect-[4/3] object-cover rounded-ifups shadow-lg"
                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x450/cccccc/ffffff?text=Gambar+Error"; }} // Fallback
                  />
                </div>

                {/* Kolom Teks (Kartu) */}
                <article className="md:col-span-7 bg-white rounded-ifups shadow-lg p-6 md:p-8 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-secondary text-primary text-sm px-3 py-1 rounded-full font-medium">
                      {item.category}
                    </span>
                    <time className="text-sm text-gray-500">{item.date}</time>
                  </div>

                  {/* Judul */}
                  <h3 className="text-2xl font-semibold text-primary mb-3 hover:text-secondary transition-colors">
                    {item.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-700 mb-6 flex-grow">{item.excerpt}</p>

                  {/* Link ke Detail */}
                  <Link
                    to={`/berita/${item.id}`} // Link dinamis ke halaman detail
                    className="text-primary hover:text-secondary font-medium transition-colors mt-auto self-start"
                  >
                    Baca Selengkapnya →
                  </Link>
                </article>
              </div>
            ))
          ) : (
            // Pesan jika tidak ada berita
            <div className="text-center py-16 bg-white rounded-ifups shadow-lg">
              <h3 className="text-2xl font-semibold text-primary mb-4">Tidak Ada Berita Ditemukan</h3>
              <p className="text-gray-600">Coba ubah kata kunci pencarian atau filter kategori Anda.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default BeritaIndex;

