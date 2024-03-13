/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          lg: "1440px",
          sm: "660px",
        },
        padding: "20px",
      },
      fontFamily: {
        jost: "Jost",
      },
      colors: {
        primary: "#FEEE00",
        secondry: "#FFC700",
        color1: "#F8F8F8",
        color2: "#F5F5F6",
      },
    },
  },
  plugins: [require("daisyui")],
};
