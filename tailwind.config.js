export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "light-bg": "url('/light1.jpg')",
        "dark-bg": "url('/black2.jpg')",
      },
    },
  },
  plugins: [],
};
