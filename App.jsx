// 🟩 App.jsx
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Navbar />

      {/* Konten utama */}
      {/* Tambahkan lg:ml-64 agar konten tidak tertutup sidebar di layar besar */}
      <main className="flex-1 p-6 pt-4 transition-all duration-300 lg:ml-64">
        {/* 🔹 Landing Page */}
        <section
          id="home"
          className="min-h-screen flex flex-col justify-center items-center bg-blue-800 text-white text-center"
        >
          <h1 className="text-4xl font-bold mb-4">
            Selamat Datang di Universitas Pancasakti Tegal
          </h1>
          <p className="max-w-lg text-lg">
            Fakultas Teknik Informatika – Menginspirasi generasi inovatif menuju masa depan digital.
          </p>
        </section>

        {/* 🔹 Konten tambahan */}
        <section id="testing" className="mt-12 container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-blue-700 text-center mb-8">
            Selamat Datang di IFUPS Website
          </h1>

          <div className="bg-white p-8 rounded-2xl shadow-md max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              Testing Tailwind CSS
            </h2>

            <p className="text-gray-700 mb-6">
              Jika Anda melihat styles ini bekerja, berarti Tailwind CSS sudah terkonfigurasi dengan benar!
            </p>

            <div className="flex gap-4 justify-center">
              <button className="bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition">
                Primary Button
              </button>
              <button className="bg-gray-200 text-gray-800 px-5 py-2 rounded-lg hover:bg-gray-300 transition">
                Secondary Button
              </button>
            </div>
          </div>

          {/* 🔹 Card Dosen & Alumni */}
          <div className="mt-8 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold text-blue-700">Card Dosen</h3>
              <p className="text-gray-600 mt-2">Ini adalah contoh card dosen</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-green-600">
              <h3 className="text-xl font-semibold text-blue-700">Card Alumni</h3>
              <p className="text-gray-600 mt-2">Ini adalah contoh card alumni</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
