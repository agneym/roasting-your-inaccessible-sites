/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        10: "10px",
      },
      colors: {
        pastelGreen: "#b9f3e4",
        pastelViolent: "#ea8fea",
        pastelYellow: "#f1f7b5",
      },
    },
  },
  plugins: [],
};
