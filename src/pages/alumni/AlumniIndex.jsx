import { Link } from "react-router-dom";
// --- Gunakan ikon yang sama dengan DosenIndex ---
import { ArrowLeftCircle } from "lucide-react"; // ✅ Tambahkan ikon ini
import { allAlumni } from "../../data/alumniData"; // Impor data alumni

const AlumniIndex = () => {

  if (!allAlumni || allAlumni.length === 0) {
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
        <p className="text-xl text-gray-600">Data alumni tidak dapat dimuat.</p>
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
    <div className="py-24 bg-white min-h-screen relative">
      {/* Tombol kembali */}
      <Link
        to="/"
        aria-label="Kembali ke Halaman Utama"
        className="absolute top-12 left-10 md:left-12 z-20 flex items-center gap-2 text-primary bg-white shadow-md px-4 py-2 rounded-full hover:bg-gray-100 hover:shadow-lg hover:text-secondary transition-all"
      >
        <ArrowLeftCircle size={24} className="text-secondary" />
        <span className="hidden sm:inline font-medium">Kembali</span>
      </Link>

      <div className="container mx-auto px-4">
        {/* Judul Halaman */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Alumni Kami
          </h1>
          <p className="text-xl text-gray-600">
            Jejak Lulusan Prodi Informatika Universitas Pancasakti Tegal
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
        </div>

        {/* Grid Kartu Alumni */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {allAlumni.map((alumnus) => (
            <div
              key={alumnus.id}
              className="bg-white shadow-md hover:shadow-xl transition-all overflow-hidden hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={alumnus.foto}
                  alt={alumnus.nama}
                  className="w-full h-72 object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://placehold.co/400x288/cccccc/ffffff?text=Foto+${alumnus.nama.split(" ")[0]}`;
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-secondary via-secondary/80 to-transparent flex flex-col justify-end items-start text-primary p-5">
                  <h3 className="text-base font-semibold drop-shadow-sm">{alumnus.nama}</h3>
                  <p className="text-sm text-blue-900 font-medium">{alumnus.pekerjaan}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlumniIndex;
