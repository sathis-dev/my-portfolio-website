'use client'

import { useEffect } from 'react'

/**
 * Professional Website Protection Layer
 * - Protects content from easy copying
 * - Adds copyright notices
 * - Professional approach (not aggressive blocking)
 */
export default function ProtectionLayer() {
  useEffect(() => {
    // Disable right-click on images only (professional approach)
    const handleImageContext = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'IMG') {
        e.preventDefault()
      }
    }

    // Add copyright notice on text selection
    const handleCopy = (e: ClipboardEvent) => {
      const selection = window.getSelection()?.toString()
      if (selection && selection.length > 50) {
        const copyrightNotice = `\n\n© ${new Date().getFullYear()} Sathis Ravishka Hettiarachchi. All rights reserved.\nSource: ${window.location.href}`
        
        e.preventDefault()
        if (e.clipboardData) {
          e.clipboardData.setData('text/plain', selection + copyrightNotice)
        }
      }
    }

    // Professional keyboard shortcut protection
    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable common developer tools shortcuts (F12, Ctrl+Shift+I, Ctrl+U)
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.key === 'u')
      ) {
        // Only show message in development
        if (process.env.NODE_ENV === 'production') {
          e.preventDefault()
        }
      }
    }

    document.addEventListener('contextmenu', handleImageContext)
    document.addEventListener('copy', handleCopy)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('contextmenu', handleImageContext)
      document.removeEventListener('copy', handleCopy)
      document.removeEventListener('keydown', handleKeyDown)
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

