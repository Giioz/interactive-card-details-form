/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'grotesk' : ['Space Grotesk', 'sans-serif']
      },
      backgroundImage : {
        'custom-gradient': 'linear-gradient(to bottom right, rgb(255, 255, 255) 0%, rgb(210, 211, 217) 100%)',
      },
    },
  },
  plugins: [],
}

