import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { Logo } from './Logo'
import { Container } from './Container'
import { primaryNav } from '../lib/content'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-950/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link to="/" onClick={() => setOpen(false)}>
          <Logo tone="light" />
        </Link>

        <nav className="hidden items-center gap-5 xl:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium whitespace-nowrap text-white/75 transition-colors hover:text-white"
              activeProps={{ className: 'text-white' }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <a href="#" className="text-sm font-medium whitespace-nowrap text-white/70 hover:text-white">
            Member login
          </a>
          <Link
            to="/membership"
            className="inline-flex items-center rounded-full bg-signal-500 px-4 py-2 text-sm font-semibold whitespace-nowrap text-white hover:bg-signal-600"
          >
            Become a member
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-white xl:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-white/10 bg-navy-950 xl:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {primaryNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-base font-medium text-white/85 hover:bg-white/5"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-white/10 pt-4">
              <a href="#" className="px-2 text-sm font-medium text-white/70">
                Member login
              </a>
              <Link
                to="/membership"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-full bg-signal-500 px-4 py-2.5 text-sm font-semibold text-white"
              >
                Become a member
              </Link>
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}
