/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: 'selector',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      elg: '1020px',
      ellg:'1175px',
      xl: '1440px'
    },
    extend: {
      width: {
        nav: '80px'
      },
      colors :{
        logo: 'rgb(4 182 212)'
      },
      
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}

