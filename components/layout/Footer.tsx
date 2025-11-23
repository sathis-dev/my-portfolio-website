'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Github, Linkedin, Mail, Download, MapPin, ArrowUp, Heart } from 'lucide-react'

const footerLinks = {
  quickLinks: [
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Skills', href: '/skills' },
    { label: 'Experience', href: '/experience' },
    { label: 'Contact', href: '/contact' }
  ],
  
  connect: [
    { label: 'GitHub', href: 'https://github.com/yourusername', icon: Github },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername', icon: Linkedin },
    { label: 'Email', href: 'mailto:your@email.com', icon: Mail },
    { label: 'Download CV', href: '/cv.pdf', icon: Download }
  ]
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative pt-24 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Main Footer Content */}
        <div 
          className="rounded-3xl p-8 sm:p-12 mb-8"
          style={{
            background: 'rgba(10, 5, 15, 0.5)',
            backdropFilter: 'blur(20px) saturate(90%)',
            border: '1px solid rgba(199, 21, 133, 0.3)',
            boxShadow: `
              0 8px 32px rgba(0, 0, 0, 0.4),
              inset 0 1px 0 rgba(255, 255, 255, 0.15),
              0 0 0 1px rgba(199, 21, 133, 0.2)
            `,
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Branding Column */}
            <div>
              <Link 
                href="/"
                data-cursor="link"
                data-cursor-text="Home"
              >
                <div className="flex items-center gap-2 text-2xl font-bold text-white mb-4 hover:opacity-80 transition-opacity">
                  <span style={{ color: '#E91E8C' }}>&lt;/</span>
                  <span>SATHIS</span>
                  <span style={{ color: '#E91E8C' }}>&gt;</span>
                </div>
              </Link>
              <p 
                className="text-[0.9375rem] mb-4 leading-relaxed"
                style={{ color: 'rgba(255, 255, 255, 0.7)' }}
              >
                Frontend Developer & AI Integration Specialist
              </p>
              <div 
                className="flex items-center gap-2 text-sm"
                style={{ color: 'rgba(255, 255, 255, 0.6)' }}
              >
                <MapPin size={16} />
                <span>Cambridge, UK</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 
                className="text-lg font-semibold text-white mb-6"
                style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)' }}
              >
                Quick Links
              </h3>
              <ul className="flex flex-col gap-3.5">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      data-cursor="link"
                      data-cursor-text={link.label}
                      className="text-[0.9375rem] transition-all duration-300 hover:translate-x-1 inline-block"
                      style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#FFFFFF'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 
                className="text-lg font-semibold text-white mb-6"
                style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)' }}
              >
                Connect
              </h3>
              <ul className="flex flex-col gap-3.5">
                {footerLinks.connect.map((link) => {
                  const Icon = link.icon
                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        data-cursor="link"
                        data-cursor-text={link.label}
                        className="flex items-center gap-3 text-[0.9375rem] transition-all duration-300 group"
                        style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = '#FFFFFF'
                          const icon = e.currentTarget.querySelector('svg')
                          if (icon) (icon as SVGSVGElement).style.color = '#E91E8C'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'
                          const icon = e.currentTarget.querySelector('svg')
                          if (icon) (icon as SVGSVGElement).style.color = 'rgba(255, 255, 255, 0.7)'
                        }}
                      >
                        <Icon 
                          size={20} 
                          style={{ color: 'rgba(255, 255, 255, 0.7)', transition: 'color 0.3s' }}
                        />
                        {link.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Newsletter/Updates */}
            <div>
              <h3 
                className="text-lg font-semibold text-white mb-6"
                style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)' }}
              >
                Stay Updated
              </h3>
              <p 
                className="text-[0.9375rem] mb-4 leading-relaxed"
                style={{ color: 'rgba(255, 255, 255, 0.7)' }}
              >
                Get notified about new projects and blog posts.
              </p>
              <p 
                className="text-sm italic"
                style={{ color: 'rgba(255, 255, 255, 0.5)' }}
              >
                Coming soon...
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 px-4">
          {/* Copyright */}
          <p 
            className="text-sm text-center sm:text-left"
            style={{ color: 'rgba(255, 255, 255, 0.5)' }}
          >
            © {new Date().getFullYear()} Sathis Ravishka Hettiarachchi. All rights reserved.
          </p>

          {/* Tech Stack */}
          <div 
            className="flex items-center gap-2 text-sm"
            style={{ color: 'rgba(255, 255, 255, 0.5)' }}
          >
            <span>Built with Next.js, TypeScript & Tailwind CSS</span>
            <Heart size={14} fill="currentColor" style={{ color: '#E91E8C' }} />
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            data-cursor="button"
            data-cursor-text="Back to Top"
            className="flex items-center gap-2 text-sm font-medium transition-all duration-300"
            style={{ color: 'rgba(255, 255, 255, 0.7)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#FFFFFF'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'
            }}
          >
            Back to Top
            <ArrowUp size={16} />
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center gap-2 mt-8">
          <span 
            className="text-xs uppercase tracking-wider font-medium"
            style={{ color: 'rgba(255, 255, 255, 0.4)' }}
          >
            Scroll Up
          </span>
          <motion.div
            animate={{
              y: [-4, 4, -4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <ArrowUp size={20} style={{ color: 'rgba(199, 21, 133, 0.6)' }} />
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

