/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["poppins"],
      mont: ["montserrat"],
    },
    container: {
      center: "true",
      padding: "2rem",
    },
    extend: {},
  },
  plugins: [],
};
