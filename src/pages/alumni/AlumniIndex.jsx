import { Link } from "react-router-dom";
import { Undo2, Linkedin, Briefcase } from "lucide-react"; // Impor ikon
import { allAlumni } from "../../data/alumniData"; // Impor data alumni

const AlumniIndex = () => {

  // Penanganan jika data kosong
  if (!allAlumni || allAlumni.length === 0) {
     return (
       <div className="py-24 bg-white min-h-screen relative flex flex-col items-center justify-center text-center px-4">
         <Link
           to="/"
           aria-label="Kembali ke Halaman Utama"
           className="absolute top-12 left-10 md:left-12 z-20 p-2 rounded-full text-primary bg-white shadow-md hover:bg-gray-100 hover:shadow-lg hover:text-secondary transition-all"
         >
           <Undo2 size={28} />
         </Link>
         <h1 className="text-4xl font-bold text-primary mb-4">Oops!</h1>
         <p className="text-xl text-gray-600">Data alumni tidak dapat dimuat.</p>
         <p className="text-sm text-gray-400 mt-2">(Pastikan file 'src/data/alumniData.js' ada dan mengekspor 'allAlumni'.)</p>
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
        className="absolute top-12 left-10 md:left-12 z-20 p-2 rounded-full text-primary bg-white shadow-md hover:bg-gray-100 hover:shadow-lg hover:text-secondary transition-all"
      >
        <Undo2 size={28} />
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

        {/* --- VVV GRID KARTU ALUMNI DENGAN DESAIN BARU VVV --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {allAlumni.map((alumnus) => (
            <div
              key={alumnus.id}
              className="bg-white rounded-ifups overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex flex-col"
            >
              {/* Foto Alumni dengan Gradasi Kuning dan Nama */}
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
                {/* Overlay gradasi kuning */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-secondary via-secondary/80 to-transparent flex flex-col justify-end items-center text-primary p-4">
                  <h3 className="text-lg font-semibold drop-shadow-sm text-center">
                    {alumnus.nama}
                  </h3>
                   <p className="text-xs font-medium text-blue-900">Angkatan {alumnus.angkatan}</p>
                </div>
              </div>

              {/* Info Alumni di Bawah Foto */}
              <div className="p-5 text-center flex flex-col flex-grow">
                 {/* Pekerjaan */}
                <div className="flex items-center justify-center text-sm text-gray-700 mb-4">
                   <Briefcase size={16} className="mr-2 text-primary flex-shrink-0" />
                   <span className="font-medium">{alumnus.pekerjaan}</span>
                </div>

                {/* Testimoni Singkat (jika perlu) atau kosongkan */}
                {/* <p className="text-sm text-gray-600 italic mb-4 flex-grow">
                   "{alumnus.testimoni}"
                 </p> */}

                {/* Link LinkedIn */}
                {alumnus.linkedin && (
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <a
                      href={alumnus.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium"
                    >
                      <Linkedin size={16} className="mr-1" />
                      Profil LinkedIn
                    </a>
                  </div>
                )}
                 {/* Jika tidak ada LinkedIn, tampilkan placeholder agar tinggi kartu sama */}
                 {!alumnus.linkedin && (
                   <div className="mt-auto pt-4 border-t border-transparent h-[36px]"> {/* Placeholder tinggi */}
                   </div>
                 )}
              </div>
            </div>
          ))}
        </div>
        {/* --- ^^^ AKHIR GRID KARTU ALUMNI ^^^ --- */}

      </div>
    </div>
  );
};

export default AlumniIndex;

