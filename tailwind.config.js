/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
export default {
  content: ["**/*.{html,tsx}"],
  darkMode: "class",
  important: true,
  theme: {
    fontFamily: {
      sans: ["sofia-pro", "sans-serif"],
      display: ["cubano", "sans-serif"],
      body: ["sofia-pro", "sans-serif"],
      code: ["attribute-mono", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      gray1: "#f8f8f8",
      gray2: "#dbe1e8",
      gray3: "#b2becd",
      gray4: "#6c7983",
      gray5: "#454e56",
      gray6: "#2a2e35",
      gray7: "#12181b",
      link: "#0000ee",
      blue: colors.blue,
      green: colors.green,
      pink: colors.pink,
      purple: colors.purple,
      orange: colors.orange,
      red: colors.red,
      yellow: colors.yellow,
      gray: colors.gray,
    },
    extend: {
      boxShadow: {
        "3xl": "0 5px 20px rgb(0 0 0 / 30%)",
        "4xl": "0 5px 20px rgb(0 0 0 / 90%)",
      },
      width: {
        128: "32rem",
        512: "128rem",
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              "font-weight": "normal",
              "font-size": "2.5rem",
            },
            h2: {
              "font-weight": "normal",
              "font-size": "2rem",
            },
            h3: {
              "font-weight": "normal",
              "font-size": "1.75rem",
            },
            h4: {
              "font-weight": "normal",
              "font-size": "1.5rem",
            },
            h5: {
              "font-weight": "normal",
              "font-size": "1.25rem",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
