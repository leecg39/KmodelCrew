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
        primary: {
          DEFAULT: '#1A1A1A', // Black
          light: '#333333',   // Charcoal
        },
        secondary: {
          DEFAULT: '#FFFFFF', // White
          dark: '#F8F8F8',    // Off-White
        },
        accent: {
          DEFAULT: '#C9A962', // Gold
          light: '#E8D5A3',   // Light Gold
        },
        success: '#2E7D32',
        error: '#C62828',
        warning: '#F9A825',
        info: '#1565C0',
        'off-white': '#F8F8F8', // Direct reference from design prototype
      },
      fontFamily: {
        sans: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['var(--font-cormorant-garamond)', 'Georgia', 'serif'], // Using CSS variable for Next.js font
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h1': ['2.5rem', { lineHeight: '1.3', fontWeight: '700' }],
        'h2': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h4': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.25rem', { lineHeight: '1.7', fontWeight: '400' }],
        'body': ['1.125rem', { lineHeight: '1.7', fontWeight: '400' }],
        'body-sm': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'caption': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;
