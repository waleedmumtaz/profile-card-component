const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        cstm: {
          primary: {
            'dark-cyan': 'hsl(185, 75%, 39%)',
            'dark-desaturated-blue': 'hsl(229, 23%, 23%)',
            'dark-grayish-blue': 'hsl(227, 10%, 46%)',
          },
          neutral: {
            'dark-gray': 'hsl(0, 0%, 59%)',
          },
        },
      },
      fontFamily: {
        'kumbh-sans': ['Kumbh Sans', 'sans-serif'],
      },
    },
  },

  plugins: [],
}

module.exports = config
