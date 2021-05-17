module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    minWidth: {
      140: "140px",
      350: "350px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
