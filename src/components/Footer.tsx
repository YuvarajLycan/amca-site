import { Link } from '@tanstack/react-router'
import { Container } from './Container'
import { Logo } from './Logo'

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.11 20.45H3.56V9h3.55v11.45Z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7.6h2.55l.38-2.96h-2.93V8.55c0-.86.24-1.44 1.47-1.44h1.57V4.46A21 21 0 0 0 14.1 4.3c-2.16 0-3.64 1.32-3.64 3.74v2.4H7.9v2.96h2.56V21h3.04Z" />
    </svg>
  )
}

const columns = [
  {
    heading: 'About',
    links: [
      { label: 'Our industry', to: '/about' },
      { label: 'Board & governance', to: '/about' },
      { label: 'BIM-MEP AUS', to: '/about' },
      { label: 'Careers', to: '/about' },
    ],
  },
  {
    heading: 'Membership',
    links: [
      { label: 'Membership types', to: '/membership' },
      { label: 'Find a member', to: '/membership' },
      { label: 'Preferred partners', to: '/about' },
    ],
  },
  {
    heading: 'Advocacy',
    links: [
      { label: 'Submissions', to: '/advocacy' },
      { label: 'Publications', to: '/advocacy' },
    ],
  },
  {
    heading: 'Training',
    links: [
      { label: 'Course catalogue', to: '/training' },
      { label: 'Training calendar', to: '/training' },
      { label: 'Induction card', to: '/training' },
    ],
  },
  {
    heading: 'News',
    links: [
      { label: 'Latest news', to: '/news' },
      { label: 'Events', to: '/events' },
      { label: 'Resources', to: '/resources' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white/70">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1fr_2.4fr]">
        <div className="max-w-sm">
          <Logo tone="light" />
          <p className="mt-5 text-sm leading-relaxed text-white/60">
            AMCA is the national industry body for Australia&apos;s heating, ventilation, air
            conditioning and refrigeration sector — representing contractors, training the
            workforce, and connecting the trade.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="#"
              aria-label="AMCA on LinkedIn"
              className="rounded-full border border-white/15 p-2 hover:border-white/40"
            >
              <LinkedInIcon />
            </a>
            <a
              href="#"
              aria-label="AMCA on Facebook"
              className="rounded-full border border-white/15 p-2 hover:border-white/40"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm text-white/70 hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-4 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            AMCA acknowledges the Traditional Custodians of Country throughout Australia and
            pays respect to Elders past and present.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>&copy; {new Date().getFullYear()} AMCA Australia</span>
            <span>RTO 5139</span>
            <Link to="/contact" className="hover:text-white">
              Contact
            </Link>
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
          </div>
        </Container>
      </div>
    </footer>
  )
}
