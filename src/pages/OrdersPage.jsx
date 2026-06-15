import { useMemo, useState } from "react";
import { useAppData } from "../context/useAppData";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"; // Pastikan path import ini sesuai dengan folder shadcn kamu

function OrdersPage() {
  const { pesanan, tambahPesanan, ubahStatusPesanan } = useAppData();
  const [filterStatus, setFilterStatus] = useState("Semua");
  const [form, setForm] = useState({
    pelanggan: "",
    layanan: "Laundry Reguler",
    berat: 1,
  });

  // State untuk mengontrol buka/tutup modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dataTampil = useMemo(() => {
    if (filterStatus === "Semua") return pesanan;
    return pesanan.filter((item) => item.status === filterStatus);
  }, [filterStatus, pesanan]);

  // Fungsi ini sekarang hanya membuka modal, bukan langsung menyimpan
  const handleOpenModal = (event) => {
    event.preventDefault();
    if (!form.pelanggan.trim()) return;
    setIsModalOpen(true);
  };

  // Fungsi baru ini dipanggil ketika user klik "Ya, Simpan" di dalam modal
  const handleConfirmSubmit = () => {
    const tarif =
      form.layanan === "Laundry Express"
        ? 13000
        : form.layanan === "Setrika Saja"
          ? 7000
          : 9000;
    tambahPesanan({
      pelanggan: form.pelanggan.trim(),
      layanan: form.layanan,
      berat: Number(form.berat),
      total: Number(form.berat) * tarif,
    });
    setForm({ pelanggan: "", layanan: "Laundry Reguler", berat: 1 });
    setIsModalOpen(false); // Tutup modal setelah simpan
  };

  return (
    <section className="page-section">
      <div className="two-col">
        <article className="card">
          <h3>Tambah Pesanan Baru</h3>
          {/* Form sekarang memicu handleOpenModal */}
          <form className="form-stack" onSubmit={handleOpenModal}>
            <input
              placeholder="Nama pelanggan"
              value={form.pelanggan}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, pelanggan: event.target.value }))
              }
            />
            <select
              value={form.layanan}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, layanan: event.target.value }))
              }
            >
              <option>Laundry Reguler</option>
              <option>Laundry Express</option>
              <option>Setrika Saja</option>
            </select>
            <input
              type="number"
              min="1"
              value={form.berat}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, berat: event.target.value }))
              }
            />
            <button type="submit">Simpan Pesanan</button>
          </form>
        </article>

        <article className="card">
          <h3>Filter Status</h3>
          <div className="chip-row">
            {["Semua", "Baru", "Diproses", "Siap Antar", "Selesai"].map(
              (status) => (
                <button
                  key={status}
                  type="button"
                  className={filterStatus === status ? "active" : ""}
                  onClick={() => setFilterStatus(status)}
                >
                  {status}
                </button>
              ),
            )}
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
                  <td>Rp{item.total.toLocaleString("id-ID")}</td>
                  <td>
                    <select
                      value={item.status}
                      onChange={(event) =>
                        ubahStatusPesanan(item.id, event.target.value)
                      }
                    >
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

      {/* Komponen Modal Shadcn UI Custom (Perbaikan Border & Spacing) */}
      <AlertDialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <AlertDialogContent className="gap-0 overflow-hidden border-0 p-0 bg-white shadow-xl sm:rounded-2xl py-2">
          {/* Bagian Teks (Padding diperbaiki agar tidak mepet) */}
          <div className="px-6 pt-6 pb-5">
            <AlertDialogHeader className="text-left space-y-1.5">
              <AlertDialogTitle className="text-[1.15rem] font-semibold text-gray-900 tracking-tight">
                Simpan Data Pesanan?
              </AlertDialogTitle>
              <AlertDialogDescription className="text-[0.9rem] leading-normal text-gray-500">
                Pastikan data pesanan sudah benar sebelum disimpan.
              </AlertDialogDescription>
            </AlertDialogHeader>
          </div>

          {/* Bagian Tombol (Garis pembatas rapi) */}
          <AlertDialogFooter className="flex flex-row items-center justify-end gap-3 border-t border-gray-100 bg-white px-6 py-4 sm:space-x-0">
            <AlertDialogCancel className="m-0 mt-0 h-10 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 sm:mt-0">
              Batal
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleConfirmSubmit}
              className="m-0 h-10 rounded-lg bg-[#111111] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800"
            >
              Ya, Simpan
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}

export default OrdersPage;
