import { useMemo } from 'react'
import { useAppData } from '../context/useAppData'

function ReportsPage() {
  const { pesanan, layanan } = useAppData()

  const laporan = useMemo(() => {
    const totalOrder = pesanan.length
    const selesai = pesanan.filter((item) => item.status === 'Selesai').length
    const pendapatan = pesanan.reduce((acc, item) => acc + item.total, 0)
    const rateSelesai = totalOrder === 0 ? 0 : Math.round((selesai / totalOrder) * 100)

    const performaLayanan = layanan.map((srv) => {
      const jumlah = pesanan.filter((item) => item.layanan === srv.nama).length
      return { nama: srv.nama, jumlah }
    })

    return { totalOrder, selesai, pendapatan, rateSelesai, performaLayanan }
  }, [layanan, pesanan])

  const maxJumlah = Math.max(...laporan.performaLayanan.map((item) => item.jumlah), 1)

  return (
    <section className="page-section">
      <div className="kpi-grid">
        <article className="card kpi-card">
          <span>Total Order</span>
          <strong>{laporan.totalOrder}</strong>
        </article>
        <article className="card kpi-card">
          <span>Order Selesai</span>
          <strong>{laporan.selesai}</strong>
        </article>
        <article className="card kpi-card">
          <span>Rasio Selesai</span>
          <strong>{laporan.rateSelesai}%</strong>
        </article>
        <article className="card kpi-card">
          <span>Total Pendapatan</span>
          <strong>Rp{laporan.pendapatan.toLocaleString('id-ID')}</strong>
        </article>
      </div>

      <article className="card">
        <h3>Performa Layanan</h3>
        <div className="bar-list">
          {laporan.performaLayanan.map((item) => (
            <div key={item.nama} className="bar-item">
              <span>{item.nama}</span>
              <div className="bar-track">
                <div
                  className="bar-fill"
                  style={{ width: `${Math.max(12, (item.jumlah / maxJumlah) * 100)}%` }}
                />
              </div>
              <strong>{item.jumlah}</strong>
            </div>
          ))}
        </div>
      </article>
    </section>
  )
}

export default ReportsPage
