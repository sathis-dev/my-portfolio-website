'use client'

/**
 * Meteors Effect - Animated falling meteors background
 * Perfect for hero sections and dramatic backgrounds
 */

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface MeteorsProps {
  number?: number
  className?: string
}

export function Meteors({ number = 20, className }: MeteorsProps) {
  const [meteors, setMeteors] = useState<number[]>([])

  useEffect(() => {
    setMeteors(Array.from({ length: number }, (_, i) => i))
  }, [number])

  return (
    <div className={cn('absolute inset-0 overflow-hidden', className)}>
      {meteors.map((idx) => (
        <Meteor key={idx} idx={idx} />
      ))}
    </div>
  )
}

function Meteor({ idx }: { idx: number }) {
  const randomDelay = Math.random() * 2
  const randomDuration = Math.random() * 8 + 5
  const randomTop = Math.random() * 100
  const randomLeft = Math.random() * 100
  const randomAngle = Math.random() * 360

  return (
    <motion.div
      key={idx}
      className="absolute"
      initial={{
        top: `${randomTop}%`,
        left: `${randomLeft}%`,
        transform: `rotate(${randomAngle}deg)`,
      }}
      animate={{
        top: '110%',
        left: `${randomLeft + 20}%`,
      }}
      transition={{
        duration: randomDuration,
        delay: randomDelay,
        repeat: Infinity,
        repeatDelay: randomDuration,
        ease: 'linear',
      }}
    >
      <div className="relative">
        {/* Meteor head */}
        <div
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: 'linear-gradient(to right, #C71585, #8B5CF6)',
            boxShadow: '0 0 10px #C71585, 0 0 20px #C71585, 0 0 30px #8B5CF6',
          }}
        />
        
        {/* Meteor tail */}
        <div
          className="absolute top-1/2 left-0 w-[100px] h-[1px] -translate-y-1/2"
          style={{
            background: 'linear-gradient(to left, transparent, #C71585, #8B5CF6)',
            opacity: 0.5,
          }}
        />
      </div>
    </motion.div>
  )
}

/**
 * Static Meteors for performance-sensitive areas
 */
export function StaticMeteors({ number = 10, className }: MeteorsProps) {
  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      {Array.from({ length: number }).map((_, idx) => {
        const randomTop = Math.random() * 100
        const randomLeft = Math.random() * 100
        const randomAngle = Math.random() * 60 - 30

        return (
          <div
            key={idx}
            className="absolute animate-meteor"
            style={{
              top: `${randomTop}%`,
              left: `${randomLeft}%`,
              transform: `rotate(${randomAngle}deg)`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          >
            <div
              className="w-0.5 h-32"
              style={{
                background: `linear-gradient(to bottom, transparent, #C71585 10%, #8B5CF6 50%, transparent)`,
                filter: 'blur(1px)',
              }}
            />
          </div>
        )
      })}
      
      <style jsx>{`
        @keyframes meteor {
          0% {
            opacity: 0;
            transform: translateY(-100px) translateX(0) rotate(135deg);
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(300px) translateX(100px) rotate(135deg);
          }
        }
        
        .animate-meteor {
          animation-name: meteor;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  )
}





