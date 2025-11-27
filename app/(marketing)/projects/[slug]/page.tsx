'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, ExternalLink, Github, Star } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// Project data (in a real app, this would come from a CMS or database)
const projects = {
  'silent-help': {
    title: 'Silent Help',
    subtitle: 'AI-Supported Mental Health Platform',
    description: 'Silent Help is a compassionate mental-health platform I\'m building for people who feel stressed, overwhelmed or alone. The goal is to give users a calm, guided space with stress-level check-ins, breathing exercises, journaling and an AI-assisted chat that responds in a supportive, human way—not just with random answers.',
    image: '/images/projects/silent-help/hero.jpg',
    categories: ['AI', 'Mental Health', 'Accessibility'],
    status: 'In Active Development',
    statusColor: '#10B981',
    date: '2024 - Present',
    duration: '6 months',
    role: 'Full Stack Developer & UI/UX Designer',
    techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Claude API', 'Supabase'],
    links: {
      live: '',
      github: ''
    },
    overview: 'Silent Help addresses a real need: many people don\'t have someone to talk to when stress hits, and traditional mental health resources can feel intimidating or inaccessible. This platform aims to provide immediate, gentle support through AI-assisted conversations, guided exercises, and personal journaling.',
    features: [
      {
        title: 'Stress Level Check-ins',
        description: 'Simple, visual check-ins that help users track their emotional state over time without feeling overwhelming.'
      },
      {
        title: 'Breathing Exercises',
        description: 'Guided breathing exercises with calming animations and audio to help users manage anxiety in the moment.'
      },
      {
        title: 'AI-Assisted Chat',
        description: 'Supportive conversations powered by Claude API, trained to respond empathetically and suggest coping strategies.'
      },
      {
        title: 'Personal Journaling',
        description: 'Private space for users to express their thoughts and feelings, with optional AI insights and reflections.'
      }
    ],
    challenges: [
      'Ensuring AI responses are always supportive and never harmful',
      'Creating a calm, accessible UI that doesn\'t add to user stress',
      'Balancing features with simplicity—too many options can overwhelm',
      'Implementing proper data privacy and security for sensitive information'
    ],
    learnings: [
      'How to design for emotional well-being, not just functionality',
      'Working with AI APIs to create meaningful, context-aware responses',
      'Building accessible interfaces that work for people in distress',
      'The importance of user research in mental health applications'
    ]
  },
  'brimstone-energy': {
    title: 'Brimstone Energy Website',
    subtitle: 'WordPress Website Redesign',
    description: 'A complete redesign of Brimstone Energy\'s website using the Stax WordPress theme. Restructured page layouts, typography and content sections to create a modern, trustworthy presence for a renewable energy company. The focus was on clear storytelling, better calls-to-action, SEO optimization, and solid performance.',
    image: '/images/projects/brimstone-energy/hero.jpg',
    categories: ['WordPress', 'Web Design', 'SEO'],
    status: 'Completed',
    statusColor: '#10B981',
    date: '2024',
    duration: '3 months',
    role: 'WordPress Developer & Designer',
    techStack: ['WordPress', 'Stax Theme', 'CSS', 'JavaScript', 'PHP'],
    links: {
      live: 'https://brimstone-energy.uk/',
      github: ''
    },
    overview: 'Brimstone Energy UK needed a website that reflected their expertise in renewable energy solutions (solar panels, battery storage, heat pumps) while being easy for their team to update. The project involved customizing the Stax theme, reorganizing content for better user flow, and implementing SEO best practices. The result is a professional, trustworthy site that empowers homeowners to take control of their energy future.',
    features: [
      {
        title: 'Clean Modern Design',
        description: 'Professional layout with clear typography, proper whitespace, and a cohesive color scheme that builds trust with potential customers.'
      },
      {
        title: 'Service Showcase',
        description: 'Clear presentation of renewable energy services including tepeo ZEB heat batteries, solar panels, battery storage, and heat pumps.'
      },
      {
        title: 'SEO Optimization',
        description: 'Implemented proper meta tags, schema markup, and page structure to improve search engine visibility for renewable energy searches.'
      },
      {
        title: 'Customer Testimonials',
        description: 'Integrated Which? Trusted Trader reviews and video case studies to showcase customer satisfaction and build credibility.'
      },
      {
        title: 'Easy Content Management',
        description: 'Set up intuitive content blocks and templates so the team can add blog posts, case studies, and resources without developer help.'
      },
      {
        title: 'Lead Generation',
        description: 'Strategic placement of contact forms and CTAs to convert visitors into qualified leads for energy assessments and installations.'
      }
    ],
    challenges: [
      'Working within WordPress theme limitations while achieving custom designs that match the brand',
      'Balancing technical energy information with accessible language for homeowners',
      'Optimizing performance while maintaining visual richness and interactive elements',
      'Creating a content management system that non-technical team members can maintain independently'
    ],
    learnings: [
      'How to customize WordPress themes effectively without breaking updates or security',
      'The importance of client communication and managing expectations throughout the design process',
      'WordPress best practices for performance, security, and SEO in the renewable energy sector',
      'How to create maintainable systems that empower non-technical users to manage content'
    ]
  },
  'studio-stack-bot': {
    title: 'Studio Stack Bot',
    subtitle: 'Discord AI & Automation Assistant',
    description: 'A powerful Discord bot designed to bring audio management, workflow automation, and AI-powered features into one seamless command interface. Built for content creators and community managers who need efficient tools without juggling multiple bots.',
    image: '/images/projects/studio-stack-bot/hero.jpg',
    categories: ['Discord', 'AI', 'Automation'],
    status: 'Under Construction',
    statusColor: '#FBBF24',
    date: '2024 - Present',
    duration: 'In Development',
    role: 'Full Stack Developer',
    techStack: ['Node.js', 'TypeScript', 'Discord.js', 'PostgreSQL', 'Redis', 'OpenAI API'],
    links: {
      live: '',
      github: ''
    },
    overview: 'Studio Stack Bot was created to solve a common problem: Discord servers often require multiple bots for different tasks, creating a cluttered experience. This all-in-one solution combines audio management, automation, moderation, and AI assistance into a single, powerful bot with an intuitive slash command interface.',
    features: [
      {
        title: 'Advanced Audio Management',
        description: 'High-quality music playback, audio effects, voice channel management, and audio recording capabilities for podcasters and streamers.'
      },
      {
        title: 'Workflow Automation',
        description: 'Custom triggers, scheduled tasks, automated role assignments, and channel management to reduce repetitive administrative work.'
      },
      {
        title: 'AI-Powered Assistant',
        description: 'Smart chatbot for answering questions, generating content ideas, summarizing conversations, and providing creative assistance.'
      },
      {
        title: 'Moderation Suite',
        description: 'Automated moderation tools, spam detection, custom filter rules, and comprehensive logging for server safety.'
      },
      {
        title: 'Analytics Dashboard',
        description: 'Track server activity, member engagement, command usage, and growth metrics through an intuitive web dashboard.'
      },
      {
        title: 'Custom Commands',
        description: 'Server owners can create custom commands with variables, conditions, and actions tailored to their community needs.'
      }
    ],
    challenges: [
      'Handling real-time audio streaming with low latency across multiple voice channels simultaneously',
      'Designing an intuitive command structure that balances power with ease of use',
      'Managing state and data consistency across distributed bot instances for scalability',
      'Implementing AI features responsibly with content filtering and safety guardrails'
    ],
    learnings: [
      'Working with Discord.js v14 and the latest Discord API features and best practices',
      'Real-time audio processing and streaming in Node.js using native libraries',
      'Designing scalable bot architecture with sharding and clustering for large servers',
      'Integrating AI APIs (OpenAI) while managing costs and implementing rate limiting'
    ]
  },
  'brimston-energy': {
    title: 'Brimston Energy Website',
    subtitle: 'WordPress Website Redesign',
    description: 'A complete redesign of Brimston Energy\'s marketing site using the Stax WordPress theme. I\'m restructuring page layouts, typography and content sections to make the site feel modern, trustworthy and easier to maintain. The focus is on clear storytelling for an energy company, better calls-to-action and solid performance.',
    image: '/images/projects/brimston/brimstone-energy-thumbnail.png',
    categories: ['WordPress', 'Web Design', 'SEO'],
    status: 'Completed',
    statusColor: '#3B82F6',
    date: '2024',
    duration: '2 months',
    role: 'WordPress Developer & Designer',
    techStack: ['WordPress', 'Stax Theme', 'CSS', 'JavaScript', 'PHP'],
    links: {
      live: 'https://brimstonenergy.co.uk',
      github: ''
    },
    overview: 'Brimston Energy needed a modernized website with cleaner structure and better user experience, but required a solution that wouldn\'t disrupt their live site during development and would be maintainable by non-technical editors.',
    features: [
      {
        title: 'WordPress Theme Customization',
        description: 'Customized the Stax theme to create a unique, branded experience while maintaining update compatibility and theme integrity.'
      },
      {
        title: 'Responsive Design',
        description: 'Optimized layouts for all devices ensuring consistent experience across desktop, tablet, and mobile platforms.'
      },
      {
        title: 'SEO Optimization',
        description: 'Implemented SEO best practices, meta tags, structured data, and performance optimizations for better search visibility.'
      },
      {
        title: 'Content Management',
        description: 'Created reusable page sections and components that non-technical team members can easily manage and update.'
      }
    ],
    challenges: [
      'Working within WordPress theme limitations while achieving custom designs',
      'Balancing technical energy information with accessible language',
      'Optimizing performance while maintaining visual richness',
      'Creating maintainable systems for non-technical editors'
    ],
    learnings: [
      'WordPress theme customization without breaking updates',
      'Client communication and expectation management',
      'WordPress performance and SEO best practices',
      'Creating maintainable systems for non-technical users'
    ]
  },
  'studypilot-ai': {
    title: 'StudyPilot AI',
    subtitle: 'Assignment & Project Planner for Students',
    description: 'An AI-powered study planner that helps students break down complex assignments and projects into manageable tasks, timelines, and daily study plans. Unlike AI that writes assignments for you, StudyPilot guides you through the process of completing work yourself.',
    image: '/images/projects/studypilot-ai/hero.jpg',
    categories: ['AI', 'Education', 'Productivity'],
    status: 'Planned',
    statusColor: '#9D6EFF',
    date: 'Planned for 2025',
    duration: 'Planning Phase',
    role: 'Product Designer & Developer',
    techStack: ['Next.js 14', 'TypeScript', 'PostgreSQL', 'Prisma', 'Claude API', 'Tailwind CSS'],
    links: {
      live: '',
      github: ''
    },
    overview: 'StudyPilot AI was conceived after seeing students struggle with long, complex assignment briefs and multi-week projects. The platform uses AI to help students understand requirements, create realistic timelines, and build study habits—without doing the work for them. It\'s about learning to plan and manage projects, not shortcuts.',
    features: [
      {
        title: 'Assignment Brief Parser',
        description: 'Upload assignment PDFs or paste requirements, and the AI extracts key tasks, deadlines, requirements, and grading rubrics automatically.'
      },
      {
        title: 'Smart Task Breakdown',
        description: 'AI analyzes the assignment and suggests logical task breakdowns with estimated time requirements based on assignment complexity.'
      },
      {
        title: 'Personalized Timeline',
        description: 'Generate realistic study schedules based on your deadlines, available study time, and other commitments tracked in the app.'
      },
      {
        title: 'Daily Study Plans',
        description: 'Get daily tasks with time blocks, priority levels, and progress tracking to stay on track without overwhelming your schedule.'
      },
      {
        title: 'Progress Tracking',
        description: 'Mark tasks complete, log study sessions, and visualize your progress with motivating charts and streak tracking.'
      },
      {
        title: 'Study Resources',
        description: 'AI suggests relevant learning resources, research tips, and study techniques based on your assignment topics and learning style.'
      }
    ],
    challenges: [
      'Parsing diverse assignment formats (PDFs, Word docs, text) with varying structures and clarity',
      'Creating realistic time estimates that account for individual student capabilities and learning styles',
      'Balancing AI assistance with student agency—helping without enabling academic dishonesty',
      'Designing an interface that motivates without adding stress or complexity to student life'
    ],
    learnings: [
      'User research with students to understand study planning pain points and existing workflows',
      'AI prompt engineering to extract structured data from unstructured assignment documents',
      'Building scheduling algorithms that account for real-world student constraints',
      'Ethical considerations in educational AI tools—where to draw the line on assistance'
    ]
  }
}

