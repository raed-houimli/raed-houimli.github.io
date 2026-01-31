/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#fafbfc',
          dark: '#08090f',
        },
        surface: {
          light: '#ffffff',
          dark: '#0f1623',
        },
        border: {
          light: '#e2e8f0',
          dark: '#1e293b',
        },
        text: {
          'primary-light': '#0f172a',
          'primary-dark': '#f1f5f9',
          'secondary-light': '#475569',
          'secondary-dark': '#cbd5e1',
          'muted-light': '#64748b',
          'muted-dark': '#94a3b8',
        },
        accent: {
          primary: '#0ea5e9',
          secondary: '#8b5cf6',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
