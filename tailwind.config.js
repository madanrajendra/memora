/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        albert: ['"Albert Sans"', 'sans-serif'],
        dm: ['"DM Sans"', 'sans-serif'],
        orbitron: ['"Orbitron"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
        oxanium: ['"Oxanium"', 'sans-serif'],
        poppins: ['"Poppins"', 'sans-serif'],
        raleway: ['"Raleway"', 'sans-serif'],
        orienta: ['"Orienta"', 'sans-serif'],
        sora: ['"Sora"', 'sans-serif'],
        'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        memora: {
          dark: '#050505',
          charcoal: '#0A0A0A',
          white: '#F5F7FA',
          gray: '#7F8BA8',
          blue: '#1EA0FF', // Electric blue
          royal: '#001AFF', // Royal blue
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    }
  },
  plugins: [],
};
