/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      heading: "Montserrat",
      text: "Lato",
    },
    colors: {
      bgContainer: {
        to: "#182336",
        from: "#1D2940",
      },
      background: "#0B131F",
      primary: "#4FB7DD",
      secondary: "#7F8CA0",
      dark: "#285C6F",
      light: "#ffffff",
      error: "#EF4E5C",
      success: "#0DCE1C",
      average: "#D99A43",
      lines: "#7F8C9F",
    },
  },
  plugins: [],
};