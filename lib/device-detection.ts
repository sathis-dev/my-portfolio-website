export interface DeviceCapabilities {
  isTouch: boolean
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  hasWebGL: boolean
  hasWebGL2: boolean
  deviceMemory: number
  hardwareConcurrency: number
  connectionSpeed: string
  prefersReducedMotion: boolean
  prefersDarkMode: boolean
}

export type ExperienceTier = 'minimal' | 'enhanced' | 'premium'

export function detectDeviceCapabilities(): DeviceCapabilities {
  if (typeof window === 'undefined') {
    return {
      isTouch: false,
      isMobile: false,
      isTablet: false,
      isDesktop: true,
      hasWebGL: false,
      hasWebGL2: false,
      deviceMemory: 4,
      hardwareConcurrency: 4,
      connectionSpeed: '4g',
      prefersReducedMotion: false,
      prefersDarkMode: false,
    }
  }

  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
  const width = window.innerWidth
  const isMobile = width < 768 || isTouch
  const isTablet = width >= 768 && width < 1024 && isTouch
  const isDesktop = width >= 1024 && !isTouch

  return {
    isTouch,
    isMobile,
    isTablet,
    isDesktop,
    hasWebGL: checkWebGL(),
    hasWebGL2: checkWebGL2(),
    deviceMemory: (navigator as any).deviceMemory || 4,
    hardwareConcurrency: navigator.hardwareConcurrency || 4,
    connectionSpeed: getConnectionSpeed(),
    prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    prefersDarkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
  }
}

function checkWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas')
    return !!(
      canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    )
  } catch {
    return false
  }
}

function checkWebGL2(): boolean {
  try {
    const canvas = document.createElement('canvas')
    return !!canvas.getContext('webgl2')
  } catch {
    return false
  }
}

function getConnectionSpeed(): string {
  const connection = (navigator as any).connection
  if (!connection) return '4g'
  return connection.effectiveType || '4g'
}

export function determineExperienceTier(
  capabilities: DeviceCapabilities
): ExperienceTier {
  // Premium: High-end desktop with good connection
  if (
    capabilities.isDesktop &&
    !capabilities.prefersReducedMotion &&
    capabilities.deviceMemory >= 4 &&
    capabilities.hardwareConcurrency >= 4 &&
    capabilities.hasWebGL2 &&
    (capabilities.connectionSpeed === '4g' || capabilities.connectionSpeed === '5g')
  ) {
    return 'premium'
  }

  // Enhanced: Good device but not premium
  if (
    (capabilities.isDesktop || capabilities.isTablet) &&
    !capabilities.prefersReducedMotion &&
    capabilities.deviceMemory >= 2 &&
    capabilities.hardwareConcurrency >= 2
  ) {
    return 'enhanced'
  }

  // Minimal: Mobile, slow connection, or reduced motion
  return 'minimal'
}

export function shouldEnableFeature(
  feature: string,
  tier: ExperienceTier
): boolean {
  const featureTiers: Record<string, ExperienceTier[]> = {
    // Always enabled
    basicAnimations: ['minimal', 'enhanced', 'premium'],
    responsiveImages: ['minimal', 'enhanced', 'premium'],
    
    // Enhanced and up
    parallax: ['enhanced', 'premium'],
    cardTilts: ['enhanced', 'premium'],
    magneticCursor: ['enhanced', 'premium'],
    commandPalette: ['enhanced', 'premium'],
    smoothScroll: ['enhanced', 'premium'],
    
    // Premium only
    webgl3D: ['premium'],
    webglShaders: ['premium'],
    particleSystems: ['premium'],
    advancedEffects: ['premium'],
  }

  return featureTiers[feature]?.includes(tier) ?? false
}


