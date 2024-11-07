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
        rosy : '#f7f7f7',
        yellow: '#ffd182',
        magenta: '#970046',
        red: '#db3639'
      },
    },
  },
  plugins: [],
}