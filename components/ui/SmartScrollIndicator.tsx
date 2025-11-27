'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, Check } from 'lucide-react'

type ScrollPosition = 'top' | 'middle' | 'near-bottom' | 'bottom'

export default function SmartScrollIndicator() {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>('top')
  const [isScrolling, setIsScrolling] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showIndicator, setShowIndicator] = useState(true)
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down')
  const [lastScrollY, setLastScrollY] = useState(0)

  // Calculate scroll progress and position
  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const scrollPercentage = (scrollTop / docHeight) * 100

    // Update progress
    setScrollProgress(scrollPercentage)

    // Determine scroll direction
    if (scrollTop > lastScrollY) {
      setScrollDirection('down')
    } else if (scrollTop < lastScrollY) {
      setScrollDirection('up')
    }
    setLastScrollY(scrollTop)

    // Determine position
    if (scrollTop < 100) {
      setScrollPosition('top')
    } else if (scrollPercentage > 95) {
      setScrollPosition('bottom')
    } else if (scrollPercentage > 80) {
      setScrollPosition('near-bottom')
    } else {
      setScrollPosition('middle')
    }

    // Hide indicator while scrolling
    setIsScrolling(true)
    setShowIndicator(false)
  }, [lastScrollY])

  // Show indicator after scrolling stops
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout

    const handleScrollEnd = () => {
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false)
        // Only show indicator at top, near-bottom, or bottom
        if (scrollPosition !== 'middle') {
          setShowIndicator(true)
        }
      }, 1000) // Show after 1 second of no scrolling
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('scroll', handleScrollEnd, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('scroll', handleScrollEnd)
      clearTimeout(scrollTimeout)
    }
  }, [handleScroll, scrollPosition])

  // Auto-show after initial display
  useEffect(() => {
    if (scrollPosition === 'top') {
      const timer = setTimeout(() => {
        setShowIndicator(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [scrollPosition])

  const scrollToPosition = (position: 'top' | 'bottom') => {
    window.scrollTo({
      top: position === 'top' ? 0 : document.documentElement.scrollHeight,
      behavior: 'smooth'
    })
  }

  const getIndicatorContent = () => {
    switch (scrollPosition) {
      case 'top':
        return {
          text: 'SCROLL',
          subtext: 'Explore below',
          icon: <MouseScrollIcon />,
          action: () => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
        }
      case 'near-bottom':
      case 'bottom':
        return {
          text: scrollPosition === 'bottom' ? 'END' : 'SCROLL',
          subtext: 'Back to top',
          icon: <ChevronUp size={20} />,
          action: () => scrollToPosition('top')
        }
      default:
        return null
    }
  }

  const content = getIndicatorContent()

  return (
    <div className="hidden lg:block">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] z-[9999]"
        style={{ background: 'rgba(199, 21, 133, 0.1)' }}
      >
        <motion.div
          className="h-full"
          style={{
            width: `${scrollProgress}%`,
            background: 'linear-gradient(90deg, #C71585 0%, #8B5CF6 50%, #7C3AED 100%)',
            boxShadow: '0 0 10px rgba(199, 21, 133, 0.5)',
          }}
        />
      </motion.div>

      {/* Smart Scroll Indicator */}
      <AnimatePresence>
        {showIndicator && content && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[1000] cursor-pointer"
            onClick={content.action}
            data-cursor="button"
            data-cursor-text={content.subtext}
          >
            <div
              className="flex flex-col items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300 hover:scale-105"
              style={{
                background: 'rgba(10, 5, 15, 0.6)',
                backdropFilter: 'blur(16px) saturate(100%)',
                border: '1px solid rgba(199, 21, 133, 0.3)',
                boxShadow: `
                  0 8px 32px rgba(0, 0, 0, 0.4),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1),
                  0 0 0 1px rgba(199, 21, 133, 0.2)
                `,
              }}
            >
              {/* Text */}
              <div className="flex flex-col items-center gap-1">
                <span
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                >
                  {content.text}
                </span>
                {content.subtext && (
                  <span
                    className="text-[0.65rem] font-medium"
                    style={{ color: 'rgba(255, 255, 255, 0.5)' }}
                  >
                    {content.subtext}
                  </span>
                )}
              </div>

              {/* Icon with Animation */}
              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{ color: '#E91E8C' }}
              >
                {content.icon}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button (always visible when not at top) */}
      <AnimatePresence>
        {scrollPosition !== 'top' && !isScrolling && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={() => scrollToPosition('top')}
            data-cursor="button"
            data-cursor-text="Back to Top"
            className="fixed bottom-8 right-8 z-[1000] w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{
              background: 'linear-gradient(135deg, #C71585 0%, #8B5CF6 100%)',
              boxShadow: '0 4px 16px rgba(199, 21, 133, 0.4)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 6px 24px rgba(199, 21, 133, 0.6)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(199, 21, 133, 0.4)'
            }}
          >
            <ChevronUp size={24} color="#FFFFFF" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

// Mouse Scroll Icon Component
function MouseScrollIcon() {
  return (
    <div
      className="relative flex justify-center"
      style={{
        width: '24px',
        height: '36px',
        border: '2px solid rgba(199, 21, 133, 0.6)',
        borderRadius: '12px',
        padding: '6px 0 0 0',
      }}
    >
      <motion.div
        animate={{
          y: [0, 12, 0],
          opacity: [1, 0.5, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          width: '3px',
          height: '8px',
          background: '#E91E8C',
          borderRadius: '2px',
        }}
      />
    </div>
  )
}
