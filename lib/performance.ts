'use client'

import { useEffect } from 'react'

export function usePerformanceMonitoring() {
  useEffect(() => {
    if (typeof window === 'undefined' || process.env.NODE_ENV !== 'production') {
      return
    }

    // Core Web Vitals monitoring
    if ('web-vitals' in window || typeof (window as any).webVitals !== 'undefined') {
      // Already loaded
      return
    }

    // Monitor performance
    const reportWebVitals = (metric: any) => {
      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log(metric)
      }

      // Send to analytics in production
      if (process.env.NODE_ENV === 'production') {
        const body = JSON.stringify({
          name: metric.name,
          value: metric.value,
          id: metric.id,
          delta: metric.delta,
          rating: metric.rating,
        })

        // Send to your analytics endpoint
        if (navigator.sendBeacon) {
          navigator.sendBeacon('/api/analytics/vitals', body)
        } else {
          fetch('/api/analytics/vitals', {
            method: 'POST',
            body,
            keepalive: true,
            headers: {
              'Content-Type': 'application/json',
            },
          }).catch(console.error)
        }
      }
    }

    // Dynamic import to avoid loading in SSR
    import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB, onINP }) => {
      onCLS(reportWebVitals)
      onFID(reportWebVitals)
      onFCP(reportWebVitals)
      onLCP(reportWebVitals)
      onTTFB(reportWebVitals)
      onINP(reportWebVitals)
    })
  }, [])
}

// Performance Budget Checker
export function checkPerformanceBudget() {
  if (typeof window === 'undefined') return

  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming

  if (!navigation) return

  const metrics = {
    // Time to First Byte
    ttfb: navigation.responseStart - navigation.requestStart,
    // First Contentful Paint (from PerformanceObserver)
    fcp: 0,
    // Largest Contentful Paint
    lcp: 0,
    // Total Blocking Time
    tbt: 0,
    // Cumulative Layout Shift
    cls: 0,
  }

  const budgets = {
    ttfb: 600, // 600ms
    fcp: 1800, // 1.8s
    lcp: 2500, // 2.5s
    tbt: 200, // 200ms
    cls: 0.1, // 0.1
  }

  // Check budgets
  Object.entries(metrics).forEach(([key, value]) => {
    const budget = budgets[key as keyof typeof budgets]
    if (value > budget) {
      console.warn(`⚠️ Performance Budget Exceeded: ${key} = ${value}ms (budget: ${budget}ms)`)
    }
  })
}


