'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import {
  DeviceCapabilities,
  ExperienceTier,
  detectDeviceCapabilities,
  determineExperienceTier,
  shouldEnableFeature,
} from '@/lib/device-detection'

interface DeviceContextType {
  capabilities: DeviceCapabilities
  tier: ExperienceTier
  isFeatureEnabled: (feature: string) => boolean
  isLoading: boolean
}

const DeviceContext = createContext<DeviceContextType | undefined>(undefined)

export function useDevice() {
  const context = useContext(DeviceContext)
  if (!context) {
    throw new Error('useDevice must be used within DeviceProvider')
  }
  return context
}

export function DeviceProvider({ children }: { children: ReactNode }) {
  const [capabilities, setCapabilities] = useState<DeviceCapabilities>({
    isTouch: false,
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    hasWebGL: false,
    hasWebGL2: false,
    deviceMemory: 4,
    hardwareConcurrency: 4,
    connectionSpeed: '4g',
    prefersReducedMotion: false,
    prefersDarkMode: false,
  })
  const [tier, setTier] = useState<ExperienceTier>('enhanced')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const detected = detectDeviceCapabilities()
    const experienceTier = determineExperienceTier(detected)
    
    setCapabilities(detected)
    setTier(experienceTier)
    setIsLoading(false)

    // Log for debugging (remove in production)
    console.log('📱 Device Capabilities:', detected)
    console.log('🎯 Experience Tier:', experienceTier)
  }, [])

  const isFeatureEnabled = (feature: string) => {
    return shouldEnableFeature(feature, tier)
  }

  return (
    <DeviceContext.Provider value={{ capabilities, tier, isFeatureEnabled, isLoading }}>
      {children}
    </DeviceContext.Provider>
  )
}


