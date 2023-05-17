/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "builderz-green": "#14f195",
        "builderz-blue": "#00B2FF",
      }
    },
  },
  plugins: [require("daisyui")],
};
