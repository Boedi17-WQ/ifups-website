const About = () => {
  return (
    <section id="tentang" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        {/* Judul Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Tentang Kami
          </h2>
          <p className="text-xl text-gray-600">Program Studi Informatika</p>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
        </div>

        {/* Grid Dua Kolom */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Kolom Kiri - Teks */}
          <div>
            <div className="bg-white p-8 rounded-ifups shadow-md">
              <p className="text-gray-700 leading-relaxed mb-6">
                Program Studi Informatika Universitas Pancasakti Tegal merupakan salah satu program studi 
                unggulan yang berfokus pada pengembangan kompetensi di bidang teknologi informasi. 
                Kami menyediakan pendidikan berkualitas dengan kurikulum yang selalu diperbarui mengikuti 
                perkembangan industri dan kebutuhan dunia kerja.
              </p>
              
              <button className="bg-secondary text-primary font-semibold px-8 py-3 rounded-ifups hover:bg-yellow-400 transition-colors">
                Selengkapnya
              </button>
            </div>
          </div>

          {/* Kolom Kanan - Gambar */}
          <div className="relative">
            <div className="bg-primary rounded-ifups overflow-hidden shadow-xl">
              <div className="aspect-video">
                <img
                  src="/gedungUps2.jpg" // ← ganti sesuai lokasi file kamu
                  alt="Mahasiswa Informatika UPS Tegal"
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary rounded-ifups -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
