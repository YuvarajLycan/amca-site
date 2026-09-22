import { createContext, useContext, useEffect, useState  } from 'react'
import type {ReactNode} from 'react';

export type AccessTier = 'public' | 'verified' | 'member'

const STORAGE_KEY = 'amca-access'

type AccessState = {
  verified: boolean
  isMember: boolean
  email: string | null
}

const defaultState: AccessState = { verified: false, isMember: false, email: null }

const AccessContext = createContext<{
  state: AccessState
  verify: (email: string) => void
  login: (email: string) => void
  reset: () => void
  satisfies: (tier: AccessTier) => boolean
} | null>(null)

export function AccessProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AccessState>(defaultState)

  useEffect(() => {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (raw) {
      try {
        setState(JSON.parse(raw))
      } catch {
        // ignore malformed storage
      }
    }
  }, [])

  const persist = (next: AccessState) => {
    setState(next)
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  }

  const verify = (email: string) => persist({ ...state, verified: true, email })
  const login = (email: string) => persist({ verified: true, isMember: true, email })
  const reset = () => persist(defaultState)

  const satisfies = (tier: AccessTier) => {
    if (tier === 'public') return true
    if (tier === 'verified') return state.verified || state.isMember
    return state.isMember
  }

  return (
    <AccessContext.Provider value={{ state, verify, login, reset, satisfies }}>
      {children}
    </AccessContext.Provider>
  )
}

export function useAccess() {
  const ctx = useContext(AccessContext)
  if (!ctx) throw new Error('useAccess must be used within AccessProvider')
  return ctx
}

export const tierCopy: Record<AccessTier, { label: string; badgeClass: string }> = {
  public: { label: 'Open to industry', badgeClass: 'bg-teal-100 text-teal-600' },
  verified: { label: 'Verify to unlock', badgeClass: 'bg-amber-100 text-amber-700' },
  member: { label: 'Members only', badgeClass: 'bg-signal-100 text-signal-600' },
}
