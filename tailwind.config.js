const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "blue-gray": colors.blueGray,
        rose: colors.rose,
        teal: colors.teal,
        lime: colors.lime,
        orange: colors.orange,
        amber: colors.amber,
        cyan: colors.cyan,
      },
      maxHeight: {
        "10/12": "83.333333%",
        "11/12": "91.666667%",
      },

      width: { open: "calc(100% - 18rem )", close: "calc(100% - 5rem )" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
