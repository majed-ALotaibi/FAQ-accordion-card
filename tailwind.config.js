/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  mode: 'jit',
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors:{
        Verydarkdesaturatedblue: 'hsl(238, 29%, 16%)',
        Softred: 'hsl(14, 88%, 65%)',
        BGSoftviolet: 'hsl(273, 75%, 66%)',
        BGSoftblue: 'hsl(240, 73%, 65%)',
        Verydarkgrayishblue: 'hsl(237, 12%, 33%)',
        Darkgrayishblue: 'hsl(240, 6%, 50%)',
        dvLightgrayishblue: 'hsl(240, 5%, 91%)'

      },fontFamily:{
        Kumbh:['Kumbh Sans', 'sans-serif']
        
      },backgroundImage:{
        mobile:"url('../images/bg-pattern-mobile.svg')",
        desktop:"url('../images/bg-pattern-desktop.svg')",
      },
    },
  },
  plugins: [],
}
