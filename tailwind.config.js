/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#ffffff",
          200: "#fafafa",
          300: "#f5f5f5",
          400: "#ededed",
        },
        secondary: {
          100: "#0a0a0a",
          200: "#111111",
          300: "#171717",
          400: "#262626",
        },
        gray: {
          50: "#a1a1aa",
          100: "#71717a",
          200: "#52525b",
        },
      },
    },
  },
  plugins: [],
};
