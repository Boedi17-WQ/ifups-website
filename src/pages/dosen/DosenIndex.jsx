import { Link } from "react-router-dom";
// --- VVV IKON TIDAK DIPERLUKAN LAGI UNTUK DESAIN BARU KECUALI Undo2 VVV ---
import { Undo2 } from "lucide-react"; 
import { allDosen } from "../../data/dosenData"; // Impor data dosen

const DosenIndex = () => {
  // Penanganan jika data kosong (opsional tapi bagus)
  if (!allDosen || allDosen.length === 0) {
    return (
      <div className="py-24 bg-white min-h-screen relative flex flex-col items-center justify-center text-center px-4">
        {/* ... (kode fallback jika data tidak ada) ... */}
        <Link 
          to="/" 
          aria-label="Kembali ke Halaman Utama"
          className="absolute top-12 left-10 md:left-12 z-20 p-2 rounded-full text-primary bg-white shadow-md hover:bg-gray-100 hover:shadow-lg hover:text-secondary transition-all"
        >
          <Undo2 size={28} />
        </Link>
        <h1 className="text-4xl font-bold text-primary mb-4">Oops!</h1>
        <p className="text-xl text-gray-600">Data dosen tidak dapat dimuat.</p>
        {/* ... (link kembali) ... */}
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
    <div className="py-24 bg-white min-h-screen relative"> {/* Latar belakang diubah ke putih */}
      {/* Tombol kembali */}
      <Link
        to="/"
        aria-label="Kembali ke Halaman Utama"
        className="absolute top-12 left-10 md:left-12 z-20 p-2 rounded-full text-primary bg-white shadow-md hover:bg-gray-100 hover:shadow-lg hover:text-secondary transition-all"
      >
        <Undo2 size={28} />
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

        {/* --- VVV GRID KARTU DOSEN (DESAIN DISAMAKAN DENGAN Dosen.jsx) VVV --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"> {/* Disesuaikan gap jika perlu */}
          {allDosen.map((dosen) => (
            <div
              key={dosen.id} // Gunakan ID unik
              // Kelas disamakan dengan Dosen.jsx (tanpa rounded, shadow on hover)
              className="bg-white shadow-md hover:shadow-xl transition-all overflow-hidden" 
            >
              {/* Foto Dosen dengan Gradasi dan Nama */}
              <div className="relative">
                <img
                  src={dosen.foto}
                  alt={dosen.nama} // Gunakan nama asli
                  className="w-full h-64 object-cover" // Samakan tinggi foto
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x256/cccccc/ffffff?text=Foto+Dosen"; }} // Fallback
                />
                {/* Overlay gradasi biru */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-800 to-transparent flex flex-col justify-end items-center text-white p-4">
                  <h3 className="text-lg font-semibold drop-shadow-md text-center">{dosen.nama}</h3>
                </div>
              </div>

              {/* Info Dosen */}
              <div className="p-6 text-center">
                <p className="text-gray-600 font-medium mb-3">{dosen.jabatan}</p>
                {/* Bidang Keahlian */}
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {/* Asumsi data 'bidangKeahlian' adalah string, split jika perlu */}
                  {dosen.bidangKeahlian.split(', ').slice(0, 3).map((skill, skillIndex) => ( // Batasi 3 skill
                    <span
                      key={skillIndex}
                      className="bg-gray-100 text-primary text-xs px-3 py-1 rounded-full" // Ukuran text-xs
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                {/* Tombol Lihat Profil dihapus sesuai Dosen.jsx */}
              </div>
            </div>
          ))}
        </div>
        {/* --- ^^^ AKHIR GRID KARTU DOSEN ^^^ --- */}
        
      </div>
    </div>
  );
};

export default DosenIndex;

