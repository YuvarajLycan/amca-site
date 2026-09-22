import type { ReactNode } from 'react'
import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'ghost-light'

const variants: Record<Variant, string> = {
  primary:
    'bg-signal-500 text-white hover:bg-signal-600 shadow-[0_10px_24px_-10px_rgba(217,88,31,0.55)]',
  secondary: 'bg-navy-950 text-white hover:bg-navy-800',
  ghost: 'border border-ink-200 text-navy-950 hover:border-navy-950 bg-transparent',
  'ghost-light': 'border border-white/30 text-white hover:border-white bg-transparent',
}

export function Button({
  to,
  href,
  children,
  variant = 'primary',
  withArrow = true,
  className = '',
}: {
  to?: string
  href?: string
  children: ReactNode
  variant?: Variant
  withArrow?: boolean
  className?: string
}) {
  const classes = `inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors duration-150 ${variants[variant]} ${className}`

  const content = (
    <>
      {children}
      {withArrow && <ArrowRight size={16} strokeWidth={2.5} />}
    </>
  )

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    )
  }

  return (
    <Link to={to ?? '/'} className={classes}>
      {content}
    </Link>
  )
}
