import defaultTheme from 'tailwindcss/defaultTheme';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "classic",
  theme: {
    fontFamily: {
          sans: ["Agdasima", ...defaultTheme.fontFamily.sans]
    },
    extend: {},
    colors: {
      transparent: 'transparent',
      primary: "#18AF15",//green
      secondary: "#30DC2D", //light green
      dark: "#081207", //black
      light: "#FFFFFF",
      darkgreen: "#013220",
      darkgray:"#a6a6a6",
      lightgray:"#cccccc",
      lightgreen: "#a9fccf"
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "3rem",
      },
    },
  },
  plugins: [],
}
