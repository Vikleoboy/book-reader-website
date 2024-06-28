import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        xs: "360px",
        small: "470px",
        navsize: "850px",
        medium: "730px",
        desktop: "1439px",
        largesceen: "1660px",
      },

      fontFamily: {},

      colors: {
        yellow: "#FFC164",
        accentRed: "#FF5C5C",
        dark: "#000000",
      },
    },
  },
  plugins: [],
};
export default config;
