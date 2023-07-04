/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/**/*.ejs',
    './js/main.js'
    
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

