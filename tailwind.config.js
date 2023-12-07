/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        skyhopBlue: "#1c3e6e",
        skyhopGreen: "#57b972",
        skyhopGray: "#d7dbe4",
        skyhopBlueDark: "#092c4b",
      },
    },
  },
  plugins: [],
};
