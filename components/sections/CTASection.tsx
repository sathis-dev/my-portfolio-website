'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Mail } from 'lucide-react'
import Link from 'next/link'

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section 
      ref={ref}
      className="relative py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="rounded-[32px] p-12 sm:p-16 text-center"
          style={{
            background: 'rgba(10, 5, 15, 0.5)',
            backdropFilter: 'blur(20px) saturate(90%)',
            border: '1px solid rgba(199, 21, 133, 0.3)',
            boxShadow: `
              0 16px 64px rgba(0, 0, 0, 0.4),
              inset 0 1px 0 rgba(255, 255, 255, 0.15),
              0 0 0 1px rgba(199, 21, 133, 0.2)
            `,
          }}
          data-cursor="hover"
          data-cursor-text="Let's Connect"
        >
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6"
            style={{
              letterSpacing: '-0.02em',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
            }}
          >
            Let&apos;s Work Together
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg max-w-[700px] mx-auto mb-10 leading-relaxed"
            style={{
              color: 'rgba(255, 255, 255, 0.85)',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
            }}
          >
            I&apos;m currently available for freelance projects and collaborations. Let&apos;s create something amazing together.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Primary CTA */}
            <Link href="/contact">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                data-cursor="button"
                data-cursor-text="Contact Me"
                className="flex items-center gap-2 px-10 py-4 rounded-2xl text-base font-semibold text-white transition-all duration-300 w-full sm:w-auto"
                style={{
                  background: 'linear-gradient(135deg, #C71585 0%, #8B5CF6 50%, #7C3AED 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 8px 24px rgba(199, 21, 133, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(199, 21, 133, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(199, 21, 133, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }}
              >
                Get In Touch
                <ArrowRight size={20} />
              </motion.button>
            </Link>

            {/* Secondary CTA */}
            <Link href="/contact">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                data-cursor="button"
                data-cursor-text="Get in Touch"
                className="flex items-center gap-2 px-10 py-4 rounded-2xl text-base font-semibold text-white transition-all duration-300 w-full sm:w-auto"
                style={{
                  background: 'rgba(10, 5, 15, 0.6)',
                  border: '2px solid rgba(199, 21, 133, 0.4)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(10, 5, 15, 0.8)'
                  e.currentTarget.style.borderColor = 'rgba(199, 21, 133, 0.6)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(10, 5, 15, 0.6)'
                  e.currentTarget.style.borderColor = 'rgba(199, 21, 133, 0.4)'
                }}
              >
                Get in Touch
                <Mail size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

