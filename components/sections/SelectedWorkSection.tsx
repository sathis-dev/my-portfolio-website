'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import TiltedCard from '@/components/ui/TiltedCard'

const projects = [
  {
    id: 'silent-help',
    title: 'Silent Help',
    slug: 'silent-help',
    categories: ['AI', 'Mental Health', 'Accessibility'],
    description: 'Silent Help is a compassionate mental-health platform I\'m building for people who feel stressed, overwhelmed or alone. The goal is to give users a calm, guided space with stress-level check-ins, breathing exercises, journaling and an AI-assisted chat that responds in a supportive, human way—not just with random answers.',
    features: [
      'Designing a soothing, high-end UI that still loads fast',
      'Building reusable Next.js + TypeScript components',
      'Integrating safe AI flows using Claude / ChatGPT style APIs',
      'Thinking about accessibility and emotional experience, not just features'
    ],
    techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Claude API'],
    image: '/images/projects/silent-help/Silent Help.jpg',
    featured: true,
    status: 'development' as const,
    statusLabel: 'In Active Development'
  },
  {
    id: 'brimston-energy',
    title: 'Brimston Energy Website',
    slug: 'brimston-energy',
    categories: ['WordPress', 'Web Design', 'SEO'],
    description: 'A complete redesign of Brimston Energy\'s marketing site using the Stax WordPress theme. I\'m restructuring page layouts, typography and content sections to make the site feel modern, trustworthy and easier to maintain. The focus is on clear storytelling for an energy company, better calls-to-action and solid performance.',
    features: [
      'Turning a generic theme into a clean, branded marketing site',
      'Improving navigation, readability and section hierarchy',
      'Tweaking CSS and JavaScript for better UX and responsiveness',
      'Preparing the structure so future blog and case-study content is easy to add'
    ],
    techStack: ['WordPress', 'Stax Theme', 'CSS', 'JavaScript', 'PHP'],
    image: '/images/projects/brimston/Brimstone Energy.png',
    featured: false,
    status: 'completed' as const,
    statusLabel: 'Completed'
  }
]

const statusColors = {
  development: {
    bg: 'rgba(16, 185, 129, 0.9)',
    color: '#FFFFFF'
  },
  planned: {
    bg: 'rgba(251, 191, 36, 0.9)',
    color: '#000000'
  },
  completed: {
    bg: 'rgba(59, 130, 246, 0.9)',
    color: '#FFFFFF'
  }
}

