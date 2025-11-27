import React, { useState, useEffect } from 'react';

/**
 * Enhanced Header Component
 * Inspired by ReactBits.dev aesthetic
 * 
 * Features:
 * - Desktop: Pill-shaped navigation container with glassmorphism
 * - Mobile: Lighter theme with improved visibility and professional slide-out menu
 * - Smooth animations and hover effects
 * - Responsive breakpoint at 1024px
 */

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <style jsx global>{`
        /* ========================================
           CSS VARIABLES - Design System Tokens
        ======================================== */
        :root {
          /* Colors - Accents */
          --color-purple: #A855F7;
          --color-purple-light: #C084FC;
          --color-pink: #EC4899;
          --color-pink-light: #F472B6;
          --color-cyan: #06B6D4;
          --color-green: #10B981;
          
          /* Colors - Backgrounds */
          --bg-primary: #0A0A0F;
          --bg-secondary: #12121A;
          --bg-header: rgba(10, 10, 15, 0.85);
          --bg-nav-pill: rgba(30, 30, 42, 0.9);
          
          /* Colors - Mobile (Lighter) */
          --bg-mobile-primary: #1C1C28;
          --bg-mobile-header: rgba(28, 28, 40, 0.95);
          --bg-mobile-menu: rgba(28, 28, 40, 0.98);
          
          /* Colors - Text */
          --text-primary: #FFFFFF;
          --text-secondary: rgba(255, 255, 255, 0.85);
          --text-tertiary: rgba(255, 255, 255, 0.6);
          --text-nav: rgba(255, 255, 255, 0.7);
          
          /* Borders */
          --border-subtle: rgba(255, 255, 255, 0.08);
          --border-light: rgba(255, 255, 255, 0.12);
          
          /* Gradients */
          --gradient-primary: linear-gradient(135deg, #A855F7 0%, #EC4899 100%);
          --gradient-text: linear-gradient(135deg, #EC4899 0%, #A855F7 50%, #C084FC 100%);
          
          /* Shadows */
          --shadow-header: 0 4px 30px rgba(0, 0, 0, 0.3);
          --shadow-nav: 0 4px 20px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.05);
          --shadow-button: 0 4px 15px rgba(168, 85, 247, 0.3);
          --shadow-button-hover: 0 6px 25px rgba(168, 85, 247, 0.5);
          
          /* Sizing */
          --header-height-desktop: 72px;
          --header-height-mobile: 64px;
          --radius-pill: 50px;
          --radius-button: 12px;
          --radius-card: 14px;
        }

        /* ========================================
           KEYFRAME ANIMATIONS
        ======================================== */
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

        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: translateY(-10px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        @keyframes slideInFromRight {
          from { 
            opacity: 0; 
            transform: translateX(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }

        @keyframes menuItemSlide {
          from { 
            opacity: 0; 
            transform: translateX(-20px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }

        /* ========================================
           HEADER BASE STYLES
        ======================================== */
        .enhanced-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.3s ease;
        }

        /* Desktop Header */
        .enhanced-header.desktop {
          height: var(--header-height-desktop);
          background: var(--bg-header);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border-bottom: 1px solid var(--border-subtle);
        }

        .enhanced-header.desktop.scrolled {
          box-shadow: var(--shadow-header);
          background: rgba(10, 10, 15, 0.95);
        }

        /* Mobile Header */
        .enhanced-header.mobile {
          height: var(--header-height-mobile);
          background: var(--bg-mobile-header);
          backdrop-filter: blur(16px) saturate(150%);
          -webkit-backdrop-filter: blur(16px) saturate(150%);
          border-bottom: 1px solid var(--border-light);
        }

        .enhanced-header.mobile.scrolled {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
        }

        /* ========================================
           HEADER INNER CONTAINER
        ======================================== */
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

        /* ========================================
           LOGO STYLES
        ======================================== */
        .logo {
          display: flex;
          align-items: center;
          gap: 2px;
          font-family: 'Space Grotesk', 'Inter', system-ui, sans-serif;
          font-weight: 600;
          color: var(--text-primary);
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
          color: var(--color-purple);
          font-weight: 500;
        }

        .logo-text {
          background: var(--gradient-text);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: 0.02em;
        }

        /* ========================================
           DESKTOP NAVIGATION PILL CONTAINER
        ======================================== */
        .nav-pill-container {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 6px;
          background: var(--bg-nav-pill);
          border-radius: var(--radius-pill);
          border: 1px solid var(--border-subtle);
          box-shadow: var(--shadow-nav);
        }

        .nav-item {
          position: relative;
          padding: 10px 18px;
          border-radius: var(--radius-pill);
          font-size: 0.9rem;
          font-weight: 500;
          font-family: 'Inter', system-ui, sans-serif;
          color: var(--text-nav);
          background: transparent;
          border: none;
          cursor: pointer;
          transition: all 0.25s ease;
          text-decoration: none;
          white-space: nowrap;
        }

        .nav-item:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.08);
        }

        .nav-item.active {
          color: var(--text-primary);
          background: rgba(168, 85, 247, 0.2);
          box-shadow: inset 0 0 0 1px rgba(168, 85, 247, 0.3);
        }

        /* Active indicator dot */
        .nav-item.active::before {
          content: '';
          position: absolute;
          left: 10px;
          top: 50%;
          transform: translateY(-50%);
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--color-purple);
          box-shadow: 0 0 8px rgba(168, 85, 247, 0.6);
        }

        .nav-item.active {
          padding-left: 24px;
        }

        /* ========================================
           RIGHT SECTION - DESKTOP
        ======================================== */
        .header-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        /* Availability Badge */
        .availability-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: var(--radius-pill);
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.25);
          font-size: 0.8rem;
          font-weight: 500;
          font-family: 'Inter', system-ui, sans-serif;
          color: var(--color-green);
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
          background: var(--color-green);
          animation: pulseGlow 2s ease-in-out infinite;
        }

        /* CV Button */
        .cv-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: var(--radius-button);
          background: var(--gradient-primary);
          color: var(--text-primary);
          font-size: 0.875rem;
          font-weight: 600;
          font-family: 'Inter', system-ui, sans-serif;
          border: none;
          cursor: pointer;
          box-shadow: var(--shadow-button);
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .cv-button:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-button-hover);
        }

        .cv-button:active {
          transform: translateY(0);
        }

        .cv-button svg {
          width: 16px;
          height: 16px;
        }

        /* ========================================
           MOBILE MENU BUTTON
        ======================================== */
        .menu-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: var(--radius-button);
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid var(--border-light);
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .menu-button:hover {
          background: rgba(255, 255, 255, 0.12);
        }

        .menu-button:active {
          transform: scale(0.95);
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
          background: var(--text-primary);
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

        /* ========================================
           MOBILE MENU OVERLAY
        ======================================== */
        .mobile-menu-overlay {
          position: fixed;
          top: var(--header-height-mobile);
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--bg-mobile-menu);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          z-index: 999;
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          animation: fadeIn 0.3s ease-out;
          overflow-y: auto;
        }

        .mobile-menu-overlay.hidden {
          display: none;
        }

        /* Mobile Navigation Items */
        .mobile-nav-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .mobile-nav-item {
          animation: menuItemSlide 0.3s ease-out forwards;
          opacity: 0;
        }

        .mobile-nav-item:nth-child(1) { animation-delay: 0.05s; }
        .mobile-nav-item:nth-child(2) { animation-delay: 0.1s; }
        .mobile-nav-item:nth-child(3) { animation-delay: 0.15s; }
        .mobile-nav-item:nth-child(4) { animation-delay: 0.2s; }
        .mobile-nav-item:nth-child(5) { animation-delay: 0.25s; }
        .mobile-nav-item:nth-child(6) { animation-delay: 0.3s; }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          border-radius: var(--radius-card);
          font-size: 1.125rem;
          font-weight: 500;
          font-family: 'Inter', system-ui, sans-serif;
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-subtle);
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .mobile-nav-link:hover,
        .mobile-nav-link:active {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--border-light);
        }

        .mobile-nav-link.active {
          background: rgba(168, 85, 247, 0.15);
          border-color: rgba(168, 85, 247, 0.3);
          color: var(--text-primary);
        }

        .mobile-nav-link svg {
          width: 20px;
          height: 20px;
          opacity: 0.5;
        }

        .mobile-nav-link.active svg {
          opacity: 1;
          color: var(--color-purple);
        }

        /* Mobile CTA Section */
        .mobile-cta-section {
          margin-top: auto;
          padding-top: 24px;
          border-top: 1px solid var(--border-subtle);
          display: flex;
          flex-direction: column;
          gap: 12px;
          animation: fadeIn 0.4s ease-out 0.35s forwards;
          opacity: 0;
        }

        .mobile-availability {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 20px;
          border-radius: var(--radius-card);
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.2);
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--color-green);
        }

        .mobile-cv-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px 24px;
          border-radius: var(--radius-card);
          background: var(--gradient-primary);
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 600;
          font-family: 'Inter', system-ui, sans-serif;
          border: none;
          cursor: pointer;
          box-shadow: var(--shadow-button);
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .mobile-cv-button:active {
          transform: scale(0.98);
        }

        .mobile-cv-button svg {
          width: 18px;
          height: 18px;
        }

        /* ========================================
           RESPONSIVE UTILITIES
        ======================================== */
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

        /* ========================================
           MOBILE BODY BACKGROUND ENHANCEMENT
           Add this to your global styles for mobile
        ======================================== */
        @media (max-width: 1023px) {
          body {
            /* Lighter background for mobile */
            background: var(--bg-mobile-primary) !important;
          }
          
          /* Increase hero aurora visibility on mobile */
          .hero-aurora,
          [class*="aurora"],
          [class*="gradient-bg"] {
            opacity: 1.2;
            filter: brightness(1.3);
          }
        }
      `}</style>

      {/* Desktop Header */}
      <header className={`enhanced-header desktop desktop-only ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container desktop">
          {/* Logo */}
          <a href="#home" className="logo desktop">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-text">SATHIS</span>
            <span className="logo-bracket">/&gt;</span>
          </a>

          {/* Navigation Pill Container */}
          <nav className="nav-pill-container">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`nav-item ${activeSection === item.name ? 'active' : ''}`}
                onClick={() => setActiveSection(item.name)}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Section */}
          <div className="header-right">
            <div className="availability-badge">
              <span className="availability-dot"></span>
              <span>Available for Projects</span>
            </div>
            <a href="#" className="cv-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
          <a href="#home" className="logo mobile">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-text">SATHIS</span>
            <span className="logo-bracket">/&gt;</span>
          </a>

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
      <div className={`mobile-menu-overlay mobile-only ${!isMenuOpen ? 'hidden' : ''}`}>
        <ul className="mobile-nav-list">
          {navItems.map((item) => (
            <li key={item.name} className="mobile-nav-item">
              <a
                href={item.href}
                className={`mobile-nav-link ${activeSection === item.name ? 'active' : ''}`}
                onClick={() => {
                  setActiveSection(item.name);
                  setIsMenuOpen(false);
                }}
              >
                <span>{item.name}</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-cta-section">
          <div className="mobile-availability">
            <span className="availability-dot"></span>
            <span>Available for Projects</span>
          </div>
          <a href="#" className="mobile-cv-button" onClick={() => setIsMenuOpen(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
