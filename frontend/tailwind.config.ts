import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {

    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#94a3b8',
            h1: {
              color: '#e2e8f0',
            },
            h2: {
              color: '#e2e8f0',
            },
            h3: {
              color: '#e2e8f0',
            },
            a: {
              color: '#38bdf8',
              '&:hover': {
                color: '#7dd3fc',
              },
            },
            code: {
              color: '#e2e8f0',
              backgroundColor: '#1e293b',
              padding: '0.25rem',
              borderRadius: '0.25rem',
            },
            pre: {
              backgroundColor: '#1e293b',
            },
          },
        },
      },
      animation: {
        border: 'background ease infinite'
      },
      keyframes: {
        background: {
          '0%, 100%': {backgroundPosition: '0% 50%'},
          '50%': {backgroundPosition: '100% 50%'},

        }
      },
      fontFamily:{
        title: ["Lobster", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-motion'),
  ],
} satisfies Config;
