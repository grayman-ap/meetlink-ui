/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        border:"#666666",
        blue: "#003366",
        green: "#00CC99",
        purple: "#660099",
        darkGreen:'2EA487',
        red:"#FF3030",
        lightBlue: "#0B5CFF"
      },
      fontFamily: {
        'sans': ['Poppins', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}