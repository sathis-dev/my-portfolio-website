// Utility for optimal image loading based on viewport
export function getOptimalImageSizes(aspectRatio: number = 16 / 9) {
  return {
    // Mobile
    mobile: {
      width: 768,
      height: Math.round(768 / aspectRatio),
    },
    // Tablet
    tablet: {
      width: 1024,
      height: Math.round(1024 / aspectRatio),
    },
    // Desktop
    desktop: {
      width: 1920,
      height: Math.round(1920 / aspectRatio),
    },
  }
}

// Sizes string for next/image based on usage
export const imageSizes = {
  // Full width on mobile, half on desktop
  hero: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  
  // Full width across all breakpoints
  fullWidth: '100vw',
  
  // Project card thumbnails
  projectCard: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  
  // Skill icons
  icon: '(max-width: 768px) 32px, 48px',
  
  // Avatar/profile
  avatar: '(max-width: 768px) 96px, 128px',
}

// Image quality settings based on importance
export const imageQuality = {
  hero: 90, // High quality for hero images
  thumbnail: 85, // Good quality for thumbnails
  icon: 80, // Standard for icons
  background: 75, // Lower for backgrounds
}

// Lazy loading configuration
export function shouldLazyLoad(priority: boolean = false): boolean {
  return !priority
}

// Blur placeholder generation (for build time)
export function getBlurDataURL(width: number = 10, height: number = 10): string {
  // Simple SVG blur placeholder
  const svg = `
    <svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#1a1a2e" offset="0%" />
          <stop stop-color="#16213e" offset="100%" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#g)" />
    </svg>
  `
  const base64 = Buffer.from(svg).toString('base64')
  return `data:image/svg+xml;base64,${base64}`
}


