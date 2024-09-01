/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "story-1": "url('/src/assets/images/story_1.jpg')",
      },
    },
    fontFamily: {
      display: ["Arizonia", "Helvetica", "sans"],
      body: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
