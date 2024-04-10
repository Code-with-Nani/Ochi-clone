/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bg:"#F1F1F1",
        text:"#212121",
        bg2:"#004D43",
        bg3:"#CDEA68"
      }
    },
  },
  plugins: [],
}

