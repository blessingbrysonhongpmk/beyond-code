/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#102235',
          DEFAULT: '#183451', // Primary navy
          800: '#183451',
          700: '#23476D',
        },
        accent: {
          DEFAULT: '#416B96', // Secondary blue
          hover: '#33557A',
          light: '#EDF4FA',   // Light blue
        },
        body: {
          DEFAULT: '#273444', // Main text
          muted: '#687789',   // Secondary text
        },
        surface: {
          DEFAULT: '#FFFFFF',
          subtle: '#F8FAFC',
          card: '#FFFFFF',
          border: '#E2E8F0',
        }
      },
      fontFamily: {
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(24, 52, 81, 0.05), 0 1px 2px -1px rgba(24, 52, 81, 0.05)',
        'elevated': '0 4px 16px -2px rgba(24, 52, 81, 0.08), 0 2px 6px -2px rgba(24, 52, 81, 0.04)',
      },
    }
  },
  plugins: []
};
