import { useMemo, useState } from 'react'
import { useAppData } from '../context/useAppData'

function OrdersPage() {
  const { pesanan, tambahPesanan, ubahStatusPesanan } = useAppData()
  const [filterStatus, setFilterStatus] = useState('Semua')
  const [form, setForm] = useState({ pelanggan: '', layanan: 'Laundry Reguler', berat: 1 })

  const dataTampil = useMemo(() => {
    if (filterStatus === 'Semua') return pesanan
    return pesanan.filter((item) => item.status === filterStatus)
  }, [filterStatus, pesanan])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.pelanggan.trim()) return

    const tarif = form.layanan === 'Laundry Express' ? 13000 : form.layanan === 'Setrika Saja' ? 7000 : 9000
    tambahPesanan({
      pelanggan: form.pelanggan.trim(),
      layanan: form.layanan,
      berat: Number(form.berat),
      total: Number(form.berat) * tarif,
    })
    setForm({ pelanggan: '', layanan: 'Laundry Reguler', berat: 1 })
  }

  return (
    <section className="page-section">
      <div className="two-col">
        <article className="card">
          <h3>Tambah Pesanan Baru</h3>
          <form className="form-stack" onSubmit={handleSubmit}>
            <input
              placeholder="Nama pelanggan"
              value={form.pelanggan}
              onChange={(event) => setForm((prev) => ({ ...prev, pelanggan: event.target.value }))}
            />
            <select
              value={form.layanan}
              onChange={(event) => setForm((prev) => ({ ...prev, layanan: event.target.value }))}
            >
              <option>Laundry Reguler</option>
              <option>Laundry Express</option>
              <option>Setrika Saja</option>
            </select>
            <input
              type="number"
              min="1"
              value={form.berat}
              onChange={(event) => setForm((prev) => ({ ...prev, berat: event.target.value }))}
            />
            <button type="submit">Simpan Pesanan</button>
          </form>
        </article>

        <article className="card">
          <h3>Filter Status</h3>
          <div className="chip-row">
            {['Semua', 'Baru', 'Diproses', 'Siap Antar', 'Selesai'].map((status) => (
              <button
                key={status}
                type="button"
                className={filterStatus === status ? 'active' : ''}
                onClick={() => setFilterStatus(status)}
              >
                {status}
              </button>
            ))}
          </div>
        </article>
      </div>

      <article className="card">
        <h3>Daftar Pesanan</h3>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Pelanggan</th>
                <th>Layanan</th>
                <th>Berat</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {dataTampil.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.pelanggan}</td>
                  <td>{item.layanan}</td>
                  <td>{item.berat} kg</td>
                  <td>Rp{item.total.toLocaleString('id-ID')}</td>
                  <td>
                    <select value={item.status} onChange={(event) => ubahStatusPesanan(item.id, event.target.value)}>
                      <option>Baru</option>
                      <option>Diproses</option>
                      <option>Siap Antar</option>
                      <option>Selesai</option>
                    </select>
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

export default OrdersPage
