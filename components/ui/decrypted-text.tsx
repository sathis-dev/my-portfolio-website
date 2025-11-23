'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface DecryptedTextProps {
  text: string
  speed?: number
  className?: string
  interval?: number
}

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?'

export function DecryptedText({ 
  text, 
  speed = 80, 
  className = '',
  interval = 1500 
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState(text) // Start with actual text to prevent layout shift
  const [isDecrypting, setIsDecrypting] = useState(false)

  useEffect(() => {
    let currentIndex = 0
    let animationFrame: NodeJS.Timeout

    const decrypt = () => {
      if (currentIndex <= text.length) {
        // Build the decrypted part + scrambled part
        const decrypted = text.slice(0, currentIndex)
        const scrambled = text
          .slice(currentIndex)
          .split('')
          .map((char) => {
            // Preserve spaces and punctuation
            if (char === ' ' || char === ',' || char === '.') {
              return char
            }
            return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)]
          })
          .join('')

        setDisplayText(decrypted + scrambled)
        currentIndex++

        animationFrame = setTimeout(decrypt, speed)
      } else {
        setDisplayText(text)
        setIsDecrypting(false)
      }
    }

    // Start decryption after a delay
    const startTimeout = setTimeout(() => {
      setIsDecrypting(true)
      decrypt()
    }, interval)

    return () => {
      clearTimeout(startTimeout)
      clearTimeout(animationFrame)
    }
  }, [text, speed, interval])

  return (
    <span
      className={`inline-block ${className}`}
      style={{
        fontFamily: 'var(--font-sans)',
        textShadow: isDecrypting 
          ? '0 0 4px rgba(199, 21, 133, 0.3)' 
          : 'none',
        transition: 'text-shadow 0.3s ease',
      }}
    >
      {displayText}
      {isDecrypting && (
        <motion.span
          className="inline-block ml-0.5"
          animate={{
            opacity: [0.8, 0.2, 0.8],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            color: '#C71585',
            textShadow: '0 0 6px rgba(199, 21, 133, 0.5)',
          }}
        >
          |
        </motion.span>
      )}
    </span>
  )
}

