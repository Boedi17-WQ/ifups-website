import { useParams, Link } from "react-router-dom";
// --- VVV Ikon yang tidak perlu dihapus VVV ---
import { ArrowLeftCircle, Trophy } from "lucide-react"; // Hanya ArrowLeftCircle dan Trophy (untuk kejuaraan)
import { allAlumni } from "../../data/alumniData";

const AlumniDetail = () => {
  const { id } = useParams();
  const alumnus = allAlumni.find((item) => item.id === parseInt(id));

  if (!alumnus) {
    return (
      <div className="py-24 bg-white min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold text-primary mb-4">Data Tidak Ditemukan</h1>
        <Link to="/alumni" className="text-secondary underline">Kembali ke Daftar</Link>
      </div>
    );
  }

  return (
    <div className="py-24 bg-white min-h-screen relative">
      {/* Tombol Kembali */}
      <Link
        to="/alumni"
        className="fixed top-8 left-8 z-30 flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-md hover:shadow-lg hover:bg-gray-100 text-primary transition-all"
      >
        <ArrowLeftCircle size={24} className="text-secondary" />
        <span className="hidden sm:inline font-medium">Kembali</span>
      </Link>

      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          {/* --- Kolom Kiri: Foto & Info Dasar --- */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl mb-6">
              <img
                src={alumnus.foto}
                alt={alumnus.nama}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://placehold.co/400x533/cccccc/ffffff?text=${alumnus.nama}`;
                }}
              />
              {/* Overlay Nama di Foto */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-secondary via-secondary/80 to-transparent pt-20 pb-6 px-6">
                 <h2 className="text-2xl font-bold text-primary">{alumnus.nama}</h2>
                 <p className="text-blue-900 text-sm mt-1">Angkatan {alumnus.angkatan}</p>
              </div>
            </div>

            {/* --- TOMBOL LINKEDIN DIHAPUS --- */}
          </div>

          {/* --- Kolom Kanan: Detail (Hanya Kejuaraan & Deskripsi) --- */}
          <div className="w-full md:w-2/3 space-y-8">
            
            {/* Header Kejuaraan (Menggunakan data 'pekerjaan' sebagai judul prestasi/kejuaraan) */}
            <div>
              <h3 className="text-lg font-semibold text-gray-500 mb-1 flex items-center gap-2">
                <Trophy size={20} className="text-secondary" /> {/* Ikon Trophy */}
                Kejuaraan / Prestasi
              </h3>
              {/* Menggunakan data 'pekerjaan' sebagai placeholder 'Kejuaraan' jika data khusus belum ada */}
              <p className="text-3xl font-bold text-primary leading-tight">{alumnus.pekerjaan}</p>
            </div>

            <div className="w-full h-px bg-gray-200"></div>

            {/* Deskripsi (Bio) */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Deskripsi</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {alumnus.bio || "Belum ada deskripsi yang ditambahkan."}
              </p>
            </div>

            {/* --- BAGIAN KEAHLIAN & PENDIDIKAN DIHAPUS --- */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniDetail;