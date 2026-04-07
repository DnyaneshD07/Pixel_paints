import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#df9588", // Rose Gold
        "on-primary": "#1a0b2e", // Deep Purple
        "primary-container": "#a80b32", // Velvet Red
        "secondary": "#631e8c", // Royal Purple
        "on-secondary": "#ffffff",
        "tertiary": "#f4d1c9", 
        "surface": "transparent", // Allows background gradient to show through completely
        "on-surface": "#ffffff",
        "surface-variant": "#3d0b2f", 
        "on-surface-variant": "#fdf0ed",
        "surface-container-low": "rgba(255,255,255,0.05)",
        "surface-container": "rgba(255,255,255,0.1)",
        "surface-container-highest": "rgba(255,255,255,0.2)",
        "surface-container-lowest": "rgba(0,0,0,0.3)",
        "outline-variant": "rgba(255,255,255,0.2)",
      },
      fontFamily: {
        headline: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-outfit)', 'sans-serif'],
        label: ['var(--font-outfit)', 'sans-serif'],
      },
      animation: {
        'blob': 'blob 10s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        }
      }
    },
  },
  plugins: [],
};
export default config;
