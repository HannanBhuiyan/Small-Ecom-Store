/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins',' sans-serif']
    },
    extend: {
      colors: {
        'common-color' : '#3BB77E',
        'second-color': '#F8F9FA',
        'title-color': '#3c3e41',
        'para-color': '#696f79'
      }
    },
  },
  plugins: [],
}
