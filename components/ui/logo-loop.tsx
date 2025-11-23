'use client'

import { motion } from 'framer-motion'

interface Logo {
  name: string
  icon: string
  url: string
}

const logos: Logo[] = [
  { name: 'Next.js', icon: '▲', url: 'https://nextjs.org' },
  { name: 'React', icon: '⚛', url: 'https://react.dev' },
  { name: 'TypeScript', icon: 'TS', url: 'https://www.typescriptlang.org' },
  { name: 'Tailwind', icon: '🎨', url: 'https://tailwindcss.com' },
  { name: 'Framer', icon: 'F', url: 'https://www.framer.com/motion' },
  { name: 'Node.js', icon: '⬢', url: 'https://nodejs.org' },
  { name: 'Git', icon: '⎇', url: 'https://git-scm.com' },
  { name: 'Vercel', icon: '▲', url: 'https://vercel.com' },
]

export function LogoLoop() {
  // Duplicate logos 4 times for seamless infinite loop
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos]

  return (
    <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden py-6 sm:py-7 md:py-8 lg:py-9">
      {/* Gradient overlays for fade effect */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, rgba(0, 0, 0, 1) 0%, transparent 100%)'
        }}
      />
      <div 
        className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to left, rgba(0, 0, 0, 1) 0%, transparent 100%)'
        }}
      />
      
      {/* Scrolling container with GPU acceleration */}
      <motion.div
        className="flex gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16"
        animate={{
          x: [0, -1920],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        style={{
          willChange: 'transform',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <motion.a
            key={`${logo.name}-${index}`}
            href={logo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex flex-col items-center justify-center gap-1.5 sm:gap-2 group cursor-pointer"
            data-cursor="link"
            data-cursor-text={logo.name}
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            {/* Logo icon with optimized transitions */}
            <div
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-[4.25rem] xl:h-[4.25rem] rounded-lg sm:rounded-xl flex items-center justify-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[1.6rem] font-bold transition-all duration-200"
              style={{
                background: 'rgba(199, 21, 133, 0.08)',
                border: '1px solid rgba(199, 21, 133, 0.15)',
                color: 'rgba(255, 255, 255, 0.7)',
                boxShadow: '0 4px 12px rgba(74, 20, 140, 0.15)',
                willChange: 'transform, background, border, box-shadow',
                transform: 'translateZ(0)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(199, 21, 133, 0.15)'
                e.currentTarget.style.borderColor = 'rgba(199, 21, 133, 0.3)'
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(199, 21, 133, 0.3)'
                e.currentTarget.style.transform = 'scale(1.05) translateZ(0)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(199, 21, 133, 0.08)'
                e.currentTarget.style.borderColor = 'rgba(199, 21, 133, 0.15)'
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(74, 20, 140, 0.15)'
                e.currentTarget.style.transform = 'scale(1) translateZ(0)'
              }}
            >
              {logo.icon}
            </div>
            
            {/* Logo name */}
            <span 
              className="text-[0.5625rem] sm:text-[0.625rem] md:text-xs font-medium text-white/40 group-hover:text-white/70 transition-colors duration-200 whitespace-nowrap"
            >
              {logo.name}
            </span>
          </motion.a>
        ))}
      </motion.div>
    </div>
  )
}

