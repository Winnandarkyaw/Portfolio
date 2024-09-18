/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        //primary: "#6a3782",
        // primary: "#4a1d5e",
        // secondary: "#F97316",
        // tertiary: "#54D688",
        tertiary: "#F65058FF",
        primary: "#28334AFF",
        secondary: "#FBDE44FF",
      },
    },
    screens: {
      lg: { max: "2023px" },
      sm: { max: "1000px" },
    },
  },
  plugins: [],
};
