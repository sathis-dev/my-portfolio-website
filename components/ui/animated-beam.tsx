'use client'

/**
 * Animated Beam Component - Shows connections with animated beams
 * Perfect for showing workflow, connections, or relationships
 */

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface AnimatedBeamProps {
  containerRef: React.RefObject<HTMLElement>
  fromRef: React.RefObject<HTMLElement>
  toRef: React.RefObject<HTMLElement>
  duration?: number
  delay?: number
  pathColor?: string
  pathWidth?: number
  pathOpacity?: number
  gradientStartColor?: string
  gradientStopColor?: string
  curvature?: number
  reverse?: boolean
  startXOffset?: number
  startYOffset?: number
  endXOffset?: number
  endYOffset?: number
}

export function AnimatedBeam({
  containerRef,
  fromRef,
  toRef,
  duration = 3,
  delay = 0,
  pathColor = 'rgba(199, 21, 133, 0.2)',
  pathWidth = 2,
  pathOpacity = 1,
  gradientStartColor = '#C71585',
  gradientStopColor = '#8B5CF6',
  curvature = 0,
  reverse = false,
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
}: AnimatedBeamProps) {
  const [pathD, setPathD] = useState('')
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 })
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const updatePath = () => {
      if (!containerRef.current || !fromRef.current || !toRef.current) return

      const containerRect = containerRef.current.getBoundingClientRect()
      const fromRect = fromRef.current.getBoundingClientRect()
      const toRect = toRef.current.getBoundingClientRect()

      const startX = fromRect.left - containerRect.left + fromRect.width / 2 + startXOffset
      const startY = fromRect.top - containerRect.top + fromRect.height / 2 + startYOffset
      const endX = toRect.left - containerRect.left + toRect.width / 2 + endXOffset
      const endY = toRect.top - containerRect.top + toRect.height / 2 + endYOffset

      const controlX = (startX + endX) / 2
      const controlY = (startY + endY) / 2 - curvature

      const path = `M ${startX},${startY} Q ${controlX},${controlY} ${endX},${endY}`

      setPathD(path)
      setSvgDimensions({
        width: containerRect.width,
        height: containerRect.height,
      })
    }

    updatePath()

    const resizeObserver = new ResizeObserver(updatePath)
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }

    window.addEventListener('resize', updatePath)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', updatePath)
    }
  }, [containerRef, fromRef, toRef, curvature, startXOffset, startYOffset, endXOffset, endYOffset])

  return (
    <svg
      ref={svgRef}
      className="pointer-events-none absolute inset-0 z-10"
      width={svgDimensions.width}
      height={svgDimensions.height}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
      fill="none"
    >
      <defs>
        <linearGradient
          id={`beam-gradient-${fromRef.current?.id}-${toRef.current?.id}`}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop stopColor={gradientStartColor} stopOpacity="0" />
          <stop offset="50%" stopColor={gradientStartColor} />
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0" />
        </linearGradient>
      </defs>
      
      {/* Background Path */}
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Animated Gradient Beam */}
      <path
        d={pathD}
        stroke={`url(#beam-gradient-${fromRef.current?.id}-${toRef.current?.id})`}
        strokeWidth={pathWidth + 1}
        strokeLinecap="round"
        fill="none"
      >
        <animate
          attributeName="stroke-dasharray"
          from={reverse ? '0 100' : '100 0'}
          to={reverse ? '100 0' : '0 100'}
          dur={`${duration}s`}
          begin={`${delay}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to={reverse ? '100' : '-100'}
          dur={`${duration}s`}
          begin={`${delay}s`}
          repeatCount="indefinite"
        />
      </path>
      
      {/* Glow Effect */}
      <path
        d={pathD}
        stroke={gradientStartColor}
        strokeWidth={pathWidth * 3}
        strokeOpacity={0.1}
        strokeLinecap="round"
        fill="none"
        filter="blur(8px)"
      />
    </svg>
  )
}


