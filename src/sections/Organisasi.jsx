const Organisasi = () => {
  const organisations = [
    {
      name: "HIMATIF",
      description: "Himpunan Mahasiswa Informatika",
      logo: "🎯"
    },
    {
      name: "KOMPETEG",
      description: "Komunitas Programming Tegal",
      logo: "💻"
    },
    {
      name: "CYBERSAFE",
      description: "Komunitas Cyber Security",
      logo: "🔒"
    },
    {
      name: "DATACODE",
      description: "Komunitas Data Science",
      logo: "📊"
    }
  ];

  return (
    <section id="organisasi" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Organisasi & Komunitas</h2>
          <p className="text-xl text-gray-600">Prodi Informatika</p>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {organisations.map((org, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-ifups shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="text-4xl mb-4">{org.logo}</div>
              <h3 className="text-xl font-semibold text-primary mb-2">{org.name}</h3>
              <p className="text-gray-600">{org.description}</p>
              <button className="mt-4 text-primary hover:text-secondary font-medium transition-colors">
                Lihat Detail →
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary text-white px-8 py-3 rounded-ifups hover:bg-blue-800 transition-colors">
            Lihat Semua Organisasi
          </button>
        </div>
      </div>
    </section>
  );
};

export default Organisasi;