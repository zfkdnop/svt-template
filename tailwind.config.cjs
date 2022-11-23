/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,svelte}",
  ],
  theme: {
    fontFamily: {
      sans: ['Ubuntu', 'sans'],
      serif: ['Ubuntu', 'serif'],
      mono: ['Xanh Mono', 'monospace'],
    },
    extend: {
      //colors: {
      //transparent: 'transparent',
      //},
    },
  },
  plugins: [
    // npm install -D @tailwindcss/forms
    // require("@tailwindcss/forms")({
    //   strategy: 'base', // only generate global styles
    //   strategy: 'class', // only generate classes
    // }),
  ],
}
