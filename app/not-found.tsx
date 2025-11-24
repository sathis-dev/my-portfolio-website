'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import { pageTransitions } from '@/lib/animations'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Container>
        <motion.div
          initial="initial"
          animate="animate"
          variants={pageTransitions.slideUp}
          className="max-w-2xl mx-auto text-center"
        >
          <h1 className="text-display-xl font-display text-dark-text-primary mb-4">
            404
          </h1>
          <h2 className="text-h2 font-display text-dark-text-primary mb-4">
            Page Not Found
          </h2>
          <p className="text-body-lg text-dark-text-secondary mb-8">
            Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="primary" size="lg" icon="Home" href="/">
              Go Home
            </Button>
            <Button variant="ghost" size="lg" onClick={() => window.history.back()}>
              <ArrowLeft size={20} />
              Go Back
            </Button>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}

