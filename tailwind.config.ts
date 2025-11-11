import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf8ff',
          100: '#f5f3ff',
          200: '#ede9fe',
          300: '#e0d7ff',
          400: '#c4b5fd',
          500: '#a78bfa',
          600: '#8b5cf6',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b2a4a',
        },
        accent: {
          purple: '#8b5cf6',
          lavender: '#a78bfa',
          lightPurple: '#c4b5fd',
          pink: '#ec4899',
        },
        neutral: {
          dark: '#1f2937',
          charcoal: '#374151',
          gray: '#6b7280',
          lightGray: '#e5e7eb',
          offWhite: '#f9fafb',
        },
        dark: {
          bg: '#2d2640',
          navy: '#1e1b29',
        }
      },
      fontFamily: {
        onest: ['var(--font-onest)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        inter: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        satoshi: ['var(--font-satoshi)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['60px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['48px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h2': ['36px', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'h3': ['28px', { lineHeight: '1.4' }],
        'h4': ['24px', { lineHeight: '1.4' }],
        'body': ['16px', { lineHeight: '1.6' }],
        'small': ['14px', { lineHeight: '1.5' }],
        'xs': ['12px', { lineHeight: '1.4' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        'pill': '999px',
        'card': '16px',
        'button': '12px',
      },
      boxShadow: {
        'glow': '0 4px 12px 12px rgba(180, 156, 197, 0.278)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
