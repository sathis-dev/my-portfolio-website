'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Star } from 'lucide-react'

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
        /* ReactBits.dev Exact Header Styles */
        .reactbits-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          height: 72px;
          background: rgba(10, 10, 15, 0.6);
          backdrop-filter: blur(20px) saturate(100%);
          -webkit-backdrop-filter: blur(20px) saturate(100%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          transition: all 0.3s ease;
        }

        .reactbits-header.scrolled {
          background: rgba(10, 10, 15, 0.95);
          border-bottom-color: rgba(255, 255, 255, 0.08);
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
        }

        .reactbits-container {
          max-width: 1400px;
          margin: 0 auto;
          height: 100%;
          padding: 0 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* Logo - Keep Original */
        .reactbits-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          transition: opacity 0.2s ease;
        }

        .reactbits-logo:hover {
          opacity: 0.9;
        }

        .reactbits-logo-bracket {
          font-family: 'JetBrains Mono', 'Fira Code', monospace;
          font-size: 1.125rem;
          font-weight: 500;
          color: #8B5CF6;
        }

        .reactbits-logo-text {
          font-family: 'Space Grotesk', 'Inter', system-ui, sans-serif;
          font-size: 1.125rem;
          font-weight: 600;
          letter-spacing: -0.01em;
          color: #FFFFFF;
        }

        /* Navigation - Simple Inline Links (ReactBits Style) */
        .reactbits-nav {
          display: flex;
          align-items: center;
          gap: 32px;
          margin-left: 48px;
        }

        .reactbits-nav-link {
          position: relative;
          font-size: 0.9375rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color 0.2s ease;
          padding: 8px 0;
        }

        .reactbits-nav-link:hover {
          color: #FFFFFF;
        }

        .reactbits-nav-link.active {
          color: #FFFFFF;
          font-weight: 600;
          padding-left: 16px;
        }

        .reactbits-nav-link.active::before {
          content: '•';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          color: #8B5CF6;
          font-size: 1.2rem;
          line-height: 0;
        }

        /* CTA Buttons */
        .reactbits-cta {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .reactbits-btn-primary {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 24px;
          border-radius: 12px;
          background: linear-gradient(135deg, #7C3AED 0%, #A855F7 100%);
          color: #FFFFFF;
          font-size: 0.875rem;
          font-weight: 600;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 16px rgba(124, 58, 237, 0.3);
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .reactbits-btn-primary:hover {
          background: linear-gradient(135deg, #8B5CF6 0%, #C084FC 100%);
          box-shadow: 0 6px 24px rgba(124, 58, 237, 0.5);
          transform: translateY(-1px);
        }

        .reactbits-btn-github {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #FFFFFF;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .reactbits-btn-github:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.15);
        }

        .github-star-icon {
          color: #FFD700;
        }

        /* Mobile Styles */
        .mobile-menu-button {
          display: none;
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .mobile-menu-button:hover {
          background: rgba(255, 255, 255, 0.12);
        }

        .hamburger-icon {
          display: flex;
          flex-direction: column;
          gap: 5px;
          width: 20px;
        }

        .hamburger-icon span {
          height: 2px;
          background: #FFFFFF;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .hamburger-icon.open span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .hamburger-icon.open span:nth-child(2) {
          opacity: 0;
        }

        .hamburger-icon.open span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        .mobile-menu-overlay {
          position: fixed;
          top: 72px;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(10, 10, 15, 0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          z-index: 999;
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          animation: fadeSlideIn 0.3s ease-out;
        }

        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mobile-nav-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .mobile-nav-item {
          animation: slideInFromLeft 0.3s ease-out both;
        }

        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.85);
          font-size: 1.125rem;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .mobile-nav-link:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.12);
        }

        .mobile-nav-link.active {
          background: rgba(139, 92, 246, 0.15);
          border-color: rgba(139, 92, 246, 0.3);
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

        .mobile-cv-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px 24px;
          border-radius: 14px;
          background: linear-gradient(135deg, #7C3AED 0%, #A855F7 100%);
          color: #FFFFFF;
          font-size: 1rem;
          font-weight: 600;
          border: none;
          box-shadow: 0 4px 16px rgba(124, 58, 237, 0.3);
          text-decoration: none;
          cursor: pointer;
        }

        .mobile-cv-button:active {
          transform: scale(0.98);
        }

        @media (max-width: 1023px) {
          .reactbits-nav,
          .reactbits-cta {
            display: none;
          }

          .mobile-menu-button {
            display: flex;
          }

          .reactbits-container {
            padding: 0 20px;
          }
        }
      `}</style>

      {/* ReactBits Header - Hidden on homepage desktop (integrated in hero) */}
      <header className={`reactbits-header ${isScrolled ? 'scrolled' : ''} ${pathname === '/' ? 'lg:hidden' : ''}`}>
        <div className="reactbits-container">
          {/* Logo - Keep Original */}
          <Link href="/" className="reactbits-logo">
            <span className="reactbits-logo-bracket">&lt;</span>
            <span className="reactbits-logo-text">SATHIS</span>
            <span className="reactbits-logo-bracket">/&gt;</span>
          </Link>

          {/* Navigation - ReactBits Style (Simple Inline Links) */}
          <nav className="reactbits-nav">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`reactbits-nav-link ${pathname === item.href ? 'active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons - ReactBits Style */}
          <div className="reactbits-cta">
            <Link href="/contact" className="reactbits-btn-primary">
              Let&apos;s Talk
            </Link>
            <a 
              href="https://github.com/sathis-dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="reactbits-btn-github"
            >
              <Star size={16} className="github-star-icon" fill="#FFD700" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay">
          <ul className="mobile-nav-list">
            {navigation.map((item, index) => (
              <li 
                key={item.name}
                className="mobile-nav-item"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
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
