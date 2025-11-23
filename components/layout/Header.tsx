'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Download, Command, Menu, X } from 'lucide-react'
import { PillNavEffect } from '@/components/ui/pill-nav-effect'

const navItems = [
  { label: 'HOME', href: '/' },
  { label: 'PROJECTS', href: '/projects' },
  { label: 'ABOUT', href: '/about' },
  { label: 'SKILLS', href: '/skills' },
  { label: 'EXPERIENCE', href: '/experience' },
  { label: 'CONTACT', href: '/contact' },
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
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4"
      style={{
        pointerEvents: showHeader ? 'auto' : 'none',
      }}
    >
      <nav
        className="max-w-[1400px] mx-auto rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500"
        style={{
          background: isScrolled 
            ? 'rgba(39, 10, 33, 0.85)' 
            : 'rgba(39, 10, 33, 0.6)',
          backdropFilter: 'blur(20px) saturate(110%)',
          WebkitBackdropFilter: 'blur(20px) saturate(110%)',
          border: `1px solid ${isScrolled 
            ? 'rgba(199, 21, 133, 0.3)' 
            : 'rgba(199, 21, 133, 0.2)'}`,
          boxShadow: isScrolled
            ? '0 8px 32px rgba(74, 20, 140, 0.35), inset 0 1px 0 rgba(199, 21, 133, 0.1)'
            : '0 4px 20px rgba(74, 20, 140, 0.25), inset 0 1px 0 rgba(199, 21, 133, 0.05)',
        }}
      >
        {/* Grid Layout */}
        <div className="grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr] items-center gap-4 lg:gap-8">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              href="/"
              data-cursor="link"
              data-cursor-text="Home"
              className="group"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center transition-all duration-300"
              >
                <img
                  src="/logo.svg"
                  alt="<SATHIS/>"
                  className="w-[140px] sm:w-[160px] md:w-[180px] h-auto opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </motion.div>
            </Link>
          </div>

          {/* Navigation - Center with Pill Effect */}
          <div 
            ref={navRef} 
            className="hidden lg:flex items-center justify-center gap-1 relative"
            onMouseLeave={() => setHoveredNavIndex(null)}
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

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  data-cursor="link"
                  data-nav-item
                  onMouseEnter={() => setHoveredNavIndex(index)}
                  className={`
                    relative px-4 py-2 rounded-xl text-[0.875rem] font-medium
                    transition-colors duration-300
                    ${isActive ? 'text-white' : 'text-white/70 hover:text-white'}
                  `}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-2 sm:gap-3">
            {/* Command Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-cursor="button"
              data-cursor-text="⌘K"
              className="hidden md:flex w-10 h-10 rounded-xl items-center justify-center transition-all duration-300"
              style={{
                background: 'rgba(199, 21, 133, 0.08)',
                border: '1px solid rgba(199, 21, 133, 0.15)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(199, 21, 133, 0.15)'
                e.currentTarget.style.borderColor = 'rgba(199, 21, 133, 0.25)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(199, 21, 133, 0.08)'
                e.currentTarget.style.borderColor = 'rgba(199, 21, 133, 0.15)'
              }}
            >
              <div className="flex items-center gap-0.5">
                <Command size={12} className="text-white/70" />
                <span className="text-[9px] text-white/50 font-semibold">K</span>
              </div>
            </motion.button>

            {/* Availability Badge */}
            <div 
              className="hidden lg:flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-[0.8125rem] font-medium whitespace-nowrap"
              style={{
                background: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                color: '#10B981',
              }}
            >
              <motion.span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: '#10B981' }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <span className="hidden xl:inline">Available for Projects</span>
              <span className="xl:hidden">Available</span>
            </div>

            {/* CV Button */}
            <motion.a
              href="/cv.pdf"
              download
              data-cursor="button"
              whileHover={{ y: -1, scale: 1.02 }}
              whileTap={{ y: 0, scale: 0.98 }}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 text-[0.875rem] font-semibold text-white rounded-2xl transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #C71585 0%, #8B5CF6 50%, #7C3AED 100%)',
                boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 4px 16px rgba(199, 21, 133, 0.4)',
                border: '1px solid rgba(199, 21, 133, 0.3)',
              }}
            >
              <Download size={16} />
              <span className="hidden sm:inline">CV</span>
            </motion.a>

            {/* Mobile Menu */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-cursor="button"
              data-cursor-text={isMobileMenuOpen ? "Close" : "Menu"}
              className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-all"
              style={{
                background: 'rgba(199, 21, 133, 0.08)',
                border: '1px solid rgba(199, 21, 133, 0.15)',
              }}
            >
              {isMobileMenuOpen ? (
                <X size={20} className="text-white/80" />
              ) : (
                <Menu size={20} className="text-white/80" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 pt-4"
            style={{ 
              borderTop: '1px solid rgba(199, 21, 133, 0.2)'
            }}
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    data-cursor="link"
                    className={`
                      px-4 py-3 rounded-xl text-sm font-medium transition-all
                      ${isActive ? 'text-white' : 'text-white/70'}
                    `}
                    style={{
                      background: isActive ? 'rgba(199, 21, 133, 0.15)' : 'transparent',
                    }}
                  >
                    {item.label}
                  </Link>
                )
              })}
              
              <div className="h-px my-2" style={{ background: 'rgba(199, 21, 133, 0.2)' }} />
              
              <div className="flex items-center gap-2 px-4 py-3">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-green-500">Available for Projects</span>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}

