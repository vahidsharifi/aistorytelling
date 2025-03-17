/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#4A3728',
            h1: {
              color: '#4A3728',
              fontWeight: '600',
              fontSize: '1.25rem',
            },
            h2: {
              color: '#4A3728',
              fontWeight: '600',
              fontSize: '1.15rem',
            },
            h3: {
              color: '#4A3728',
              fontWeight: '600',
              fontSize: '1.05rem',
            },
            p: {
              fontSize: '0.875rem',
            },
            strong: {
              color: '#4A3728',
              fontWeight: '600',
            },
            em: {
              color: '#4A3728',
            },
            blockquote: {
              color: '#4A3728',
              borderLeftColor: '#E2B69D',
              fontSize: '0.875rem',
            },
            code: {
              color: '#4A3728',
            },
            'ol > li::marker': {
              color: '#4A3728',
            },
            'ul > li::marker': {
              color: '#4A3728',
            },
            li: {
              fontSize: '0.875rem',
            },
          },
        },
        xs: {
          css: {
            fontSize: '0.75rem',
            h1: {
              fontSize: '1.1rem',
            },
            h2: {
              fontSize: '1rem',
            },
            h3: {
              fontSize: '0.95rem',
            },
            p: {
              fontSize: '0.75rem',
            },
            li: {
              fontSize: '0.75rem',
            },
            blockquote: {
              fontSize: '0.75rem',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};