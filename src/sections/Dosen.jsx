import { Link } from "react-router-dom"; 
import { motion } from "framer-motion";

const lecturers = [
  {
    name: "Prof.eko",
    position: "Guru Besar Artificial Intelligence",
    photo: "/contoh.jpg",
    expertise: ["AI", "Machine Learning", "Data Science"]
  },
  {
    name: "Prof.eko",
    position: "Ketua Program Studi",
    photo: "/images/dosen2.jpg",
    expertise: ["Web Development", "Database", "Software Engineering"]
  },
  {
    name: "Prof.eko",
    position: "Dosen Senior",
    photo: "/images/dosen3.jpg",
    expertise: ["Networking", "Cyber Security", "Cloud Computing"]
  },
  {
    name: "Prof.eko",
    position: "Dosen Multimedia",
    photo: "/images/dosen4.jpg",
    expertise: ["UI/UX Design", "Graphic Design", "Animation"]
  }
];


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

const Dosen = () => {
  return (
    // Tambahkan 'overflow-hidden' untuk mencegah animasi meluap
    <section id="dosen" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Judul Section (Dibungkus motion.div) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">MEET OUR</h2>
          <p className="text-xl text-gray-600">LECTURERS</p>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
        </motion.div>

        
        <motion.div
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto"
        >
          {lecturers.map((lecturer, index) => (
            // --- VVV Setiap Kartu Dibungkus motion.div VVV ---
            <motion.div
              key={index}
              variants={cardItem} 
              className="bg-white shadow-md hover:shadow-xl transition-all overflow-hidden hover:-translate-y-1 border-b-4 border-secondary" 
            >
              
              <div className="relative">
                <img
                  src={lecturer.photo}
                  alt={lecturer.name}
                  className="w-full h-72 object-cover" 
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x288/cccccc/ffffff?text=Foto+Dosen"; }} // Fallback
                />
                
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-primary via-primary/80 to-transparent flex flex-col justify-end items-start text-white p-3"> 
                  
                  
                  <h3 className="text-base font-semibold drop-shadow-md">{lecturer.name}</h3>
                  
                  <p className="text-sm text-gray-200">{lecturer.position}</p> 
                </div>
              </div>
              
            </motion.div>
            
          ))}
        </motion.div>

        
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mt-14"
        >
          <Link
            to="/dosen" 
            className="bg-primary text-white px-10 py-3 rounded-ifups hover:bg-blue-900 transition-colors inline-block" 
          >
            Lihat Semua Dosen
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Dosen;