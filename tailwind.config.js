module.exports = {
    darkMode: "class",
    mode: "jit",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                mochiy: ["'Mochiy Pop P One'", "system-ui"],
            },
        },
    },

    plugins: [require("@tailwindcss/typography")],
};
