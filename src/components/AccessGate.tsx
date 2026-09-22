import { useState  } from 'react'
import type {ReactNode} from 'react';
import { KeyRound, Lock, Mail, ShieldCheck } from 'lucide-react'
import { useAccess, tierCopy  } from '../lib/access'
import type {AccessTier} from '../lib/access';
import { Button } from './Button'

export function AccessBadge({ tier }: { tier: AccessTier }) {
  const copy = tierCopy[tier]
  return (
    <span
      className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${copy.badgeClass}`}
    >
      {copy.label}
    </span>
  )
}

const DEMO_CODE = '123456'

function OtpUnlock({ onUnlock }: { onUnlock: (email: string) => void }) {
  const [step, setStep] = useState<'email' | 'code'>('email')
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [error, setError] = useState('')

  return (
    <div className="rounded-2xl border border-amber-300 bg-amber-50 p-6">
      <Mail size={20} className="text-amber-600" />
      <h3 className="mt-3 text-sm font-bold text-navy-950">
        Free to read — verify your email first
      </h3>
      <p className="mt-1.5 text-xs leading-relaxed text-ink-500">
        AMCA sends a one-time code so we know who&apos;s reading, without asking you to create an
        account. This is a demo preview: no email is actually sent — use code{' '}
        <span className="font-mono font-semibold">{DEMO_CODE}</span>.
      </p>

      {step === 'email' ? (
        <form
          className="mt-4 flex flex-col gap-2 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault()
            if (!email) return
            setStep('code')
          }}
        >
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com.au"
            className="flex-1 rounded-xl border border-amber-300 bg-white px-4 py-2.5 text-sm text-navy-950 focus:border-navy-950 focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-xl bg-navy-950 px-4 py-2.5 text-sm font-semibold text-white hover:bg-navy-800"
          >
            Send code
          </button>
        </form>
      ) : (
        <form
          className="mt-4 flex flex-col gap-2 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault()
            if (code !== DEMO_CODE) {
              setError('That code doesn’t match — try the demo code above.')
              return
            }
            onUnlock(email)
          }}
        >
          <input
            required
            inputMode="numeric"
            value={code}
            onChange={(e) => {
              setCode(e.target.value)
              setError('')
            }}
            placeholder="6-digit code"
            className="flex-1 rounded-xl border border-amber-300 bg-white px-4 py-2.5 text-sm text-navy-950 focus:border-navy-950 focus:outline-none"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-navy-950 px-4 py-2.5 text-sm font-semibold text-white hover:bg-navy-800"
          >
            <KeyRound size={14} />
            Verify
          </button>
        </form>
      )}
      {error && <p className="mt-2 text-xs font-medium text-red-600">{error}</p>}
      {step === 'code' && (
        <p className="mt-3 text-[11px] text-ink-500">
          A code was &ldquo;sent&rdquo; to <span className="font-medium">{email}</span>.{' '}
          <button type="button" onClick={() => setStep('email')} className="underline">
            Use a different email
          </button>
        </p>
      )}
    </div>
  )
}

function MemberUnlock({ onUnlock }: { onUnlock: (email: string) => void }) {
  const [email, setEmail] = useState('')

  return (
    <div className="rounded-2xl border border-signal-200 bg-signal-100/60 p-6">
      <Lock size={20} className="text-signal-600" />
      <h3 className="mt-3 text-sm font-bold text-navy-950">Member-only content</h3>
      <p className="mt-1.5 text-xs leading-relaxed text-ink-500">
        This is the level of detail members join for. Log in to read it, or become a member to
        get access. This is a demo preview: any email logs you in as a sample member.
      </p>
      <form
        className="mt-4 flex flex-col gap-2 sm:flex-row"
        onSubmit={(e) => {
          e.preventDefault()
          if (!email) return
          onUnlock(email)
        }}
      >
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com.au"
          className="flex-1 rounded-xl border border-signal-300 bg-white px-4 py-2.5 text-sm text-navy-950 focus:border-navy-950 focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-xl bg-signal-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-signal-600"
        >
          Log in (demo)
        </button>
      </form>
      <div className="mt-3">
        <Button to="/membership" variant="ghost" withArrow={false} className="text-xs">
          Or become a member
        </Button>
      </div>
    </div>
  )
}

export function AccessGate({
  tier,
  teaser,
  children,
}: {
  tier: AccessTier
  teaser?: ReactNode
  children: ReactNode
}) {
  const { satisfies, verify, login } = useAccess()

  if (satisfies(tier)) {
    return (
      <div>
        {tier !== 'public' && (
          <div className="mb-5 flex items-center gap-2 rounded-lg bg-teal-100 px-3 py-2 text-xs font-semibold text-teal-700">
            <ShieldCheck size={14} />
            {tier === 'member' ? 'Unlocked — member access' : 'Unlocked — email verified'}
          </div>
        )}
        {children}
      </div>
    )
  }

  return (
    <div>
      {teaser}
      <div className="mt-6">
        {tier === 'verified' && <OtpUnlock onUnlock={verify} />}
        {tier === 'member' && <MemberUnlock onUnlock={login} />}
      </div>
    </div>
  )
}
