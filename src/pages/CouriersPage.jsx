import { useAppData } from '../context/useAppData'

function CouriersPage() {
  const { kurir, toggleKurir } = useAppData()

  return (
    <section className="page-section">
      <article className="card">
        <h3>Status Kurir</h3>
        <ul className="list-clean">
          {kurir.map((item) => (
            <li key={item.id}>
              <div>
                <strong>{item.nama}</strong>
                <p>
                  {item.id} - Area {item.area}
                </p>
              </div>
              <button type="button" className={item.aktif ? 'btn-soft' : 'btn-warning'} onClick={() => toggleKurir(item.id)}>
                {item.aktif ? 'Aktif' : 'Tidak Aktif'}
              </button>
            </li>
          ))}
        </ul>
      </article>
    </section>
  )
}

export default CouriersPage
