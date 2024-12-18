// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        spin: 'spin 1s linear infinite', // Spin animation
      },
    },
  },
  plugins: [],
};
