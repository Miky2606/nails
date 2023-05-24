const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,js}"],
  theme: {
    extend: {
      fontFamily: {
        nail: "Nails",
        nail_2: "Nails-2",
      },
    },
  },
  // ...
};
