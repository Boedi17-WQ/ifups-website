const Kontak = () => {
  const contactInfo = [
    {
      title: "Email",
      subtitle: "Hubungi kami melalui email untuk pertanyaan umum",
      detail: "info@ifups.tegal.ac.id",
      link: "mailto:info@ifups.tegal.ac.id",
      color: "#003D8D",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "WhatsApp",
      subtitle: "Klik untuk memulai percakapan dengan kami",
      detail: "(0283) 1234567",
      link: "https://wa.me/6281234567890",
      color: "#003D8D",
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.446h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      )
    },
    {
      title: "Lokasi",
      subtitle: "Kampus kami berada di",
      detail: "Jl. Halmahera No.1, Tegal, Jawa Tengah",
      link: "https://maps.google.com/?q=Jl.+Halmahera+No.1,+Tegal,+Jawa+Tengah",
      color: "#003D8D",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  const handleContactClick = (link, platform) => {
    if (platform === 'Lokasi') {
      window.open(link, '_blank');
    } else {
      window.location.href = link;
    }
  };

  return (
    <section id="kontak" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003D8D] mb-4">Hubungi Kami</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Program Studi Informatika UPS Tegal siap melayani kebutuhan informasi dan pertanyaan Anda
          </p>
          <div className="w-20 h-1 bg-[#003D8D] mx-auto mt-4"></div>
        </div>

        {/* Single Card Design */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            {/* Header - Dikosongkan */}
            <div className="py-6 px-8">
              {/* Header sengaja dikosongkan */}
            </div>

            {/* Contact Content */}
            <div className="px-8 pb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-[#003D8D] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      {contact.icon}
                    </div>
                    
                    <h4 className="text-lg font-semibold text-[#003D8D] mb-2">{contact.title}</h4>
                    
                    <p className="text-gray-600 text-sm mb-2 leading-relaxed">
                      {contact.subtitle}
                    </p>
                    
                    <p className="text-gray-800 font-medium text-sm">
                      {contact.detail}
                    </p>
                    
                    <button
                      onClick={() => handleContactClick(contact.link, contact.title)}
                      className="mt-4 bg-[#003D8D] text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors font-medium text-sm w-full"
                    >
                      {contact.title === 'Lokasi' ? 'Lihat Peta' : `Hubungi via ${contact.title}`}
                    </button>
                  </div>
                ))}
              </div>

              {/* Additional Information */}
              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-xl font-semibold text-[#003D8D] mb-4 text-center">Informasi Operasional</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <h5 className="font-semibold text-[#003D8D] mb-2">Jam Operasional</h5>
                    <div className="text-gray-700 space-y-1">
                      <p>Senin - Jumat: 08:00 - 16:00 WIB</p>
                      <p>Sabtu: 08:00 - 12:00 WIB</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <h5 className="font-semibold text-[#003D8D] mb-2">Program Studi</h5>
                    <div className="text-gray-700 space-y-1">
                      <p>Strata 1 (S1) Informatika</p>
                      <p>Akreditasi: B</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 py-4 px-8 border-t border-gray-200">
              <p className="text-center text-gray-600 text-sm">
                © {new Date().getFullYear()} Program Studi Informatika UPS Tegal. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kontak;