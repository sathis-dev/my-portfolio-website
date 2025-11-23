'use client'

import React, { useRef, HTMLAttributes } from 'react'
import { useMagneticEffect } from '@/hooks/useMagneticEffect'

interface MagneticButtonProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  strength?: number
  maxDistance?: number
  cursorState?: 'button' | 'link' | 'card'
  cursorText?: string
}

export function MagneticButton({
  children,
  strength = 0.4,
  maxDistance = 150,
  cursorState = 'button',
  cursorText,
  className = '',
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)

  useMagneticEffect(ref, { strength, maxDistance })

  return (
    <div
      ref={ref}
      className={`inline-block ${className}`}
      data-cursor={cursorState}
      data-cursor-text={cursorText}
      data-cursor-magnetic
      {...props}
    >
      {children}
    </div>
  )
}

