/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    // Category colors
    'bg-purple-700', 'bg-blue-700', 'bg-amber-700', 'bg-green-700', 'bg-rose-700',
    'bg-purple-500', 'bg-blue-500', 'bg-amber-500', 'bg-green-500', 'bg-rose-500',
    
    // Text colors
    'text-white', 'text-gray-900', 'text-gray-800', 'text-gray-700', 'text-gray-600', 
    'text-gray-500', 'text-gray-400', 'text-gray-300', 'text-gray-200', 'text-gray-100',
    'text-primary-800', 'text-primary-700', 'text-primary-600', 'text-primary-500',
    'text-yellow-400',
    
    // Background colors
    'bg-primary-600', 'bg-primary-700', 'bg-primary-500', 'bg-primary-100',
    'bg-dark-800', 'bg-dark-900', 'bg-dark-700',
    'bg-gray-100', 'bg-gray-200', 'bg-gray-300', 'bg-gray-700', 'bg-gray-800',
    'bg-white',
    
    // Hover states
    'hover:bg-primary-700', 'hover:bg-primary-200',
    'hover:bg-dark-700', 'hover:bg-gray-100', 'hover:bg-gray-300',
    'hover:shadow-lg', 'hover:shadow-xl',
    'hover:scale-102',
    
    // Transforms and utilities
    'transform', 'emoji',
    'shadow', 'shadow-md', 'shadow-lg', 'shadow-inner', 'shadow-sm',
    'rounded-lg', 'rounded-full', 'rounded', 'rounded-md',
    'transition-colors', 'transition-all', 'duration-200', 'duration-300'
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
          700: '#2d3035',
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