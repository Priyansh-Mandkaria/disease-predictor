/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslategray: {
          "100": "#424242",
          "200": "#333",
        },
        lightgray: "#d7d0d0",
        lightseagreen: "#07ae9a",
        azure: "#d9ebea",
        black: "#000",
        turquoise: "#21c7b3",
        whitesmoke: "#f1f2f4",
        gainsboro: "#d9d9db",
        dimgray: "#696969",
        gray: "rgba(0, 0, 0, 0.75)",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "nunito-sans": "'Nunito Sans'",
        "advent-pro": "'Advent Pro'",
      },
      borderRadius: {
        "3xs": "10px",
      },
    },
    fontSize: {
      "2xs": "11px",
      smi: "13px",
      mini: "15px",
      "15xl": "34px",
      xl: "20px",
      "8xl": "27px",
      "5xl": "24px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  plugins: [],
}

