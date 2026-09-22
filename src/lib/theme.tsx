import { createContext, useContext, useEffect, useState  } from 'react'
import type {ReactNode} from 'react';

export type ThemeName = 'refined' | 'brand'

const STORAGE_KEY = 'amca-theme'

const ThemeContext = createContext<{
  theme: ThemeName
  setTheme: (t: ThemeName) => void
} | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>('refined')

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'brand' || stored === 'refined') {
      setThemeState(stored)
    }
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme === 'brand' ? 'brand' : ''
  }, [theme])

  const setTheme = (t: ThemeName) => {
    setThemeState(t)
    window.localStorage.setItem(STORAGE_KEY, t)
  }

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
