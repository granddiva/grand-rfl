import { useAppData } from '../context/useAppData'
import { Switch } from "@/components/ui/switch"

function CouriersPage() {
  const { kurir, toggleKurir } = useAppData();

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
              <div className="flex items-center gap-3">
                <span>{item.aktif ? "Aktif" : "Tidak Aktif"}</span>

                <Switch
                  checked={item.aktif}
                  onCheckedChange={() => toggleKurir(item.id)}
                />
              </div>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}

export default CouriersPage;
