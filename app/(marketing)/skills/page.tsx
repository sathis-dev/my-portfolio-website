'use client'

import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import Header from '@/components/layout/Header'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import PageHeader from '@/components/layout/PageHeader'
import SkillCard from '@/components/cards/SkillCard'
import Badge from '@/components/ui/Badge'
import { slideUp, stagger } from '@/lib/animations'
import { skills, skillCategories, getSkillsByCategory } from '@/data/skills'

export default function SkillsPage() {
  return (
    <>
      {/* Header */}
      <Header />
      
      <Container>
        <PageHeader
          title="Skills & Technologies"
          subtitle="The tools and technologies I use to bring ideas to life"
        />
      </Container>

      {/* Legend */}
      <Section className="py-8">
        <Container>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={slideUp}
            className="glass rounded-card p-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Skill Levels */}
              <div>
                <h3 className="text-h6 font-semibold text-dark-text-primary mb-3">
                  Skill Levels
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="warning" size="sm">Beginner</Badge>
                    <span className="text-body-sm text-dark-text-secondary">
                      Learning and experimenting
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="default" size="sm">Intermediate</Badge>
                    <span className="text-body-sm text-dark-text-secondary">
                      Comfortable with production use
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="success" size="sm">Advanced</Badge>
                    <span className="text-body-sm text-dark-text-secondary">
                      Deep expertise and daily usage
                    </span>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div>
                <h3 className="text-h6 font-semibold text-dark-text-primary mb-3">
                  Usage Tags
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="success" size="sm">Production</Badge>
                    <span className="text-body-sm text-dark-text-secondary">
                      Used in live projects
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="default" size="sm">Daily</Badge>
                    <span className="text-body-sm text-dark-text-secondary">
                      Part of daily workflow
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="warning" size="sm">Learning</Badge>
                    <span className="text-body-sm text-dark-text-secondary">
                      Currently learning
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Skills by Category */}
      {skillCategories.map((category) => {
        const categorySkills = getSkillsByCategory(category.id)
        const Icon = LucideIcons[category.icon as keyof typeof LucideIcons] as any

        return (
          <Section key={category.id} background="secondary">
            <Container>
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={slideUp}
                className="mb-8"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${category.color}1A` }}
                  >
                    {Icon && <Icon size={20} style={{ color: category.color }} />}
                  </div>
                  <h2 className="text-h2 font-display text-dark-text-primary">
                    {category.title}
                  </h2>
                </div>
              </motion.div>

              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={stagger}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {categorySkills.map((skill, index) => (
                  <motion.div key={skill.id} variants={slideUp} custom={index}>
                    <SkillCard skill={skill} />
                  </motion.div>
                ))}
              </motion.div>
            </Container>
          </Section>
        )
      })}

      {/* Real World Context */}
      <Section>
        <Container>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={slideUp}
            className="text-center mb-12"
          >
            <h2 className="text-h2 font-display text-dark-text-primary mb-4">
              How I Use These in Real Projects
            </h2>
            <p className="text-body-lg text-dark-text-secondary max-w-2xl mx-auto">
              Skills in action across my portfolio
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              {
                project: 'AirSense Dashboard',
                stack: ['Laravel', 'Livewire', 'MySQL', 'Tailwind CSS'],
                description: 'Built full-stack IoT dashboard with real-time data visualization',
              },
              {
                project: 'Silent Help Platform',
                stack: ['Next.js', 'TypeScript', 'Claude API', 'Tailwind CSS'],
                description: 'AI-powered mental wellbeing platform with chat interface',
              },
            ].map((example, index) => (
              <motion.div
                key={example.project}
                variants={slideUp}
                custom={index}
                className="glass rounded-card p-6"
              >
                <h3 className="text-h5 font-semibold text-dark-text-primary mb-2">
                  {example.project}
                </h3>
                <p className="text-body-sm text-dark-text-secondary mb-4">
                  {example.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {example.stack.map((tech) => (
                    <Badge key={tech} variant="secondary" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>
    </>
  )
}

