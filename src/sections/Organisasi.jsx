// src/sections/Organisasi.jsx
import { Link } from "react-router-dom"; // Impor Link jika belum

const Organisasi = () => {
  const organisations = [
    {
      name: "HIMATIF",
      description: "Himpunan Mahasiswa Informatika",
      // --- VVV Ubah emoji menjadi path gambar VVV ---
      logo: "/Logo HMIF.jpg" // Contoh path, sesuaikan
    },
    {
      name: "PEMCODE",
      description: "Komunitas Programming Tegal",
      // --- VVV Ubah emoji menjadi path gambar VVV ---
      logo: "/LOGO  PEMCODE.png"
    },
    {
      name: "CYBERSAFE",
      description: "Komunitas Cyber Security",
      // --- VVV Ubah emoji menjadi path gambar VVV ---
      logo: "/images/organisasi/cybersafe.png"
    },
    {
      name: "DATACODE",
      description: "Komunitas Data Science",
      // --- VVV Ubah emoji menjadi path gambar VVV ---
      logo: "/images/organisasi/datacode.png"
    }
  ];

  return (
    <section id="organisasi" className="py-20 bg-white"> {/* Pastikan background putih */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Organisasi & Komunitas</h2>
          <p className="text-xl text-gray-600">Prodi Informatika</p>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"> {/* Max-width ditambah */}
          {organisations.map((org, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-ifups shadow-md hover:shadow-lg transition-shadow text-center flex flex-col items-center"> {/* Tambah flex */}
              
              {/* --- VVV Bagian ini diubah dari div emoji ke img VVV --- */}
              <img 
                src={org.logo} 
                alt={`Logo ${org.name}`}
                className="h-16 w-16 object-contain mb-4" // Atur ukuran & object-contain
                onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/64x64/cccccc/ffffff?text=${org.name.substring(0,2)}`; }} // Fallback
              />
              {/* --- ^^^ Akhir perubahan ^^^ --- */}
              
              <h3 className="text-xl font-semibold text-primary mb-2">{org.name}</h3>
              <p className="text-gray-600 text-sm flex-grow mb-4">{org.description}</p> {/* Ukuran text dikecilkan */}
              
              {/* Tombol bisa diubah jadi Link nanti */}
            </div>
          ))}
        </div>

        {/* Tombol Lihat Semua bisa diubah jadi Link */}
        <div className="text-center mt-12">
          {/* Contoh jika ingin link ke halaman /organisasi */}
          {/* <Link to="/organisasi" className="bg-primary text-white px-8 py-3 rounded-ifups hover:bg-blue-800 transition-colors">
            Lihat Semua Organisasi
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default Organisasi;
