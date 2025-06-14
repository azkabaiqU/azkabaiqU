// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        pulseScaleFade: {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: '1'
          },
          '50%': {
            transform: 'scale(1.1)',
            opacity: '0.5'
          },
        },
      },
      animation: {
        pulseLoopFade: 'pulseScaleFade 1s ease-in-out infinite',
      },
    }

  },
  plugins: [],
}