import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            sm: "375px",
            md: "768px",
            lg: "1200px",
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                md: "2rem",
            },
        },
        extend: {
            fontFamily: {
                sans: ["var(--font-sans)"],
                serif: ["var(--font-serif)"],
            },
            animation: {
                "spin-large": "ping 1s linear infinite",
                "move-left": "moveLeft 1s linear infinite",
                "move-right": "moveRight 1s linear infinite",
            },
            keyframes: {
                ping: {
                    "75%, 100%": {
                        transform: "scale(3)",
                        opacity: "0",
                    },
                },
                moveLeft: {
                    "0%": {
                        transform: "translateX(0%)",
                    },
                    "100%": {
                        transform: "translateX(-50%)",
                    },
                },
                moveRight: {
                    "0%": {
                        transform: "translateX(-50%)",
                    },
                    "100%": {
                        transform: "translateX(0%)",
                    },
                },
            },
        },
    },
    plugins: [],
};
export default config;
