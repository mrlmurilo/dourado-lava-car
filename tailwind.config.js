/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#080808',
        card: '#121212',
        gold: '#FFB800',
      },
      fontFamily: {
        bebas: ['Bebas Neue', 'sans-serif'],
        barlow: ['Barlow', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

