import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: '#000000',
          custom: '#111214'
        },
        yellow: {
          custom: '#EBC76B'
        },
        gray: {
          custom: '#E3E3E3'
        }
      }
    }
  },
  plugins: [],
};
export default config;
