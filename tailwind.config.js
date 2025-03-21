module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
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
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}; 