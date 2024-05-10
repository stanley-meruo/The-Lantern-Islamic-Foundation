/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/images/bg-hero.png')",
        "hero-activities": "url('/images/bg_activities.jpg')",
        "header-image": "url('/images/header-image.jpg')",
      },
      fontFamily: {
        almendra: ["Almendra SC", "serif"],
      },
    },
  },
  plugins: [],
};
