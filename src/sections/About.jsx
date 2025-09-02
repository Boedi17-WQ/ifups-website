const About = () => {
  return (
    <section id="tentang" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Tentang Kami</h2>
          <p className="text-xl text-gray-600">Prodi Informatika</p>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <div className="bg-white p-8 rounded-ifups shadow-md">
              <p className="text-gray-700 leading-relaxed mb-6">
                Program Studi Informatika Universitas Pancasakti Tegal merupakan salah satu program studi 
                unggulan yang berfokus pada pengembangan kompetensi di bidang teknologi informasi. 
                Kami menyediakan pendidikan berkualitas dengan kurikulum yang selalu update mengikuti 
                perkembangan industri.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Dengan fasilitas laboratorium yang lengkap dan dosen-dosen yang berpengalaman, 
                kami berkomitmen untuk menghasilkan lulusan yang siap bersaing di dunia kerja 
                dan mampu berkontribusi dalam perkembangan teknologi informasi.
              </p>
              <button className="bg-secondary text-primary font-semibold px-8 py-3 rounded-ifups hover:bg-yellow-400 transition-colors">
                Selengkapnya
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-primary rounded-ifups overflow-hidden shadow-xl">
              <div className="aspect-video bg-gradient-to-r from-primary to-blue-800 flex items-center justify-center">
                <svg className="w-20 h-20 text-white opacity-50" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
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