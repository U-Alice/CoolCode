module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        '75%':'75%'
      },
      margin:{
        '35%':'35%',
        '5%':'-10%'
      }, 
      width:{
        '80%':'80%'
      },
      fontFamily:{
        'pacifico':['Pacifico','cursive'],
        'arima':['Arima Madurai', 'cursive']
      },
      keyframes : {
        'switch-left' :{
          '0%' : {transform:'translateX(-100%)'},
          '25%' : {transform:'translateX(-75%)'},
          '50%' : {transform:'translateX(-50%)'},
          '75%' : {transform:'translateX(-25%)'},
          '100%' : {transform:'translateX(0%)'},
        },
        'switch-right' :{
          '0%' : {transform:'translateX(100%)'},
          '25%' : {transform:'translateX(75%)'},
          '50%' : {transform:'translateX(50%)'},
          '75%' : {transform:'translateX(25%)'},
          '100%' : {transform:'translateX(0%)'},
        },
        'switch-bottom' :{
          '0%' : {transform:'translateY(100%)'},
          '25%' : {transform:'translateY(75%)'},
          '50%' : {transform:'translateY(50%)'},
          '75%' : {transform:'translateY(25%)'},
          '100%' : {transform:'translateY(0%)'},
        },
        'switch-top' :{
          '0%' : {transform:'translateY(-100%)'},
          '25%' : {transform:'translateY(-75%)'},
          '50%' : {transform:'translateY(-50%)'},
          '75%' : {transform:'translateY(-25%)'},
          '100%' : {transform:'translateY(0%)'},
        },
        'fade-in-down': {
          '0%': {
              opacity: '0',
              transform: 'translateY(-10px)'
          },
          '100%': {
              opacity: '1',
              transform: 'translateY(0)'
          },
        },
      },
      animation : {
        'switch-left' :'switch-left 2s linear 2',
        'switch-right' :'switch-right 2s linear 2',
        'switch-bottom' :'switch-bottom 2s linear 2',
        'switch-top' :'switch-top 2s linear 2',
        'fade-in-down': 'fade-in-down 0.5s finite linear' 
      }
    }
  },
  plugins: [],
  darkMode: 'class'
}
