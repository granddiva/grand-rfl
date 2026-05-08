import { useState } from 'react'
import { AppDataContext } from './AppDataValueContext'

const pesananAwal = [
  { id: 'ORD-1001', pelanggan: 'Budi Santoso', layanan: 'Laundry Express', berat: 4, status: 'Diproses', total: 52000 },
  { id: 'ORD-1002', pelanggan: 'Rani Permata', layanan: 'Setrika Saja', berat: 2, status: 'Siap Antar', total: 18000 },
  { id: 'ORD-1003', pelanggan: 'Dimas Arya', layanan: 'Laundry Reguler', berat: 6, status: 'Selesai', total: 54000 },
]

const pelangganAwal = [
  { id: 'CUS-01', nama: 'Budi Santoso', telepon: '0812-3344-7788', alamat: 'Jl. Kemangi 12' },
  { id: 'CUS-02', nama: 'Rani Permata', telepon: '0813-1122-9988', alamat: 'Jl. Melati 5' },
  { id: 'CUS-03', nama: 'Dimas Arya', telepon: '0821-7832-4455', alamat: 'Jl. Anggrek 9' },
]

const kurirAwal = [
  { id: 'K-11', nama: 'Arman', area: 'Cengkareng', aktif: true },
  { id: 'K-12', nama: 'Joko', area: 'Kalideres', aktif: true },
  { id: 'K-13', nama: 'Fajar', area: 'Duri Kosambi', aktif: false },
]

const layananAwal = [
  { id: 'SRV-1', nama: 'Laundry Reguler', hargaPerKg: 9000, estimasiJam: 48 },
  { id: 'SRV-2', nama: 'Laundry Express', hargaPerKg: 13000, estimasiJam: 24 },
  { id: 'SRV-3', nama: 'Setrika Saja', hargaPerKg: 7000, estimasiJam: 20 },
]

const pengaturanAwal = {
  bahasa: 'Indonesia',
  tema: 'Hijau Segar',
  notifikasiOrder: true,
  notifikasiKeterlambatan: true,
  autoAssignKurir: true,
}

export function AppDataProvider({ children }) {
  const [pesanan, setPesanan] = useState(pesananAwal)
  const [pelanggan, setPelanggan] = useState(pelangganAwal)
  const [kurir, setKurir] = useState(kurirAwal)
  const [layanan, setLayanan] = useState(layananAwal)
  const [pengaturan, setPengaturan] = useState(pengaturanAwal)

  const tambahPesanan = (payload) => {
    const id = `ORD-${String(1000 + pesanan.length + 1)}`
    setPesanan((prev) => [{ id, status: 'Baru', ...payload }, ...prev])
  }

  const ubahStatusPesanan = (id, statusBaru) => {
    setPesanan((prev) => prev.map((item) => (item.id === id ? { ...item, status: statusBaru } : item)))
  }

  const toggleKurir = (id) => {
    setKurir((prev) => prev.map((item) => (item.id === id ? { ...item, aktif: !item.aktif } : item)))
  }

  const simpanLayanan = (id, hargaPerKg) => {
    setLayanan((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, hargaPerKg: Number(hargaPerKg) || item.hargaPerKg } : item
      )
    )
  }

  const tambahPelanggan = (payload) => {
    const id = `CUS-${String(pelanggan.length + 1).padStart(2, '0')}`
    setPelanggan((prev) => [{ id, ...payload }, ...prev])
  }

  const value = {
    pesanan,
    pelanggan,
    kurir,
    layanan,
    pengaturan,
    setPengaturan,
    tambahPesanan,
    ubahStatusPesanan,
    toggleKurir,
    simpanLayanan,
    tambahPelanggan,
  }

  return <AppDataContext.Provider value={value}>{children}</AppDataContext.Provider>
}
