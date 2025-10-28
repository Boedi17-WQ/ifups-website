const Dosen = () => {
  const lecturers = [
    {
      name: "Prof.eko",
      position: "Guru Besar Artificial Intelligence",
      photo: "/contoh.jpg",
      expertise: ["AI", "Machine Learning", "Data Science"]
    },
    {
      name: "Prof.eko",
      position: "Ketua Program Studi",
      photo: "/images/dosen2.jpg",
      expertise: ["Web Development", "Database", "Software Engineering"]
    },
    {
      name: "Prof.eko",
      position: "Dosen Senior",
      photo: "/images/dosen3.jpg",
      expertise: ["Networking", "Cyber Security", "Cloud Computing"]
    },
    {
      name: "Prof.eko",
      position: "Dosen Multimedia",
      photo: "/images/dosen4.jpg",
      expertise: ["UI/UX Design", "Graphic Design", "Animation"]
    }
  ];

  return (
    <section id="dosen" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Judul Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">MEET OUR</h2>
          <p className="text-xl text-gray-600">LECTURERS</p>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
        </div>

        {/* Grid Card Dosen */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {lecturers.map((lecturer, index) => (
            <div
              key={index}
              className="bg-white rounded-ifups shadow-md hover:shadow-xl transition-all overflow-hidden"
            >
              {/* Foto Dosen dengan Gradasi dan Nama */}
              <div className="relative">
                <img
                  src={lecturer.photo}
                  alt={lecturer.name}
                  className="w-full h-64 object-cover"
                />
                {/* Overlay gradasi biru di bawah foto */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-800 to-transparent flex flex-col justify-end items-center text-white p-4">
                  <h3 className="text-lg font-semibold drop-shadow-md">{lecturer.name}</h3>
                </div>
              </div>

              {/* Info Dosen */}
              <div className="p-6 text-center">
                <p className="text-gray-600 font-medium mb-3">{lecturer.position}</p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {lecturer.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-gray-100 text-primary text-sm px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Tombol Lihat Profil */}
                <button className="mt-2 bg-blue-800 text-white px-6 py-2 rounded-ifups hover:bg-blue-900 transition-colors">
                  Lihat Profil
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol Lihat Semua Dosen */}
        <div className="text-center mt-14">
          <button className="bg-primary text-white px-10 py-3 rounded-ifups hover:bg-blue-900 transition-colors">
            Lihat Semua Dosen
          </button>
        </div>
      </div>
    </section>
  );
};

export default Dosen;
