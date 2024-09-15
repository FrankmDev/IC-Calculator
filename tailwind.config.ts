import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        _white: "var(--white-color)",
        _black: "var(--black-color)",
        _main: "var(--main-color)",
      },
    },
  },
  plugins: [],
};
export default config;
