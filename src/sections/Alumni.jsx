const Alumni = () => {
  const alumni = [
    {
      name: "John Doe",
      graduation: "2020",
      position: "Software Engineer at Google",
      photo: "/contoh.jpg",
      testimonial:
        "Kuliah di Informatika UPS memberikan fondasi yang kuat untuk karir saya di tech industry.",
    },
    {
      name: "Jane Smith",
      graduation: "2019",
      position: "Data Scientist at Amazon",
      photo: "/images/alumni2.jpg",
      testimonial:
        "Dosen-dosen yang kompeten dan kurikulum yang relevan dengan industri.",
    },
    {
      name: "Mike Johnson",
      graduation: "2021",
      position: "UX Designer at Microsoft",
      photo: "/images/ajpg",
      testimonial:
        "Proyek praktikum yang challenging mempersiapkan saya untuk dunia kerja.",
    },
    {
      name: "Sarah Wilson",
      graduation: "2018",
      position: "CTO at Startup",
      photo: "/images/alumni4.jpg",
      testimonial:
        "Komunitas yang supportive dan jaringan alumni yang kuat.",
    },
  ];

  return (
    <section id="alumni" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            ALUMNI BERPRESTASI
          </h2>
          <p className="text-xl text-gray-600">Program Studi Informatika</p>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4"></div>
        </div>

        {/* Grid Card Alumni */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {alumni.map((person, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-ifups shadow-md hover:shadow-xl transition-all overflow-hidden"
            >
              {/* Foto Alumni dengan Gradasi & Nama */}
              <div className="relative">
                <img
                  src={person.photo}
                  alt={person.name}
                  className="w-full h-64 object-cover"
                />
                {/* Overlay gradasi kuning bawah */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-yellow-600 via-yellow-400/80 to-transparent flex flex-col justify-end items-center text-white p-4">
                  <h3 className="text-lg font-semibold drop-shadow-md">
                    {person.name}
                  </h3>
                </div>
              </div>

              {/* Info Alumni */}
              <div className="p-6 text-center">
                <p className="text-sm text-gray-600 mb-1">
                  Lulusan {person.graduation}
                </p>
                <p className="text-sm text-primary font-medium mb-3">
                  {person.position}
                </p>
                <p className="text-sm text-gray-700 italic mb-4">
                  “{person.testimonial}”
                </p>

                {/* Tombol Lihat Profil */}
                <button className="mt-2 bg-yellow-500 text-white px-6 py-2 rounded-ifups hover:bg-yellow-600 transition-colors">
                  Lihat Profil
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol Lihat Semua */}
        <div className="text-center mt-14">
          <button className="bg-yellow-500 text-white px-10 py-3 rounded-ifups hover:bg-yellow-600 transition-colors">
            Lihat Semua Alumni
          </button>
        </div>
      </div>
    </section>
  );
};

export default Alumni;
