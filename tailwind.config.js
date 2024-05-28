/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-picture": "#BAB6B3",
        "custom-bg": "#FFFFFF",
      },
    },
  },
  plugins: ["@tailwindcss/aspect-ratio"],
};
