import { useState } from 'react'
import { useAppData } from '../context/useAppData'

function ServicesPage() {
  const { layanan, simpanLayanan } = useAppData()
  const [draftHarga, setDraftHarga] = useState(() =>
    Object.fromEntries(layanan.map((item) => [item.id, item.hargaPerKg]))
  )

  return (
    <section className="page-section">
      <article className="card">
        <h3>Pengaturan Harga Layanan</h3>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Layanan</th>
                <th>Estimasi</th>
                <th>Harga / Kg</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {layanan.map((item) => (
                <tr key={item.id}>
                  <td>{item.nama}</td>
                  <td>{item.estimasiJam} Jam</td>
                  <td>
                    <input
                      type="number"
                      value={draftHarga[item.id]}
                      onChange={(event) =>
                        setDraftHarga((prev) => ({ ...prev, [item.id]: event.target.value }))
                      }
                    />
                  </td>
                  <td>
                    <button type="button" onClick={() => simpanLayanan(item.id, draftHarga[item.id])}>
                      Simpan
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </section>
  )
}

export default ServicesPage
