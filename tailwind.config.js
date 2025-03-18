module.exports = {
    // Adjust these paths to match your project structure:
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          // Override Tailwind's default gray scale with your custom navy-tinted scale
          gray: {
            50:  '#FFFFFF',
            100: '#E7EAED',
            200: '#D0D6DB',
            300: '#B8C1C9',
            400: '#A1ADB7',
            500: '#8998A4',
            600: '#728492',
            700: '#5A6F80',
            800: '#435A6E',
            900: '#2B465C',
          },
        },
      },
    },
    variants: {},
    plugins: [],
  };