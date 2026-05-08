import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from '../components/admin/Sidebar'
import Topbar from '../components/admin/Topbar'

const menuItems = [
  { label: 'Dasbor', icon: 'dashboard', path: '/dasbor' },
  { label: 'Pesanan Laundry', icon: 'orders', path: '/pesanan' },
  { label: 'Pelanggan', icon: 'customers', path: '/pelanggan' },
  { label: 'Kurir', icon: 'rider', path: '/kurir' },
  { label: 'Layanan', icon: 'service', path: '/layanan' },
  { label: 'Laporan', icon: 'report', path: '/laporan' },
  { label: 'Pengaturan', icon: 'settings', path: '/pengaturan' },
]

const metaHalaman = {
  '/dasbor': {
    judul: 'Dasbor Operasional',
    deskripsi: 'Pantau performa laundry harian dari satu layar.',
  },
  '/pesanan': {
    judul: 'Manajemen Pesanan',
    deskripsi: 'Tambah, filter, dan update status pesanan laundry secara cepat.',
  },
  '/pelanggan': {
    judul: 'Database Pelanggan',
    deskripsi: 'Kelola data pelanggan untuk meningkatkan retensi dan layanan.',
  },
  '/kurir': {
    judul: 'Tim Kurir',
    deskripsi: 'Atur ketersediaan kurir antar jemput per area.',
  },
  '/layanan': {
    judul: 'Master Layanan',
    deskripsi: 'Atur harga dan estimasi pengerjaan untuk tiap layanan.',
  },
  '/laporan': {
    judul: 'Laporan Kinerja',
    deskripsi: 'Lihat ringkasan pendapatan, order, dan performa operasional.',
  },
  '/pengaturan': {
    judul: 'Pengaturan Sistem',
    deskripsi: 'Konfigurasi preferensi aplikasi laundry Anda.',
  },
}

function AdminLayout() {
  const location = useLocation()
  const meta = metaHalaman[location.pathname] ?? metaHalaman['/dasbor']

  return (
    <div className="app-shell">
      <Sidebar menuItems={menuItems} />
      <main className="content">
        <Topbar judul={meta.judul} deskripsi={meta.deskripsi} />
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLayout
