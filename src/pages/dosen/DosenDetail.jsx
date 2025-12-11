import { useParams, Link } from "react-router-dom";
import { ArrowLeftCircle, Mail, Award, BookOpen, GraduationCap, Book, Layers } from "lucide-react";
import { allDosen } from "../../data/dosenData";

const DosenDetail = () => {
  const { id } = useParams();
  const dosen = allDosen.find((item) => item.id === parseInt(id));

  if (!dosen) {
    return (
      <div className="py-24 bg-white min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold text-primary mb-4">Dosen Tidak Ditemukan</h1>
        <Link to="/dosen" className="text-secondary underline">Kembali ke Daftar Dosen</Link>
      </div>
    );
  }

  return (
    <div className="py-24 bg-white min-h-screen relative">
      {/* Tombol Kembali */}
      <Link
        to="/dosen"
        className="fixed top-8 left-8 z-30 flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-md hover:shadow-lg hover:bg-gray-100 text-primary transition-all"
      >
        <ArrowLeftCircle size={24} className="text-secondary" />
        <span className="hidden sm:inline font-medium">Kembali</span>
      </Link>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* --- SIDEBAR KIRI: FOTO & KONTAK --- */}
          <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start">
            
            {/* Foto Profil */}
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl mb-8 border-4 border-gray-50">
              <img
                src={dosen.foto}
                alt={dosen.nama}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://placehold.co/400x533/cccccc/ffffff?text=${dosen.nama.split(" ")[0]}`;
                }}
              />
              {/* Overlay Nama */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-primary via-primary/90 to-transparent pt-24 pb-6 px-6">
                 <h2 className="text-xl font-bold text-white leading-tight">{dosen.nama}</h2>
                 <p className="text-secondary text-sm mt-1 font-medium">{dosen.jabatan}</p>
              </div>
            </div>

            {/* Informasi Kontak & ID */}
            <div className="w-full bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm space-y-4">
               
               <div className="flex items-center gap-3 text-gray-700">
                 <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-primary" />
                 </div>
                 <div className="overflow-hidden">
                    <p className="text-xs text-gray-500 font-semibold uppercase">Email</p>
                    <a href={`mailto:${dosen.email}`} className="text-sm font-medium hover:text-primary truncate block" title={dosen.email}>
                      {dosen.email}
                    </a>
                 </div>
               </div>

               {dosen.sintaId && (
                 <div className="flex items-center gap-3 text-gray-700">
                   <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                      <Award size={20} className="text-yellow-600" />
                   </div>
                   <div>
                      <p className="text-xs text-gray-500 font-semibold uppercase">SINTA ID</p>
                      <a href={`https://sinta.kemdikbud.go.id/authors/detail?id=${dosen.sintaId}&view=overview`} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-primary">
                        {dosen.sintaId}
                      </a>
                   </div>
                 </div>
               )}

               {dosen.googleScholarId && (
                 <div className="flex items-center gap-3 text-gray-700">
                   <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <BookOpen size={20} className="text-green-600" />
                   </div>
                   <div>
                      <p className="text-xs text-gray-500 font-semibold uppercase">Google Scholar</p>
                      <a href={`https://scholar.google.com/citations?user=${dosen.googleScholarId}`} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-primary">
                        Lihat Profil
                      </a>
                   </div>
                 </div>
               )}

            </div>
          </div>

          {/* --- KONTEN KANAN: DETAIL AKADEMIK --- */}
          <div className="w-full lg:w-2/3 space-y-10">
            
            {/* Biografi */}
            <section>
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2 border-b border-gray-200 pb-2">
                Biografi Singkat
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {dosen.bio || "Belum ada biografi yang ditambahkan."}
              </p>
            </section>

            {/* Riwayat Pendidikan */}
            {dosen.pendidikan && (
              <section>
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2 border-b border-gray-200 pb-2">
                  <GraduationCap size={28} className="text-secondary" />
                  Riwayat Pendidikan
                </h3>
                <div className="space-y-4">
                  {dosen.pendidikan.map((edu, idx) => (
                    <div key={idx} className="flex gap-4 group">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 rounded-full bg-primary mt-2 group-hover:scale-125 transition-transform"></div>
                        {idx !== dosen.pendidikan.length - 1 && <div className="w-0.5 h-full bg-gray-200 mt-1"></div>}
                      </div>
                      <p className="text-gray-700 text-lg">{edu}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Pengampu Mata Kuliah */}
            {dosen.pengampuMataKuliah && (
              <section>
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2 border-b border-gray-200 pb-2">
                  <Book size={26} className="text-secondary" />
                  Pengampu Mata Kuliah
                </h3>
                <div className="flex flex-wrap gap-3">
                  {dosen.pengampuMataKuliah.map((matkul, idx) => (
                    <span key={idx} className="px-4 py-2 bg-blue-50 text-blue-800 rounded-lg font-medium text-sm border border-blue-100 hover:bg-blue-100 transition-colors cursor-default">
                      {matkul}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Publikasi */}
            {dosen.publikasi && (
               <section>
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2 border-b border-gray-200 pb-2">
                  <Layers size={26} className="text-secondary" />
                  Publikasi Pilihan
                </h3>
                <ul className="space-y-3">
                  {dosen.publikasi.map((pub, idx) => (
                    <li key={idx} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100 hover:shadow-sm transition-shadow">
                      <span className="font-bold text-secondary text-lg leading-none mt-0.5">•</span>
                      <span className="text-gray-700 italic">"{pub}"</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default DosenDetail;