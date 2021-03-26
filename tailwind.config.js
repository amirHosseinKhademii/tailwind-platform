module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        18: "4.5rem",
      },
      width: {
        drawer: "calc(100% - 4rem)",
        "drawer-open": "calc(100% - 20rem)",
      },
      minHeight: {
        0: "0px",
        12: "3rem",
        full: "100%",
        screen: "100vh",
      },
      minWidth: {
        0: "0px",
        full: "100%",
        min: "min-content",
        max: "max-content",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
