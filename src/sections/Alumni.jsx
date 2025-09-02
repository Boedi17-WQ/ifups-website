const Alumni = () => {
  const alumni = [
    {
      name: "John Doe",
      graduation: "2020",
      position: "Software Engineer at Google",
      photo: "👨‍💼",
      testimonial: "Kuliah di Informatika UPS memberikan fondasi yang kuat untuk karir saya di tech industry."
    },
    {
      name: "Jane Smith",
      graduation: "2019",
      position: "Data Scientist at Amazon",
      photo: "👩‍🔬",
      testimonial: "Dosen-dosen yang kompeten dan kurikulum yang relevan dengan industri."
    },
    {
      name: "Mike Johnson",
      graduation: "2021",
      position: "UX Designer at Microsoft",
      photo: "👨‍🎨",
      testimonial: "Proyek praktikum yang challenging mempersiapkan saya untuk dunia kerja."
    },
    {
      name: "Sarah Wilson",
      graduation: "2018",
      position: "CTO at Startup",
      photo: "👩‍💻",
      testimonial: "Komunitas yang supportive dan jaringan alumni yang kuat."
    }
  ];

  return (
    <section id="alumni" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Alumni Berprestasi</h2>
          <p className="text-xl text-gray-600">Prodi Informatika</p>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {alumni.map((person, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-ifups shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-secondary to-yellow-400 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                {person.photo}
              </div>
              <h3 className="text-lg font-semibold text-primary mb-1">{person.name}</h3>
              <p className="text-sm text-gray-600 mb-2">Lulusan {person.graduation}</p>
              <p className="text-sm text-primary font-medium mb-4">{person.position}</p>
              <p className="text-sm text-gray-700 italic">"{person.testimonial}"</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary text-white px-8 py-3 rounded-ifups hover:bg-blue-800 transition-colors">
            Lihat Profil Alumni Lainnya
          </button>
        </div>
      </div>
    </section>
  );
};

export default Alumni;