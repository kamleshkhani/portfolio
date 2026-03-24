/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        midnight: "#050816",
        aurora: {
          blue: "#38bdf8",
          cyan: "#22d3ee",
          purple: "#8b5cf6",
          pink: "#ec4899"
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', "sans-serif"],
        body: ['"Manrope"', "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(148, 163, 184, 0.12), 0 30px 80px rgba(14, 165, 233, 0.12)",
        panel: "0 24px 60px rgba(2, 6, 23, 0.55)"
      },
      backgroundImage: {
        mesh: "radial-gradient(circle at top left, rgba(56, 189, 248, 0.18), transparent 28%), radial-gradient(circle at 85% 15%, rgba(139, 92, 246, 0.22), transparent 24%), radial-gradient(circle at 50% 100%, rgba(34, 211, 238, 0.16), transparent 28%)"
      }
    }
  },
  plugins: []
}
