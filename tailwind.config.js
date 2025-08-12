/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'pearl-white': '#EDEDF7',
        'soft-pink-light': '#E8C4DC',
        'soft-pink-dark': '#E195C2',
        'deep-charcoal': '#2E2E3A',
        'iridescent-pink': '#FFB7E4',
        'iridescent-gold': '#FFE8A5',
        'iridescent-lilac': '#E0BBFF',
      },
      backgroundImage: {
        'etherea-gradient': 'linear-gradient(135deg, #A855F7 0%, #EC4899 50%, #8B5CF6 100%)',
        'glass-bg': 'rgba(255, 249, 252, 0.15)',
      },
      backdropBlur: {
        'xl': '20px',
      }
    },
  },
  plugins: [],
}