'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Section {
  id: string
  name: string
  position: number
}

export default function SectionNavigator() {
  const [sections, setSections] = useState<Section[]>([])
  const [activeSection, setActiveSection] = useState<string>('')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Detect all major sections
    const detectSections = () => {
      const sectionElements = document.querySelectorAll('[data-section]')
      const detectedSections: Section[] = []

      sectionElements.forEach((el) => {
        const id = el.getAttribute('data-section') || ''
        const name = el.getAttribute('data-section-name') || id
        const position = el.getBoundingClientRect().top + window.scrollY

        detectedSections.push({ id, name, position })
      })

      setSections(detectedSections)
    }

    detectSections()
    window.addEventListener('resize', detectSections)

    return () => window.removeEventListener('resize', detectSections)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      // Find active section
      const active = sections.reduce((prev, curr) => {
        return Math.abs(curr.position - scrollPosition) < Math.abs(prev.position - scrollPosition)
          ? curr
          : prev
      }, sections[0])

      if (active) {
        setActiveSection(active.id)
      }

      // Show navigator when not at top
      setIsVisible(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections])

  const navigateToSection = (sectionId: string) => {
    const section = sections.find(s => s.id === sectionId)
    if (section) {
      window.scrollTo({
        top: section.position - 100,
        behavior: 'smooth'
      })
    }
  }

  return (
    <AnimatePresence>
      {isVisible && sections.length > 0 && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          className="fixed right-8 top-1/2 -translate-y-1/2 z-[999] flex flex-col gap-3"
        >
          {sections.map((section) => (
            <motion.button
              key={section.id}
              onClick={() => navigateToSection(section.id)}
              className="group relative"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              data-cursor="button"
              data-cursor-text={section.name}
            >
              {/* Dot */}
              <div
                className="w-3 h-3 rounded-full transition-all duration-300"
                style={{
                  background: activeSection === section.id
                    ? 'linear-gradient(135deg, #C71585 0%, #8B5CF6 100%)'
                    : 'rgba(199, 21, 133, 0.3)',
                  boxShadow: activeSection === section.id
                    ? '0 0 10px rgba(199, 21, 133, 0.5)'
                    : 'none',
                }}
              />

              {/* Tooltip */}
              <div
                className="absolute right-6 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                style={{
                  background: 'rgba(10, 5, 15, 0.9)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(199, 21, 133, 0.3)',
                  color: '#FFFFFF',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                }}
              >
                {section.name}
              </div>
            </motion.button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

