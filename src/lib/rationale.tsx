import { createContext, useContext, useEffect, useState  } from 'react'
import type {ReactNode} from 'react';
import { Lightbulb } from 'lucide-react'

const STORAGE_KEY = 'amca-show-rationale'

const RationaleContext = createContext<{
  show: boolean
  setShow: (v: boolean) => void
} | null>(null)

export function RationaleProvider({ children }: { children: ReactNode }) {
  const [show, setShowState] = useState(false)

  useEffect(() => {
    setShowState(window.localStorage.getItem(STORAGE_KEY) === '1')
  }, [])

  const setShow = (v: boolean) => {
    setShowState(v)
    window.localStorage.setItem(STORAGE_KEY, v ? '1' : '0')
  }

  return (
    <RationaleContext.Provider value={{ show, setShow }}>{children}</RationaleContext.Provider>
  )
}

function useRationale() {
  const ctx = useContext(RationaleContext)
  if (!ctx) throw new Error('useRationale must be used within RationaleProvider')
  return ctx
}

export { useRationale }

/**
 * Drop this next to any section to explain, in the reviewer's own view of
 * the page, why that section exists — grounded in the audit data or the
 * decision it responds to. Invisible unless "Show design notes" is on.
 */
export function Why({ children }: { children: ReactNode }) {
  const { show } = useRationale()
  if (!show) return null
  return (
    <div className="mt-4 flex gap-3 rounded-xl border border-dashed border-amber-400/60 bg-amber-50 p-4 text-sm leading-relaxed text-amber-900">
      <Lightbulb size={16} className="mt-0.5 shrink-0 text-amber-600" />
      <p>
        <span className="font-semibold">Why this is here: </span>
        {children}
      </p>
    </div>
  )
}
