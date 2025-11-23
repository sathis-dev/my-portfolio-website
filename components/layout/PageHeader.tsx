'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { slideUp } from '@/lib/animations'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface PageHeaderProps {
  title: string
  subtitle?: string
  breadcrumbs?: BreadcrumbItem[]
  actions?: ReactNode
}

export default function PageHeader({
  title,
  subtitle,
  breadcrumbs,
  actions,
}: PageHeaderProps) {
  return (
    <div className="py-16 md:py-24 text-center">
      {breadcrumbs && (
        <motion.div
          initial="initial"
          animate="animate"
          variants={slideUp}
          transition={{ delay: 0 }}
          className="mb-6 flex justify-center"
        >
          <Breadcrumbs items={breadcrumbs} />
        </motion.div>
      )}

      <motion.h1
        initial="initial"
        animate="animate"
        variants={slideUp}
        transition={{ delay: breadcrumbs ? 0.1 : 0 }}
        className="text-display-lg font-display text-dark-text-primary"
      >
        {title}
      </motion.h1>

      {subtitle && (
        <motion.p
          initial="initial"
          animate="animate"
          variants={slideUp}
          transition={{ delay: breadcrumbs ? 0.2 : 0.1 }}
          className="text-body-lg text-dark-text-secondary mt-4 max-w-3xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}

      {actions && (
        <motion.div
          initial="initial"
          animate="animate"
          variants={slideUp}
          transition={{ delay: breadcrumbs ? 0.3 : 0.2 }}
          className="mt-8 flex gap-4 justify-center"
        >
          {actions}
        </motion.div>
      )}
    </div>
  )
}

