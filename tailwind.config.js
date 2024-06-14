/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': 'var(--primary-blue)',
        'primary-purple': 'var(--primary-purple)',
        'light-background-primary': 'var(--light-background-primary)',
        'dark-background-primary': 'var(--dark-background-primary)',
        'light-background-secondary': 'var(--light-background-secondary)',
        'dark-background-secondary': 'var(--dark-background-secondary)',
        'light-background-tertiary': 'var(--light-background-tertiary)',
        'dark-background-tertiary': 'var(--dark-background-tertiary)',
      }
    },
  },
  plugins: [],
}