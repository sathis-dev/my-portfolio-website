/**
 * DarkVeil Design System v4.1 - Performance Optimization Utilities
 * GPU-accelerated, 60+ FPS optimized configurations
 */

export const performanceConfig = {
  // GPU acceleration classes
  gpuAcceleration: {
    transform: 'translateZ(0)',
    willChange: 'transform',
    backfaceVisibility: 'hidden' as const,
    perspective: 1000,
  },

  // Optimized animation configuration
  animations: {
    duration: '300ms',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    useTransform: true,
    avoidRepaint: true,
  },

  // Intersection Observer for lazy loading
  lazyLoad: {
    rootMargin: '50px',
    threshold: 0.1,
  },
} as const

// CSS containment for performance
export const containerStyles = {
  contain: 'layout style paint' as const,
  contentVisibility: 'auto' as const,
}

/**
 * GPU-accelerated transform utilities
 * Use these instead of margin/padding for animations
 */
export const gpuTransforms = {
  // Hover lift effect (use transform instead of margin-top)
  lift: 'transform: translateY(-2px); transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);',
  
  // Scale effect
  scale: 'transform: scale(1.05); transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);',
  
  // Enable GPU acceleration
  enable: 'transform: translateZ(0); will-change: transform;',
} as const

/**
 * Performance-optimized class names for Tailwind
 */
export const performanceClasses = {
  // GPU acceleration
  gpu: 'transform-gpu will-change-transform',
  
  // Container optimization
  contain: 'contain-layout contain-style contain-paint',
  
  // Touch optimization
  touch: 'touch-manipulation select-none',
  
  // Smooth transitions (GPU-friendly properties only)
  transition: 'transition-transform transition-opacity duration-300 ease-out',
  
  // Hover effects (optimized)
  hoverLift: 'hover:-translate-y-0.5 active:translate-y-0',
  hoverScale: 'hover:scale-105 active:scale-100',
  
  // Performance bundle
  optimized: 'transform-gpu will-change-transform touch-manipulation select-none',
} as const

/**
 * Intersection Observer hook configuration
 */
export const observerConfig = {
  // Lazy load images
  image: {
    rootMargin: '50px 0px',
    threshold: 0.01,
  },
  
  // Animate on scroll
  animation: {
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.1,
  },
  
  // Load components
  component: {
    rootMargin: '200px 0px',
    threshold: 0,
  },
} as const

/**
 * Debounce and throttle utilities for performance
 */
export const timing = {
  debounce: {
    resize: 150,
    input: 300,
    scroll: 100,
  },
  throttle: {
    scroll: 100,
    mousemove: 16, // ~60fps
    resize: 150,
  },
} as const

/**
 * Image optimization configuration
 */
export const imageConfig = {
  formats: {
    primary: 'webp',
    fallback: 'jpeg',
  },
  quality: {
    high: 90,
    medium: 75,
    low: 60,
  },
  sizes: {
    mobile: '(max-width: 640px) 100vw',
    tablet: '(max-width: 1024px) 50vw',
    desktop: '33vw',
    full: '100vw',
  },
  loading: {
    priority: 'eager' as const,
    lazy: 'lazy' as const,
  },
} as const

/**
 * Animation performance utilities
 */
export const animationPerformance = {
  // Properties that are safe to animate (GPU-accelerated)
  safeProperties: ['transform', 'opacity', 'filter'],
  
  // Properties to avoid animating (cause reflow/repaint)
  avoidProperties: ['width', 'height', 'margin', 'padding', 'top', 'left', 'right', 'bottom'],
  
  // Recommended easing functions
  easings: {
    fast: 'cubic-bezier(0.4, 0, 0.2, 1)',
    smooth: 'cubic-bezier(0.4, 0, 0.6, 1)',
    spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
} as const

/**
 * FPS Monitoring utility for development
 * Use in development to ensure 60+ FPS
 */
export const createFPSMonitor = () => {
  if (typeof window === 'undefined' || process.env.NODE_ENV !== 'development') {
    return () => {}
  }

  let lastTime = performance.now()
  let frame = 0
  let fps = 0

  const checkFPS = () => {
    frame++
    const currentTime = performance.now()

    if (currentTime >= lastTime + 1000) {
      fps = Math.round((frame * 1000) / (currentTime - lastTime))
      
      // Log warning if FPS drops below 60
      if (fps < 60) {
        console.warn(`⚠️ Low FPS detected: ${fps}`)
      } else {
        console.log(`✅ FPS: ${fps}`)
      }
      
      frame = 0
      lastTime = currentTime
    }

    requestAnimationFrame(checkFPS)
  }

  checkFPS()
  
  return () => {
    frame = 0
  }
}

/**
 * Check if device prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Performance-optimized styles object
 */
export const performanceStyles = {
  // Base performance styles
  base: {
    transform: 'translateZ(0)',
    willChange: 'auto',
    backfaceVisibility: 'hidden' as const,
  },
  
  // For animated elements
  animated: {
    transform: 'translateZ(0)',
    willChange: 'transform, opacity',
    backfaceVisibility: 'hidden' as const,
  },
  
  // For scrollable containers
  scrollable: {
    overflowY: 'auto' as const,
    WebkitOverflowScrolling: 'touch',
    willChange: 'scroll-position',
  },
} as const

/**
 * Lighthouse performance targets
 */
export const performanceTargets = {
  LCP: 2.5, // Largest Contentful Paint (seconds) - Aim for < 1.5s
  FID: 100, // First Input Delay (ms) - Aim for < 50ms
  CLS: 0.1, // Cumulative Layout Shift - Aim for < 0.05
  SpeedIndex: 3.0, // Speed Index (seconds)
  TTI: 3.5, // Time to Interactive (seconds)
  FPS: 60, // Target frames per second
} as const

/**
 * Device detection utilities
 */
export const deviceUtils = {
  isMobile: (): boolean => {
    if (typeof window === 'undefined') return false
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  },
  
  isTouch: (): boolean => {
    if (typeof window === 'undefined') return false
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0
  },
  
  isLowEndDevice: (): boolean => {
    if (typeof window === 'undefined') return false
    // @ts-ignore - navigator.hardwareConcurrency may not be available
    const cores = navigator.hardwareConcurrency || 4
    // @ts-ignore - navigator.deviceMemory may not be available
    const memory = navigator.deviceMemory || 4
    return cores <= 2 || memory <= 2
  },
} as const
