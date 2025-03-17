/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkslateblue: '#483D8B', // Custom color definition
      },
    },
  },
  plugins: [],
};

export default config;
