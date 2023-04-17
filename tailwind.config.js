/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "640px",
        tablet: "768px",
        laptop: "1024px",
        desktop: "1280px",
        xldesktop: "1536px",


      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
