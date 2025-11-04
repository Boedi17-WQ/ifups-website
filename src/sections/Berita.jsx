// --- VVV Impor Link dan Data VVV ---
import { Link } from "react-router-dom"; 
// Pastikan path ini benar (dari src/sections/ ke src/data/)
import { allNews } from "../data/beritaData"; 
// --- ^^^ Akhir Impor ^^^ ---

// --- VVV Ambil 3 berita pertama (sesuai screenshot) VVV ---
const featuredNews = allNews.slice(0, 3);
// --- ^^^ Akhir pengambilan data ^^^ ---

const Berita = () => {
  return (
    <section id="berita" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Berita Terbaru</h2>
          <p className="text-xl text-gray-600">Prodi Informatika</p>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
        </div>

        {/* --- VVV GRID DAN DESAIN KARTU DIUBAH (SESUAI FOTO) VVV --- */}
        {/* Menggunakan 3 kolom dan max-w-6xl */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featuredNews.map((item) => (
            // --- KARTU DIUBAH MENJADI DIV (TANPA KARTU) ---
            <div key={item.id} className="flex flex-col h-full"> 
              {/* Gambar dengan rounded corner */}
              <Link to={`/berita/${item.id}`} className="block mb-4 overflow-hidden  shadow-md group">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110" // Tinggi pakai aspect-video
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x338/cccccc/ffffff?text=Gambar+Error"; }} // Fallback
                />
              </Link>

              {/* Konten Teks di Bawah Gambar */}
              <div className="flex flex-col flex-grow">
                {/* Tanggal */}
                <time className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-2">
                  {item.date} 
                </time>
                
                {/* Judul (dibuat lebih tinggi dan line-clamp) */}
                <h3 className="text-lg font-bold text-primary mb-4 h-20 line-clamp-3">
                  <Link to={`/berita/${item.id}`} className="hover:text-secondary transition-colors">
                    {item.title}
                  </Link>
                </h3>

                {/* Tombol Selanjutnya (Kuning) */}
                <div className="mt-auto"> {/* Tombol rata bawah */}
                  <Link
                    to={`/berita/${item.id}`} 
                    className="inline-block bg-secondary text-primary font-semibold px-6 py-2 hover:bg-yellow-400 transition-colors"
                  >
                    Selengkapnya
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* --- ^^^ AKHIR PERUBAHAN GRID & KARTU ^^^ --- */}


        {/* Tombol "Lihat Semua Berita" (Style disamakan) */}
        <div className="text-center mt-16"> {/* Margin atas disamakan */}
          <Link
            to="/berita" 
            className="inline-block bg-secondary text-primary font-semibold px-8 py-3 rounded-ifups shadow-md hover:bg-yellow-400 hover:shadow-lg transition-all duration-300"
          >
            Lihat Semua Berita
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Berita;

