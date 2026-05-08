function ChildCard({ judul, deskripsi }) {
  return (
    <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-3">
      <h4 className="m-0 text-sm font-semibold text-emerald-900">{judul}</h4>
      <p className="mb-0 mt-1 text-sm text-emerald-800">{deskripsi}</p>
    </div>
  )
}

function ParentChildDemo() {
  const namaKelas = 'Sistem Informasi - React JS'
  const jumlahTopik = 4

  return (
    <div className="card">
      <h3>Component Parent-Child + Props</h3>
      <p>
        Kelas: <strong>{namaKelas}</strong> | Topik hari ini: <strong>{jumlahTopik}</strong>
      </p>
      <div className="mt-3 grid gap-2 md:grid-cols-2">
        <ChildCard judul="Props" deskripsi="Data dikirim dari parent ke child lewat props." />
        <ChildCard judul="JavaScript di JSX" deskripsi="Nilai variabel dan ekspresi ditampilkan langsung." />
      </div>
    </div>
  )
}

export default ParentChildDemo
