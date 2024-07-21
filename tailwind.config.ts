import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './modules/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'riffic': ['var(--font-riffic)', 'sans-serif'],
        'tex-gyre': ['var(--font-tex-gyre-adventor)', 'sans-serif'],
      },
      colors: {
        // Alert
        "alert-destructive-background": "#FFDCDC",
        "alert-destructive-foreground": "#9A2323",
        "alert-info-background": "#E0DAFA",
        "alert-info-foreground": "Purple-Region/Moon-Raker/600",
        "alert-success-background": "#DEFFDC",
        "alert-success-foreground": "#1C8333",
        "alert-warning-background": "#FBFFCD",
        "alert-warning-foreground": "#C5BE12",

        // Button
        "button-ghost-all-border": "Text/Text-Light-BG",
        "button-ghost-default": "Blue-Region/Cornflower/50",
        "button-ghost-disabled": "#CAD2D9",
        "button-ghost-hover": "Blue-Region/Cornflower/50",
        "button-ghost-pressed": "Blue-Region/Cornflower/50",
        "button-primary-default": "Blue-Region/Portage/600",
        "button-primary-disabled": "#2727A3",
        "button-primary-hover": "Blue-Region/Portage/600",
        "button-primary-pressed": "Blue-Region/Portage/600",
        "button-secondary-default": "Miscellanous/Ziggurat/400",
        "button-secondary-disabled": "#58808C",
        "button-secondary-hover": "Miscellanous/Ziggurat/400",
        "button-secondary-pressed": "Miscellanous/Ziggurat/400",
        "button-tertiary-default": "Blue-Region/Cornflower/50",
        "button-tertiary-disabled": "#CAD2D9",
        "button-tertiary-hover": "Blue-Region/Cornflower/50",
        "button-tertiary-pressed": "Blue-Region/Cornflower/50",

        // Chips
        "chips-default-background": "Blue-Region/Cerulean-Blue/100",
        "chips-default-border": "Purple-Region/True-V/700",
        "chips-default-foreground": "Purple-Region/True-V/700",
        "chips-hover-background": "Blue-Region/Cerulean-Blue/100",
        "chips-hover-border": "Purple-Region/Blue-Violet/500",
        "chips-hover-foreground": "Purple-Region/Blue-Violet/500",
        "chips-hover-selected-background": "Purple-Region/True-V/600",
        "chips-hover-selected-border": "Purple-Region/Blue-Violet/500",
        "chips-hover-selected-foreground": "Purple-Region/Blue-Violet/500",
        "chips-selected-background": "Purple-Region/Blue-Violet/600",
        "chips-selected-border": "Purple-Region/Blue-Violet/500",
        "chips-selected-foreground": "Purple-Region/Blue-Violet/500",

        // Toast
        "toast-destructive-background": "#FFDCDC",
        "toast-destructive-foreground": "#9A2323",
        "toast-info-background": "#E0DAFA",
        "toast-info-foreground": "Purple-Region/Moon-Raker/600",
        "toast-success-background": "#DEFFDC",
        "toast-success-foreground": "#1C8333",
        "toast-warning-background": "#FBFFCD",
        "toast-warning-foreground": "#C5BE12",

        // Tooltip
        "tooltip-background": "Blue-Region/Cornflower/50",
        "tooltip-foreground": "Text/Text-Light-BG",

        // Modals
        "modals-background": "Blue-Region/Cornflower/50",
        "modals-foreground": "Text/Text-Light-BG",

        // Custom Colors
        "Blue-Region/Cerulean-Blue/100": "#E0E6F9",
        "Blue-Region/Cerulean-Blue/600": "#4654CE",
        "Blue-Region/Cerulean-Blue/700": "#393FBC",
        "Blue-Region/Cornflower/50": "#F0F8FF",
        "Blue-Region/Cornflower/100": "#E1F0FD",
        "Blue-Region/Portage/100": "#DFE8FF",
        "Blue-Region/Portage/600": "#4141EA",
        "Blue-Region/Portage/800": "#2E2CA7",
        "Miscellanous/Ziggurat/400": "#73ABBD",
        "Purple-Region/Blue-Violet/500": "#7B70E4",
        "Purple-Region/Blue-Violet/600": "#6149D4",
        "Purple-Region/Moon-Raker/600": "#804ED9",
        "Purple-Region/True-V/600": "#6F4FD8",
        "Purple-Region/True-V/700": "#5F3DC4",
        "Red-Region/Pohutukawa/100": "#FFE1E4",
        "Red-Region/Pohutukawa/700": "#BD1827",
        "Red-Region/Pohutukawa/800": "#931621",
        "Red-Region/Monza/800": "#A3111E",
        "Text/Text-Dark-BG": "#E0ECFF",
        "Text/Text-Light-BG": "#2E3881",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config