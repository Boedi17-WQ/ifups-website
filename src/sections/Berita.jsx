
import { Link } from "react-router-dom"; 

import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react"; 
import { allNews } from "../data/beritaData"; 


const featuredNews = allNews.slice(0, 3);



const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const gridContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, 
      delayChildren: 0.2,   
    }
  }
};

const cardItem = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};
// --- ^^^ Akhir Varian Animasi ^^^ ---

const Berita = () => {
  return (
    // --- VVV 'overflow-hidden' ditambahkan VVV ---
    <section id="berita" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* --- VVV Judul Dibungkus motion.div VVV --- */}
        <motion.div 
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Berita Terbaru</h2>
          <p className="text-xl text-gray-600">Prodi Informatika</p>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
        </motion.div>
        {/* --- ^^^ Akhir Judul ^^^ --- */}

        {/* --- VVV Grid Dibungkus motion.div VVV --- */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {featuredNews.map((item) => (
            // --- VVV Item Berita Dibungkus motion.div VVV ---
            <motion.div 
              key={item.id} 
              variants={cardItem}
              className="flex flex-col h-full"
            > 
              {/* Gambar dengan rounded corner */}
              <Link to={`/berita/${item.id}`} className="block mb-4 overflow-hidden rounded-ifups shadow-md group">
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
                <time className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-2 flex items-center gap-2"> {/* <-- flex ditambahkan */}
                  <CalendarDays size={14} /> {/* <-- Ikon ditambahkan kembali */}
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
                    className="inline-block bg-secondary text-primary font-semibold px-6 py-2 rounded-lg hover:bg-yellow-400 transition-colors"
                  >
                    Selanjutnya
                  </Link>
                </div>
              </div>
            </motion.div>
            // --- ^^^ AKHIR ITEM BERITA ^^^ ---
          ))}
        </motion.div>
        {/* --- ^^^ AKHIR GRID ^^^ --- */}


        {/* Tombol "Lihat Semua Berita" (Dibungkus motion.div) */}
        <motion.div 
          className="text-center mt-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <Link
            to="/berita" 
            className="inline-block bg-secondary text-primary font-semibold px-8 py-3 rounded-ifups shadow-md hover:bg-yellow-400 hover:shadow-lg transition-all duration-300"
          >
            Lihat Semua Berita
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Berita;