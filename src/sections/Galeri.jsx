import { useState } from 'react';

const Galeri = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Semua' },
    { id: 'event', name: 'Acara' },
    { id: 'lab', name: 'Laboratorium' },
    { id: 'student', name: 'Kegiatan Mahasiswa' }
  ];

  const gallery = [
    { id: 1, category: 'event', image: "🎉", title: "Wisuda 2024" },
    { id: 2, category: 'lab', image: "🔬", title: "Lab Komputer" },
    { id: 3, category: 'student', image: "👨‍💻", title: "Studi Kelompok" },
    { id: 4, category: 'event', image: "🏆", title: "Competition" },
    { id: 5, category: 'lab', image: "🤖", title: "Lab Robotika" },
    { id: 6, category: 'student', image: "👥", title: "Diskusi" },
    { id: 7, category: 'event', image: "🎓", title: "Seminar" },
    { id: 8, category: 'lab', image: "💻", title: "Lab Programming" }
  ];

  const filteredGallery = activeCategory === 'all' 
    ? gallery 
    : gallery.filter(item => item.category === activeCategory);

  return (
    <section id="galeri" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Galeri Kegiatan</h2>
          <p className="text-xl text-gray-600">Prodi Informatika</p>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-ifups font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {filteredGallery.map(item => (
            <div key={item.id} className="group relative bg-gray-100 rounded-ifups overflow-hidden aspect-square">
              <div className="w-full h-full flex items-center justify-center text-4xl">
                {item.image}
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <button className="bg-secondary text-primary px-4 py-2 rounded-ifups text-sm font-medium">
                    Lihat Detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary text-white px-8 py-3 rounded-ifups hover:bg-blue-800 transition-colors">
            Lihat Galeri Lengkap
          </button>
        </div>
      </div>
    </section>
  );
};

export default Galeri;