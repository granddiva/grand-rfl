import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/useAuth' // Sesuai struktur folder context Anda
import AuthLayout from '../layouts/AuthLayout'

function LoginPage() {
  const { login, isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  // Rute tujuan setelah login berhasil
  const tujuan = location.state?.from?.pathname ?? '/dasbor'

  const [form, setForm] = useState({
    username: '',
    password: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dasbor', { replace: true })
    }
  }, [isAuthenticated, navigate])

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    setLoading(true)

    // LOGIKA LOGIN KHUSUS (Sesuai Gambar Demo)
    // Username: admin, Password: admin
    if (form.username === 'admin' && form.password === 'admin') {
      setTimeout(() => {
        setLoading(false)
        // Navigasi langsung ke dasbor sesuai rute di proyek Anda
        navigate('/dasbor', { replace: true })
      }, 800)
      return
    }

    // Jika menggunakan data asli dari server
    try {
      await login(form)
      navigate(tujuan, { replace: true })
    } catch (err) {
      setError('Login gagal. Gunakan username & password demo.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout>
      <div className="flex flex-col items-center mb-8">
        {/* Logo Bintang Biru sesuai desain LaundryKu */}
        <div className="w-16 h-16 bg-[#EBF2FF] rounded-full flex items-center justify-center mb-4">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#2563EB] fill-none stroke-current" strokeWidth="2">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-900">LaundryKu</h1>
        <p className="text-gray-500 text-sm">Sistem Manajemen Laundry</p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Username</label>
          <input
            type="text"
            placeholder="Masukkan username"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            placeholder="Masukkan password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
        </div>

        {error && <p className="text-xs text-red-500 text-center">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#2563EB] hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors shadow-lg shadow-blue-100"
        >
          {loading ? 'Memproses...' : 'Masuk'}
        </button>
      </form>

      <div className="mt-6 text-center text-[10px] text-gray-400">
        Demo: username: <strong>admin</strong>, password: <strong>admin</strong>
      </div>
    </AuthLayout>
  )
}

export default LoginPage