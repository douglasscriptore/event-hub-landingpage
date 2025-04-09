import { heroui } from "@heroui/react";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    darkMode: "class",
    defaultTheme: "dark",
    
    extend: {
      colors: {
        primary: "#7828C8",
        secondary: "#FF3D9A",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
