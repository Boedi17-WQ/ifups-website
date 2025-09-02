function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary text-center mb-8">
          Selamat Datang di IFUPS Website
        </h1>
        
        <div className="bg-white p-8 rounded-ifups shadow-md max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Testing Tailwind CSS
          </h2>
          
          <p className="text-gray-700 mb-6">
            Jika Anda melihat styles ini bekerja, berarti Tailwind CSS sudah terkonfigurasi dengan benar!
          </p>
          
          <div className="flex gap-4">
            <button className="btn-primary">
              Primary Button
            </button>
            
            <button className="btn-secondary">
              Secondary Button
            </button>
          </div>
        </div>
        
        {/* Test custom card styles */}
        <div className="mt-8 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="card-dosen bg-white p-4 shadow-md">
            <h3 className="text-xl font-semibold text-primary">Card Dosen</h3>
            <p className="text-gray-600 mt-2">Ini adalah contoh card dosen</p>
          </div>
          
          <div className="card-alumni bg-white p-4 shadow-md">
            <h3 className="text-xl font-semibold text-primary">Card Alumni</h3>
            <p className="text-gray-600 mt-2">Ini adalah contoh card alumni</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App