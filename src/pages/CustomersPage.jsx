import { useMemo, useState } from 'react'
import { useAppData } from '../context/useAppData'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

function CustomersPage() {
  const { pelanggan, tambahPelanggan } = useAppData();
  const [kataKunci, setKataKunci] = useState("");
  const [form, setForm] = useState({ nama: "", telepon: "", alamat: "" });

  const hasilCari = useMemo(() => {
    const keyword = kataKunci.toLowerCase().trim();
    if (!keyword) return pelanggan;
    return pelanggan.filter((item) =>
      item.nama.toLowerCase().includes(keyword),
    );
  }, [kataKunci, pelanggan]);

  const handleSubmit = () => {
    if (!form.nama.trim() || !form.telepon.trim()) return;
    tambahPelanggan(form);
    setForm({ nama: "", telepon: "", alamat: "" });
  };

  return (
    <section className="page-section">
      <div className="two-col">
        <article className="card">
          <h3>Tambah Pelanggan</h3>
          <form className="form-stack" onSubmit={handleSubmit}>
            <input
              placeholder="Nama pelanggan"
              value={form.nama}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, nama: event.target.value }))
              }
            />
            <input
              placeholder="Nomor telepon"
              value={form.telepon}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, telepon: event.target.value }))
              }
            />
            <input
              placeholder="Alamat"
              value={form.alamat}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, alamat: event.target.value }))
              }
            />
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <button type="button">Simpan Pelanggan</button>
              </AlertDialogTrigger>

              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Simpan Data Pelanggan?</AlertDialogTitle>

                  <AlertDialogDescription>
                    Pastikan data pelanggan sudah benar sebelum disimpan.
                  </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                  <AlertDialogCancel>Batal</AlertDialogCancel>

                  <AlertDialogAction onClick={handleSubmit}>
                    Ya, Simpan
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </form>
        </article>

        <article className="card">
          <h3>Cari Pelanggan</h3>
          <input
            placeholder="Ketik nama pelanggan..."
            value={kataKunci}
            onChange={(event) => setKataKunci(event.target.value)}
          />
          <p className="muted">
            Menampilkan {hasilCari.length} data pelanggan.
          </p>
        </article>
      </div>

      <article className="card">
        <h3>Daftar Pelanggan</h3>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nama</th>
                <th>Telepon</th>
                <th>Alamat</th>
              </tr>
            </thead>
            <tbody>
              {hasilCari.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.nama}</td>
                  <td>{item.telepon}</td>
                  <td>{item.alamat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </section>
  );
}

export default CustomersPage;
