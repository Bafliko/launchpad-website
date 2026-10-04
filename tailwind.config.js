/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0f',
        card: '#111118',
        sidebar: '#0e0e1a',
        accent: '#00d4ff',
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-accent': '0 0 20px rgba(0, 212, 255, 0.15)',
        'glow-lg': '0 20px 40px rgba(0, 212, 255, 0.1)',
      },
    },
  },
  plugins: [],
}
