import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        xs: "360px",
        small: "470px",
        medium: "730px",
        navsize: "850px",
        tablet: "1183px",
        desktop: "1439px",
        largesceen: "1660px",
      },

      fontFamily: {},

      colors: {
        yellow: "#FFC164",
        accentRed: "#FF5C5C",
        dark: "#000000",
        macWindowBorder: '#d1d1d1',
        macWindowTitleBar: '#f0f0f0',
        macWindowClose: '#ff5f56',
        macWindowMinimize: '#ffbd2e',
        macWindowMaximize: '#28c840',
      },

      borderRadius: {
        'lg': '0.5rem',
      },
    },
  },
  plugins: [],
};
export default config;
