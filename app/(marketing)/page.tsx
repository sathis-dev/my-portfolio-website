'use client'

import HeroSection from '@/components/sections/HeroSection'
import CTASection from '@/components/sections/CTASection'

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Already includes Header with animations */}
      <HeroSection />

      {/* CTA Section - Seamless continuation with DarkVeil */}
      <CTASection />
    </>
  )
}

