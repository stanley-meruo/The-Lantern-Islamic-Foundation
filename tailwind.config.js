/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/images/bg-hero.png')",
      },
      fontFamily: {
        'almendra': ["Almendra SC", "serif"],
      },
    },
  },
  plugins: [],
};
