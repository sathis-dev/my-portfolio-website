'use client'

import { useState, useEffect } from 'react'
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
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <>
      <style jsx global>{`
        /* Enhanced Header Styles - ReactBits Inspired */
        .enhanced-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .enhanced-header.desktop {
          height: 72px;
          background: rgba(10, 10, 15, 0.85);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .enhanced-header.desktop.scrolled {
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
          background: rgba(10, 10, 15, 0.95);
        }

        .enhanced-header.mobile {
          height: 64px;
          background: rgba(28, 28, 40, 0.95);
          backdrop-filter: blur(16px) saturate(150%);
          -webkit-backdrop-filter: blur(16px) saturate(150%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        }

        .enhanced-header.mobile.scrolled {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
        }

        .header-container {
          max-width: 1400px;
          margin: 0 auto;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .header-container.desktop {
          padding: 0 48px;
        }

        .header-container.mobile {
          padding: 0 20px;
        }

        /* Logo */
        .logo {
          display: flex;
          align-items: center;
          gap: 2px;
          font-family: 'Space Grotesk', 'Inter', system-ui, sans-serif;
          font-weight: 600;
          color: #FFFFFF;
          text-decoration: none;
          transition: opacity 0.2s ease;
        }

        .logo:hover {
          opacity: 0.9;
        }

        .logo.desktop {
          font-size: 1.125rem;
        }

        .logo.mobile {
          font-size: 1rem;
        }

        .logo-bracket {
          font-family: 'JetBrains Mono', 'Fira Code', monospace;
          color: #A855F7;
          font-weight: 500;
        }

        .logo-text {
          background: linear-gradient(135deg, #EC4899 0%, #A855F7 50%, #C084FC 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: 0.02em;
        }

        /* Navigation Pill Container */
        .nav-pill-container {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 6px;
          background: rgba(30, 30, 42, 0.9);
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }

        .nav-item {
          position: relative;
          padding: 10px 18px;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 500;
          font-family: 'Inter', system-ui, sans-serif;
          color: rgba(255, 255, 255, 0.7);
          background: transparent;
          border: none;
          cursor: pointer;
          transition: all 0.25s ease;
          text-decoration: none;
          white-space: nowrap;
        }

        .nav-item:hover {
          color: #FFFFFF;
          background: rgba(255, 255, 255, 0.08);
        }

        .nav-item.active {
          color: #FFFFFF;
          background: rgba(168, 85, 247, 0.2);
          box-shadow: inset 0 0 0 1px rgba(168, 85, 247, 0.3);
          padding-left: 24px;
        }

        .nav-item.active::before {
          content: '';
          position: absolute;
          left: 10px;
          top: 50%;
          transform: translateY(-50%);
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #A855F7;
          box-shadow: 0 0 8px rgba(168, 85, 247, 0.6);
        }

        /* Availability Badge */
        .availability-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 50px;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.25);
          font-size: 0.8rem;
          font-weight: 500;
          color: #10B981;
          transition: all 0.3s ease;
        }

        .availability-badge:hover {
          background: rgba(16, 185, 129, 0.15);
          border-color: rgba(16, 185, 129, 0.4);
        }

        .availability-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10B981;
          animation: pulseGlow 2s ease-in-out infinite;
        }

        @keyframes pulseGlow {
          0%, 100% { 
            opacity: 1; 
            box-shadow: 0 0 8px rgba(16, 185, 129, 0.6);
          }
          50% { 
            opacity: 0.6; 
            box-shadow: 0 0 16px rgba(16, 185, 129, 0.8);
          }
        }

        /* CV Button */
        .cv-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 12px;
          background: linear-gradient(135deg, #A855F7 0%, #EC4899 100%);
          color: #FFFFFF;
          font-size: 0.875rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(168, 85, 247, 0.3);
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .cv-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 25px rgba(168, 85, 247, 0.5);
        }

        .cv-button:active {
          transform: translateY(0);
        }

        /* Mobile Menu */
        .menu-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .menu-button:hover {
          background: rgba(255, 255, 255, 0.12);
        }

        .menu-icon {
          display: flex;
          flex-direction: column;
          gap: 5px;
          width: 20px;
        }

        .menu-icon span {
          display: block;
          height: 2px;
          background: #FFFFFF;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .menu-icon.open span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .menu-icon.open span:nth-child(2) {
          opacity: 0;
        }

        .menu-icon.open span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        .mobile-menu-overlay {
          position: fixed;
          top: 64px;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(28, 28, 40, 0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          z-index: 999;
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
        }

        .mobile-nav-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          border-radius: 14px;
          font-size: 1.125rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.85);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .mobile-nav-link:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.12);
        }

        .mobile-nav-link.active {
          background: rgba(168, 85, 247, 0.15);
          border-color: rgba(168, 85, 247, 0.3);
          color: #FFFFFF;
        }

        .mobile-cta-section {
          margin-top: auto;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .mobile-availability {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 20px;
          border-radius: 14px;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.2);
          font-size: 0.9rem;
          font-weight: 500;
          color: #10B981;
        }

        .mobile-cv-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px 24px;
          border-radius: 14px;
          background: linear-gradient(135deg, #A855F7 0%, #EC4899 100%);
          color: #FFFFFF;
          font-size: 1rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(168, 85, 247, 0.3);
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .mobile-cv-button:active {
          transform: scale(0.98);
        }

        .desktop-only {
          display: none;
        }

        .mobile-only {
          display: flex;
        }

        @media (min-width: 1024px) {
          .desktop-only {
            display: flex;
          }
          .mobile-only {
            display: none;
          }
        }
      `}</style>

      {/* Desktop Header */}
      <header className={`enhanced-header desktop desktop-only ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container desktop">
          {/* Logo */}
          <Link href="/" className="logo desktop">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-text">SATHIS</span>
            <span className="logo-bracket">/&gt;</span>
          </Link>

          {/* Navigation Pill Container */}
          <nav className="nav-pill-container">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`nav-item ${pathname === item.href ? 'active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="header-right" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div className="availability-badge">
              <span className="availability-dot"></span>
              <span>Available for Projects</span>
            </div>
            <a href="/cv.pdf" download className="cv-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>CV</span>
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className={`enhanced-header mobile mobile-only ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container mobile">
          {/* Logo */}
          <Link href="/" className="logo mobile">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-text">SATHIS</span>
            <span className="logo-bracket">/&gt;</span>
          </Link>

          {/* Menu Button */}
          <button
            className="menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay mobile-only">
          <ul className="mobile-nav-list">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`mobile-nav-link ${pathname === item.href ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{item.name}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mobile-cta-section">
            <div className="mobile-availability">
              <span className="availability-dot"></span>
              <span>Available for Projects</span>
            </div>
            <a href="/cv.pdf" download className="mobile-cv-button" onClick={() => setIsMenuOpen(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Download CV</span>
            </a>
          </div>
        </div>
      )}
    </>
  )
}
