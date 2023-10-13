/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'Pr-Blue': '#00426A',
        'Pr-Orange': '#B86125',
        'Pr-Gray': '#CFCDC9',
        'Pr-Black': '#1D252D'
      }
    },
  },
  plugins: [],
}
