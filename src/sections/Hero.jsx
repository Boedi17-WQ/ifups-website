import { useState, useEffect } from "react";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [direction, setDirection] = useState(1); // 1 = maju, -1 = mundur

  const images = ["/gedungUps1.jpg", "/gedungUps2.jpg", "/gedungUps3.jpg"];

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setCurrentImage((prev) => {
        if (prev === images.length - 1) {
          setDirection(-1);
          return prev - 1;
        } else if (prev === 0) {
          setDirection(1);
          return prev + 1;
        } else {
          return prev + direction;
        }
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [direction, images.length]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Wrapper untuk slider */}
      <div
        className="flex h-full w-full transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentImage * 100}%)`,
        }}
      >
        {images.map((src, index) => (
          <div key={index} className="flex-shrink-0 w-full h-full">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Lapisan gradasi biru yang lebih hidup dan lembut */}
      <div className="absolute inset-0">
        
        {/* --- VVV GRADASI UTAMA DIUBAH DI SINI VVV --- */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/70 via-blue-600/60 to-blue-900/80 mix-blend-overlay"></div>
        {/* --- ^^^ GRADASI UTAMA DIUBAH DI SINI ^^^ --- */}

        {/* Aksen gradasi lembut dari atas ke bawah */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-blue-700/40 mix-blend-soft-light"></div>

        {/* Cahaya halus dari sisi kanan bawah */}
        <div className="absolute right-0 bottom-0 w-2/3 h-2/3 bg-gradient-radial from-blue-500/40 via-transparent to-transparent blur-3xl opacity-40"></div>

        {/* Cahaya lembut dari kiri atas */}
        <div className="absolute left-0 top-0 w-1/2 h-1/2 bg-gradient-radial from-cyan-400/40 via-transparent to-transparent blur-2xl opacity-40"></div>
      </div>

      {/* Overlay hitam transparan agar teks kontras */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Teks hero */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-10">
        <h1
          className={`text-4xl md:text-6xl font-bold leading-tight mb-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Selamat Datang di <br />
          <span className="text-yellow-400">Program Studi Informatika</span>
        </h1>

        <div
          className={`w-24 h-1 bg-yellow-400 mx-auto my-6 transform transition-transform duration-1000 delay-300 ${
            isVisible ? "scale-x-100" : "scale-x-0"
          }`}
        ></div>

        <h2
          className={`text-2xl md:text-3xl font-semibold transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          UNIVERSITAS PANCASAKTI TEGAL
        </h2>

        {/* Tombol CTA */}
        <div
          className={`mt-12 flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button className="bg-yellow-400 text-primary font-bold px-8 py-4 rounded-ifups hover:bg-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Daftar Sekarang
          </button>
          <button className="border-2 border-white text-white font-bold px-8 py-4 rounded-ifups hover:bg-white hover:text-primary transform hover:scale-105 transition-all duration-300">
            Pelajari Lebih Lanjut
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;