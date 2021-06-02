module.exports = {
  purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-10': '-10',
      },
    },

    screens: {
      xs: '300px',
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl-mid': '1100px',

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      'txt-xl': '1599px',
    },
    fontFamily: {
      panton: ['Panton', 'sans-serif', 'Arial', 'ui-sans-serif', 'system-ui'],
    },
    colors: {
      purple: {
        light: '#3b2460',
        dark: '#291843',
      },
      green: {
        light: '#15d1a5',
      },
      white: {
        light: '#fff',
        dark: '#575757',
      },
      gray: {
        light: '#e4e5e6',
        dark: '#333',
      },
      black: {
        main: 'black',
      },
      seofoam: {
        50: '#defff6',
        100: '#37bb9c',
        200: '#2c967d',
        300: '#21705e',
        400: '#164b3e',
        500: '#0b251f',
        600: '#000000',
        700: '#66ffcc',
      },

      'seofoam-light': {
        50: '#5fefaa',
        100: '#7ff2bb',
        200: '#9ff5cc',
        300: '#bff9dd',
        400: '#dffcee',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
