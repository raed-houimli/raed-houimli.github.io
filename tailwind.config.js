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
          light: '#f7f8fa',
          dark: '#08090f',
        },
        surface: {
          light: '#ffffff',
          dark: '#0f1623',
        },
        border: {
          light: '#d7ddea',
          dark: '#1e293b',
        },
        text: {
          'primary-light': '#1f2937',
          'primary-dark': '#f1f5f9',
          'secondary-light': '#36465f',
          'secondary-dark': '#cbd5e1',
          'muted-light': '#5a6780',
          'muted-dark': '#94a3b8',
        },
        accent: {
          primary: '#244a86',
          secondary: '#2e5b9f',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
