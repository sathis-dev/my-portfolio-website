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
        // DarkVeil-matched colors
        magenta: {
          DEFAULT: '#C71585',
          light: '#E91E8C',
          dark: '#8B008B',
          50: '#FFE5F4',
          100: '#FFB3E0',
          200: '#FF80CC',
          300: '#FF4DB8',
          400: '#E91E8C',
          500: '#C71585',
          600: '#A01170',
          700: '#8B008B',
          800: '#6A0066',
          900: '#4A148C',
        },
        purple: {
          DEFAULT: '#8B5CF6',
          light: '#9D6EFF',
          dark: '#7C3AED',
          50: '#F3E5F5',
          100: '#E1BEE7',
          200: '#CE93D8',
          300: '#BA68C8',
          400: '#9D6EFF',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
        },
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
        dark: {
          bg: {
            primary: '#0A0A0F',
            secondary: '#13131A',
            tertiary: '#1A1A24',
            accent: '#1F1F2E',
          },
          text: {
            primary: '#FFFFFF',
            secondary: '#B4B4C8',
            tertiary: '#7E7E9A',
            accent: '#8B5CF6',
          },
          border: {
            subtle: 'rgba(139, 92, 246, 0.1)',
            medium: 'rgba(139, 92, 246, 0.2)',
            strong: 'rgba(139, 92, 246, 0.4)',
          }
        },
        semantic: {
          success: '#10b981',
          warning: '#f59e0b',
          error: '#ef4444',
          info: '#3b82f6',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'Courier New', 'monospace'],
      },
      fontSize: {
        'display-2xl': ['5.5rem', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h1': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h2': ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h3': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.005em', fontWeight: '600' }],
        'h4': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h5': ['1.25rem', { lineHeight: '1.5', fontWeight: '600' }],
        'h6': ['1.125rem', { lineHeight: '1.5', fontWeight: '600' }],
        'body-xl': ['1.25rem', { lineHeight: '1.7', fontWeight: '400' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.7', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-xs': ['0.75rem', { lineHeight: '1.6', fontWeight: '400' }],
        'label-lg': ['0.875rem', { lineHeight: '1.5', fontWeight: '500', letterSpacing: '0.01em' }],
        'label': ['0.8125rem', { lineHeight: '1.5', fontWeight: '500', letterSpacing: '0.01em' }],
        'label-sm': ['0.75rem', { lineHeight: '1.5', fontWeight: '500', letterSpacing: '0.02em' }],
      },
      spacing: {
        'section-mobile': '4rem',
        'section-tablet': '6rem',
        'section-desktop': '8rem',
      },
      borderRadius: {
        'card': '16px',
        'button': '12px',
        'input': '10px',
        'modal': '20px',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(74, 20, 140, 0.2)',
        'card-hover': '0 12px 48px rgba(74, 20, 140, 0.25)',
        'accent': '0 8px 32px rgba(74, 20, 140, 0.25)',
        'accent-hover': '0 16px 48px rgba(74, 20, 140, 0.3)',
        'glow': '0 0 64px rgba(199, 21, 133, 0.4)',
        'magenta': '0 8px 24px rgba(199, 21, 133, 0.4)',
        'magenta-hover': '0 12px 32px rgba(199, 21, 133, 0.5)',
        'purple': '0 8px 24px rgba(139, 92, 246, 0.4)',
        'purple-hover': '0 12px 32px rgba(139, 92, 246, 0.5)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #C71585 0%, #8B5CF6 50%, #7C3AED 100%)',
        'gradient-primary-hover': 'linear-gradient(135deg, #E91E8C 0%, #9D6EFF 50%, #8B5CF6 100%)',
        'gradient-text': 'linear-gradient(135deg, #E91E8C 0%, #C71585 30%, #8B5CF6 70%, #7C3AED 100%)',
        'gradient-glow': 'radial-gradient(circle, rgba(199, 21, 133, 0.3) 0%, transparent 70%)',
        'gradient-hero': 'linear-gradient(180deg, rgba(199, 21, 133, 0.1) 0%, transparent 100%)',
      },
      backdropBlur: {
        glass: '20px',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config

