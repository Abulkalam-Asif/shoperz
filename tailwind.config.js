/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1440px" },
      // => @media (max-width: 1440px) { ... }
      xl: { max: "1280px" },
      // => @media (max-width: 1280px) { ... }
      lg: { max: "1024px" },
      // => @media (max-width: 1024px) { ... }
      md: { max: "768px" },
      // => @media (max-width: 768px) { ... }
      sm: { max: "640px" },
      // => @media (max-width: 640px) { ... }
      xs: { max: "480px" },
      // => @media (max-width: 480px) { ... }
    },
    extend: {
      colors: {
        "Grey-900": "rgba(29, 35, 44, 1)",
        "Grey-700": "rgba(88, 106, 132, 1)",
        "Grey-600": "rgba(125, 143, 169, 1)",
        "Grey-100": "rgba(238, 240, 244, 1)",
        "Primary-600": "rgba(49, 157, 255, 1)",
      },
      maxWidth: {
        "8xl": "1440px",
      },
      backgroundColor: {
        heroBg: "#0F121E",
      },
    },
  },
  plugins: [],
};
