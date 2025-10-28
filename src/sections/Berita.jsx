import { Link } from "react-router-dom"; // <-- 1. IMPORT LINK

const Berita = () => {
  const news = [
    {
      title: "Mahasiswa Informatika Juara Hackathon Nasional 2024",
      date: "15 Agustus 2024",
      excerpt: "Tim mahasiswa Informatika UPS berhasil meraih juara 1 dalam kompetisi hackathon nasional...",
      image: "/images/berita/hackathon.jpg", 
      category: "Prestasi"
    },
    {
      title: "Workshop Web Development Modern dengan React.js",
      date: "10 Agustus 2024",
      excerpt: "Program studi menyelenggarakan workshop web development untuk mahasiswa semester 5...",
      image: "/gedungUps1.jpg",
      category: "Acara"
    },
    {
      title: "Kerjasama dengan Perusahaan Tech Terkemuka",
      date: "5 Agustus 2024",
      excerpt: "Prodi Informatika menjalin kerjasama dengan perusahaan tech untuk program magang...",
      image: "/images/berita/kerjasama.jpg",
      category: "Kerjasama"
    },
    {
      title: "Peluncuran Laboratorium AI dan Machine Learning",
      date: "1 Agustus 2024",
      excerpt: "Laboratorium baru dengan spesialisasi AI dan ML resmi dibuka untuk mendukung penelitian...",
      image: "/images/berita/lab-ai.jpg",
      category: "Fasilitas"
    }
  ];

  return (
    <section id="berita" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Berita Terbaru</h2>
          <p className="text-xl text-gray-600">Prodi Informatika</p>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {news.map((item, index) => (
            <article key={index} className="bg-white rounded-ifups overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              
              <img
                src={item.image}
                alt={item.title}
                className="w-full aspect-video object-cover"
              />
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-secondary text-primary text-sm px-3 py-1 rounded-full font-medium">
                    {item.category}
                  </span>
                  <time className="text-sm text-gray-500">{item.date}</time>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3 hover:text-secondary transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-700 mb-4">{item.excerpt}</p>
                {/* CATATAN: Tombol "Baca Selengkapnya" ini juga idealnya 
                  menggunakan <Link> ke halaman detail, tapi untuk sekarang
                  kita biarkan dulu sesuai permintaan Anda.
                */}
                <button className="text-primary hover:text-secondary font-medium transition-colors">
                  Baca Selengkapnya →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* --- VVV BAGIAN INI DIUBAH DARI <button> MENJADI <Link> VVV --- */}
        <div className="text-center mt-12">
          <Link
            to="/berita" // <-- 2. TAMBAHKAN 'to' KE HALAMAN 'BeritaIndex'
            className="bg-primary text-white px-8 py-3 rounded-ifups hover:bg-blue-800 transition-colors"
          >
            Lihat Semua Berita
          </Link>
        </div>
        {/* --- ^^^ AKHIR PERUBAHAN ^^^ --- */}

      </div>
    </section>
  );
};

export default Berita;