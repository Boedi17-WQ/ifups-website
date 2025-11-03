import { Link } from "react-router-dom";
import { ArrowLeftCircle, Search } from "lucide-react";
import { useState } from "react";
import { allNews } from "../../data/beritaData";

// Ambil Kategori Unik
const categories = ["Semua", ...new Set(allNews.map((item) => item.category))];

const BeritaIndex = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");

  // Logika filter berita
  const filteredNews = allNews.filter((item) => {
    const matchesCategory =
      activeCategory === "Semua" || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 min-h-screen relative">
      {/* Tombol Kembali */}
      <Link
        to="/"
        aria-label="Kembali ke Halaman Utama"
        className="absolute top-10 left-10 flex items-center gap-2 text-primary bg-white border border-gray-200 px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:bg-gray-100 transition-all"
      >
        <ArrowLeftCircle size={22} className="text-secondary" />
        <span className="hidden sm:inline font-medium">Kembali</span>
      </Link>

      <div className="container mx-auto px-4">
        {/* Judul Halaman */}
        <div className="flex justify-center items-center mb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Semua Berita
            </h1>
            <p className="text-xl text-gray-600">
              Prodi Informatika Universitas Pancasakti Tegal
            </p>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 mx-auto">
          {/* Search Bar */}
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Cari berita..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/30 transition"
            />
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>

          {/* Filter Kategori */}
          <div className="flex flex-shrink-0 flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
                  activeCategory === category
                    ? "bg-primary text-white shadow"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Daftar Berita */}
        <div className="divide-y divide-gray-200">
          {filteredNews.length > 0 ? (
            filteredNews.map((item, index) => (
              <article
                key={item.id}
                className="py-10 flex flex-col md:flex-row items-start gap-8 transition-all duration-300 hover:bg-gray-50/70 px-2 md:px-4 rounded-2xl"
              >
                {/* Kolom Gambar */}
                <div className="md:w-1/3 w-full">
                  <Link to={`/berita/${item.id}`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full aspect-video md:aspect-[4/3] object-cover rounded-2xl shadow-md hover:scale-[1.02] transition-transform duration-500"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://placehold.co/600x400/cccccc/ffffff?text=Gambar+Tidak+Ditemukan";
                      }}
                    />
                  </Link>
                </div>

                {/* Kolom Teks */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm bg-secondary/20 text-primary px-3 py-1 rounded-full font-medium">
                      {item.category}
                    </span>
                    <time className="text-sm text-gray-500">{item.date}</time>
                  </div>

                  <Link to={`/berita/${item.id}`}>
                    <h3 className="text-2xl font-bold text-primary mb-3 hover:text-secondary transition-colors leading-snug">
                      {item.title}
                    </h3>
                  </Link>

                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    {item.excerpt}
                  </p>

                  <Link
                    to={`/berita/${item.id}`}
                    className="text-primary hover:text-secondary font-medium transition-colors inline-flex items-center gap-1"
                  >
                    Baca Selengkapnya →
                  </Link>
                </div>
              </article>
            ))
          ) : (
            <div className="text-center py-16 bg-white rounded-ifups shadow">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Tidak Ada Berita Ditemukan
              </h3>
              <p className="text-gray-600">
                Coba ubah kata kunci pencarian atau filter kategori Anda.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BeritaIndex;
