/**
 * Performance Optimizations for Smooth 60+ FPS
 * ============================================
 * 
 * This file contains optimized animation configurations and performance utilities
 * for ensuring silky-smooth performance across the entire website.
 */

// GPU-Accelerated Animation Variants
export const optimizedVariants = {
  // Fade animations - GPU accelerated
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
  },

  // Slide up - uses transform only
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
  },

  // Scale - GPU accelerated
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
  },

  // Hover lift - GPU accelerated
  hoverLift: {
    whileHover: { y: -4, transition: { duration: 0.2 } },
    whileTap: { scale: 0.98 }
  }
}

// Optimized transition configurations
export const transitions = {
  smooth: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
  spring: { type: 'spring', stiffness: 300, damping: 30 },
  fast: { duration: 0.15, ease: [0.4, 0, 0.2, 1] },
}

// GPU Acceleration utilities
export const gpuAcceleration = {
  transform: 'translateZ(0)',
  willChange: 'transform',
  backfaceVisibility: 'hidden' as const,
}

// Optimized image loading
export const imageOptimization = {
  loading: 'lazy' as const,
  decoding: 'async' as const,
}

// Reduce motion for accessibility
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Throttle scroll events for better performance
export const throttle = (func: Function, limit: number) => {
  let inThrottle: boolean
  return function(this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

// Debounce resize events
export const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout
  return function(this: any, ...args: any[]) {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), wait)
  }
}




