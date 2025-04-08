/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "button-gradient":
          "linear-gradient(to right, #AED1FF 100%, #2CB0ED 51%)",
      },
      fontFamily: {
        vollkorn: ["Vollkorn", "serif"],
      },
      colors: {},
    },
  },
  plugins: [require("tailwindcss-animate")],
};
