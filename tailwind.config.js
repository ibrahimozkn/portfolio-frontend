/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        primary: "#362FD9",
      },
      colors: {
        white: "#edebeb",
        black: "#222831",
      },
    },
  },
  plugins: [],
};
