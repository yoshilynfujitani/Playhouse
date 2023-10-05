/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        grainy: {
          "0%": {
            transform: "translateY(0%)",
          },
          "25%": {
            transform: "translateX(1%)",
          },
          "50%": {
            transform: "translateY(-1%)",
          },
          "75%": {
            transform: "translateX(1%)",
          },
          "100%": {
            transform: "translateY(1%)",
          },
        },
      },
      animation: {
        graineffect: "grainy 8s linear infinite",
      },

      colors: {
        main: "#131313",
        textmain: "#dbdad4",
      },
    },
  },
  plugins: [],
};
