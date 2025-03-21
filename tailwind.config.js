/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'bg-purple-700', 'bg-blue-700', 'bg-amber-700', 'bg-green-700', 'bg-rose-700',
    'text-white', 'bg-primary-600', 'hover:bg-primary-700',
    'bg-dark-800', 'bg-dark-900',
    'hover:bg-dark-700', 'hover:bg-gray-100',
    'hover:scale-102', 'transform',
    'bg-purple-500', 'bg-blue-500', 'bg-amber-500', 'bg-green-500', 'bg-rose-500',
    'emoji'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f7ff',
          100: '#ebf0fe',
          200: '#d6e0fd',
          300: '#b3c7fb',
          400: '#85a5f9',
          500: '#527cf6',
          600: '#2d57f3',
          700: '#1a44e4',
          800: '#1537c0',
          900: '#11299b',
        },
        dark: {
          800: '#1e2023',
          900: '#121416',
        },
      },
      scale: {
        '102': '1.02',
      },
    },
  },
  plugins: [],
}; 