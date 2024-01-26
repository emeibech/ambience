/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '370px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['custom', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      backgroundImage: {
        'cafe': 'url(assets/images/backgrounds/cafe.jpg)',
        'beach': 'url(assets/images/backgrounds/beach.jpg)',
        'garden': 'url(assets/images/backgrounds/garden.jpg)',
        'forest': 'url(assets/images/backgrounds/forest.jpg)',
      }
    },
  },
  plugins: [],
}