// lib/colors.ts - Color Palette Extracted from DarkVeil

export const colors = {
  // Primary colors from DarkVeil
  magenta: {
    50: '#FFE5F4',
    100: '#FFB3E0',
    200: '#FF80CC',
    300: '#FF4DB8',
    400: '#E91E8C',
    500: '#C71585',  // Main magenta
    600: '#A01170',
    700: '#8B008B',
    800: '#6A0066',
    900: '#4A148C',
  },
  
  purple: {
    50: '#F3E5F5',
    100: '#E1BEE7',
    200: '#CE93D8',
    300: '#BA68C8',
    400: '#9D6EFF',
    500: '#8B5CF6',  // Main purple
    600: '#7C3AED',
    700: '#6D28D9',
    800: '#5B21B6',
    900: '#4C1D95',
  },
  
  // Complementary colors
  green: {
    500: '#10B981',  // Availability badge
  },
  
  // Background bases
  base: {
    dark: 'rgba(39, 10, 33, 0.3)',     // Dark burgundy
    darker: 'rgba(39, 10, 33, 0.5)',
    darkest: 'rgba(39, 10, 33, 0.7)',
  },
  
  // Tinted borders
  borders: {
    subtle: 'rgba(199, 21, 133, 0.15)',
    default: 'rgba(199, 21, 133, 0.25)',
    strong: 'rgba(199, 21, 133, 0.35)',
  },
  
  // Tinted backgrounds
  backgrounds: {
    subtle: 'rgba(199, 21, 133, 0.08)',
    default: 'rgba(199, 21, 133, 0.12)',
    medium: 'rgba(199, 21, 133, 0.15)',
    strong: 'rgba(199, 21, 133, 0.2)',
  },
  
  // Text with opacity
  text: {
    primary: 'rgba(255, 255, 255, 1)',
    secondary: 'rgba(255, 255, 255, 0.9)',
    tertiary: 'rgba(255, 255, 255, 0.7)',
    muted: 'rgba(255, 255, 255, 0.65)',
    disabled: 'rgba(255, 255, 255, 0.5)',
  },
  
  // Gradients
  gradients: {
    primary: 'linear-gradient(135deg, #C71585 0%, #8B5CF6 50%, #7C3AED 100%)',
    primaryHover: 'linear-gradient(135deg, #E91E8C 0%, #9D6EFF 50%, #8B5CF6 100%)',
    text: 'linear-gradient(135deg, #E91E8C 0%, #C71585 30%, #8B5CF6 70%, #7C3AED 100%)',
    stats: 'linear-gradient(135deg, #FFFFFF 0%, rgba(255, 255, 255, 0.75) 100%)',
  },
  
  // Shadows with color tint
  shadows: {
    sm: '0 2px 8px rgba(74, 20, 140, 0.15)',
    md: '0 4px 16px rgba(74, 20, 140, 0.2)',
    lg: '0 8px 24px rgba(74, 20, 140, 0.25)',
    xl: '0 12px 32px rgba(74, 20, 140, 0.3)',
    magenta: '0 8px 24px rgba(199, 21, 133, 0.4)',
    magentaHover: '0 12px 32px rgba(199, 21, 133, 0.5)',
    purple: '0 8px 24px rgba(139, 92, 246, 0.4)',
    purpleHover: '0 12px 32px rgba(139, 92, 246, 0.5)',
  },
}

