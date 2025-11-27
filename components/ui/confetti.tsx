'use client'

/**
 * Confetti Component - Celebration confetti animation
 * Perfect for success states, achievements, and celebrations
 */

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ConfettiProps {
  active?: boolean
  duration?: number
  particleCount?: number
  spread?: number
  className?: string
  colors?: string[]
  origin?: { x: number; y: number }
}

interface Particle {
  id: number
  x: number
  y: number
  rotation: number
  color: string
  size: number
  velocity: { x: number; y: number }
  shape: 'square' | 'circle' | 'star'
}

export function Confetti({
  active = false,
  duration = 3,
  particleCount = 50,
  spread = 50,
  className,
  colors = ['#C71585', '#8B5CF6', '#7C3AED', '#E91E8C', '#9D6EFF'],
  origin = { x: 50, y: 50 },
}: ConfettiProps) {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    if (active) {
      const newParticles: Particle[] = Array.from({ length: particleCount }, (_, i) => {
        const angle = (Math.PI * 2 * i) / particleCount + Math.random() * 0.5
        const velocity = 10 + Math.random() * 10
        
        return {
          id: Date.now() + i,
          x: origin.x,
          y: origin.y,
          rotation: Math.random() * 360,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 8 + 4,
          velocity: {
            x: Math.cos(angle) * velocity * (Math.random() * spread / 50),
            y: Math.sin(angle) * velocity * (Math.random() * spread / 50) - 10,
          },
          shape: ['square', 'circle', 'star'][Math.floor(Math.random() * 3)] as any,
        }
      })
      
      setParticles(newParticles)
      
      const timeout = setTimeout(() => {
        setParticles([])
      }, duration * 1000)
      
      return () => clearTimeout(timeout)
    } else {
      setParticles([])
    }
  }, [active, duration, particleCount, spread, colors, origin])

  return (
    <div className={cn('pointer-events-none fixed inset-0 z-50', className)}>
      <AnimatePresence>
        {particles.map((particle) => (
          <ConfettiParticle key={particle.id} particle={particle} duration={duration} />
        ))}
      </AnimatePresence>
    </div>
  )
}

function ConfettiParticle({ particle, duration }: { particle: Particle; duration: number }) {
  const renderShape = () => {
    switch (particle.shape) {
      case 'circle':
        return (
          <div
            className="h-full w-full rounded-full"
            style={{ backgroundColor: particle.color }}
          />
        )
      case 'star':
        return (
          <svg
            viewBox="0 0 24 24"
            className="h-full w-full"
            fill={particle.color}
          >
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
        )
      default:
        return (
          <div
            className="h-full w-full"
            style={{ backgroundColor: particle.color }}
          />
        )
    }
  }

  return (
    <motion.div
      className="absolute"
      style={{
        left: `${particle.x}%`,
        top: `${particle.y}%`,
        width: particle.size,
        height: particle.size,
      }}
      initial={{
        x: 0,
        y: 0,
        opacity: 1,
        rotate: particle.rotation,
      }}
      animate={{
        x: particle.velocity.x * 100,
        y: particle.velocity.y * 100 + 300, // Gravity effect
        opacity: 0,
        rotate: particle.rotation + Math.random() * 360,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration,
        ease: [0.12, 0.82, 0.54, 0.98],
      }}
    >
      {renderShape()}
    </motion.div>
  )
}

/**
 * ConfettiButton Component - Button that triggers confetti
 */
interface ConfettiButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onSuccess?: () => void
  successDuration?: number
  confettiColors?: string[]
}

export function ConfettiButton({
  children,
  className,
  onSuccess,
  successDuration = 3,
  confettiColors,
  onClick,
  ...props
}: ConfettiButtonProps) {
  const [showConfetti, setShowConfetti] = useState(false)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e)
    setShowConfetti(true)
    onSuccess?.()
    
    setTimeout(() => {
      setShowConfetti(false)
    }, successDuration * 1000)
  }

  return (
    <>
      <button
        className={cn(
          'relative inline-flex items-center justify-center',
          'px-6 py-3 rounded-xl',
          'bg-gradient-primary text-white font-semibold',
          'transition-all duration-300',
          'hover:-translate-y-0.5 active:translate-y-0',
          'shadow-magenta hover:shadow-magenta-hover',
          className
        )}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
      
      <Confetti
        active={showConfetti}
        duration={successDuration}
        colors={confettiColors}
        origin={{ x: 50, y: 50 }}
      />
    </>
  )
}

/**
 * SuccessConfetti Component - Automatic confetti for success states
 */
export function SuccessConfetti({ trigger }: { trigger: boolean }) {
  return (
    <Confetti
      active={trigger}
      duration={3}
      particleCount={100}
      spread={70}
      origin={{ x: 50, y: 40 }}
    />
  )
}





