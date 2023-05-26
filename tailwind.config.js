/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        ipx: "425px",
        mobile: "640px",
        tablet: "768px",
        laptop: "1070",
        desktop: "1150px",
        xldesktop: "1440px",
        'portrait': {
          'raw': '(orientation: portrait)'
      },
       'landscape': {
          'raw': '(orientation: landscape)'
        }}
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
