import { useState } from 'react'
import { Lightbulb, Palette, RotateCcw, Settings2, X } from 'lucide-react'
import { useTheme } from '../lib/theme'
import { useRationale } from '../lib/rationale'
import { useAccess } from '../lib/access'

export function SiteControls() {
  const [open, setOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { show, setShow } = useRationale()
  const { state, reset } = useAccess()

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3">
      {open && (
        <div className="w-72 rounded-2xl border border-ink-200 bg-white p-5 shadow-lift">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-navy-950">Reviewer controls</h3>
            <button onClick={() => setOpen(false)} aria-label="Close" className="text-ink-400">
              <X size={16} />
            </button>
          </div>
          <p className="mt-1 text-xs leading-relaxed text-ink-500">
            Not part of the live site — for comparing options while you review this concept.
          </p>

          <div className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">
              Colour palette
            </p>
            <div className="mt-2 flex gap-2">
              <button
                onClick={() => setTheme('refined')}
                className={`flex-1 rounded-lg border px-3 py-2 text-xs font-semibold ${
                  theme === 'refined'
                    ? 'border-navy-950 bg-navy-950 text-white'
                    : 'border-ink-200 text-ink-700'
                }`}
              >
                This version
              </button>
              <button
                onClick={() => setTheme('brand')}
                className={`flex-1 rounded-lg border px-3 py-2 text-xs font-semibold ${
                  theme === 'brand'
                    ? 'border-navy-950 bg-navy-950 text-white'
                    : 'border-ink-200 text-ink-700'
                }`}
              >
                AMCA&apos;s colours
              </button>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">
                Design notes
              </p>
              <p className="mt-0.5 text-[11px] text-ink-500">Show why each section exists</p>
            </div>
            <button
              onClick={() => setShow(!show)}
              className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
                show ? 'bg-signal-500' : 'bg-ink-200'
              }`}
              aria-pressed={show}
            >
              <span
                className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                  show ? 'translate-x-5' : 'translate-x-0.5'
                }`}
              />
            </button>
          </div>

          <div className="mt-5 border-t border-ink-100 pt-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">
              Preview access
            </p>
            <p className="mt-1 text-[11px] text-ink-500">
              {state.isMember
                ? `Viewing as a member (${state.email})`
                : state.verified
                  ? `Viewing as a verified reader (${state.email})`
                  : 'Viewing as a logged-out visitor'}
            </p>
            {(state.verified || state.isMember) && (
              <button
                onClick={reset}
                className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-navy-950 underline"
              >
                <RotateCcw size={12} />
                Reset to logged out
              </button>
            )}
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-full bg-navy-950 px-4 py-3 text-sm font-semibold text-white shadow-lift hover:bg-navy-800"
      >
        {open ? <Settings2 size={16} /> : <Palette size={16} />}
        {!open && 'Review options'}
        {show && !open && <Lightbulb size={14} className="text-amber-400" />}
      </button>
    </div>
  )
}
