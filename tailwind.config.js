/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#359EFF",
                secondary: "#FBBF24",
                accent: "#06B6D4",

                "background-light": "#f5f7f8",
                "background-dark": "#0f1923",

                "surface-light": "#F8FAFC",
                "surface-dark": "#1E293B",

                "text-light": "#1E293B",
                "text-dark": "#F8FAFC",

                "text-muted-light": "#64748B",
                "text-muted-dark": "#94A3B8",
            },

            fontFamily: {
                display: ["Manrope", "sans-serif"],
                body: ["Inter", "sans-serif"],
            },

            borderRadius: {
                DEFAULT: "1rem",
                lg: "2rem",
                xl: "3rem",
                full: "9999px",
            },

            boxShadow: {
                soft:
                    "0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)",
                glow: "0 0 15px rgba(37, 99, 235, 0.3)",
            },
        },
    },
    plugins: [],
};
