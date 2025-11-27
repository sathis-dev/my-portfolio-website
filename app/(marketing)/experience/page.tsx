'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Folder, 
  Code2, 
  TrendingUp, 
  Briefcase, 
  GraduationCap,
  Heart,
  Bot,
  Globe,
  Sparkles,
  CheckCircle2,
  Star,
  BookOpen,
  Download
} from 'lucide-react'
import { DecryptedText } from '@/components/ui/decrypted-text'

const stats = [
  {
    icon: Folder,
    number: '4+',
    label: 'Total Projects'
  },
  {
    icon: Code2,
    number: '15+',
    label: 'Technologies Used'
  },
  {
    icon: CheckCircle2,
    number: '2',
    label: 'Current Projects'
  }
]

const filters = [
  { id: 'all', label: 'All', icon: null },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'education', label: 'Education', icon: GraduationCap }
]

const experiences = [
  // Current Work (Green) - Active projects
  {
    id: 'silent-help',
    type: 'projects',
    status: 'current',
    icon: Heart,
    title: 'Creator & Frontend Developer',
    company: 'Silent Help – AI-assisted Mental-Wellbeing Platform',
    location: 'Personal project',
    dateRange: 'May 2025 – present',
    description: 'A calm, privacy-respectful web app that supports quick check-ins, breathing exercises, journaling, and an empathetic AI helper.',
    responsibilities: [
      'Next.js + TypeScript frontend architecture with reusable UI',
      'Multi-step check-in → pathway flow; breathing and journaling modules',
      'Framer Motion transitions and micro-interactions with accessible fallbacks',
      'AI integration trials (Claude/OpenAI) for supportive responses and content suggestions',
      'WCAG-first choices for contrast, typography, and keyboard paths'
    ],
    achievements: [
      'Working prototypes for check-ins, journals, and breathing exercises',
      'Clear roadmap for AI prompts, session summaries, and consent screens'
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'AI APIs']
  },
  {
    id: 'studio-stack',
    type: 'projects',
    status: 'current',
    icon: Bot,
    title: 'Developer (Automation & AI)',
    company: 'Studio Stack Bot – Discord Assistant',
    location: 'Personal project',
    dateRange: 'Aug 2025 – present',
    description: 'Modular Discord bot for creators/communities: roles, utilities, light moderation, and AI helpers (summaries, announcement drafts).',
    responsibilities: [
      'Command architecture, permission model, and logging',
      'REST integrations; message parsing; queue/scheduler for recurring tasks',
      'AI features for summarising channels and drafting announcements'
    ],
    achievements: [
      'Stable core commands; design for a small web dashboard next'
    ],
    tech: ['Node.js', 'TypeScript', 'Discord.js', 'REST APIs']
  },
  
  // Recent Work (Purple) - Completed projects
  {
    id: 'brimston',
    type: 'projects',
    status: 'recent',
    icon: Globe,
    title: 'Frontend Developer (WordPress – Stax Theme)',
    company: 'Brimston Energy – Website Redesign',
    location: 'Cambridge/Remote',
    dateRange: 'Nov 2025',
    description: 'Redesigned the public site in WordPress using the purchased Stax theme. Focused on cleaner structure, modern sections, and editor-friendly components while working entirely in preview/draft so the live site wasn\'t disrupted.',
    responsibilities: [
      'Audit existing pages and competitor sites; define page objectives and content blocks',
      'Recompose Homepage, QR-Landing, Blog List, and Reusable Content page templates within Stax',
      'Implement consistent spacing/typography, accessible colour contrast, and clear CTAs',
      'Light custom CSS/JS for section tweaks; preserve theme upgradability',
      'Prepare a content-migration and publishing checklist for handover'
    ],
    achievements: [
      'Simplified navigation and page hierarchy for clearer user journeys',
      'Reusable blocks editors can update without breaking layout',
      'Successfully delivered production-ready site for client handover'
    ],
    tech: ['WordPress', 'Stax Theme', 'PHP', 'CSS', 'JavaScript']
  },
  {
    id: 'portfolio',
    type: 'projects',
    status: 'recent',
    icon: Sparkles,
    title: 'Portfolio & UI Experiments',
    company: 'Personal Site & Components',
    location: 'Personal project',
    dateRange: '2025',
    description: 'Living playground for UI and motion experiments (e.g., pill-nav with GSAP, hero motion, accessible component library).',
    responsibilities: [
      'Clean semantics, keyboard support, reduced-motion respect',
      'Performance-aware animations and dark-mode readability'
    ],
    achievements: [
      'Consistent design system across all pages',
      'Smooth animations and micro-interactions'
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Framer Motion', 'GSAP']
  },
  
  // Education (Purple) - Academic background
  {
    id: 'education',
    type: 'education',
    status: 'education',
    icon: GraduationCap,
    title: 'BTEC Level 3 Nationals in Computing',
    company: 'Cambridge Regional College',
    location: 'Cambridge, UK',
    dateRange: '2024 – present',
    description: 'Comprehensive computer science education with focus on software engineering and web technologies.',
    achievements: [
      'Unit 3 – Project Planning & Management: PID, Gantt, resource/cost plans',
      'Unit 18 – Relational Database Development: ERDs, normalisation, data dictionaries',
      'Unit 22 – Systems Analysis & Design: Requirements, process logic, structured models',
      'Unit 21 – Virtualisation: Analysis of platforms, business impacts',
      'Unit 9 – The Impact of Computing: Social, ethical, environmental analysis'
    ],
    modules: [
      'Web Technologies & Applications',
      'Database Systems & Design',
      'Software Engineering Principles',
      'Algorithms & Data Structures',
      'Human-Computer Interaction',
      'Project Management'
    ],
    tech: []
  }
]

// Helper function to get color theme
const getColorTheme = (status: string) => {
  switch (status) {
    case 'current':
      return {
        node: '#10B981',
        border: 'rgba(16, 185, 129, 0.3)',
        borderLeft: '#10B981',
        icon: '#10B981'
      }
    case 'recent':
      return {
        node: '#8B5CF6',
        border: 'rgba(139, 92, 246, 0.3)',
        borderLeft: '#8B5CF6',
        icon: '#8B5CF6'
      }
    case 'past':
      return {
        node: '#3B82F6',
        border: 'rgba(59, 130, 246, 0.3)',
        borderLeft: '#3B82F6',
        icon: '#3B82F6'
      }
    case 'education':
      return {
        node: '#9D6EFF',
        border: 'rgba(157, 110, 255, 0.3)',
        borderLeft: '#9D6EFF',
        icon: '#9D6EFF'
      }
    default:
      return {
        node: '#8B5CF6',
        border: 'rgba(139, 92, 246, 0.3)',
        borderLeft: '#8B5CF6',
        icon: '#8B5CF6'
      }
  }
}

export default function ExperiencePage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredExperiences = activeFilter === 'all' 
    ? experiences 
    : experiences.filter(exp => exp.type === activeFilter)

  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: 'opacity, transform' }}
          >
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6"
              style={{
                letterSpacing: '-0.02em'
              }}
            >
              <DecryptedText 
                text="Experience & Education" 
                speed={40}
                interval={200}
              />
            </h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg max-w-[700px] mx-auto leading-relaxed"
              style={{
                color: 'rgba(255, 255, 255, 0.85)'
              }}
            >
              My journey through development, projects, and learning
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-3xl p-10 text-center"
                style={{
                  background: 'rgba(10, 5, 15, 0.4)',
                  backdropFilter: 'blur(20px) saturate(90%)',
                  border: '1px solid rgba(199, 21, 133, 0.25)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  willChange: 'opacity, transform',
                  WebkitBackfaceVisibility: 'hidden',
                  backfaceVisibility: 'hidden',
                  transform: 'translateZ(0)'
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  style={{
                    background: 'rgba(139, 92, 246, 0.15)',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                    boxShadow: '0 4px 16px rgba(139, 92, 246, 0.2)'
                  }}
                >
                  <stat.icon size={28} style={{ color: '#8B5CF6' }} />
                </div>
                <h3 
                  className="text-5xl font-extrabold text-white mb-2"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  {stat.number}
                </h3>
                <p 
                  className="text-sm font-semibold"
                  style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-24 z-[100] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[900px] mx-auto flex flex-wrap justify-center gap-4">
          {filters.map((filter) => {
            const Icon = filter.icon
            const isActive = activeFilter === filter.id

            return (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300"
                style={{
                  background: isActive 
                    ? 'linear-gradient(135deg, #C71585 0%, #8B5CF6 100%)'
                    : 'rgba(10, 5, 15, 0.6)',
                  backdropFilter: 'blur(20px) saturate(100%)',
                  border: isActive 
                    ? '1px solid rgba(255, 255, 255, 0.2)'
                    : '1px solid rgba(199, 21, 133, 0.25)',
                  color: isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.7)',
                  boxShadow: isActive ? '0 4px 12px rgba(199, 21, 133, 0.3)' : 'none',
                  willChange: 'transform'
                }}
              >
                {Icon && <Icon size={16} />}
                {filter.label}
              </motion.button>
            )
          })}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[900px] mx-auto">
          <div className="relative pl-8 sm:pl-16">
            {/* Timeline Connector */}
            <div
              className="absolute left-3 sm:left-6 top-0 bottom-0 w-0.5 rounded-full"
              style={{
                background: 'linear-gradient(180deg, rgba(199, 21, 133, 0.3) 0%, rgba(139, 92, 246, 0.3) 100%)'
              }}
            />

            {filteredExperiences.map((experience, index) => (
              <TimelineItem 
                key={experience.id}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CV Download Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 pb-32">
        <div className="max-w-[800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl p-12 text-center"
            style={{
              background: 'rgba(10, 5, 15, 0.5)',
              backdropFilter: 'blur(20px) saturate(90%)',
              border: '1px solid rgba(199, 21, 133, 0.3)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              willChange: 'opacity, transform',
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden',
              transform: 'translateZ(0)'
            }}
          >
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Want the full details?
            </h2>
            <p 
              className="text-base leading-relaxed mb-8"
              style={{ color: 'rgba(255, 255, 255, 0.75)' }}
            >
              Download my CV for a complete overview of my experience, skills, and education
            </p>
            <motion.a
              href="/cv.pdf"
              download
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-base font-bold transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #C71585 0%, #8B5CF6 100%)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#FFFFFF',
                boxShadow: '0 4px 16px rgba(199, 21, 133, 0.4)',
                willChange: 'transform'
              }}
            >
              Download CV (PDF)
              <Download size={20} />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

// Timeline Item Component
function TimelineItem({ experience, index }: { experience: any; index: number }) {
  const theme = getColorTheme(experience.status)
  const Icon = experience.icon

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative mb-12 group"
      style={{ willChange: 'opacity, transform' }}
    >
      {/* Timeline Node */}
      <div
        className="absolute left-[-44px] sm:left-[-68px] top-3 w-4 h-4 rounded-full z-10"
        style={{
          background: '#0A050F',
          border: `3px solid ${theme.node}`
        }}
      />

      {/* Card */}
      <motion.div
        whileHover={{ x: 8 }}
        className="rounded-3xl p-6 sm:p-10 transition-all duration-400"
        style={{
          background: 'rgba(10, 5, 15, 0.4)',
          backdropFilter: 'blur(20px) saturate(90%)',
          border: `1px solid ${theme.border}`,
          borderLeft: `3px solid ${theme.borderLeft}`,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
          willChange: 'transform',
          WebkitBackfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden',
          transform: 'translateZ(0)'
        }}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start justify-between gap-4 sm:gap-8 mb-6">
          <div className="flex-1 w-full">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
              style={{
                background: 'rgba(139, 92, 246, 0.15)',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                boxShadow: '0 4px 16px rgba(139, 92, 246, 0.2)'
              }}
            >
              <Icon size={24} style={{ color: theme.icon }} />
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2 leading-tight">
              {experience.title}
            </h3>
            <p 
              className="text-base font-semibold mb-1"
              style={{ color: 'rgba(255, 255, 255, 0.85)' }}
            >
              {experience.company}
            </p>
            <p 
              className="text-sm"
              style={{ color: 'rgba(255, 255, 255, 0.6)' }}
            >
              {experience.location}
            </p>
          </div>

          <div 
            className="text-sm font-semibold text-left sm:text-right whitespace-nowrap"
            style={{ color: 'rgba(255, 255, 255, 0.7)' }}
          >
            {experience.dateRange}
          </div>
        </div>

        {/* Description */}
        <p 
          className="text-[0.9375rem] leading-relaxed mb-6"
          style={{ color: 'rgba(255, 255, 255, 0.75)' }}
        >
          {experience.description}
        </p>

        {/* Responsibilities */}
        {experience.responsibilities && (
          <div className="mb-6">
            <h4 className="text-base font-extrabold text-white mb-4">
              Responsibilities
            </h4>
            <div className="space-y-3">
              {experience.responsibilities.map((item: string, i: number) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 
                    size={18} 
                    style={{ color: '#10B981', flexShrink: 0, marginTop: '2px' }}
                  />
                  <span 
                    className="text-sm leading-relaxed"
                    style={{ color: 'rgba(255, 255, 255, 0.75)' }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Achievements */}
        {experience.achievements && (
          <div className="mb-6">
            <h4 className="text-base font-extrabold text-white mb-4">
              Key Achievements
            </h4>
            <div className="space-y-3">
              {experience.achievements.map((item: string, i: number) => (
                <div key={i} className="flex items-start gap-3">
                  <Star 
                    size={18} 
                    style={{ color: '#E91E8C', flexShrink: 0, marginTop: '2px' }}
                  />
                  <span 
                    className="text-sm leading-relaxed"
                    style={{ color: 'rgba(255, 255, 255, 0.75)' }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modules (Education only) */}
        {experience.modules && (
          <div className="mb-6">
            <h4 className="text-base font-extrabold text-white mb-4">
              Key Modules
            </h4>
            <div className="space-y-3">
              {experience.modules.map((item: string, i: number) => (
                <div key={i} className="flex items-start gap-3">
                  <BookOpen 
                    size={18} 
                    style={{ color: '#8B5CF6', flexShrink: 0, marginTop: '2px' }}
                  />
                  <span 
                    className="text-sm leading-relaxed"
                    style={{ color: 'rgba(255, 255, 255, 0.75)' }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Tags */}
        {experience.tech.length > 0 && (
          <div 
            className="flex flex-wrap gap-2 pt-6"
            style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}
          >
            {experience.tech.map((tech: string) => (
              <span
                key={tech}
                className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-300"
                style={{
                  background: 'rgba(139, 92, 246, 0.15)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  color: '#8B5CF6'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}
