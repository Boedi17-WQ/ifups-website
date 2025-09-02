const VisiMisi = () => {
  return (
    <section id="visi-misi" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Visi & Misi Informatika</h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Visi */}
          <div className="bg-gray-50 p-8 rounded-ifups shadow-md">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-4">Visi</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-center">
              Menjadi Program Studi Informatika yang unggul dalam pengembangan teknologi informasi 
              yang berorientasi pada kebutuhan industri dan masyarakat pada tahun 2030.
            </p>
          </div>

          {/* Misi */}
          <div className="bg-gray-50 p-8 rounded-ifups shadow-md">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-4">Misi</h3>
            </div>
            <ul className="text-gray-700 leading-relaxed space-y-3">
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                Menyelenggarakan pendidikan informatika yang berkualitas dan relevan dengan kebutuhan industri
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                Melakukan penelitian dan pengembangan dalam bidang teknologi informasi
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                Memberikan pengabdian kepada masyarakat melalui penerapan teknologi informasi
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;