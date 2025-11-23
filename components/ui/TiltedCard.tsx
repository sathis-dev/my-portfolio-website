'use client'

import { useRef, useState, MouseEvent } from 'react'

interface TiltedCardProps {
  children: React.ReactNode
  className?: string
  maxTilt?: number
  perspective?: number
  scale?: number
  transitionSpeed?: number
  glareEnable?: boolean
  glareMaxOpacity?: number
}

export default function TiltedCard({
  children,
  className = '',
  maxTilt = 15,
  perspective = 1000,
  scale = 1.02,
  transitionSpeed = 300,
  glareEnable = true,
  glareMaxOpacity = 0.4,
}: TiltedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [tiltStyle, setTiltStyle] = useState({})
  const [glareStyle, setGlareStyle] = useState({})

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()

    // Calculate mouse position relative to card center
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Calculate center point
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Calculate rotation angles
    const rotateX = ((y - centerY) / centerY) * maxTilt
    const rotateY = ((centerX - x) / centerX) * maxTilt

    // Apply tilt transform
    setTiltStyle({
      transform: `
        perspective(${perspective}px)
        rotateX(${-rotateX}deg)
        rotateY(${rotateY}deg)
        scale3d(${scale}, ${scale}, ${scale})
      `,
      transition: `transform ${transitionSpeed}ms ease-out`,
    })

    // Apply glare effect
    if (glareEnable) {
      const glareX = (x / rect.width) * 100
      const glareY = (y / rect.height) * 100
      
      setGlareStyle({
        background: `
          radial-gradient(
            circle at ${glareX}% ${glareY}%,
            rgba(255, 255, 255, ${glareMaxOpacity}) 0%,
            transparent 60%
          )
        `,
        opacity: 1,
      })
    }
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    
    // Reset tilt with smooth animation
    setTiltStyle({
      transform: `
        perspective(${perspective}px)
        rotateX(0deg)
        rotateY(0deg)
        scale3d(1, 1, 1)
      `,
      transition: 'transform 500ms cubic-bezier(0.4, 0, 0.2, 1)',
    })

    // Fade out glare
    setGlareStyle({
      ...glareStyle,
      opacity: 0,
      transition: 'opacity 300ms ease',
    })
  }

  return (
    <div
      ref={cardRef}
      className={`tilted-card ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        ...tiltStyle,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glare overlay */}
      {glareEnable && (
        <div
          className="absolute inset-0 pointer-events-none z-[5] rounded-3xl"
          style={{
            ...glareStyle,
            mixBlendMode: 'overlay',
          }}
        />
      )}

      {/* Content with 3D depth */}
      <div style={{ transform: 'translateZ(0px)' }}>
        {children}
      </div>
    </div>
  )
}

