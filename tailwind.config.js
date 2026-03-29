/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        surface: {
          primary: '#0d1117',
          secondary: '#161b22',
          tertiary: '#21262d',
        },
        accent: {
          DEFAULT: '#F5A623',
          dim: '#c47d0a',
        },
        ink: {
          primary: '#e6edf3',
          secondary: '#8b949e',
          muted: '#484f58',
        },
        edge: '#30363d',
      },
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
