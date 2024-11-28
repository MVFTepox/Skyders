/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        black: '#000000',
        rosy : '#f7e7e7',
        yellow: '#ffd182',
        magenta: '#970046',
        red: '#db3639'
      },
      fontFamily: {
        'made-tommy': ['"Made Tommy"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}