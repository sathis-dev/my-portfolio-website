'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Sparkles, Layers } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Modern Frontend Development',
    description: 'I design and build responsive web interfaces using Next.js, React, TypeScript and Tailwind CSS. I focus on clean layouts, smooth interactions and reusable components. This portfolio and my Silent Help mental-health project are where I push advanced UI, animations and real product thinking.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
  },
  {
    icon: Sparkles,
    title: 'AI-Assisted Workflows',
    description: 'I actively use AI in my development process to move faster and think wider. Tools like ChatGPT, Claude and Cursor help me explore different solutions, refactor code, generate tests and improve documentation. For Silent Help, I\'m applying this mindset to design features that actually use AI to support users, not just as a gimmick.',
    tags: ['ChatGPT', 'Claude', 'Cursor', 'Perplexity']
  },
  {
    icon: Layers,
    title: 'Web Platforms & Integrations',
    description: 'Alongside pure frontend work, I\'m comfortable working with real platforms and backends when a project needs it. I\'ve customised a WordPress (Stax theme) site for Brimston Energy, and through my college work I\'ve used MySQL, JSP/Java and Laravel basics to connect UIs to databases and APIs.',
    tags: ['WordPress (Stax)', 'MySQL', 'JSP / Java', 'REST APIs', 'Laravel']
  }
]

export default function WhatIDoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section 
      ref={ref}
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 sm:mb-4"
            style={{
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
            data-cursor="hover"
            data-cursor-text="Services"
          >
            What I Do
          </motion.h2>
          <motion.p 
            className="text-sm sm:text-base md:text-lg text-white/65 max-w-[700px] mx-auto leading-relaxed px-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Crafting modern web experiences where clean design, solid code and AI tools work together.
          </motion.p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.4, 0, 0.2, 1]
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
                }}
                data-cursor="hover"
                data-cursor-text="Explore Service"
                className="group flex flex-col rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 lg:p-9 transition-all duration-400 h-full"
                  style={{
                    background: 'rgba(10, 5, 15, 0.5)',
                    backdropFilter: 'blur(20px) saturate(90%)',
                    border: '1px solid rgba(199, 21, 133, 0.3)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 0 0 1px rgba(199, 21, 133, 0.2)',
                    willChange: 'transform, background, border, box-shadow',
                    transform: 'translateZ(0)',
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
                >
                {/* Icon */}
                <motion.div
                  className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6 transition-all duration-400"
                  style={{
                    background: 'rgba(199, 21, 133, 0.12)',
                    border: '1px solid rgba(199, 21, 133, 0.25)',
                    transform: 'translateZ(50px)',
                  }}
                  whileHover={{
                    scale: 1.15,
                    rotate: 8,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Icon 
                    size={24}
                    className="sm:w-7 sm:h-7 lg:w-8 lg:h-8"
                    strokeWidth={2}
                    style={{ color: '#E91E8C' }}
                  />
                </motion.div>

                {/* Title */}
                <h3 
                  className="text-xl sm:text-2xl lg:text-[1.65rem] font-bold text-white mb-2 sm:mb-3 leading-tight"
                  style={{ transform: 'translateZ(30px)' }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-sm sm:text-[0.9375rem] lg:text-base text-white/65 leading-relaxed mb-5 sm:mb-6 md:mb-7 flex-grow"
                  style={{ transform: 'translateZ(20px)' }}
                >
                  {service.description}
                </p>

                {/* Tech Tags */}
                <div 
                  className="flex flex-wrap gap-2 mt-auto"
                  style={{ transform: 'translateZ(10px)' }}
                >
                  {service.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      className="text-xs sm:text-[0.8125rem] font-medium px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg transition-all duration-300 cursor-pointer"
                      style={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        background: 'rgba(199, 21, 133, 0.08)',
                        border: '1px solid rgba(199, 21, 133, 0.15)',
                      }}
                      whileHover={{
                        y: -3,
                        scale: 1.05,
                        transition: { type: "spring", stiffness: 400, damping: 25 }
                      }}
                      whileTap={{
                        scale: 0.95
                      }}
                      data-cursor="link"
                      data-cursor-text={tag}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#FFFFFF'
                        e.currentTarget.style.background = 'rgba(199, 21, 133, 0.18)'
                        e.currentTarget.style.borderColor = 'rgba(199, 21, 133, 0.35)'
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(199, 21, 133, 0.2)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'
                        e.currentTarget.style.background = 'rgba(199, 21, 133, 0.08)'
                        e.currentTarget.style.borderColor = 'rgba(199, 21, 133, 0.15)'
                        e.currentTarget.style.boxShadow = 'none'
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

