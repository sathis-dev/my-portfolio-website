import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import DarkVeil from '@/components/effects/DarkVeil'
import ProtectionLayer from '@/components/ProtectionLayer'
import LiveActivityTracker from '@/components/LiveActivityTracker'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Global DarkVeil Background - Covers Everything */}
      <div className="fixed inset-0 -z-10 mobile-darkveil">
        <DarkVeil
          hueShift={280}
          noiseIntensity={0.015}
          scanlineIntensity={0}
          speed={0.3}
          scanlineFrequency={0}
          warpAmount={0.12}
          resolutionScale={1}
        />
      </div>

      {/* Dark Overlay for Enhanced Content Contrast */}
      <div 
        className="fixed inset-0 -z-9 mobile-overlay"
        style={{
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.5) 100%)',
          pointerEvents: 'none'
        }}
      />

      {/* Unified Header - Appears on ALL pages */}
      <Header />
      
      {/* Main Content */}
      <main id="main-content" className="relative">
        {children}
      </main>

      {/* Footer - Seamless continuation */}
      <Footer />

      {/* Protection Layer - Security & Copyright */}
      <ProtectionLayer />

      {/* REAL Live Activity Tracker - Actual Visitor Data */}
      <LiveActivityTracker />
    </div>
  )
}

