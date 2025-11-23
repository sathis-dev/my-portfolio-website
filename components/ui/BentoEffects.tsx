'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface BentoEffectsProps {
  children: React.ReactNode
  spotlightRadius?: number
  enableStars?: boolean
  enableSpotlight?: boolean
  enableClickEffect?: boolean
  className?: string
}

export default function BentoEffects({
  children,
  spotlightRadius = 400,
  enableStars = false,
  enableSpotlight = true,
  enableClickEffect = true,
  className = ''
}: BentoEffectsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [clicks, setClicks] = useState<Array<{ id: number; x: number; y: number }>>([])
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

  // Generate stars effect (only when hovering)
  useEffect(() => {
    if (!enableStars || !isHovering) return

    const starCount = 20
    const generatedStars = Array.from({ length: starCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2
    }))
    setStars(generatedStars)
  }, [enableStars, isHovering])

  // Track mouse position for spotlight
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  // Handle click effect
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableClickEffect || !containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const newClick = {
      id: Date.now(),
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    }

    setClicks(prev => [...prev, newClick])

    // Remove click effect after animation
    setTimeout(() => {
      setClicks(prev => prev.filter(click => click.id !== newClick.id))
    }, 1000)
  }

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={handleClick}
    >
      {/* Spotlight Effect */}
      {enableSpotlight && isHovering && (
        <div
          className="absolute pointer-events-none z-[1]"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            width: `${spotlightRadius * 2}px`,
            height: `${spotlightRadius * 2}px`,
            transform: 'translate(-50%, -50%)',
            background: `radial-gradient(circle, rgba(199, 21, 133, 0.15) 0%, rgba(199, 21, 133, 0.05) 40%, transparent 70%)`,
            transition: 'left 0.15s ease-out, top 0.15s ease-out',
            filter: 'blur(20px)',
            mixBlendMode: 'screen'
          }}
        />
      )}

      {/* Stars Effect */}
      {enableStars && stars.map(star => (
        <motion.div
          key={star.id}
          className="absolute pointer-events-none z-[2]"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: '2px',
            height: '2px',
            borderRadius: '50%',
            background: '#E91E8C',
            boxShadow: '0 0 6px rgba(199, 21, 133, 0.8)'
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: star.delay,
            ease: 'easeInOut'
          }}
        />
      ))}

      {/* Click Effect (Ripples) */}
      {enableClickEffect && clicks.map(click => (
        <motion.div
          key={click.id}
          className="absolute pointer-events-none z-[3] rounded-full border-2"
          style={{
            left: click.x,
            top: click.y,
            borderColor: 'rgba(199, 21, 133, 0.6)',
            transform: 'translate(-50%, -50%)'
          }}
          initial={{ width: 0, height: 0, opacity: 1 }}
          animate={{
            width: 200,
            height: 200,
            opacity: 0
          }}
          transition={{
            duration: 1,
            ease: 'easeOut'
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-[5]">
        {children}
      </div>
    </div>
  )
}

