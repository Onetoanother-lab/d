/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Oswald', 'Barlow Condensed', 'sans-serif'],
        body: ['Manrope', 'Inter', 'sans-serif'],
      },
      colors: {
        background: '#0a0a0a',
        surface: '#171717',
        'surface-highlight': '#262626',
        'text-primary': '#ededed',
        'text-secondary': '#a3a3a3',
        'primary-accent': '#ef4444',
        'secondary-accent': '#06b6d4',
        'tertiary-accent': '#f59e0b',
        'success': '#22c55e',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};