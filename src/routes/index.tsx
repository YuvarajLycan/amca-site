import { createFileRoute, Link } from '@tanstack/react-router'
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  GraduationCap,
  Megaphone,
  ShieldCheck,
  Users,
} from 'lucide-react'
import { Container } from '../components/Container'
import { Button } from '../components/Button'
import { SectionHeading } from '../components/SectionHeading'
import {
  events,
  impactStats,
  knowledgeResources,
  membershipBenefits,
  newsItems,
  pillars,
  trainingCategories,
} from '../lib/content'

export const Route = createFileRoute('/')({ component: Home })

const pillarIcons = {
  represent: Megaphone,
  train: GraduationCap,
  connect: Users,
}

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 bg-grid-navy pt-28 pb-24 sm:pt-36 sm:pb-32">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-signal-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />
        <Container className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
            The national body for HVAC&amp;R
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold text-white sm:text-6xl">
            AMCA is the Home of HVAC.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">
            We represent Australia&apos;s heating, ventilation, air conditioning and
            refrigeration contractors, train the people who keep it running, and put decades of
            site-level experience behind every code submission we lodge.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button to="/membership">Become a member</Button>
            <Button to="/training" variant="ghost-light" withArrow={false}>
              Browse training courses
            </Button>
          </div>
        </Container>
      </section>

      {/* Impact stats — pulled up over the hero seam */}
      <section className="relative z-10">
        <Container>
          <div className="-mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-ink-200 shadow-card sm:grid-cols-4">
            {impactStats.map((stat) => (
              <div key={stat.label} className="bg-white p-6 sm:p-7">
                <p className="font-display text-3xl font-extrabold text-navy-950 sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-semibold text-ink-900">{stat.label}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-500">{stat.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Three pillars */}
      <section className="pt-20 pb-4 sm:pt-24">
        <Container>
          <SectionHeading
            eyebrow="What AMCA does"
            title="One membership, three jobs done well"
            description="Every AMCA program serves one of three purposes — and each is judged on whether it changes something for a real contractor, not on how it looks in an annual report."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillarIcons[pillar.key]
              return (
                <div
                  key={pillar.key}
                  className="flex flex-col rounded-2xl border border-ink-100 bg-white p-7 shadow-card"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy-950 text-white">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-navy-950">{pillar.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">
                    {pillar.description}
                  </p>
                  <Link
                    to={pillar.cta.to}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-signal-600 hover:text-signal-700"
                  >
                    {pillar.cta.label}
                    <ArrowRight size={15} />
                  </Link>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Training spotlight */}
      <section className="mt-24 bg-navy-900 py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-signal-400">
              Training
            </span>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              The most-visited part of amca.com.au — for good reason.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/65">
              Training draws more visitors than any other part of the site — more than events,
              news and membership combined. It&apos;s run by an RTO built specifically for
              HVAC&amp;R, not a generic training provider that added it to a catalogue.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/training">See the course catalogue</Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {trainingCategories.map((course) => (
              <div
                key={course.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >
                <GraduationCap size={20} className="text-teal-500" />
                <h3 className="mt-4 text-base font-bold text-white">{course.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{course.description}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-white/35">
                  {course.meta}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Knowledge hub */}
      <section className="py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Knowledge hub"
              title="Standards, safety and advocacy — written by people who know the trade"
              description="Most of what AMCA publishes is open to the whole industry, not locked behind a login. The exceptions are clearly marked, and they're the documents worth joining for."
            />
            <Link
              to="/news"
              className="hidden items-center gap-1.5 text-sm font-semibold text-navy-950 hover:text-signal-600 sm:inline-flex"
            >
              View all resources
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {knowledgeResources.map((item) => (
              <div
                key={item.title}
                className="flex flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-card"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wide text-teal-600">
                    {item.category}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${
                      item.access === 'Member resource'
                        ? 'bg-signal-100 text-signal-600'
                        : 'bg-teal-100 text-teal-600'
                    }`}
                  >
                    {item.access}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-bold text-navy-950">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{item.summary}</p>
                <BookOpen size={16} className="mt-4 text-ink-300" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Membership value */}
      <section className="bg-sand-100 py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-signal-600">
              Membership
            </span>
            <h2 className="mt-3 max-w-md text-3xl font-bold text-navy-950 sm:text-4xl">
              What membership actually gets you
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink-500">
              Fees are banded by company size — a five-person outfit and a 200-person firm
              shouldn&apos;t pay the same rate, and they don&apos;t. Tell us your business and
              we&apos;ll tell you the number, upfront.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/membership">See membership types</Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {membershipBenefits.slice(0, 4).map((benefit) => (
              <div key={benefit.title} className="rounded-2xl bg-white p-6 shadow-card">
                <ShieldCheck size={18} className="text-signal-500" />
                <h3 className="mt-3 text-sm font-bold text-navy-950">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{benefit.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* News + events */}
      <section className="py-24">
        <Container className="grid gap-16 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="flex items-end justify-between gap-6">
              <h2 className="text-2xl font-bold text-navy-950">Latest from AMCA</h2>
              <Link
                to="/news"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-950 hover:text-signal-600"
              >
                All news
                <ArrowRight size={15} />
              </Link>
            </div>
            <div className="mt-6 divide-y divide-ink-100 rounded-2xl border border-ink-100 bg-white shadow-card">
              {newsItems.slice(0, 4).map((item) => (
                <Link
                  key={item.slug}
                  to="/news"
                  className="flex flex-col gap-1.5 p-6 transition-colors hover:bg-sand-50 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-teal-600">
                      {item.category}
                    </span>
                    <h3 className="mt-1 text-sm font-bold text-navy-950">{item.title}</h3>
                  </div>
                  <span className="shrink-0 text-xs text-ink-500">{item.date}</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy-950">Upcoming</h2>
            <div className="mt-6 flex flex-col gap-4">
              {events.map((event) => (
                <div
                  key={event.title}
                  className="rounded-2xl border border-ink-100 bg-white p-6 shadow-card"
                >
                  <CalendarDays size={18} className="text-signal-500" />
                  <h3 className="mt-3 text-sm font-bold text-navy-950">{event.title}</h3>
                  <p className="mt-1.5 text-xs text-ink-500">
                    {event.date} · {event.location}
                  </p>
                  <span
                    className={`mt-3 inline-flex rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${
                      event.status === 'Sold out'
                        ? 'bg-signal-100 text-signal-600'
                        : 'bg-teal-100 text-teal-600'
                    }`}
                  >
                    {event.status}
                  </span>
                </div>
              ))}
              <Link
                to="/events"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-950 hover:text-signal-600"
              >
                See all events
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="pb-24">
        <Container>
          <div className="flex flex-col items-start gap-6 rounded-3xl bg-navy-950 bg-grid-navy p-10 sm:flex-row sm:items-center sm:justify-between sm:p-14">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Find out what your business would pay.
              </h2>
              <p className="mt-2 max-w-md text-sm text-white/60">
                One form, one number, no PDF hunting — membership pricing is banded by company
                size and we&apos;ll tell you where you land.
              </p>
            </div>
            <Button to="/membership" className="shrink-0">
              Get your membership fee
            </Button>
          </div>
        </Container>
      </section>
    </div>
  )
}
