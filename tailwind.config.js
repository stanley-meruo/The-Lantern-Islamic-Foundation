/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/images/bg-hero.png')",
        "header-image": "url('/images/header-image.jpg')",
      },
      fontFamily: {
        almendra: ["Almendra SC", "serif"],
        abel: ["Abel", "sans-serif"],
      },
    },
  },
  plugins: [],
};
