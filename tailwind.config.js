/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // For Next.js 13+ App Router
    "./pages/**/*.{js,ts,jsx,tsx}",   // For Pages Router
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 🔑 THIS IS THE KEY STEP
        // Define 'abhayaLibre' to use the CSS variable you created in layout.js
        abhayaLibre: ['var(--font-abhaya-libre)', 'serif'],
        onest: ['var(--font-onest)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

