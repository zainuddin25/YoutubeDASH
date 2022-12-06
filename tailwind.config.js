/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'black' : '#04090f',
        'grey' : '#565656',
        'orange-secondary' : '#fff1d8',
        'pink-secondary' : '#ffeee7',
        'green-secondary' : '#cbf2d7'
      }
    },
  },
  plugins: [],
}
