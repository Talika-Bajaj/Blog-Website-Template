/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html", "*.js"],
  theme: {
    extend: {
      screens: {
        'xs': {'raw': '(max-width:500px)'},
        'm-xs': {'raw': '(min-width:500px)'},
      },
      spacing: {
        '*11' :'11px',
        '*26' :'26px',
        '*50' :'50px',
      },
      backgroundColor: {
        'pinkish': '#F9EFDB'
      },
      padding: {
        '*30' : '30px'
      }
    },
  },
  plugins: [],
}

