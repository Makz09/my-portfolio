/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        surface: '#111113', 
        border: '#27272a',
        primary: '#e50914', // A vibrant red representing the "System Online" accent
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        vibrate: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-1px, 1px)' },
          '40%': { transform: 'translate(-1px, -1px)' },
          '60%': { transform: 'translate(1px, 1px)' },
          '80%': { transform: 'translate(1px, -1px)' },
          '100%': { transform: 'translate(0)' },
        },
        wobble: {
          '0%': { transform: 'translateX(0%) rotate(0deg) scale(1.02)' },
          '15%': { transform: 'translateX(-4px) rotate(-3deg) scale(1.03)' },
          '30%': { transform: 'translateX(4px) rotate(3deg) scale(1.03)' },
          '45%': { transform: 'translateX(-4px) rotate(-2deg) scale(1.03)' },
          '60%': { transform: 'translateX(2px) rotate(1deg) scale(1.03)' },
          '75%': { transform: 'translateX(-2px) rotate(-0.5deg) scale(1.03)' },
          '100%': { transform: 'translateX(0%) rotate(0deg) scale(1.03)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(60px)', opacity: '0' },
          '25%': { transform: 'translateX(0)', opacity: '1' },
          '75%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(-60px)', opacity: '0' },
        }
      },
      animation: {
        vibrate: 'vibrate 0.2s linear infinite',
        wobble: 'wobble 0.75s ease-in-out infinite',
        'slide-in-right': 'slideInRight 4s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}
