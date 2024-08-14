/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  prefix: "",
  darkMode: 'false',
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        yellow: "#f2bc39",
        negro: "#1A2128",
        plomo: "#434D56"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}