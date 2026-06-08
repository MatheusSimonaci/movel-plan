import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Atelier V2 palette */
        bone: "var(--color-bone)",
        "bone-50": "var(--color-bone-50)",
        linen: "var(--color-linen)",
        clay: "var(--color-clay)",
        ink: "var(--color-ink)",
        "ink-soft": "var(--color-ink-soft)",
        "ink-muted": "var(--color-ink-muted)",
        "ink-line": "var(--color-ink-line)",
        brass: "var(--color-brass)",
        "brass-ink": "var(--color-brass-ink)",
        walnut: "var(--color-walnut)",
        "walnut-soft": "var(--color-walnut-soft)",
        "on-walnut": "var(--color-on-walnut)",
        "on-walnut-muted": "var(--color-on-walnut-muted)",
        danger: "var(--color-danger)",
        /* shadcn-compat aliases */
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: "var(--destructive)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "ui-serif", "Georgia", "serif"],
      },
      fontSize: {
        "display-xl": ["clamp(56px, 8vw, 96px)", { lineHeight: "0.96", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(40px, 5vw, 64px)", { lineHeight: "1.04", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(28px, 3.5vw, 40px)", { lineHeight: "1.12", letterSpacing: "-0.01em" }],
        h3: ["clamp(20px, 2vw, 24px)", { lineHeight: "1.20", letterSpacing: "-0.005em" }],
        lead: ["18px", { lineHeight: "1.55" }],
        body: ["16px", { lineHeight: "1.60" }],
        meta: ["14px", { lineHeight: "1.50" }],
        eyebrow: ["12px", { lineHeight: "1.30", letterSpacing: "0.18em" }],
        micro: ["11px", { lineHeight: "1.30", letterSpacing: "0.15em" }],
      },
      spacing: {
        1: "var(--space-1)",
        2: "var(--space-2)",
        3: "var(--space-3)",
        4: "var(--space-4)",
        5: "var(--space-5)",
        6: "var(--space-6)",
        7: "var(--space-7)",
        8: "var(--space-8)",
        9: "var(--space-9)",
        10: "var(--space-10)",
        11: "var(--space-11)",
      },
      borderRadius: {
        none: "0",
        xs: "var(--radius-xs)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        full: "var(--radius-full)",
      },
      boxShadow: {
        xs: "var(--shadow-xs)",
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        portrait: "var(--shadow-portrait)",
        focus: "var(--shadow-focus)",
      },
      transitionTimingFunction: {
        standard: "var(--ease-standard)",
        "ease-out-editorial": "var(--ease-out)",
        "ease-in-editorial": "var(--ease-in)",
      },
      transitionDuration: {
        fast: "var(--dur-fast)",
        base: "var(--dur-base)",
        slow: "var(--dur-slow)",
      },
    },
  },
  plugins: [],
} satisfies Config;
