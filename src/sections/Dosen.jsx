import { Link } from "react-router-dom"; // <-- 1. IMPORT Link

// Data contoh (seperti yang Anda berikan)
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

const Dosen = () => {
  return (
    <section id="dosen" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Judul Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">MEET OUR</h2>
          <p className="text-xl text-gray-600">LECTURERS</p>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
        </div>

        {/* Grid Card Dosen */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {lecturers.map((lecturer, index) => (
            <div
              key={index}
              // --- VVV GARIS KUNING DITAMBAHKAN DI SINI VVV ---
              className="bg-white shadow-md hover:shadow-xl transition-all overflow-hidden hover:-translate-y-1 border-b-4 border-secondary" 
            >
              {/* --- KARTU DIJADIKAN SATU (HANYA FOTO & GRADASI) --- */}
              <div className="relative">
                <img
                  src={lecturer.photo}
                  alt={lecturer.name}
                  className="w-full h-72 object-cover" // Foto dibuat lebih tinggi
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x288/cccccc/ffffff?text=Foto+Dosen"; }} // Fallback
                />
                {/* Overlay gradasi biru di bawah foto */}
                {/* Gradasi dibuat lebih tinggi & halus, teks rata kiri */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-primary via-primary/80 to-transparent flex flex-col justify-end items-start text-white p-3"> 
                  
                  {/* --- VVV UKURAN FONT DIUBAH DARI text-lg MENJADI text-base VVV --- */}
                  <h3 className="text-base font-semibold drop-shadow-md">{lecturer.name}</h3>
                  {/* --- ^^^ AKHIR PERUBAHAN FONT ^^^ --- */}
                  
                  {/* Jabatan dipindahkan ke sini */}
                  <p className="text-sm text-gray-200">{lecturer.position}</p> 
                </div>
              </div>
              {/* --- Bagian info putih di bawah dihapus --- */}
            </div>
          ))}
        </div>

        {/* Tombol Lihat Semua Dosen */}
        <div className="text-center mt-14">
          <Link
            to="/dosen" 
            className="bg-primary text-white px-10 py-3 rounded-ifups hover:bg-blue-900 transition-colors inline-block" 
          >
            Lihat Semua Dosen
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Dosen;

