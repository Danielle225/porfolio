/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      colors: {
        primary: {
          DEFAULT: '#F8F6F4',
          200: '#FFFFFF',
          400: '#C52D78',
          500: '#E66AA5',
          600: '#A81F63',
          700: '#8A1A52',
        },
        surface: '#F8F6F4',
        card: '#FFFFFF',
        ink: '#29212A',
        muted: '#716773',
        line: '#E7E2DE',
        grayscale: {
          25: '#F8F6F4',
          50: '#716773',
          100: '#F1EDEA',
          200: '#FFFFFF',
          400: '#9A9A9A',
          900: '#29212A',
          950: '#29212A',
        },
        secondary: '#C52D78',
        tertiary: '#E66AA5',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        morganite: ['"Morganite Black"', 'sans-serif'],
        supermario: ['SuperMario', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 12px 40px -18px rgba(41, 33, 42, 0.18)',
        panel: '0 1px 2px rgba(41, 33, 42, 0.04), 0 16px 40px -24px rgba(41, 33, 42, 0.22)',
      },
      backgroundImage: {
        'black-gradient':
          'linear-gradient(145deg, #29212A 0%, rgba(0, 0, 0, 0.9) 100%)',
      },
      dropShadow: {
        green: '0 0 10rem #29c26f',
      },
    },
  },
  plugins: [],
};
