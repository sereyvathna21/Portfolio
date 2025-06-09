/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb", // Modern blue
        secondary: "#3b82f6", // Lighter blue
        accent: "#f59e0b", // Warm orange
        dark: "#1e293b", // Dark blue-gray
        light: "#f8fafc", // Light gray
      },
      animation: {
        "fade-in-up": "fadeInUp 1s ease-out",
        float: "float 3s ease-in-out infinite",
        "slide-in": "slideIn 1s ease-out",
        scale: "scale 0.5s ease-in-out",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "border-flow": "borderFlow 3s ease infinite",
        "gradient-x": "gradientX 15s ease infinite",
        "bounce-slow": "bounce 3s infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        borderFlow: {
          "0%, 100%": { borderColor: "var(--tw-color-primary)" },
          "50%": { borderColor: "var(--tw-color-secondary)" },
        },
        gradientX: {
          "0%, 100%": {
            backgroundSize: "200% 200%",
            backgroundPosition: "left center",
          },
          "50%": {
            backgroundSize: "200% 200%",
            backgroundPosition: "right center",
          },
        },
      },
    },
  },
  variants: {
    extend: {
      transform: ["hover", "focus"],
      scale: ["group-hover"],
      translate: ["group-hover"],
    },
  },
};
