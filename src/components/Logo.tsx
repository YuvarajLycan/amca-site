export function Logo({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const isLight = tone === 'light'
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
        <rect
          width="30"
          height="30"
          rx="8"
          style={{ fill: isLight ? 'var(--color-signal-500)' : 'var(--color-navy-950)' }}
        />
        {/* A monogram — AMCA, not a decorative squiggle */}
        <path
          d="M15 7 L7.5 23 M15 7 L22.5 23 M10.8 17.5 L19.2 17.5"
          stroke="white"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="flex flex-col leading-[1.05]">
        <span
          className={`font-display text-lg font-extrabold tracking-tight ${isLight ? 'text-white' : 'text-navy-950'}`}
        >
          AMCA
        </span>
        <span
          className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${isLight ? 'text-white/60' : 'text-ink-500'}`}
        >
          Home of HVAC
        </span>
      </span>
    </span>
  )
}
