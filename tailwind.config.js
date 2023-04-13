/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "576px",
        tablet: "768px",
        laptop: "1100px",
        desktop: "1400px",


      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
