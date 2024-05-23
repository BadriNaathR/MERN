/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange" : "#ff4d04" ,
        "blue" : "#688EE5",
        "primaryBG" : "#FGFGFG",
        "secondary" : "#555" ,
      },
      font :{
        "primary" : ["Inter", 'sans-serif']
      }
    },
  },
  plugins: [require('daisyui')],
}