export default function SelectedWorkSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section 
      ref={ref}
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-14 md:mb-16"
        >
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 sm:mb-4"
            style={{
              letterSpacing: '-0.02em'
            }}
            data-cursor="hover"
            data-cursor-text="Projects"
          >
            Selected Work
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/65 max-w-[800px] mx-auto leading-relaxed px-4">
            Recent projects that showcase my capabilities
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 md:gap-8 max-w-[1000px] mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              <TiltedCard
                maxTilt={12}
                perspective={1000}
                scale={1.02}
                transitionSpeed={150}
                glareEnable={true}
                glareMaxOpacity={0.3}
                className="h-full"
              >
              <motion.article
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.4, 0, 0.2, 1]
                }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="flex flex-col rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-400"
              style={{
                background: 'rgba(10, 5, 15, 0.5)',
                backdropFilter: 'blur(20px) saturate(90%)',
                border: '1px solid rgba(199, 21, 133, 0.3)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 0 0 1px rgba(199, 21, 133, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(10, 5, 15, 0.7)'
                e.currentTarget.style.border = '1px solid rgba(199, 21, 133, 0.5)'
                e.currentTarget.style.boxShadow = '0 12px 48px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 0 0 1px rgba(199, 21, 133, 0.3), 0 0 80px rgba(199, 21, 133, 0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(10, 5, 15, 0.5)'
                e.currentTarget.style.border = '1px solid rgba(199, 21, 133, 0.3)'
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 0 0 1px rgba(199, 21, 133, 0.2)'
              }}
              data-cursor="hover"
              data-cursor-text="View Project"
            >
              {/* Project Image */}
              <div className="relative w-full aspect-video overflow-hidden"
                style={{
                  background: 'rgba(199, 21, 133, 0.08)',
                  borderBottom: '1px solid rgba(199, 21, 133, 0.15)'
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-400 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{
                    background: 'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.3) 100%)'
                  }}
                />

                {/* Featured Badge */}
                {project.featured && (
                  <div
                    className="absolute top-3 sm:top-4 left-3 sm:left-4 flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold"
                    style={{
                      background: 'rgba(139, 92, 246, 0.9)',
                      backdropFilter: 'blur(8px)',
                      color: '#FFFFFF',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)'
                    }}
                  >
                    <Star size={12} fill="currentColor" />
                    Featured
                  </div>
                )}

                {/* Status Badge */}
                <div
                  className="absolute top-3 sm:top-4 right-3 sm:right-4 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold"
                  style={{
                    background: statusColors[project.status].bg,
                    color: statusColors[project.status].color,
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  {project.statusLabel}
                </div>

                {/* View Project Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <div className="flex items-center gap-2 text-white text-sm sm:text-base font-semibold">
                    <span>View Project</span>
                    <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-6 sm:p-7 md:p-8">
                {/* Category Tags */}
                <div className="flex flex-wrap gap-2 mb-2 sm:mb-3">
                  {project.categories.map((category) => (
                    <span
                      key={category}
                      className="text-xs font-semibold uppercase tracking-wide"
                      style={{ color: '#E91E8C' }}
                    >
                      {category}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 leading-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-[0.9375rem] text-white/65 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-auto pt-5 sm:pt-6"
                  style={{ borderTop: '1px solid rgba(199, 21, 133, 0.1)' }}
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-3">
                    Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <motion.span
                        key={tech}
                        className="text-xs sm:text-[0.8125rem] font-medium px-2.5 sm:px-3 py-1.5 rounded-lg transition-all duration-300 cursor-pointer"
                        style={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          background: 'rgba(199, 21, 133, 0.08)',
                          border: '1px solid rgba(199, 21, 133, 0.15)',
                        }}
                        whileHover={{ y: -2 }}
                        data-cursor="link"
                        data-cursor-text={tech}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = '#FFFFFF'
                          e.currentTarget.style.background = 'rgba(199, 21, 133, 0.15)'
                          e.currentTarget.style.borderColor = 'rgba(199, 21, 133, 0.25)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'
                          e.currentTarget.style.background = 'rgba(199, 21, 133, 0.08)'
                          e.currentTarget.style.borderColor = 'rgba(199, 21, 133, 0.15)'
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* View Project Link */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="flex items-center gap-2 mt-5 sm:mt-6 text-sm sm:text-[0.9375rem] font-semibold transition-all duration-300 group/link"
                  style={{ color: '#E91E8C' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#FFFFFF'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#E91E8C'
                  }}
                >
                  View Project Details
                  <ArrowRight 
                    size={18} 
                    className="transition-transform duration-300 group-hover/link:translate-x-1"
                  />
                </Link>
              </div>
            </motion.article>
            </TiltedCard>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center mt-12 sm:mt-14 md:mt-16"
        >
          <Link href="/projects">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className="flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold text-white transition-all duration-400"
              style={{
                background: 'rgba(199, 21, 133, 0.1)',
                border: '1px solid rgba(199, 21, 133, 0.25)',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 4px 16px rgba(199, 21, 133, 0.1)'
              }}
              data-cursor="link"
              data-cursor-text="All Projects"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(199, 21, 133, 0.2)'
                e.currentTarget.style.border = '1px solid rgba(199, 21, 133, 0.35)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(199, 21, 133, 0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(199, 21, 133, 0.1)'
                e.currentTarget.style.border = '1px solid rgba(199, 21, 133, 0.25)'
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(199, 21, 133, 0.1)'
              }}
            >
              View All Projects
              <ArrowRight size={20} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

