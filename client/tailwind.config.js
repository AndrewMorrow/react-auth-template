/*Colors
Space Cadet Blue: "#222E50"
*/

module.exports = {
    mode: "jit",
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
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
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
