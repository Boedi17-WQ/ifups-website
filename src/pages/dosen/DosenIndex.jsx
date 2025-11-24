import { Link } from "react-router-dom";
import { ArrowLeftCircle } from "lucide-react"; 
import { allDosen } from "../../data/dosenData"; 
import { motion } from "framer-motion";

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

const DosenIndex = () => {
  if (!allDosen || allDosen.length === 0) {
    return (
      <div className="py-24 bg-white min-h-screen relative flex flex-col items-center justify-center text-center px-4">
        <Link 
          to="/" 
          aria-label="Kembali ke Halaman Utama"
          className="absolute top-12 left-10 md:left-12 z-20 flex items-center gap-2 text-primary bg-white shadow-md px-4 py-2 rounded-full hover:bg-gray-100 hover:shadow-lg hover:text-secondary transition-all"
        >
          <ArrowLeftCircle size={24} className="text-secondary" />
          <span className="hidden sm:inline font-medium">Kembali</span>
        </Link>
        <h1 className="text-4xl font-bold text-primary mb-4">Oops!</h1>
        <p className="text-xl text-gray-600">Data dosen tidak dapat dimuat.</p>
         <Link 
           to="/"
           className="mt-6 px-6 py-2 bg-primary text-white rounded-full hover:bg-blue-800 transition-colors"
         >
           Kembali ke Halaman Utama
         </Link>
      </div>
    );
  }

  return (
    <div className="py-24 bg-gray-50 min-h-screen relative overflow-hidden"> 
      <Link
        to="/"
        aria-label="Kembali ke Halaman Utama"
        className="absolute top-12 left-10 md:left-12 z-20 flex items-center gap-2 text-primary bg-white shadow-md px-4 py-2 rounded-full hover:bg-gray-100 hover:shadow-lg hover:text-secondary transition-all"
      >
        <ArrowLeftCircle size={24} className="text-secondary" />
        <span className="hidden sm:inline font-medium">Kembali</span>
      </Link>

      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Staf Pengajar
          </h1>
          <p className="text-xl text-gray-600">
            Program Studi Informatika Universitas Pancasakti Tegal
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto" // gap diubah ke 8 agar konsisten
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {allDosen.map((dosen) => (
            <motion.div
              key={dosen.id}
              variants={cardItem} 
              // --- VVV PERUBAHAN KARTU: rounded-2xl, group, relative VVV ---
              className="group bg-white shadow-md hover:shadow-xl transition-all overflow-hidden hover:-translate-y-1 border-b-4 border-secondary relative rounded-2xl"
            >
              <div className="relative overflow-hidden h-full">
                {/* --- VVV GAMBAR: Lebih tinggi (h-96) dan efek zoom VVV --- */}
                <img
                  src={dosen.foto}
                  alt={dosen.nama}
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/400x500/cccccc/ffffff?text=Foto+Dosen";
                  }}
                />
                
                {/* --- VVV OVERLAY: Fleksibel untuk teks panjang VVV --- */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-primary via-primary/90 to-transparent pt-28 pb-5 px-5 flex flex-col justify-end">
                  <h3 className="text-base font-bold text-white leading-snug mb-1 drop-shadow-md">
                    {dosen.nama}
                  </h3>
                  <p className="text-xs text-gray-200 font-medium leading-relaxed opacity-90">
                    {dosen.jabatan}
                  </p>
                </div>
                {/* --- ^^^ AKHIR PERUBAHAN ^^^ --- */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default DosenIndex;