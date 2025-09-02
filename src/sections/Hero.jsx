import { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-blue-900"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center text-white transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Selamat Datang di<br />
              <span className="text-secondary">Program Studi Informatika</span>
            </h1>
          </div>

          {/* Divider */}
          <div className="w-24 h-1 bg-secondary mx-auto my-8 transform transition-transform duration-1000 delay-300"
               style={{ transform: isVisible ? 'scaleX(1)' : 'scaleX(0)' }}></div>

          {/* University Name */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
              UNIVERSITAS PANCASAKTI TEGAL
            </h2>
          </div>

{/* Scroll Indicator + CTA Buttons */}
<div className="mt-16 flex flex-col items-center">
  {/* Scroll Indicator */}
  <div className="animate-bounce mb-6">
    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
      <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
    </div>
  </div>

  {/* CTA Buttons */}
  <div className="flex flex-col sm:flex-row gap-4">
    <button className="bg-secondary text-primary font-bold px-8 py-4 rounded-ifups hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg">
      Daftar Sekarang
    </button>
    <button className="border-2 border-white text-white font-bold px-8 py-4 rounded-ifups hover:bg-white hover:text-primary transform hover:scale-105 transition-all duration-300">
      Pelajari Lebih Lanjut
    </button>
  </div>
</div>


        </div>
      </div>
    </section>
  );
};

export default Hero;