import { createFileRoute } from '@tanstack/react-router'
import { CalendarDays, MapPin } from 'lucide-react'
import { Container } from '../components/Container'
import { Button } from '../components/Button'
import { PageHero, SectionHeading } from '../components/SectionHeading'
import { Why } from '../lib/rationale'
import { events } from '../lib/content'

export const Route = createFileRoute('/events')({ component: Events })

const stateFilters = ['All states', 'VIC', 'SA', 'NSW', 'QLD', 'WA', 'National'] as const

function Events() {
  return (
    <div>
      <PageHero
        eyebrow="Events"
        title="From one national conference to eight state chapters."
        description="AMCA events range from the National Conference to short, local briefings your state chapter runs quarterly. Filter by state to find what's near you."
      />

      <section className="py-20">
        <Container>
          <div className="flex flex-wrap gap-2">
            {stateFilters.map((f, i) => (
              <button
                key={f}
                type="button"
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  i === 0
                    ? 'border-navy-950 bg-navy-950 text-white'
                    : 'border-ink-200 text-ink-700 hover:border-navy-950'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {events.map((event) => (
              <div key={event.title} className="rounded-2xl border border-ink-100 bg-white p-8 shadow-card">
                <div className="flex items-start justify-between gap-4">
                  <CalendarDays size={22} className="text-signal-500" />
                  <span
                    className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${
                      event.status === 'Sold out'
                        ? 'bg-signal-100 text-signal-600'
                        : 'bg-teal-100 text-teal-600'
                    }`}
                  >
                    {event.status}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-navy-950">{event.title}</h3>
                <p className="mt-3 flex items-center gap-2 text-sm text-ink-500">
                  <MapPin size={14} />
                  {event.location}
                </p>
                <p className="mt-1 text-sm font-semibold text-navy-950">{event.date}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink-500">{event.description}</p>
                {event.status === 'Sold out' ? (
                  <Button to="/contact" variant="ghost" withArrow={false} className="mt-6">
                    Join the waitlist
                  </Button>
                ) : (
                  <Button to="/contact" className="mt-6">
                    Register interest
                  </Button>
                )}
              </div>
            ))}
          </div>
          <Why>
            The original proposal treated &quot;National Conference&quot; and &quot;state
            events&quot; as separate nav sections. They&apos;re the same content type at
            different scales, so they live on one page with a state filter — the agency&apos;s
            own later note agreed state events didn&apos;t need their own top-level section.
          </Why>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <SectionHeading
            eyebrow="Why we run events"
            title="An industry you actually know, not just belong to"
            description="Advocacy and training explain what AMCA does. Events are why it feels like an industry rather than a licence you renew every year — the room where a code change gets argued out before it's a submission, and where a technical question gets answered by someone who's hit the same problem."
          />
        </Container>
      </section>
    </div>
  )
}
