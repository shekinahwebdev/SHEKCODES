/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],

  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        ring: "rgb(var(--ring))",
      },
      keyframes: {
        "arrow-load": {
          "0%": {
            opacity: "0",
            transform: "rotate(135deg) translate(20px, 20px)",
          },
          "5%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
            transform: "rotate(135deg) translate(-25px, -25px)",
          },
        },
      },
      animation: {
        "arrow-load": "arrow-load 1s ease-in-out infinite",
      },
    },
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
    backgroundImage: {
      "gradient-primary": "linear-gradient(135deg, #F83600 0%, #FACC22 100%)",
    },
    animation: {},
  },
  plugins: [require("tailwindcss-animate")],
};
