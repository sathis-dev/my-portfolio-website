'use client'

/**
 * Marquee Component - Infinite scrolling content
 * Perfect for showcasing tech stack, testimonials, or partners
 */

import { cn } from '@/lib/utils'
import React from 'react'

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  reverse?: boolean
  pauseOnHover?: boolean
  vertical?: boolean
  repeat?: number
  duration?: number
  gradient?: boolean
  gradientColor?: string
  children: React.ReactNode
}

export function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  vertical = false,
  repeat = 4,
  duration = 40,
  gradient = true,
  gradientColor = 'rgba(10, 10, 15, 1)',
  children,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        'group relative flex gap-4 overflow-hidden',
        vertical ? 'flex-col' : 'flex-row',
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              'flex shrink-0 gap-4',
              vertical ? 'animate-marquee-vertical flex-col' : 'animate-marquee-horizontal',
              pauseOnHover && 'group-hover:[animation-play-state:paused]'
            )}
            style={{
              animationDirection: reverse ? 'reverse' : 'normal',
              animationDuration: `${duration}s`,
            }}
          >
            {children}
          </div>
        ))}
      
      {/* Gradient Overlays */}
      {gradient && (
        <>
          <div
            className={cn(
              'pointer-events-none absolute z-10',
              vertical
                ? 'left-0 top-0 h-1/3 w-full'
                : 'left-0 top-0 h-full w-1/3'
            )}
            style={{
              background: vertical
                ? `linear-gradient(to bottom, ${gradientColor}, transparent)`
                : `linear-gradient(to right, ${gradientColor}, transparent)`,
            }}
          />
          <div
            className={cn(
              'pointer-events-none absolute z-10',
              vertical
                ? 'bottom-0 left-0 h-1/3 w-full'
                : 'right-0 top-0 h-full w-1/3'
            )}
            style={{
              background: vertical
                ? `linear-gradient(to top, ${gradientColor}, transparent)`
                : `linear-gradient(to left, ${gradientColor}, transparent)`,
            }}
          />
        </>
      )}
      
      <style jsx>{`
        @keyframes marquee-horizontal {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% - 1rem));
          }
        }
        
        @keyframes marquee-vertical {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(calc(-100% - 1rem));
          }
        }
        
        .animate-marquee-horizontal {
          animation: marquee-horizontal var(--duration, 40s) linear infinite;
        }
        
        .animate-marquee-vertical {
          animation: marquee-vertical var(--duration, 40s) linear infinite;
        }
      `}</style>
    </div>
  )
}

/**
 * MarqueeCard Component - Individual items in the marquee
 */
interface MarqueeCardProps {
  children: React.ReactNode
  className?: string
}

export function MarqueeCard({ children, className }: MarqueeCardProps) {
  return (
    <div
      className={cn(
        'relative flex-shrink-0 rounded-xl px-4 py-3',
        'bg-background-elevated backdrop-blur-[12px]',
        'border border-card',
        'transition-all duration-300',
        'hover:border-[rgba(255,255,255,0.12)]',
        'hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)]',
        'hover:scale-105',
        className
      )}
    >
      {children}
    </div>
  )
}
