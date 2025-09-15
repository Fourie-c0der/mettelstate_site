/* Custom colors in tailwind.config.js */
module.exports = {
  theme: {
    extend: {
      colors: {
        neonPink: "#ff007f",
        neonBlue: "#00d4ff",
        neonGreen: "#39ff14",
        darkCharcoal: "#111111",
        darkSlate: "#222222",
        accentYellow: "#ffdd55",
      },
      fontFamily: {
        display: ["'Orbitron'", "sans-serif"],   /* for titles */
        body: ["'Poppins'", "sans-serif"],        /* or something sleek */
      },
      boxShadow: {
        neon: "0 0 15px rgba(255, 0, 127, 0.7), 0 0 30px rgba(0, 212, 255, 0.5)",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["hover", "group-hover"],
      textColor: ["hover", "group-hover"],
      boxShadow: ["hover", "focus"],
    },
  },
  plugins: [],
};
