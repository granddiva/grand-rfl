/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warna krem kehijauan lembut baru dari sampel Anda
        'soft-cream-green': {
          DEFAULT: '#cee934', // Warna latar belakang dan utama
          light: '#cee934',   // Versi yang lebih terang (misal untuk hover)
          border: '#cee934',  // Warna untuk border agar serasi
        },
        primary: {
          DEFAULT: '#cee934', // Hijau zaitun yang serasi untuk teks utama/tombol
          dark: '#cee934',
        },
        neutral: {
          text: '#111827',    // Hitam teks
          muted: '#6B7280',   // Abu-abu teks
          bg: '#FFFFFF',      // Background kartu (putih)
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}