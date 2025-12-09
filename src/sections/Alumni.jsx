import { Link } from "react-router-dom"; 
import { motion } from "framer-motion";
// Pastikan path ini benar (relatif dari src/sections/)
import { allAlumni } from "../data/alumniData"; 

// Ambil 4 alumni pertama dari data untuk ditampilkan di Beranda
const featuredAlumni = allAlumni.slice(0, 4);

// --- Varian Animasi ---
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

const Alumni = () => {
  return (
    <section id="alumni" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Judul Section */}
        <motion.div 
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">ALUMNI KAMI</h2>
          <p className="text-xl text-gray-600">Apa Kata Mereka?</p>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
        </motion.div>

        {/* Grid Kartu Alumni */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-14"
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {featuredAlumni.map((alumnus) => (
            <motion.div
              key={alumnus.id}
              variants={cardItem}
            >
              {/* --- LINK KE DETAIL --- */}
              <Link
                to={`/alumni/${alumnus.id}`} // Link dinamis ke halaman detail
                className="group bg-white shadow-md hover:shadow-xl transition-all overflow-hidden hover:-translate-y-1 border-b-4 border-secondary relative rounded-2xl block h-full max-w-xs mx-auto sm:max-w-none w-full"
              >
                <div className="relative overflow-hidden h-full">
                  {/* Gambar Tinggi (h-96) */}
                  <img
                    src={alumnus.foto}
                    alt={alumnus.nama}
                    className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105" 
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/400x500/cccccc/ffffff?text=Foto+${alumnus.nama.split(" ")[0]}`;
                    }}
                  />
                  
                  {/* Overlay Gradasi Kuning */}
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-secondary via-secondary/80 to-transparent pt-28 pb-5 px-5 flex flex-col justify-end">
                    <h3 className="text-base font-bold text-primary leading-snug mb-1 drop-shadow-sm">
                      {alumnus.nama}
                    </h3>
                    <p className="text-xs text-blue-900 font-medium leading-relaxed opacity-90">
                      {alumnus.pekerjaan}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Tombol Lihat Semua */}
        <motion.div 
          className="text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <Link
            to="/alumni" // Mengarah ke AlumniIndex
            className="bg-primary text-white px-10 py-3 rounded-ifups hover:bg-blue-900 transition-colors inline-block"
          >
            Lihat Semua Alumni
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Alumni;