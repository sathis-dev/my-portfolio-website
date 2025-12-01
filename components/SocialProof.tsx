'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye, TrendingUp, Users, Activity } from 'lucide-react'

/**
 * Smart Social Proof Indicators
 * Professional approach to showing demand and activity
 */
export default function SocialProof() {
  const [showIndicator, setShowIndicator] = useState(false)
  const [currentIndicator, setCurrentIndicator] = useState(0)

  const indicators = [
    {
      icon: Eye,
      text: 'Recruiters viewing this week',
      count: '12+',
      color: '#8B5CF6'
    },
    {
      icon: TrendingUp,
      text: 'Portfolio views this month',
      count: '240+',
      color: '#EC4899'
    },
    {
      icon: Users,
      text: 'Active project inquiries',
      count: '3',
      color: '#10B981'
    },
    {
      icon: Activity,
      text: 'GitHub contributions this year',
      count: '500+',
      color: '#22D3EE'
    }
  ]

  useEffect(() => {
    // Show first indicator after 3 seconds
    const timer = setTimeout(() => {
      setShowIndicator(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!showIndicator) return

    // Rotate through indicators every 8 seconds
    const interval = setInterval(() => {
      setCurrentIndicator((prev) => (prev + 1) % indicators.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [showIndicator, indicators.length])

  const current = indicators[currentIndicator]
  const Icon = current.icon

  return (
    <AnimatePresence mode="wait">
      {showIndicator && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-6 right-6 z-[9980] hidden lg:block"
        >
          <motion.div
            key={currentIndicator}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex items-center gap-3 px-5 py-3.5 rounded-2xl cursor-pointer group"
            style={{
              background: 'linear-gradient(135deg, rgba(10, 5, 15, 0.95) 0%, rgba(20, 10, 25, 0.95) 100%)',
              backdropFilter: 'blur(20px) saturate(120%)',
              border: '1px solid rgba(199, 21, 133, 0.3)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            }}
            onClick={() => setShowIndicator(false)}
          >
            {/* Icon */}
            <motion.div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: `rgba(${current.color === '#8B5CF6' ? '139, 92, 246' : current.color === '#EC4899' ? '236, 72, 153' : current.color === '#10B981' ? '16, 185, 129' : '34, 211, 238'}, 0.15)`,
                border: `1px solid ${current.color}40`,
              }}
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Icon size={20} style={{ color: current.color }} />
            </motion.div>

            {/* Content */}
            <div className="flex flex-col">
              <span 
                className="text-2xl font-extrabold leading-none mb-1"
                style={{
                  background: `linear-gradient(135deg, ${current.color} 0%, #FFFFFF 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {current.count}
              </span>
              <span className="text-xs font-medium text-white/70">
                {current.text}
              </span>
            </div>

            {/* Close hint */}
            <div 
              className="text-[0.625rem] text-white/40 opacity-0 group-hover:opacity-100 transition-opacity ml-2"
            >
              ✕
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

