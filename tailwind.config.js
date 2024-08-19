/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        gray:'#f1f5f9',
        border_color:'#e2e8f0',
        warning:'#ef4444'
      }
    },
  },
  plugins: [],
}