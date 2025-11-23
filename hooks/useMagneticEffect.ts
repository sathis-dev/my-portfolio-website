import { useEffect, RefObject } from 'react'

interface MagneticOptions {
  strength?: number
  maxDistance?: number
}

export function useMagneticEffect(
  ref: RefObject<HTMLElement>,
  options: MagneticOptions = {}
) {
  const { strength = 0.3, maxDistance = 150 } = options

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Check if it's a mobile device
    const isMobile =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.innerWidth < 768

    if (isMobile) return

    let rafId: number | null = null
    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0

    const onMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const deltaX = e.clientX - centerX
      const deltaY = e.clientY - centerY
      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2)

      // Only apply magnetic effect within threshold
      if (distance < maxDistance) {
        const pullStrength = 1 - distance / maxDistance
        targetX = deltaX * strength * pullStrength
        targetY = deltaY * strength * pullStrength
      } else {
        targetX = 0
        targetY = 0
      }
    }

    const onMouseLeave = () => {
      targetX = 0
      targetY = 0
    }

    const animate = () => {
      // Ultra-smooth interpolation (gaming-level)
      currentX += (targetX - currentX) * 0.12
      currentY += (targetY - currentY) * 0.12

      // GPU-accelerated transform (zero jitter)
      element.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`
      element.style.willChange = 'transform'

      rafId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMouseMove)
    element.addEventListener('mouseleave', onMouseLeave)
    rafId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      element.removeEventListener('mouseleave', onMouseLeave)
      if (rafId) cancelAnimationFrame(rafId)
      element.style.transform = 'translate3d(0, 0, 0)'
      element.style.willChange = 'auto'
    }
  }, [ref, strength, maxDistance])
}

