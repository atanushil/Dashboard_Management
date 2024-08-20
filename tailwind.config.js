/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        border_color:'#e2e8f0',
        warning:'#ef4444',
        body:'#a5f3fc',
        zinc:'#d4d4d8',
        grey:'#9ca3af',

      }
    },
  },
  plugins: [],
}