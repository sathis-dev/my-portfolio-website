'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Briefcase, Code2, Layers } from 'lucide-react'
import { NumberTicker } from '@/components/ui/number-ticker'
import { BlurFade } from '@/components/ui/blur-fade'

const stats = [
  {
    icon: Briefcase,
    number: 15,
    suffix: '+',
    label: 'Projects Delivered',
    color: '#E91E8C'
  },
  {
    icon: Code2,
    number: 3,
    suffix: '+',
    label: 'Years Experience',
    color: '#C71585'
  },
  {
    icon: Layers,
    number: 10,
    suffix: '+',
    label: 'Tech Stack',
    color: '#8B5CF6'
  },
]

function Counter({ end, duration = 2, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  // Use the new NumberTicker component for better performance
  return (
    <NumberTicker
      value={end}
      duration={duration}
      suffix={suffix}
      className="text-4xl sm:text-5xl md:text-6xl font-bold"
    />
  )
}

export default function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section 
      ref={ref}
      className="relative py-8 sm:py-8 md:py-10 lg:py-12 px-6 sm:px-6 lg:px-8"
    >
      {/* Stats Cards Grid */}
      <div className="max-w-[1000px] mx-auto">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-3 md:gap-4 lg:gap-5"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.4, 0, 0.2, 1]
                }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  transition: { 
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                    mass: 0.5
                  }
                }}
                className="group relative rounded-2xl sm:rounded-2xl p-6 sm:p-5 md:p-6 lg:p-7 card-hover-smooth"
              style={{
                background: 'rgba(10, 5, 15, 0.5)',
                backdropFilter: 'blur(20px) saturate(90%)',
                border: '1px solid rgba(199, 21, 133, 0.3)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 0 0 1px rgba(199, 21, 133, 0.2)',
                willChange: 'transform, box-shadow, background, border',
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(10, 5, 15, 0.7)'
                e.currentTarget.style.border = '1px solid rgba(199, 21, 133, 0.5)'
                e.currentTarget.style.boxShadow = '0 12px 48px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 0 0 1px rgba(199, 21, 133, 0.3), 0 0 80px rgba(199, 21, 133, 0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(10, 5, 15, 0.5)'
                e.currentTarget.style.border = '1px solid rgba(199, 21, 133, 0.3)'
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 0 0 1px rgba(199, 21, 133, 0.2)'
              }}
                data-cursor="hover"
              >
                <div className="flex flex-col items-center gap-2.5 sm:gap-3 md:gap-4">
                  {/* Icon */}
                  <motion.div
                    className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{
                      background: 'rgba(199, 21, 133, 0.12)',
                      border: '1px solid rgba(199, 21, 133, 0.25)',
                    }}
                    whileHover={{
                      scale: 1.08,
                      rotate: 5,
                    }}
                  >
                    <Icon 
                      size={18}
                      className="sm:w-5 sm:h-5 md:w-6 md:h-6"
                      strokeWidth={2}
                      style={{ color: stat.color }}
                    />
                  </motion.div>

                  {/* Number */}
                  <div className="flex flex-col items-center gap-1.5 sm:gap-2">
                    <h3 
                      className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold leading-none shimmer"
                      style={{
                        background: 'linear-gradient(135deg, #FFFFFF 0%, #E91E8C 50%, #C71585 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundSize: '200% auto',
                      }}
                    >
                      <Counter end={stat.number} suffix={stat.suffix} />
                    </h3>

                    {/* Label */}
                    <p className="text-[0.6875rem] sm:text-[0.625rem] md:text-xs font-semibold uppercase tracking-wide text-white/70 text-center px-2">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

