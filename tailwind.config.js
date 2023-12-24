/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#f7efd7',
        'cream': '#FBF8EF',
      },
      colors: {
        'soft-grey': '#706F6B',
      },
      fontFamily: {
        'tiempos-headline': ['Tiempos Headline', 'serif'],
        'sf-mono': ['SF Mono', 'Menlo', 'monospace'],
        'epilogue': ['Epilogue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

