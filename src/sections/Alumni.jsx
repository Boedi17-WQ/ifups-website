import { Link } from "react-router-dom"; // <-- Impor Link
// Ikon tidak lagi diperlukan untuk desain baru ini
// import { Briefcase, Linkedin } from "lucide-react"; 

// Data featured alumni (data tetap sama)
const featuredAlumni = [
  {
    id: 1,
    nama: "Andi Pratama, S.Kom.",
    angkatan: 2018,
    pekerjaan: "Software Engineer di Gojek",
    testimoni: "Kuliah di IF UPS memberikan fondasi yang kuat...",
    foto: "/images/alumni/andi.jpg",
    linkedin: "https://linkedin.com/in/andipratama",
  },
  {
    id: 2,
    nama: "Citra Dewi, S.Kom.",
    angkatan: 2019,
    pekerjaan: "UI/UX Designer di Tokopedia",
    testimoni: "Mata kuliah Interaksi Manusia Komputer sangat membantu...",
    foto: "/images/alumni/citra.jpg",
    linkedin: "https://linkedin.com/in/citradewi",
  },
  {
    id: 3,
    nama: "Bayu Aji, S.Kom.",
    angkatan: 2017,
    pekerjaan: "Data Analyst di Shopee",
    testimoni: "Kemampuan analisis data yang saya pelajari sangat berguna...",
    foto: "/images/alumni/bayu.jpg",
    linkedin: "https://linkedin.com/in/bayuaji",
  },
  {
    id: 4,
    nama: "Rina Sari, S.Kom.",
    angkatan: 2020,
    pekerjaan: "System Administrator",
    testimoni: "...",
    foto: "/images/alumni/rina.jpg",
    linkedin: null,
  },
];


const Alumni = () => {
  return (
    <section id="alumni" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Judul Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">ALUMNI KAMI</h2>
          <p className="text-xl text-gray-600">Apa Kata Mereka?</p>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
        </div>

        {/* --- VVV GRID KARTU DISAMAKAN DENGAN DESAIN DOSEN VVV --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-14">
          {featuredAlumni.map((alumnus) => (
            <div
              key={alumnus.id}
              // Menghapus rounded-ifups & border, menambahkan hover:translate
              className="bg-white shadow-md hover:shadow-xl transition-all overflow-hidden hover:-translate-y-1"
            >
              {/* Foto Alumni dengan Gradasi Biru (disamakan Dosen) */}
              <div className="relative">
                <img
                  src={alumnus.foto}
                  alt={`Foto ${alumnus.nama}`}
                  className="w-full h-72 object-cover" // Tinggi foto disamakan
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://placehold.co/400x288/cccccc/ffffff?text=Foto+${alumnus.nama.split(" ")[0]}`; // Fallback
                  }}
                />
                {/* --- VVV GRADASI DIUBAH KEMBALI KE KUNING (SECONDARY) VVV --- */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-secondary via-secondary/80 to-transparent flex flex-col justify-end items-start text-primary p-5">
                  <h3 className="text-base font-semibold drop-shadow-sm">
                    {alumnus.nama}
                  </h3>
                   {/* Menampilkan pekerjaan (bukan angkatan) agar mirip Dosen */}
                   <p className="text-sm text-blue-900 font-medium">{alumnus.pekerjaan}</p> 
                </div>
                {/* --- ^^^ AKHIR PERUBAHAN GRADASI ^^^ --- */}
              </div>

              
              
            </div>
          ))}
        </div>
        {/* --- ^^^ AKHIR GRID KARTU ^^^ --- */}

        {/* Tombol Lihat Semua Alumni */}
        <div className="text-center">
          <Link
            to="/alumni"
            className="bg-primary text-white px-10 py-3 rounded-ifups hover:bg-blue-900 transition-colors inline-block"
          >
            Lihat Semua Alumni
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Alumni;

