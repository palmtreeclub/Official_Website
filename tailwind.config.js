/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gdsccode-logo": "url('/Assets/GDSC-CODE.png')",
        "gdsc-footer-logo": "url('/Assets/GDSC_Silver_Oak University1.png')",
        "gdsc-sou-logo": "url('/Assets/GDSC-SOU.png')",
        "team-header": "url('/Assets/TEAM_HEADER_BG.png')",
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
        scroll: "scroll 120s linear infinite",
      },
      colors: {
        gblue: "#3B71FE",
        ggreen: "#0F9D58",
        gred: "#DB4437",
        gyellow: "#F89B00",
      },
      fontFamily: {
        "google-sans": ["Google-sans", "sans-serif"],
      },
      keyframes: {
        scroll: {
          "0%": { "margin-left": "100vw" },
          "100%": { "margin-left": "-100%" },
        },
      },
    },
  },
  plugins: [],
};
