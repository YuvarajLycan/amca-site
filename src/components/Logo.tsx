export function Logo({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const isLight = tone === 'light'
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
        <rect width="30" height="30" rx="8" fill={isLight ? '#F2762E' : '#0A1F3D'} />
        <path
          d="M6 19c1.8 0 1.8-3 3.6-3s1.8 3 3.6 3 1.8-3 3.6-3 1.8 3 3.6 3 1.8-3 3.6-3"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 13c1.8 0 1.8-3 3.6-3s1.8 3 3.6 3 1.8-3 3.6-3 1.8 3 3.6 3 1.8-3 3.6-3"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.55"
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
