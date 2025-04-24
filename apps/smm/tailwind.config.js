/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom': '985px',
        'xs': '375px'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        primary: {
          DEFAULT: "var(--primary)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "var(--accent-foreground)",
        },
        hover: {
          DEFAULT: "var(--hover)"
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
        },
        plain: {
          DEFAULT: "var(--plain)",
          foreground: "hsl(var(--plain-foreground) / <alpha-value>)",
        },
        accent: "var(--accent)",
        border: "hsl(var(--border) / <alpha-value>)"
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
      },
      
      
     
    },
  },

  darkMode: "class",
  plugins: [require("tailwindcss-animate")],
}

