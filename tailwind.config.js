/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'], // Add ts/tsx too if needed
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Your preferred font
      },
    },
  },
  plugins: [],
  corePlugins: {
    // Enables built-in smooth scrolling
    scrollBehavior: true,
  },
};
