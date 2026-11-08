/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6', // Blue accent
        cyan: {
          400: '#22d3ee', // Cyan for logo - exact match to Sam's
        },
        dark: {
          900: '#0a0a0b', // Very dark, almost black - Sam's exact background
          800: '#18181b', // Slightly lighter for cards
          700: '#27272a', // Even lighter for borders
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        'xl': '20px',
      },
    },
  },
  plugins: [],
}
