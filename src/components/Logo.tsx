import { useTheme } from '../lib/theme'

// Original mark for the "New brand colours" concept — an A built from two
// legs with an upward chevron standing in for the crossbar, so it reads as
// both a monogram (AMCA) and a nod to moving air, without borrowing AMCA's
// real circulating-arrows icon.
function ConceptMark({ isLight }: { isLight: boolean }) {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <rect
        width="30"
        height="30"
        rx="8"
        style={{ fill: isLight ? 'var(--color-signal-500)' : 'var(--color-navy-950)' }}
      />
      <path
        d="M15 6.5 L7.2 23.5 M15 6.5 L22.8 23.5"
        stroke="white"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6 19 L15 14.8 L19.4 19"
        stroke="white"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Logo({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const { theme } = useTheme()
  const isLight = tone === 'light'

  if (theme === 'brand') {
    // The real AMCA Australia mark, cropped from their public member logo
    // pack — colour version for light surfaces, reversed-white version for
    // dark ones.
    return (
      <span className="inline-flex items-center">
        <img
          src={`${import.meta.env.BASE_URL}brand/${isLight ? 'amca-logo-white.png' : 'amca-logo-color.png'}`}
          alt="AMCA Australia"
          className="h-8 w-auto sm:h-9"
        />
      </span>
    )
  }

  return (
    <span className="inline-flex items-center gap-2.5">
      <ConceptMark isLight={isLight} />
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
