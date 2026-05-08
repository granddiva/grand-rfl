const metrics = [
  { label: 'Pesanan Aktif', value: '128', growth: '+12%' },
  { label: 'Order Selesai Hari Ini', value: '94', growth: '+8%' },
  { label: 'Jadwal Antar Jemput', value: '32', growth: '+5%' },
]

const toggles = [
  'Tampilkan avatar kasir',
  'Terima outlet baru',
  'Notifikasi order masuk',
  'Notifikasi keterlambatan',
  'Feedback pelanggan',
  'Auto update status cucian',
]

function SettingsPanel({ serviceTabs }) {
  return (
    <section className="settings-card">
      <div className="chips">
        {serviceTabs.map((tab, index) => (
          <button key={tab} type="button" className={index === 0 ? 'active' : ''}>
            {tab}
          </button>
        ))}
      </div>

      <div className="stats-grid">
        {metrics.map((metric) => (
          <article key={metric.label}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
            <small>{metric.growth} dari kemarin</small>
          </article>
        ))}
      </div>

      <div className="form-grid">
        <label>
          Outlet Aktif
          <select defaultValue="Semua Outlet">
            <option>Semua Outlet</option>
            <option>Laundry Express</option>
            <option>Laundry Reguler</option>
          </select>
        </label>

        <label>
          Bahasa Dashboard
          <select defaultValue="Indonesia">
            <option>Indonesia</option>
            <option>English</option>
          </select>
        </label>

        <label>
          SLA Notifikasi
          <select defaultValue="Real-time">
            <option>Real-time</option>
            <option>Tiap 15 menit</option>
            <option>Tiap 1 jam</option>
          </select>
        </label>
      </div>

      <div className="switch-grid">
        {toggles.map((setting, index) => (
          <label key={setting} className="switch-row">
            <span>{setting}</span>
            <input type="checkbox" defaultChecked={index !== 3} />
          </label>
        ))}
      </div>

      <div className="form-grid">
        <label>
          Tema Dashboard
          <select defaultValue="Fresh Green">
            <option>Fresh Green</option>
            <option>Dark Blue</option>
            <option>Clean Mono</option>
          </select>
        </label>

        <label>
          Jadwal Maintenance
          <select defaultValue="Mingguan">
            <option>Harian</option>
            <option>Mingguan</option>
            <option>Bulanan</option>
          </select>
        </label>

        <label>
          Sinkronisasi Data
          <select defaultValue="Otomatis">
            <option>Manual</option>
            <option>Otomatis</option>
          </select>
        </label>
      </div>
    </section>
  )
}

export default SettingsPanel
