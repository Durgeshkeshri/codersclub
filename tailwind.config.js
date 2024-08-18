/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        tab: '810px', // New custom breakpoint at 810px
        lap: '1200px',
        smvideo: '420px'
        // Other breakpoints will follow the default Tailwind values
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
