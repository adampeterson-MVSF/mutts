import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Design Token System
      // =====================
      // All colors are defined as CSS custom properties (CSS variables) in app/globals.css
      // This ensures single source of truth and allows runtime theming.
      //
      // To add a new semantic token:
      // 1. Define the CSS variable in app/globals.css (e.g., --my-color: 220 70% 50%)
      // 2. Add the token here: myColor: "hsl(var(--my-color))"
      // 3. Use in components: className="text-myColor" or className="bg-myColor"
      //
      // For color variants (light/dark), define separate tokens like --my-color-light/--my-color-dark
      // and conditionally apply them in your component or CSS.
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        // Design tokens are defined in app/globals.css
        // This file extends the default Tailwind theme with custom colors
        // Accessibility tokens: focus outlines use --ring, error colors use --destructive
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        // Accessibility tokens for focus states and form validation
        focus: {
          ring: "hsl(var(--ring))",
          outline: "hsl(var(--ring))",
        },
        error: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        success: {
          DEFAULT: "hsl(142 76% 36%)", // Green for success states
          foreground: "hsl(355.7 100% 97.3%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-2px)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(2px)" },
        },
      },
      animation: {
        shake: "shake 0.4s ease",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
