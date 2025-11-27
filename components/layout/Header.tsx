'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Star, Home, Briefcase, User, Code, Award, Mail, ArrowRight } from 'lucide-react'
import { PillNavEffect } from '@/components/ui/pill-nav-effect'

const navItems = [
  { label: 'HOME', href: '/', icon: Home },
  { label: 'PROJECTS', href: '/projects', icon: Briefcase },
  { label: 'ABOUT', href: '/about', icon: User },
  { label: 'SKILLS', href: '/skills', icon: Code },
  { label: 'EXPERIENCE', href: '/experience', icon: Award },
  { label: 'CONTACT', href: '/contact', icon: Mail },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredNavIndex, setHoveredNavIndex] = useState<number | null>(null)
  const [showHeader, setShowHeader] = useState(true)
  const pathname = usePathname()
  const navRef = useRef<HTMLDivElement>(null)
  const lastScrollY = useRef(0)
  
  // Calculate active nav index for pill effect
  const activeNavIndex = navItems.findIndex(item => item.href === pathname)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Update scrolled state (for header styling)
      setIsScrolled(currentScrollY > 20)
      
      // Determine scroll direction and header visibility
      if (currentScrollY < 20) {
        // At top of page - always show header
        setShowHeader(true)
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling UP - show header
        setShowHeader(true)
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling DOWN (and past 100px) - hide header
        setShowHeader(false)
      }
      
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: showHeader ? 1 : 0,
        y: showHeader ? 0 : -100,
      }}
      transition={{ 
        duration: 0.4, 
        ease: [0.4, 0, 0.2, 1],
      }}
      className="fixed top-0 left-0 right-0 px-4 sm:px-6 py-4"
      style={{
        pointerEvents: showHeader ? 'auto' : 'none',
        zIndex: 9999,
      }}
    >
      <nav
        className="max-w-[1400px] mx-auto rounded-3xl px-4 sm:px-6 py-4 transition-all duration-500 relative overflow-hidden"
        style={{
          background: isScrolled 
            ? 'linear-gradient(135deg, rgba(39, 10, 33, 0.95) 0%, rgba(20, 10, 25, 0.95) 100%)' 
            : 'linear-gradient(135deg, rgba(39, 10, 33, 0.7) 0%, rgba(20, 10, 25, 0.7) 100%)',
          backdropFilter: 'blur(30px) saturate(120%)',
          WebkitBackdropFilter: 'blur(30px) saturate(120%)',
          border: `1px solid ${isScrolled 
            ? 'rgba(199, 21, 133, 0.35)' 
            : 'rgba(199, 21, 133, 0.25)'}`,
          boxShadow: isScrolled
            ? '0 8px 40px rgba(199, 21, 133, 0.25), 0 2px 8px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
            : '0 4px 24px rgba(199, 21, 133, 0.2), 0 2px 8px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        }}
      >
        {/* Premium Border Glow */}
        <div 
          className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(199, 21, 133, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
            borderRadius: '24px',
          }}
        />
        {/* Grid Layout */}
        <div className="grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr] items-center gap-4 lg:gap-8">
          {/* Premium Logo - LARGE & PROMINENT */}
          <div className="flex items-center">
            <Link 
              href="/"
              data-cursor="link"
              data-cursor-text="Home"
              className="group relative"
            >
              <motion.div 
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative transition-all duration-300"
              >
                {/* Enhanced Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'radial-gradient(circle, rgba(199, 21, 133, 0.5) 0%, rgba(139, 92, 246, 0.4) 50%, transparent 70%)',
                    filter: 'blur(30px)',
                    zIndex: -1,
                  }}
                />
                <img
                  src="/logo.svg"
                  alt="<SATHIS/>"
                  className="w-[220px] sm:w-[240px] md:w-[260px] lg:w-[280px] h-auto transition-all duration-300"
                  style={{
                    filter: 'drop-shadow(0 6px 20px rgba(199, 21, 133, 0.5)) brightness(1.15) contrast(1.05)',
                    opacity: 1,
                  }}
                />
              </motion.div>
            </Link>
          </div>

          {/* Advanced Navigation - Premium Design */}
          <div 
            ref={navRef} 
            className="hidden lg:flex items-center gap-2 relative px-3 py-2 rounded-full"
            onMouseLeave={() => setHoveredNavIndex(null)}
            style={{
              background: 'linear-gradient(135deg, rgba(39, 10, 33, 0.7) 0%, rgba(20, 10, 25, 0.7) 100%)',
              backdropFilter: 'blur(20px) saturate(120%)',
              border: '1px solid rgba(199, 21, 133, 0.25)',
              boxShadow: '0 4px 24px rgba(199, 21, 133, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
            }}
          >
            {/* Animated Pill Background */}
            {activeNavIndex >= 0 && (
              <PillNavEffect
                activeIndex={activeNavIndex}
                hoveredIndex={hoveredNavIndex}
                itemsCount={navItems.length}
                containerRef={navRef}
              />
            )}
            
            {navItems.map((item, index) => {
              const isActive = pathname === item.href
              const Icon = item.icon
              
              return (
                <motion.div
                  key={item.href}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={item.href}
                    data-cursor="link"
                    data-nav-item
                    onMouseEnter={() => setHoveredNavIndex(index)}
                    className="group relative flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300"
                    style={{
                      color: isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.7)',
                    }}
                  >
                    <Icon 
                      size={16} 
                      className={`transition-all duration-300 ${
                        isActive 
                          ? 'text-pink-500' 
                          : 'text-purple-400 opacity-0 group-hover:opacity-100'
                      }`}
                    />
                    <span className="text-[0.875rem] font-medium">
                      {item.label}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                        style={{
                          background: '#E91E8C',
                          boxShadow: '0 0 8px rgba(233, 30, 140, 0.8)',
                        }}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {/* Premium Actions Section */}
          <div className="flex items-center justify-end gap-3">
            {/* Availability Badge - Premium Design */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="hidden xl:flex items-center gap-2.5 px-4 py-2.5 rounded-full"
              style={{
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(6, 182, 212, 0.08) 100%)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                boxShadow: '0 4px 16px rgba(16, 185, 129, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              }}
            >
              <motion.div
                className="relative w-2.5 h-2.5 rounded-full"
                style={{ background: '#10B981' }}
                animate={{
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    '0 0 0 0 rgba(16, 185, 129, 0.7)',
                    '0 0 0 6px rgba(16, 185, 129, 0)',
                    '0 0 0 0 rgba(16, 185, 129, 0)'
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <span className="text-xs font-semibold text-emerald-400 tracking-wide">
                AVAILABLE
              </span>
            </motion.div>

            {/* Let's Talk Button - Premium Design */}
            <motion.div 
              whileHover={{ y: -2, scale: 1.02 }} 
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/contact"
                className="hidden md:flex items-center gap-2.5 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 group relative overflow-hidden whitespace-nowrap"
                style={{
                  background: 'linear-gradient(135deg, #C71585 0%, #8B5CF6 50%, #7C3AED 100%)',
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(199, 21, 133, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 0 0 1px rgba(199, 21, 133, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #E91E8C 0%, #9D6EFF 50%, #8B5CF6 100%)'
                  e.currentTarget.style.boxShadow = '0 6px 28px rgba(199, 21, 133, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 0 0 1px rgba(199, 21, 133, 0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #C71585 0%, #8B5CF6 50%, #7C3AED 100%)'
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(199, 21, 133, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 0 0 1px rgba(199, 21, 133, 0.3)'
                }}
              >
                <span className="relative z-10">Let&apos;s Talk</span>
                <motion.div
                  className="relative z-10"
                  animate={{
                    x: [0, 2, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <ArrowRight size={16} />
                </motion.div>
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                  }}
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                    repeatDelay: 3,
                  }}
                />
              </Link>
            </motion.div>

            {/* GitHub Button - Premium Glass Design */}
            <motion.div 
              whileHover={{ y: -2, scale: 1.02 }} 
              whileTap={{ scale: 0.98 }}
            >
              <a
                href="https://github.com/sathis-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2.5 px-5 py-3 text-sm font-bold transition-all duration-300 group relative"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
                  color: 'rgba(255, 255, 255, 0.9)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)'
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)'
                  e.currentTarget.style.boxShadow = '0 6px 24px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                  e.currentTarget.style.color = '#FFFFFF'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)'
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)'
                }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <Star size={16} className="text-yellow-400" fill="#FFD700" strokeWidth={0} />
                </motion.div>
                <span>GitHub</span>
                <span 
                  className="text-xs opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    padding: '2px 6px',
                    borderRadius: '6px',
                  }}
                >
                  3.1K
                </span>
              </a>
            </motion.div>

            {/* Advanced Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative overflow-hidden rounded-2xl flex flex-col items-center justify-center gap-1 px-4 py-2 transition-all duration-300"
              style={{
                background: isMobileMenuOpen
                  ? 'linear-gradient(135deg, rgba(199, 21, 133, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)'
                  : 'rgba(199, 21, 133, 0.08)',
                border: isMobileMenuOpen
                  ? '1px solid rgba(199, 21, 133, 0.3)'
                  : '1px solid rgba(199, 21, 133, 0.15)',
                boxShadow: isMobileMenuOpen
                  ? '0 4px 16px rgba(199, 21, 133, 0.3)'
                  : 'none',
              }}
            >
              <div className="flex flex-col gap-1">
                <motion.span
                  className="h-0.5 rounded-full"
                  style={{ 
                    width: '20px',
                    background: isMobileMenuOpen ? '#E91E8C' : '#FFFFFF'
                  }}
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 5 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="h-0.5 rounded-full"
                  style={{ 
                    width: '20px',
                    background: '#FFFFFF'
                  }}
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="h-0.5 rounded-full"
                  style={{ 
                    width: '20px',
                    background: isMobileMenuOpen ? '#E91E8C' : '#FFFFFF'
                  }}
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -5 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <span 
                className="text-[0.625rem] font-semibold uppercase tracking-wider transition-colors duration-300"
                style={{ 
                  color: isMobileMenuOpen ? '#E91E8C' : 'rgba(255, 255, 255, 0.7)',
                  marginTop: '2px'
                }}
              >
                {isMobileMenuOpen ? 'CLOSE' : 'MENU'}
              </span>
            </motion.button>
          </div>
        </div>

        {/* Advanced Mobile Menu - Slides Down */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop with Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden fixed inset-0 bg-black/70 backdrop-blur-sm"
              style={{ zIndex: 9998, top: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel - Slides Down from Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="lg:hidden fixed left-4 right-4 overflow-hidden"
              style={{
                top: '90px',
                background: 'linear-gradient(135deg, rgba(10, 5, 15, 0.98) 0%, rgba(20, 10, 25, 0.98) 100%)',
                backdropFilter: 'blur(40px) saturate(120%)',
                border: '1px solid rgba(199, 21, 133, 0.3)',
                borderRadius: '24px',
                boxShadow: '0 20px 60px rgba(199, 21, 133, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                zIndex: 9999,
                maxHeight: 'calc(100vh - 110px)',
                overflowY: 'auto',
              }}
            >

              {/* Navigation Links */}
              <nav className="p-4">
                <div className="flex flex-col gap-2">
                  {navItems.map((item, index) => {
                    const isActive = pathname === item.href
                    const Icon = item.icon
                    
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          delay: 0.1 + (index * 0.05),
                          duration: 0.4,
                          ease: [0.4, 0, 0.2, 1]
                        }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="group flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300"
                          style={{
                            background: isActive 
                              ? 'linear-gradient(135deg, rgba(199, 21, 133, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)'
                              : 'rgba(255, 255, 255, 0.03)',
                            border: isActive
                              ? '1px solid rgba(199, 21, 133, 0.4)'
                              : '1px solid rgba(255, 255, 255, 0.05)',
                          }}
                        >
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                            style={{
                              background: isActive 
                                ? 'linear-gradient(135deg, #C71585 0%, #8B5CF6 100%)'
                                : 'rgba(139, 92, 246, 0.1)',
                              boxShadow: isActive
                                ? '0 4px 16px rgba(199, 21, 133, 0.4)'
                                : 'none',
                            }}
                          >
                            <Icon 
                              size={18} 
                              className={isActive ? 'text-white' : 'text-purple-400'}
                            />
                          </div>
                          <span 
                            className="text-lg font-semibold transition-colors duration-300"
                            style={{
                              color: isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.7)'
                            }}
                          >
                            {item.label}
                          </span>
                          {isActive && (
                            <motion.div
                              layoutId="activeMobile"
                              className="ml-auto"
                            >
                              <ArrowRight size={18} className="text-pink-500" />
                            </motion.div>
                          )}
                        </Link>
                      </motion.div>
                    )
                  })}
                </div>
              </nav>

              {/* Divider */}
              <div className="mx-4 my-2 h-px" style={{ background: 'rgba(199, 21, 133, 0.2)' }} />

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="px-4 pb-4 space-y-3"
              >
                {/* Let's Talk Button */}
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-2xl text-base font-semibold text-white transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #C71585 0%, #8B5CF6 50%, #7C3AED 100%)',
                    boxShadow: '0 8px 24px rgba(199, 21, 133, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                  }}
                >
                  <Mail size={18} />
                  <span>Let&apos;s Talk</span>
                  <ArrowRight size={18} className="ml-auto" />
                </Link>

                {/* GitHub Button */}
                <a
                  href="https://github.com/sathis-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-2xl text-base font-semibold text-white/90 transition-all duration-300"
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <Star size={18} className="text-yellow-400" fill="#FFD700" strokeWidth={0} />
                  <span>GitHub Profile</span>
                </a>
              </motion.div>

              {/* Footer Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="px-4 pb-4"
              >
                <div 
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl"
                  style={{
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.2)',
                  }}
                >
                  <motion.span
                    className="w-2 h-2 rounded-full"
                    style={{ background: '#10B981' }}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                  <span className="text-sm font-medium text-green-400">
                    Available for Projects
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </nav>
    </motion.header>
  )
}
