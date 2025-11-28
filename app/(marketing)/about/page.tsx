'use client'

import { motion } from 'framer-motion'
import { 
  Code2, 
  Sparkles, 
  Zap, 
  Brain,
  Target,
  BookOpen
} from 'lucide-react'
import { DecryptedText } from '@/components/ui/decrypted-text'
import { StarBorder } from '@/components/ui/star-border'
import { Tilt3DCard } from '@/components/ui/Tilt3DCard'
import { MagneticButton } from '@/components/ui/MagneticButton'

const skills = [
  {
    icon: Code2,
    title: 'Modern Frontend Development',
    description: 'Designing and building responsive interfaces with Next.js, React, TypeScript and Tailwind CSS. I focus on component reusability, clear structure, and layouts that look great across all devices.'
  },
  {
    icon: Sparkles,
    title: 'UI & Interaction Design',
    description: 'Translating ideas into clean, intuitive interfaces with thoughtful motion. Using Framer Motion and GSAP to add subtle animations that guide users naturally through experiences.'
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Ensuring fast load times and smooth interactions through code splitting, lazy loading, and careful asset optimization. Every millisecond counts for user experience.'
  },
  {
    icon: Brain,
    title: 'AI Integration',
    description: 'Leveraging AI tools like Claude and ChatGPT in development workflows, and integrating AI directly into products like Silent Help and StudyPilot AI to enhance user experiences.'
  }
]

const workSteps = [
  {
    number: 1,
    title: 'Understand',
    description: 'Deep dive into project requirements, user needs, and technical constraints'
  },
  {
    number: 2,
    title: 'Plan',
    description: 'Architecture decisions, component planning, and technical strategy'
  },
  {
    number: 3,
    title: 'Build',
    description: 'Iterative development with frequent testing and refinement'
  },
  {
    number: 4,
    title: 'Optimize',
    description: 'Performance tuning, accessibility audits, and cross-browser testing'
  }
]

const focusAreas = [
  'Strengthening my Next.js and TypeScript patterns for production-style apps',
  'Designing calmer, more expressive interfaces for Silent Help',
  'Building AI features that are genuinely helpful, not just "chat in a box"',
  'Developing Studio Stack Bot and StudyPilot AI as serious portfolio projects',
  'Improving my use of motion (Framer Motion / GSAP) without harming performance'
]

const values = [
  {
    title: 'Quality First',
    description: 'Write code and design flows that I\'d be comfortable handing to another developer. Small projects are treated with the same discipline as larger ones.'
  },
  {
    title: 'User-Centric',
    description: 'Building experiences that are accessible and delightful for everyone, with careful attention to accessibility, usability, and inclusive design principles.'
  },
  {
    title: 'Continuous Learning',
    description: 'Staying curious and adapting to new technologies and best practices. Every project is an opportunity to grow and refine my craft.'
  }
]

const quickFacts = [
  { label: 'Location', value: 'Cambridge, UK' },
  { label: 'Experience', value: '3+ years' },
  { label: 'Education', value: 'BTEC Computer Science' },
  { label: 'Availability', value: 'Open to freelance projects' },
  { label: 'Languages', value: 'English, Sinhala' }
]

