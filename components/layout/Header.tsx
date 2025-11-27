'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download, Zap } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Skills', href: '/skills' },
  { name: 'Experience', href: '/experience' },
  { name: 'Contact', href: '/contact' }
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <>
      {/* Desktop & Mobile Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: isScrolled 
            ? 'rgba(10, 5, 15, 0.95)' 
            : 'rgba(10, 5, 15, 0.8)',
          backdropFilter: 'blur(20px) saturate(100%)',
          borderBottom: `1px solid ${isScrolled ? 'rgba(199, 21, 133, 0.3)' : 'rgba(199, 21, 133, 0.2)'}`,
          boxShadow: isScrolled 
            ? '0 8px 32px rgba(0, 0, 0, 0.4)' 
            : '0 4px 16px rgba(0, 0, 0, 0.2)'
        }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 cursor-pointer"
              >
                <img 
                  src="/logo.svg" 
                  alt="Sathis Logo" 
                  className="w-10 h-10"
                />
                <div className="hidden sm:block">
                  <p 
                    className="text-xl font-extrabold tracking-tight"
                    style={{
                      background: 'linear-gradient(135deg, #C71585 0%, #8B5CF6 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    &lt;/ SATHIS &gt;
                  </p>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link key={item.name} href={item.href}>
                    <motion.div
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative px-4 py-2 rounded-xl transition-all duration-300"
                      style={{
                        background: isActive 
                          ? 'rgba(199, 21, 133, 0.15)' 
                          : 'transparent',
                        border: isActive
                          ? '1px solid rgba(199, 21, 133, 0.3)'
                          : '1px solid transparent'
                      }}
                    >
                      <span 
                        className="text-sm font-semibold transition-colors duration-300"
                        style={{
                          color: isActive ? '#E91E8C' : 'rgba(255, 255, 255, 0.85)'
                        }}
                      >
                        {item.name}
                      </span>
                      
                      {/* Active indicator */}
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 rounded-full"
                          style={{
                            background: 'linear-gradient(90deg, transparent, #E91E8C, transparent)'
                          }}
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </motion.div>
                  </Link>
                )
              })}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              
              {/* Availability Badge - Desktop */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="hidden xl:flex items-center gap-2 px-4 py-2 rounded-full"
                style={{
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)'
                }}
              >
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-semibold text-green-400">
                  Available for Projects
                </span>
              </motion.div>

              {/* CV Button */}
              <motion.a
                href="/cv.pdf"
                download
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #C71585 0%, #8B5CF6 100%)',
                  boxShadow: '0 4px 16px rgba(199, 21, 133, 0.4)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <Download size={16} />
                <span className="hidden md:inline">CV</span>
              </motion.a>

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl transition-all duration-300"
                style={{
                  background: mobileMenuOpen 
                    ? 'rgba(199, 21, 133, 0.15)' 
                    : 'rgba(139, 92, 246, 0.15)',
                  border: '1px solid rgba(139, 92, 246, 0.3)'
                }}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} style={{ color: '#E91E8C' }} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} style={{ color: '#8B5CF6' }} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-20 right-0 bottom-0 w-full max-w-sm z-40 lg:hidden overflow-y-auto"
              style={{
                background: 'rgba(26, 15, 31, 0.98)',
                backdropFilter: 'blur(30px) saturate(120%)',
                borderLeft: '1px solid rgba(199, 21, 133, 0.3)',
                boxShadow: '-8px 0 32px rgba(0, 0, 0, 0.5)'
              }}
            >
              <div className="p-6 space-y-6">
                
                {/* Mobile Availability Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-2xl"
                  style={{
                    background: 'rgba(16, 185, 129, 0.2)',
                    border: '1px solid rgba(16, 185, 129, 0.4)'
                  }}
                >
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  <div>
                    <p className="text-sm font-bold text-green-400">Available for Projects</p>
                    <p className="text-xs text-green-400/80">Response time: 24-48 hours</p>
                  </div>
                </motion.div>

                {/* Mobile Navigation */}
                <nav className="space-y-2">
                  {navigation.map((item, index) => {
                    const isActive = pathname === item.href
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                      >
                        <Link href={item.href}>
                          <motion.div
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center justify-between p-4 rounded-2xl transition-all duration-300"
                            style={{
                              background: isActive 
                                ? 'rgba(199, 21, 133, 0.2)' 
                                : 'rgba(139, 92, 246, 0.05)',
                              border: isActive
                                ? '1px solid rgba(199, 21, 133, 0.4)'
                                : '1px solid transparent'
                            }}
                          >
                            <span 
                              className="text-lg font-bold"
                              style={{
                                color: isActive ? '#E91E8C' : 'rgba(255, 255, 255, 0.95)'
                              }}
                            >
                              {item.name}
                            </span>
                            {isActive && (
                              <Zap size={20} style={{ color: '#E91E8C' }} />
                            )}
                          </motion.div>
                        </Link>
                      </motion.div>
                    )
                  })}
                </nav>

                {/* Mobile CV Button */}
                <motion.a
                  href="/cv.pdf"
                  download
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-3 w-full p-4 rounded-2xl text-base font-bold text-white"
                  style={{
                    background: 'linear-gradient(135deg, #E91E8C 0%, #9D6EFF 100%)',
                    boxShadow: '0 4px 16px rgba(233, 30, 140, 0.5)',
                    border: '1px solid rgba(255, 255, 255, 0.3)'
                  }}
                >
                  <Download size={20} />
                  Download CV
                </motion.a>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pt-6 border-t"
                  style={{
                    borderColor: 'rgba(199, 21, 133, 0.2)'
                  }}
                >
                  <p className="text-sm font-semibold mb-4" style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
                    Connect with me
                  </p>
                  <div className="flex gap-3">
                    {[
                      { icon: '💼', href: 'https://www.linkedin.com/in/sathis-hettiarachchi-52b4b436a/', label: 'LinkedIn' },
                      { icon: '🔗', href: 'https://github.com/sathis-dev', label: 'GitHub' },
                      { icon: '✉️', href: 'mailto:sathis.rc.dev@gmail.com', label: 'Email' }
                    ].map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileTap={{ scale: 0.9 }}
                        className="flex-1 flex items-center justify-center p-3 rounded-xl"
                        style={{
                          background: 'rgba(139, 92, 246, 0.15)',
                          border: '1px solid rgba(139, 92, 246, 0.3)'
                        }}
                      >
                        <span className="text-2xl">{social.icon}</span>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
