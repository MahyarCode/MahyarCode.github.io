/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    extend: {
      colors: {
        confident: "#FF4500",
        power: "#FFD700",
        peace: "#00CED1",
        speed: "#FF69B4",
      },
    },
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  variants: {},
  plugins: [],
};
