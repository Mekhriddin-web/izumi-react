/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      white: '#FFFFFF',
      black: '#333333',
      red: '#ff0000',
      brightGray: '#EEEEEE',
      caribbeanGreen: '#00CC99',
    },
    fontFamily: {
      'body': ['Montserrat', 'sans-serif'],
      'serif': ['Noto Serif JP', 'serif'],
    }
  },
  plugins: [],
}
