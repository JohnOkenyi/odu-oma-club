import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                luxury: {
                    alabaster: "#F9F8F6",
                    champagne: "#E8E1D3",
                    charcoal: "#121212",
                    gold: "#D4AF37",
                    "warm-gray": "#8C8C8C",
                    "soft-cream": "#FDFCFB",
                },
                brand: {
                    royal: "#3B2B5C",
                    lavender: "#9685B5",
                }
            },
            fontFamily: {
                serif: ["var(--font-playfair)", "serif"],
                sans: ["var(--font-inter)", "sans-serif"],
            },
            keyframes: {
                "fade-up": {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                "cinematic-in": {
                    "0%": { opacity: "0", filter: "blur(10px)" },
                    "100%": { opacity: "1", filter: "blur(0)" },
                }
            },
            animation: {
                "fade-up": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                "cinematic-in": "cinematic-in 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
            },
        },
    },
    plugins: [],
};
export default config;
