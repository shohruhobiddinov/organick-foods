/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: '0px',
      md: '620px',
      lg: '1060px',
      xl: '1200px',
    },
    fontFamily: {
      yellowTail: ['Yellowtail', 'cursive'],
      roboto: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
}
