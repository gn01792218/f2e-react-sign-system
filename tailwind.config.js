/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT:'#000B1D',
          'light':'#FBFCFF',
          100:'#C5DBFF',
          200:'#A0C4FF',
          300:'#7BADFF',
          400:'#5696FF',
          500:'#307EFE',
          600:'#145DD5',
          700:'#0041AC',
          800:'#003283',
          900:'#00173E',
          'dark':'#000D21',
        },
        'success':'#27CAC4',
        'alert':'#F9056B',
        'acent':'#F3AB1E',
        'overlay':{
          DEFAULT:'#000000b3',
          500:'#000000b3',
          600:"#000000e0"
        },
      },
    },
  },
  plugins: [],
}
