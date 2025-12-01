'use client'

import { useEffect, useState } from 'react'

/**
 * MAXIMUM Website Protection Layer
 * Advanced security to prevent content theft and unauthorized access
 */
export default function ProtectionLayer() {
  const [devToolsOpen, setDevToolsOpen] = useState(false)

  useEffect(() => {
    // 1. DISABLE RIGHT-CLICK COMPLETELY
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      return false
    }

    // 2. PROTECT COPY/PASTE WITH WATERMARK
    const handleCopy = (e: ClipboardEvent) => {
      const selection = window.getSelection()?.toString()
      if (selection) {
        const watermark = `\n\n━━━━━━━━━━━━━━━━━━━━━━\n© ${new Date().getFullYear()} Sathis Ravishka Hettiarachchi\nAll Rights Reserved\nSource: ${window.location.href}\n━━━━━━━━━━━━━━━━━━━━━━`
        
        e.preventDefault()
        if (e.clipboardData) {
          e.clipboardData.setData('text/plain', selection + watermark)
        }
      }
    }

    // 3. DISABLE DEVELOPER TOOLS SHORTCUTS
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+Shift+C
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) ||
        (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j')) ||
        (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c')) ||
        (e.ctrlKey && (e.key === 'U' || e.key === 'u'))
      ) {
        e.preventDefault()
        return false
      }

      // Disable Ctrl+S (save page)
      if (e.ctrlKey && (e.key === 'S' || e.key === 's')) {
        e.preventDefault()
        return false
      }

      // Disable Print Screen
      if (e.key === 'PrintScreen') {
        e.preventDefault()
        return false
      }
    }

    // 4. DETECT DEVTOOLS OPEN
    const detectDevTools = () => {
      const threshold = 160
      const widthThreshold = window.outerWidth - window.innerWidth > threshold
      const heightThreshold = window.outerHeight - window.innerHeight > threshold
      
      if (widthThreshold || heightThreshold) {
        setDevToolsOpen(true)
        // Clear console
        console.clear()
        // Redirect or show warning
        console.warn('%c⚠️ STOP!', 'color: red; font-size: 50px; font-weight: bold;')
        console.warn('%cThis is a protected website.', 'font-size: 20px;')
        console.warn('%c© 2025 Sathis Ravishka Hettiarachchi. All rights reserved.', 'font-size: 14px; color: #888;')
      } else {
        setDevToolsOpen(false)
      }
    }

    // 5. DISABLE TEXT SELECTION ON CODE ELEMENTS
    const disableCodeSelection = () => {
      document.querySelectorAll('code, pre').forEach((el) => {
        (el as HTMLElement).style.userSelect = 'none'
        ;(el as HTMLElement).style.webkitUserSelect = 'none'
      })
    }

    // 6. CLEAR CONSOLE WITH COPYRIGHT
    console.clear()
    console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #E91E8C; font-weight: bold;')
    console.log('%c© 2025 Sathis Ravishka Hettiarachchi', 'color: #8B5CF6; font-size: 16px; font-weight: bold;')
    console.log('%cAll Rights Reserved', 'color: #fff; font-size: 12px;')
    console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #E91E8C; font-weight: bold;')
    console.log('')
    console.log('%c⚠️  This website is protected.', 'color: #FBBF24; font-size: 14px; font-weight: bold;')
    console.log('%cUnauthorized copying or reproduction is prohibited.', 'color: #888; font-size: 12px;')

    // Attach event listeners
    document.addEventListener('contextmenu', handleContextMenu)
    document.addEventListener('copy', handleCopy)
    document.addEventListener('keydown', handleKeyDown)
    
    // Run protections
    disableCodeSelection()
    
    // Check for DevTools every second
    const devToolsInterval = setInterval(detectDevTools, 1000)

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('copy', handleCopy)
      document.removeEventListener('keydown', handleKeyDown)
      clearInterval(devToolsInterval)
    }
  }, [])

  return (
    <>
      {/* Copyright Watermark (invisible but in DOM) */}
      <div 
        style={{ 
          position: 'fixed', 
          bottom: 0, 
          right: 0, 
          opacity: 0, 
          pointerEvents: 'none',
          userSelect: 'none'
        }}
        aria-hidden="true"
      >
        © {new Date().getFullYear()} Sathis Ravishka Hettiarachchi. All Rights Reserved.
      </div>

      {/* Meta Copyright in Head (SEO) */}
      <meta name="copyright" content={`© ${new Date().getFullYear()} Sathis Ravishka Hettiarachchi`} />
      <meta name="author" content="Sathis Ravishka Hettiarachchi" />
    </>
  )
}

