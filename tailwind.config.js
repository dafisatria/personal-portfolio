/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000814",
        darkBlue: "#001d3d",
        blue: "#003566",
        darkYellow: "#ffc300",
        yellow: "#ffd60a",
        white: "#fefae0",
      },
    },
  },
  plugins: [],
};
