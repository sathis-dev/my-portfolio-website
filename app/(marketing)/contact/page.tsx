'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Send, 
  Mail, 
  MapPin, 
  Calendar,
  Linkedin,
  Github,
  Download,
  CheckCircle2,
  AlertCircle,
  Loader2
} from 'lucide-react'
import { 
  sendContactEmails, 
  checkRateLimit, 
  setRateLimit,
  getRateLimitTimeRemaining,
  formatTimeRemaining
} from '@/lib/emailjs'
import Header from '@/components/layout/Header'
import { Confetti } from '@/components/ui/confetti'
import { BlurFade } from '@/components/ui/blur-fade'
import { Ripple } from '@/components/ui/ripple'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

const subjectOptions = [
  { value: '', label: 'Select a subject...' },
  { value: 'Project Inquiry', label: 'Project Inquiry' },
  { value: 'Freelance Opportunity', label: 'Freelance Opportunity' },
  { value: 'Collaboration', label: 'Collaboration' },
  { value: 'General Question', label: 'General Question' },
  { value: 'Other', label: 'Other' }
]

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    } else if (formData.name.trim().length > 100) {
      newErrors.name = 'Name must be less than 100 characters'
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Subject validation
    if (!formData.subject) {
      newErrors.subject = 'Please select a subject'
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = 'Message must be less than 1000 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Reset previous states
    setSubmitError(null)
    setSubmitSuccess(false)

    // Validate form
    if (!validateForm()) {
      return
    }

    // Check rate limit
    if (!checkRateLimit()) {
      const timeRemaining = getRateLimitTimeRemaining()
      const formattedTime = formatTimeRemaining(timeRemaining)
      setSubmitError(`Please wait ${formattedTime} before sending another message. This helps prevent spam.`)
      return
    }

    setIsSubmitting(true)

    try {
      // Send both emails (notification + auto-reply)
      const result = await sendContactEmails({
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Sathis',
        to_email: 'sathis.rc.dev@gmail.com'
      })

      if (result.success) {
        // Success!
        setSubmitSuccess(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        setRateLimit()
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false)
        }, 5000)
      } else {
        throw new Error('Failed to send email')
      }
    } catch (error) {
      console.error('Submit error:', error)
      setSubmitError('Failed to send message. Please try again or email me directly at sathis.rc.dev@gmail.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
    // Clear submit error
    if (submitError) {
      setSubmitError(null)
    }
  }

  return (
    <div className="min-h-screen relative">
      {/* Confetti Effect for Success */}
      <Confetti 
        active={submitSuccess} 
        duration={5} 
        particleCount={100}
        spread={90}
        origin={{ x: 50, y: 30 }}
      />
      
      {/* Continuous Background */}
      <div 
        className="fixed inset-0 -z-10"
        style={{
          background: '#0A050F'
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at top, rgba(199, 21, 133, 0.15) 0%, rgba(10, 5, 15, 0.95) 50%, rgba(10, 5, 15, 1) 100%)'
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 30% 50%, rgba(139, 92, 246, 0.08) 0%, transparent 50%)'
          }}
        />
      </div>

      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6"
              style={{
                letterSpacing: '-0.02em'
              }}
            >
              Get In Touch
            </h1>
            <p 
              className="text-base sm:text-lg max-w-[700px] mx-auto leading-relaxed"
              style={{
                color: 'rgba(255, 255, 255, 0.85)'
              }}
            >
              Have a project in mind or want to collaborate? Let&apos;s talk.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 pb-32">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Success Message */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-xl flex items-center gap-3"
                    style={{
                      background: 'rgba(16, 185, 129, 0.1)',
                      border: '1px solid rgba(16, 185, 129, 0.3)'
                    }}
                  >
                    <CheckCircle2 size={20} style={{ color: '#10B981', flexShrink: 0 }} />
                    <div>
                      <p className="text-sm font-semibold" style={{ color: '#10B981' }}>
                        Message sent successfully! 🎉
                      </p>
                      <p className="text-xs mt-1" style={{ color: 'rgba(16, 185, 129, 0.8)' }}>
                        I&apos;ll get back to you within 24-48 hours. Check your email for a confirmation.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Error Message */}
              <AnimatePresence>
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-xl flex items-start gap-3"
                    style={{
                      background: 'rgba(239, 68, 68, 0.1)',
                      border: '1px solid rgba(239, 68, 68, 0.3)'
                    }}
                  >
                    <AlertCircle size={20} style={{ color: '#EF4444', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <p className="text-sm font-semibold" style={{ color: '#EF4444' }}>
                        {submitError}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-white mb-2">
                    Your Name <span style={{ color: '#E91E8C' }}>*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="John Doe"
                    disabled={isSubmitting}
                    className="w-full px-5 py-4 rounded-xl text-white text-[0.9375rem] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      background: 'rgba(10, 5, 15, 0.6)',
                      backdropFilter: 'blur(20px) saturate(90%)',
                      border: errors.name 
                        ? '1px solid rgba(239, 68, 68, 0.5)' 
                        : '1px solid rgba(199, 21, 133, 0.25)',
                      boxShadow: errors.name
                        ? '0 4px 16px rgba(239, 68, 68, 0.2)'
                        : '0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                    }}
                  />
                  {errors.name && (
                    <div className="flex items-center gap-2 mt-2 text-xs" style={{ color: '#EF4444' }}>
                      <AlertCircle size={14} />
                      {errors.name}
                    </div>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-white mb-2">
                    Email Address <span style={{ color: '#E91E8C' }}>*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="john@example.com"
                    disabled={isSubmitting}
                    className="w-full px-5 py-4 rounded-xl text-white text-[0.9375rem] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      background: 'rgba(10, 5, 15, 0.6)',
                      backdropFilter: 'blur(20px) saturate(90%)',
                      border: errors.email 
                        ? '1px solid rgba(239, 68, 68, 0.5)' 
                        : '1px solid rgba(199, 21, 133, 0.25)',
                      boxShadow: errors.email
                        ? '0 4px 16px rgba(239, 68, 68, 0.2)'
                        : '0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                    }}
                  />
                  {errors.email && (
                    <div className="flex items-center gap-2 mt-2 text-xs" style={{ color: '#EF4444' }}>
                      <AlertCircle size={14} />
                      {errors.email}
                    </div>
                  )}
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-white mb-2">
                    Subject <span style={{ color: '#E91E8C' }}>*</span>
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => handleChange('subject', e.target.value)}
                    disabled={isSubmitting}
                    className="w-full px-5 py-4 rounded-xl text-white text-[0.9375rem] transition-all duration-300 cursor-pointer appearance-none disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      background: 'rgba(10, 5, 15, 0.6)',
                      backdropFilter: 'blur(20px) saturate(90%)',
                      border: errors.subject 
                        ? '1px solid rgba(239, 68, 68, 0.5)' 
                        : '1px solid rgba(199, 21, 133, 0.25)',
                      boxShadow: errors.subject
                        ? '0 4px 16px rgba(239, 68, 68, 0.2)'
                        : '0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.7)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center',
                      paddingRight: '3rem'
                    }}
                  >
                    {subjectOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.subject && (
                    <div className="flex items-center gap-2 mt-2 text-xs" style={{ color: '#EF4444' }}>
                      <AlertCircle size={14} />
                      {errors.subject}
                    </div>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-white mb-2">
                    Message <span style={{ color: '#E91E8C' }}>*</span>
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Tell me about your project or inquiry..."
                    rows={6}
                    disabled={isSubmitting}
                    className="w-full px-5 py-4 rounded-xl text-white text-[0.9375rem] transition-all duration-300 resize-y disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      background: 'rgba(10, 5, 15, 0.6)',
                      backdropFilter: 'blur(20px) saturate(90%)',
                      border: errors.message 
                        ? '1px solid rgba(239, 68, 68, 0.5)' 
                        : '1px solid rgba(199, 21, 133, 0.25)',
                      boxShadow: errors.message
                        ? '0 4px 16px rgba(239, 68, 68, 0.2)'
                        : '0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                      minHeight: '150px'
                    }}
                  />
                  {errors.message && (
                    <div className="flex items-center gap-2 mt-2 text-xs" style={{ color: '#EF4444' }}>
                      <AlertCircle size={14} />
                      {errors.message}
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? { y: -2 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  className="w-full py-5 rounded-2xl text-base font-bold text-white transition-all duration-300 flex items-center justify-center gap-3"
                  style={{
                    background: isSubmitting 
                      ? 'rgba(255, 255, 255, 0.1)' 
                      : 'linear-gradient(135deg, #C71585 0%, #8B5CF6 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: isSubmitting 
                      ? 'none' 
                      : '0 4px 16px rgba(199, 21, 133, 0.4)',
                    cursor: isSubmitting ? 'wait' : 'pointer',
                    opacity: isSubmitting ? 0.8 : 1
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={20} />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Availability Card */}
              <motion.div
                whileHover={{ y: -2 }}
                className="rounded-3xl p-8 transition-all duration-300"
                style={{
                  background: 'rgba(10, 5, 15, 0.4)',
                  backdropFilter: 'blur(20px) saturate(90%)',
                  border: '1px solid rgba(199, 21, 133, 0.25)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: 'rgba(139, 92, 246, 0.15)',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                    boxShadow: '0 4px 16px rgba(139, 92, 246, 0.2)'
                  }}
                >
                  <Calendar size={24} style={{ color: '#10B981' }} />
                </div>
                <h3 className="text-xl font-extrabold text-white mb-2">
                  Availability
                </h3>
                <p 
                  className="text-sm font-semibold mb-3"
                  style={{ color: '#10B981' }}
                >
                  Available for freelance projects
                </p>
                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: 'rgba(255, 255, 255, 0.75)' }}
                >
                  Currently accepting frontend and AI integration projects. Response time: 24-48 hours.
                </p>
              </motion.div>

              {/* Location Card */}
              <motion.div
                whileHover={{ y: -2 }}
                className="rounded-3xl p-8 transition-all duration-300"
                style={{
                  background: 'rgba(10, 5, 15, 0.4)',
                  backdropFilter: 'blur(20px) saturate(90%)',
                  border: '1px solid rgba(199, 21, 133, 0.25)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: 'rgba(139, 92, 246, 0.15)',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                    boxShadow: '0 4px 16px rgba(139, 92, 246, 0.2)'
                  }}
                >
                  <MapPin size={24} style={{ color: '#8B5CF6' }} />
                </div>
                <h3 className="text-xl font-extrabold text-white mb-2">
                  Location
                </h3>
                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: 'rgba(255, 255, 255, 0.75)' }}
                >
                  Cambridge, UK<br />
                  GMT (UTC+0) • Open to remote work
                </p>
              </motion.div>

              {/* Direct Contact Card */}
              <motion.div
                whileHover={{ y: -2 }}
                className="rounded-3xl p-8 transition-all duration-300"
                style={{
                  background: 'rgba(10, 5, 15, 0.4)',
                  backdropFilter: 'blur(20px) saturate(90%)',
                  border: '1px solid rgba(199, 21, 133, 0.25)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}
              >
                <h3 className="text-xl font-extrabold text-white mb-4">
                  Direct Contact
                </h3>
                <div className="space-y-3">
                  <a
                    href="mailto:sathis.rc.dev@gmail.com"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300"
                    style={{
                      background: 'transparent',
                      border: '1px solid transparent'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(199, 21, 133, 0.1)'
                      e.currentTarget.style.borderColor = 'rgba(199, 21, 133, 0.25)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.borderColor = 'transparent'
                    }}
                  >
                    <Mail size={18} style={{ color: '#E91E8C' }} />
                    <span 
                      className="text-sm font-semibold"
                      style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                    >
                      sathis.rc.dev@gmail.com
                    </span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/sathis-hettiarachchi-52b4b436a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300"
                    style={{
                      background: 'transparent',
                      border: '1px solid transparent'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(199, 21, 133, 0.1)'
                      e.currentTarget.style.borderColor = 'rgba(199, 21, 133, 0.25)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.borderColor = 'transparent'
                    }}
                  >
                    <Linkedin size={18} style={{ color: '#0A66C2' }} />
                    <span 
                      className="text-sm font-semibold"
                      style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                    >
                      linkedin.com/in/sathis-hettiarachchi
                    </span>
                  </a>

                  <a
                    href="https://github.com/sathis-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300"
                    style={{
                      background: 'transparent',
                      border: '1px solid transparent'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(199, 21, 133, 0.1)'
                      e.currentTarget.style.borderColor = 'rgba(199, 21, 133, 0.25)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.borderColor = 'transparent'
                    }}
                  >
                    <Github size={18} style={{ color: '#FFFFFF' }} />
                    <span 
                      className="text-sm font-semibold"
                      style={{ color: 'rgba(255, 255, 255, 0.85)' }}
                    >
                      github.com/sathis-dev
                    </span>
                  </a>
                </div>
              </motion.div>

              {/* Download CV Card */}
              <motion.div
                whileHover={{ y: -2 }}
                className="rounded-3xl p-8 transition-all duration-300"
                style={{
                  background: 'rgba(10, 5, 15, 0.4)',
                  backdropFilter: 'blur(20px) saturate(90%)',
                  border: '1px solid rgba(199, 21, 133, 0.25)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}
              >
                <h3 className="text-xl font-extrabold text-white mb-4">
                  Download CV
                </h3>
                <motion.a
                  href="/cv.pdf"
                  download
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-base font-bold text-white transition-all duration-300"
                  style={{
                    background: 'rgba(199, 21, 133, 0.1)',
                    border: '1px solid rgba(199, 21, 133, 0.3)'
                  }}
                >
                  Download PDF
                  <Download size={20} />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
