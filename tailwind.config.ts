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
        blue: '#1344f6',
        lightGray: '#f2f2f2',
        mediumGray: '#e2dfdd',
        black: '#262626',
        inputBlue: '#2443f6'
      },
      spacing: {
        "25P": '25%',
        "33P": '33%',
        "60P": '60%',
        "70P": '70%',
        "75P": '75%',
        "80P": '80%',
        "85P": '85%',
        "90P": '90%',
        "95P": '95%',
        7: '7px',
        8: '8px',
        9: '9px',
        10: '10px',
        12: '12px',
        20: '20px',
        24: '24px',
        40: '40px',
        100: '100px',
        150: '150px',
        200: '200px',
        250: '250px',
        300: '300px'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;