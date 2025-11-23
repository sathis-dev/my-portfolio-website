'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

interface PillNavEffectProps {
  activeIndex: number
  hoveredIndex: number | null
  itemsCount: number
  containerRef: React.RefObject<HTMLDivElement>
}

export function PillNavEffect({ activeIndex, hoveredIndex, itemsCount, containerRef }: PillNavEffectProps) {
  const [pillStyle, setPillStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  })

  useEffect(() => {
    if (!containerRef.current) return

    const updatePill = () => {
      const container = containerRef.current
      if (!container) return

      const links = container.querySelectorAll('[data-nav-item]')
      // Use hovered index if hovering, otherwise use active index
      const targetIndex = hoveredIndex !== null ? hoveredIndex : activeIndex
      const targetLink = links[targetIndex] as HTMLElement

      if (targetLink) {
        const containerRect = container.getBoundingClientRect()
        const linkRect = targetLink.getBoundingClientRect()

        setPillStyle({
          left: linkRect.left - containerRect.left,
          width: linkRect.width,
          opacity: 1,
        })
      }
    }

    updatePill()

    // Update on resize
    window.addEventListener('resize', updatePill)
    return () => window.removeEventListener('resize', updatePill)
  }, [activeIndex, hoveredIndex, containerRef, itemsCount])

  return (
    <motion.div
      className="absolute rounded-xl -z-10"
      style={{
        height: 'calc(100% - 8px)',
        top: '4px',
        background: 'rgba(199, 21, 133, 0.15)',
        border: '1px solid rgba(199, 21, 133, 0.3)',
        boxShadow: '0 4px 12px rgba(199, 21, 133, 0.2)',
      }}
      animate={{
        left: pillStyle.left,
        width: pillStyle.width,
        opacity: pillStyle.opacity,
      }}
      transition={{
        type: 'spring',
        stiffness: 380,
        damping: 30,
        mass: 0.8,
      }}
    />
  )
}

