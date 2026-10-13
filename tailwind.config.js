/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        night: '#07070a',
        deep: '#040405',
        line: 'rgba(255,255,255,0.09)',
        fg: '#f3f3f5',
        dim: '#a8a8ae',
        zyra: {
          DEFAULT: '#FF6B00',
          hover: '#ff8125',
        },
      },
      fontFamily: {
        display: ['Gloock', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['"Schibsted Grotesk"', '"Segoe UI"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
}
