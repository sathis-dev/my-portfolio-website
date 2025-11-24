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
        // DarkVeil Design System v4.1 - Primary Colors
        magenta: {
          DEFAULT: '#C71585',
          light: '#E91E8C',
          dark: '#A01268',
          50: '#FFE5F4',
          100: '#FFB3E0',
          200: '#FF80CC',
          300: '#FF4DB8',
          400: '#E91E8C',
          500: '#C71585',
          600: '#A01268',
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
        violet: {
          DEFAULT: '#7C3AED',
          dark: '#4A148C',
        },
        // Burgundy overlay system
        burgundy: {
          light: 'rgba(39, 10, 33, 0.3)',
          medium: 'rgba(39, 10, 33, 0.5)',
          heavy: 'rgba(39, 10, 33, 0.7)',
        },
        // Semantic colors
        success: {
          DEFAULT: '#10B981',
          light: 'rgba(16, 185, 129, 0.1)',
          border: 'rgba(16, 185, 129, 0.3)',
        },
        // Background system
        background: {
          base: '#0A0A0F',
          elevated: 'rgba(17, 17, 24, 0.8)',
          overlay: 'rgba(10, 10, 15, 0.95)',
        },
        // Text colors
        text: {
          primary: '#FFFFFF',
          secondary: '#A1A1AA',
          tertiary: '#71717A',
          disabled: '#52525B',
        },
        // Legacy support
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
        // Responsive hero typography with clamp
        'hero': 'clamp(2.5rem, 5vw, 5rem)',
        'h1': 'clamp(2.25rem, 4vw, 4rem)',
        'h2': 'clamp(2rem, 3.5vw, 3rem)',
        'h3': 'clamp(1.5rem, 2.5vw, 2.25rem)',
        'body': 'clamp(0.9375rem, 1vw, 1rem)',
        'body-lg': 'clamp(1rem, 1.125vw, 1.125rem)',
        // Legacy support
        'display-2xl': ['5.5rem', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h4': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h5': ['1.25rem', { lineHeight: '1.5', fontWeight: '600' }],
        'h6': ['1.125rem', { lineHeight: '1.5', fontWeight: '600' }],
        'body-xl': ['1.25rem', { lineHeight: '1.7', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-xs': ['0.75rem', { lineHeight: '1.6', fontWeight: '400' }],
        'label-lg': ['0.875rem', { lineHeight: '1.5', fontWeight: '500', letterSpacing: '0.01em' }],
        'label': ['0.8125rem', { lineHeight: '1.5', fontWeight: '500', letterSpacing: '0.01em' }],
        'label-sm': ['0.75rem', { lineHeight: '1.5', fontWeight: '500', letterSpacing: '0.02em' }],
      },
      spacing: {
        'section-mobile': '4rem',
        'section-tablet': '5rem',
        'section-desktop': '8rem',
      },
      borderRadius: {
        'card': '1rem',
        'button': '0.75rem',
        'input': '0.625rem',
        'modal': '1.25rem',
      },
      boxShadow: {
        // Design system shadows
        'sm': '0 2px 8px rgba(74, 20, 140, 0.15)',
        'md': '0 4px 16px rgba(74, 20, 140, 0.2)',
        'lg': '0 8px 24px rgba(74, 20, 140, 0.25)',
        'xl': '0 12px 32px rgba(74, 20, 140, 0.3)',
        'magenta': '0 8px 24px rgba(199, 21, 133, 0.4)',
        'magenta-hover': '0 12px 32px rgba(199, 21, 133, 0.5)',
        'glow': '0 0 40px rgba(139, 92, 246, 0.3)',
        // Legacy support
        'card': '0 4px 24px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 8px 32px rgba(0, 0, 0, 0.5)',
        'purple': '0 8px 24px rgba(139, 92, 246, 0.4)',
        'purple-hover': '0 12px 32px rgba(139, 92, 246, 0.5)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #C71585 0%, #8B5CF6 50%, #7C3AED 100%)',
        'gradient-hover': 'linear-gradient(135deg, #E91E8C 0%, #9D6EFF 50%, #8B5CF6 100%)',
        'gradient-text': 'linear-gradient(135deg, #E91E8C 0%, #C71585 30%, #8B5CF6 70%, #7C3AED 100%)',
        'gradient-radial': 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.15) 0%, rgba(168, 85, 247, 0.08) 40%, rgba(10, 10, 15, 0.95) 100%)',
        'gradient-glow': 'radial-gradient(circle, rgba(199, 21, 133, 0.3) 0%, transparent 70%)',
        'gradient-hero': 'linear-gradient(180deg, rgba(199, 21, 133, 0.1) 0%, transparent 100%)',
      },
      backdropBlur: {
        'glass': '12px',
        'header': '12px',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease forwards',
        'slide-up': 'slide-up 0.5s ease forwards',
        'glow-pulse': 'glow-pulse 2s ease infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      // Performance optimizations
      willChange: {
        'transform': 'transform',
        'opacity': 'opacity',
      },
      // Responsive breakpoints (explicit for reference)
      screens: {
        'xs': '0px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
        '4xl': '2560px',
      },
    },
  },
  plugins: [],
}

export default config

