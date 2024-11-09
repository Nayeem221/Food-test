/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

    },
    container:{
      center:true,
      padding:{
        xl:'130px'
      }
    },
    fontFamily:{
      inter:["Inter", "sans-serif"],
      Railway: ["Raleway", "sans-serif"],
      Roboto: ["Roboto", "sans-serif"],
      bebas:["Bebas Neue", 'sans-serif'],
    },

  },
  plugins: [],
}