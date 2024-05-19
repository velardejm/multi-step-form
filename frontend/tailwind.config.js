/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        marineBlue: "hsl(var(--color-marine-blue))",
        purplishBlue: "hsl(var(--color-purplish-blue))",
        pastelBlue: "hsl(var(--color-pastel-blue))",
        lightBlue: "hsl(var(--color-light-blue))",
        strawberryRed: "hsl(var(--color-strawberry-red))",
        coolGray: "hsl(var(--color-cool-gray))",
        lightGray: "hsl(var(--color-light-gray))",
        magnolia: "hsl(var(--color-magnolia))",
        alabaster: "hsl(var(--color-alabaster))",
        white: "hsl(var(--color-white))",
      },
    },
  },

  plugins: [],
};
