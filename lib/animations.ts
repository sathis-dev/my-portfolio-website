/**
 * DarkVeil Design System v4.1 - Animation System
 * GPU-accelerated, performance-optimized animations
 */

/**
 * Animation durations
 */
export const duration = {
  fast: '150ms',
  normal: '300ms',
  slow: '500ms',
  slower: '800ms',
} as const

/**
 * Easing functions
 */
export const easing = {
  // Standard easings
  linear: 'linear',
  ease: 'ease',
  easeIn: 'ease-in',
  easeOut: 'ease-out',
  easeInOut: 'ease-in-out',
  
  // Custom cubic-bezier
  fast: 'cubic-bezier(0.4, 0, 0.2, 1)',
  smooth: 'cubic-bezier(0.4, 0, 0.6, 1)',
  spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
} as const

/**
 * Framer Motion variants for consistent animations
 */
export const motionVariants = {
  // Fade in from bottom
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
  
  // Fade in
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 },
  },
  
  // Scale in
  scaleIn: {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.9, opacity: 0 },
    transition: { duration: 0.3 },
  },
  
  // Slide in from right
  slideInRight: {
    initial: { x: 20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 20, opacity: 0 },
    transition: { duration: 0.4 },
  },
  
  // Slide in from left
  slideInLeft: {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -20, opacity: 0 },
    transition: { duration: 0.4 },
  },
  
  // Stagger children
  stagger: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
} as const

/**
 * CSS keyframe animations
 */
export const keyframes = {
  fadeIn: `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `,
  
  slideUp: `
    @keyframes slideUp {
      from { 
        opacity: 0;
        transform: translateY(20px);
      }
      to { 
        opacity: 1;
        transform: translateY(0);
      }
    }
  `,
  
  glowPulse: `
    @keyframes glowPulse {
      0%, 100% { opacity: 0.5; }
      50% { opacity: 1; }
    }
  `,
  
  shimmer: `
    @keyframes shimmer {
      from { transform: translateX(-100%); }
      to { transform: translateX(100%); }
    }
  `,
  
  rotate: `
    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `,
  
  bounce: `
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
  `,
} as const

/**
 * CSS animation classes
 */
export const animationClasses = {
  fadeIn: 'animate-fade-in',
  slideUp: 'animate-slide-up',
  glowPulse: 'animate-glow-pulse',
  shimmer: 'animate-shimmer',
} as const

/**
 * Hover animations (GPU-accelerated)
 */
export const hoverAnimations = {
  // Lift effect
  lift: {
    default: 'transition-transform duration-150 ease-out',
    hover: 'hover:-translate-y-0.5',
    active: 'active:translate-y-0',
  },
  
  // Scale effect
  scale: {
    default: 'transition-transform duration-150 ease-out',
    hover: 'hover:scale-105',
    active: 'active:scale-100',
  },
  
  // Glow effect
  glow: {
    default: 'transition-shadow duration-300 ease-out',
    hover: 'hover:shadow-glow',
  },
  
  // Combined lift + glow
  liftGlow: {
    default: 'transition-all duration-300 ease-out',
    hover: 'hover:-translate-y-0.5 hover:shadow-glow',
    active: 'active:translate-y-0',
  },
} as const

/**
 * Scroll animations configuration
 */
export const scrollAnimations = {
  // Parallax effect
  parallax: {
    speed: 0.5,
    maxOffset: 100,
  },
  
  // Fade in on scroll
  fadeIn: {
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.1,
    animation: 'fadeIn 0.6s ease forwards',
  },
  
  // Slide up on scroll
  slideUp: {
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.1,
    animation: 'slideUp 0.5s ease forwards',
  },
} as const

/**
 * Cursor trail animation
 */
export const cursorTrail = {
  enabled: 'desktop-only' as const,
  particles: 10,
  fadeTime: 400,
  color: 'rgba(199, 21, 133, 0.4)',
  size: '8px',
} as const

/**
 * Loading animations
 */
export const loadingAnimations = {
  spinner: {
    animation: 'rotate 1s linear infinite',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'rgba(199, 21, 133, 0.3)',
    borderTopColor: '#C71585',
  },
  
  dots: {
    animation: 'bounce 1.4s ease-in-out infinite',
  },
  
  shimmer: {
    animation: 'shimmer 2s infinite',
    background: 'linear-gradient(90deg, transparent, rgba(199, 21, 133, 0.1), transparent)',
  },
} as const

/**
 * Page transition animations
 */
export const pageTransitions = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 },
  },
  
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.4 },
  },
  
  scale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
    transition: { duration: 0.3 },
  },
} as const

/**
 * Modal/Dialog animations
 */
export const modalAnimations = {
  backdrop: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.2 },
  },
  
  content: {
    initial: { opacity: 0, scale: 0.9, y: 20 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.9, y: 20 },
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
  },
} as const

/**
 * Performance-safe animation properties
 */
export const safeAnimationProperties = [
  'transform',
  'opacity',
  'filter',
] as const

/**
 * Properties to avoid animating (cause reflow)
 */
export const avoidAnimatingProperties = [
  'width',
  'height',
  'margin',
  'padding',
  'top',
  'left',
  'right',
  'bottom',
  'border-width',
] as const

/**
 * Reduced motion preferences
 */
export const reducedMotion = {
  mediaQuery: '(prefers-reduced-motion: reduce)',
  
  // Fallback animations for reduced motion
  fallback: {
    transition: 'none',
    animation: 'none',
  },
  
  // Safe animations even with reduced motion
  safe: {
    opacity: 'transition: opacity 0.2s ease',
  },
} as const

/**
 * Animation helper utilities
 */
export const animationUtils = {
  /**
   * Check if user prefers reduced motion
   */
  prefersReducedMotion: (): boolean => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  },
  
  /**
   * Get animation duration based on reduced motion preference
   */
  getDuration: (normalDuration: string): string => {
    return animationUtils.prefersReducedMotion() ? '0ms' : normalDuration
  },
  
  /**
   * Stagger delay calculator
   */
  getStaggerDelay: (index: number, baseDelay: number = 100): number => {
    return index * baseDelay
  },
} as const

/**
 * WebGL/Canvas animation config
 */
export const canvasAnimations = {
  particles: {
    count: 50,
    color: 'rgba(199, 21, 133, 0.4)',
    size: { min: 1, max: 3 },
    speed: 0.5,
    opacity: { min: 0.3, max: 0.7 },
  },
  
  performance: {
    maxFPS: 60,
    throttle: true,
    pauseOnHidden: true,
  },
} as const

/**
 * Scroll indicator animation
 */
export const scrollIndicator = {
  border: '2px solid rgba(199, 21, 133, 0.3)',
  dot: {
    background: 'rgba(199, 21, 133, 0.6)',
    animation: 'bounce 2s ease-in-out infinite',
  },
} as const

/**
 * Export all animation utilities
 */
export default {
  duration,
  easing,
  motionVariants,
  keyframes,
  animationClasses,
  hoverAnimations,
  scrollAnimations,
  cursorTrail,
  loadingAnimations,
  pageTransitions,
  modalAnimations,
  safeAnimationProperties,
  avoidAnimatingProperties,
  reducedMotion,
  animationUtils,
  canvasAnimations,
  scrollIndicator,
}
