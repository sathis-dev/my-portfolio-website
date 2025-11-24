/**
 * DarkVeil Design System v4.1 - Color System
 * Centralized color constants and utilities
 */

/**
 * Primary brand colors - Magenta/Purple/Violet spectrum
 */
export const colors = {
  // Primary Colors
  magenta: {
    DEFAULT: '#C71585',
    light: '#E91E8C',
    dark: '#A01268',
  },
  purple: {
    DEFAULT: '#8B5CF6',
    light: '#9D6EFF',
    dark: '#7C3AED',
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

  // Text colors
  text: {
    primary: '#FFFFFF',
    secondary: '#A1A1AA',
    tertiary: '#71717A',
    disabled: '#52525B',
  },

  // Background colors
  background: {
    base: '#0A0A0F',
    elevated: 'rgba(17, 17, 24, 0.8)',
    overlay: 'rgba(10, 10, 15, 0.95)',
  },
} as const

/**
 * Gradient definitions
 */
export const gradients = {
  // Primary gradient (buttons, CTAs)
  primary: 'linear-gradient(135deg, #C71585 0%, #8B5CF6 50%, #7C3AED 100%)',
  
  // Hover state gradient
  hover: 'linear-gradient(135deg, #E91E8C 0%, #9D6EFF 50%, #8B5CF6 100%)',
  
  // Text gradient (hero text only)
  text: 'linear-gradient(135deg, #E91E8C 0%, #C71585 30%, #8B5CF6 70%, #7C3AED 100%)',
  
  // Radial gradient (hero background)
  radial: 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.15) 0%, rgba(168, 85, 247, 0.08) 40%, rgba(10, 10, 15, 0.95) 100%)',
} as const

/**
 * Border colors with magenta tint
 */
export const borders = {
  subtle: 'rgba(199, 21, 133, 0.08)',
  light: 'rgba(199, 21, 133, 0.15)',
  medium: 'rgba(199, 21, 133, 0.25)',
  strong: 'rgba(199, 21, 133, 0.4)',
  
  // Card borders
  card: {
    default: 'rgba(255, 255, 255, 0.08)',
    hover: 'rgba(255, 255, 255, 0.12)',
  },
  
  // Input borders
  input: {
    default: 'rgba(255, 255, 255, 0.06)',
    hover: 'rgba(255, 255, 255, 0.1)',
    focus: 'rgba(139, 92, 246, 0.4)',
    error: '#EF4444',
  },
} as const

/**
 * Shadow colors (always with purple/magenta tint)
 */
export const shadows = {
  sm: '0 2px 8px rgba(74, 20, 140, 0.15)',
  md: '0 4px 16px rgba(74, 20, 140, 0.2)',
  lg: '0 8px 24px rgba(74, 20, 140, 0.25)',
  xl: '0 12px 32px rgba(74, 20, 140, 0.3)',
  
  // Brand-specific shadows
  magenta: '0 8px 24px rgba(199, 21, 133, 0.4)',
  magentaHover: '0 12px 32px rgba(199, 21, 133, 0.5)',
  glow: '0 0 40px rgba(139, 92, 246, 0.3)',
  
  // Inset shadow for depth
  inset: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
} as const

/**
 * Icon fill colors
 * IMPORTANT: Icons use SOLID colors only, NO gradients
 */
export const iconColors = {
  // Navigation icons
  navigation: {
    default: '#A1A1AA',
    hover: '#FFFFFF',
    active: '#C71585',
  },
  
  // Social media icons
  social: {
    default: '#A855F7',
    hover: '#C084FC',
  },
  
  // Status icons
  status: {
    success: '#10B981',
    error: '#EF4444',
    warning: '#F59E0B',
    info: '#3B82F6',
  },
} as const

/**
 * Backdrop blur configurations
 */
export const blurs = {
  glass: 'blur(12px)',
  header: 'blur(12px)',
  overlay: 'blur(8px)',
} as const

/**
 * Color utility functions
 */
export const colorUtils = {
  /**
   * Convert hex to rgba
   */
  hexToRgba: (hex: string, alpha: number): string => {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  },

  /**
   * Get magenta-tinted border color
   */
  getMagentaBorder: (opacity: number): string => {
    return `rgba(199, 21, 133, ${opacity})`
  },

  /**
   * Get purple-tinted shadow
   */
  getPurpleShadow: (blur: number, opacity: number): string => {
    return `0 ${blur / 2}px ${blur}px rgba(74, 20, 140, ${opacity})`
  },
}

/**
 * CRITICAL RULES - What NOT to do with colors
 */
export const COLOR_RULES = {
  DO_NOT: [
    'Apply gradients to icons - icons use solid fills only',
    'Use blue gradients - stick to magenta/purple/violet',
    'Use green except for availability badge',
    'Use pure white borders - always add magenta tint',
    'Apply background colors to icon containers',
    'Use black shadows - always tint with purple/magenta',
    'Put gradients on regular text - only hero text',
    'Use orange/yellow - not in color palette',
  ],
  
  ALWAYS: [
    'Use solid fills for icons',
    'Tint borders with magenta',
    'Tint shadows with purple/magenta',
    'Use gradient only for buttons and hero text',
    'Stick to magenta/purple/violet spectrum',
  ],
} as const

/**
 * Semantic color mappings for specific use cases
 */
export const semanticColors = {
  // Button states
  button: {
    primary: {
      default: gradients.primary,
      hover: gradients.hover,
    },
    secondary: {
      default: colors.burgundy.light,
      hover: colors.burgundy.medium,
    },
  },
  
  // Card backgrounds
  card: {
    default: colors.background.elevated,
    hover: colors.background.elevated,
  },
  
  // Form elements
  form: {
    background: colors.background.elevated,
    placeholder: colors.text.tertiary,
    label: colors.text.primary,
  },
  
  // Header
  header: {
    default: colors.burgundy.light,
    scrolled: colors.burgundy.medium,
  },
} as const

/**
 * Export all color-related utilities
 */
export default {
  colors,
  gradients,
  borders,
  shadows,
  iconColors,
  blurs,
  colorUtils,
  semanticColors,
  COLOR_RULES,
}
