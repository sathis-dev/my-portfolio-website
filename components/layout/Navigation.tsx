'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download, Search, Command } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_LINKS } from '@/lib/constants'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { useCommandPalette } from '@/components/CommandPaletteProvider'
import Container from './Container'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const scrollProgress = useScrollProgress()
  const { open: openCommandPalette } = useCommandPalette()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const isActiveLink = (href: string, exact: boolean = false) => {
    if (exact) {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-dark-bg-primary focus:px-4 focus:py-2 focus:rounded-lg focus:ring-2 focus:ring-primary-500"
      >
        Skip to main content
      </a>

      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-50',
          'transition-all duration-300',
          isScrolled
            ? 'py-3 bg-dark-bg-primary/95 backdrop-blur-glass shadow-lg'
            : 'py-6 bg-transparent'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Container>
          <nav aria-label="Main navigation" className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="text-xl font-bold font-display text-dark-text-primary hover:text-primary-500 transition-colors relative group"
            >
              <span className="relative inline-block">
                Sathis
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-body font-medium transition-colors relative',
                    isActiveLink(link.href, link.exact)
                      ? 'text-primary-500 font-semibold'
                      : 'text-dark-text-secondary hover:text-dark-text-primary'
                  )}
                  aria-current={isActiveLink(link.href, link.exact) ? 'page' : undefined}
                >
                  {link.label}
                  {isActiveLink(link.href, link.exact) && (
                    <motion.span
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-500"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Command Palette Trigger */}
              <button
                onClick={openCommandPalette}
                className="flex items-center gap-2 px-3 py-1.5 text-sm text-dark-text-tertiary hover:text-dark-text-primary bg-dark-bg-tertiary/40 hover:bg-dark-bg-tertiary/60 border border-dark-border-subtle rounded-lg transition-all group"
                aria-label="Open command palette"
              >
                <Search size={14} />
                <span className="hidden xl:inline">Search</span>
                <kbd className="hidden xl:flex items-center gap-0.5 px-1.5 py-0.5 text-xs bg-dark-bg-primary/50 border border-dark-border-subtle rounded">
                  <Command size={10} />
                  <span>K</span>
                </kbd>
              </button>

              <Badge variant="success" size="sm" pulse>
                Available
              </Badge>
              <Button
                variant="primary"
                size="sm"
                icon="Download"
                href="/cv.pdf"
              >
                CV
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-dark-text-secondary hover:text-dark-text-primary transition-colors"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </Container>

        {/* Progress bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-primary-500"
          style={{
            width: `${scrollProgress}%`,
            transformOrigin: '0%',
          }}
        />
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden bg-dark-bg-primary/95 backdrop-blur-md"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="flex flex-col items-center justify-center min-h-screen px-4 py-24">
              <motion.nav
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex flex-col items-center gap-6"
                onClick={(e) => e.stopPropagation()}
              >
                {NAV_LINKS.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        'text-3xl font-bold transition-colors',
                        isActiveLink(link.href, link.exact)
                          ? 'text-primary-500'
                          : 'text-dark-text-primary hover:text-primary-500'
                      )}
                      aria-current={isActiveLink(link.href, link.exact) ? 'page' : undefined}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + NAV_LINKS.length * 0.05 }}
                  className="mt-8 flex flex-col items-center gap-4"
                >
                  <Badge variant="success" size="md" pulse>
                    Available for Projects
                  </Badge>
                  <Button
                    variant="primary"
                    size="lg"
                    icon="Mail"
                    href="/contact"
                  >
                    Request CV
                  </Button>
                </motion.div>
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

