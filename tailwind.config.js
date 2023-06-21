/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'App': "url('https://github.com/adrianhajdin/project_modern_ui_ux_restaurant/blob/main/src/assets/bg.png?raw=true')",
      },
    },
  },
  plugins: [],
}
