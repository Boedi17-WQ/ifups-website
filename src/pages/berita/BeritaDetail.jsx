import { useParams, Link } from "react-router-dom";
import { Undo2, Calendar, Tag } from "lucide-react";

// --- VVV BAGIAN IMPOR DATA ---
// Pastikan path ini benar!
// Relative dari src/pages/berita/BeritaDetail.jsx
import { allNews } from "../../data/beritaData";
// --- ^^^ AKHIR IMPOR DATA ^^^ ---

const BeritaDetail = () => {
  // --- VVV TAMBAHKAN CONSOLE LOG UNTUK DEBUGGING ---
  console.log("Data Berita yang Diimpor:", allNews); // Cek apakah data berhasil diimpor
  // --- ^^^ AKHIR CONSOLE LOG ^^^ ---

  const { id } = useParams();
  const articleIdToUse = id ? parseInt(id) : undefined; // Ubah ID dari URL menjadi angka

  // --- VVV TAMBAHKAN CONSOLE LOG UNTUK DEBUGGING ---
  console.log("ID dari URL (setelah parseInt):", articleIdToUse); // Cek ID yang akan dicari
  // --- ^^^ AKHIR CONSOLE LOG ^^^ ---

  // Lakukan pencarian hanya jika allNews ada dan articleIdToUse valid
  const article = (allNews && articleIdToUse !== undefined)
    ? allNews.find(item => item.id === articleIdToUse)
    : undefined;

  // --- VVV TAMBAHKAN CONSOLE LOG UNTUK DEBUGGING ---
  console.log("Artikel yang Ditemukan:", article); // Cek hasil pencarian
  // --- ^^^ AKHIR CONSOLE LOG ^^^ ---

  // Tampilkan pesan jika artikel tidak ditemukan
  if (!article) {
    // --- VVV TAMBAHKAN CONSOLE LOG DI BLOK ERROR ---
    console.error(`Artikel dengan ID ${articleIdToUse} tidak ditemukan!`);
    // --- ^^^ AKHIR CONSOLE LOG ^^^ ---
    return (
      <div className="py-24 bg-white min-h-screen relative flex flex-col items-center justify-center text-center px-4">
        {/* ... (Kode fallback 404 Anda) ... */}
         <Link
          to="/berita"
          aria-label="Kembali ke Daftar Berita"
          className="absolute top-12 left-10 md:left-12 z-20 p-2 rounded-full text-primary bg-white shadow-md hover:bg-gray-100 hover:shadow-lg hover:text-secondary transition-all"
        >
          <Undo2 size={28} />
        </Link>
        <h1 className="text-4xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-gray-600">Berita tidak ditemukan.</p>
        <p className="text-sm text-gray-400 mt-2">ID yang dicari: {id || 'Tidak ada'}</p>
        <p className="text-xs text-gray-400 mt-1">(Pastikan 'src/data/beritaData.js' ada dan memiliki item dengan ID ini).</p>
        <Link
          to="/berita"
          className="mt-6 px-6 py-2 bg-primary text-white rounded-full hover:bg-blue-800 transition-colors"
        >
          Kembali ke Semua Berita
        </Link>
      </div>
    );
  }

  // Tampilkan detail artikel jika ditemukan
  return (
    <div className="py-24 bg-white min-h-screen relative">
      {/* ... (Tombol kembali Anda) ... */}
       <Link
        to="/berita"
        aria-label="Kembali ke Daftar Berita"
        className="absolute top-12 left-10 md:left-12 z-20 p-2 rounded-full text-primary bg-white shadow-md hover:bg-gray-100 hover:shadow-lg hover:text-secondary transition-all"
      >
        <Undo2 size={28} />
      </Link>

      <article className="container mx-auto px-4 max-w-4xl">
         {/* ... (Judul, Metadata, Gambar, Konten Anda) ... */}
         <h1 className="text-3xl md:text-5xl font-bold text-primary mb-6 text-center leading-tight">
          {article.title}
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 mb-8 text-gray-600">
          <div className="flex items-center gap-2">
            <Tag size={18} className="text-secondary" />
            <span className="font-medium">{article.category}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={18} className="text-secondary" />
            <time>{article.date}</time>
          </div>
        </div>

        <img
          src={article.image}
          alt={article.title}
          className="w-full aspect-video object-cover rounded-ifups shadow-xl mb-10"
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/1200x675/cccccc/ffffff?text=Gambar+Error"; }} // Fallback
        />

        <div
          className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>
    </div>
  );
};

export default BeritaDetail;

