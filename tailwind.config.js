/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1B2A4A",
          dark: "#121D36",
          light: "#27395E",
        },
        teal: {
          DEFAULT: "#1C7293",
          light: "#2489AF",
        },
        amber: {
          DEFAULT: "#F4A736",
          dark: "#B4761E",
        },
        slate: {
          DEFAULT: "#5B6B8C",
        },
        lightbg: "#F7F8FB",
        edge: "#E3E7EF",
      },
      fontFamily: {
        display: ["'Source Serif 4'", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 6px rgba(27, 42, 74, 0.08)",
        panel: "0 12px 32px rgba(27, 42, 74, 0.16)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};
