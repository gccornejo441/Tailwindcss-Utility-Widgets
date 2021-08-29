module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      textColor: ['group-focus'],
      backgroundColor: ['group-focus'],
      scale: ['focus-within'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
