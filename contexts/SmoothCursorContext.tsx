'use client'

import { createContext, useContext, ReactNode } from 'react'

type CursorType = 'default' | 'link' | 'button' | 'card' | 'dragging' | 'typing' | 'loading'

interface CursorContextType {
  setCursorState: (state: CursorType) => void
}

const CursorContext = createContext<CursorContextType>({
  setCursorState: () => {},
})

export function useCursor() {
  return useContext(CursorContext)
}

export function CursorProvider({ children }: { children: ReactNode }) {
  const setCursorState = (state: CursorType) => {
    // This is a no-op for now - cursor state is managed via data attributes
    // But we keep this for compatibility with existing code
  }

  return (
    <CursorContext.Provider value={{ setCursorState }}>
      {children}
    </CursorContext.Provider>
  )
}

