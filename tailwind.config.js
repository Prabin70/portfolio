// tailwind.config.js
module.exports = {
  // ... your other config
  theme: {
    extend: {
      keyframes: {
        pulseGlow: {
          "0%, 100%": {
            boxShadow: "0 0 30px 5px rgba(236, 72, 153, 0.4)",
            opacity: 1,
          },
          "50%": {
            boxShadow: "0 0 45px 10px rgba(236, 72, 153, 0.6)",
            opacity: 0.8,
          },
        },
      },
      animation: {
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
