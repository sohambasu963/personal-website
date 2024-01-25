/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#f7efd7',
        'cream': '#FBF8EF',
        'orange': '#ab530a',
      },
      colors: {
        'soft-grey': '#706F6B',
        'orange': '#ab530a'
      },
      fontFamily: {
        'tiempos-headline': ['Tiempos Headline', 'serif'],
        'sf-mono': ['SF Mono', 'Menlo', 'monospace'],
        'epilogue': ['Epilogue', 'sans-serif'],
        'bricolage-grotesque': ['Bricolage Grotesque', 'sans-serif'],
      },
      inset: {
        '44.5': '44.5%',
        '48': '48%',
      },
      letterSpacing: {
        'tighter': '-0.04em',
      },
    },
  },
  plugins: [],
}

