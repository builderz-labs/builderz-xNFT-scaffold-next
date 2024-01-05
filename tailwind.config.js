/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "builderz-green": "#14f195",
        "builderz-blue": "#00B2FF",
      },
        backgroundImage: {
        'mesh': "radial-gradient(at 47.0% 96.0%, #151b40 0px, transparent 50%),radial-gradient(at 61.0% 15.0%, #09162b 0px, transparent 50%),radial-gradient(at 8.0% 16.0%, #0f1930 0px, transparent 50%),radial-gradient(at 85.0% 28.0%, #110c3d 0px, transparent 50%),radial-gradient(at 81.0% 66.0%, #060d1f 0px, transparent 50%)",
        'light-mesh': "radial-gradient(at 47.0% 96.0%, #a8abbd 0px, transparent 50%),radial-gradient(at 61.0% 15.0%, #d5dde8 0px, transparent 50%),radial-gradient(at 8.0% 16.0%, #c3ccde 0px, transparent 50%),radial-gradient(at 85.0% 28.0%, #b2abeb 0px, transparent 50%),radial-gradient(at 81.0% 66.0%, #ccd2e0 0px, transparent 50%)"
      },
    },
  },
  plugins: [require("daisyui")],
};
