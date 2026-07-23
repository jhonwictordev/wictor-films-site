/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        carbon: "#0D0D0D",
        graphite: "#2B2B2B",
        mist: "#A0A0A0",
        ivory: "#FFFFFF",
        platinum: "#E7E7E7",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        glow: "0 24px 80px rgba(255, 255, 255, 0.08)",
      },
    },
  },
  plugins: [],
};
