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
        parchment: "#F4EFE8",
        "parchment-2": "#EAE4DC",
        charcoal: "#1A1916",
        taupe: "#7A7068",
        "taupe-light": "#A89E92",
        // Legacy aliases
        bg: "#F4EFE8",
        surface: "#FFFFFF",
        text: "#1A1916",
        muted: "#7A7068",
        border: "#DDD8D0",
      },
      fontFamily: {
        heading: ["var(--font-cormorant)"],
        body: ["var(--font-jost)"],
      },
      boxShadow: {
        'luxury': '0 20px 60px -12px rgba(26, 25, 22, 0.08)',
        'subtle': '0 4px 20px -4px rgba(26, 25, 22, 0.05)',
      },
      transitionDuration: {
        '400': '400ms',
      },
      animation: {
        'shimmer': 'shimmer 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
