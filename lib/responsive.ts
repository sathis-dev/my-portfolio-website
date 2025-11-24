/**
 * DarkVeil Design System v4.1 - Responsive System
 * Mobile-first responsive utilities with complete device coverage
 */

/**
 * Breakpoint system (matches Tailwind)
 */
export const breakpoints = {
  xs: '0px',      // Mobile small
  sm: '640px',    // Mobile large
  md: '768px',    // Tablet
  lg: '1024px',   // Desktop
  xl: '1280px',   // Desktop large
  '2xl': '1536px', // Wide screen
  '3xl': '1920px', // Full HD
  '4xl': '2560px', // 2K/4K
} as const

/**
 * Numeric breakpoint values for JavaScript calculations
 */
export const breakpointValues = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
  '3xl': 1920,
  '4xl': 2560,
} as const

/**
 * Container max-widths for each breakpoint
 */
export const containerWidths = {
  xs: '100%',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const

/**
 * Responsive typography with clamp for fluid scaling
 */
export const typography = {
  hero: 'clamp(2.5rem, 5vw, 5rem)',
  h1: 'clamp(2.25rem, 4vw, 4rem)',
  h2: 'clamp(2rem, 3.5vw, 3rem)',
  h3: 'clamp(1.5rem, 2.5vw, 2.25rem)',
  body: 'clamp(0.9375rem, 1vw, 1rem)',
  bodyLarge: 'clamp(1rem, 1.125vw, 1.125rem)',
} as const

/**
 * Responsive padding system
 */
export const padding = {
  mobile: {
    container: '1.5rem',
    section: '4rem 0',
    card: '1.5rem',
    button: '0.875rem 1.5rem',
  },
  tablet: {
    container: '2rem',
    section: '5rem 0',
    card: '1.75rem',
    button: '1rem 1.75rem',
  },
  desktop: {
    container: '3rem',
    section: '8rem 0',
    card: '2rem',
    button: '1rem 2rem',
  },
} as const

/**
 * Responsive grid configurations
 */
export const grid = {
  mobile: {
    columns: 1,
    gap: '1.5rem',
  },
  tablet: {
    columns: 2,
    gap: '2rem',
  },
  desktop: {
    columns: 3,
    gap: '2.5rem',
  },
  wide: {
    columns: 4,
    gap: '3rem',
  },
} as const

/**
 * Touch target sizes (accessibility)
 */
export const touchTargets = {
  minimum: '44px', // iOS minimum
  recommended: '48px', // Better for touch
  comfortable: '52px', // Very comfortable
} as const

/**
 * Responsive utility classes
 */
export const responsiveClasses = {
  // Container with responsive padding
  container: 'px-6 md:px-8 lg:px-12 max-w-7xl mx-auto',
  
  // Responsive section spacing
  section: 'py-16 md:py-20 lg:py-32',
  
  // Responsive grid
  grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10',
  
  // Responsive flex
  flex: 'flex flex-col md:flex-row gap-4 md:gap-6',
  
  // Hide/show at breakpoints
  hide: {
    mobile: 'hidden md:block',
    tablet: 'hidden lg:block',
    desktop: 'block lg:hidden',
  },
  
  show: {
    mobile: 'block md:hidden',
    tablet: 'block lg:hidden',
    desktop: 'hidden lg:block',
  },
} as const

/**
 * Media query helpers for styled-components or CSS-in-JS
 */
export const mediaQueries = {
  xs: `@media (min-width: ${breakpoints.xs})`,
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  xl: `@media (min-width: ${breakpoints.xl})`,
  '2xl': `@media (min-width: ${breakpoints['2xl']})`,
  '3xl': `@media (min-width: ${breakpoints['3xl']})`,
  '4xl': `@media (min-width: ${breakpoints['4xl']})`,
  
  // Max-width queries
  maxSm: `@media (max-width: ${breakpointValues.sm - 1}px)`,
  maxMd: `@media (max-width: ${breakpointValues.md - 1}px)`,
  maxLg: `@media (max-width: ${breakpointValues.lg - 1}px)`,
  
  // Orientation queries
  portrait: '@media (orientation: portrait)',
  landscape: '@media (orientation: landscape)',
  
  // Touch detection
  touch: '@media (hover: none)',
  hover: '@media (hover: hover)',
} as const

/**
 * Device-specific utilities
 */
export const deviceConfig = {
  // Common device widths
  devices: {
    iPhoneSE: 375,
    iPhone12: 390,
    iPhone14Plus: 428,
    iPadMini: 768,
    iPadPro: 1024,
    desktop: 1920,
    desktop4K: 3840,
  },
  
  // Orientation handling
  orientation: {
    portrait: 'orientation: portrait',
    landscape: 'orientation: landscape',
  },
} as const

/**
 * Responsive font size generator
 * Creates fluid typography that scales smoothly
 */
export const fluidFontSize = (
  minSize: number,
  maxSize: number,
  minViewport: number = 375,
  maxViewport: number = 1920
): string => {
  const slope = (maxSize - minSize) / (maxViewport - minViewport)
  const yIntercept = minSize - slope * minViewport
  
  return `clamp(${minSize}rem, ${yIntercept}rem + ${slope * 100}vw, ${maxSize}rem)`
}

/**
 * Responsive spacing generator
 */
export const fluidSpacing = (
  minSize: number,
  maxSize: number,
  minViewport: number = 375,
  maxViewport: number = 1920
): string => {
  return `clamp(${minSize}px, ${minSize}px + (${maxSize} - ${minSize}) * ((100vw - ${minViewport}px) / (${maxViewport} - ${minViewport})), ${maxSize}px)`
}

/**
 * Check current breakpoint (client-side only)
 */
export const getCurrentBreakpoint = (): keyof typeof breakpointValues => {
  if (typeof window === 'undefined') return 'xs'
  
  const width = window.innerWidth
  
  if (width >= breakpointValues['4xl']) return '4xl'
  if (width >= breakpointValues['3xl']) return '3xl'
  if (width >= breakpointValues['2xl']) return '2xl'
  if (width >= breakpointValues.xl) return 'xl'
  if (width >= breakpointValues.lg) return 'lg'
  if (width >= breakpointValues.md) return 'md'
  if (width >= breakpointValues.sm) return 'sm'
  return 'xs'
}

/**
 * Check if viewport is at least a certain breakpoint
 */
export const isBreakpoint = (breakpoint: keyof typeof breakpointValues): boolean => {
  if (typeof window === 'undefined') return false
  return window.innerWidth >= breakpointValues[breakpoint]
}

/**
 * Container queries (future-proof responsive)
 */
export const containerQueries = {
  wrapper: 'container-type: inline-size',
  small: '@container (min-width: 400px)',
  medium: '@container (min-width: 768px)',
  large: '@container (min-width: 1024px)',
} as const

/**
 * Responsive image sizes
 */
export const imageSizes = {
  mobile: '(max-width: 640px) 100vw',
  tablet: '(max-width: 1024px) 50vw',
  desktop: '33vw',
  hero: '100vw',
  full: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
} as const

/**
 * Responsive navigation heights
 */
export const navigationHeight = {
  mobile: '64px',
  desktop: '72px',
} as const

/**
 * Testing breakpoints - devices to test on
 */
export const testingDevices = [
  { name: 'iPhone SE', width: 375, height: 667 },
  { name: 'iPhone 12/13/14', width: 390, height: 844 },
  { name: 'iPhone 14 Plus', width: 428, height: 926 },
  { name: 'iPad Mini', width: 768, height: 1024 },
  { name: 'iPad Pro', width: 1024, height: 1366 },
  { name: 'Desktop HD', width: 1920, height: 1080 },
  { name: 'Desktop 4K', width: 3840, height: 2160 },
] as const

/**
 * Export all responsive utilities
 */
export default {
  breakpoints,
  breakpointValues,
  containerWidths,
  typography,
  padding,
  grid,
  touchTargets,
  responsiveClasses,
  mediaQueries,
  deviceConfig,
  fluidFontSize,
  fluidSpacing,
  getCurrentBreakpoint,
  isBreakpoint,
  containerQueries,
  imageSizes,
  navigationHeight,
  testingDevices,
}
