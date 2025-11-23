'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface CursorState {
  type: 'default' | 'link' | 'button' | 'card' | 'dragging' | 'typing' | 'loading'
  text?: string
}

export default function SmoothCursor() {
  const [cursorState, setCursorState] = useState<CursorState>({ type: 'default' })
  const [isVisible, setIsVisible] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  // Motion values for smooth following
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  // Spring animations for smooth following - inner dot (faster)
  const innerSpringConfig = { damping: 25, stiffness: 200, mass: 0.5 }
  const innerX = useSpring(cursorX, innerSpringConfig)
  const innerY = useSpring(cursorY, innerSpringConfig)

  // Slower spring for outer ring (more delay)
  const outerSpringConfig = { damping: 30, stiffness: 150, mass: 0.8 }
  const outerX = useSpring(cursorX, outerSpringConfig)
  const outerY = useSpring(cursorY, outerSpringConfig)

  // Trail positions
  const [trailPositions, setTrailPositions] = useState<Array<{ x: number; y: number }>>([])
  const trailRef = useRef<Array<{ x: number; y: number }>>([])

  // Detect touch device
  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    setIsTouchDevice(isTouch)

    if (isTouch) {
      document.body.style.cursor = 'auto'
    }
  }, [])

  // Calculate magnetic pull
  const calculateMagneticPull = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement
    const magneticElement = target.closest('[data-cursor-magnetic]') as HTMLElement

    if (!magneticElement) return { x: e.clientX, y: e.clientY }

    const rect = magneticElement.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const distance = Math.sqrt(
      Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
    )

    const magneticRadius = 100

    if (distance < magneticRadius) {
      const strength = 0.3
      const pullX = centerX + (e.clientX - centerX) * (1 - strength)
      const pullY = centerY + (e.clientY - centerY) * (1 - strength)

      return { x: pullX, y: pullY }
    }

    return { x: e.clientX, y: e.clientY }
  }, [])

  // Update cursor position
  const updateCursorPosition = useCallback(
    (e: MouseEvent) => {
      const { x, y } = calculateMagneticPull(e)
      cursorX.set(x)
      cursorY.set(y)

      // Update trail (only if not reduced motion)
      if (!prefersReducedMotion) {
        const newPosition = { x: e.clientX, y: e.clientY }
        trailRef.current = [newPosition, ...trailRef.current.slice(0, 4)]
        setTrailPositions(trailRef.current)
      }
    },
    [cursorX, cursorY, calculateMagneticPull, prefersReducedMotion]
  )

  // Extract text from element
  const extractElementText = useCallback((element: HTMLElement): string | undefined => {
    // First check for data-cursor-text attribute
    const cursorText = element.getAttribute('data-cursor-text')
    if (cursorText) return cursorText

    // For buttons, get the text content (clean)
    if (element.tagName === 'BUTTON') {
      const text = element.textContent?.trim()
      return text && text.length <= 30 ? text : undefined
    }

    // For links, try to get meaningful text
    if (element.tagName === 'A') {
      const text = element.textContent?.trim()
      // Only show text for navigation links, not long content
      return text && text.length <= 20 ? text : 'View'
    }

    // Check parent elements for text
    const closestButton = element.closest('button')
    if (closestButton) {
      const text = closestButton.textContent?.trim()
      return text && text.length <= 30 ? text : undefined
    }

    const closestLink = element.closest('a')
    if (closestLink) {
      const text = closestLink.textContent?.trim()
      return text && text.length <= 20 ? text : 'View'
    }

    return undefined
  }, [])

  // Handle element hover
  const handleElementHover = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement

    // Check for data attributes
    const cursorType = target.getAttribute('data-cursor')
    const cursorText = target.getAttribute('data-cursor-text')

    if (cursorType) {
      const text = cursorText || extractElementText(target)
      setCursorState({ type: cursorType as any, text })
      return
    }

    // Auto-detect element types with text extraction
    if (target.tagName === 'A' || target.closest('a')) {
      const linkElement = target.tagName === 'A' ? target : (target.closest('a') as HTMLElement)
      const text = extractElementText(linkElement)
      setCursorState({ type: 'link', text })
    } else if (target.tagName === 'BUTTON' || target.closest('button')) {
      const buttonElement = target.tagName === 'BUTTON' ? target : (target.closest('button') as HTMLElement)
      const text = extractElementText(buttonElement)
      setCursorState({ type: 'button', text })
    } else if (target.closest('[data-cursor="link"]')) {
      const element = target.closest('[data-cursor="link"]') as HTMLElement
      const text = extractElementText(element)
      setCursorState({ type: 'link', text })
    } else if (target.closest('[data-cursor="card"]')) {
      const element = target.closest('[data-cursor="card"]') as HTMLElement
      const text = extractElementText(element)
      setCursorState({ type: 'card', text })
    } else {
      setCursorState({ type: 'default' })
    }
  }, [extractElementText])

  // Mouse event handlers
  useEffect(() => {
    if (isTouchDevice) return

    const handleMouseMove = (e: MouseEvent) => {
      updateCursorPosition(e)
      handleElementHover(e)
      setIsVisible(true)
    }

    const handleMouseDown = () => {
      setCursorState((prev) => ({ ...prev, type: 'dragging' }))
    }

    const handleMouseUp = () => {
      setCursorState((prev) => ({ ...prev, type: 'default' }))
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isTouchDevice, updateCursorPosition, handleElementHover])

  // Hide default cursor
  useEffect(() => {
    if (isTouchDevice) return

    document.body.style.cursor = 'none'

    const style = document.createElement('style')
    style.innerHTML = `
      * {
        cursor: none !important;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.body.style.cursor = 'auto'
      if (document.head.contains(style)) {
        document.head.removeChild(style)
      }
    }
  }, [isTouchDevice])

  // Get cursor dimensions based on state - OPTIMIZED SIZES (not blocking UI)
  const getCursorSize = () => {
    switch (cursorState.type) {
      case 'link':
        // Smaller, doesn't block nav items
        return { 
          outer: 50, 
          inner: 4 
        }
      case 'button':
        // Larger but not blocking - shows text below button
        return { 
          outer: 70, 
          inner: 0 
        }
      case 'card':
        return { outer: 70, inner: 6 }
      case 'dragging':
        return { outer: 60, inner: 12 }
      case 'typing':
        return { outer: 30, inner: 2 }
      case 'loading':
        return { outer: 50, inner: 8 }
      default:
        return { outer: 40, inner: 8 }
    }
  }

  const { outer, inner } = getCursorSize()

  // Get cursor colors based on state - OPTIMIZED (less blocking)
  const getCursorColors = () => {
    switch (cursorState.type) {
      case 'button':
        return {
          border: 'rgba(199, 21, 133, 0.9)', // Magenta
          background: 'transparent', // No background - see button through cursor
          glow: '0 0 20px rgba(199, 21, 133, 0.4)',
          textColor: '#FFFFFF',
        }
      case 'link':
        return {
          border: 'rgba(139, 92, 246, 0.8)', // Purple
          background: 'transparent', // No background - see link through cursor
          glow: '0 0 15px rgba(139, 92, 246, 0.3)',
          textColor: '#FFFFFF',
        }
      default:
        return {
          border: 'rgba(255, 255, 255, 0.4)',
          background: 'transparent',
          glow: '0 0 10px rgba(255, 255, 255, 0.2)',
          textColor: '#FFFFFF',
        }
    }
  }

  const cursorColors = getCursorColors()

  // Don't render on touch devices or if not visible
  if (isTouchDevice || !isVisible) return null

  return (
    <>
      {/* Trail Effect */}
      {!prefersReducedMotion &&
        trailPositions.map((pos, index) => (
          <motion.div
            key={`trail-${index}`}
            className="fixed pointer-events-none z-[9998]"
            style={{
              left: pos.x,
              top: pos.y,
              x: '-50%',
              y: '-50%',
              willChange: 'transform',
            }}
          >
            <div
              className="rounded-full"
              style={{
                width: `${6 - index}px`,
                height: `${6 - index}px`,
                background: `rgba(139, 92, 246, ${0.7 - index * 0.15})`,
                mixBlendMode: 'difference',
              }}
            />
          </motion.div>
        ))}

      {/* Outer Ring - OPTIMIZED (not blocking UI) */}
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full"
        style={{
          left: outerX,
          top: outerY,
          x: '-50%',
          y: '-50%',
          willChange: 'transform',
        }}
        animate={{
          width: outer,
          height: outer,
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 25,
          mass: 0.5,
          duration: prefersReducedMotion ? 0 : undefined,
        }}
      >
        <div
          className="w-full h-full rounded-full transition-all duration-300 flex items-center justify-center relative"
          style={{
            border: `2px solid ${cursorColors.border}`,
            background: cursorColors.background,
            boxShadow: cursorColors.glow,
          }}
        >
          {/* Text Label - POSITIONED BELOW CURSOR */}
          {cursorState.text && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="absolute whitespace-nowrap px-3 py-1 rounded-full"
              style={{
                top: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                marginTop: '8px',
                color: cursorColors.textColor,
                fontWeight: 600,
                fontSize: '0.75rem',
                letterSpacing: '0.05em',
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)',
                textTransform: 'uppercase',
                background: 'rgba(0, 0, 0, 0.75)',
                border: `1px solid ${cursorColors.border}`,
              }}
            >
              {cursorState.text}
            </motion.div>
          )}

          {/* Pulsing ring effect for buttons */}
          {cursorState.type === 'button' && (
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                border: `1px solid ${cursorColors.border}`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.6, 0, 0.6],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          )}
        </div>
      </motion.div>

      {/* Inner Dot */}
      {inner > 0 && (
        <motion.div
          className="fixed pointer-events-none z-[10000] rounded-full"
          style={{
            left: innerX,
            top: innerY,
            x: '-50%',
            y: '-50%',
            willChange: 'transform',
            mixBlendMode: 'difference',
          }}
          animate={{
            width: inner,
            height: inner,
            background:
              cursorState.type === 'link' ||
              cursorState.type === 'button' ||
              cursorState.type === 'dragging'
                ? '#8B5CF6'
                : '#FFFFFF',
          }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 28,
            duration: prefersReducedMotion ? 0 : undefined,
          }}
        />
      )}
    </>
  )
}

