'use client'

import React, { useRef, useState, HTMLAttributes } from 'react'
import { motion } from 'framer-motion'

interface Tilt3DCardProps {
  children: React.ReactNode
  className?: string
  maxTilt?: number
  perspective?: number
}

export function Tilt3DCard({
  children,
  className = '',
  maxTilt = 15,
  perspective = 1000,
}: Tilt3DCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Calculate tilt
    const tiltX = ((y - centerY) / centerY) * -maxTilt
    const tiltY = ((x - centerX) / centerX) * maxTilt

    setTilt({ x: tiltX, y: tiltY })

    // Calculate glow position (percentage)
    const glowX = (x / rect.width) * 100
    const glowY = (y / rect.height) * 100
    setGlowPosition({ x: glowX, y: glowY })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={cardRef}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: `${perspective}px`,
      }}
    >
      {/* Glow effect that follows cursor */}
      <div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(
            600px circle at ${glowPosition.x}% ${glowPosition.y}%,
            rgba(139, 92, 246, 0.15),
            transparent 40%
          )`,
        }}
      />
      
      {/* Card content with slight z-translation for depth */}
      <div
        className="relative"
        style={{
          transform: 'translateZ(20px)',
        }}
      >
        {children}
      </div>
    </motion.div>
  )
}

