/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screen: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      fontFamily: {
        poppins: ["'Host Grotesk'", 'serif'],
        oswald: ["'Oswald'", 'serif'],
    },
    colors: {
      primary: "#7D47F5"
    }
  },
  variants: {
    extend:  {
      display: ['drop-hover'],
      visibility: ['group-hover']
    }
  },
  
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
}