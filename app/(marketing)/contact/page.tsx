'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { MapPin, Mail, Linkedin, Github, Download, CheckCircle, AlertCircle, Calendar, Phone, Zap, MessageCircle } from 'lucide-react'
import Header from '@/components/layout/Header'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import PageHeader from '@/components/layout/PageHeader'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import Select from '@/components/ui/Select'
import Button from '@/components/ui/Button'
import { slideUp, stagger } from '@/lib/animations'
import { contactFormSchema, type ContactFormData } from '@/lib/validations'
import { SITE_CONFIG } from '@/lib/constants'

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Header */}
      <Header />
      
      <Container>
        <PageHeader
          title="Get In Touch"
          subtitle="Have a project in mind or want to collaborate? Let's talk."
        />
      </Container>

      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={slideUp}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <Input
                  label="Your Name"
                  placeholder="John Doe"
                  required
                  error={errors.name?.message}
                  {...register('name')}
                />

                <Input
                  type="email"
                  label="Email Address"
                  placeholder="john@example.com"
                  required
                  error={errors.email?.message}
                  {...register('email')}
                />

                <Select
                  label="Subject"
                  placeholder="Select a subject"
                  required
                  options={[
                    { value: 'project', label: 'Project Inquiry' },
                    { value: 'collaboration', label: 'Collaboration' },
                    { value: 'job', label: 'Job Opportunity' },
                    { value: 'other', label: 'Other' },
                  ]}
                  error={errors.subject?.message}
                  {...register('subject')}
                />

                <Textarea
                  label="Message"
                  placeholder="Tell me about your project or inquiry..."
                  rows={6}
                  required
                  error={errors.message?.message}
                  {...register('message')}
                />

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  loading={isSubmitting}
                  icon="Send"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-3 p-4 bg-semantic-success/10 border border-semantic-success/20 rounded-lg"
                  >
                    <CheckCircle size={20} className="text-semantic-success flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-dark-text-primary">Message Sent!</p>
                      <p className="text-body-sm text-dark-text-secondary">
                        Thank you for reaching out. I&apos;ll get back to you within 24-48 hours.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-3 p-4 bg-semantic-error/10 border border-semantic-error/20 rounded-lg"
                  >
                    <AlertCircle size={20} className="text-semantic-error flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-dark-text-primary">Oops! Something went wrong</p>
                      <p className="text-body-sm text-dark-text-secondary">
                        Please try again or email me directly at hello@sathis.dev
                      </p>
                    </div>
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger}
              className="space-y-6"
            >
              {/* Availability */}
              <motion.div variants={slideUp} className="glass rounded-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-semantic-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar size={24} className="text-semantic-success" />
                  </div>
                  <div>
                    <h3 className="text-h5 font-semibold text-dark-text-primary mb-2">
                      Availability
                    </h3>
                    <p className="text-body-sm text-semantic-success mb-2 font-medium">
                      Available for freelance projects
                    </p>
                    <p className="text-body-sm text-dark-text-secondary">
                      Currently accepting frontend and AI integration projects. Response time: 24-48 hours.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div variants={slideUp} className="glass rounded-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-h5 font-semibold text-dark-text-primary mb-2">
                      Location
                    </h3>
                    <p className="text-body-sm text-dark-text-secondary">
                      {SITE_CONFIG.location.city}, {SITE_CONFIG.location.country}
                    </p>
                    <p className="text-body-sm text-dark-text-tertiary">
                      GMT (UTC+0) • Open to remote work
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Direct Contact */}
              <motion.div variants={slideUp} className="glass rounded-card p-6">
                <h3 className="text-h5 font-semibold text-dark-text-primary mb-4">
                  Direct Contact
                </h3>
                <div className="space-y-3">
                  <a
                    href="mailto:hello@sathis.dev"
                    className="flex items-center gap-3 text-body-sm text-dark-text-secondary hover:text-primary-500 transition-colors group"
                  >
                    <Mail size={18} className="text-primary-500" />
                    <span className="group-hover:underline">hello@sathis.dev</span>
                  </a>
                  <a
                    href={SITE_CONFIG.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-body-sm text-dark-text-secondary hover:text-primary-500 transition-colors group"
                  >
                    <Linkedin size={18} className="text-primary-500" />
                    <span className="group-hover:underline">linkedin.com/in/sathis</span>
                  </a>
                  <a
                    href={SITE_CONFIG.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-body-sm text-dark-text-secondary hover:text-primary-500 transition-colors group"
                  >
                    <Github size={18} className="text-primary-500" />
                    <span className="group-hover:underline">github.com/sathis</span>
                  </a>
                </div>
              </motion.div>

              {/* Download CV */}
              <motion.div variants={slideUp} className="glass rounded-card p-6">
                <h3 className="text-h5 font-semibold text-dark-text-primary mb-4">
                  Download CV
                </h3>
                <Button
                  variant="outline"
                  size="md"
                  fullWidth
                  icon="Download"
                  href="/cv.pdf"
                >
                  Download PDF
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* What to Expect */}
      <Section background="secondary">
        <Container>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={slideUp}
            className="text-center mb-12"
          >
            <h2 className="text-h2 font-display text-dark-text-primary mb-4">
              What to Expect
            </h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Zap,
                title: 'Quick Response',
                description: 'I typically respond within 24-48 hours',
              },
              {
                icon: MessageCircle,
                title: 'Detailed Discussion',
                description: "We'll discuss your project requirements and timeline",
              },
              {
                icon: CheckCircle,
                title: 'Clear Next Steps',
                description: "You'll receive a clear proposal or timeline",
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  variants={slideUp}
                  custom={index}
                  className="glass rounded-card p-6 text-center"
                >
                  <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} className="text-primary-500" />
                  </div>
                  <h3 className="text-h5 font-semibold text-dark-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-body-sm text-dark-text-secondary">
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </Container>
      </Section>
    </>
  )
}

