/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      screens: {
        
        // 'ipp': '375px',
        // // => @media (min-width: 375px) {iPhone X Portrait ... }        
        // 'sm': '667px',
        // // => @media (min-width: 640px) { ... }
  
        // 'md': '876px',
        // // => @media (min-width: 768px) { ... }
  
        // 'lg': '1024px',
        // // => @media (min-width: 1024px) { ... }
  
        // 'xl': '1280px',
        // // => @media (min-width: 1280px) { ... }
  
        // '2xl': '1536px',
        // // => @media (min-width: 1536px) { ... }
        'sm': '500px',
        'md': [
          // Sidebar appears at 768px, so revert to `sm:` styles between 768px
          // and 868px, after which the main content area is wide enough again to
          // apply the `md:` styles.
          {'min': '668px', 'max': '767px'},
          {'min': '868px'}
        ],
        'lg': '1100px',
        'xl': '1400px',
      }


    },
  },
  plugins: [
    require('tailwind-scrollbar'),

  ],
}
