import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import HelloWorld from '../components/pembelajaran/HelloWorld'
import ParentChildDemo from '../components/pembelajaran/ParentChildDemo'
import { useAppData } from '../context/useAppData'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"


function DashboardPage() {
  const { pesanan, kurir, pelanggan } = useAppData();

  const ringkasan = useMemo(() => {
    const totalPendapatan = pesanan.reduce((acc, item) => acc + item.total, 0);
    const pesananAktif = pesanan.filter(
      (item) => item.status !== "Selesai",
    ).length;
    const kurirAktif = kurir.filter((item) => item.aktif).length;
    return {
      totalPendapatan,
      pesananAktif,
      kurirAktif,
      totalPelanggan: pelanggan.length,
    };
  }, [pesanan, kurir, pelanggan.length]);

  return (
    <section className="page-section">
      <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
        <Avatar className="h-14 w-14">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>AD</AvatarFallback>
        </Avatar>

        <div>
          <h2 className="font-semibold">Admin CRM</h2>
          <p className="text-sm text-gray-500">
            Selamat datang kembali di dashboard
          </p>
        </div>
      </div>
      <article className="rounded-2xl border border-emerald-100 bg-white/80 p-4 shadow-sm">
        <h3 className="m-0 text-lg font-semibold text-emerald-900">
          Akses Cepat
        </h3>
        <p className="mb-3 mt-1 text-sm text-emerald-700">
          Navigasi cepat antar halaman utama admin.
        </p>
        <div className="flex flex-wrap gap-2">
          <Link
            to="/pesanan"
            className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm text-emerald-800 no-underline"
          >
            Buka Pesanan
          </Link>
          <Link
            to="/pelanggan"
            className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm text-emerald-800 no-underline"
          >
            Lihat Pelanggan
          </Link>
          <Link
            to="/laporan"
            className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm text-emerald-800 no-underline"
          >
            Buka Laporan
          </Link>
        </div>
      </article>

      <div className="kpi-grid">
        <article className="card kpi-card">
          <span>Pendapatan Bulan Ini</span>
          <strong>Rp{ringkasan.totalPendapatan.toLocaleString("id-ID")}</strong>
        </article>
        <article className="card kpi-card">
          <span>Pesanan Aktif</span>
          <strong>{ringkasan.pesananAktif} Order</strong>
        </article>
        <article className="card kpi-card">
          <span>Kurir Aktif</span>
          <strong>{ringkasan.kurirAktif} Orang</strong>
        </article>
        <article className="card kpi-card">
          <span>Total Pelanggan</span>
          <strong>{ringkasan.totalPelanggan} Orang</strong>
        </article>
      </div>

      <div className="two-col">
        <article className="card">
          <h3>Aktivitas Terbaru</h3>
          <ul className="list-clean">
            {pesanan.slice(0, 5).map((item) => (
              <li key={item.id}>
                <div>
                  <strong>{item.id}</strong>
                  <p>
                    {item.pelanggan} - {item.layanan}
                  </p>
                </div>
                <span
                  className={`badge ${item.status.toLowerCase().replace(" ", "-")}`}
                >
                  {item.status}
                </span>
              </li>
            ))}
          </ul>
        </article>

        <article className="card">
          <h3>Fokus Hari Ini</h3>
          <ul className="checklist">
            <li>Pastikan semua order express selesai sebelum jam 18.00.</li>
            <li>Optimalkan rute antar jemput area Cengkareng.</li>
            <li>Tinjau ulang SLA keterlambatan pada order reguler.</li>
            <li>Follow-up pelanggan baru untuk promo repeat order.</li>
          </ul>
        </article>
      </div>

      <div className="two-col">
        <HelloWorld />
        <ParentChildDemo />
      </div>
    </section>
  );
}

export default DashboardPage;
