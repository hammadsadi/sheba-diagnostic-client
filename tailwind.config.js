/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      dosis: "Dosis, 'sans-serif'",
    },
    extend: {
      colors: {
        primary: "#32c1ce",
        secondary: "#1c2a2b",
        "primary-opacity": "#09727b",
      },
    },
  },
  plugins: [],
};
