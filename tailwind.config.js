const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  plugins: [flowbite.plugin()],
  theme: {
    extend: {
      colors: {
        primary: "#6796DC",
        secondary: "#B0D0FF",
      },
    },
  },
};
