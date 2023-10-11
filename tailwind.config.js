import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./Pages/**/*.{md,mds,markdown,stencil}",
    // "./Components/**/*.{md,mds,markdown,stencil}",
    "./Output/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#0000EE",
      },
      fontFamily: {
        sans: ['"Favorit"', ...defaultTheme.fontFamily.sans],
        headline: ['"Inter"', ...defaultTheme.fontFamily.sans],
        mono: ['"MonoLisa"', ...defaultTheme.fontFamily.mono],
      },
      maxWidth: {
        prose: "60ch",
      },
    },
  },
  plugins: [],
};
