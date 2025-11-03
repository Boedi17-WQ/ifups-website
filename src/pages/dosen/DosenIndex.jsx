import { Link } from "react-router-dom";
// --- VVV Ganti ikon Undo2 dengan ArrowLeftCircle VVV ---
import { ArrowLeftCircle } from "lucide-react"; 
import { allDosen } from "../../data/dosenData"; // Impor data dosen

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
    <div className="py-24 bg-gray-50 min-h-screen relative"> 
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
            Staf Pengajar
          </h1>
          <p className="text-xl text-gray-600">
            Program Studi Informatika Universitas Pancasakti Tegal
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
        </div>

        {/* GRID DOSEN */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {allDosen.map((dosen) => (
            <div
              key={dosen.id}
              className="bg-white shadow-md hover:shadow-xl transition-all overflow-hidden hover:-translate-y-1 border-b-4 border-secondary"
            >
              <div className="relative">
                <img
                  src={dosen.foto}
                  alt={dosen.nama}
                  className="w-full h-72 object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/400x288/cccccc/ffffff?text=Foto+Dosen";
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-primary via-primary/80 to-transparent flex flex-col justify-end items-start text-white p-5">
                  <h3 className="text-base font-semibold drop-shadow-md">
                    {dosen.nama}
                  </h3>
                  <p className="text-sm text-gray-200">{dosen.jabatan}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DosenIndex;
