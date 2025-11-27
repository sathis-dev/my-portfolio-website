'use client'

import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, Download, Star } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Meteors } from '@/components/ui/meteors'
import { Sparkles as SparklesEffect } from '@/components/ui/sparkles'
import { BlurFade } from '@/components/ui/blur-fade'
import { Ripple } from '@/components/ui/ripple'
import { DecryptedText } from '@/components/ui/decrypted-text'
import { LogoLoop } from '@/components/ui/logo-loop'
import StatsSection from './StatsSection'
import WhatIDoSection from './WhatIDoSection'
import SelectedWorkSection from './SelectedWorkSection'
import SmartScrollIndicator from '@/components/ui/SmartScrollIndicator'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Skills', href: '/skills' },
  { name: 'Experience', href: '/experience' },
  { name: 'Contact', href: '/contact' }
]

export default function HeroSection() {
  const pathname = usePathname()
  
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    projectsSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-[100svh] flex flex-col overflow-hidden pb-4 sm:pb-6 md:pb-8 lg:pb-10">
      {/* React Bits Radial Gradient Background */}
      <div className="absolute inset-0 z-0" style={{
        background: '#0A0A0F',
        backgroundImage: `
          radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.6) 0%, transparent 50%),
          radial-gradient(circle at 70% 40%, rgba(236, 72, 153, 0.5) 0%, transparent 50%),
          radial-gradient(circle at 30% 80%, rgba(6, 182, 212, 0.4) 0%, transparent 50%)
        `
      }} />

      {/* Floating Organic Shapes */}
      <div className="absolute inset-0 z-1 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute"
          style={{
            width: '400px',
            height: '400px',
            background: 'linear-gradient(135deg, #A78BFA 0%, #EC4899 100%)',
            filter: 'blur(80px)',
            opacity: 0.8,
            top: '10%',
            left: '10%',
            borderRadius: '50%'
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute"
          style={{
            width: '300px',
            height: '300px',
            background: 'linear-gradient(135deg, #22D3EE 0%, #8B5CF6 100%)',
            filter: 'blur(80px)',
            opacity: 0.8,
            top: '50%',
            right: '15%',
            borderRadius: '50%'
          }}
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute"
          style={{
            width: '250px',
            height: '250px',
            background: 'linear-gradient(135deg, #F472B6 0%, #A78BFA 100%)',
            filter: 'blur(80px)',
            opacity: 0.8,
            bottom: '20%',
            left: '20%',
            borderRadius: '50%'
          }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 3, 0]
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </div>

      {/* Integrated Header (React Bits Style) */}
      <header className="absolute top-0 left-0 right-0 z-50 hidden lg:block">
        <div className="max-w-[1400px] mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-xl font-bold text-white">
                <span className="text-violet-400 opacity-70">&lt;</span>
                SATHIS
                <span className="text-violet-400 opacity-70">/&gt;</span>
              </span>
            </Link>

            {/* Navigation Pill */}
            <nav 
              className="flex items-center gap-1 px-2 py-2 rounded-full"
              style={{
                background: 'rgba(26, 26, 36, 0.4)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(139, 92, 246, 0.2)'
              }}
            >
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-5 py-2.5 rounded-full text-[0.9375rem] font-medium transition-all duration-200"
                  style={{
                    color: pathname === item.href ? '#FFFFFF' : '#A3A3B3',
                    background: pathname === item.href ? '#8B5CF6' : 'transparent'
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl text-[0.9375rem] font-semibold text-white transition-all duration-200"
                style={{
                  background: '#8B5CF6',
                  boxShadow: '0 4px 20px rgba(139, 92, 246, 0.4)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#7C3AED'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 6px 24px rgba(139, 92, 246, 0.5)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#8B5CF6'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(139, 92, 246, 0.4)'
                }}
              >
                Let&apos;s Talk
              </Link>
              <a
                href="https://github.com/sathis-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-[0.9375rem] font-semibold text-white transition-all duration-200"
                style={{
                  background: 'rgba(0, 0, 0, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)'
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 0, 0, 0.6)'
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                }}
              >
                <Star size={18} className="text-white" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 sm:px-6 lg:px-8 pt-24 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-36 pb-8">
        <div className="max-w-6xl mx-auto text-center w-full">
        {/* Availability Badge with Sparkles */}
        <BlurFade delay={0.2} inView={true}>
          <SparklesEffect hoverable={true} sparkleCount={8}>
            <div className="inline-flex items-center gap-2 mb-6 sm:mb-6 md:mb-7">
              <div
                className="flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full"
                style={{
                  background: 'rgba(16, 185, 129, 0.08)',
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 4px 16px rgba(16, 185, 129, 0.1)',
                }}
              >
                <Sparkles size={12} className="sm:w-3.5 sm:h-3.5 text-green-500" />
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-green-500"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  style={{
                    boxShadow: '0 0 10px rgba(16, 185, 129, 0.5)',
                  }}
                />
                <span className="text-xs sm:text-sm font-medium text-green-500">
                  Available for Frontend & AI Projects
                </span>
              </div>
            </div>
          </SparklesEffect>
        </BlurFade>

        {/* Heading with Advanced Shimmer Animation */}
        <style jsx>{`
          @keyframes gradientShimmer {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          .shimmer-text {
            background: linear-gradient(
              90deg,
              #EC4899 0%,
              #A855F7 20%,
              #C084FC 40%,
              #FFFFFF 50%,
              #C084FC 60%,
              #A855F7 80%,
              #EC4899 100%
            );
            background-size: 200% auto;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: gradientShimmer 3s linear infinite;
          }

          .shimmer-glow {
            position: absolute;
            inset: 0;
            background: linear-gradient(
              90deg,
              #EC4899 0%,
              #A855F7 20%,
              #C084FC 40%,
              #FFFFFF 50%,
              #C084FC 60%,
              #A855F7 80%,
              #EC4899 100%
            );
            background-size: 200% auto;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: gradientShimmer 3s linear infinite;
            filter: blur(40px);
            opacity: 0.6;
            z-index: -1;
          }
        `}</style>
        
        <div className="mb-5 sm:mb-5 md:mb-6">
          <BlurFade delay={0.4} inView={true}>
            <h1
              className="shimmer-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold mb-2 sm:mb-2 relative"
              style={{
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                fontFamily: "'Space Grotesk', 'Inter', sans-serif",
              }}
            >
              Sathis Ravishka
              <span className="shimmer-glow" aria-hidden="true">
                Sathis Ravishka
              </span>
            </h1>
          </BlurFade>

          <BlurFade delay={0.6} inView={true}>
            <h1
              className="shimmer-text block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold relative"
              style={{
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                fontFamily: "'Space Grotesk', 'Inter', sans-serif",
              }}
            >
              Hettiarachchi
              <span className="shimmer-glow" aria-hidden="true">
                Hettiarachchi
              </span>
            </h1>
          </BlurFade>
        </div>

        {/* Subtitle */}
        <BlurFade delay={0.8} inView={true}>
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold text-white/90 mb-4 sm:mb-4 md:mb-5">
            Frontend Developer & AI Integration Specialist
          </h2>
        </BlurFade>

        {/* Description with Decrypted Text Effect */}
        <BlurFade delay={1} inView={true}>
          <div
            className="text-xs sm:text-sm md:text-base lg:text-lg text-white/60 max-w-2xl mx-auto mb-6 sm:mb-7 md:mb-8 lg:mb-10 leading-relaxed text-center px-4"
            style={{ minHeight: '2.5rem' }} // Prevent layout shift
          >
            <DecryptedText
              text="Building modern web experiences with Next.js, TypeScript, and AI-assisted workflows from Cambridge, UK"
              speed={80}
              interval={2000}
              className="text-xs sm:text-sm md:text-base leading-relaxed"
            />
          </div>
        </BlurFade>

        {/* CTA Buttons with Ripple Effect */}
        <BlurFade delay={1.2} inView={true}>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-3 md:gap-4 mb-8 sm:mb-8 md:mb-10 w-full max-w-md sm:max-w-none mx-auto">
          {/* Primary Button with Sparkles */}
          <SparklesEffect hoverable={true} className="w-full sm:w-auto">
            <Link href="/projects" className="w-full sm:w-auto block">
              <Ripple trigger="click" color="rgba(255, 255, 255, 0.3)">
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  data-cursor="button"
                  className="group relative w-full px-6 sm:px-6 md:px-7 lg:px-8 py-3.5 sm:py-3 md:py-3.5 rounded-xl sm:rounded-2xl text-sm sm:text-sm md:text-base font-semibold text-white overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #C71585 0%, #8B5CF6 50%, #7C3AED 100%)',
                    boxShadow: '0 8px 24px rgba(199, 21, 133, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #E91E8C 0%, #9D6EFF 50%, #8B5CF6 100%)'
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(199, 21, 133, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #C71585 0%, #8B5CF6 50%, #7C3AED 100%)'
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(199, 21, 133, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-2">
                    View Projects
                    <ArrowRight size={18} className="sm:w-[18px] sm:h-[18px] group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span
                    className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                    }}
                  />
                </motion.button>
              </Ripple>
            </Link>
          </SparklesEffect>

          {/* Secondary Button */}
          <motion.a
            href="/cv.pdf"
            download
            data-cursor="button"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ y: 0, scale: 0.98 }}
            className="flex items-center justify-center gap-2 sm:gap-2 px-6 sm:px-6 md:px-7 lg:px-8 py-3.5 sm:py-3 md:py-3.5 text-sm sm:text-sm md:text-base font-semibold text-white rounded-xl sm:rounded-2xl transition-all duration-300 w-full sm:w-auto"
            style={{
              background: 'linear-gradient(135deg, rgba(199, 21, 133, 0.15) 0%, rgba(139, 92, 246, 0.15) 50%, rgba(124, 58, 237, 0.15) 100%)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(199, 21, 133, 0.3)',
              boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 4px 16px rgba(199, 21, 133, 0.25)',
            }}
          >
            <Download size={18} className="sm:w-[18px] sm:h-[18px]" />
            Download CV
          </motion.a>
          </div>
        </BlurFade>

        </div>
      </div>

      {/* Enhanced Stats Section - Seamlessly Integrated */}
      <StatsSection />

      {/* What I Do Section - Seamlessly Integrated */}
      <WhatIDoSection />

      {/* Logo Loop - Tech Stack Showcase */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="relative z-10 w-full"
      >
        <LogoLoop />
      </motion.div>

      {/* Selected Work Section - Projects Showcase */}
      <SelectedWorkSection />

      {/* Smart Scroll Indicator - Detects Direction */}
      <SmartScrollIndicator />
    </section>
  )
}

