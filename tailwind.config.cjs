module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'blue':'#0092CA',
      'red':'#DA0037',
      'orange': '#FD7014',
      'yellow':'#FCDA05',
      'purple':'#7971EA',
      'off-white':'#F5F5F5',
      'white': '#ffffff',
      'dark': '#222831',
      'black': '#000000',
      'dark-blue':'#17375E',
      'green': '#7FCD91'
    },
    fontFamily: {
      sans: ['Source Sans Pro', 'sans-serif']
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
