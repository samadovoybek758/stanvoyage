import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xl: "1240px",
        xm: "900px",
        sssm: "600px",
        ssm: "500px",
        xssm: "400px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black60: "rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [
    
  ],
  
} satisfies Config;
