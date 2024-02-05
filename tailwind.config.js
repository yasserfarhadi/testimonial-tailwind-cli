/** @type {import("tailwindcss")} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow Semi Condensed', 'Sans-serif'],
      },
    },
  },
  plugins: [],
};
