import { useAppData } from '../context/useAppData'

function SettingsPage() {
  const { pengaturan, setPengaturan } = useAppData()

  const updateSetting = (key, value) => {
    setPengaturan((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <section className="page-section">
      <article className="card">
        <h3>Preferensi Sistem</h3>
        <div className="form-grid">
          <label>
            Bahasa Aplikasi
            <select value={pengaturan.bahasa} onChange={(event) => updateSetting('bahasa', event.target.value)}>
              <option>Indonesia</option>
            </select>
          </label>

          <label>
            Tema
            <select value={pengaturan.tema} onChange={(event) => updateSetting('tema', event.target.value)}>
              <option>Hijau Segar</option>
              <option>Biru Gelap</option>
              <option>Monokrom Bersih</option>
            </select>
          </label>
        </div>
      </article>

      <article className="card">
        <h3>Otomatisasi dan Notifikasi</h3>
        <div className="switch-grid">
          <label className="switch-row">
            <span>Notifikasi order masuk</span>
            <input
              type="checkbox"
              checked={pengaturan.notifikasiOrder}
              onChange={(event) => updateSetting('notifikasiOrder', event.target.checked)}
            />
          </label>
          <label className="switch-row">
            <span>Notifikasi keterlambatan</span>
            <input
              type="checkbox"
              checked={pengaturan.notifikasiKeterlambatan}
              onChange={(event) => updateSetting('notifikasiKeterlambatan', event.target.checked)}
            />
          </label>
          <label className="switch-row">
            <span>Auto assign kurir</span>
            <input
              type="checkbox"
              checked={pengaturan.autoAssignKurir}
              onChange={(event) => updateSetting('autoAssignKurir', event.target.checked)}
            />
          </label>
        </div>
      </article>
    </section>
  )
}

export default SettingsPage
