const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
      height: {
        '436': '436px',
        '500': '500px',
      },
      colors: {

      },
      boxShadow: {
        
      },
      fontSize: {
        'tiny': '9px',
      },
      maxWidth: {
        '33': '33rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('tailwindcss-font-inter'),
    plugin(function({ addUtilities, addComponents, e, prefix, config }) {
      addUtilities({
        '.gradient-mask-img-laptop': {
          '-webkit-mask-image': 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1) 100px, rgba(0, 0, 0, 0.5) 200px, transparent 250px, rgba(0, 0, 0, 0) 50%, transparent 100%)',
        },
        '.gradient-mask-img-desktop': {
          '-webkit-mask-image': 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1) 100px, rgba(0, 0, 0, 0.5) 200px, rgba(0, 0, 0, 0.2) 250px, rgba(0, 0, 0, 0) 50%, transparent 100%)',
        },
      })
      
    }),
  ],
}
