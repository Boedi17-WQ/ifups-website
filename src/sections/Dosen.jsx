const Dosen = () => {
  const lecturers = [
    {
      name: "Prof. Dr. Lorem Ipsum",
      position: "Guru Besar Artificial Intelligence",
      photo: "👨‍🏫",
      expertise: ["AI", "Machine Learning", "Data Science"]
    },
    {
      name: "Dr. Desen Demozgaman",
      position: "Ketua Program Studi",
      photo: "👩‍🏫",
      expertise: ["Web Development", "Database", "Software Engineering"]
    },
    {
      name: "Dr. Sit Amet",
      position: "Dosen Senior",
      photo: "👨‍💻",
      expertise: ["Networking", "Cyber Security", "Cloud Computing"]
    },
    {
      name: "Dr. Consectetur",
      position: "Dosen Multimedia",
      photo: "👩‍🎨",
      expertise: ["UI/UX Design", "Graphic Design", "Animation"]
    }
  ];

  return (
    <section id="dosen" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">MEET OUR</h2>
          <p className="text-2xl text-secondary font-semibold">LECTURER</p>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {lecturers.map((lecturer, index) => (
            <div key={index} className="bg-white p-6 rounded-ifups shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-blue-800 rounded-full flex items-center justify-center text-4xl text-white mx-auto mb-6">
                {lecturer.photo}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">{lecturer.name}</h3>
              <p className="text-gray-600 mb-4">{lecturer.position}</p>
              <div className="space-y-2">
                {lecturer.expertise.map((skill, skillIndex) => (
                  <span key={skillIndex} className="inline-block bg-gray-100 text-primary text-sm px-3 py-1 rounded-full mr-2 mb-2">
                    {skill}
                  </span>
                ))}
              </div>
              <button className="mt-4 text-primary hover:text-secondary font-medium transition-colors">
                Lihat Profil →
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary text-white px-8 py-3 rounded-ifups hover:bg-blue-800 transition-colors">
            Lihat Semua Dosen
          </button>
        </div>
      </div>
    </section>
  );
};

export default Dosen;