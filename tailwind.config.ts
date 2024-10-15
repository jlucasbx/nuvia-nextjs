import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ['var(--font-montserrat)'],
                poppins: ['var(--font-poppins)']
            },
            colors: {
                "primary": "#06367A",
                "primary-dark": "#00275C",
                "secondary": "#266FD5",
                "tertiary": "#7DAAEA",
                "quartenary": "#f5f9fd",
                "typo-light-primary": "#B5B5B5"
            }
        }
    },
    plugins: [],
}

export default config
