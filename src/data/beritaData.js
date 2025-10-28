// src/data/beritaData.js

// Kita ekspor data ini agar bisa diimpor oleh halaman lain
export const allNews = [
  {
    id: 1,
    title: "Mahasiswa Informatika Juara Hackathon Nasional 2024",
    date: "15 Agustus 2024",
    excerpt: "Tim mahasiswa Informatika UPS berhasil meraih juara 1 dalam kompetisi hackathon nasional yang bergengsi...",
    image: "/images/berita/hackathon.jpg",
    category: "Prestasi",
    content: `
      <p class="mb-4">Tim mahasiswa Informatika Universitas Pancasakti Tegal berhasil meraih juara 1 dalam kompetisi hackathon nasional yang diselenggarakan di Jakarta. Kompetisi ini diikuti oleh puluhan tim dari berbagai universitas ternama di Indonesia.</p>
      <p class="mb-4">Dengan mengusung aplikasi "EcoWaste", sebuah platform manajemen sampah berbasis AI, tim kami berhasil memukau juri dengan solusi inovatif untuk permasalahan lingkungan perkotaan. Aplikasi ini dapat mengidentifikasi jenis sampah melalui kamera smartphone dan memberikan rekomendasi pengelolaan yang tepat.</p>
      <blockquote class="border-l-4 border-secondary pl-4 italic my-6 text-gray-700">
        "Kemenangan ini adalah buah dari kerja keras tim dan dukungan penuh dari dosen pembimbing serta program studi. Kami berharap aplikasi ini dapat dikembangkan lebih lanjut dan memberi dampak nyata." - Ujar Ketua Tim.
      </blockquote>
      <p>Kaprodi Informatika, Bpk. Ahmad, M.Kom., menyatakan kebanggaannya dan akan terus mendukung inovasi mahasiswa di kancah nasional maupun internasional.</p>
    `
  },
  {
    id: 2,
    title: "Workshop Web Development Modern dengan React.js",
    date: "10 Agustus 2024",
    excerpt: "Program studi menyelenggarakan workshop web development intensif selama dua hari untuk mahasiswa semester 5...",
    image: "/gedungUps1.jpg", // Menggunakan gambar placeholder
    category: "Acara",
    content: `
      <p class="mb-4">Program studi Informatika UPS sukses menyelenggarakan workshop "Web Development Modern dengan React.js" yang ditujukan khusus untuk mahasiswa semester 5. Acara ini menghadirkan praktisi industri sebagai pemateri utama.</p>
      <p class="mb-4">Workshop ini membahas konsep-konsep fundamental React.js, seperti components, state, props, dan hooks. Peserta juga diajarkan bagaimana membangun sebuah aplikasi web interaktif dari awal hingga proses deployment.</p>
      <h4 class="text-xl font-semibold text-primary mt-6 mb-3">Materi yang Dibahas:</h4>
      <ul class="list-disc list-inside mb-6 space-y-2">
        <li>Pengenalan JSX dan Virtual DOM</li>
        <li>Manajemen State dengan useState dan useReducer</li>
        <li>Side Effects dengan useEffect</li>
        <li>Routing dengan React Router</li>
        <li>Koneksi ke API eksternal menggunakan fetch/axios</li>
        <li>Styling dengan Tailwind CSS</li>
      </ul>
      <p>Antusiasme peserta sangat tinggi, dan diharapkan workshop ini dapat meningkatkan keahlian teknis mahasiswa agar lebih siap bersaing di dunia industri teknologi informasi.</p>
    `
  },
  {
    id: 3,
    title: "Kerjasama dengan Perusahaan Tech Terkemuka",
    date: "5 Agustus 2024",
    excerpt: "Prodi Informatika menjalin kerjasama strategis dengan beberapa perusahaan teknologi untuk program magang MBKM...",
    image: "/images/berita/kerjasama.jpg",
    category: "Kerjasama",
    content: `
      <p class="mb-4">Dalam upaya meningkatkan relevansi kurikulum dengan kebutuhan industri, Program Studi Informatika secara resmi menjalin kerjasama (MoU) dengan beberapa perusahaan teknologi terkemuka di Indonesia.</p>
      <p class="mb-4">Kerjasama ini mencakup beberapa poin penting, salah satunya adalah program magang terstruktur (MBKM) bagi mahasiswa. Mahasiswa akan mendapatkan kesempatan untuk terlibat langsung dalam proyek-proyek nyata di perusahaan mitra selama satu semester.</p>
      <p class="mb-4">Selain itu, kerjasama ini juga membuka peluang untuk proyek penelitian bersama antara dosen dan praktisi industri, serta kuliah tamu dari para ahli di bidangnya.</p>
      <p>Perusahaan yang terlibat antara lain PT. Inovasi Digital Nusantara, TechSolusindo Prima, dan CyberData Global. Penandatanganan MoU dilakukan secara simbolis di Aula Fakultas Teknik Universitas Pancasakti Tegal.</p>
    `
  },
  {
    id: 4,
    title: "Peluncuran Laboratorium AI dan Machine Learning",
    date: "1 Agustus 2024",
    excerpt: "Laboratorium baru dengan spesialisasi AI dan ML resmi dibuka untuk mendukung kegiatan riset dan praktikum mahasiswa...",
    image: "/images/berita/lab-ai.jpg",
    category: "Fasilitas",
    content: `
      <p class="mb-4">Program Studi Informatika meresmikan Laboratorium Kecerdasan Buatan (AI) dan Pembelajaran Mesin (Machine Learning) terbaru. Laboratorium ini dilengkapi dengan perangkat keras canggih, termasuk beberapa unit GPU berkinerja tinggi untuk mendukung komputasi data besar dan pelatihan model deep learning.</p>
      <p class="mb-4">Fasilitas ini diharapkan dapat menjadi pusat penelitian unggulan bagi dosen dan mahasiswa yang tertarik mendalami bidang AI, Data Science, Natural Language Processing (NLP), dan Computer Vision. Laboratorium ini terbuka untuk mahasiswa yang sedang mengerjakan tugas akhir, proyek penelitian, atau mengikuti mata kuliah terkait.</p>
      <p>Acara peresmian dihadiri oleh Rektor Universitas Pancasakti Tegal dan jajaran dekanat Fakultas Teknik.</p>
    `
  },
  {
    id: 5,
    title: "Kunjungan Industri Mahasiswa ke Kantor Gojek",
    date: "25 Juli 2024",
    excerpt: "Mahasiswa semester 6 berkesempatan melakukan kunjungan industri ke kantor pusat Gojek di Jakarta...",
    image: "/gedungUps2.jpg", // Menggunakan gambar placeholder
    category: "Acara",
    content: `
      <p class="mb-4">Sebanyak 80 mahasiswa Informatika semester 6 melakukan kunjungan industri ke kantor pusat Gojek di Jakarta. Kunjungan ini bertujuan untuk memberikan wawasan langsung mengenai kultur kerja dan teknologi yang digunakan di salah satu perusahaan startup unicorn terbesar di Asia Tenggara.</p>
      <p class="mb-4">Dalam kunjungan tersebut, mahasiswa mendapatkan sesi berbagi dari para engineer Gojek mengenai tantangan dalam mengelola aplikasi berskala besar, arsitektur microservices, dan penerapan data science untuk optimalisasi layanan seperti GoRide, GoFood, dan GoPay.</p>
      <figure class="my-6">
        <img src="/gedungUps3.jpg" alt="Suasana di kantor Gojek" class="rounded-lg shadow-md mx-auto max-w-lg w-full" />
        <figcaption class="text-center text-sm text-gray-600 mt-2">Suasana presentasi di kantor Gojek.</figcaption>
      </figure>
      <p>Mahasiswa juga diajak berkeliling kantor dan melihat fasilitas kerja yang modern dan kolaboratif. Acara ini ditutup dengan sesi tanya jawab yang interaktif, memberikan kesempatan bagi mahasiswa untuk bertanya langsung kepada para praktisi.</p>
    `
  },
  {
    id: 6,
    title: "Prodi Informatika Raih Akreditasi 'Baik Sekali'",
    date: "20 Juli 2024",
    excerpt: "Kabar gembira! Setelah melalui proses asesmen lapangan, Prodi Informatika UPS resmi mendapatkan akreditasi 'Baik Sekali'...",
    image: "/gedungUps3.jpg", // Menggunakan gambar placeholder
    category: "Akademik",
    content: `
      <p class="mb-4">Kabar gembira bagi seluruh civitas akademika! Program Studi Informatika Universitas Pancasakti Tegal secara resmi diumumkan telah meraih peringkat Akreditasi <strong>"Baik Sekali"</strong> dari Lembaga Akreditasi Mandiri Informatika dan Komputer (LAM INFOKOM).</p>
      <p class="mb-4">Pencapaian ini merupakan hasil dari upaya kolektif seluruh dosen, staf administrasi, mahasiswa, dan alumni dalam meningkatkan kualitas tridharma perguruan tinggi: pendidikan, penelitian, dan pengabdian kepada masyarakat. Proses asesmen lapangan yang telah dilaksanakan beberapa waktu lalu berjalan lancar dan mendapatkan respons positif dari tim asesor.</p>
      <blockquote class="border-l-4 border-secondary pl-4 italic my-6 text-gray-700">
        "Akreditasi 'Baik Sekali' ini adalah pengakuan atas komitmen kita bersama dalam menjaga dan meningkatkan mutu. Ini menjadi motivasi bagi kami untuk terus berinovasi dan memberikan yang terbaik bagi mahasiswa dan masyarakat." - Kaprodi Informatika.
      </blockquote>
      <p>Dengan akreditasi ini, Prodi Informatika UPS semakin mantap dalam komitmennya untuk menghasilkan lulusan yang kompeten, berdaya saing tinggi, dan siap berkontribusi di era teknologi informasi yang terus berkembang pesat.</p>
    `
  },
];

