/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
        },
        dark: {
          DEFAULT: '#0A0A0A',
          card: '#111111',
          border: '#1F1F1F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Sora', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #F97316, #EA580C)',
        'hero-glow': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(249,115,22,0.25), transparent)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(249,115,22,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(249,115,22,0.6)' },
        },
      },
    },
  },
  plugins: [],
}
