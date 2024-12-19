import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "hsl(var(--primary))",
        // "line-gradient":
        //   "linear-gradient(90deg,hsla(0,0%,95%,0) 0,#f3f3f3 50%,hsla(0,0%,95%,0))",
      },
      backgroundImage: {
        line: "linear-gradient(90deg,hsla(0,0%,95%,0) 0,#f3f3f3 50%,hsla(0,0%,95%,0))",
      },
    },
  },
  plugins: [],
} satisfies Config;
