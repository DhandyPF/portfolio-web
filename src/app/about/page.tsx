export default function About() {
  return (
    <section className="container mx-auto px-6 py-20 max-w-3xl">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white space-y-8">
        <h1 className="text-4xl font-bold">About Me</h1>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Tentang Aku</h2>
          <p className="leading-relaxed text-white/80">Tulis penjelasan panjang tentang dirimu di sini.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Riwayat Pendidikan</h2>
          <ul className="list-disc list-inside space-y-2 text-white/80">
            <li>SD Nama Sekolah (Tahun - Tahun)</li>
            <li>SMP Nama Sekolah (Tahun - Tahun)</li>
            <li>SMA/SMK Nama Sekolah (Tahun - Tahun)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Hobi</h2>
          <ul className="list-disc list-inside space-y-2 text-white/80">
            <li>Hobi 1</li>
            <li>Hobi 2</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Prestasi</h2>
          <ul className="list-disc list-inside space-y-2 text-white/80">
            <li>Prestasi 1</li>
            <li>Prestasi 2</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Pengalaman Kegiatan</h2>
          <ul className="list-disc list-inside space-y-2 text-white/80">
            <li>Kegiatan 1</li>
            <li>Kegiatan 2</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Kehidupan Pribadi</h2>
          <p className="leading-relaxed text-white/80">Ceritakan sedikit tentang kehidupan pribadimu di sini.</p>
        </div>
      </div>
    </section>
  );
}