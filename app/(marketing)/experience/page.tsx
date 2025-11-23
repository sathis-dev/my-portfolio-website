'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Folder, Code, TrendingUp } from 'lucide-react'
import Header from '@/components/layout/Header'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import PageHeader from '@/components/layout/PageHeader'
import TimelineCard from '@/components/cards/TimelineCard'
import StatCard from '@/components/cards/StatCard'
import Button from '@/components/ui/Button'
import { slideUp, stagger } from '@/lib/animations'
import { timeline, getTimelineByType } from '@/data/timeline'

export default function ExperiencePage() {
  const [filter, setFilter] = useState('all')
  const filteredTimeline = getTimelineByType(filter)

  return (
    <>
      {/* Header */}
      <Header />
      
      <Container>
        <PageHeader
          title="Experience & Education"
          subtitle="My journey through development, projects, and learning"
        />
      </Container>

      {/* Stats */}
      <Section className="py-12">
        <Container>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <StatCard
              label="Total Projects"
              value="4+"
              icon="Folder"
              animated={true}
            />
            <StatCard
              label="Technologies Used"
              value="15+"
              icon="Code"
              animated={true}
            />
            <StatCard
              label="Years Learning"
              value="3+"
              icon="TrendingUp"
              animated={true}
            />
          </motion.div>
        </Container>
      </Section>

      {/* Filters */}
      <Section className="py-8">
        <Container>
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="flex flex-wrap justify-center gap-3"
          >
            {[
              { id: 'all', label: 'All', icon: null },
              { id: 'project', label: 'Projects', icon: Briefcase },
              { id: 'education', label: 'Education', icon: GraduationCap },
            ].map((option, index) => {
              const Icon = option.icon

              return (
                <motion.button
                  key={option.id}
                  variants={slideUp}
                  custom={index}
                  onClick={() => setFilter(option.id)}
                  className={`
                    px-6 py-3 rounded-full font-medium transition-all duration-300
                    ${
                      filter === option.id
                        ? 'bg-primary-500 text-white shadow-accent'
                        : 'bg-dark-bg-tertiary text-dark-text-secondary hover:bg-dark-bg-accent hover:text-dark-text-primary'
                    }
                    flex items-center gap-2
                  `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {Icon && <Icon size={18} />}
                  {option.label}
                </motion.button>
              )
            })}
          </motion.div>
        </Container>
      </Section>

      {/* Timeline */}
      <Section className="pt-0" background="secondary">
        <Container>
          <div className="relative">
            {/* Center line for desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-500/50 to-transparent" />

            {filteredTimeline.map((entry, index) => (
              <TimelineCard
                key={entry.id}
                entry={entry}
                position={index % 2 === 0 ? 'left' : 'right'}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Download CV CTA */}
      <Section>
        <Container>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={slideUp}
            className="glass rounded-card p-12 text-center relative overflow-hidden"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-primary opacity-5" />
            
            <div className="relative z-10">
              <h2 className="text-h2 font-display text-dark-text-primary mb-4">
                Want the full details?
              </h2>
              <p className="text-body-lg text-dark-text-secondary max-w-2xl mx-auto mb-8">
                Download my CV for a complete overview of my experience, skills, and education
              </p>
              <Button variant="primary" size="lg" icon="Download" href="/cv.pdf">
                Download CV (PDF)
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  )
}

