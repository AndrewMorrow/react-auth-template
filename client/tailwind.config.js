/*Colors
Space Cadet Blue: "#222E50"
*/

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        md: "2rem",
        lg: "3rem",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1300px",
      // => @media (min-width: 1300px) { ... }
    },
    extend: {
      colors: {
        primary: {
          light: "#CAF0F8",
          DEFAULT: "#00B4D8",
          dark: "#03045E",
        },
        secondary: {
          light: "#90E0EF",
          DEFAULT: "#48CAE4",
          dark: "#023E8A",
        },
        transparent: "transparent",
        current: "currentColor",
      },
    },

    variants: {
      extend: {},
    },
    plugins: [],
  },
};
