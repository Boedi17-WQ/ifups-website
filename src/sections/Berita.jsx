// --- VVV Impor Link dan Data VVV ---
import { Link } from "react-router-dom"; 
// Pastikan path ini benar (dari src/sections/ ke src/data/)
import { allNews } from "../data/beritaData"; 
// --- ^^^ Akhir Impor ^^^ ---

// Ambil 4 berita pertama untuk ditampilkan di Halaman Utama
const featuredNews = allNews.slice(0, 4);

const Berita = () => {
  return (
    <section id="berita" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Berita Terbaru</h2>
          <p className="text-xl text-gray-600">Prodi Informatika</p>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
        </div>

        {/* --- VVV Gunakan 'featuredNews' dan 'item.id' VVV --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {featuredNews.map((item) => ( 
            <article key={item.id} className="bg-white rounded-ifups overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              
              <img
                src={item.image}
                alt={item.title}
                className="w-full aspect-video object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x338/cccccc/ffffff?text=Gambar+Error"; }} // Fallback
              />
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-secondary text-primary text-sm px-3 py-1 rounded-full font-medium">
                    {item.category}
                  </span>
                  <time className="text-sm text-gray-500">{item.date}</time>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3 hover:text-secondary transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-700 mb-4">{item.excerpt}</p>
                
                {/* --- VVV TOMBOL DIUBAH MENJADI LINK DINAMIS VVV --- */}
                <Link
                  to={`/berita/${item.id}`} // Arahkan ke URL detail
                  className="text-primary hover:text-secondary font-medium transition-colors"
                >
                  Baca Selengkapnya →
                </Link>
                {/* --- ^^^ AKHIR PERUBAHAN LINK ^^^ --- */}
                
              </div>
            </article>
          ))}
        </div>
        {/* --- ^^^ AKHIR PERUBAHAN MAP ^^^ --- */}


        {/* Tombol "Lihat Semua Berita" sudah benar */}
        <div className="text-center mt-12">
          <Link
            to="/berita" 
            className="bg-primary text-white px-8 py-3 rounded-ifups hover:bg-blue-800 transition-colors"
          >
            Lihat Semua Berita
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Berita;
