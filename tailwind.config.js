/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      MiniPortable: { max: "288px" },
      mobil: { min: "289px", max: "480px" },
      Tablette: { min: "481px", max: "761px" },
      Laptop: { min: "762px", max: "1025px" },
      screenLarge: { min: "1026px", max: "1500px" },
    },
    fontFamily:{
      Poppins:['Poppins', 'sans-serif'],
      inter:['Inter','sans-serif'],
      DancingScript:["Dancing Script","sans-serif"]
    }
  },
  plugins: [],
}

