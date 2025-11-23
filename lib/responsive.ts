/**
 * Responsive Utilities
 * Centralized responsive classes and helpers
 */

export const responsiveClasses = {
  // Container
  container: 'px-6 sm:px-8 lg:px-12 xl:px-0',
  containerNarrow: 'px-4 sm:px-6 lg:px-8',
  containerWide: 'px-4 sm:px-6 lg:px-8 xl:px-12',

  // Section Spacing
  sectionPadding: 'py-16 sm:py-20 md:py-24 lg:py-32',
  sectionPaddingSmall: 'py-12 sm:py-16 md:py-20 lg:py-24',
  sectionPaddingTiny: 'py-8 sm:py-12 md:py-16 lg:py-20',

  // Grid Layouts
  gridSingle: 'grid grid-cols-1',
  gridDouble: 'grid grid-cols-1 md:grid-cols-2',
  gridTriple: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  gridQuad: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  gridAuto: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',

  // Typography
  h1: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl',
  h2: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl',
  h3: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl',
  h4: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl',
  h5: 'text-lg sm:text-xl md:text-2xl lg:text-3xl',
  h6: 'text-base sm:text-lg md:text-xl lg:text-2xl',
  body: 'text-sm sm:text-base md:text-lg',
  bodyLarge: 'text-base sm:text-lg md:text-xl',
  bodySmall: 'text-xs sm:text-sm md:text-base',
  tiny: 'text-xs sm:text-sm',

  // Buttons
  buttonPadding: 'px-6 py-3 sm:px-8 sm:py-4',
  buttonPaddingSmall: 'px-4 py-2 sm:px-6 sm:py-3',
  buttonPaddingLarge: 'px-8 py-4 sm:px-10 sm:py-5',
  buttonText: 'text-sm sm:text-base',
  buttonTextSmall: 'text-xs sm:text-sm',
  buttonWidth: 'w-full sm:w-auto',

  // Cards
  cardPadding: 'p-4 sm:p-6 md:p-8 lg:p-10',
  cardPaddingSmall: 'p-3 sm:p-4 md:p-6',
  cardPaddingLarge: 'p-6 sm:p-8 md:p-10 lg:p-12',
  cardBorderRadius: 'rounded-xl sm:rounded-2xl lg:rounded-3xl',
  cardBorderRadiusSmall: 'rounded-lg sm:rounded-xl md:rounded-2xl',

  // Gaps
  gapTiny: 'gap-2 sm:gap-3',
  gapSmall: 'gap-3 sm:gap-4 md:gap-5',
  gapMedium: 'gap-4 sm:gap-6 md:gap-8',
  gapLarge: 'gap-6 sm:gap-8 md:gap-10 lg:gap-12',
  gapXLarge: 'gap-8 sm:gap-10 md:gap-12 lg:gap-16',

  // Flex
  flexCol: 'flex flex-col',
  flexRow: 'flex flex-col sm:flex-row',
  flexRowReverse: 'flex flex-col-reverse sm:flex-row',
  flexCenter: 'flex items-center justify-center',
  flexBetween: 'flex items-center justify-between',

  // Visibility
  hideMobile: 'hidden sm:block',
  hideTablet: 'block sm:hidden lg:block',
  hideDesktop: 'block lg:hidden',
  showMobile: 'block sm:hidden',
  showTablet: 'hidden sm:block lg:hidden',
  showDesktop: 'hidden lg:block',

  // Max Widths
  maxWidthSm: 'max-w-screen-sm mx-auto',
  maxWidthMd: 'max-w-screen-md mx-auto',
  maxWidthLg: 'max-w-screen-lg mx-auto',
  maxWidthXl: 'max-w-screen-xl mx-auto',
  maxWidth2Xl: 'max-w-screen-2xl mx-auto',
  maxWidthFull: 'max-w-full',

  // Aspect Ratios
  aspectSquare: 'aspect-square',
  aspectVideo: 'aspect-video',
  aspectWide: 'aspect-[16/9]',
  aspectPortrait: 'aspect-[4/5]',
}

/**
 * Device Detection Utilities
 */
export const isMobile = (): boolean => {
  if (typeof window === 'undefined') return false
  return window.innerWidth < 640
}

export const isTablet = (): boolean => {
  if (typeof window === 'undefined') return false
  return window.innerWidth >= 640 && window.innerWidth < 1024
}

export const isDesktop = (): boolean => {
  if (typeof window === 'undefined') return false
  return window.innerWidth >= 1024
}

export const isTouchDevice = (): boolean => {
  if (typeof window === 'undefined') return false
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0
}

/**
 * Breakpoint Values
 */
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

/**
 * Get current breakpoint
 */
export const getCurrentBreakpoint = (): keyof typeof breakpoints | 'xs' => {
  if (typeof window === 'undefined') return 'lg'
  
  const width = window.innerWidth
  
  if (width < breakpoints.sm) return 'xs'
  if (width < breakpoints.md) return 'sm'
  if (width < breakpoints.lg) return 'md'
  if (width < breakpoints.xl) return 'lg'
  if (width < breakpoints['2xl']) return 'xl'
  return '2xl'
}

/**
 * Responsive class helper
 * @param base Base classes
 * @param mobile Mobile-specific classes
 * @param tablet Tablet-specific classes (optional)
 * @param desktop Desktop-specific classes (optional)
 */
export const responsiveClass = (
  base: string,
  mobile?: string,
  tablet?: string,
  desktop?: string
): string => {
  const classes = [base]
  
  if (mobile) classes.push(mobile)
  if (tablet) classes.push(`sm:${tablet}`)
  if (desktop) classes.push(`lg:${desktop}`)
  
  return classes.filter(Boolean).join(' ')
}

/**
 * Combine responsive classes
 */
export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ')
}

