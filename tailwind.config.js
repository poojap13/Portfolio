/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'], // Include ts/tsx
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Custom font
      },
    },
  },
  plugins: [],
  corePlugins: {
    // Enable built-in smooth scrolling (from Tailwind v3.2+)
    scrollBehavior: true,
  },
};
