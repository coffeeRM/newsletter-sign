/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        darkslate: 'hsl(234, 29%, 20%)',
        charcolgrey: 'hsl(235, 18%, 26%)',
        tomato: 'hsl(4, 100%, 67%)',
        greys: 'hsl(231, 7%, 60%)',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

