module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        drawer: "calc(100% - 4rem)",
        "drawer-open": "calc(100% - 20rem)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