interface PageProps {
  params: { slug: string }
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = projects[params.slug as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Immersive Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(199, 21, 133, 0.15) 0%, rgba(139, 92, 246, 0.15) 50%, rgba(10, 5, 15, 1) 100%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(199, 21, 133, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-6 lg:px-8 py-32 sm:py-40">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Back to Projects
            </Link>
          </motion.div>

          {/* Category Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-6"
          >
            {project.categories.map((category) => (
              <span
                key={category}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wide"
                style={{
                  background: 'rgba(199, 21, 133, 0.2)',
                  border: '1px solid rgba(199, 21, 133, 0.4)',
                  color: '#E91E8C'
                }}
              >
                {category}
              </span>
            ))}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6"
            style={{
              background: 'linear-gradient(135deg, #FFFFFF 0%, #E91E8C 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-0.02em',
              lineHeight: 1.1
            }}
          >
            {project.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl sm:text-2xl text-white/85 mb-8 max-w-[800px]"
          >
            {project.subtitle}
          </motion.p>

          {/* Meta Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-6 text-sm text-white/70"
          >
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{project.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{project.duration}</span>
            </div>
            <div
              className="flex items-center gap-2 px-3 py-1 rounded-lg"
              style={{
                background: project.statusColor + '20',
                color: project.statusColor
              }}
            >
              <Star size={16} fill="currentColor" />
              <span className="font-semibold">{project.status}</span>
            </div>
          </motion.div>

          {/* Links */}
          {(project.links.live || project.links.github) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all"
                  style={{
                    background: 'linear-gradient(135deg, #C71585 0%, #8B5CF6 100%)',
                    boxShadow: '0 4px 16px rgba(199, 21, 133, 0.3)'
                  }}
                >
                  <ExternalLink size={18} />
                  Visit Live Site
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all"
                  style={{
                    background: 'rgba(199, 21, 133, 0.1)',
                    border: '1px solid rgba(199, 21, 133, 0.3)'
                  }}
                >
                  <Github size={18} />
                  View Code
                </a>
              )}
            </motion.div>
          )}
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-6 lg:px-8 py-20">
        {/* Overview */}
        <ContentSection title="Overview" delay={0.1}>
          <p className="text-lg leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
            {project.overview}
          </p>
        </ContentSection>

        {/* Key Features */}
        <ContentSection title="Key Features" delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </ContentSection>

        {/* Tech Stack */}
        <ContentSection title="Tech Stack" delay={0.3}>
          <div className="flex flex-wrap gap-4">
            {project.techStack.map((tech) => (
              <motion.div
                key={tech}
                whileHover={{ y: -4, scale: 1.05 }}
                className="px-6 py-3 rounded-xl text-base font-semibold"
                style={{
                  background: 'rgba(199, 21, 133, 0.08)',
                  border: '1px solid rgba(199, 21, 133, 0.25)',
                  color: '#FFFFFF'
                }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </ContentSection>

        {/* Challenges */}
        <ContentSection title="Challenges & Solutions" delay={0.4}>
          <ul className="space-y-4">
            {project.challenges.map((challenge, index) => (
              <li
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl"
                style={{
                  background: 'rgba(199, 21, 133, 0.05)',
                  border: '1px solid rgba(199, 21, 133, 0.15)'
                }}
              >
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{
                    background: '#E91E8C',
                    color: '#FFFFFF'
                  }}
                >
                  {index + 1}
                </span>
                <span className="text-base" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                  {challenge}
                </span>
              </li>
            ))}
          </ul>
        </ContentSection>

        {/* Learnings */}
        <ContentSection title="What I Learned" delay={0.5}>
          <ul className="space-y-3">
            {project.learnings.map((learning, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-base"
                style={{ color: 'rgba(255, 255, 255, 0.85)' }}
              >
                <span style={{ color: '#E91E8C' }}>•</span>
                {learning}
              </li>
            ))}
          </ul>
        </ContentSection>
      </div>
    </div>
  )
}

// Helper Components
function ContentSection({ title, delay, children }: { title: string; delay: number; children: React.ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className="mb-20"
    >
      <h2
        className="text-3xl sm:text-4xl font-bold text-white mb-8"
        style={{
          letterSpacing: '-0.01em',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
        }}
      >
        {title}
      </h2>
      {children}
    </motion.section>
  )
}

function FeatureCard({ feature, index }: { feature: { title: string; description: string }; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="p-6 rounded-2xl"
      style={{
        background: 'rgba(10, 5, 15, 0.5)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(199, 21, 133, 0.3)',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3)'
      }}
    >
      <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
      <p className="text-base leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>
        {feature.description}
      </p>
    </motion.div>
  )
}
