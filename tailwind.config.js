import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    darkMode: "selector",

    theme: {
        extend: {
            // content: {
            // },

            backgroundImage: {
                noise: "url('../img/noise.svg')",
                themeGradient:
                    "linear-gradient(261.3deg, rgba(0, 72, 174, 0.6) 0.01%, rgba(255, 255, 255, 0) 100%)",
            },
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms],
};
