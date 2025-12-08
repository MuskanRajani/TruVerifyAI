export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#0F172A',
          primary: '#C2410C',      // Muted corporate orange
          primarySoft: '#FFF1E6', // Soft off-white cream
          accent: '#FDBA74',      // Subtle apricot
        },
      },
      boxShadow: {
        card: '0 14px 30px rgba(15,23,42,0.10)',
      },
    },
  },
  plugins: [],
}