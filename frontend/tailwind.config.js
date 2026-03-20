/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        surface: '#121212',
        'surface-highlight': '#1E1E1E',
        primary: '#722F37',
        secondary: '#C5A059',
        'text-primary': '#F5F5F0',
        'text-secondary': '#A1A1AA',
        border: '#27272A',
        accent: '#591C23',
        wine: {
          50: '#fdf2f4',
          100: '#fce7ea',
          200: '#f9d0d7',
          300: '#f4a9b7',
          400: '#ed7892',
          500: '#e04d71',
          600: '#cc2f5b',
          700: '#ab2249',
          800: '#8f1f41',
          900: '#722F37',
          950: '#460c1e',
        },
        gold: {
          50: '#fbf9f1',
          100: '#f5f0dd',
          200: '#eadeba',
          300: '#dcc68f',
          400: '#C5A059',
          500: '#c79c44',
          600: '#b98439',
          700: '#9a6731',
          800: '#7d532e',
          900: '#664528',
          950: '#392313',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Manrope', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'gold-shimmer': 'goldShimmer 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        goldShimmer: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
