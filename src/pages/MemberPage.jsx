import React from "react";

function MemberPage() {
  const transactions = [
    {
      id: "TRX001",
      layanan: "Laundry Kiloan",
      tanggal: "10 Juni 2026",
      berat: "5 Kg",
      harga: "Rp 35.000",
      status: "Selesai",
    },
    {
      id: "TRX002",
      layanan: "Cuci Sepatu",
      tanggal: "12 Juni 2026",
      berat: "-",
      harga: "Rp 25.000",
      status: "Diproses",
    },
    {
      id: "TRX003",
      layanan: "Laundry Express",
      tanggal: "13 Juni 2026",
      berat: "3 Kg",
      harga: "Rp 45.000",
      status: "Selesai",
    },
  ];

  const rewards = [
    "100 Poin = Diskon 10%",
    "250 Poin = Gratis Antar Jemput",
    "500 Poin = Laundry Gratis 3 Kg",
    "1000 Poin = Voucher Rp100.000",
  ];

  const faq = [
    {
      q: "Bagaimana cara mendapatkan poin?",
      a: "Setiap transaksi laundry akan menghasilkan poin yang dapat ditukarkan dengan berbagai reward menarik.",
    },
    {
      q: "Apakah poin memiliki masa berlaku?",
      a: "Ya, poin berlaku selama 12 bulan sejak transaksi terakhir.",
    },
    {
      q: "Apakah member mendapatkan promo khusus?",
      a: "Ya, member mendapatkan promo eksklusif dan cashback poin.",
    },
  ];

  return (
    <div
      style={{
        background: "#f8fafc",
        minHeight: "100vh",
        fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        color: "#334155",
      }}
    >
      {/* HERO */}
      <section
        style={{
          background: "linear-gradient(135deg, #1d4ed8, #3b82f6)",
          color: "white",
          padding: "80px 40px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "42px", fontWeight: "700", marginBottom: "15px", letterSpacing: "-0.5px" }}>
          Selamat Datang, Member LaundryKu! 👋
        </h1>
        <p style={{ maxWidth: "600px", margin: "0 auto", fontSize: "18px", opacity: "0.9", lineHeight: "1.6" }}>
          Nikmati berbagai keuntungan eksklusif, kumpulkan poin dari setiap transaksi, dan dapatkan promo spesial setiap bulan.
        </p>
      </section>

      {/* MAIN CONTAINER */}
      <div style={{ maxWidth: "1200px", margin: "-40px auto 0", padding: "0 20px 60px" }}>
        
        {/* MEMBER CARD & STATISTIK */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px", marginBottom: "40px" }}>
          {/* Kartu Member */}
          <div
            style={{
              background: "white",
              borderRadius: "24px",
              padding: "30px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <h2 style={{ fontSize: "22px", marginBottom: "20px", fontWeight: "600" }}>Kartu Member</h2>
            <div
              style={{
                background: "linear-gradient(135deg, #0f172a, #1e293b)",
                color: "white",
                padding: "25px",
                borderRadius: "20px",
                boxShadow: "0 15px 30px rgba(15,23,42,0.25)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
                <span style={{ fontSize: "14px", letterSpacing: "2px", fontWeight: "600", color: "#94a3b8" }}>PLATINUM MEMBER</span>
                <span style={{ fontSize: "20px", fontWeight: "bold", italic: "true" }}>LaundryKu</span>
              </div>
              <p style={{ fontSize: "22px", fontWeight: "600", marginBottom: "5px", letterSpacing: "0.5px" }}>Bambang Susilo</p>
              <p style={{ fontSize: "14px", color: "#cbd5e1", marginBottom: "20px" }}>ID: MBR-2026-001</p>
              <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "15px" }}>
                <div>
                  <p style={{ fontSize: "11px", color: "#94a3b8", textTransform: "uppercase" }}>Bergabung</p>
                  <p style={{ fontSize: "14px", fontWeight: "500" }}>Jan 2026</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ fontSize: "11px", color: "#94a3b8", textTransform: "uppercase" }}>Total Poin</p>
                  <p style={{ fontSize: "18px", fontWeight: "bold", color: "#38bdf8" }}>1.250 pts</p>
                </div>
              </div>
            </div>
          </div>

          {/* Grid Statistik */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
            {[
              ["Total Transaksi", "145", "#eff6ff", "#2563eb"],
              ["Poin Aktif", "1.250", "#f0fdf4", "#16a34a"],
              ["Voucher Saya", "5", "#fff7ed", "#ea580c"],
              ["Laundry Selesai", "132", "#f5f3ff", "#7c3aed"],
            ].map((item) => (
              <div
                key={item[0]}
                style={{
                  background: "white",
                  padding: "25px",
                  borderRadius: "20px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div style={{ width: "40px", height: "40px", backgroundColor: item[2], borderRadius: "10px", marginBottom: "15px" }} />
                <h3 style={{ fontSize: "28px", fontWeight: "700", color: "#1e293b", margin: "0 0 5px 0" }}>{item[1]}</h3>
                <p style={{ fontSize: "14px", color: "#64748b", margin: 0 }}>{item[0]}</p>
              </div>
            ))}
          </div>
        </div>

        {/* STATUS LAUNDRY (TRACKING) */}
        <section style={{ background: "white", padding: "30px", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.02)", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "22px", marginBottom: "25px", fontWeight: "600" }}>Status Laundry Saat Ini</h2>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px", padding: "10px 0" }}>
            {[
              { label: "Diterima", done: true },
              { label: "Dicuci", done: true },
              { label: "Disetrika", done: true },
              { label: "Siap Diambil", done: false },
            ].map((step, idx, arr) => (
              <div key={step.label} style={{ flex: 1, minWidth: "150px", display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{
                  width: "36px", height: "36px", borderRadius: "50%", 
                  backgroundColor: step.done ? "#2563eb" : "#f1f5f9", 
                  color: step.done ? "white" : "#94a3b8",
                  display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold"
                }}>
                  {step.done ? "✓" : idx + 1}
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: "15px", fontWeight: "600", color: step.done ? "#1e293b" : "#94a3b8" }}>{step.label}</p>
                  <p style={{ margin: 0, fontSize: "12px", color: "#94a3b8" }}>{step.done ? "Selesai" : "Menunggu"}</p>
                </div>
                {idx < arr.length - 1 && (
                  <div style={{ flex: 1, height: "2px", backgroundColor: step.done ? "#2563eb" : "#e2e8f0", minWidth: "20px" }} />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* RIWAYAT TRANSAKSI */}
        <section style={{ background: "white", padding: "30px", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.02)", marginBottom: "40px", overflowX: "auto" }}>
          <h2 style={{ fontSize: "22px", marginBottom: "20px", fontWeight: "600" }}>Riwayat Transaksi</h2>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #f1f5f9" }}>
                <th style={{ padding: "16px", color: "#64748b", fontWeight: "600" }}>ID</th>
                <th style={{ padding: "16px", color: "#64748b", fontWeight: "600" }}>Layanan</th>
                <th style={{ padding: "16px", color: "#64748b", fontWeight: "600" }}>Tanggal</th>
                <th style={{ padding: "16px", color: "#64748b", fontWeight: "600" }}>Berat</th>
                <th style={{ padding: "16px", color: "#64748b", fontWeight: "600" }}>Harga</th>
                <th style={{ padding: "16px", color: "#64748b", fontWeight: "600" }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((trx) => (
                <tr key={trx.id} style={{ borderBottom: "1px solid #f1f5f9", transition: "background 0.2s" }}>
                  <td style={{ padding: "16px", fontWeight: "600", color: "#2563eb" }}>{trx.id}</td>
                  <td style={{ padding: "16px", fontWeight: "500" }}>{trx.layanan}</td>
                  <td style={{ padding: "16px", color: "#64748b" }}>{trx.tanggal}</td>
                  <td style={{ padding: "16px" }}>{trx.berat}</td>
                  <td style={{ padding: "16px", fontWeight: "600" }}>{trx.harga}</td>
                  <td style={{ padding: "16px" }}>
                    <span style={{
                      padding: "6px 12px", borderRadius: "50px", fontSize: "13px", fontWeight: "500",
                      backgroundColor: trx.status === "Selesai" ? "#dcfce7" : "#fef9c3",
                      color: trx.status === "Selesai" ? "#16a34a" : "#ca8a04"
                    }}>
                      {trx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* PAKET MEMBERSHIP */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "22px", marginBottom: "20px", fontWeight: "600" }}>Tingkatan Paket Membership</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "25px" }}>
            {[
              { tier: "Silver", diskon: "Diskon 5%", poin: "50 Poin Bonus", bg: "#f1f5f9", text: "#475569" },
              { tier: "Gold", diskon: "Diskon 10%", poin: "100 Poin Bonus", bg: "#fef3c7", text: "#d97706" },
              { tier: "Platinum", diskon: "Diskon 15%", poin: "200 Poin Bonus", bg: "#e0f2fe", text: "#0284c7" },
            ].map((p) => (
              <div key={p.tier} style={{ background: "white", padding: "30px", borderRadius: "20px", boxShadow: "0 10px 30px rgba(0,0,0,0.02)", borderTop: `6px solid ${p.text}` }}>
                <span style={{ backgroundColor: p.bg, color: p.text, padding: "4px 12px", borderRadius: "50px", fontSize: "13px", fontWeight: "600" }}>{p.tier}</span>
                <h3 style={{ fontSize: "28px", fontWeight: "700", marginTop: "15px", marginBottom: "5px", color: "#1e293b" }}>{p.diskon}</h3>
                <p style={{ color: "#64748b", margin: 0, fontSize: "15px" }}>Keuntungan aktif & {p.poin}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TWO COLUMN: REWARD & PROMO */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px", marginBottom: "40px" }}>
          {/* Reward */}
          <div style={{ background: "white", padding: "30px", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.02)" }}>
            <h2 style={{ fontSize: "22px", marginBottom: "20px", fontWeight: "600" }}>Klaim Reward Poin</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {rewards.map((reward) => (
                <div key={reward} style={{ padding: "14px 20px", background: "#f8fafc", borderRadius: "12px", borderLeft: "4px solid #2563eb", fontWeight: "500", fontSize: "15px" }}>
                  {reward}
                </div>
              ))}
            </div>
          </div>

          {/* Promo */}
          <div style={{ background: "white", padding: "30px", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.02)" }}>
            <h2 style={{ fontSize: "22px", marginBottom: "20px", fontWeight: "600" }}>Promo Khusus Anda</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              {[
                { title: "Promo Ulang Tahun", desc: "Diskon 25% untuk seluruh layanan.", color: "#3b82f6" },
                { title: "Weekend Promo", desc: "Cashback poin ganda (2x lipat).", color: "#10b981" },
                { title: "Promo Referal", desc: "Ajak teman & dapatkan bonus poin instan.", color: "#f59e0b" },
              ].map((promo) => (
                <div key={promo.title} style={{ display: "flex", gap: "15px", alignItems: "flex-start" }}>
                  <div style={{ width: "8px", height: "40px", backgroundColor: promo.color, borderRadius: "4px", flexShrink: 0 }} />
                  <div>
                    <h4 style={{ margin: "0 0 4px 0", fontSize: "16px", fontWeight: "600" }}>{promo.title}</h4>
                    <p style={{ margin: 0, fontSize: "14px", color: "#64748b" }}>{promo.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TESTIMONI & FAQ CONTAINER */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px" }}>
          {/* Testimoni */}
          <div>
            <h2 style={{ fontSize: "22px", marginBottom: "20px", fontWeight: "600" }}>Testimoni Member</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                "Laundry sangat cepat dan hasilnya bersih wangi tahan lama!",
                "Program member sangat membantu menghemat biaya bulanan laundry keluarga saya.",
              ].map((text, idx) => (
                <div key={idx} style={{ background: "white", padding: "20px", borderRadius: "16px", boxShadow: "0 10px 30px rgba(0,0,0,0.02)", position: "relative" }}>
                  <div style={{ color: "#f59e0b", marginBottom: "10px", fontSize: "14px" }}>⭐⭐⭐⭐⭐</div>
                  <p style={{ margin: 0, fontStyle: "italic", color: "#475569", fontSize: "15px", lineHeight: "1.5" }}>"{text}"</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 style={{ fontSize: "22px", marginBottom: "20px", fontWeight: "600" }}>FAQ</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              {faq.map((item) => (
                <div key={item.q} style={{ background: "white", padding: "20px", borderRadius: "16px", boxShadow: "0 10px 30px rgba(0,0,0,0.02)" }}>
                  <strong style={{ display: "block", color: "#1e293b", fontSize: "15px", marginBottom: "8px" }}>{item.q}</strong>
                  <p style={{ margin: 0, color: "#64748b", fontSize: "14px", lineHeight: "1.5" }}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* FOOTER */}
      <footer style={{ background: "#0f172a", color: "#94a3b8", padding: "40px 20px", textAlign: "center", fontSize: "14px" }}>
        <h3 style={{ color: "white", margin: "0 0 10px 0", fontSize: "18px" }}>LaundryKu Member Portal</h3>
        <p style={{ margin: 0 }}>© 2026 LaundryKu. Semua Hak Dilindungi undang-undang.</p>
      </footer>
    </div>
  );
}

export default MemberPage;