export default function AboutPage() {
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
                letterSpacing: '-0.02em',
                willChange: 'auto'
              }}
            >
              <DecryptedText 
                text="About Me" 
                speed={50}
                interval={300}
              />
            </h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg lg:text-xl max-w-[800px] mx-auto leading-relaxed"
              style={{
                color: 'rgba(255, 255, 255, 0.85)',
                willChange: 'auto'
              }}
            >
              Frontend developer passionate about creating elegant, accessible web experiences
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Who I Am Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left Column - Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-3"
              style={{ willChange: 'opacity, transform' }}
            >
              <h2 className="text-3xl font-extrabold text-white mb-6">
                <DecryptedText 
                  text="Who I Am" 
                  speed={40}
                  interval={400}
                />
              </h2>
              <div 
                className="space-y-6 text-base leading-relaxed"
                style={{ color: 'rgba(255, 255, 255, 0.8)' }}
              >
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  style={{ willChange: 'opacity, transform' }}
                >
                  I&apos;m a frontend developer based in Cambridge, UK, currently studying a BTEC Level 3 in Computing at Cambridge Regional College. Alongside college, I spend most of my time building projects that feel like real products – not just coursework.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  style={{ willChange: 'opacity, transform' }}
                >
                  Right now my main focus is Silent Help, an AI-supported mental health platform, a WordPress redesign for Brimston Energy, and Studio Stack Bot, an AI-assisted Discord bot. These projects let me combine modern frontend tools (Next.js, React, TypeScript, Tailwind) with AI workflows to build things that are both visually polished and technically sound.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  style={{ willChange: 'opacity, transform' }}
                >
                  I enjoy the part of development where design, psychology and code meet. I like thinking about how a stressed user moves through a page, how animations can calm rather than distract, and how AI can support someone without taking control away from them.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  style={{ willChange: 'opacity, transform' }}
                >
                  Outside of coding, I&apos;m usually reading about new web and AI tools, experimenting with UI ideas, or planning the next project that will push my skills a bit further.
                </motion.p>
              </div>
            </motion.div>

            {/* Right Column - Quick Facts */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-2"
              style={{ willChange: 'opacity, transform' }}
            >
              <StarBorder
                as="div"
                className="sticky top-32 w-full"
                speed={8}
                color="rgba(199, 21, 133, 0.8)"
              >
                <div
                  className="rounded-3xl p-8 w-full"
                  style={{
                    background: 'rgba(10, 5, 15, 0.95)',
                    backdropFilter: 'blur(20px) saturate(90%)',
                    willChange: 'auto'
                  }}
            >
                  <h3 className="text-2xl font-extrabold text-white mb-8">
                    <DecryptedText 
                      text="Quick Facts" 
                      speed={40}
                      interval={800}
                    />
              </h3>
                  <div className="space-y-0">
                    {quickFacts.map((fact, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 1 + (index * 0.1) }}
                        className="flex justify-between items-start py-4"
                        style={{
                          borderBottom: index < quickFacts.length - 1 ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
                          willChange: 'auto'
                        }}
                      >
                        <span 
                          className="text-sm font-medium"
                          style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                        >
                          {fact.label}
                        </span>
                        <span className="text-sm font-bold text-white text-right max-w-[60%]">
                          {fact.value}
                        </span>
                      </motion.div>
                    ))}
                  </div>
              </div>
              </StarBorder>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What I Do Best Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12"
            style={{ willChange: 'opacity, transform' }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              <DecryptedText 
                text="What I Do Best" 
                speed={40}
                interval={200}
              />
            </h2>
            <p 
              className="text-base sm:text-lg max-w-[600px] mx-auto"
              style={{ color: 'rgba(255, 255, 255, 0.7)' }}
            >
              My core competencies and areas of expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
          <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{ willChange: 'opacity, transform' }}
              >
                <Tilt3DCard
                  maxTilt={8}
                  perspective={1200}
                  className="group h-full"
                >
                  <div
                    className="rounded-3xl p-8 h-full transition-all duration-300"
                    style={{
                      background: 'rgba(10, 5, 15, 0.6)',
                      backdropFilter: 'blur(20px) saturate(90%)',
                      border: '1px solid rgba(199, 21, 133, 0.25)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                      willChange: 'transform'
                    }}
                  >
                    <MagneticButton
                      strength={0.3}
                      maxDistance={100}
                      className="mb-6"
                    >
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center"
                        style={{
                          background: 'rgba(139, 92, 246, 0.15)',
                          border: '1px solid rgba(139, 92, 246, 0.3)',
                          boxShadow: '0 4px 16px rgba(139, 92, 246, 0.2)',
                          willChange: 'transform'
                        }}
                  >
                        <skill.icon size={28} style={{ color: '#8B5CF6' }} />
                      </div>
                    </MagneticButton>

                    <h3 className="text-xl font-extrabold text-white mb-3">
                      {skill.title}
                    </h3>
                    <p 
                      className="text-[0.9375rem] leading-relaxed"
                      style={{ color: 'rgba(255, 255, 255, 0.75)' }}
                    >
                      {skill.description}
                    </p>
                  </div>
                </Tilt3DCard>
                </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How I Work Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12"
            style={{ willChange: 'opacity, transform' }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              <DecryptedText 
                text="How I Work" 
                speed={40}
                interval={100}
              />
            </h2>
            <p 
              className="text-base sm:text-lg max-w-[600px] mx-auto"
              style={{ color: 'rgba(255, 255, 255, 0.7)' }}
            >
              My approach to building exceptional web experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="relative rounded-3xl p-6 pt-12"
                style={{
                  background: 'rgba(10, 5, 15, 0.4)',
                  backdropFilter: 'blur(20px) saturate(90%)',
                  border: '1px solid rgba(199, 21, 133, 0.25)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  willChange: 'transform'
                }}
              >
                {/* Number Badge */}
                <MagneticButton
                  strength={0.5}
                  maxDistance={80}
                  className="absolute -top-6 left-6"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-extrabold text-white"
                    style={{
                      background: 'linear-gradient(135deg, #C71585 0%, #8B5CF6 100%)',
                      border: '2px solid #0A050F',
                      boxShadow: '0 4px 16px rgba(199, 21, 133, 0.4)',
                      willChange: 'transform'
                    }}
                  >
                    {step.number}
                  </div>
                </MagneticButton>

                {/* Connector Line - Desktop Only */}
                {index < workSteps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-0 -right-6 w-6 h-0.5"
                    style={{
                      background: 'linear-gradient(90deg, rgba(199, 21, 133, 0.3) 0%, transparent 100%)'
                    }}
                  />
                )}

                <h3 className="text-xl font-extrabold text-white mb-3 mt-2">
                  {step.title}
                </h3>
                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: 'rgba(255, 255, 255, 0.75)' }}
                >
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Today I'm Focusing On Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: 'opacity, transform' }}
          >
            <StarBorder
              as="div"
              className="w-full"
              speed={10}
              color="rgba(139, 92, 246, 0.8)"
          >
              <div
                className="rounded-3xl p-8 sm:p-12 w-full"
                style={{
                  background: 'rgba(10, 5, 15, 0.95)',
                  backdropFilter: 'blur(20px) saturate(90%)',
                  willChange: 'auto'
                }}
              >
                <MagneticButton
                  strength={0.4}
                  maxDistance={120}
                  className="mb-6"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{
                      background: 'rgba(139, 92, 246, 0.15)',
                      border: '1px solid rgba(139, 92, 246, 0.3)',
                      boxShadow: '0 4px 16px rgba(139, 92, 246, 0.2)',
                      willChange: 'transform'
                    }}
                  >
                    <Target size={28} style={{ color: '#8B5CF6' }} />
                </div>
                </MagneticButton>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                  <DecryptedText 
                    text="Today I'm Focusing On" 
                    speed={35}
                    interval={500}
                  />
                  </h2>
                <p 
                  className="text-base mb-8"
                  style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                >
                    Continuously learning and improving my craft
                  </p>

                <div className="space-y-4">
                  {focusAreas.map((area, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.8 + (index * 0.1), ease: [0.22, 1, 0.36, 1] }}
                      className="flex items-start gap-4"
                      style={{ willChange: 'opacity, transform' }}
                    >
                      <BookOpen 
                        size={20} 
                        style={{ color: '#8B5CF6', flexShrink: 0, marginTop: '2px' }}
                      />
                      <p 
                        className="text-[0.9375rem] leading-relaxed"
                        style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                      >
                        {area}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </StarBorder>
          </motion.div>
        </div>
      </section>

      {/* My Values Section */}
      <section className="relative py-16 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-16"
            style={{ willChange: 'opacity, transform' }}
          >
            <DecryptedText 
              text="My Values" 
              speed={40}
              interval={100}
            />
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="text-center"
                style={{ willChange: 'transform' }}
              >
                <h3 className="text-xl font-extrabold text-white mb-4">
                  {value.title}
                </h3>
                <p 
                  className="text-[0.9375rem] leading-relaxed max-w-xs mx-auto"
                  style={{ color: 'rgba(255, 255, 255, 0.75)' }}
                >
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

