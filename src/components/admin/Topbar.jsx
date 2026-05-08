import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/useAuth'

function Topbar({ judul, deskripsi }) {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <header className="topbar">
      <div>
        <h1>{judul}</h1>
        <p>{deskripsi}</p>
      </div>
      <div className="topbar-actions">
        <input type="search" placeholder="Cari data..." aria-label="Cari data" />
        <button type="button">Ekspor Ringkasan</button>
        <button type="button" className="btn-keluar" onClick={handleLogout}>
          Keluar ({user?.nama ?? 'Admin'})
        </button>
      </div>
    </header>
  )
}

export default Topbar
